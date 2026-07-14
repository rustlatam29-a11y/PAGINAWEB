import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Language = "es" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tList: (key: string) => unknown[];
  tObj: (key: string) => Record<string, string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, unknown>> = {
  es: {
    // ===== Header =====
    "header.nav": ["Servidor", "Versión", "Videos", "Planes", "FAQ"],
    "header.tagline": "SERVIDOR RUST OLD SCHOOL",
    "header.brand": "RUST PIRATA",

    // ===== Marca y servidor =====
    "brand.name": "RUST PIRATA",
    "brand.server": "RUST OLD SCHOOL",

    // ===== Banner principal =====
    "banner.badge": "100% GRATIS · SIN STEAM",
    "banner.title": "RUST PIRATA",
    "banner.subtitle": "Descargá Rust gratis y jugá al servidor RUST OLD SCHOOL · Activo 24/7",
    "banner.desc": "Jugá y dominá el servidor RUST OLD SCHOOL. Descargá Rust de forma gratis sin comprarlo. Comunidad activa con +300 jugadores conectados. Rust 2275 OldRecoil con ping bajo y Anti-Cheat profesional.",
    "banner.howTo": "¿CÓMO JUGAR GRATIS?",
    "banner.steps": [
      "Hacé clic en DESCARGAR (es gratis)",
      "Descargá Rust Pirata 2275 OldRecoil",
      "Instalalo en tu PC sin Steam",
      "Conectate al servidor RUST OLD SCHOOL y jugá",
    ],
    "banner.cta": "DESCARGAR GRATIS",
    "banner.discord": "DISCORD",
    "banner.badges": [
      { icon: "MapPin", text: "LATAM · Ping 15-40ms" },
      { icon: "Zap", text: "0 Lag · Dedicado" },
      { icon: "Gamepad2", text: "AntiCheat · 24/7" },
    ],

    // ===== Hero =====
    "hero.badge": "Servidores activos 24/7",
    "hero.title1": "RUST",
    "hero.title2": "PIRATA",
    "hero.subtitle": "El servidor RUST OLD SCHOOL más estable de Latinoamérica. Rust 2275 OldRecoil, ping bajo y comunidad activa 24/7.",
    "hero.advantages": ["Setup Inmediato", "Sin Steam", "AntiCheat Pro", "Ping LATAM"],
    "hero.cta": "UNIRME AL DISCORD",

// ===== Servidor RUST OLD SCHOOL =====
    "server.label": "Servidor Pirata · 100% GRATIS",
    "server.title": "RUST OLD SCHOOL",
    "server.desc": "El servidor de Rust Pirata 100% gratis más estable de Latinoamérica. Basado en Rust 2275 OldRecoil con el recoil clásico que la comunidad ama. AntiCheat profesional y +300 jugadores activos 24/7. Sin Steam, sin pagar.",
    "server.stats": [
      { value: "+300", label: "JUGADORES ONLINE" },
      { value: "15-40ms", label: "PING LATAM" },
      { value: "24/7", label: "UPTIME" },
      { value: "2275", label: "VERSIÓN" },
    ],
    "server.features": [
      { title: "Recoil clásico 2275", desc: "El OldRecoil original que hizo famoso a Rust. Predecible, competitivo y amado por la comunidad." },
      { title: "AntiCheat profesional", desc: "Protección en tiempo real contra aimbots, ESP, speedhack y toda trampa conocida." },
      { title: "Ping bajo LATAM", desc: "Servidores optimizados para Brasil, Argentina, México, Chile, Paraguay y todo Latinoamérica." },
    ],
    "server.cta": "CONSEGUIR EL ACCESO",

    // ===== Ficha técnica 2275 =====
    "version2275.label": "Versión estable",
    "version2275.title": "Rust 2275 OldRecoil",
    "version2275.subtitle": "La versión clásica preferida por la comunidad",
    "version2275.desc": "Rust 2275 es la versión OldRecoil que marcó la historia del Rust pirata. El recoil original, predecible y competitivo que los grandes youtubers hicieron famoso. Más ligero, más estable y más PvP puro.",
    "version2275.badge": "PIONERO EN LATINOAMÉRICA · 2275.202.1",
    "version2275.specs": [
      { key: "PROTOCOLO", value: "2275.202.1" },
      { key: "BUILD", value: "01/21/2021 16:48:26" },
      { key: "UNITY", value: "2019.4.7f1" },
      { key: "CHANGESET", value: "57843" },
      { key: "RAMA", value: "release" },
    ],
    "version2275.reasonsTitle": "Por qué Rust 2275",
    "version2275.reasons": [
      { title: "Recoil clásico puro", desc: "El OldRecoil original, predecible y competitivo. El que la comunidad domina desde hace años." },
      { title: "Más ligero y fluido", desc: "Funciona en PC modesto sin lag. Ideal para PvP masivo y raids largos." },
      { title: "Preferido para competitivo", desc: "Servidores profesionales y torneos usan 2275. El estándar del Rust pirata competitivo." },
      { title: "Estable y sin bugs", desc: "Versión pulida con años de soporte. La más probada y estable del ecosistema pirata." },
    ],

    // ===== Planes / Ventas de servidores =====
    "plans.label": "Planes",
    "plans.title": "Comprá tu servidor",
    "plans.subtitle": "Pago único. Sin suscripciones. Todo incluido.",
    "plans.popular": "MÁS VENDIDO",
    "plans.oneTime": "pago único",
    "plans.cta": "Contratar ahora",
    "plans.note": "Los precios incluyen licencia, configuración y soporte.",
    "plans.noteHighlight": "El hosting (VPS) no está incluido.",
    "plans.noteHelp": "Te ayudo a elegir el mejor.",
    "plans.2275": {
      subtitle: "OldRecoil",
      description: "La versión clásica que la comunidad ama",
      features: [
        "Recoil clásico conocido por todos",
        "AntiCheat configurado",
        "Panel de control WebPanel",
        "Backup automático diario",
        "IP dedicada exclusiva",
        "Soporte técnico 24/7",
      ],
    },
    "plans.2388": {
      subtitle: "Actualizado",
      description: "La última versión con todo actualizado",
      features: [
        "Última versión estable",
        "AntiCheat avanzado",
        "Panel de control premium",
        "Backup cada 6 horas",
        "IP dedicada exclusiva",
        "Mundo personalizado con seed",
        "Soporte prioritario 24/7",
      ],
    },

    // ===== Videos =====
    "videos.label": "Media",
    "videos.title": "Trailer del servidor",
    "videos.subtitle": "Así se vive el RUST OLD SCHOOL. Rust 2275 OldRecoil puro.",
    "videos.trailerLabel": "TRAILER OFICIAL",
    "videos.trailerTitle": "RUST OLD SCHOOL — Trailer",
    "videos.trailerDesc": "Mirá el trailer oficial del servidor pirata más estable de LATAM. Rust 2275 OldRecoil puro.",
    "videos.tutorialLabel": "TUTORIAL",
    "videos.tutorialTitle": "Cómo descargar y jugar",
    "videos.tutorialDesc": "Paso a paso para descargar Rust pirata 2275 y conectarte al servidor RUST OLD SCHOOL sin Steam.",

// ===== FAQ =====
    "faq.label": "Preguntas frecuentes",
    "faq.title": "Dudas comunes sobre Rust 2275 pirata",
    "faq.subtitle": "Todo lo que preguntás antes de entrar al servidor RUST OLD SCHOOL.",
"faq.list": [
      { q: "¿Qué es RUST OLD SCHOOL?", a: "Es el servidor pirata oficial de RUST PIRATA basado en Rust 2275 OldRecoil. Tiene el recoil clásico original, AntiCheat Profesional y comunidad activa 24/7." },
      { q: "¿Qué versión de Rust usa el servidor?", a: "Usa Rust 2275 OldRecoil (protocolo 2275.202.1, build 01/21/2021). Es la versión clásica favorita de la comunidad, con recoil puro y predecible para PvP competitivo." },
      { q: "¿Rust pirata es gratis?", a: "Sí, el juego se descarga gratis. No pagás Steam ni Epic Games. Solo descargás, instalás y entrás al servidor sin costos." },
      { q: "¿Necesito Steam para jugar?", a: "No. Rust pirata 2275 no necesita Steam. Se ejecuta directamente en tu PC con Windows 10 o superior." },
      { q: "¿Es seguro descargar Rust pirata?", a: "Sí. Los archivos del RUST OLD SCHOOL están verificados y libres de virus. Descarga 100% segura." },
      { q: "¿Cuánto ping tengo desde mi país?", a: "Depende: Brasil 15-30ms, Paraguay 20-40ms, Argentina 40-60ms, Uruguay 30-50ms, Chile 60-80ms, México 50-70ms, Perú 60-80ms, Colombia 70-90ms. Todos optimizados para LATAM." },
      { q: "¿Cuántos jugadores hay online?", a: "El servidor RUST OLD SCHOOL mantiene +300 jugadores activos durante el día, con picos en horario prime LATAM." },
      { q: "¿Puedo jugar con amigos?", a: "Sí. Compartí el link de descarga y tu Discord, y entren juntos al servidor. Es como Steam pero gratis." },
      { q: "¿Cómo consigo el link de descarga?", a: "Hacé clic en DESCARGAR GRATIS o entrá al Discord oficial. Ahí te pasamos el link seguro y la guía de instalación." },
      { q: "¿Qué requisitos necesita mi PC?", a: "Windows 10+, Intel i5 o equivalente, 8GB RAM, GTX 960 o superior y 10GB libres. El 2275 es ligero y corre bien en PC modesto." },
    ],

    // ===== Footer =====
    "footer.terms": "Términos",
    "footer.privacy": "Privacidad",
    "footer.rights": "Todos los derechos reservados.",
    "footer.tagline": "Servidor pirata Rust 2275 estable en LATAM.",
  },

  pt: {
    // ===== Header =====
    "header.nav": ["Servidor", "Versão", "Vídeos", "Planos", "FAQ"],
    "header.tagline": "SERVIDOR RUST OLD SCHOOL",
    "header.brand": "RUST PIRATA",

    // ===== Marca e servidor =====
    "brand.name": "RUST PIRATA",
    "brand.server": "RUST OLD SCHOOL",

    // ===== Banner =====
    "banner.badge": "100% GRÁTIS · SEM STEAM",
    "banner.title": "RUST PIRATA",
    "banner.subtitle": "Baixe Rust grátis e jogue no servidor RUST OLD SCHOOL · Ativo 24/7",
    "banner.desc": "Jogue e domine o servidor RUST OLD SCHOOL. Baixe Rust grátis sem comprar. Comunidade ativa com +300 jogadores conectados. Rust 2275 OldRecoil com ping baixo e Anti-Cheat profissional.",
    "banner.howTo": "COMO JOGAR GRÁTIS?",
    "banner.steps": [
      "Clique em BAIXAR (é grátis)",
      "Baixe Rust Pirata 2275 OldRecoil",
      "Instale no seu PC sem Steam",
      "Conecte ao servidor RUST OLD SCHOOL e jogue",
    ],
    "banner.cta": "BAIXAR GRÁTIS",
    "banner.discord": "DISCORD",
    "banner.badges": [
      { icon: "MapPin", text: "LATAM · Ping 15-40ms" },
      { icon: "Zap", text: "0 Lag · Dedicado" },
      { icon: "Gamepad2", text: "AntiCheat · 24/7" },
    ],

    // ===== Hero =====
    "hero.badge": "Servidores ativos 24/7",
    "hero.title1": "RUST",
    "hero.title2": "PIRATA",
    "hero.subtitle": "O servidor RUST OLD SCHOOL mais estável da América Latina. Rust 2275 OldRecoil, ping baixo e comunidade ativa 24/7.",
    "hero.advantages": ["Setup Imediato", "Sem Steam", "AntiCheat Pro", "Ping LATAM"],
    "hero.cta": "ENTRAR NO DISCORD",

    // ===== Servidor RUST OLD SCHOOL =====
    "server.label": "Servidor Pirata · 100% GRÁTIS",
    "server.title": "RUST OLD SCHOOL",
    "server.desc": "O servidor de Rust Pirata 100% grátis mais estável da América Latina. Baseado em Rust 2275 OldRecoil com o recoil clássico que a comunidade ama. AntiCheat profissional e +300 jogadores ativos 24/7. Sem Steam, sem pagar.",
    "server.stats": [
      { value: "+300", label: "JOGADORES ONLINE" },
      { value: "15-40ms", label: "PING LATAM" },
      { value: "24/7", label: "UPTIME" },
      { value: "2275", label: "VERSÃO" },
    ],
"server.features": [
      { title: "Recoil clássico 2275", desc: "O OldRecoil original que tornou Rust famoso. Previsível, competitivo e amado pela comunidade." },
      { title: "AntiCheat profissional", desc: "Proteção em tempo real contra aimbots, ESP, speedhack e qualquer trapaça." },
      { title: "Ping baixo LATAM", desc: "Servidores otimizados para Brasil, Argentina, México, Chile, Paraguai e toda a América Latina." },
    ],
    "server.cta": "CONSEGUIR ACESSO",

    // ===== Ficha técnica 2275 =====
    "version2275.label": "Versão estável",
    "version2275.title": "Rust 2275 OldRecoil",
    "version2275.subtitle": "A versão clássica preferida da comunidade",
    "version2275.desc": "Rust 2275 é a versão OldRecoil que marcou a história do Rust pirata. O recoil original, previsível e competitivo que os grandes youtubers tornaram famoso. Mais leve, mais estável e PvP mais puro.",
    "version2275.badge": "PIONEIRO NA AMÉRICA LATINA · 2275.202.1",
    "version2275.specs": [
      { key: "PROTOCOLO", value: "2275.202.1" },
      { key: "BUILD", value: "01/21/2021 16:48:26" },
      { key: "UNITY", value: "2019.4.7f1" },
      { key: "CHANGESET", value: "57843" },
      { key: "RAMO", value: "release" },
    ],
    "version2275.reasonsTitle": "Por que Rust 2275",
    "version2275.reasons": [
      { title: "Recoil clássico puro", desc: "O OldRecoil original, previsível e competitivo. O que a comunidade domina há anos." },
      { title: "Mais leve e fluido", desc: "Funciona em PC modesto sem lag. Ideal para PvP massivo e raids longas." },
      { title: "Preferido para competitivo", desc: "Servidores profissionais e torneios usam 2275. O padrão do Rust pirata competitivo." },
      { title: "Estável e sem bugs", desc: "Versão polida com anos de suporte. A mais testada e estável do ecossistema pirata." },
    ],

    // ===== Planos / Vendas de servidores =====
    "plans.label": "Planos",
    "plans.title": "Compre teu servidor",
    "plans.subtitle": "Pagamento único. Sem assinaturas. Tudo incluído.",
    "plans.popular": "MAIS VENDIDO",
    "plans.oneTime": "pagamento único",
    "plans.cta": "Contratar agora",
    "plans.note": "Os preços incluem licença, configuração e suporte.",
    "plans.noteHighlight": "O hosting (VPS) não está incluído.",
    "plans.noteHelp": "Te ajudo a escolher o melhor.",
    "plans.2275": {
      subtitle: "OldRecoil",
      description: "A versão clássica que a comunidade ama",
      features: [
        "Recoil clássico conhecido por todos",
        "AntiCheat configurado",
        "Painel de controle WebPanel",
        "Backup automático diário",
        "IP dedicada exclusiva",
        "Suporte técnico 24/7",
      ],
    },
    "plans.2388": {
      subtitle: "Atualizado",
      description: "A última versão com tudo atualizado",
      features: [
        "Última versão estável",
        "AntiCheat avançado",
        "Painel de controle premium",
        "Backup a cada 6 horas",
        "IP dedicada exclusiva",
        "Mundo personalizado com seed",
        "Suporte prioritário 24/7",
      ],
    },

    // ===== Videos =====
    "videos.label": "Mídia",
    "videos.title": "Trailer do servidor",
    "videos.subtitle": "Assim se vive o RUST OLD SCHOOL. Rust 2275 OldRecoil puro.",
    "videos.trailerLabel": "TRAILER OFICIAL",
    "videos.trailerTitle": "RUST OLD SCHOOL — Trailer",
    "videos.trailerDesc": "Veja o trailer oficial do servidor pirata mais estável da LATAM. Rust 2275 OldRecoil puro.",
    "videos.tutorialLabel": "TUTORIAL",
    "videos.tutorialTitle": "Como baixar e jogar",
    "videos.tutorialDesc": "Passo a passo para baixar Rust pirata 2275 e conectar ao servidor RUST OLD SCHOOL sem Steam.",

    // ===== FAQ =====
    "faq.label": "Perguntas frequentes",
    "faq.title": "Dúvidas comuns sobre Rust 2275 pirata",
    "faq.subtitle": "Tudo que perguntas antes de entrar no servidor RUST OLD SCHOOL.",
    "faq.list": [
      { q: "O que é RUST OLD SCHOOL?", a: "É o servidor pirata oficial da RUST PIRATA baseado em Rust 2275 OldRecoil. Tem o recoil clássico original, AntiCheat profissional e comunidade ativa 24/7." },
      { q: "Qual versão de Rust o servidor usa?", a: "Usa Rust 2275 OldRecoil (protocolo 2275.202.1, build 01/21/2021). É a versão clássica favorita da comunidade, com recoil puro e previsível para PvP competitivo." },
      { q: "Rust pirata é grátis?", a: "Sim, o jogo é grátis para baixar. Não pagas Steam nem Epic Games. Só baixas, instalas e entras no servidor sem custos." },
      { q: "Preciso de Steam para jogar?", a: "Não. Rust pirata 2275 não precisa de Steam. Roda direto no teu PC com Windows 10 ou superior." },
      { q: "É seguro baixar Rust pirata?", a: "Sim. Os arquivos do RUST OLD SCHOOL são verificados e livres de vírus. Download 100% seguro." },
      { q: "Qual ping do meu país?", a: "Depende: Brasil 15-30ms, Paraguai 20-40ms, Argentina 40-60ms, Uruguai 30-50ms, Chile 60-80ms, México 50-70ms, Peru 60-80ms, Colômbia 70-90ms. Todos otimizados para LATAM." },
      { q: "Quantos jogadores há online?", a: "O servidor RUST OLD SCHOOL mantém +300 jogadores ativos durante o dia, com picos no horário prime LATAM." },
      { q: "Posso jogar com amigos?", a: "Sim. Compartilhe o link de download e o Discord e entrem juntos no servidor. É como Steam mas grátis." },
      { q: "Como consigo o link de download?", a: "Clique em BAIXAR GRÁTIS ou entre no Discord oficial. Lá passamos o link seguro e o guia de instalação." },
      { q: "Que requisitos meu PC precisa?", a: "Windows 10+, Intel i5 ou equivalente, 8GB RAM, GTX 960 ou superior e 10GB livres. O 2275 é leve e roda bem em PC modesto." },
    ],

    // ===== Footer =====
    "footer.terms": "Termos",
    "footer.privacy": "Privacidade",
    "footer.rights": "Todos os direitos reservados.",
    "footer.tagline": "Servidor pirata Rust 2275 estável na LATAM.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language;
      if (saved) return saved;
      const browserLang = navigator.language.startsWith("pt") ? "pt" : "es";
      return browserLang;
    }
    return "es";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const value = (translations[language] as Record<string, unknown>)?.[key];
    if (typeof value === "string") return value;
    return key;
  };

  const tList = (key: string): unknown[] => {
    const value = (translations[language] as Record<string, unknown>)?.[key];
    return Array.isArray(value) ? value : [];
  };

  const tObj = (key: string): Record<string, string> => {
    const value = (translations[language] as Record<string, unknown>)?.[key];
    return typeof value === "object" && value !== null && !Array.isArray(value)
      ? (value as Record<string, string>)
      : {};
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tList, tObj }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}