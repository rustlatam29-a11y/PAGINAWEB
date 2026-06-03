// Script para generar páginas HTML estáticas con meta tags SEO
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seoPages = {
  // === PAISES EXISTENTES ===
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
      { q: 'Cuanto ping tengo desde Buenos Aires?', a: 'Desde Buenos Aires el ping promedio es de 40-60ms, ideal para jugar Rust Pirata sin lag.' },
      { q: 'Rust Pirata es gratis en Argentina?', a: 'Si, la descarga del juego es gratis. Los servidores premium tienen un costo unico desde $17 USD.' }
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
      { q: 'Qual ping de Sao Paulo?', a: 'De Sao Paulo o ping medio e de 15-30ms, ideal para jogar Rust Pirata sem lag.' },
      { q: 'Rust Pirata e gratis no Brasil?', a: 'Sim, o download do jogo e gratis. Servidores premium tem custo unico a partir de $17 USD.' }
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
  // === NUEVOS PAISES ===
  'rust-pirata-peru': {
    title: 'Rust Pirata Peru - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Peru. Ping bajo 60-80ms desde Lima, Arequipa, Trujillo. +5,000 jugadores activos. Rust 2275 y 2388. Juega ahora.',
    keywords: 'rust pirata peru, rust pirata gratis peru, servidor rust pirata peru, descargar rust pirata peru, rust 2275 peru, rust pirata lima, rust pirata arequipa',
    locale: 'es_PE',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Pirata en Peru',
    content: 'El mejor servidor de Rust Pirata en Peru con ping bajo de 60-80ms desde Lima, Arequipa, Trujillo y todo el pais. Mas de 5,000 jugadores peruanos activos jugando Rust 2275 y 2388.',
    features: ['Ping bajo 60-80ms desde Lima', '+5,000 jugadores peruanos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en espanol'],
    faq: [
      { q: 'Como descargar Rust Pirata en Peru?', a: 'Contactanos por WhatsApp y te enviamos el enlace de descarga seguro. Funciona en todo Peru sin problemas de latencia.' },
      { q: 'Cuanto ping tengo desde Lima?', a: 'Desde Lima el ping promedio es de 60-80ms, ideal para jugar Rust Pirata sin lag.' }
    ]
  },
  'rust-pirata-uruguay': {
    title: 'Rust Pirata Uruguay - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Uruguay. Ping bajo 30-50ms desde Montevideo. +3,000 jugadores activos. Rust 2275 y 2388. Juega ahora.',
    keywords: 'rust pirata uruguay, rust pirata gratis uruguay, servidor rust pirata uruguay, descargar rust pirata uruguay, rust pirata montevideo',
    locale: 'es_UY',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Pirata en Uruguay',
    content: 'El mejor servidor de Rust Pirata en Uruguay con ping bajo de 30-50ms desde Montevideo y todo el pais. Mas de 3,000 jugadores uruguayos activos.',
    features: ['Ping bajo 30-50ms desde Montevideo', '+3,000 jugadores uruguayos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en espanol'],
    faq: [
      { q: 'Como descargar Rust Pirata en Uruguay?', a: 'Contactanos por WhatsApp y te enviamos el enlace de descarga seguro. Funciona en todo Uruguay.' }
    ]
  },
  'rust-pirata-paraguay': {
    title: 'Rust Pirata Paraguay - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Paraguay. Ping bajo 20-40ms desde Asuncion. +2,000 jugadores activos. Rust 2275 y 2388. Juega ahora.',
    keywords: 'rust pirata paraguay, rust pirata gratis paraguay, servidor rust pirata paraguay, descargar rust pirata paraguay, rust pirata asuncion',
    locale: 'es_PY',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Pirata en Paraguay',
    content: 'El mejor servidor de Rust Pirata en Paraguay con ping bajo de 20-40ms desde Asuncion. Mas de 2,000 jugadores paraguayos activos. Fundado por ParaguayRAIDER.',
    features: ['Ping bajo 20-40ms desde Asuncion', '+2,000 jugadores paraguayos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en espanol'],
    faq: [
      { q: 'Como descargar Rust Pirata en Paraguay?', a: 'Contactanos por WhatsApp y te enviamos el enlace de descarga seguro. Funciona en todo Paraguay.' },
      { q: 'Quien creo LATAMRUST?', a: 'LATAMRUST fue creado por ParaguayRAIDER, desarrollador de plugins para RustSpain y Brasa.gg.' }
    ]
  },
  'rust-pirata-ecuador': {
    title: 'Rust Pirata Ecuador - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Ecuador. Ping bajo 70-90ms desde Quito, Guayaquil. +3,000 jugadores activos. Rust 2275 y 2388. Juega ahora.',
    keywords: 'rust pirata ecuador, rust pirata gratis ecuador, servidor rust pirata ecuador, descargar rust pirata ecuador, rust pirata quito, rust pirata guayaquil',
    locale: 'es_EC',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Pirata en Ecuador',
    content: 'El mejor servidor de Rust Pirata en Ecuador con ping bajo de 70-90ms desde Quito, Guayaquil y todo el pais. Mas de 3,000 jugadores ecuatorianos activos.',
    features: ['Ping bajo 70-90ms desde Quito', '+3,000 jugadores ecuatorianos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en espanol'],
    faq: [
      { q: 'Como descargar Rust Pirata en Ecuador?', a: 'Contactanos por WhatsApp y te enviamos el enlace de descarga seguro. Funciona en todo Ecuador.' }
    ]
  },
  'rust-pirata-bolivia': {
    title: 'Rust Pirata Bolivia - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Bolivia. Ping bajo 60-80ms desde La Paz, Santa Cruz. +2,000 jugadores activos. Rust 2275 y 2388. Juega ahora.',
    keywords: 'rust pirata bolivia, rust pirata gratis bolivia, servidor rust pirata bolivia, descargar rust pirata bolivia, rust pirata la paz, rust pirata santa cruz',
    locale: 'es_BO',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Pirata en Bolivia',
    content: 'El mejor servidor de Rust Pirata en Bolivia con ping bajo de 60-80ms desde La Paz, Santa Cruz y todo el pais. Mas de 2,000 jugadores bolivianos activos.',
    features: ['Ping bajo 60-80ms desde La Paz', '+2,000 jugadores bolivianos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en espanol'],
    faq: [
      { q: 'Como descargar Rust Pirata en Bolivia?', a: 'Contactanos por WhatsApp y te enviamos el enlace de descarga seguro. Funciona en toda Bolivia.' }
    ]
  },
  'rust-pirata-venezuela': {
    title: 'Rust Pirata Venezuela - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Venezuela. Ping bajo 80-100ms desde Caracas, Maracaibo. +4,000 jugadores activos. Rust 2275 y 2388. Juega ahora.',
    keywords: 'rust pirata venezuela, rust pirata gratis venezuela, servidor rust pirata venezuela, descargar rust pirata venezuela, rust pirata caracas',
    locale: 'es_VE',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Pirata en Venezuela',
    content: 'El mejor servidor de Rust Pirata en Venezuela con ping bajo de 80-100ms desde Caracas, Maracaibo y todo el pais. Mas de 4,000 jugadores venezolanos activos.',
    features: ['Ping bajo 80-100ms desde Caracas', '+4,000 jugadores venezolanos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en espanol'],
    faq: [
      { q: 'Como descargar Rust Pirata en Venezuela?', a: 'Contactanos por WhatsApp y te enviamos el enlace de descarga seguro. Funciona en toda Venezuela.' }
    ]
  },
  'rust-pirata-costa-rica': {
    title: 'Rust Pirata Costa Rica - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Costa Rica. Ping bajo 60-80ms desde San Jose. +2,000 jugadores activos. Rust 2275 y 2388. Juega ahora.',
    keywords: 'rust pirata costa rica, rust pirata gratis costa rica, servidor rust pirata costa rica, rust pirata san jose',
    locale: 'es_CR',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Pirata en Costa Rica',
    content: 'El mejor servidor de Rust Pirata en Costa Rica con ping bajo de 60-80ms desde San Jose. Mas de 2,000 jugadores costarricenses activos.',
    features: ['Ping bajo 60-80ms desde San Jose', '+2,000 jugadores activos', 'Rust 2275 y 2388', '+30,000 plugins', 'AntiCheat profesional', 'Soporte 24/7'],
    faq: [
      { q: 'Como descargar Rust Pirata en Costa Rica?', a: 'Contactanos por WhatsApp y te enviamos el enlace de descarga seguro.' }
    ]
  },
  'rust-pirata-panama': {
    title: 'Rust Pirata Panama - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Panama. Ping bajo 50-70ms desde Panama City. +1,500 jugadores activos. Rust 2275 y 2388. Juega ahora.',
    keywords: 'rust pirata panama, rust pirata gratis panama, servidor rust pirata panama, rust pirata panama city',
    locale: 'es_PA',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Pirata en Panama',
    content: 'El mejor servidor de Rust Pirata en Panama con ping bajo de 50-70ms desde Panama City. Mas de 1,500 jugadores panamenos activos.',
    features: ['Ping bajo 50-70ms desde Panama City', '+1,500 jugadores activos', 'Rust 2275 y 2388', '+30,000 plugins', 'AntiCheat profesional', 'Soporte 24/7'],
    faq: [
      { q: 'Como descargar Rust Pirata en Panama?', a: 'Contactanos por WhatsApp y te enviamos el enlace de descarga seguro.' }
    ]
  },
  'rust-pirata-republica-dominicana': {
    title: 'Rust Pirata Republica Dominicana - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Republica Dominicana. Ping bajo 70-90ms desde Santo Domingo. +2,000 jugadores activos. Juega ahora.',
    keywords: 'rust pirata republica dominicana, rust pirata gratis rd, servidor rust pirata rd, rust pirata santo domingo',
    locale: 'es_DO',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Pirata en Republica Dominicana',
    content: 'El mejor servidor de Rust Pirata en Republica Dominicana con ping bajo de 70-90ms desde Santo Domingo. Mas de 2,000 jugadores dominicanos activos.',
    features: ['Ping bajo 70-90ms desde Santo Domingo', '+2,000 jugadores activos', 'Rust 2275 y 2388', '+30,000 plugins', 'AntiCheat profesional', 'Soporte 24/7'],
    faq: [
      { q: 'Como descargar Rust Pirata en RD?', a: 'Contactanos por WhatsApp y te enviamos el enlace de descarga seguro.' }
    ]
  },
  // === PAGINAS DE CONTENIDO/COMUNIDAD ===
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
  },
  // === GUIAS Y TUTORIALES ===
  'como-crear-servidor-rust-pirata': {
    title: 'Como Crear Servidor Rust Pirata 2026 - Guia Completa LATAMRUST',
    description: 'Guia completa para crear tu servidor de Rust Pirata 2275 o 2388. Paso a paso con plugins, AntiCheat, configuracion y soporte 24/7.',
    keywords: 'como crear servidor rust pirata, crear servidor rust 2275, crear servidor rust 2388, configurar servidor rust, servidor rust paso a paso, montar servidor rust',
    locale: 'es_ES',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Como Crear un Servidor de Rust Pirata',
    content: 'Guia completa paso a paso para crear tu servidor de Rust Pirata. Aprende a configurar Rust 2275 o 2388 con plugins, AntiCheat y optimizacion para LATAM.',
    features: ['Paso a paso detallado', 'Configuracion de Rust 2275 y 2388', 'Instalacion de plugins', 'AntiCheat configurado', 'Optimizacion para LATAM', 'Soporte 24/7'],
    faq: [
      { q: 'Cuanto cuesta crear un servidor Rust pirata?', a: 'El servidor premium desde $17 USD (pago unico). El hosting VPS se contrata por separado desde $5/mes.' },
      { q: 'Necesito conocimientos tecnicos?', a: 'No, nosotros nos encargamos de toda la configuracion. Solo necesitas contactarnos por WhatsApp.' },
      { q: 'Cuanto tiempo tarda en estar listo?', a: 'Tu servidor puede estar listo en menos de 5 minutos despues del pago.' }
    ]
  },
  'mejores-plugins-rust-pirata': {
    title: 'Mejores Plugins Rust Pirata 2026 - Top 30 Plugins Gratis LATAMRUST',
    description: 'Los mejores plugins gratis para Rust Pirata 2275 y 2388. Kits, economia, anti-cheat, tiendas, VIP y mas. Lista actualizada 2026.',
    keywords: 'mejores plugins rust pirata, plugins rust 2275, plugins rust 2388, oxide plugins rust, umod plugins, plugins gratis rust, tienda plugins rust, economia rust',
    locale: 'es_ES',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Mejores Plugins para Rust Pirata',
    content: 'Los 30 mejores plugins gratis para servidores Rust Pirata. Desde kits y economia hasta anti-cheat y tiendas. Lista actualizada para 2026.',
    features: ['Top 30 plugins gratis', 'Plugins para Rust 2275 y 2388', 'Kits, economia, tiendas', 'Anti-cheat profesional', 'Guia de instalacion', 'Configs recomendados'],
    faq: [
      { q: 'Donde descargo plugins Rust?', a: 'En umod.org o codefling.com. Tambien tenemos packs de plugins listos para instalar.' },
      { q: 'Cuales son los plugins esenciales?', a: 'Kits, BetterChat, Vanish, NoEscape, Backpacks, Economics, ServerRewards y AntiCheat.' }
    ]
  },
  'descargar-rust-pirata': {
    title: 'Descargar Rust Pirata Gratis 2026 - Rust 2275 y 2388 LATAMRUST',
    description: 'Descarga Rust Pirata gratis 2026. Rust 2275 OldRecoil y Rust 2388 Actualizado. Sin Steam, sin Epic Games. Link seguro sin virus.',
    keywords: 'descargar rust pirata, rust pirata gratis, rust 2275 descargar, rust 2388 descargar, rust pirata pc, rust sin steam, rust sin epic games, rust pirata download, baixar rust pirata',
    locale: 'es_ES',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Descargar Rust Pirata Gratis',
    content: 'Descarga Rust Pirata gratis en tu PC. Disponible Rust 2275 OldRecoil y Rust 2388 Actualizado. Sin necesidad de Steam ni Epic Games. Archivo seguro verificado.',
    features: ['Descarga gratis y segura', 'Rust 2275 OldRecoil', 'Rust 2388 Actualizado', 'Sin Steam ni Epic Games', 'Archivos verificados sin virus', 'Instalacion rapida'],
    faq: [
      { q: 'Rust pirata es gratis?', a: 'Si, la descarga del juego es gratis. Solo pagas si quieres un servidor premium con soporte.' },
      { q: 'Es seguro descargar Rust pirata?', a: 'Si, nuestros archivos estan verificados y libres de virus. Descarga 100% segura.' },
      { q: 'Necesito Steam para jugar?', a: 'No, Rust pirata no necesita Steam ni Epic Games. Se ejecuta directamente en tu PC.' }
    ]
  },
  'rust-pirata-gratis': {
    title: 'Rust Pirata Gratis 2026 - Jugar Sin Pagar LATAMRUST',
    description: 'Juega Rust Pirata gratis en 2026. Sin pagar Steam ni Epic Games. Rust 2275 y 2388 disponibles. Servidores con +30,000 plugins.',
    keywords: 'rust pirata gratis, rust gratis, jugar rust gratis, rust sin pagar, rust 2275 gratis, rust 2388 gratis, rust pirata free, rust online gratis',
    locale: 'es_ES',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Pirata Gratis',
    content: 'Juega Rust pirata gratis en 2026. Sin pagar Steam ni Epic Games. Disponible Rust 2275 y 2388 con +30,000 plugins. Servidores con ping bajo en toda LATAM.',
    features: ['100% gratis', 'Rust 2275 y 2388', '+30,000 plugins', 'Sin pagar Steam', 'Ping bajo LATAM', 'Soporte 24/7'],
    faq: [
      { q: 'Rust pirata es realmente gratis?', a: 'Si, la descarga y el juego son gratis. Solo pagas si quieres un servidor premium.' },
      { q: 'Hay virus en la descarga?', a: 'No, nuestros archivos estan verificados y son 100% seguros.' }
    ]
  },
  'rust-2275-oldrecoil': {
    title: 'Rust 2275 OldRecoil - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust 2275 OldRecoil gratis. La version clasica con recoil original. +30,000 plugins. Servidores con ping bajo LATAM.',
    keywords: 'rust 2275, rust 2275 oldrecoil, rust 2275 descargar, rust oldrecoil, rust clasico, rust recoil original, rust 2275 gratis, rust 2275 pc',
    locale: 'es_ES',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust 2275 OldRecoil',
    content: 'Rust 2275 OldRecoil, la version clasica favorita de la comunidad. Recoil original que todos conocen y aman. Descarga gratis y juega en servidores LATAM.',
    features: ['Version 2275 estable', 'Recoil clasico original', '+30,000 plugins', 'Servidores optimizados', 'Ping bajo LATAM', 'Descarga gratis'],
    faq: [
      { q: 'Que es Rust 2275 OldRecoil?', a: 'Es la version 2275 de Rust con el recoil clasico original que la comunidad prefiere.' },
      { q: 'Por que jugar 2275 en vez de 2388?', a: 'Porque el recoil clasico es mas precdecible y la comunidad lo prefiere para PvP competitivo.' }
    ]
  },
  'rust-2388-actualizado': {
    title: 'Rust 2388 Actualizado - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust 2388 Actualizado gratis. La ultima version con mejores graficos y optimizaciones. +30,000 plugins premium.',
    keywords: 'rust 2388, rust 2388 actualizado, rust 2388 descargar, rust ultima version, rust 2026, rust nuevo, rust 2388 gratis, rust 2388 pc',
    locale: 'es_ES',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust 2388 Actualizado',
    content: 'Rust 2388 Actualizado, la ultima version de Rust con mejores graficos, optimizaciones y nuevas funciones. Descarga gratis y juega con +30,000 plugins.',
    features: ['Ultima version estable', 'Mejores graficos', '+30,000 plugins premium', 'Optimizado para LATAM', 'Nuevas funciones', 'Descarga gratis'],
    faq: [
      { q: 'Que hay de nuevo en Rust 2388?', a: 'Mejores graficos, optimizaciones de rendimiento, nuevas armas y mejoras en el gameplay.' },
      { q: 'Rust 2388 es mejor que 2275?', a: 'Depende de tu preferencia. 2388 tiene mejores graficos, pero 2275 tiene el recoil clasico preferido por muchos.' }
    ]
  },
  'plugins-oxide-rust': {
    title: 'Plugins Oxide Rust - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga plugins Oxide gratis para Rust pirata. +30,000 plugins disponibles. Kits, economia, tiendas, anti-cheat y mas.',
    keywords: 'plugins oxide rust, oxide plugins, rust plugins, umod plugins, plugins gratis rust, tienda plugins rust, economia rust, kits rust',
    locale: 'es_ES',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Plugins Oxide para Rust',
    content: 'Descarga miles de plugins Oxide gratis para tu servidor de Rust pirata. Desde kits y economia hasta anti-cheat y tiendas. Compatible con Rust 2275 y 2388.',
    features: ['+30,000 plugins gratis', 'Compatible con Rust 2275 y 2388', 'Kits y economia', 'Tiendas y VIP', 'Anti-cheat', 'Fácil instalacion'],
    faq: [
      { q: 'Como instalar plugins Oxide?', a: 'Descarga el plugin .cs y coloca en /oxide/plugins/. Se carga automaticamente al reiniciar.' },
      { q: 'Los plugins son gratis?', a: 'La mayoria son gratis en umod.org. Algunos premium estan en codefling.com.' }
    ]
  },
  'rust-pirata-sin-steam': {
    title: 'Rust Pirata Sin Steam - Jugar Gratis 2026 - LATAMRUST',
    description: 'Juega Rust pirata sin Steam ni Epic Games. Descarga gratis, sin cuentas, sin pagos. Rust 2275 y 2388 disponibles.',
    keywords: 'rust pirata sin steam, rust sin steam, rust sin epic games, rust sin cuenta, rust gratis sin steam, rust pirata offline, rust sin Conexion',
    locale: 'es_ES',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Rust Pirata Sin Steam',
    content: 'Juega Rust pirata sin necesidad de Steam ni Epic Games. Descarga gratis, ejecuta y juega. Disponible Rust 2275 y 2388 con servidores online.',
    features: ['Sin Steam ni Epic Games', 'Sin cuentas necesarias', 'Descarga gratis', 'Rust 2275 y 2388', 'Servidores online', 'Jugando en minutos'],
    faq: [
      { q: 'Realmente no necesito Steam?', a: 'No, Rust pirata se ejecuta directamente sin necesidad de Steam ni Epic Games.' },
      { q: 'Puedo jugar online?', a: 'Si, hay miles de servidores online donde puedes jugar con otros jugadores.' }
    ]
  },
  'configurar-servidor-rust': {
    title: 'Configurar Servidor Rust Pirata - Guia Completa 2026 LATAMRUST',
    description: 'Guia para configurar tu servidor Rust pirata. Plugins, AntiCheat, optimizacion, reglas y mas. Soporte 24/7.',
    keywords: 'configurar servidor rust, configurar rust pirata, servidor rust plugins, anti-cheat rust, optimizar servidor rust, reglas servidor rust',
    locale: 'es_ES',
    image: 'https://latamrust.vercel.app/LATAMLOGO.webp',
    h1: 'Configurar Servidor Rust Pirata',
    content: 'Aprende a configurar tu servidor de Rust pirata con los mejores plugins, AntiCheat, optimizacion y reglas. Guia completa para administradores.',
    features: ['Configuracion paso a paso', 'Plugins recomendados', 'Anti-cheat configurado', 'Optimizacion de rendimiento', 'Reglas de servidor', 'Soporte 24/7'],
    faq: [
      { q: 'Cuantos plugins puedo instalar?', a: 'Depende de tu VPS. Recomendamos maximo 50-80 plugins para mejor rendimiento.' },
      { q: 'Cual es el mejor AntiCheat?', a: 'RustAdmin AntiCheat es el mas utilizado y efectivo para servidores pirata.' }
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

console.log(`\n✓ Total: ${Object.keys(seoPages).length} páginas SEO generadas!`);
