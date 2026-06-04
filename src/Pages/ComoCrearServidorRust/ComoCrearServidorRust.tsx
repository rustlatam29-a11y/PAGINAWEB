import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, ArrowRight, Server, Shield, Zap, Settings } from "lucide-react";

const ComoCrearServidorRust: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Como Crear Servidor Rust Pirata 2275/2388 - Guia Completa 2026 | LATAMRUST</title>
        <meta name="description" content="Guia completa paso a paso para crear tu servidor de Rust Pirata 2275 o 2388. Configuracion, plugins, AntiCheat, hosting y soporte 24/7. Desde $17 USD." />
        <meta name="keywords" content="crear servidor rust pirata, crear servidor rust 2275, crear servidor rust 2388, montar servidor rust, configurar servidor rust, servidor rust paso a paso, como hacer servidor rust, hosting rust pirata, vps rust server" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://latamrust.vercel.app/como-crear-servidor-rust-pirata" />
        <meta property="og:title" content="Como Crear Servidor Rust Pirata 2275/2388 - Guia Completa 2026" />
        <meta property="og:description" content="Guia completa paso a paso para crear tu servidor de Rust Pirata. Configuracion, plugins, AntiCheat y soporte 24/7." />
        <meta property="og:image" content="https://latamrust.vercel.app/LATAMLOGO.webp" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Como Crear Servidor Rust Pirata - Guia Completa 2026" />
        <meta name="twitter:description" content="Guia completa para crear tu servidor de Rust Pirata 2275 o 2388 con plugins, AntiCheat y soporte." />
        <meta name="twitter:image" content="https://latamrust.vercel.app/LATAMLOGO.webp" />
        <link rel="canonical" href="https://latamrust.vercel.app/como-crear-servidor-rust-pirata" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Como Crear un Servidor de Rust Pirata 2275/2388",
            "description": "Guia completa paso a paso para crear y configurar tu servidor de Rust Pirata con plugins, AntiCheat y optimizacion para LATAM.",
            "image": "https://latamrust.vercel.app/LATAMLOGO.webp",
            "totalTime": "PT30M",
            "step": [
              {"@type": "HowToStep", "name": "Elegir version de Rust", "text": "Elige entre Rust 2275 OldRecoil o Rust 2388 Actualizado segun tu preferencia."},
              {"@type": "HowToStep", "name": "Contratar hosting VPS", "text": "Contrata un VPS con minimo 8GB RAM, preferably en Brasil o USA para ping bajo."},
              {"@type": "HowToStep", "name": "Recibir archivos del servidor", "text": "Recibes los archivos configurados de tu servidor Rust pirata listos para instalar."},
              {"@type": "HowToStep", "name": "Instalar y configurar", "text": "Sube los archivos al VPS, configura los puertos y ejecuta el servidor."},
              {"@type": "HowToStep", "name": "Instalar plugins", "text": "Instala los plugins que necesites: Oxide, uMod, AntiCheat, economia, kits, etc."},
              {"@type": "HowToStep", "name": "Invitar jugadores", "text": "Comparte la IP de tu servidor y empieza a jugar con tu comunidad."}
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {"@type": "Question", "name": "Cuanto cuesta crear un servidor Rust pirata?", "acceptedAnswer": {"@type": "Answer", "text": "El servidor premium cuesta desde $17 USD (pago unico) para Rust 2275 y $25 USD para Rust 2388. El hosting VPS se contrata por separado desde $5/mes."}},
              {"@type": "Question", "name": "Necesito conocimientos tecnicos para crear un servidor Rust?", "acceptedAnswer": {"@type": "Answer", "text": "No, nosotros nos encargamos de toda la configuracion tecnica. Solo necesitas contactarnos por WhatsApp y te guiamos en cada paso."}},
              {"@type": "Question", "name": "Cuanto tiempo tarda en estar listo mi servidor?", "acceptedAnswer": {"@type": "Answer", "text": "Tu servidor puede estar listo en menos de 5 minutos despues del pago. La configuracion completa toma menos de 24 horas."}},
              {"@type": "Question", "name": "Que VPS es mejor para un servidor Rust pirata?", "acceptedAnswer": {"@type": "Answer", "text": "Recomendamos VPS con minimo 8GB RAM, 4 cores, y ubicacion en Brasil o USA para ping bajo. DigitalOcean, Vultr y Hetzner son buenas opciones."}},
              {"@type": "Question", "name": "Puedo instalar plugins en mi servidor Rust pirata?", "acceptedAnswer": {"@type": "Answer", "text": "Si, tu servidor viene con soporte para Oxide y uMod con +30,000 plugins disponibles. Kits, economia, tiendas, anti-cheat y mas."}},
              {"@type": "Question", "name": "Cuantos jugadores puede soportar mi servidor?", "acceptedAnswer": {"@type": "Answer", "text": "Depende del VPS. Con 8GB RAM puedes tener 50-100 jugadores. Con 16GB, hasta 200. Con 32GB, mas de 300 jugadores simultaneos."}},
              {"@type": "Question", "name": "Que plugins son esenciales para un servidor Rust?", "acceptedAnswer": {"@type": "Answer", "text": "Los esenciales son: Kits, BetterChat, Vanish, NoEscape, Backpacks, Economics, ServerRewards, and RustAdmin AntiCheat."}},
              {"@type": "Question", "name": "Puedo cambiar de Rust 2275 a 2388 despues?", "acceptedAnswer": {"@type": "Answer", "text": "Si, puedes migrar tu servidor de una version a otra. Contactanos por WhatsApp y te ayudamos con la migracion."}}
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://latamrust.vercel.app/"},
              {"@type": "ListItem", "position": 2, "name": "Crear Servidor Rust Pirata", "item": "https://latamrust.vercel.app/como-crear-servidor-rust-pirata"}
            ]
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-red-950/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 mb-6">
            <Settings className="w-4 h-4 text-red-500" />
            <span className="text-red-400 text-xs font-bold tracking-widest uppercase">Guia Completa 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Como Crear Servidor <span className="text-red-500">Rust Pirata</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Guia completa paso a paso para crear tu servidor de Rust Pirata 2275 o 2388. 
            Configuracion, plugins, AntiCheat y hosting. Desde <strong className="text-white">$17 USD</strong>.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://api.whatsapp.com/send?phone=595981144534" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              CREAR MI SERVIDOR AHORA
            </a>
            <Link to="/descargar-rust-pirata" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-lg transition-all flex items-center gap-2">
              Descargar Rust Pirata
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">

        {/* Introduccion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Que Necesitas para Crear tu Servidor Rust Pirata</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            <strong>Crear un servidor de Rust pirata</strong> es mas facil de lo que parece. Con la guia correcta y el soporte adecuado, 
            puedes tener tu propio servidor funcionando en menos de 24 horas. No necesitas ser experto en tecnologia ni tener conocimientos 
            avanzados de Linux. Nosotros nos encargamos de la parte tecnica y vos solo tenes que disfrutar jugando.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Para <strong>crear un servidor de Rust 2275 o 2388 pirata</strong>, necesitas basicamente tres cosas: un VPS (servidor virtual), 
            los archivos del juego configurados, y ganas de armar tu propia comunidad. El costo total es muy bajo: el VPS desde $5/mes y 
            la licencia del servidor es un pago unico desde $17 USD.
          </p>
        </section>

        {/* Requisitos */}
        <section className="mb-12 bg-gray-900/50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Requisitos para Montar un Servidor Rust Pirata</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 rounded-xl p-6 border border-green-900/30">
              <Server className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">VPS / Hosting</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Minimo <strong>8GB RAM</strong> (recomendado 16GB+)</li>
                <li>• 4+ cores de procesador</li>
                <li>• 50GB+ de espacio SSD</li>
                <li>• Ubicacion: Brasil o USA para ping bajo</li>
                <li>• Proveedores: DigitalOcean, Vultr, Hetzner</li>
                <li>• Costo: desde <strong>$5-20 USD/mes</strong></li>
              </ul>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-red-900/30">
              <Shield className="w-10 h-10 text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Servidor Rust Pirata</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• <strong>Rust 2275 OldRecoil:</strong> $17 USD</li>
                <li>• <strong>Rust 2388 Actualizado:</strong> $25 USD</li>
                <li>• Configuracion completa incluida</li>
                <li>• +30,000 plugins Oxide/uMod</li>
                <li>• AntiCheat profesional</li>
                <li>• Soporte tecnico 24/7</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Paso a paso */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Paso a Paso: Como Montar tu Servidor Rust Pirata</h2>
          
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Elegi la Version de Rust",
                description: "Decidite entre Rust 2275 OldRecoil (recoil clasico, la favorita de la comunidad) o Rust 2388 Actualizado (ultima version con mejores graficos). Ambas son excelentes, depende de tu preferencia personal.",
                tips: ["2275: Mejor para PvP competitivo, recoil predecible", "2388: Mejores graficos y optimizaciones recientes"]
              },
              {
                step: "02",
                title: "Contrata un VPS",
                description: "Necesitas un VPS (Virtual Private Server) donde va a correr tu servidor de Rust. Elegi un VPS con al menos 8GB RAM y ubicacion en Brasil o USA para tener ping bajo. Te recomendamos proveedores confiables.",
                tips: ["8GB RAM = 50-100 jugadores", "16GB RAM = 100-200 jugadores", "32GB RAM = 200+ jugadores"]
              },
              {
                step: "03",
                title: "Recibi tu Servidor Configurado",
                description: "Una vez que eliges la version y contratas el VPS, te enviamos los archivos del servidor completamente configurados e instalados. Incluye el juego, plugins base y AntiCheat listo para usar.",
                tips: ["Archivos listos para copiar al VPS", "Configuracion optimizada", "Plugins esenciales pre-instalados"]
              },
              {
                step: "04",
                title: "Subi los Archivos al VPS",
                description: "Copia los archivos de tu servidor al VPS usando SCP, SFTP o el panel de tu proveedor. Tambien te damos acceso a un panel web para gestionar todo facilmente desde el navegador.",
                tips: ["Panel WebPanel incluido", "Acceso SSH para avanzados", "Backup automatico configurable"]
              },
              {
                step: "05",
                title: "Configura Plugins y Reglas",
                description: "Instala los plugins que necesites para tu servidor. Desde kits y economia hasta tiendas y eventos. Con +30,000 plugins disponibles, podes personalizar tu servidor como quieras.",
                tips: ["Kits de inicio para nuevos jugadores", "Sistema de economia y tienda", "AntiCheat configurado automaticamente"]
              },
              {
                step: "06",
                title: "Invita a tu Comunidad",
                description: "Comparte la IP de tu servidor y empeza a recibir jugadores. Podes crear un Discord para tu servidor, promocionar en redes sociales y armar tu propia comunidad de Rust pirata.",
                tips: ["IP dedicada exclusiva", "Sin límite de jugadores (depende del VPS)", "Soporte 24/7 si tenes problemas"]
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <span className="text-2xl font-black text-red-500">{item.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tips.map((tip, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/5">
                        {tip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparativa */}
        <section className="mb-12 bg-gray-900/50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Rust 2275 vs 2388 - Cual Elegir para tu Servidor</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 rounded-xl p-6 border border-red-900/30">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Rust 2275 OldRecoil</h3>
              <p className="text-gray-300 mb-4">La version clasica favorita de la comunidad. Recoil predecible que todos conocen.</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Recoil clasico conocido por todos</li>
                <li>• Mas jugadores experimentados</li>
                <li>• PvP competitivo equilibrado</li>
                <li>• Precio: <strong className="text-white">$17 USD</strong></li>
              </ul>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-blue-900/30">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Rust 2388 Actualizado</h3>
              <p className="text-gray-300 mb-4">La ultima version con mejores graficos y optimizaciones.</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Ultima version estable</li>
                <li>• Mejores graficos y rendimiento</li>
                <li>• Nuevas armas y features</li>
                <li>• Precio: <strong className="text-white">$25 USD</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Plugins esenciales */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Plugins Esenciales para tu Servidor Rust</h2>
          <p className="text-gray-300 mb-6">
            Al <strong>crear tu servidor de Rust pirata</strong>, estos son los plugins que no pueden faltar:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Kits", desc: "Da items de inicio a los jugadores nuevos" },
              { name: "Economics", desc: "Sistema de dinero y economia del servidor" },
              { name: "Backpacks", desc: "Mochilas extra para llevar mas items" },
              { name: "BetterChat", desc: "Chat mejorado con rangos y colores" },
              { name: "Vanish", desc: "Modo invisible para administradores" },
              { name: "NoEscape", desc: "Evita que jugadores escapen de raids" },
              { name: "ServerRewards", desc: "Recompensas por tiempo jugado" },
              { name: "RustAdmin AntiCheat", desc: "Anti-cheat profesional contra hackers" }
            ].map((plugin, i) => (
              <div key={i} className="flex gap-3 p-4 bg-white/[0.02] rounded-xl border border-white/5">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-sm">{plugin.name}</h4>
                  <p className="text-gray-500 text-xs">{plugin.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/mejores-plugins-rust-pirata" className="text-red-400 hover:text-red-300 text-sm font-semibold flex items-center justify-center gap-2">
              Ver lista completa de 30+ plugins <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Preguntas Frecuentes - Crear Servidor Rust Pirata</h2>
          <div className="space-y-4">
            {[
              { q: "Cuanto cuesta crear un servidor Rust pirata?", a: "El servidor premium cuesta desde $17 USD (pago unico) para Rust 2275 y $25 USD para Rust 2388. El hosting VPS se contrata por separado desde $5/mes." },
              { q: "Necesito conocimientos tecnicos?", a: "No, nosotros nos encargamos de toda la configuracion tecnica. Solo necesitas contactarnos por WhatsApp y te guiamos en cada paso." },
              { q: "Cuanto tiempo tarda en estar listo?", a: "Tu servidor puede estar listo en menos de 5 minutos despues del pago. La configuracion completa toma menos de 24 horas." },
              { q: "Que VPS es mejor para Rust pirata?", a: "Recomendamos VPS con minimo 8GB RAM, 4 cores, y ubicacion en Brasil o USA para ping bajo. DigitalOcean, Vultr y Hetzner son buenas opciones." },
              { q: "Puedo instalar plugins?", a: "Si, tu servidor viene con soporte para Oxide y uMod con +30,000 plugins disponibles. Kits, economia, tiendas, anti-cheat y mas." },
              { q: "Cuantos jugadores puede soportar?", a: "Depende del VPS. Con 8GB RAM puedes tener 50-100 jugadores. Con 16GB, hasta 200. Con 32GB, mas de 300 jugadores simultaneos." }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/30">
                <h3 className="text-lg font-bold text-red-400 mb-3">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-r from-red-900/30 to-gray-900/30 rounded-2xl p-8 text-center border-2 border-red-500/30">
          <Server className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-4xl font-black mb-4">Crea tu Servidor Rust Pirata Hoy</h2>
          <p className="text-xl text-gray-300 mb-6">
            Desde $17 USD. Configuracion completa, plugins, AntiCheat y soporte 24/7.
          </p>
          <a href="https://api.whatsapp.com/send?phone=595981144534" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-xl transition-all transform hover:scale-105">
            CREAR MI SERVIDOR AHORA
          </a>
        </section>

        {/* Enlaces internos */}
        <section className="mt-8 bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
          <h3 className="text-lg font-bold text-gray-400 mb-4">Guias Relacionados</h3>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <Link to="/descargar-rust-pirata" className="text-gray-500 hover:text-red-400 transition-colors">
              → Descargar Rust Pirata Gratis
            </Link>
            <Link to="/mejores-plugins-rust-pirata" className="text-gray-500 hover:text-red-400 transition-colors">
              → Mejores Plugins Rust Pirata
            </Link>
            <Link to="/rust-2275-oldrecoil" className="text-gray-500 hover:text-red-400 transition-colors">
              → Rust 2275 OldRecoil
            </Link>
            <Link to="/rust-2388-actualizado" className="text-gray-500 hover:text-red-400 transition-colors">
              → Rust 2388 Actualizado
            </Link>
            <Link to="/servidores-rust-pirata" className="text-gray-500 hover:text-red-400 transition-colors">
              → Ranking Servidores Rust
            </Link>
            <Link to="/rust-pirata-brasil" className="text-gray-500 hover:text-red-400 transition-colors">
              → Rust Pirata Brasil
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default ComoCrearServidorRust;
