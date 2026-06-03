// Script para generar páginas HTML estáticas con meta tags SEO
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seoPages = {
  'rust-pirata-argentina': {
    title: 'Rust Pirata Argentina - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Argentina. Ping bajo 40-60ms desde Buenos Aires, Cordoba, Rosario. +10,000 jugadores activos. Rust 2275 y 2388 disponibles. Juga ahora.',
    keywords: 'rust pirata argentina, rust pirata gratis argentina, servidor rust pirata argentina, descargar rust pirata argentina, rust 2275 argentina, rust 2388 argentina, rust pirata buenos aires, rust pirata cordoba',
    locale: 'es_AR',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Pirata en Argentina',
    content: 'El mejor servidor de Rust Pirata en Argentina con ping bajo de 40-60ms desde Buenos Aires, Cordoba, Rosario y todo el pais. Mas de 10,000 jugadores argentinos activos jugando Rust 2275 OldRecoil y Rust 2388 Actualizado.',
    features: ['Ping bajo 40-60ms desde Buenos Aires', '+10,000 jugadores argentinos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en espanol'],
    faq: [
      { q: 'Como descargar Rust Pirata en Argentina?', a: 'Contactanos por WhatsApp y te enviamos el enlace de descarga seguro. Funciona en todo Argentina sin problemas de latencia.' },
      { q: 'Cuanto ping tengo desde Buenos Aires?', a: 'Desde Buenos Aires el ping promedio es de 40-60ms, ideal para jugar Rust Pirata sin lag.' }
    ]
  },
  'rust-pirata-brasil': {
    title: 'Rust Pirata Brasil - Baixar Gratis 2026 - LATAMRUST',
    description: 'Baixe Rust Pirata gratis no Brasil. Ping baixo 15-30ms, +10,000 jogadores ativos. Rust 2275 e 2388 disponiveis. Jogue agora.',
    keywords: 'rust pirata brasil, rust pirata gratis brasil, baixar rust pirata, servidor rust pirata brasil, rust 2275 brasil, rust 2388 brasil, rust pirata sao paulo, rust pirata rio de janeiro, rust pirata br gratis',
    locale: 'pt_BR',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Pirata no Brasil',
    content: 'O melhor servidor de Rust Pirata no Brasil com ping baixo de 15-30ms de Sao Paulo e Rio de Janeiro. Mais de 10,000 jogadores brasileiros ativos jogando Rust 2275 OldRecoil e Rust 2388 Atualizado.',
    features: ['Ping baixo 15-30ms de Sao Paulo', '+10,000 jogadores brasileiros ativos', 'Rust 2275 OldRecoil e Rust 2388', '+30,000 plugins disponiveis', 'AntiCheat profissional', 'Suporte 24/7 em portugues'],
    faq: [
      { q: 'Como baixar Rust Pirata no Brasil?', a: 'Entre em contato pelo WhatsApp e enviamos o link de download seguro. Funciona em todo o Brasil sem problemas de latencia.' },
      { q: 'Qual ping de Sao Paulo?', a: 'De Sao Paulo o ping medio e de 15-30ms, ideal para jogar Rust Pirata sem lag.' }
    ]
  },
  'rust-pirata-mexico': {
    title: 'Rust Pirata Mexico - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Mexico. Ping bajo 50-70ms desde CDMX, Monterrey, Guadalajara. +10,000 jugadores activos. Juega ahora.',
    keywords: 'rust pirata mexico, rust pirata gratis mexico, servidor rust pirata mexico, descargar rust pirata mexico, rust 2275 mexico, rust 2388 mexico, rust pirata cdmx, rust pirata monterrey',
    locale: 'es_MX',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Pirata en Mexico',
    content: 'El mejor servidor de Rust Pirata en Mexico con ping bajo de 50-70ms desde CDMX, Monterrey, Guadalajara y todo el pais. Mas de 10,000 jugadores mexicanos activos.',
    features: ['Ping bajo 50-70ms desde CDMX', '+10,000 jugadores mexicanos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en espanol'],
    faq: [
      { q: 'Como descargar Rust Pirata en Mexico?', a: 'Contactanos por WhatsApp y te enviamos el enlace de descarga seguro. Funciona en todo Mexico sin problemas de latencia.' },
      { q: 'Cuanto ping tengo desde CDMX?', a: 'Desde CDMX el ping promedio es de 50-70ms, ideal para jugar Rust Pirata sin lag.' }
    ]
  },
  'rust-pirata-chile': {
    title: 'Rust Pirata Chile - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Chile. Ping bajo 60-80ms desde Santiago, Valparaiso, Concepcion. +10,000 jugadores activos. Juega ahora.',
    keywords: 'rust pirata chile, rust pirata gratis chile, servidor rust pirata chile, descargar rust pirata chile, rust 2275 chile, rust 2388 chile, rust pirata santiago',
    locale: 'es_CL',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Pirata en Chile',
    content: 'El mejor servidor de Rust Pirata en Chile con ping bajo de 60-80ms desde Santiago, Valparaiso, Concepcion y todo el pais. Mas de 10,000 jugadores chilenos activos.',
    features: ['Ping bajo 60-80ms desde Santiago', '+10,000 jugadores chilenos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en espanol'],
    faq: [
      { q: 'Como descargar Rust Pirata en Chile?', a: 'Contactanos por WhatsApp y te enviamos el enlace de descarga seguro. Funciona en todo Chile sin problemas de latencia.' }
    ]
  },
  'rust-pirata-colombia': {
    title: 'Rust Pirata Colombia - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Colombia. Ping bajo 70-90ms desde Bogota, Medellin, Cali. +10,000 jugadores activos. Juega ahora.',
    keywords: 'rust pirata colombia, rust pirata gratis colombia, servidor rust pirata colombia, descargar rust pirata colombia, rust 2275 colombia, rust 2388 colombia, rust pirata bogota, rust pirata medellin',
    locale: 'es_CO',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Pirata en Colombia',
    content: 'El mejor servidor de Rust Pirata en Colombia con ping bajo de 70-90ms desde Bogota, Medellin, Cali y todo el pais. Mas de 10,000 jugadores colombianos activos.',
    features: ['Ping bajo 70-90ms desde Bogota', '+10,000 jugadores colombianos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en espanol'],
    faq: [
      { q: 'Como descargar Rust Pirata en Colombia?', a: 'Contactanos por WhatsApp y te enviamos el enlace de descarga seguro. Funciona en todo Colombia sin problemas de latencia.' }
    ]
  },
  'rust-family': {
    title: 'Rust Family LATAMRUST - Comunidad de Rust Pirata LATAM 2026',
    description: 'Unete a Rust Family LATAMRUST, la mayor comunidad de Rust Pirata en LATAM con mas de 10,000 miembros activos. Eventos, torneos y mas.',
    keywords: 'rust family, rust family brasil, rust family argentina, comunidad rust pirata, rust family latam, rust family 2026, comunidad rust',
    locale: 'es_ES',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Family LATAMRUST',
    content: 'La mayor comunidad de Rust Pirata en Latinoamerica. Mas de 10,000 miembros activos jugando en servidores Rust 2275 y 2388 con plugins personalizados.',
    features: ['+10,000 miembros activos', 'Eventos y torneos semanales', 'Servidores Rust 2275 y 2388', 'Comunidad hispanohablante', 'Soporte 24/7', 'Plugins personalizados'],
    faq: [
      { q: 'Como unirse a Rust Family?', a: 'Contactanos por WhatsApp y te unimos a la comunidad. Tenemos servidores para todo LATAM.' }
    ]
  },
  'servidores-rust-pirata': {
    title: 'Servidores Rust Pirata 2026 - Top Mejores Servidores LATAM',
    description: 'Lista completa de los mejores servidores Rust Pirata 2026 en LATAM. Comparativa, reviews, ping, jugadores. LATAMRUST #1 ranking.',
    keywords: 'servidores rust pirata, mejores servidores rust pirata, servidores rust pirata brasil, servidores rust pirata argentina, top servidores rust, ranking servidores rust',
    locale: 'es_ES',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Mejores Servidores Rust Pirata',
    content: 'Descubre los mejores servidores de Rust Pirata en Latinoamerica. Comparativa completa de ping, jugadores, plugins y soporte. LATAMRUST lidera el ranking.',
    features: ['Ranking actualizado 2026', 'Comparativa de ping por pais', 'Reviews de jugadores reales', 'Informacion de plugins', 'Planes y precios', 'Soporte tecnico'],
    faq: [
      { q: 'Cual es el mejor servidor de Rust Pirata?', a: 'LATAMRUST es el servidor #1 en LATAM con el ping mas bajo, mas jugadores activos y mejor soporte tecnico 24/7.' }
    ]
  },
  'comunidade-rust-family': {
    title: 'Comunidade Rust Family Brasil - LATAMRUST',
    description: 'A maior comunidade Rust Family do Brasil. Entre no Discord LATAMRUST com mais de 10,000 jogadores ativos. Eventos, torneios e suporte 24/7.',
    keywords: 'comunidade rust family, rust family brasil, comunidade rust pirata brasil, discord rust family, rust family latam, comunidade rust',
    locale: 'pt_BR',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Comunidade Rust Family Brasil',
    content: 'A maior comunidade de Rust Pirata do Brasil. Mais de 10,000 jogadores brasileiros ativos jogando em servidores Rust 2275 e 2388.',
    features: ['+10,000 jogadores brasileiros', 'Eventos e torneios semanais', 'Servidores Rust 2275 e 2388', 'Comunidade lusofona', 'Suporte 24/7 em portugues', 'Plugins personalizados'],
    faq: [
      { q: 'Como entrar na comunidade?', a: 'Entre em contato pelo WhatsApp e adicionamos voce a comunidade. Temos servidores para todo o Brasil.' }
    ]
  },
  'servidor-rust-family': {
    title: 'Servidor Rust Family Premium - LATAMRUST Hardware Dedicado',
    description: 'Servidor Rust Family premium com hardware dedicado, ping baixo 15-30ms Brasil, uptime 99.9%, anti-cheat profissional.',
    keywords: 'servidor rust family, servidor rust pirata premium, servidor rust dedicado, rust family server, servidor premium rust',
    locale: 'pt_BR',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Servidor Rust Family Premium',
    content: 'Servidor Rust Family premium con hardware dedicado de ultima generacion. Ping bajo 15-30ms en Brasil, uptime 99.9% garantizado, anti-cheat profesional.',
    features: ['Hardware dedicado de ultima generacion', 'Ping bajo 15-30ms Brasil', 'Uptime 99.9% garantizado', 'Anti-cheat profissional', 'Soporte prioritario 24/7', '+30,000 plugins'],
    faq: [
      { q: 'Que ofrece el servidor premium?', a: 'Hardware dedicado, ping bajo, uptime garantizado, anti-cheat profesional y soporte prioritario 24/7.' }
    ]
  },
  'dayz': {
    title: 'DayZ Pirata 1.28 Gratis 2026 - Servidor LATAMRUST LATAM',
    description: 'Servidor DayZ Pirata 1.28 gratis para LATAM. Descargar DayZ pirata, ping bajo, +1000 jugadores. Survival, zombies, PvP.',
    keywords: 'dayz pirata, dayz 1.28, dayz gratis, descargar dayz pirata, servidor dayz pirata, dayz pirata brasil, dayz pirata argentina, dayz pirata mexico',
    locale: 'es_ES',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'DayZ Pirata Gratis',
    content: 'Servidor DayZ Pirata 1.28 gratis para Latinoamerica. Descarga DayZ pirata y juega con miles de jugadores. Survival, zombies, PvP.',
    features: ['DayZ 1.28 ultima version', 'Ping bajo LATAM', '+1000 jugadores activos', 'Survival y PvP', 'Zombies y ambientacion', 'Servidor 24/7'],
    faq: [
      { q: 'Como descargar DayZ pirata?', a: 'Contactanos por WhatsApp y te enviamos el enlace de descarga seguro de DayZ 1.28.' }
    ]
  }
};

// Leer el index.html base
const indexPath = path.join(__dirname, 'dist', 'index.html');
let baseHTML = fs.readFileSync(indexPath, 'utf-8');

// Generar HTML para cada página
Object.keys(seoPages).forEach(pagePath => {
  const seo = seoPages[pagePath];
  const url = `https://latamrust.vercel.app/${pagePath}`;
  
  // Generar FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": seo.faq.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };
  
  // Generar BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://latamrust.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": seo.h1,
        "item": url
      }
    ]
  };

  // Reemplazar meta tags
  let pageHTML = baseHTML
    .replace(/<title>.*?<\/title>/, `<title>${seo.title}</title>`)
    .replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${seo.description}"`)
    .replace(/<meta name="keywords" content=".*?"/, `<meta name="keywords" content="${seo.keywords}"`)
    .replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${seo.title}"`)
    .replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${seo.description}"`)
    .replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${url}"`)
    .replace(/<meta property="og:locale" content=".*?"/, `<meta property="og:locale" content="${seo.locale}"`)
    .replace(/<meta name="twitter:title" content=".*?"/, `<meta name="twitter:title" content="${seo.title}"`)
    .replace(/<meta name="twitter:description" content=".*?"/, `<meta name="twitter:description" content="${seo.description}"`)
    .replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="${url}"`);
  
  // Crear directorio
  const pageDir = path.join(__dirname, 'dist', pagePath);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  // Escribir HTML
  fs.writeFileSync(path.join(pageDir, 'index.html'), pageHTML);
  console.log(`✓ Generado: /${pagePath}/index.html`);
});

// Generar sitemap.xml
const sitemapPages = Object.keys(seoPages).map(pagePath => {
  return `  <url>
    <loc>https://latamrust.vercel.app/${pagePath}/</loc>
    <lastmod>2026-06-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://latamrust.vercel.app/</loc>
    <lastmod>2026-06-03</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
${sitemapPages}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'dist', 'sitemap.xml'), sitemap);
console.log('✓ Generado: /sitemap.xml');

// Generar robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: https://latamrust.vercel.app/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /`;

fs.writeFileSync(path.join(__dirname, 'dist', 'robots.txt'), robots);
console.log('✓ Generado: /robots.txt');

console.log('\n✓ Todas las páginas SEO generadas exitosamente!');
