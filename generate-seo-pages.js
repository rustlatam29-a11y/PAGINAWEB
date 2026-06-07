import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================
// SEO PAGES DATA — Expanded content, more FAQs, internal links
// ============================================================
const seoPages = {
  // === PAÍS PRINCIPAL ===
  'rust-pirata-argentina': {
    title: 'Rust Pirata Argentina - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Argentina. Ping bajo 40-60ms desde Buenos Aires, Córdoba, Rosario. +10,000 jugadores activos. Rust 2275 y 2388 disponibles. Juga ahora.',
    keywords: 'rust pirata argentina, rust pirata gratis argentina, servidor rust pirata argentina, descargar rust pirata argentina, rust 2275 argentina, rust 2388 argentina, rust pirata buenos aires, rust pirata cordoba, rust pirata rosario, jugar rust gratis argentina',
    locale: 'es_AR',
    h1: 'Rust Pirata en Argentina',
    content: `Rust Pirata en Argentina es la mejor forma de jugar Rust sin pagar Steam. Con servidores dedicados en LATAM, el ping desde Buenos Aires, Córdoba, Rosario y otras ciudades argentinas es de solo 40-60ms, ideal para PvP competitivo.

Nuestro servidor Rust Old School opera con las versiones 2275 OldRecoil y 2388 Actualizado, con más de 30,000 plugins disponibles incluyendo kits, economía, tiendas, anti-cheat y más.

Más de 10,000 jugadores argentinos ya juegan en nuestros servidores. La comunidad es activa 24/7 con eventos, torneos y soporte directo por Discord.`,
    features: ['Ping bajo 40-60ms desde Buenos Aires', '+10,000 jugadores argentinos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en español'],
    faq: [
      { q: '¿Cómo descargar Rust Pirata en Argentina?', a: 'Contactanos por Discord y te enviamos el enlace de descarga seguro. Funciona en todo Argentina sin problemas de latencia. También podés descargar desde nuestra página de descargas.' },
      { q: '¿Cuánto ping tengo desde Buenos Aires?', a: 'Desde Buenos Aires el ping promedio es de 40-60ms, ideal para jugar Rust Pirata sin lag. Nuestros servidores están optimizados para Argentina.' },
      { q: '¿Rust Pirata es gratis en Argentina?', a: 'Sí, la descarga del juego es gratis. Los servidores premium tienen un costo único desde $20 USD con soporte incluido.' },
      { q: '¿Qué versión de Rust funciona en Argentina?', a: 'Tenemos Rust 2275 OldRecoil (clásico) y Rust 2388 Actualizado (última versión). Ambos funcionan perfectamente en Argentina.' },
      { q: '¿Necesito VPN para jugar desde Argentina?', a: 'No, no necesitás VPN. Nuestros servidores están en LATAM con ping bajo para Argentina directamente.' }
    ],
    related: ['rust-pirata-brasil', 'rust-pirata-chile', 'descargar-rust-pirata']
  },
  'rust-pirata-brasil': {
    title: 'Rust Pirata Brasil - Baixar Gratis 2026 - LATAMRUST',
    description: 'Baixe Rust Pirata gratis no Brasil. Ping baixo 15-30ms, +10,000 jogadores ativos. Rust 2275 e 2388 disponíveis. Jogue agora.',
    keywords: 'rust pirata brasil, rust pirata gratis brasil, baixar rust pirata, servidor rust pirata brasil, rust 2275 brasil, rust 2388 brasil, rust pirata são paulo, rust pirata rio de janeiro, rust br gratis, jogar rust pirata',
    locale: 'pt_BR',
    h1: 'Rust Pirata no Brasil',
    content: `Rust Pirata no Brasil é a melhor forma de jogar Rust sem pagar Steam. Com servidores dedicados na LATAM, o ping de São Paulo, Rio de Janeiro, Curitiba e outras cidades brasileiras é de apenas 15-30ms, ideal para PvP competitivo.

Nosso servidor Rust Old School opera com as versões 2275 OldRecoil e 2388 Atualizado, com mais de 30,000 plugins disponíveis incluindo kits, economia, lojas, anti-cheat e mais.

Mais de 10,000 jogadores brasileiros já jogam nos nossos servidores. A comunidade é ativa 24/7 com eventos, torneios e suporte direto por Discord.`,
    features: ['Ping baixo 15-30ms de São Paulo', '+10,000 jogadores brasileiros ativos', 'Rust 2275 OldRecoil e Rust 2388', '+30,000 plugins disponíveis', 'AntiCheat profissional', 'Suporte 24/7 em português'],
    faq: [
      { q: 'Como baixar Rust Pirata no Brasil?', a: 'Entre em contato pelo Discord e enviamos o link de download seguro. Funciona em todo o Brasil sem problemas de latência.' },
      { q: 'Qual ping de São Paulo?', a: 'De São Paulo o ping médio é de 15-30ms, ideal para jogar Rust Pirata sem lag. Servidores otimizados para Brasil.' },
      { q: 'Rust Pirata é gratis no Brasil?', a: 'Sim, o download do jogo é gratis. Servidores premium têm custo único a partir de $20 USD com suporte incluído.' },
      { q: 'Preciso de VPN para jogar no Brasil?', a: 'Não, não precisa de VPN. Nossos servidores estão na LATAM com ping baixo para o Brasil diretamente.' },
      { q: 'Qual a diferença entre Rust 2275 e 2388?', a: 'O 2275 tem o recoil clássico preferido por muitos, o 2388 é a versão mais recente com gráficos melhorados.' }
    ],
    related: ['rust-pirata-argentina', 'comunidade-rust-family', 'rust-pirata-mexico']
  },
  'rust-pirata-mexico': {
    title: 'Rust Pirata México - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en México. Ping bajo 50-70ms desde CDMX, Monterrey, Guadalajara. +10,000 jugadores activos. Juega ahora.',
    keywords: 'rust pirata méxico, rust pirata gratis méxico, servidor rust pirata méxico, descargar rust pirata méxico, rust 2275 méxico, rust 2388 méxico, rust pirata cdmx, rust pirata monterrey, rust pirata guadalajara, jugar rust gratis méxico',
    locale: 'es_MX',
    h1: 'Rust Pirata en México',
    content: `Rust Pirata en México es la mejor forma de jugar Rust sin pagar Steam. Con servidores dedicados en LATAM, el ping desde CDMX, Monterrey, Guadalajara y otras ciudades mexicanas es de solo 50-70ms, ideal para PvP competitivo.

Nuestro servidor Rust Old School opera con las versiones 2275 OldRecoil y 2388 Actualizado, con más de 30,000 plugins disponibles incluyendo kits, economía, tiendas, anti-cheat y más.

Más de 10,000 jugadores mexicanos ya juegan en nuestros servidores. La comunidad es activa 24/7 con eventos, torneos y soporte directo por Discord.`,
    features: ['Ping bajo 50-70ms desde CDMX', '+10,000 jugadores mexicanos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en español'],
    faq: [
      { q: '¿Cómo descargar Rust Pirata en México?', a: 'Contactanos por Discord y te enviamos el enlace de descarga seguro. Funciona en todo México sin problemas de latencia.' },
      { q: '¿Cuánto ping tengo desde CDMX?', a: 'Desde CDMX el ping promedio es de 50-70ms, ideal para jugar Rust Pirata sin lag.' },
      { q: '¿Rust Pirata es gratis en México?', a: 'Sí, la descarga del juego es gratis. Los servidores premium tienen un costo único desde $20 USD.' },
      { q: '¿Funciona en Monterrey y Guadalajara?', a: 'Sí, funciona perfectamente en todas las ciudades de México. Ping bajo y estable.' }
    ],
    related: ['rust-pirata-argentina', 'rust-pirata-colombia', 'descargar-rust-pirata']
  },
  'rust-pirata-chile': {
    title: 'Rust Pirata Chile - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Chile. Ping bajo 60-80ms desde Santiago, Valparaíso, Concepción. +5,000 jugadores activos. Juega ahora.',
    keywords: 'rust pirata chile, rust pirata gratis chile, servidor rust pirata chile, descargar rust pirata chile, rust 2275 chile, rust 2388 chile, rust pirata santiago, rust pirata valparaíso, jugar rust gratis chile',
    locale: 'es_CL',
    h1: 'Rust Pirata en Chile',
    content: `Rust Pirata en Chile es la mejor forma de jugar Rust sin pagar Steam. Con servidores dedicados en LATAM, el ping desde Santiago, Valparaíso, Concepción y otras ciudades chilenas es de solo 60-80ms.

Nuestro servidor Rust Old School opera con las versiones 2275 OldRecoil y 2388 Actualizado, con más de 30,000 plugins disponibles. Más de 5,000 jugadores chilenos ya juegan en nuestros servidores con soporte 24/7.`,
    features: ['Ping bajo 60-80ms desde Santiago', '+5,000 jugadores chilenos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en español'],
    faq: [
      { q: '¿Cómo descargar Rust Pirata en Chile?', a: 'Contactanos por Discord y te enviamos el enlace de descarga seguro. Funciona en todo Chile sin problemas de latencia.' },
      { q: '¿Cuánto ping tengo desde Santiago?', a: 'Desde Santiago el ping promedio es de 60-80ms, ideal para jugar Rust Pirata sin lag.' },
      { q: '¿Rust Pirata es gratis en Chile?', a: 'Sí, la descarga del juego es gratis. Los servidores premium tienen un costo único desde $20 USD.' }
    ],
    related: ['rust-pirata-argentina', 'rust-pirata-peru', 'descargar-rust-pirata']
  },
  'rust-pirata-colombia': {
    title: 'Rust Pirata Colombia - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Colombia. Ping bajo 70-90ms desde Bogotá, Medellín, Cali. +10,000 jugadores activos. Juega ahora.',
    keywords: 'rust pirata colombia, rust pirata gratis colombia, servidor rust pirata colombia, descargar rust pirata colombia, rust 2275 colombia, rust 2388 colombia, rust pirata bogotá, rust pirata medellín, jugar rust gratis colombia',
    locale: 'es_CO',
    h1: 'Rust Pirata en Colombia',
    content: `Rust Pirata en Colombia es la mejor forma de jugar Rust sin pagar Steam. Con servidores dedicados en LATAM, el ping desde Bogotá, Medellín, Cali y otras ciudades colombianas es de solo 70-90ms.

Nuestro servidor Rust Old School opera con las versiones 2275 OldRecoil y 2388 Actualizado, con más de 30,000 plugins disponibles. Más de 10,000 jugadores colombianos ya juegan en nuestros servidores con soporte 24/7.`,
    features: ['Ping bajo 70-90ms desde Bogotá', '+10,000 jugadores colombianos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en español'],
    faq: [
      { q: '¿Cómo descargar Rust Pirata en Colombia?', a: 'Contactanos por Discord y te enviamos el enlace de descarga seguro. Funciona en toda Colombia sin problemas de latencia.' },
      { q: '¿Cuánto ping tengo desde Bogotá?', a: 'Desde Bogotá el ping promedio es de 70-90ms, ideal para jugar Rust Pirata sin lag.' },
      { q: '¿Rust Pirata es gratis en Colombia?', a: 'Sí, la descarga del juego es gratis. Los servidores premium tienen un costo único desde $20 USD.' }
    ],
    related: ['rust-pirata-argentina', 'rust-pirata-venezuela', 'descargar-rust-pirata']
  },
  'rust-pirata-peru': {
    title: 'Rust Pirata Perú - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Perú. Ping bajo 60-80ms desde Lima, Arequipa, Trujillo. +5,000 jugadores activos. Rust 2275 y 2388. Juega ahora.',
    keywords: 'rust pirata perú, rust pirata gratis perú, servidor rust pirata perú, descargar rust pirata perú, rust 2275 perú, rust pirata lima, rust pirata arequipa, jugar rust gratis perú',
    locale: 'es_PE',
    h1: 'Rust Pirata en Perú',
    content: `Rust Pirata en Perú es la mejor forma de jugar Rust sin pagar Steam. Con servidores dedicados en LATAM, el ping desde Lima, Arequipa, Trujillo y otras ciudades peruanas es de solo 60-80ms.

Nuestro servidor Rust Old School opera con las versiones 2275 OldRecoil y 2388 Actualizado, con más de 30,000 plugins disponibles. Más de 5,000 jugadores peruanos ya juegan en nuestros servidores con soporte 24/7.`,
    features: ['Ping bajo 60-80ms desde Lima', '+5,000 jugadores peruanos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en español'],
    faq: [
      { q: '¿Cómo descargar Rust Pirata en Perú?', a: 'Contactanos por Discord y te enviamos el enlace de descarga seguro. Funciona en todo Perú sin problemas de latencia.' },
      { q: '¿Cuánto ping tengo desde Lima?', a: 'Desde Lima el ping promedio es de 60-80ms, ideal para jugar Rust Pirata sin lag.' },
      { q: '¿Rust Pirata es gratis en Perú?', a: 'Sí, la descarga del juego es gratis. Los servidores premium tienen un costo único desde $20 USD.' }
    ],
    related: ['rust-pirata-chile', 'rust-pirata-ecuador', 'descargar-rust-pirata']
  },
  'rust-pirata-uruguay': {
    title: 'Rust Pirata Uruguay - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Uruguay. Ping bajo 30-50ms desde Montevideo. +3,000 jugadores activos. Rust 2275 y 2388. Juega ahora.',
    keywords: 'rust pirata uruguay, rust pirata gratis uruguay, servidor rust pirata uruguay, descargar rust pirata uruguay, rust pirata montevideo, jugar rust gratis uruguay',
    locale: 'es_UY',
    h1: 'Rust Pirata en Uruguay',
    content: `Rust Pirata en Uruguay es la mejor forma de jugar Rust sin pagar Steam. Con servidores dedicados en LATAM, el ping desde Montevideo y todo el país es de solo 30-50ms, uno de los más bajos de la región.

Nuestro servidor Rust Old School opera con las versiones 2275 OldRecoil y 2388 Actualizado, con más de 30,000 plugins disponibles. Más de 3,000 jugadores uruguayos ya juegan en nuestros servidores con soporte 24/7.`,
    features: ['Ping bajo 30-50ms desde Montevideo', '+3,000 jugadores uruguayos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en español'],
    faq: [
      { q: '¿Cómo descargar Rust Pirata en Uruguay?', a: 'Contactanos por Discord y te enviamos el enlace de descarga seguro. Funciona en todo Uruguay.' },
      { q: '¿Cuánto ping tengo desde Montevideo?', a: 'Desde Montevideo el ping promedio es de 30-50ms, ideal para jugar Rust Pirata sin lag.' },
      { q: '¿Rust Pirata es gratis en Uruguay?', a: 'Sí, la descarga del juego es gratis. Los servidores premium tienen un costo único desde $20 USD.' }
    ],
    related: ['rust-pirata-argentina', 'rust-pirata-brasil', 'descargar-rust-pirata']
  },
  'rust-pirata-paraguay': {
    title: 'Rust Pirata Paraguay - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Paraguay. Ping bajo 20-40ms desde Asunción. +2,000 jugadores activos. Rust 2275 y 2388. Juega ahora.',
    keywords: 'rust pirata paraguay, rust pirata gratis paraguay, servidor rust pirata paraguay, descargar rust pirata paraguay, rust pirata asunción, jugar rust gratis paraguay',
    locale: 'es_PY',
    h1: 'Rust Pirata en Paraguay',
    content: `Rust Pirata en Paraguay es la mejor forma de jugar Rust sin pagar Steam. Con ping de solo 20-40ms desde Asunción, Paraguay tiene uno de los pings más bajos de toda LATAM. Nuestro servidor fue fundado por ParaguayRAIDER, desarrollador de plugins para RustSpain y Brasa.gg.

Más de 2,000 jugadores paraguayos ya juegan en nuestros servidores con Rust 2275 OldRecoil y 2388 Actualizado, más de 30,000 plugins y soporte 24/7.`,
    features: ['Ping bajo 20-40ms desde Asunción', '+2,000 jugadores paraguayos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en español'],
    faq: [
      { q: '¿Cómo descargar Rust Pirata en Paraguay?', a: 'Contactanos por Discord y te enviamos el enlace de descarga seguro. Funciona en todo Paraguay.' },
      { q: '¿Quién creó LATAMRUST?', a: 'LATAMRUST fue creado por ParaguayRAIDER, desarrollador de plugins para RustSpain y Brasa.gg, con más de 8 años de experiencia.' },
      { q: '¿Rust Pirata es gratis en Paraguay?', a: 'Sí, la descarga del juego es gratis. Los servidores premium tienen un costo único desde $20 USD.' }
    ],
    related: ['rust-pirata-argentina', 'rust-pirata-brasil', 'descargar-rust-pirata']
  },
  'rust-pirata-ecuador': {
    title: 'Rust Pirata Ecuador - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Ecuador. Ping bajo 70-90ms desde Quito, Guayaquil. +3,000 jugadores activos. Rust 2275 y 2388. Juega ahora.',
    keywords: 'rust pirata ecuador, rust pirata gratis ecuador, servidor rust pirata ecuador, descargar rust pirata ecuador, rust pirata quito, rust pirata guayaquil, jugar rust gratis ecuador',
    locale: 'es_EC',
    h1: 'Rust Pirata en Ecuador',
    content: `Rust Pirata en Ecuador es la mejor forma de jugar Rust sin pagar Steam. Con ping de 70-90ms desde Quito, Guayaquil y todo el país, podés jugar cómodamente.

Nuestro servidor Rust Old School opera con las versiones 2275 OldRecoil y 2388 Actualizado, con más de 30,000 plugins disponibles. Más de 3,000 jugadores ecuatorianos ya juegan en nuestros servidores con soporte 24/7.`,
    features: ['Ping bajo 70-90ms desde Quito', '+3,000 jugadores ecuatorianos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en español'],
    faq: [
      { q: '¿Cómo descargar Rust Pirata en Ecuador?', a: 'Contactanos por Discord y te enviamos el enlace de descarga seguro. Funciona en todo Ecuador.' },
      { q: '¿Rust Pirata es gratis en Ecuador?', a: 'Sí, la descarga del juego es gratis. Los servidores premium tienen un costo único desde $20 USD.' }
    ],
    related: ['rust-pirata-peru', 'rust-pirata-colombia', 'descargar-rust-pirata']
  },
  'rust-pirata-bolivia': {
    title: 'Rust Pirata Bolivia - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Bolivia. Ping bajo 60-80ms desde La Paz, Santa Cruz. +2,000 jugadores activos. Rust 2275 y 2388. Juega ahora.',
    keywords: 'rust pirata bolivia, rust pirata gratis bolivia, servidor rust pirata bolivia, descargar rust pirata bolivia, rust pirata la paz, rust pirata santa cruz, jugar rust gratis bolivia',
    locale: 'es_BO',
    h1: 'Rust Pirata en Bolivia',
    content: `Rust Pirata en Bolivia es la mejor forma de jugar Rust sin pagar Steam. Con ping de 60-80ms desde La Paz, Santa Cruz y todo el país, podés jugar sin lag.

Nuestro servidor Rust Old School opera con las versiones 2275 OldRecoil y 2388 Actualizado, con más de 30,000 plugins disponibles. Más de 2,000 jugadores bolivianos ya juegan en nuestros servidores con soporte 24/7.`,
    features: ['Ping bajo 60-80ms desde La Paz', '+2,000 jugadores bolivianos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en español'],
    faq: [
      { q: '¿Cómo descargar Rust Pirata en Bolivia?', a: 'Contactanos por Discord y te enviamos el enlace de descarga seguro. Funciona en toda Bolivia.' },
      { q: '¿Rust Pirata es gratis en Bolivia?', a: 'Sí, la descarga del juego es gratis. Los servidores premium tienen un costo único desde $20 USD.' }
    ],
    related: ['rust-pirata-peru', 'rust-pirata-argentina', 'descargar-rust-pirata']
  },
  'rust-pirata-venezuela': {
    title: 'Rust Pirata Venezuela - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust Pirata gratis en Venezuela. Ping bajo 80-100ms desde Caracas, Maracaibo. +4,000 jugadores activos. Rust 2275 y 2388. Juega ahora.',
    keywords: 'rust pirata venezuela, rust pirata gratis venezuela, servidor rust pirata venezuela, descargar rust pirata venezuela, rust pirata caracas, jugar rust gratis venezuela',
    locale: 'es_VE',
    h1: 'Rust Pirata en Venezuela',
    content: `Rust Pirata en Venezuela es la mejor forma de jugar Rust sin pagar Steam. Con ping de 80-100ms desde Caracas, Maracaibo y todo el país, podés jugar cómodamente.

Nuestro servidor Rust Old School opera con las versiones 2275 OldRecoil y 2388 Actualizado, con más de 30,000 plugins disponibles. Más de 4,000 jugadores venezolanos ya juegan en nuestros servidores con soporte 24/7.`,
    features: ['Ping bajo 80-100ms desde Caracas', '+4,000 jugadores venezolanos activos', 'Rust 2275 OldRecoil y Rust 2388', '+30,000 plugins disponibles', 'AntiCheat profesional', 'Soporte 24/7 en español'],
    faq: [
      { q: '¿Cómo descargar Rust Pirata en Venezuela?', a: 'Contactanos por Discord y te enviamos el enlace de descarga seguro. Funciona en toda Venezuela.' },
      { q: '¿Rust Pirata es gratis en Venezuela?', a: 'Sí, la descarga del juego es gratis. Los servidores premium tienen un costo único desde $20 USD.' }
    ],
    related: ['rust-pirata-colombia', 'rust-pirata-brasil', 'descargar-rust-pirata']
  },
  // === PÁGINAS DE CONTENIDO ===
  'descargar-rust-pirata': {
    title: 'Descargar Rust Pirata Gratis 2026 - Rust 2275 y 2388 LATAMRUST',
    description: 'Descarga Rust Pirata gratis 2026. Rust 2275 OldRecoil y Rust 2388 Actualizado. Sin Steam, sin Epic Games. Link seguro sin virus.',
    keywords: 'descargar rust pirata, rust pirata gratis, rust 2275 descargar, rust 2388 descargar, rust pirata pc, rust sin steam, rust sin epic games, rust pirata download, baixar rust pirata, descargar rust 2026',
    locale: 'es_ES',
    h1: 'Descargar Rust Pirata Gratis',
    content: `Descarga Rust Pirata gratis en tu PC. Tenemos las dos versiones más populares: Rust 2275 OldRecoil (la clásica que la comunidad ama) y Rust 2388 Actualizado (la última versión con mejores gráficos).

Ambas versiones son completamente gratis para descargar. No necesitás Steam ni Epic Games. Los archivos están verificados, sin virus, y la instalación es rápida y sencilla.

Una vez descargado, podés conectarte a nuestro servidor LATAMRUST con ping bajo desde cualquier país de Latinoamérica. La comunidad tiene más de 10,000 jugadores activos 24/7.`,
    features: ['Descarga gratis y segura', 'Rust 2275 OldRecoil', 'Rust 2388 Actualizado', 'Sin Steam ni Epic Games', 'Archivos verificados sin virus', 'Instalación rápida'],
    faq: [
      { q: '¿Rust pirata es gratis?', a: 'Sí, la descarga del juego es gratis. Solo pagás si querés un servidor premium con soporte.' },
      { q: '¿Es seguro descargar Rust pirata?', a: 'Sí, nuestros archivos están verificados y libres de virus. Descarga 100% segura.' },
      { q: '¿Necesito Steam para jugar?', a: 'No, Rust pirata no necesita Steam ni Epic Games. Se ejecuta directamente en tu PC.' },
      { q: '¿Cuánto pesa la descarga?', a: 'Rust 2275 pesa aproximadamente 3GB y Rust 2388 alrededor de 4GB. Se descarga rápido con cualquier conexión.' },
      { q: '¿Funciona en Windows 10 y 11?', a: 'Sí, funciona perfectamente en Windows 10 y Windows 11. También compatible con versiones anteriores.' }
    ],
    related: ['rust-pirata-gratis', 'rust-2275-oldrecoil', 'rust-2388-actualizado']
  },
  'rust-pirata-gratis': {
    title: 'Rust Pirata Gratis 2026 - Jugar Sin Pagar LATAMRUST',
    description: 'Juega Rust Pirata gratis en 2026. Sin pagar Steam ni Epic Games. Rust 2275 y 2388 disponibles. Servidores con +30,000 plugins.',
    keywords: 'rust pirata gratis, rust gratis, jugar rust gratis, rust sin pagar, rust 2275 gratis, rust 2388 gratis, rust pirata free, rust online gratis, jugar rust sin dinero, rust gratis 2026',
    locale: 'es_ES',
    h1: 'Rust Pirata Gratis',
    content: `Juega Rust pirata gratis en 2026. Sin pagar Steam ni Epic Games. Disponible Rust 2275 y 2388 con +30,000 plugins. Servidores con ping bajo en toda LATAM.

Rust pirata es una versión privada del juego original que permite jugar gratis en servidores privados. Con más de 30,000 plugins, AntiCheat profesional y soporte 24/7.

La diferencia con Steam es que no pagás el juego ($40 USD) ni necesitás una cuenta. Solo descargás, instalás y jugás. Es así de simple.`,
    features: ['100% gratis', 'Rust 2275 y 2388', '+30,000 plugins', 'Sin pagar Steam', 'Ping bajo LATAM', 'Soporte 24/7'],
    faq: [
      { q: '¿Rust pirata es realmente gratis?', a: 'Sí, la descarga y el juego son gratis. Solo pagás si querés un servidor premium.' },
      { q: '¿Hay virus en la descarga?', a: 'No, nuestros archivos están verificados y son 100% seguros.' },
      { q: '¿Qué diferencia hay con Steam?', a: 'En Steam pagás $40 USD por el juego. En pirata es gratis y tenés más plugins disponibles.' },
      { q: '¿Puedo jugar con amigos?', a: 'Sí, es igual que en Steam. Te conectás al servidor y jugás con quien quieras.' }
    ],
    related: ['descargar-rust-pirata', 'rust-2275-oldrecoil', 'rust-2388-actualizado']
  },
  'rust-2275-oldrecoil': {
    title: 'Rust 2275 OldRecoil - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust 2275 OldRecoil gratis. La versión clásica con recoil original. +30,000 plugins. Servidores con ping bajo LATAM.',
    keywords: 'rust 2275, rust 2275 oldrecoil, rust 2275 descargar, rust oldrecoil, rust clásico, rust recoil original, rust 2275 gratis, rust 2275 pc, rust 2275 download, oldrecoil rust',
    locale: 'es_ES',
    h1: 'Rust 2275 OldRecoil',
    content: `Rust 2275 OldRecoil es la versión clásica favorita de la comunidad. Tiene el recoil original que todos conocen y aman, el que hicieron famoso los grandes youtubers de Rust.

Esta versión es perfecta para PvP competitivo porque el recoil es predecible y se puede aprender. Muchos servidores profesionales usan esta versión exacta.

Descargá gratis Rust 2275 OldRecoil y conectate a nuestro servidor LATAMRUST. Tenemos +30,000 plugins, AntiCheat y soporte 24/7.`,
    features: ['Versión 2275 estable', 'Recoil clásico original', '+30,000 plugins', 'Servidores optimizados', 'Ping bajo LATAM', 'Descarga gratis'],
    faq: [
      { q: '¿Qué es Rust 2275 OldRecoil?', a: 'Es la versión 2275 de Rust con el recoil clásico original que la comunidad prefiere.' },
      { q: '¿Por qué jugar 2275 en vez de 2388?', a: 'Porque el recoil clásico es más predecible y la comunidad lo prefiere para PvP competitivo.' },
      { q: '¿Cuántos servidores hay de 2275?', a: 'Hay cientos de servidores de 2275 activos en LATAM. Nuestro servidor es uno de los más populares.' },
      { q: '¿Los plugins funcionan igual?', a: 'Sí, los plugins de Oxide/uMod funcionan igual en 2275 que en 2388.' }
    ],
    related: ['rust-2388-actualizado', 'descargar-rust-pirata', 'plugins-oxide-rust']
  },
  'rust-2388-actualizado': {
    title: 'Rust 2388 Actualizado - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga Rust 2388 Actualizado gratis. La última versión con mejores gráficos y optimizaciones. +30,000 plugins premium.',
    keywords: 'rust 2388, rust 2388 actualizado, rust 2388 descargar, rust última versión, rust 2026, rust nuevo, rust 2388 gratis, rust 2388 pc, rust 2388 download, rust actualizado',
    locale: 'es_ES',
    h1: 'Rust 2388 Actualizado',
    content: `Rust 2388 Actualizado es la última versión de Rust con mejores gráficos, optimizaciones de rendimiento y nuevas funciones que mejoran la experiencia de juego.

Si querés lo último en Rust, esta es tu versión. Tiene mejores texturas, optimización de rendimiento, nuevas armas y mejoras en el gameplay que la versión anterior no tiene.

Descargá gratis Rust 2388 y conectate a nuestro servidor LATAMRUST. +30,000 plugins premium, AntiCheat y soporte 24/7.`,
    features: ['Última versión estable', 'Mejores gráficos', '+30,000 plugins premium', 'Optimizado para LATAM', 'Nuevas funciones', 'Descarga gratis'],
    faq: [
      { q: '¿Qué hay de nuevo en Rust 2388?', a: 'Mejores gráficos, optimizaciones de rendimiento, nuevas armas y mejoras en el gameplay.' },
      { q: '¿Rust 2388 es mejor que 2275?', a: 'Depende de tu preferencia. 2388 tiene mejores gráficos, pero 2275 tiene el recoil clásico preferido por muchos.' },
      { q: '¿Necesito mejor PC para 2388?', a: 'No, 2388 está mejor optimizado que versiones anteriores. Funciona bien en PCs de gama media.' },
      { q: '¿Los plugins de 2275 funcionan en 2388?', a: 'La mayoría sí, pero algunos plugins antiguos pueden necesitar actualizaciones.' }
    ],
    related: ['rust-2275-oldrecoil', 'descargar-rust-pirata', 'plugins-oxide-rust']
  },
  'plugins-oxide-rust': {
    title: 'Plugins Oxide Rust - Descargar Gratis 2026 - LATAMRUST',
    description: 'Descarga plugins Oxide gratis para Rust pirata. +30,000 plugins disponibles. Kits, economía, tiendas, anti-cheat y más.',
    keywords: 'plugins oxide rust, oxide plugins, rust plugins, umod plugins, plugins gratis rust, tienda plugins rust, economia rust, kits rust, oxide download, umod download',
    locale: 'es_ES',
    h1: 'Plugins Oxide para Rust',
    content: `Descarga miles de plugins Oxide gratis para tu servidor de Rust pirata. Desde kits y economía hasta anti-cheat y tiendas. Compatible con Rust 2275 y 2388.

Los plugins se instalan fácilmente: descargá el archivo .cs, colocá en la carpeta /oxide/plugins/ y reiniciá el servidor. Se carga automáticamente.

Los más populares son: Kits, BetterChat, Vanish, NoEscape, Backpacks, Economics, ServerRewards y RustAdmin AntiCheat.`,
    features: ['+30,000 plugins gratis', 'Compatible con Rust 2275 y 2388', 'Kits y economía', 'Tiendas y VIP', 'Anti-cheat', 'Fácil instalación'],
    faq: [
      { q: '¿Cómo instalar plugins Oxide?', a: 'Descargá el plugin .cs y colocalo en /oxide/plugins/. Se carga automáticamente al reiniciar.' },
      { q: '¿Los plugins son gratis?', a: 'La mayoría son gratis en umod.org. Algunos premium están en codefling.com.' },
      { q: '¿Cuántos plugins puedo instalar?', a: 'Depende de tu VPS. Recomendamos máximo 50-80 plugins para mejor rendimiento.' },
      { q: '¿Los plugins funcionan en 2275 y 2388?', a: 'Sí, la mayoría de plugins son compatibles con ambas versiones.' }
    ],
    related: ['descargar-rust-pirata', 'rust-2275-oldrecoil', 'como-crear-servidor-rust-pirata']
  },
  'rust-pirata-sin-steam': {
    title: 'Rust Pirata Sin Steam - Jugar Gratis 2026 - LATAMRUST',
    description: 'Juega Rust pirata sin Steam ni Epic Games. Descarga gratis, sin cuentas, sin pagos. Rust 2275 y 2388 disponibles.',
    keywords: 'rust pirata sin steam, rust sin steam, rust sin epic games, rust sin cuenta, rust gratis sin steam, rust pirata offline, rust sin conexión, jugar rust sin steam',
    locale: 'es_ES',
    h1: 'Rust Pirata Sin Steam',
    content: `Juega Rust pirata sin necesidad de Steam ni Epic Games. Descarga gratis, ejecutá y jugá. Disponible Rust 2275 y 2388 con servidores online.

La gran ventaja de Rust pirata es que no necesitás comprar el juego en Steam ($40 USD) ni crear cuentas. Solo descargás el ejecutable, lo instalás y te conectás a un servidor.

Funciona igual que Steam pero sin pagar. Misma calidad, mismos gráficos, mismos servidores. La diferencia es que es gratis.`,
    features: ['Sin Steam ni Epic Games', 'Sin cuentas necesarias', 'Descarga gratis', 'Rust 2275 y 2388', 'Servidores online', 'Jugando en minutos'],
    faq: [
      { q: '¿Realmente no necesito Steam?', a: 'No, Rust pirata se ejecuta directamente sin necesidad de Steam ni Epic Games.' },
      { q: '¿Puedo jugar online?', a: 'Sí, hay miles de servidores online donde podés jugar con otros jugadores.' },
      { q: '¿Es lo mismo que Steam?', a: 'Sí, es el mismo juego. La única diferencia es que no pagás y no necesitás cuenta.' },
      { q: '¿Mis amigos de Steam pueden jugar conmigo?', a: 'Sí, si ellos también tienen Rust pirata pueden jugar juntos en el mismo servidor.' }
    ],
    related: ['descargar-rust-pirata', 'rust-pirata-gratis', 'rust-2275-oldrecoil']
  },
  'como-crear-servidor-rust-pirata': {
    title: 'Cómo Crear Servidor Rust Pirata 2026 - Guía Completa LATAMRUST',
    description: 'Guía completa para crear tu servidor de Rust Pirata 2275 o 2388. Paso a paso con plugins, AntiCheat, configuración y soporte 24/7.',
    keywords: 'como crear servidor rust pirata, crear servidor rust 2275, crear servidor rust 2388, configurar servidor rust, servidor rust paso a paso, montar servidor rust, hosting rust pirata',
    locale: 'es_ES',
    h1: 'Cómo Crear un Servidor de Rust Pirata',
    content: `Guía completa paso a paso para crear tu servidor de Rust Pirata. Aprende a configurar Rust 2275 o 2388 con plugins, AntiCheat y optimización para LATAM.

Necesitás un VPS (servidor virtual) con al menos 4GB de RAM. Recomendamos Ubuntu 20.04 o superior. El proceso de instalación toma unos 15 minutos.

Una vez instalado, podés agregar plugins de Oxide, configurar AntiCheat, crear reglas y optimizar el rendimiento para LATAM.`,
    features: ['Paso a paso detallado', 'Configuración de Rust 2275 y 2388', 'Instalación de plugins', 'AntiCheat configurado', 'Optimización para LATAM', 'Soporte 24/7'],
    faq: [
      { q: '¿Cuánto cuesta crear un servidor Rust pirata?', a: 'El servidor premium desde $20 USD (pago único). El hosting VPS se contrata por separado desde $5/mes.' },
      { q: '¿Necesito conocimientos técnicos?', a: 'No, nosotros nos encargamos de toda la configuración. Solo necesitás contactarnos por Discord.' },
      { q: '¿Cuánto tiempo tarda en estar listo?', a: 'Tu servidor puede estar listo en menos de 5 minutos después del pago.' },
      { q: '¿Cuántos plugins puedo instalar?', a: 'Depende de tu VPS. Recomendamos máximo 50-80 plugins para mejor rendimiento.' }
    ],
    related: ['configurar-servidor-rust', 'mejores-plugins-rust-pirata', 'descargar-rust-pirata']
  },
  'mejores-plugins-rust-pirata': {
    title: 'Mejores Plugins Rust Pirata 2026 - Top 30 Plugins Gratis LATAMRUST',
    description: 'Los mejores plugins gratis para Rust Pirata 2275 y 2388. Kits, economía, anti-cheat, tiendas, VIP y más. Lista actualizada 2026.',
    keywords: 'mejores plugins rust pirata, plugins rust 2275, plugins rust 2388, oxide plugins rust, umod plugins, plugins gratis rust, tienda plugins rust, economia rust, top plugins rust',
    locale: 'es_ES',
    h1: 'Mejores Plugins para Rust Pirata',
    content: `Los 30 mejores plugins gratis para servidores Rust Pirata. Desde kits y economía hasta anti-cheat y tiendas. Lista actualizada para 2026.

Estos plugins son compatibles con Rust 2275 OldRecoil y Rust 2388 Actualizado. Se instalan fácilmente con Oxide/uMod en cualquier servidor.

Los más descargados: Kits (armas y objetos), Economics (moneda virtual), ServerRewards (recompensas), Backpacks (mochilas), NoEscape (anti-escape), Vanish (invisible), BetterChat (mejor chat) y RustAdmin AntiCheat.`,
    features: ['Top 30 plugins gratis', 'Plugins para Rust 2275 y 2388', 'Kits, economía, tiendas', 'Anti-cheat profesional', 'Guía de instalación', 'Configs recomendados'],
    faq: [
      { q: '¿Dónde descargo plugins Rust?', a: 'En umod.org o codefling.com. También tenemos packs de plugins listos para instalar.' },
      { q: '¿Cuáles son los plugins esenciales?', a: 'Kits, BetterChat, Vanish, NoEscape, Backpacks, Economics, ServerRewards y AntiCheat.' },
      { q: '¿Los plugins son realmente gratis?', a: 'La mayoría sí. Algunos premium en codefling.com cuestan entre $5-15 USD.' },
      { q: '¿Cómo actualizo un plugin?', a: 'Descargás la nueva versión y reemplazás el archivo .cs en /oxide/plugins/. Se actualiza al reiniciar.' }
    ],
    related: ['plugins-oxide-rust', 'como-crear-servidor-rust-pirata', 'configurar-servidor-rust']
  },
  'configurar-servidor-rust': {
    title: 'Configurar Servidor Rust Pirata - Guía Completa 2026 LATAMRUST',
    description: 'Guía para configurar tu servidor Rust pirata. Plugins, AntiCheat, optimización, reglas y más. Soporte 24/7.',
    keywords: 'configurar servidor rust, configurar rust pirata, servidor rust plugins, anti-cheat rust, optimizar servidor rust, reglas servidor rust, rustadmin anti-cheat',
    locale: 'es_ES',
    h1: 'Configurar Servidor Rust Pirata',
    content: `Aprende a configurar tu servidor de Rust pirata con los mejores plugins, AntiCheat, optimización y reglas. Guía completa para administradores.

La configuración incluye: instalación de Oxide, plugins esenciales, AntiCheat (RustAdmin), configuración de reglas, optimización de rendimiento y backup automático.

Nuestro equipo se encarga de toda la configuración si lo preferís. Soporte directo por Discord 24/7.`,
    features: ['Configuración paso a paso', 'Plugins recomendados', 'Anti-cheat configurado', 'Optimización de rendimiento', 'Reglas de servidor', 'Soporte 24/7'],
    faq: [
      { q: '¿Cuántos plugins puedo instalar?', a: 'Depende de tu VPS. Recomendamos máximo 50-80 plugins para mejor rendimiento.' },
      { q: '¿Cuál es el mejor AntiCheat?', a: 'RustAdmin AntiCheat es el más utilizado y efectivo para servidores pirata.' },
      { q: '¿Cómo优化o el rendimiento?', a: 'Reduce draw distance, optimiza plugins, usa backup automático y monitorea el uso de RAM.' },
      { q: '¿Cómo creo reglas para mi servidor?', a: 'Edita el archivo server.cfg y configura las reglas que quieras. También podés usar plugins de reglas.' }
    ],
    related: ['como-crear-servidor-rust-pirata', 'mejores-plugins-rust-pirata', 'plugins-oxide-rust']
  },
  'servidores-rust-pirata': {
    title: 'Servidores Rust Pirata 2026 - Top Mejores Servidores LATAM',
    description: 'Lista completa de los mejores servidores Rust Pirata 2026 en LATAM. Comparativa, reviews, ping, jugadores. LATAMRUST #1 ranking.',
    keywords: 'servidores rust pirata, mejores servidores rust pirata, servidores rust pirata brasil, servidores rust pirata argentina, top servidores rust, ranking servidores rust, lista servidores rust',
    locale: 'es_ES',
    h1: 'Mejores Servidores Rust Pirata',
    content: `Descubre los mejores servidores de Rust Pirata en Latinoamérica. Comparativa completa de ping, jugadores, plugins y soporte. LATAMRUST lidera el ranking.

Los factores más importantes para elegir un servidor son: ping bajo, uptime garantizado, AntiCheat, plugins disponibles y soporte técnico.

LATAMRUST ofrece todo esto con ping de 15-30ms en Brasil, 40-60ms en Argentina y soporte 24/7 por Discord.`,
    features: ['Ranking actualizado 2026', 'Comparativa de ping por país', 'Reviews de jugadores reales', 'Información de plugins', 'Planes y precios', 'Soporte técnico'],
    faq: [
      { q: '¿Cuál es el mejor servidor de Rust Pirata?', a: 'LATAMRUST es el servidor #1 en LATAM con el ping más bajo, más jugadores activos y mejor soporte técnico 24/7.' },
      { q: '¿Cómo elijo un servidor?', a: 'Fijate en el ping de tu país, si tiene AntiCheat, qué plugins ofrece y si tiene soporte 24/7.' },
      { q: '¿Los servidores son gratis?', a: 'Hay servidores gratis y premium. Los premium ofrecen mejor soporte, AntiCheat y más plugins.' }
    ],
    related: ['como-crear-servidor-rust-pirata', 'configurar-servidor-rust', 'rust-pirata-argentina']
  },
  'dayz': {
    title: 'DayZ Pirata 1.28 Gratis 2026 - Servidor LATAMRUST LATAM',
    description: 'Servidor DayZ Pirata 1.28 gratis para LATAM. Descargar DayZ pirata, ping bajo, +1000 jugadores. Survival, zombies, PvP.',
    keywords: 'dayz pirata, dayz 1.28, dayz gratis, descargar dayz pirata, servidor dayz pirata, dayz pirata brasil, dayz pirata argentina, dayz pirata mexico, dayz download',
    locale: 'es_ES',
    h1: 'DayZ Pirata Gratis',
    content: `Servidor DayZ Pirata 1.28 gratis para Latinoamérica. Descargá DayZ pirata y jugá con miles de jugadores. Survival, zombies, PvP.

DayZ es un juego de supervivencia post-apocalíptico donde debés sobrevivir contra zombies y otros jugadores. La versión pirata funciona igual que la de Steam pero es gratis.

Nuestro servidor LATAMRUST ofrece DayZ 1.28 con ping bajo en toda LATAM, eventos semanales y comunidad activa.`,
    features: ['DayZ 1.28 última versión', 'Ping bajo LATAM', '+1000 jugadores activos', 'Survival y PvP', 'Zombies y ambientación', 'Servidor 24/7'],
    faq: [
      { q: '¿Cómo descargar DayZ pirata?', a: 'Contactanos por Discord y te enviamos el enlace de descarga seguro de DayZ 1.28.' },
      { q: '¿DayZ pirata es gratis?', a: 'Sí, la descarga y el juego son gratis. Funciona igual que la versión de Steam.' },
      { q: '¿Puedo jugar con amigos?', a: 'Sí, si ellos también tienen DayZ pirata pueden unirse al mismo servidor.' }
    ],
    related: ['descargar-rust-pirata', 'rust-pirata-gratis', 'servidores-rust-pirata']
  }
};

// ============================================================
// HTML GENERATOR
// ============================================================

function generatePageHTML(seo, pagePath) {
  const url = `https://latamrust.online/${pagePath}/`;
  const isPortuguese = seo.locale === 'pt_BR';
  const lang = isPortuguese ? 'pt' : 'es';

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": seo.faq.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": isPortuguese ? "Início" : "Inicio", "item": "https://latamrust.online/" },
      { "@type": "ListItem", "position": 2, "name": seo.h1, "item": url }
    ]
  };

  // Related links HTML
  const relatedLinks = (seo.related || []).map(slug => {
    const r = seoPages[slug];
    if (!r) return '';
    return `<li><a href="/${slug}/">${r.h1}</a></li>`;
  }).filter(Boolean).join('\n            ');

  // Features HTML
  const featuresHTML = seo.features.map(f => `<li>✓ ${f}</li>`).join('\n            ');

  // FAQ HTML
  const faqHTML = seo.faq.map(f => `
          <details class="faq-item">
            <summary>${f.q}</summary>
            <p>${f.a}</p>
          </details>`).join('\n');

  return `<!DOCTYPE html>
<html lang="${lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${seo.title}</title>
    <meta name="description" content="${seo.description}" />
    <meta name="keywords" content="${seo.keywords}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="https://latamrust.online/LATAMLOGO.webp" />
    <meta property="og:locale" content="${seo.locale}" />
    <meta property="og:site_name" content="LATAMRUST" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seo.title}" />
    <meta name="twitter:description" content="${seo.description}" />
    <meta name="twitter:image" content="https://latamrust.online/LATAMLOGO.webp" />
    <link rel="icon" type="image/svg+xml" href="/logo_latam_embed.svg" />
    <link rel="apple-touch-icon" href="/LATAMLOGO.webp" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: 'Inter', sans-serif; background: #0a0a0a; color: #e5e7eb; line-height: 1.7; }
      .container { max-width: 800px; margin: 0 auto; padding: 40px 24px; }
      a { color: #ef4444; text-decoration: none; }
      a:hover { color: #f87171; }
      header { text-align: center; padding: 60px 24px 40px; border-bottom: 1px solid rgba(255,255,255,0.05); }
      header img { width: 80px; height: 80px; border-radius: 16px; margin-bottom: 20px; }
      h1 { font-size: 2.2rem; font-weight: 900; color: #fff; margin-bottom: 12px; }
      .subtitle { font-size: 1.1rem; color: #9ca3af; max-width: 600px; margin: 0 auto; }
      .breadcrumb { padding: 16px 0; font-size: 0.85rem; color: #6b7280; }
      .breadcrumb a { color: #9ca3af; }
      .content { margin: 32px 0; }
      .content p { margin-bottom: 20px; color: #d1d5db; font-size: 1rem; }
      .features { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 24px; margin: 32px 0; }
      .features h2 { font-size: 1.3rem; color: #fff; margin-bottom: 16px; }
      .features ul { list-style: none; }
      .features li { padding: 8px 0; color: #d1d5db; font-size: 0.95rem; }
      .faq { margin: 40px 0; }
      .faq h2 { font-size: 1.5rem; color: #fff; margin-bottom: 20px; }
      .faq-item { border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; margin-bottom: 10px; overflow: hidden; }
      .faq-item summary { padding: 16px 20px; cursor: pointer; font-weight: 600; color: #fff; background: rgba(255,255,255,0.02); list-style: none; }
      .faq-item summary::-webkit-details-marker { display: none; }
      .faq-item summary::before { content: "▸ "; color: #ef4444; }
      .faq-item[open] summary::before { content: "▾ "; }
      .faq-item p { padding: 0 20px 16px; color: #9ca3af; font-size: 0.95rem; }
      .related { margin: 40px 0; }
      .related h2 { font-size: 1.3rem; color: #fff; margin-bottom: 16px; }
      .related ul { list-style: none; }
      .related li { margin-bottom: 8px; }
      .related a { font-size: 0.95rem; }
      .cta { text-align: center; margin: 48px 0; padding: 40px; background: rgba(220,38,38,0.05); border: 1px solid rgba(220,38,38,0.2); border-radius: 16px; }
      .cta h2 { font-size: 1.5rem; color: #fff; margin-bottom: 12px; }
      .cta p { color: #9ca3af; margin-bottom: 20px; }
      .cta a { display: inline-block; background: #dc2626; color: #fff; padding: 14px 32px; border-radius: 10px; font-weight: 700; transition: background 0.2s; }
      .cta a:hover { background: #ef4444; }
      footer { text-align: center; padding: 40px 24px; border-top: 1px solid rgba(255,255,255,0.05); color: #6b7280; font-size: 0.85rem; }
      footer a { color: #9ca3af; margin: 0 12px; }
      @media (max-width: 640px) { h1 { font-size: 1.6rem; } }
    </style>
  </head>
  <body>
    <header>
      <img src="/LATAMLOGO.webp" alt="LATAMRUST" width="80" height="80" />
      <h1>${seo.h1}</h1>
      <p class="subtitle">${seo.description}</p>
    </header>
    <div class="container">
      <nav class="breadcrumb">
        <a href="/">Inicio</a> / <span>${seo.h1}</span>
      </nav>
      <div class="content">
        ${seo.content.split('\n\n').map(p => `<p>${p}</p>`).join('\n        ')}
      </div>
      <div class="features">
        <h2>Características</h2>
        <ul>
            ${featuresHTML}
        </ul>
      </div>
      <div class="faq">
        <h2>Preguntas Frecuentes</h2>
        ${faqHTML}
      </div>
      ${relatedLinks ? `
      <div class="related">
        <h2>Páginas Relacionadas</h2>
        <ul>
            ${relatedLinks}
        </ul>
      </div>` : ''}
      <div class="cta">
        <h2>¿Listo para jugar?</h2>
        <p>Unite a nuestro Discord y descargá Rust Pirata gratis.</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <a href="https://latamrust.online/" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#dc2626;color:#fff;padding:14px 32px;border-radius:10px;font-weight:700;text-decoration:none;transition:background 0.2s;">JUGAR AHORA</a>
          <a href="https://discord.com/invite/7Vz4YBamFG" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:#fff;padding:14px 32px;border-radius:10px;font-weight:700;text-decoration:none;transition:background 0.2s;">Discord</a>
        </div>
      </div>
    </div>
    <footer>
      <p>&copy; 2026 LATAMRUST. Rust Pirata LATAM.</p>
      <nav>
        <a href="/">Inicio</a>
        <a href="/descargar-rust-pirata/">Descargar</a>
        <a href="/rust-pirata-brasil/">Brasil</a>
        <a href="/rust-pirata-argentina/">Argentina</a>
        <a href="/rust-pirata-mexico/">México</a>
      </nav>
    </footer>
  </body>
</html>`;
}

// ============================================================
// GENERATE ALL PAGES
// ============================================================

// Clean dist/seo if exists
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  // Don't delete entire dist, just remove old seo pages
  Object.keys(seoPages).forEach(slug => {
    const dir = path.join(distDir, slug);
    if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true });
  });
}

// Generate each page
Object.keys(seoPages).forEach(pagePath => {
  const seo = seoPages[pagePath];
  const pageDir = path.join(distDir, pagePath);
  if (!fs.existsSync(pageDir)) fs.mkdirSync(pageDir, { recursive: true });
  fs.writeFileSync(path.join(pageDir, 'index.html'), generatePageHTML(seo, pagePath));
  console.log(`✓ Generado: /${pagePath}/index.html`);
});

// Generate sitemap.xml
const sitemapPages = Object.keys(seoPages).map(pagePath => {
  return `  <url>
    <loc>https://latamrust.online/${pagePath}/</loc>
    <lastmod>2026-06-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://latamrust.online/</loc>
    <lastmod>2026-06-06</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
${sitemapPages}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('✓ Generado: /sitemap.xml');

// Generate robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: https://latamrust.online/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /`;

fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);
console.log('✓ Generado: /robots.txt');

console.log(`\n✓ Total: ${Object.keys(seoPages).length} páginas SEO generadas con contenido visible!`);
