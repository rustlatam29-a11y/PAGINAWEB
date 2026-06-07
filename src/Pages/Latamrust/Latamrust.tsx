import React from "react";
import { Helmet } from "react-helmet-async";
import { Server, Shield, Zap, Headphones, Users, Star, ArrowRight } from "lucide-react";

const Latamrust: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>LATAMRUST - Servidores Rust Pirata #1 Latinoamerica | Rust 2275 y 2388</title>
        <meta name="description" content="LATAMRUST es el servicio #1 de servidores Rust Pirata en Latinoamerica. Rust 2275 OldRecoil y Rust 2388 con +30,000 plugins, AntiCheat y soporte 24/7. Ping bajo en Brasil, Argentina, Mexico." />
        <meta name="keywords" content="latamrust, latam rust, rust pirata, servidores rust pirata, rust 2275, rust 2388, servidor rust brasil, servidor rust argentina, rust pirata gratis, crear servidor rust" />
        <link rel="canonical" href="https://latamrust.online/latamrust" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://latamrust.online/latamrust" />
        <meta property="og:title" content="LATAMRUST - Servidores Rust Pirata #1 Latinoamerica" />
        <meta property="og:description" content="El servicio #1 de servidores Rust Pirata en Latinoamerica. Rust 2275 y 2388, +30K plugins, soporte 24/7." />
        <meta property="og:image" content="https://latamrust.online/LATAMLOGO.webp" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="LATAMRUST" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LATAMRUST - Servidores Rust Pirata #1" />
        <meta name="twitter:description" content="Servicio #1 de servidores Rust Pirata en LATAM. Rust 2275 y 2388." />
        <meta name="twitter:image" content="https://latamrust.online/LATAMLOGO.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "LATAMRUST - Servidores Rust Pirata #1 Latinoamerica",
            "description": "LATAMRUST es el servicio #1 de servidores Rust Pirata en Latinoamerica",
            "url": "https://latamrust.online/latamrust",
            "mainEntity": {
              "@type": "Organization",
              "name": "LATAMRUST",
              "url": "https://latamrust.online",
              "description": "Servidores de Rust Pirata 2275 y 2388 para Latinoamerica"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://latamrust.online/"},
              {"@type": "ListItem", "position": 2, "name": "LATAMRUST", "item": "https://latamrust.online/latamrust"}
            ]
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-red-950/30 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-red-500">LATAM</span>RUST
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">
            El servicio #1 de servidores Rust Pirata en Latinoamerica
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Rust 2275 OldRecoil y Rust 2388. +30,000 plugins, AntiCheat profesional,
            soporte directo por Discord y ping bajo en toda LATAM.
          </p>
          <a
            href="https://discord.com/invite/7Vz4YBamFG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300"
          >
            Empezar ahora
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Que es LATAMRUST */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Que es <span className="text-red-500">LATAMRUST</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                LATAMRUST es una comunidad de servidores Rust pirata fundada en 2024.
                Ofrecemos servidores dedicados con la mejor configuracion, plugins
                personalizados y soporte directo para jugadores de toda Latinoamerica.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Nuestro equipo tiene mas de 8 anos de experiencia administrando
                servidores Rust. Trabajamos con las comunidades mas grandes del
                ecosistema como RustSpain y Brasa.gg.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Si buscas un servidor Rust pirata con ping bajo, AntiCheat y soporte
                real, LATAMRUST es tu mejor opcion.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-black text-red-500 mb-2">10K+</div>
                <div className="text-gray-400 text-sm">Jugadores activos</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-black text-red-500 mb-2">200+</div>
                <div className="text-gray-400 text-sm">Servidores armados</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-black text-red-500 mb-2">30K+</div>
                <div className="text-gray-400 text-sm">Plugins disponibles</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-black text-red-500 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Soporte directo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Que ofrecemos en <span className="text-red-500">LATAMRUST</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Server, title: "Servidores Rust Pirata", desc: "Rust 2275 y 2388 con configuracion completa y IP dedicada." },
              { icon: Shield, title: "AntiCheat Profesional", desc: "Proteccion contra hackers. Ban automatico 24/7." },
              { icon: Zap, title: "+30,000 Plugins", desc: "Economia, kits, tiendas, VIP. Oxide y uMod." },
              { icon: Headphones, title: "Soporte 24/7", desc: "Discord directo. Sin tickets, sin colas." },
              { icon: Users, title: "Comunidad Activa", desc: "10,000+ jugadores en toda Latinoamerica." },
              { icon: Star, title: "Configuracion Gratis", desc: "Setup completo incluido en el precio." },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-red-500/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Paises */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Disponible en <span className="text-red-500">toda LATAM</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Servidores con ping bajo en Brasil, Argentina, Mexico, Chile, Colombia,
            Peru, Uruguay, Paraguay y mas paises de Latinoamerica.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Brasil", "Argentina", "Mexico", "Chile", "Colombia", "Peru", "Uruguay", "Paraguay"].map((pais) => (
              <span key={pais} className="px-6 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-gray-300 font-medium">
                {pais}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Unite a <span className="text-red-500">LATAMRUST</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Contactanos por Discord y armamos tu servidor Rust pirata en menos de 24 horas.
          </p>
          <a
            href="https://discord.com/invite/7Vz4YBamFG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300"
          >
            Discord Directo
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Latamrust;
