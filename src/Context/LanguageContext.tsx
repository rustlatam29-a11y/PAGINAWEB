import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Language = "es" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tList: (key: string) => any[];
  tObj: (key: string) => Record<string, any>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, any>> = {
  es: {
    // Header
    "header.nav": ["Servicios", "Planes", "Proyectos", "FAQ"],
    "header.tagline": "SERVIDORES PIRATAS!",
    "header.dc": "DC DEV",

    // LatamrustBanner
    "banner.badge": "SERVIDOR GRATUITO ACTIVO",
    "banner.title": "RUST OLD SCHOOL",
    "banner.subtitle": "La vieja escuela. Semi-vanilla. Sin pay to win.",
    "banner.desc": "Servidor ubicado en LATAM con ping ultra bajo y máquina dedicada sin lag. Únete a cientos de jugadores en el mejor Rust pirata old school de la región.",
    "banner.howTo": "¿CÓMO ENTRAR?",
    "banner.steps": [
      "Abrí Rust Pirata 2275",
      "Andá a la pestaña 'Servidores'",
      "Buscá \"RUST OLD SCHOOL\"",
      "Seleccioná y hacé clic en Conectar",
    ],
    "banner.cta": "DESCARGAR",
    "banner.discord": "DISCORD",
    "banner.stats": [
      { value: "15ms", label: "PING LATAM" },
      { value: "0", label: "LAG" },
      { value: "24/7", label: "ONLINE" },
    ],
    "banner.badges": [
      { icon: "MapPin", text: "LATAM · Ping 15-40ms" },
      { icon: "Zap", text: "0 Lag · Dedicado" },
      { icon: "Gamepad2", text: "AntiCheat · 24/7" },
    ],

    // Hero
    "hero.badge": "Servidores activos 24/7",
    "hero.title1": "RUST",
    "hero.title2": "PIRATA",
    "hero.subtitle": "¿Querés tu propio servidor? Lo armamos, lo configuramos y te damos soporte real.",
    "hero.desc1": "Venta de servidores, plugins y soporte técnico para",
    "hero.desc2": "y",
    "hero.desc3": ". Más de 8 años administrando comunidades gaming.",
    "hero.advantages": ["Setup Inmediato", "Soporte 24/7", "Plugins Incluidos", "Anti-lag"],
    "hero.cta": "CONSULTAR AHORA",
    "hero.community": "Comunidad Activa",
    "hero.communityDesc": "+10K jugadores LATAM",

    // VideoSection
    "video.label": "¿Por qué elegirnos?",
    "video.title": "Tu servidor Rust listo en minutos, sin complicaciones",
    "video.titleHighlight": "sin complicaciones",
    "video.description": "No perdás tiempo con configuraciones complicadas. Tu servidor pirata con plugins, AntiCheat y soporte directo por WhatsApp. Así de simple.",
    "video.features": [
      { title: "Servidores Rust Pirata", desc: "Rust 2275 OldRecoil y Rust 2388. Configuración completa." },
      { title: "+30.000 Plugins", desc: "Economía, kits, tiendas, anti-cheat. Oxide y uMod." },
      { title: "AntiCheat Profesional", desc: "Protección contra hackers. Ban automático." },
      { title: "Soporte 24/7", desc: "WhatsApp directo. Sin tickets, sin colas." },
    ],

    // ServerPlans
    "plans.label": "Planes",
    "plans.title": "Elegí tu servidor",
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
        "+30,000 plugins Oxide/uMod",
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
        "+30,000 plugins Premium",
        "AntiCheat avanzado",
        "Panel de control premium",
        "Backup cada 6 horas",
        "IP dedicada exclusiva",
        "Mods y plugins premium",
        "Mundo personalizado con seed",
        "Soporte prioritario 24/7",
      ],
    },

    // Payment Methods
    "payment.label": "Pagos",
    "payment.title": "Métodos de Pago",
    "payment.subtitle": "Aceptamos los siguientes métodos para la compra de servidores.",
    "payment.methods": [
      {
        icon: "pix",
        name: "PIX",
        desc: "Transferencia instantánea y directa. Método de pago principal.",
        badge: "Principal",
      },
      {
        icon: "belo",
        name: "Belo",
        desc: "Enviá dinero desde tu cuenta Belo y se acredita como PIX.",
        badge: "LATAM → PIX",
      },
      {
        icon: "astropay",
        name: "AstroPay",
        desc: "Enviá dinero desde tu cuenta AstroPay y se acredita como PIX.",
        badge: "LATAM → PIX",
      },
      {
        icon: "mercadopago",
        name: "MercadoPago",
        desc: "Enviá dinero desde tu cuenta MercadoPago (Argentina) y se acredita como PIX.",
        badge: "Principal",
      },
    ],
    "payment.note": "⚠️ Solo recibimos pagos por PIX. MercadoPago, Belo y AstroPay son billeteras digitales que permiten enviar dinero desde cualquier país de LATAM, el cual se recibe como PIX en mi cuenta brasileña. No hay otra forma de pago.",
    "payment.highlight": "Métodos aceptados: PIX · MercadoPago · Belo · AstroPay",

    // Benefits
    "benefits.label": "Por qué elegirme",
    "benefits.title": "No soy una empresa.",
    "benefits.titleHighlight": "Soy alguien que sabe del tema.",
    "benefits.description": "Administré servidores de Rust por más de 8 años. Desarrollé plugins para las comunidades más grandes de Latinoamérica. No vendo humo, vendo resultados.",
    "benefits.list": [
      { title: "Pago único, sin suscripciones", desc: "Pagás una vez y el servidor es tuyo. Sin cargos mensuales ocultos." },
      { title: "Experiencia real en Rust", desc: "Más de 10,000 horas jugando y administrando servidores. Sé lo que funciona." },
      { title: "Experiencia con grandes servidores", desc: "Trabajé con las comunidades más reconocidas del ecosistema Rust como RustSpain y Brasa.gg, entre otras." },
      { title: "Soporte directo y rápido", desc: "WhatsApp directo. Sin tickets, sin colas, sin esperas." },
      { title: "Configuración incluida", desc: "No tenés que configurar nada solo. Me encargo de todo." },
      { title: "Backup automático", desc: "Tus datos se guardan automáticamente. No perdés nada." },
    ],
    "benefits.profileName": "ParaguayRAIDER",
    "benefits.profileRole": "Fundador de LATAMRUST",

    // Projects
    "projects.label": "Proyectos",
    "projects.title": "Donde trabajé",
    "projects.subtitle": "Experiencia real en comunidades gaming de Latinoamérica y España.",
    "projects.list": [
      { name: "RustSpain", role: "Desarrollador de Plugins", desc: "Plugin de economía, tienda y kits para la comunidad más grande de Rust en España.", tags: ["Economía", "Tienda", "Kits"] },
      { name: "Brasa.gg", role: "Desarrollador de Plugins", desc: "Sistema de VIP, rangos y eventos personalizados para la comunidad brasileña.", tags: ["VIP", "Rangos", "Eventos"] },
      { name: "LATAMRUST", role: "Fundador y Administrador", desc: "Comunidad de servidores pirata LATAM con más de 10,000 jugadores activos.", tags: ["Comunidad", "Servidores", "Soporte"] },
    ],
    "projects.visit": "Visitar",

    // Process
    "process.label": "Proceso",
    "process.title": "Cómo funciona",
    "process.subtitle": "Simple, rápido y sin complicaciones. Cuatro pasos y tu servidor está listo.",
    "process.steps": [
      { title: "Contactás por WhatsApp", desc: "Me contás qué necesitás. Si es un servidor, plugins o soporte. Te respondo rápido." },
      { title: "Configuro tu servidor", desc: "Me encargo de todo: instalación, plugins, AntiCheat, mundo personalizado. Todo listo." },
      { title: "Tu servidor está listo", desc: "En menos de 24 horas tenés tu servidor funcionando. IP dedicada, backups y todo configurado." },
      { title: "Soporte continuo", desc: "Si necesitás ayuda después, estoy disponible 24/7. Sin tickets, sin colas." },
    ],

    // Testimonials
    "testimonials.label": "Testimonios",
    "testimonials.title": "Lo que dicen mis clientes",
    "testimonials.subtitle": "Gente que ya tiene su servidor armandose con nosotros.",
    "testimonials.list": [
      { location: "Buenos Aires, Argentina", text: "la posta, le escribi a las 11 de la mañana y a las 2pm ya tenia el server 2275 andando. me guio por discord paso a paso porque yo era un queso con esto jaja. 10/10" },
      { location: "CDMX, México", text: "ya habia comprado en otro lado y era todo mentira, el server se cayaba cada 2 dias. aca compre de nuevo y ya van 5 meses sin un solo crash. le escribo a cualquier hora y responde rapido, eso me sorprendio." },
      { location: "Medellín, Colombia", text: "necesitaba un plugin custom que nadie me queria hacer. aca me lo armaron en 24 horas y me cobraron barato. ya le pedi como 3 cosas mas despues jaja, muy bueno el servicio" },
      { location: "Santiago, Chile", text: "tenia dudas entre el 2275 y el 2388 y me ayudo a elegir. me explico todo bien y quedo el server andando con 30ms desde santiago. recomendado si no tenes idea" },
      { location: "Lima, Perú", text: "lo mejor es que no te suscriben a nada, pagas una vez y listo. ya hice 2 servidores con ellos, uno para mi y otro para mi hermano. los dos funcionan perfecto" },
      { location: "Montevideo, Uruguay", text: "queria un seed especifico y me lo configuro asi nomas. tambien me ayudo a poner los plugins de kits y la tienda. si no sabes nada de servidores de rust, te salva el tipo este" },
    ],

    // FAQ
    "faq.label": "Preguntas frecuentes",
    "faq.title": "Dudas comunes",
    "faq.list": [
      { q: "¿Qué incluye el servidor Rust pirata?", a: "Incluye la licencia del servidor, configuración completa, AntiCheat, panel de control, backups automáticos y soporte 24/7. El hosting (VPS) no está incluido, pero te ayudo a elegir el mejor." },
      { q: "¿Cuál es la diferencia entre Rust 2275 y 2388?", a: "Rust 2275 es la versión clásica con OldRecoil, la favorita de la comunidad. Rust 2388 es la última versión actualizada con todos los gráficos y mejoras oficiales. Ambas son excelentes, depende de tu preferencia." },
      { q: "¿El pago es mensual o único?", a: "Es un pago único. Pagás una vez y el servidor es tuyo. No hay cargos mensuales ni suscripciones ocultas." },
      { q: "¿Necesito un VPS por separado?", a: "Sí, el hosting (VPS) no está incluido en el precio. Pero te ayudo a elegir el mejor VPS para tu servidor y te guío en la configuración." },
      { q: "¿Cuánto tarda en estar listo mi servidor?", a: "Generalmente menos de 24 horas. Depende de la complejidad de la configuración y los plugins que necesites." },
      { q: "¿Puedo elegir mi propio seed y mundo?", a: "Sí, podés elegir el seed que quieras. Configuro el mundo exacto que necesitás." },
      { q: "¿Qué pasa si tengo un problema después?", a: "Me contactás por WhatsApp y te ayudo. Soporte 24/7, sin tickets ni colas." },
      { q: "¿Hacés plugins personalizados?", a: "Sí, desarrollo plugins a medida para tu servidor. Tengo experiencia en las comunidades más grandes del ecosistema Rust." },
    ],

    // ArgosEyes Partner
    "partner.badge": "Socio Oficial",
    "partner.title": "AntiCheat ArgosEyes",
    "partner.desc": "El anticheat más completo para Rust pirata. Compatible con todas las versiones — 2275, 2388 y más. Protege tu servidor contra aimbots, ESP, speedhack y cualquier trampa. La misma protección que usamos en nuestro servidor.",
    "partner.features": ["Todas las versiones de Rust", "Detección en tiempo real", "Anti aimbot + ESP", "Sin lag, sin falsos positivos"],
    "partner.cta": "Unirme a Discord",

    // Footer
    "footer.terms": "Términos",
    "footer.privacy": "Privacidad",
    "footer.rights": "Todos los derechos reservados.",
    "footer.made": "Hecho con pasión por la comunidad Rust.",
  },

  pt: {
    // Header
    "header.nav": ["Serviços", "Planos", "Projetos", "FAQ"],
    "header.tagline": "SERVIDORES PIRATAS!",
    "header.dc": "DC DEV",

    // LatamrustBanner
    "banner.badge": "SERVIDOR GRATUITO ACTIVO",
    "banner.title": "RUST OLD SCHOOL",
    "banner.subtitle": "A velha escola. Semi-vanilla. Sem pay to win.",
    "banner.desc": "Servidor localizado na LATAM com ping ultra baixo e máquina dedicada sem lag. Junte-se a centenas de jogadores no melhor Rust pirata old school da região.",
    "banner.howTo": "COMO ENTRAR?",
    "banner.steps": [
      "Abra o Rust Pirata 2275",
      "Vá na aba 'Servidores'",
      "Pesquise \"RUST OLD SCHOOL\"",
      "Selecione e clique em Conectar",
    ],
    "banner.cta": "BAIXAR",
    "banner.discord": "DISCORD",
    "banner.stats": [
      { value: "15ms", label: "PING LATAM" },
      { value: "0", label: "LAG" },
      { value: "24/7", label: "ONLINE" },
    ],
    "banner.badges": [
      { icon: "MapPin", text: "LATAM · Ping 15-40ms" },
      { icon: "Zap", text: "0 Lag · Dedicado" },
      { icon: "Gamepad2", text: "AntiCheat · 24/7" },
    ],

    // Hero
    "hero.badge": "Servidores ativos 24/7",
    "hero.title1": "RUST",
    "hero.title2": "PIRATA",
    "hero.subtitle": "Querés teu próprio servidor? Montamos, configuramos e damos suporte real.",
    "hero.desc1": "Venda de servidores, plugins e suporte técnico para",
    "hero.desc2": "e",
    "hero.desc3": ". Mais de 8 anos administrando comunidades gaming.",
    "hero.advantages": ["Setup Imediato", "Suporte 24/7", "Plugins Inclusos", "Anti-lag"],
    "hero.cta": "CONSULTAR AGORA",
    "hero.community": "Comunidade Ativa",
    "hero.communityDesc": "+10K jogadores LATAM",

    // VideoSection
    "video.label": "Por que nos escolher?",
    "video.title": "Teu servidor Rust pronto em minutos, sem complicações",
    "video.titleHighlight": "sem complicações",
    "video.description": "Não percas tempo com configurações complicadas. Teu servidor pirata com plugins, AntiCheat e suporte direto por WhatsApp. Assim de simples.",
    "video.features": [
      { title: "Servidores Rust Pirata", desc: "Rust 2275 OldRecoil e Rust 2388. Configuração completa." },
      { title: "+30.000 Plugins", desc: "Economia, kits, lojas, anti-cheat. Oxide e uMod." },
      { title: "AntiCheat Profissional", desc: "Proteção contra hackers. Ban automático." },
      { title: "Suporte 24/7", desc: "WhatsApp direto. Sem tickets, sem filas." },
    ],

    // ServerPlans
    "plans.label": "Planos",
    "plans.title": "Escolha teu servidor",
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
        "+30.000 plugins Oxide/uMod",
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
        "+30.000 plugins Premium",
        "AntiCheat avançado",
        "Painel de controle premium",
        "Backup a cada 6 horas",
        "IP dedicada exclusiva",
        "Mods e plugins premium",
        "Mundo personalizado com seed",
        "Suporte prioritário 24/7",
      ],
    },

    // Payment Methods (PT)
    "payment.label": "Pagamentos",
    "payment.title": "Métodos de Pagamento",
    "payment.subtitle": "Aceitamos os seguintes métodos para compra de servidores.",
    "payment.methods": [
      {
        icon: "pix",
        name: "PIX",
        desc: "Transferência instantânea e direta. Método de pagamento principal.",
        badge: "Principal",
      },
      {
        icon: "belo",
        name: "Belo",
        desc: "Envie dinheiro da sua conta Belo e é creditado como PIX.",
        badge: "LATAM → PIX",
      },
      {
        icon: "astropay",
        name: "AstroPay",
        desc: "Envie dinheiro da sua conta AstroPay e é creditado como PIX.",
        badge: "LATAM → PIX",
      },
      {
        icon: "mercadopago",
        name: "MercadoPago",
        desc: "Envie dinheiro da sua conta MercadoPago (Argentina) e é creditado como PIX.",
        badge: "Principal",
      },
    ],
    "payment.note": "⚠️ Aceitamos apenas pagamentos via PIX. MercadoPago, Belo e AstroPay são carteiras digitais que permitem enviar dinheiro de qualquer país da LATAM, que é recebido como PIX na minha conta brasileira. Não há outra forma de pagamento.",
    "payment.highlight": "Métodos aceitos: PIX · MercadoPago · Belo · AstroPay",

    // Benefits
    "benefits.label": "Por que me escolher",
    "benefits.title": "Não sou uma empresa.",
    "benefits.titleHighlight": "Sou alguém que sabe do assunto.",
    "benefits.description": "Administrei servidores de Rust por mais de 8 anos. Desenvolvi plugins para as maiores comunidades da América Latina. Não vendo fumaça, vendo resultados.",
    "benefits.list": [
      { title: "Pagamento único, sem assinaturas", desc: "Pagas uma vez e o servidor é teu. Sem taxas mensais ocultas." },
      { title: "Experiência real em Rust", desc: "Mais de 10.000 horas jogando e administrando servidores. Sei o que funciona." },
      { title: "Experiência com grandes servidores", desc: "Trabalhei com as comunidades mais reconhecidas do ecossistema Rust como RustSpain e Brasa.gg, entre outras." },
      { title: "Suporte direto e rápido", desc: "WhatsApp direto. Sem tickets, sem filas, sem esperas." },
      { title: "Configuração incluída", desc: "Não tens que configurar nada sozinho. Eu cuido de tudo." },
      { title: "Backup automático", desc: "Teus dados são salvos automaticamente. Não perdes nada." },
    ],
    "benefits.profileName": "ParaguayRAIDER",
    "benefits.profileRole": "Fundador do LATAMRUST",

    // Projects
    "projects.label": "Projetos",
    "projects.title": "Onde trabalhei",
    "projects.subtitle": "Experiência real em comunidades gaming da América Latina e Espanha.",
    "projects.list": [
      { name: "RustSpain", role: "Desenvolvedor de Plugins", desc: "Plugin de economia, loja e kits para a comunidade maior de Rust na Espanha.", tags: ["Economia", "Loja", "Kits"] },
      { name: "Brasa.gg", role: "Desenvolvedor de Plugins", desc: "Sistema de VIP, ranks e eventos personalizados para a comunidade brasileira.", tags: ["VIP", "Ranks", "Eventos"] },
      { name: "LATAMRUST", role: "Fundador e Administrador", desc: "Comunidade de servidores pirata LATAM com mais de 10.000 jogadores ativos.", tags: ["Comunidade", "Servidores", "Suporte"] },
    ],
    "projects.visit": "Visitar",

    // Process
    "process.label": "Processo",
    "process.title": "Como funciona",
    "process.subtitle": "Simples, rápido e sem complicações. Quatro passos e teu servidor está pronto.",
    "process.steps": [
      { title: "Contacta pelo WhatsApp", desc: "Me conta o que precisas. Se é um servidor, plugins ou suporte. Respondo rápido." },
      { title: "Configuro teu servidor", desc: "Cuido de tudo: instalação, plugins, AntiCheat, mundo personalizado. Tudo pronto." },
      { title: "Teu servidor está pronto", desc: "Em menos de 24 horas tens teu servidor funcionando. IP dedicada, backups e tudo configurado." },
      { title: "Suporte contínuo", desc: "Se precisar de ajuda depois, estou disponível 24/7. Sem tickets, sem filas." },
    ],

    // Testimonials
    "testimonials.label": "Depoimentos",
    "testimonials.title": "O que dizem meus clientes",
    "testimonials.subtitle": "Pessoas que já tem seu servidor sendo montado conosco.",
    "testimonials.list": [
      { location: "Buenos Aires, Argentina", text: "la posta, le escribi a las 11 de la mañana y a las 2pm ya tenia el server 2275 andando. me guio por discord paso a paso porque yo era un queso con esto jaja. 10/10" },
      { location: "CDMX, México", text: "ya habia comprado en otro lado y era todo mentira, el server se cayaba cada 2 dias. aca compre de nuevo y ya van 5 meses sin un solo crash. le escribo a cualquier hora y responde rapido, eso me sorprendio." },
      { location: "Medellín, Colombia", text: "necesitaba un plugin custom que nadie me queria hacer. aca me lo armaron en 24 horas y me cobraron barato. ya le pedi como 3 cosas mas despues jaja, muy bueno el servicio" },
      { location: "Santiago, Chile", text: "tenia dudas entre el 2275 y el 2388 y me ayudo a elegir. me explico todo bien y quedo el server andando con 30ms desde santiago. recomendado si no tenes idea" },
      { location: "Lima, Perú", text: "lo mejor es que no te suscriben a nada, pagas una vez y listo. ya hice 2 servidores con ellos, uno para mi y otro para mi hermano. los dos funcionan perfecto" },
      { location: "Montevideo, Uruguay", text: "queria un seed especifico y me lo configuro asi nomas. tambien me ayudo a poner los plugins de kits y la tienda. si no sabes nada de servidores de rust, te salva el tipo este" },
    ],

    // FAQ
    "faq.label": "Perguntas frequentes",
    "faq.title": "Dúvidas comuns",
    "faq.list": [
      { q: "O que inclui o servidor Rust pirata?", a: "Inclui a licença do servidor, configuração completa, AntiCheat, painel de controle, backups automáticos e suporte 24/7. O hosting (VPS) não está incluído, mas te ajudo a escolher o melhor." },
      { q: "Qual é a diferença entre Rust 2275 e 2388?", a: "Rust 2275 é a versão clássica com OldRecoil, a favorita da comunidade. Rust 2388 é a última versão atualizada com todos os gráficos e melhorias oficiais. Ambas são excelentes, depende da tua preferência." },
      { q: "O pagamento é mensal ou único?", a: "É um pagamento único. Pagas uma vez e o servidor é teu. Não há taxas mensais nem assinaturas ocultas." },
      { q: "Preciso de um VPS separado?", a: "Sim, o hosting (VPS) não está incluído no preço. Mas te ajudo a escolher o melhor VPS para teu servidor e te guio na configuração." },
      { q: "Quanto tempo demora para ficar pronto meu servidor?", a: "Geralmente menos de 24 horas. Depende da complexidade da configuração e dos plugins que precisas." },
      { q: "Posso escolher meu próprio seed e mundo?", a: "Sim, podes escolher o seed que quiseres. Configuro o mundo exato que precisas." },
      { q: "O que acontece se tiver um problema depois?", a: "Contactas-me pelo WhatsApp e te ajudo. Suporte 24/7, sem tickets nem filas." },
      { q: "Fazes plugins personalizados?", a: "Sim, desenvolvo plugins à medida para teu servidor. Tenho experiência nas maiores comunidades do ecossistema Rust." },
    ],

    // ArgosEyes Partner
    "partner.badge": "Parceiro Oficial",
    "partner.title": "AntiCheat ArgosEyes",
    "partner.desc": "O anticheat mais completo para Rust pirata. Compatível com todas as versões — 2275, 2388 e mais. Protege seu servidor contra aimbots, ESP, speedhack e qualquer trapaça. A mesma proteção que usamos no nosso servidor.",
    "partner.features": ["Todas as versões de Rust", "Detecção em tempo real", "Anti aimbot + ESP", "Sem lag, sem falsos positivos"],
    "partner.cta": "Entrar no Discord",

    // Footer
    "footer.terms": "Termos",
    "footer.privacy": "Privacidade",
    "footer.rights": "Todos os direitos reservados.",
    "footer.made": "Feito com paixão pela comunidade Rust.",
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
    const value = (translations[language] as Record<string, any>)?.[key];
    if (typeof value === "string") return value;
    return key;
  };

  const tList = (key: string): any[] => {
    const value = (translations[language] as Record<string, any>)?.[key];
    return Array.isArray(value) ? value : [];
  };

  const tObj = (key: string): Record<string, any> => {
    const value = (translations[language] as Record<string, any>)?.[key];
    return typeof value === "object" && value !== null ? value : {};
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tList, tObj }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
