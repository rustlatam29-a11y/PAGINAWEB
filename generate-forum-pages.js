import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUPABASE_URL = "https://tawkydqcdjpuqoxspvyc.supabase.co";
const SUPABASE_KEY = "sb_publishable_dcX1k3YHi8et3ELc_TfBkA_gTaDxZxN";

const distDir = path.join(__dirname, 'dist');
const SITE = "https://latamrust.online";
const today = new Date().toISOString().split('T')[0];

function escHtml(t) {
  return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");
}

function createSlug(content, id) {
  const prefix = content.toLowerCase().replace(/[^a-z0-9\s]/g,'').trim().replace(/\s+/g,'-').substring(0,60).replace(/-+$/,'');
  if (!prefix || prefix.length < 3) return "post-"+id.substring(0,8);
  return prefix+"-"+id.substring(0,8);
}

function getHeadline(content) {
  const clean = content.replace(/<[^>]*>/g,'').trim();
  return clean.substring(0,110)+(clean.length>110?'...':'');
}

function fmtDate(iso) {
  const d=new Date(iso);
  return d.toLocaleDateString('es-ES',{year:'numeric',month:'long',day:'numeric',hour:'2-digit',minute:'2-digit'});
}

function timeAgo(iso) {
  const diff=Date.now()-new Date(iso).getTime();
  const mins=Math.floor(diff/60000);
  if(mins<1) return 'hace un momento';
  if(mins<60) return "hace "+mins+" min";
  const hrs=Math.floor(mins/60);
  if(hrs<24) return "hace "+hrs+" h";
  const days=Math.floor(hrs/24);
  if(days<7) return "hace "+days+" d";
  return fmtDate(iso);
}
const COMMON_CSS = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}body{font-family:'Segoe UI',system-ui,-apple-system,sans-serif;background:#0a0a0a;color:#f3f4f6;line-height:1.6;min-height:100vh}a{color:#ef4444;text-decoration:none;transition:color .2s}a:hover{color:#dc2626;text-decoration:underline}.container{max-width:860px;margin:0 auto;padding:24px 20px}.header{display:flex;align-items:center;gap:16px;padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.06);margin-bottom:32px}.header img{width:42px;height:42px;border-radius:8px}.header h1{font-size:1.2rem;color:#fff}.header h1 small{display:block;font-size:.75rem;color:#6b7280;font-weight:400}.breadcrumb{display:flex;flex-wrap:wrap;gap:6px;font-size:.85rem;color:#6b7280;margin-bottom:24px;list-style:none}.breadcrumb li+li::before{content:"/";margin-right:6px;color:#374151}.breadcrumb a{color:#9ca3af}.breadcrumb a:hover{color:#ef4444}.post-card{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:24px;margin-bottom:24px}.post-card .meta{display:flex;align-items:center;gap:10px;margin-bottom:12px;font-size:.85rem}.post-card .meta .avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#dc2626,#991b1b);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.9rem;color:#fff;flex-shrink:0}.post-card .meta .username{font-weight:600;color:#f3f4f6}.post-card .meta .date{color:#6b7280}.post-card .meta .admin-badge{background:rgba(220,38,38,0.15);color:#ef4444;font-size:.7rem;padding:2px 8px;border-radius:4px;font-weight:600;text-transform:uppercase}.post-card .content{color:#d1d5db;line-height:1.7;word-break:break-word}.reply{border-left:2px solid rgba(255,255,255,0.08);margin-left:16px;padding-left:16px;margin-top:16px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.04)}.reply .meta{margin-bottom:6px;font-size:.8rem}.reply .meta .avatar{width:28px;height:28px;font-size:.75rem}.reply .content{font-size:.9rem;color:#9ca3af}.post-footer{margin-top:24px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.06);text-align:center}.post-footer a{display:inline-block;margin:0 8px}.listing-post{padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.04)}.listing-post:last-child{border-bottom:none}.listing-post h3{font-size:1rem;margin-bottom:4px}.listing-post h3 a{color:#f3f4f6}.listing-post h3 a:hover{color:#ef4444}.listing-post .meta{font-size:.8rem;color:#6b7280}.footer{text-align:center;padding:32px 0;color:#6b7280;font-size:.85rem;border-top:1px solid rgba(255,255,255,0.06);margin-top:48px}.footer a{color:#9ca3af}.footer a:hover{color:#ef4444}.empty{text-align:center;padding:60px 20px;color:#6b7280}.empty h2{color:#f3f4f6;margin-bottom:12px}`;

function genPostHtml(post, replies) {
  const slug = createSlug(post.content, post.id);
  const headline = escHtml(getHeadline(post.content));
  const content = escHtml(post.content);
  const username = escHtml(post.username);
  const date = fmtDate(post.created_at);
  const ago = timeAgo(post.created_at);
  const replyCount = replies ? replies.length : 0;
  const avatarLetter = username.charAt(0).toUpperCase();
  const isAdmin = post.user_id && post.username && post.user_id === post.user_id; // we check later
  const postUrl = SITE+"/foro/"+slug+"/";

  const repliesHtml = replies && replies.length > 0
    ? replies.map(r => {
        const rName = escHtml(r.username);
        const rContent = escHtml(r.content);
        const rDate = timeAgo(r.created_at);
        const rAvatar = rName.charAt(0).toUpperCase();
        return `<div class="reply"><div class="meta"><div class="avatar">${rAvatar}</div><span class="username">${rName}</span><span class="date">${rDate}</span></div><div class="content">${rContent}</div></div>`;
      }).join("\n")
    : '<p style="color:#6b7280;font-style:italic;font-size:0.9rem;">Sin respuestas a—n.</p>';

  // DiscussionForumPosting schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "DiscussionForumPosting",
    "headline": headline,
    "text": post.content,
    "author": { "@type": "Person", "name": post.username },
    "datePublished": post.created_at,
    "url": postUrl,
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/CommentAction",
      "userInteractionCount": replyCount
    }
  };
  if (replies && replies.length > 0) {
    schema.comment = replies.map(r => ({
      "@type": "Comment",
      "text": r.content,
      "author": { "@type": "Person", "name": r.username },
      "datePublished": r.created_at
    }));
  }

  const schemaStr = JSON.stringify(schema, null, 2);
  const desc = "Publicacion en el foro de Rust Pirata por "+post.username+": "+escHtml(post.content.substring(0,160));

  return '<!DOCTYPE html>\n<html lang="es">\n<head>\n<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<title>'+headline+' - Foro Rust Pirata | RUST OLD SCHOOL</title>\n<meta name="description" content="'+desc+'" />\n<meta name="robots" content="index, follow" />\n<link rel="canonical" href="'+postUrl+'" />\n<meta property="og:title" content="'+headline+' - Foro Rust Pirata" />\n<meta property="og:description" content="'+desc+'" />\n<meta property="og:url" content="'+postUrl+'" />\n<meta property="og:type" content="article" />\n<meta property="og:site_name" content="Rust Pirata" />\n<meta property="og:locale" content="es_ES" />\n<meta name="twitter:card" content="summary" />\n<meta name="twitter:title" content="'+headline+' - Foro Rust Pirata" />\n<meta name="twitter:description" content="'+desc+'" />\n<script type="application/ld+json">'+schemaStr+'</script>\n<style>'+COMMON_CSS+'</style>\n</head>\n<body>\n<div class="container">\n<header class="header">\n<a href="/"><img src="/rust-old-school-logo.webp" alt="Rust Pirata" width="42" height="42" /></a>\n<div><h1><a href="/" style="color:#fff;text-decoration:none;">Rust Pirata</a><small>Servidor RUST OLD SCHOOL 2275</small></h1></div>\n</header>\n<nav aria-label="Breadcrumb"><ol class="breadcrumb"><li><a href="/">Inicio</a></li><li><a href="/foro/">Foro</a></li><li aria-current="page">'+headline+'</li></ol></nav>\n<article class="post-card">\n<div class="meta"><div class="avatar">'+avatarLetter+'</div><span class="username">'+username+'</span>'+(post.is_admin ? '<span class="admin-badge">Admin</span>' : '')+'<span class="date">'+ago+'</span></div>\n<div class="content">'+content+'</div>\n</article>\n<h2 style="font-size:1rem;color:#9ca3af;margin-bottom:12px;">'+replyCount+' '+(replyCount===1?'Respuesta':'Respuestas')+'</h2>\n'+repliesHtml+'\n<div class="post-footer">\n<a href="/">\u2190 Volver al inicio</a>\n<a href="/foro/">Ver todos los posts del foro</a>\n<a href="https://discord.gg/7Vz4YBamFG" target="_blank" rel="noopener">Discord</a>\n</div>\n</div>\n<footer class="footer">\n<p>&copy; 2026 Rust Pirata 2275 OldRecoil — RUST OLD SCHOOL</p>\n<nav style="margin-top:8px;"><a href="/">Inicio</a> | <a href="/foro/">Foro</a> | <a href="/descargar-rust-pirata/">Descargar</a></nav>\n</footer>\n</body>\n</html>';
}

function genListingHtml(posts) {
  const items = posts.map(p => {
    const slug = createSlug(p.content, p.id);
    const headline = escHtml(getHeadline(p.content));
    const name = escHtml(p.username);
    const ago = timeAgo(p.created_at);
    const rc = p._replyCount || 0;
    return '<div class="listing-post"><h3><a href="/foro/'+slug+'/">'+headline+'</a></h3><div class="meta">por '+name+' — '+ago+' — '+rc+' '+(rc===1?'respuesta':'respuestas')+'</div></div>';
  }).join("\n");

  return '<!DOCTYPE html>\n<html lang="es">\n<head>\n<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<title>Foro Rust Pirata - Comunidad RUST OLD SCHOOL</title>\n<meta name="description" content="Foro comunitario de Rust Pirata 2275 OldRecoil. Publica tus dudas, comparte tips y conecta con la comunidad de RUST OLD SCHOOL." />\n<meta name="robots" content="index, follow" />\n<link rel="canonical" href="'+SITE+'/foro/" />\n<meta property="og:title" content="Foro Rust Pirata - Comunidad RUST OLD SCHOOL" />\n<meta property="og:description" content="Foro comunitario de Rust Pirata 2275. Publica tus dudas y conecta con la comunidad." />\n<meta property="og:url" content="'+SITE+'/foro/" />\n<meta property="og:type" content="website" />\n<meta property="og:site_name" content="Rust Pirata" />\n<style>'+COMMON_CSS+'</style>\n</head>\n<body>\n<div class="container">\n<header class="header">\n<a href="/"><img src="/rust-old-school-logo.webp" alt="Rust Pirata" width="42" height="42" /></a>\n<div><h1><a href="/" style="color:#fff;text-decoration:none;">Rust Pirata</a><small>Servidor RUST OLD SCHOOL 2275</small></h1></div>\n</header>\n<nav aria-label="Breadcrumb"><ol class="breadcrumb"><li><a href="/">Inicio</a></li><li aria-current="page">Foro</li></ol></nav>\n<h1 style="font-size:1.5rem;margin-bottom:24px;">Foro de la comunidad</h1>\n'+(items||'<div class="empty"><h2>Aún no hay publicaciones</h2><p>Sé el primero en publicar en nuestro foro comunitario.</p><p style="margin-top:16px;"><a href="/">Volver al inicio</a></p></div>')+'\n<div class="post-footer">\n<a href="/">\u2190 Volver al inicio</a>\n<a href="https://discord.gg/7Vz4YBamFG" target="_blank" rel="noopener">Unirse al Discord</a>\n</div>\n</div>\n<footer class="footer">\n<p>&copy; 2026 Rust Pirata 2275 OldRecoil — RUST OLD SCHOOL</p>\n<nav style="margin-top:8px;"><a href="/">Inicio</a> | <a href="/foro/">Foro</a> | <a href="/descargar-rust-pirata/">Descargar</a></nav>\n</footer>\n</body>\n</html>';
}
async function fetchFromSupabase(path) {
  const url = SUPABASE_URL + "/rest/v1/" + path;
  const res = await fetch(url, {
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY,
      "Accept": "application/json"
    }
  });
  if (!res.ok) throw new Error("HTTP " + res.status + " " + res.statusText);
  return res.json();
}

async function main() {
  console.log("\n=== GENERANDO PAGINAS DE FORO ===\n");

  let posts;
  try {
    posts = await fetchFromSupabase("posts?select=*&order=created_at.desc");
  } catch (e) {
    console.error("Error conectando a Supabase:", e.message);
    console.log("Las paginas de foro NO se generaron. El build continua sin errores.");
    return;
  }

  if (!posts || posts.length === 0) {
    console.log("No hay posts en la base de datos. Generando /foro/ vacio.");
    const forumDir = path.join(distDir, "foro");
    if (!fs.existsSync(forumDir)) fs.mkdirSync(forumDir, { recursive: true });
    const emptyHtml = '<!DOCTYPE html>\n<html lang="es">\n<head>\n<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<title>Foro Rust Pirata - Comunidad RUST OLD SCHOOL</title>\n<meta name="description" content="Foro comunitario de Rust Pirata 2275 OldRecoil." />\n<meta name="robots" content="index, follow" />\n<link rel="canonical" href="'+SITE+'/foro/" />\n<style>'+COMMON_CSS+'</style>\n</head>\n<body>\n<div class="container">\n<header class="header">\n<a href="/"><img src="/rust-old-school-logo.webp" alt="Rust Pirata" width="42" height="42" /></a>\n<div><h1><a href="/" style="color:#fff;text-decoration:none;">Rust Pirata</a><small>Servidor RUST OLD SCHOOL 2275</small></h1></div>\n</header>\n<nav aria-label="Breadcrumb"><ol class="breadcrumb"><li><a href="/">Inicio</a></li><li aria-current="page">Foro</li></ol></nav>\n<h1 style="font-size:1.5rem;margin-bottom:24px;">Foro de la comunidad</h1>\n<div class="empty"><h2>Aún no hay publicaciones</h2><p>Sé el primero en publicar en nuestro foro comunitario.</p><p style="margin-top:16px;"><a href="/">Volver al inicio</a></p></div>\n</div>\n<footer class="footer">\n<p>&copy; 2026 Rust Pirata 2275 OldRecoil - RUST OLD SCHOOL</p>\n<nav style="margin-top:8px;"><a href="/">Inicio</a> | <a href="/foro/">Foro</a></nav>\n</footer>\n</body>\n</html>';
    fs.writeFileSync(path.join(forumDir, "index.html"), emptyHtml);
    console.log("Generado: /foro/index.html (vacio)");
    return;
  }

  // Separate main posts and replies
  const mainPosts = posts.filter(p => !p.is_reply);
  const allReplies = posts.filter(p => p.is_reply);

  console.log("Posts principales:", mainPosts.length);
  console.log("Replies:", allReplies.length);

  // Clean and recreate /foro/ directory
  const forumDir = path.join(distDir, "foro");
  if (fs.existsSync(forumDir)) fs.rmSync(forumDir, { recursive: true });
  fs.mkdirSync(forumDir, { recursive: true });

  // Build reply lookup
  const repliesByParent = {};
  allReplies.forEach(r => {
    const pid = r.parent_id;
    if (!repliesByParent[pid]) repliesByParent[pid] = [];
    repliesByParent[pid].push(r);
  });

  // Generate individual post pages
  let generatedCount = 0;
  mainPosts.forEach(post => {
    try {
      const slug = createSlug(post.content, post.id);
      const postReplies = (repliesByParent[post.id] || []).sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
      const html = genPostHtml(post, postReplies);
      const postDir = path.join(forumDir, slug);
      fs.mkdirSync(postDir, { recursive: true });
      fs.writeFileSync(path.join(postDir, "index.html"), html);
      generatedCount++;
    } catch (e) {
      console.error("Error generando pagina para post", post.id, e.message);
    }
  });

  console.log("Generadas:", generatedCount, "paginas individuales de posts");

  // Generate /foro/index.html listing
  const listingPosts = mainPosts.map(p => {
    const postReplies = repliesByParent[p.id] || [];
    return { ...p, _replyCount: postReplies.length };
  });
  fs.writeFileSync(path.join(forumDir, "index.html"), genListingHtml(listingPosts));
  console.log("Generado: /foro/index.html");

  // Update sitemap.xml
  try {
    const sitemapPath = path.join(distDir, "sitemap.xml");
    if (fs.existsSync(sitemapPath)) {
      let sitemap = fs.readFileSync(sitemapPath, "utf-8");
      const forumUrls = mainPosts.map(p => {
        const slug = createSlug(p.content, p.id);
        return '  <url>\n    <loc>'+SITE+"/foro/"+slug+'/</loc>\n    <lastmod>'+today+'</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.5</priority>\n  </url>';
      }).join("\n");
      const forumIndexUrl = '  <url>\n    <loc>'+SITE+'/foro/</loc>\n    <lastmod>'+today+'</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.6</priority>\n  </url>';
      sitemap = sitemap.replace('</urlset>', forumIndexUrl+"\n"+forumUrls+"\n</urlset>");
      fs.writeFileSync(sitemapPath, sitemap);
      console.log("Sitemap actualizado con", mainPosts.length, "URLs del foro");
    } else {
      console.log("sitemap.xml no encontrado, saltando actualizacion");
    }
  } catch (e) {
    console.error("Error actualizando sitemap:", e.message);
  }

  console.log("\n=== FORO COMPLETADO: "+generatedCount+" paginas generadas ===");
}

main().catch(e => {
  console.error("Error fatal en generate-forum-pages:", e.message);
});
