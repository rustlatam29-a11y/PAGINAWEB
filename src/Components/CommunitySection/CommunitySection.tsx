import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../Context/AuthContext";
import {
  getFeedPosts,
  createPost as doCreatePost,
  deletePost as doDeletePost,
  formatTimeAgo,
  type Post,
} from "../../lib/forum";
import {
  MessageSquare,
  Send,
  Trash2,
  LogOut,
  User as UserIcon,
  Shield,
  Reply,
  Loader2,
} from "lucide-react";

const MAX_CHARS = 500;

const CommunitySection: React.FC = () => {
  const { user, login, register, logout } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loadingFeed, setLoadingFeed] = useState(true);
  const [posting, setPosting] = useState(false);

  // Form state
  const [mode, setMode] = useState<"login" | "register">("login");
  const [formUser, setFormUser] = useState("");
  const [formPass, setFormPass] = useState("");
  const [formPass2, setFormPass2] = useState("");
  const [formError, setFormError] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  // Reply state
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const refreshPosts = useCallback(async () => {
    setLoadingFeed(true);
    const data = await getFeedPosts();
    setPosts(data);
    setLoadingFeed(false);
  }, []);

  useEffect(() => {
    refreshPosts();
    const interval = setInterval(refreshPosts, 15000);
    return () => clearInterval(interval);
  }, [refreshPosts]);

  useEffect(() => {
    if (error || successMsg) {
      const t = setTimeout(() => {
        setError("");
        setSuccessMsg("");
      }, 3000);
      return () => clearTimeout(t);
    }
  }, [error, successMsg]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!formUser.trim() || !formPass) {
      setFormError("Completa todos los campos");
      return;
    }

    if (mode === "register" && formPass !== formPass2) {
      setFormError("Las contrasenas no coinciden");
      return;
    }

    setFormLoading(true);
    try {
      const result =
        mode === "login"
          ? await login(formUser, formPass)
          : await register(formUser, formPass);

      if (!result.success) {
        setFormError(result.error || "Error desconocido");
      } else {
        setFormUser("");
        setFormPass("");
        setFormPass2("");
        setFormError("");
        setSuccessMsg(mode === "login" ? "Sesion iniciada!" : "Cuenta creada!");
        refreshPosts();
      }
    } catch {
      setFormError("Error al procesar la solicitud");
    } finally {
      setFormLoading(false);
    }
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!user) return;

    setPosting(true);
    try {
      const result = await doCreatePost(user, content);
      if (!result.success) {
        setError(result.error || "Error al publicar");
      } else {
        setContent("");
        setSuccessMsg("Publicado!");
        refreshPosts();
      }
    } catch {
      setError("Error de conexion");
    } finally {
      setPosting(false);
    }
  };

  const handleReply = async (parentId: string) => {
    setError("");
    if (!user) return;
    if (!replyContent.trim()) {
      setError("La respuesta no puede estar vacia");
      return;
    }

    setPosting(true);
    try {
      const result = await doCreatePost(user, replyContent, parentId);
      if (!result.success) {
        setError(result.error || "Error al responder");
      } else {
        setReplyContent("");
        setReplyingTo(null);
        setSuccessMsg("Respuesta publicada!");
        refreshPosts();
      }
    } catch {
      setError("Error de conexion");
    } finally {
      setPosting(false);
    }
  };

  const handleDeletePost = async (postId: string) => {
    if (!user) return;
    if (!confirm("¿Eliminar este mensaje?")) return;

    try {
      const result = await doDeletePost(user, postId);
      if (!result.success) {
        setError(result.error || "Error al eliminar");
      } else {
        setSuccessMsg("Mensaje eliminado");
        refreshPosts();
      }
    } catch {
      setError("Error de conexion");
    }
  };

  const handleLogout = () => {
    logout();
    setSuccessMsg("Sesion cerrada");
  };

  const remainingChars = MAX_CHARS - content.length;
  const inputClass =
    "w-full bg-black/40 border border-white/10 focus:border-red-500/50 text-white px-4 py-3 rounded-lg outline-none transition-colors rp-ui placeholder:text-gray-600 text-sm";

  // === RENDER POST CARD (recursivo para replies) ===
  const renderPost = (post: Post, isReply = false) => (
    <div
      key={post.id}
      className={`rp-card rp-hud overflow-hidden p-4 sm:p-5 group ${isReply ? "ml-4 sm:ml-8 border-l-2 border-red-500/20" : ""}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          {/* Avatar */}
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
              post.username === "ParaguayRAIDER"
                ? "bg-red-500/20 border border-red-500/40"
                : "bg-white/5 border border-white/10"
            }`}
          >
            <span className="text-[10px] font-bold rp-mono text-gray-400">
              {post.username.substring(0, 2).toUpperCase()}
            </span>
          </div>

          {/* Contenido */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-white font-bold text-sm rp-ui">{post.username}</span>
              {post.username === "ParaguayRAIDER" && (
                <span className="rp-mono text-[8px] text-red-500 font-bold tracking-widest uppercase bg-red-500/10 px-1.5 py-0.5 rounded">
                  ADMIN
                </span>
              )}
              <span className="text-gray-600 text-xs rp-mono">{formatTimeAgo(post.createdAt)}</span>
            </div>
            <p className="text-gray-300 text-sm rp-ui break-words whitespace-pre-wrap">{post.content}</p>

            {/* Botones de acción */}
            {user && (
              <div className="flex items-center gap-3 mt-2">
                {!isReply && (
                  <button
                    onClick={() => {
                      setReplyingTo(replyingTo === post.id ? null : post.id);
                      setReplyContent("");
                    }}
                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-400 transition-colors rp-ui"
                  >
                    <Reply className="w-3 h-3" />
                    Responder
                  </button>
                )}
                {(user.isAdmin || post.userId === user.id) && (
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-400 transition-colors rp-ui opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 className="w-3 h-3" />
                    Eliminar
                  </button>
                )}
              </div>
            )}

            {/* Caja de respuesta */}
            {replyingTo === post.id && user && (
              <div className="mt-3 flex gap-2">
                <input
                  type="text"
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="Escribi tu respuesta..."
                  maxLength={500}
                  className="flex-1 bg-black/40 border border-white/10 focus:border-red-500/50 text-white px-3 py-2 rounded-lg outline-none text-sm rp-ui placeholder:text-gray-600"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleReply(post.id);
                  }}
                />
                <button
                  onClick={() => handleReply(post.id)}
                  disabled={!replyContent.trim() || posting}
                  className="px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all disabled:opacity-30"
                >
                  <Send className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setReplyingTo(null);
                    setReplyContent("");
                  }}
                  className="px-3 py-2 rounded-lg bg-white/5 text-gray-400 text-xs font-bold hover:bg-white/10"
                >
                  Cancelar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Renderizar replies recursivamente */}
      {post.replies && post.replies.length > 0 && (
        <div className="mt-3 space-y-2">
          {post.replies.map((reply) => renderPost(reply, true))}
        </div>
      )}
    </div>
  );

  return (
    <section
      id="comunidad"
      className="relative py-24 bg-[#050505] border-t border-white/5 rp-noise"
      style={{ contain: "layout style" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="rp-mono text-red-500 text-xs font-bold tracking-[0.22em] uppercase rp-divider">
            Comunidad
          </span>
          <h2 className="rp-display text-3xl sm:text-4xl lg:text-6xl font-bold text-white mt-4 mb-4 rp-title-glow">
            FORO RUST PIRATA
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto rp-ui">
            Unite a la comunidad mas grande de Rust pirata en LATAM. Habla con otros jugadores, responde preguntas y mantente al dia.
          </p>
        </div>

        {/* Mensajes */}
        {error && (
          <div className="mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm rp-ui text-center">
            {error}
          </div>
        )}
        {successMsg && (
          <div className="mb-4 px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm rp-ui text-center">
            {successMsg}
          </div>
        )}

        {/* === NO LOGUEADO: formulario login/register (arriba) === */}
        {!user && (
          <div className="max-w-md mx-auto mb-10">
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => { setMode("login"); setFormError(""); }}
                className={`flex-1 py-3 rounded-lg font-bold text-sm tracking-wide transition-all rp-ui ${mode === "login" ? "bg-red-600 text-white" : "bg-white/5 text-gray-400 border border-white/10"}`}
              >
                Iniciar Sesion
              </button>
              <button
                onClick={() => { setMode("register"); setFormError(""); }}
                className={`flex-1 py-3 rounded-lg font-bold text-sm tracking-wide transition-all rp-ui ${mode === "register" ? "bg-red-600 text-white" : "bg-white/5 text-gray-400 border border-white/10"}`}
              >
                Registrarse
              </button>
            </div>

            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <label className="block text-gray-500 text-xs font-bold tracking-wider uppercase mb-2 rp-mono">Usuario</label>
                <input type="text" value={formUser} onChange={(e) => setFormUser(e.target.value)} placeholder="Tu nickname" maxLength={20} className={inputClass} autoComplete="username" />
              </div>
              <div>
                <label className="block text-gray-500 text-xs font-bold tracking-wider uppercase mb-2 rp-mono">Contrasena</label>
                <input type="password" value={formPass} onChange={(e) => setFormPass(e.target.value)} placeholder="Tu contrasena" maxLength={100} className={inputClass} autoComplete={mode === "login" ? "current-password" : "new-password"} />
              </div>
              {mode === "register" && (
                <div>
                  <label className="block text-gray-500 text-xs font-bold tracking-wider uppercase mb-2 rp-mono">Confirmar contrasena</label>
                  <input type="password" value={formPass2} onChange={(e) => setFormPass2(e.target.value)} placeholder="Repetir contrasena" maxLength={100} className={inputClass} autoComplete="new-password" />
                </div>
              )}
              {formError && <p className="text-red-400 text-sm rp-ui text-center">{formError}</p>}
              <button type="submit" disabled={formLoading} className="w-full py-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase transition-all rp-ui disabled:opacity-50 flex items-center justify-center gap-2">
                {formLoading ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Procesando...</>
                ) : mode === "login" ? (
                  <><UserIcon className="w-4 h-4" /> Entrar</>
                ) : (
                  <><UserIcon className="w-4 h-4" /> Crear cuenta</>
                )}
              </button>
            </form>
            <p className="text-center text-gray-600 text-xs mt-4 rp-ui">Solo texto. No se permiten imagenes. Max 500 caracteres por mensaje.</p>
          </div>
        )}

        {/* === LOGUEADO: barra + crear post (arriba) === */}
        {user && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/8">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${user.isAdmin ? "bg-red-500/20 border border-red-500/40" : "bg-white/5 border border-white/10"}`}>
                  {user.isAdmin ? <Shield className="w-5 h-5 text-red-500" /> : <UserIcon className="w-5 h-5 text-gray-400" />}
                </div>
                <div>
                  <p className="text-white font-bold text-sm rp-ui">{user.username}</p>
                  <p className="text-gray-500 text-xs rp-mono">{user.isAdmin ? "ADMINISTRADOR" : "Miembro"}</p>
                </div>
              </div>
              <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 text-xs font-bold tracking-wider uppercase transition-all rp-ui">
                <LogOut className="w-4 h-4" /> Salir
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="mb-4">
              <div className="relative">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Escribi algo para la comunidad... (solo texto, sin imagenes)"
                  maxLength={MAX_CHARS}
                  rows={3}
                  className="w-full bg-black/40 border border-white/10 focus:border-red-500/50 text-white px-4 py-3 rounded-lg outline-none transition-colors rp-ui placeholder:text-gray-600 text-sm resize-none"
                />
                <div className="absolute bottom-3 right-3 text-xs rp-mono">
                  <span className={remainingChars < 50 ? "text-red-400" : "text-gray-600"}>{remainingChars}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-gray-600 text-xs rp-ui">Solo texto. No imagenes. Max {MAX_CHARS} caracteres.</p>
                <button type="submit" disabled={!content.trim() || content.length > MAX_CHARS || posting} className="flex items-center gap-2 px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase transition-all rp-ui disabled:opacity-30">
                  {posting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  Publicar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* === FEED VISIBLE PARA TODOS (logueados y no logueados) debajo del formulario === */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="w-4 h-4 text-red-500" />
            <h3 className="rp-display text-lg font-bold text-white rp-ui">
              {loadingFeed ? "Cargando..." : posts.length > 0 ? `${posts.length} ${posts.length === 1 ? "mensaje" : "mensajes"}` : "Sin mensajes todavia"}
            </h3>
          </div>

          {loadingFeed && (
            <div className="text-center py-12">
              <Loader2 className="w-6 h-6 text-red-500 animate-spin mx-auto" />
            </div>
          )}

          {!loadingFeed && posts.length === 0 && (
            <div className="text-center py-12 px-6 rounded-xl border border-dashed border-white/8">
              <p className="text-gray-600 text-sm rp-ui">No hay mensajes todavia. ¡Sos el primero en escribir!</p>
            </div>
          )}

          {!loadingFeed && posts.map((post) => renderPost(post))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
