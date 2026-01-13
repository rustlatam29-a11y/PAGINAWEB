import React from "react";
import { Download, Server, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const RustPirataArgentina: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-red-950/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">🇦🇷</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Rust Pirata Argentina - Descargar Gratis 2026
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Servidor LATAMRUST - El mejor servidor de Rust Pirata en Argentina con ping bajo y más de 10.000 jugadores
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              JUGAR AHORA →
            </Link>
            <a 
              href="https://discord.gg/dT8u5b3jga"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-lg transition-all"
            >
              Discord Argentina
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Intro */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">¿Qué es Rust Pirata Argentina?</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            <strong>Rust Pirata Argentina</strong> es la versión gratuita del popular juego Rust, optimizada para jugadores argentinos. 
            LATAMRUST ofrece el <strong>mejor servidor de Rust Pirata en Argentina</strong> con ping bajo de 40-60ms desde Buenos Aires, 
            Córdoba, Rosario, Mendoza y todas las provincias argentinas.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Somos el <strong>servidor rust pirata argentina</strong> #1 con más de 10.000 jugadores activos, incluyendo miles de 
            argentinos que juegan todos los días. 100% gratis, sin lag, con moderación en español rioplatense y soporte 24/7 
            para la comunidad argentina.
          </p>
        </section>

        {/* Ventajas Argentina */}
        <section className="mb-12 bg-gray-900/50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Por Qué LATAMRUST es el Mejor Servidor Rust Pirata Argentina</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 rounded-xl p-6 border border-blue-900/30">
              <Zap className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Ping Bajo Argentina</h3>
              <p className="text-gray-300">
                <strong>40-60ms</strong> desde Buenos Aires, Córdoba, Rosario y principales ciudades argentinas. 
                Servidores optimizados para conexión LATAM con routing especial para Argentina.
              </p>
            </div>

            <div className="bg-black/40 rounded-xl p-6 border border-blue-900/30">
              <Users className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Comunidad Argentina Activa</h3>
              <p className="text-gray-300">
                Miles de jugadores argentinos online 24/7. Clan argentino oficial, eventos especiales para Argentina, 
                y moderadores que hablan español rioplatense boludo.
              </p>
            </div>

            <div className="bg-black/40 rounded-xl p-6 border border-blue-900/30">
              <Download className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Descargar Rust Pirata Gratis</h3>
              <p className="text-gray-300">
                <strong>Descarga Rust Pirata 2275 gratis</strong> para Argentina. Instalación fácil, tutorial en español, 
                sin virus, sin costo. Juega Rust gratis para siempre.
              </p>
            </div>

            <div className="bg-black/40 rounded-xl p-6 border border-blue-900/30">
              <Server className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Servidores Premium</h3>
              <p className="text-gray-300">
                Hardware dedicado, uptime 99.9%, anti-cheat profesional, sin lag. 
                El <strong>servidor rust argentina</strong> más potente de LATAM.
              </p>
            </div>
          </div>
        </section>

        {/* Como Descargar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Cómo Descargar Rust Pirata Argentina - Tutorial 2026</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Unite al Discord LATAMRUST</h3>
                <p className="text-gray-300">
                  Entrá a nuestro Discord oficial en <a href="https://discord.gg/dT8u5b3jga" className="text-red-400 underline" target="_blank" rel="noopener noreferrer">discord.gg/dT8u5b3jga</a>. 
                  Todos los links para <strong>descargar rust pirata argentina</strong> están en #downloads.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Descargá Rust Pirata 2275</h3>
                <p className="text-gray-300">
                  En la sección #downloads vas a encontrar el link para <strong>bajar rust pirata gratis</strong>. 
                  El archivo pesa 8-10 GB. Asegurate de tener espacio en tu disco.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Instalá el Juego</h3>
                <p className="text-gray-300">
                  Descomprimí el archivo .zip o .rar en una carpeta. Ejecutá el launcher de Rust Pirata. 
                  La instalación es rápida y sin complicaciones.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Conectate al Servidor Argentina</h3>
                <p className="text-gray-300">
                  Abrí Rust Pirata, apretá F1 y usá el comando de conexión que está en el Discord. 
                  El <strong>servidor rust pirata argentina</strong> tiene ping bajo optimizado para tu conexión.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center font-bold text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-400">¡A Jugar Rust Gratis!</h3>
                <p className="text-gray-300">
                  Ya estás listo para jugar <strong>Rust Pirata Argentina</strong> gratis con miles de argentinos. 
                  ¡Dale boludo, nos vemos en el servidor!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Argentina */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Preguntas Frecuentes - Rust Pirata Argentina 2026</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-red-400 mb-2">¿Rust Pirata funciona bien en Argentina?</h3>
              <p className="text-gray-300">
                Sí, <strong>Rust Pirata Argentina</strong> funciona perfectamente. LATAMRUST tiene servidores optimizados para LATAM 
                con ping de 40-60ms desde Buenos Aires, Córdoba, Rosario, Mendoza y toda Argentina. Thousands de argentinos juegan 
                sin problemas todos los días.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-red-400 mb-2">¿Es gratis Rust Pirata en Argentina?</h3>
              <p className="text-gray-300">
                Sí, <strong>Rust Pirata es 100% gratis</strong> en Argentina y todo el mundo. Podés <strong>descargar rust pirata gratis</strong> 
                desde el Discord de LATAMRUST y jugar ilimitadamente sin pagar nada. No hay costos ocultos, es gratis para siempre che.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-red-400 mb-2">¿Cuánto ping tengo desde Argentina?</h3>
              <p className="text-gray-300">
                El ping desde Argentina al <strong>servidor rust pirata</strong> LATAMRUST es de 40-60ms desde Buenos Aires, 
                Córdoba, Rosario y principales ciudades. Desde el interior puede ser 60-80ms. Es el mejor ping que vas a encontrar 
                en cualquier <strong>servidor rust argentina</strong>.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-red-400 mb-2">¿Hay argentinos jugando Rust Pirata?</h3>
              <p className="text-gray-300">
                ¡Claro boludo! Miles de argentinos juegan <strong>Rust Pirata Argentina</strong> en LATAMRUST todos los días. 
                Tenemos clan argentino oficial, moderadores argentinos que hablan bien porteño, y eventos especiales para la comunidad argentina. 
                Es el <strong>servidor rust argentina</strong> con más jugadores argentinos.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-red-400 mb-2">¿Es seguro descargar Rust Pirata en Argentina?</h3>
              <p className="text-gray-300">
                Sí, <strong>descargar Rust Pirata desde LATAMRUST es 100% seguro</strong>. Sin virus, sin malware, sin trampas. 
                Más de 10.000 argentinos confían en nosotros. Solo descargá desde los links oficiales del Discord de LATAMRUST, 
                nunca de otros lados che.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-red-400 mb-2">¿Qué versión de Rust Pirata tienen para Argentina?</h3>
              <p className="text-gray-300">
                Tenemos <strong>Rust Pirata versión 2275</strong> (última actualización 2025-2026). Es la versión más reciente y 
                estable de <strong>rust pirata</strong> compatible con todos los mods y plugins. Funciona perfecto para argentinos 
                en cualquier PC.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center bg-gradient-to-r from-red-900/20 to-black rounded-2xl p-8 border border-red-900/30 mb-8">
          <h2 className="text-3xl font-bold mb-4">Unite a Miles de Argentinos en LATAMRUST</h2>
          <p className="text-xl text-gray-300 mb-6">
            El mejor <strong>servidor Rust Pirata Argentina</strong> te está esperando. 
            Descargá gratis, conectate y empezá a jugar con la comunidad argentina más grande de Rust.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              JUGAR AHORA 🇦🇷
            </Link>
            <a 
              href="https://discord.gg/dT8u5b3jga"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-lg transition-all"
            >
              Discord Argentina
            </a>
          </div>
        </section>

        {/* Internal Links SEO */}
        <section className="bg-gray-900/30 rounded-xl p-6 border border-gray-800">
          <h3 className="text-xl font-bold mb-4 text-center">Mirá También:</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/rust-pirata-brasil" className="bg-black/40 p-4 rounded-lg hover:bg-black/60 transition-all border border-green-900/30">
              <div className="text-2xl mb-2">🇧🇷</div>
              <h4 className="font-bold text-green-400 mb-2">Rust Pirata Brasil</h4>
              <p className="text-sm text-gray-400">Servidor para Brasil con ping bajo</p>
            </Link>
            <Link to="/servidores-rust-pirata" className="bg-black/40 p-4 rounded-lg hover:bg-black/60 transition-all border border-red-900/30">
              <div className="text-2xl mb-2">📊</div>
              <h4 className="font-bold text-red-400 mb-2">Ranking Servidores</h4>
              <p className="text-sm text-gray-400">Top 10 mejores servidores Rust</p>
            </Link>
            <Link to="/rust-family" className="bg-black/40 p-4 rounded-lg hover:bg-black/60 transition-all border border-red-900/30">
              <div className="text-2xl mb-2">❤️</div>
              <h4 className="font-bold text-red-400 mb-2">Rust Family</h4>
              <p className="text-sm text-gray-400">Comunidad Rust más grande</p>
            </Link>
          </div>
        </section>

      </article>
    </div>
  );
};

export default RustPirataArgentina;
