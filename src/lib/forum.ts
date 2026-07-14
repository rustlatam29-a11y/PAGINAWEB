// ============================================================
// forum.ts — Sistema de foro 100% REAL con Supabase
// Auth + Posts + Replies + Seguridad anti-ataque
// SOLO TEXTO — sin imágenes
// ============================================================

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://tawkydqcdjpuqoxspvyc.supabase.co";
const SUPABASE_KEY = "sb_publishable_dcX1k3YHi8et3ELc_TfBkA_gTaDxZxN";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false },
});

const STORAGE_SESSION = "rust-pirata-session";
const RATE_LIMIT_KEY = "rust-pirata-ratelimit";

// ============================================================
// TIPOS
// ============================================================

export interface SessionUser {
  id: string;
  username: string;
  isAdmin: boolean;
}

export interface Post {
  id: string;
  userId: string;
  username: string;
  content: string;
  parentId: string | null;
  isReply: boolean;
  createdAt: string;
  replies?: Post[];
}

// ============================================================
// SANITIZACIÓN ANTI-XSS
// ============================================================

function sanitizeText(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ============================================================
// RATE LIMITING — Anti-spam
// ============================================================

function checkRateLimit(action: string, maxCount: number, windowMs: number): boolean {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    const limits = raw ? JSON.parse(raw) : {};
    const now = Date.now();
    const key = `${action}-${Math.floor(now / windowMs)}`;
    if (limits[key] && limits[key] >= maxCount) return false;
    limits[key] = (limits[key] || 0) + 1;
    // Limpiar entradas viejas
    Object.keys(limits).forEach((k) => {
      const parts = k.split("-");
      const window = parseInt(parts[parts.length - 1]);
      if (now - window * windowMs > windowMs * 2) delete limits[k];
    });
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(limits));
    return true;
  } catch {
    return true;
  }
}

// ============================================================
// SESSION MANAGEMENT
// ============================================================

export function getSession(): SessionUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_SESSION);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveSession(user: SessionUser): void {
  localStorage.setItem(STORAGE_SESSION, JSON.stringify(user));
}

export function logout(): void {
  localStorage.removeItem(STORAGE_SESSION);
}

// ============================================================
// AUTH — Registro y Login (via Supabase RPC)
// ============================================================

export async function register(
  username: string,
  password: string
): Promise<{ success: boolean; error?: string; user?: SessionUser }> {
  // Validaciones frontend
  if (!username || username.trim().length < 3) {
    return { success: false, error: "El usuario debe tener al menos 3 caracteres" };
  }
  if (username.trim().length > 20) {
    return { success: false, error: "Maximo 20 caracteres" };
  }
  if (!/^[a-zA-Z0-9_áéíóúüñçàâêôãõ]+$/i.test(username.trim())) {
    return { success: false, error: "Solo letras, numeros y guion bajo" };
  }
  if (!password || password.length < 4) {
    return { success: false, error: "Contrasena minimo 4 caracteres" };
  }

  // Rate limit: max 3 registros por hora
  if (!checkRateLimit("register", 3, 3600000)) {
    return { success: false, error: "Demasiados intentos. Espera 1 hora." };
  }

  try {
    const { data, error } = await supabase.rpc("register_user", {
      p_username: username.trim(),
      p_password: password,
    });

    if (error) {
      return { success: false, error: "Error del servidor" };
    }

    const result = typeof data === "string" ? JSON.parse(data) : data;

    if (!result.success) {
      return { success: false, error: result.error };
    }

    const user: SessionUser = {
      id: result.user.id,
      username: result.user.username,
      isAdmin: result.user.isAdmin,
    };
    saveSession(user);
    return { success: true, user };
  } catch {
    return { success: false, error: "Error de conexion" };
  }
}

export async function login(
  username: string,
  password: string
): Promise<{ success: boolean; error?: string; user?: SessionUser }> {
  if (!username || !password) {
    return { success: false, error: "Usuario y contrasena requeridos" };
  }

  // Rate limit: max 10 logins por 10 minutos
  if (!checkRateLimit("login", 10, 600000)) {
    return { success: false, error: "Demasiados intentos. Espera 10 minutos." };
  }

  try {
    const { data, error } = await supabase.rpc("login_user", {
      p_username: username.trim(),
      p_password: password,
    });

    if (error) {
      return { success: false, error: "Error del servidor" };
    }

    const result = typeof data === "string" ? JSON.parse(data) : data;

    if (!result.success) {
      return { success: false, error: result.error };
    }

    const user: SessionUser = {
      id: result.user.id,
      username: result.user.username,
      isAdmin: result.user.isAdmin,
    };
    saveSession(user);
    return { success: true, user };
  } catch {
    return { success: false, error: "Error de conexion" };
  }
}

// ============================================================
// POSTS — Crear, Listar, Eliminar
// ============================================================

export async function getFeedPosts(): Promise<Post[]> {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100);

    if (error || !data) return [];

    const allPosts: Post[] = data.map((p: Record<string, unknown>) => ({
      id: p.id as string,
      userId: p.user_id as string,
      username: p.username as string,
      content: sanitizeText(p.content as string),
      parentId: p.parent_id as string | null,
      isReply: p.is_reply as boolean,
      createdAt: p.created_at as string,
    }));

    // Separar posts principales y replies
    const mainPosts = allPosts.filter((p) => !p.isReply);
    const replies = allPosts.filter((p) => p.isReply);

    // Anidar replies en sus posts padres
    mainPosts.forEach((post) => {
      post.replies = replies
        .filter((r) => r.parentId === post.id)
        .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    });

    return mainPosts;
  } catch {
    return [];
  }
}

export async function createPost(
  user: SessionUser,
  content: string,
  parentId?: string | null
): Promise<{ success: boolean; error?: string; post?: Post }> {
  // Validaciones frontend
  if (!content || content.trim().length === 0) {
    return { success: false, error: "El post no puede estar vacio" };
  }
  if (content.length > 500) {
    return { success: false, error: "Maximo 500 caracteres" };
  }

  // Bloquear URLs de imágenes (capa frontend)
  const imageUrlPattern = /\.(png|jpg|jpeg|gif|webp|svg|bmp|ico)(\?|$)/i;
  if (imageUrlPattern.test(content)) {
    return { success: false, error: "No se permiten imagenes. Solo texto." };
  }

  // Rate limit: max 1 post cada 30 segundos
  if (!checkRateLimit("post", 1, 30000)) {
    return { success: false, error: "Espera 30 segundos antes de publicar otro mensaje." };
  }

  try {
    const { data, error } = await supabase.rpc("create_post", {
      p_user_id: user.id,
      p_username: user.username,
      p_content: content.trim(),
      p_parent_id: parentId || null,
    });

    if (error) {
      return { success: false, error: "Error del servidor" };
    }

    const result = typeof data === "string" ? JSON.parse(data) : data;

    if (!result.success) {
      return { success: false, error: result.error };
    }

    const post: Post = {
      id: result.post.id,
      userId: result.post.userId,
      username: result.post.username,
      content: sanitizeText(result.post.content),
      parentId: result.post.parentId,
      isReply: result.post.isReply,
      createdAt: result.post.createdAt,
    };

    return { success: true, post };
  } catch {
    return { success: false, error: "Error de conexion" };
  }
}

export async function deletePost(
  user: SessionUser,
  postId: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const { data, error } = await supabase.rpc("delete_post", {
      p_user_id: user.id,
      p_post_id: postId,
    });

    if (error) {
      return { success: false, error: "Error del servidor" };
    }

    const result = typeof data === "string" ? JSON.parse(data) : data;

    if (!result.success) {
      return { success: false, error: result.error };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Error de conexion" };
  }
}

// ============================================================
// HELPERS
// ============================================================

export function formatTimeAgo(isoDate: string): string {
  const now = Date.now();
  const then = new Date(isoDate).getTime();
  const diff = Math.floor((now - then) / 1000);

  if (diff < 60) return "hace un momento";
  if (diff < 3600) return `hace ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `hace ${Math.floor(diff / 3600)} h`;
  if (diff < 604800) return `hace ${Math.floor(diff / 86400)} d`;
  const date = new Date(isoDate);
  return date.toLocaleDateString("es-AR", { day: "numeric", month: "short" });
}
