// Script para generar páginas HTML estáticas con meta tags SEO
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seoPages = {
  'rust-pirata-argentina': {
    title: 'Rust Pirata Argentina 🇦🇷 Descargar Gratis 2026 - LATAMRUST #1',
    description: 'Servidor #1 de Rust Pirata en Argentina. Ping bajo 40-60ms desde Buenos Aires, Córdoba, Rosario. +10.000 jugadores activos. 100% gratis, sin lag. ¡Jugá ahora!',
    keywords: 'rust pirata argentina, rust pirata gratis argentina, servidor rust pirata argentina, descargar rust pirata argentina, rust pirata 2026 argentina',
    locale: 'es_AR',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp'
  },
  'rust-pirata-brasil': {
    title: 'Rust Pirata 2275 Brasil 🇧🇷 Baixar Grátis 2026 - LATAMRUST #1',
    description: 'Servidor #1 de Rust Pirata no Brasil. Ping baixo 15-30ms, +10.000 jogadores ativos. 100% grátis, sem vírus, anti-cheat profissional. Jogue agora!',
    keywords: 'rust pirata brasil, rust pirata 2275 brasil, baixar rust pirata gratis brasil, servidor rust pirata brasil, rust pirata download brasil',
    locale: 'pt_BR',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp'
  },
  'rust-pirata-mexico': {
    title: 'Rust Pirata México 🇲🇽 Descargar Gratis 2026 - LATAMRUST #1',
    description: 'Servidor #1 de Rust Pirata en México. Ping bajo 50-70ms desde CDMX, Monterrey, Guadalajara. +10.000 jugadores activos wey. 100% gratis. ¡Juega ahora!',
    keywords: 'rust pirata mexico, rust pirata gratis mexico, servidor rust pirata mexico, descargar rust pirata mexico, rust pirata 2026 mexico',
    locale: 'es_MX',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp'
  },
  'rust-pirata-chile': {
    title: 'Rust Pirata Chile 🇨🇱 Descargar Gratis 2026 - LATAMRUST #1',
    description: 'Servidor #1 de Rust Pirata en Chile. Ping bajo 60-80ms desde Santiago, Valparaíso, Concepción. +10.000 jugadores weon. 100% gratis. ¡Juega ahora!',
    keywords: 'rust pirata chile, rust pirata gratis chile, servidor rust pirata chile, descargar rust pirata chile, rust pirata 2026 chile',
    locale: 'es_CL',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp'
  },
  'rust-pirata-colombia': {
    title: 'Rust Pirata Colombia 🇨🇴 Descargar Gratis 2026 - LATAMRUST #1',
    description: 'Servidor #1 de Rust Pirata en Colombia. Ping bajo 70-90ms desde Bogotá, Medellín, Cali. +10.000 jugadores parcero. 100% gratis chimba. ¡Juega ahora!',
    keywords: 'rust pirata colombia, rust pirata gratis colombia, servidor rust pirata colombia, descargar rust pirata colombia, rust pirata 2026 colombia',
    locale: 'es_CO',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp'
  },
  'rust-family': {
    title: 'Rust Family LATAMRUST - Comunidad #1 de Rust Pirata LATAM 2026',
    description: 'Únete a Rust Family LATAMRUST, la mayor comunidad de Rust Pirata en LATAM con más de 10.000 miembros activos. Discord, eventos, torneos y más.',
    keywords: 'rust family, rust family brasil, rust family argentina, comunidad rust pirata, rust family latam, rust family 2026',
    locale: 'es_ES',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp'
  },
  'servidores-rust-pirata': {
    title: 'Servidores Rust Pirata 2026 - Top 10 Mejores Servidores LATAM',
    description: 'Lista completa de los mejores servidores Rust Pirata 2026 en LATAM. Comparativa, reviews, ping, jugadores. LATAMRUST #1 ranking.',
    keywords: 'servidores rust pirata, mejores servidores rust pirata, servidores rust pirata brasil, servidores rust pirata argentina, top servidores rust',
    locale: 'es_ES',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp'
  },
  'comunidade-rust-family': {
    title: 'Comunidade Rust Family Brasil - LATAMRUST #1 com 10.000+ Membros',
    description: 'A maior comunidade Rust Family do Brasil. Entre no Discord LATAMRUST com mais de 10.000 jogadores ativos. Eventos, torneios e suporte 24/7.',
    keywords: 'comunidade rust family, rust family brasil, comunidade rust pirata brasil, discord rust family, rust family latam',
    locale: 'pt_BR',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp'
  },
  'servidor-rust-family': {
    title: 'Servidor Rust Family Premium - LATAMRUST Hardware Dedicado',
    description: 'Servidor Rust Family premium con hardware dedicado, ping bajo 15-30ms Brasil, uptime 99.9%, anti-cheat profesional. El mejor servidor técnico.',
    keywords: 'servidor rust family, servidor rust pirata premium, servidor rust dedicado, rust family server',
    locale: 'pt_BR',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp'
  },
  'dayz': {
    title: 'DayZ Pirata 1.28 Gratis 2026 - Servidor LATAMRUST LATAM',
    description: 'Servidor DayZ Pirata 1.28 gratis para LATAM. Descargar DayZ pirata, ping bajo, +1000 jugadores. Survival, zombies, PvP. ¡Juega ahora!',
    keywords: 'dayz pirata, dayz 1.28, dayz gratis, descargar dayz pirata, servidor dayz pirata, dayz pirata brasil, dayz pirata argentina',
    locale: 'es_ES',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp'
  }
};

// Leer el index.html base
const indexPath = path.join(__dirname, 'dist', 'index.html');
let baseHTML = fs.readFileSync(indexPath, 'utf-8');

// Generar HTML para cada página con meta tags específicos
Object.keys(seoPages).forEach(pagePath => {
  const seo = seoPages[pagePath];
  const url = `https://latamrust.vercel.app/${pagePath}`;
  
  // Reemplazar meta tags en el HTML
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
  
  // Crear directorio para la página
  const pageDir = path.join(__dirname, 'dist', pagePath);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  // Escribir el HTML
  fs.writeFileSync(path.join(pageDir, 'index.html'), pageHTML);
  console.log(`✓ Generado: /${pagePath}/index.html`);
});

console.log('\n✓ Páginas SEO generadas exitosamente!');
