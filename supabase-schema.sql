-- ============================================================
-- RUST PIRATA — Schema del foro (pegar en Supabase SQL Editor)
-- ============================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT UNIQUE NOT NULL CHECK (char_length(username) BETWEEN 3 AND 20),
  password_hash TEXT NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de posts (con parent_id para replies)
CREATE TABLE IF NOT EXISTS posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  username TEXT NOT NULL,
  content TEXT NOT NULL CHECK (char_length(content) BETWEEN 1 AND 500),
  parent_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  is_reply BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Políticas: cualquiera puede leer
CREATE POLICY "Anyone can read posts" ON posts FOR SELECT USING (true);
CREATE POLICY "Anyone can read users" ON users FOR SELECT USING (true);

-- Función de registro
CREATE OR REPLACE FUNCTION register_user(p_username TEXT, p_password TEXT)
RETURNS JSON AS $$
DECLARE
  existing RECORD;
  new_user RECORD;
BEGIN
  SELECT id INTO existing FROM users WHERE LOWER(username) = LOWER(p_username);
  IF existing IS NOT NULL THEN
    RETURN json_build_object('success', false, 'error', 'Ese usuario ya existe');
  END IF;
  INSERT INTO users (username, password_hash, is_admin)
  VALUES (p_username, crypt(p_password, gen_salt('bf')))
  RETURNING id, username, is_admin INTO new_user;
  RETURN json_build_object('success', true, 'user', json_build_object('id', new_user.id, 'username', new_user.username, 'isAdmin', new_user.is_admin));
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Función de login
CREATE OR REPLACE FUNCTION login_user(p_username TEXT, p_password TEXT)
RETURNS JSON AS $$
DECLARE
  found RECORD;
BEGIN
  SELECT id, username, is_admin, password_hash INTO found FROM users WHERE LOWER(username) = LOWER(p_username);
  IF found IS NULL THEN
    RETURN json_build_object('success', false, 'error', 'Usuario o contrasena incorrectos');
  END IF;
  IF found.password_hash != crypt(p_password, found.password_hash) THEN
    RETURN json_build_object('success', false, 'error', 'Usuario o contrasena incorrectos');
  END IF;
  RETURN json_build_object('success', true, 'user', json_build_object('id', found.id, 'username', found.username, 'isAdmin', found.is_admin));
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Función crear post (con validación anti-imágenes)
CREATE OR REPLACE FUNCTION create_post(p_user_id UUID, p_username TEXT, p_content TEXT, p_parent_id UUID)
RETURNS JSON AS $$
DECLARE
  img_pattern TEXT := '\.(png|jpg|jpeg|gif|webp|svg|bmp|ico)(\?|$)';
  new_post RECORD;
BEGIN
  IF char_length(p_content) = 0 OR char_length(p_content) > 500 THEN
    RETURN json_build_object('success', false, 'error', 'El post debe tener entre 1 y 500 caracteres');
  END IF;
  IF p_content ~* img_pattern THEN
    RETURN json_build_object('success', false, 'error', 'No se permiten imagenes. Solo texto.');
  END IF;
  INSERT INTO posts (user_id, username, content, parent_id, is_reply)
  VALUES (p_user_id, p_username, p_content, p_parent_id, p_parent_id IS NOT NULL)
  RETURNING id, user_id, username, content, parent_id, is_reply, created_at INTO new_post;
  RETURN json_build_object('success', true, 'post', json_build_object('id', new_post.id, 'userId', new_post.user_id, 'username', new_post.username, 'content', new_post.content, 'parentId', new_post.parent_id, 'isReply', new_post.is_reply, 'createdAt', new_post.created_at));
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Función eliminar post (admin borra cualquiera, usuario solo los suyos)
CREATE OR REPLACE FUNCTION delete_post(p_user_id UUID, p_post_id UUID)
RETURNS JSON AS $$
DECLARE
  found RECORD;
  is_admin BOOLEAN;
BEGIN
  SELECT is_admin INTO is_admin FROM users WHERE id = p_user_id;
  SELECT user_id INTO found FROM posts WHERE id = p_post_id;
  IF NOT FOUND THEN
    RETURN json_build_object('success', false, 'error', 'Post no encontrado');
  END IF;
  IF is_admin IS NOT TRUE AND found.user_id != p_user_id THEN
    RETURN json_build_object('success', false, 'error', 'No tenes permiso');
  END IF;
  DELETE FROM posts WHERE id = p_post_id;
  RETURN json_build_object('success', true);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Crear admin ParaguayRAIDER
INSERT INTO users (username, password_hash, is_admin)
SELECT 'ParaguayRAIDER', crypt('OLDSCHOOL2055', gen_salt('bf')), TRUE
WHERE NOT EXISTS (SELECT 1 FROM users WHERE LOWER(username) = 'paraguayraider');
