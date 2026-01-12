import React from 'react';
import { Download, Users, Server, Shield } from 'lucide-react';

const SEOContent: React.FC = () => {
  return (
    <section className="relative py-4 lg:py-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main SEO Section */}
        <div className="text-center mb-4 fade-in-up">
          <h2 className="text-2xl lg:text-4xl font-black text-white mb-4">
            Descarga <span className="text-red-500">Rust Gratis</span> y Únete a LATAMRUST
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ¿Buscas descargar Rust gratis? LATAMRUST es el servidor premium de Rust para Latinoamérica. 
            Experimenta el mejor servidor latino con comunidad activa, soporte en español y eventos exclusivos.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 mb-4">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-red-900/30 card-hover">
            <Download className="w-9 h-9 text-red-500 mb-2 icon-bounce" />
            <h3 className="text-lg font-bold text-white mb-2">Gratis para Siempre</h3>
            <p className="text-gray-400">Descarga Rust gratis y juega sin límites en nuestro servidor premium</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-red-900/30 card-hover">
            <Users className="w-9 h-9 text-red-500 mb-2 icon-bounce" />
            <h3 className="text-lg font-bold text-white mb-2">Comunidad Latina</h3>
            <p className="text-gray-400">La comunidad más grande de Rust en Latinoamérica con +10K jugadores</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-red-900/30 card-hover">
            <Server className="w-9 h-9 text-red-500 mb-2 icon-bounce" />
            <h3 className="text-lg font-bold text-white mb-2">Servidor Premium</h3>
            <p className="text-gray-400">Alta disponibilidad, bajo ping y experiencia optimizada 24/7</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-red-900/30 card-hover">
            <Shield className="w-9 h-9 text-red-500 mb-2 icon-bounce" />
            <h3 className="text-lg font-bold text-white mb-2">Anti-Cheat Activo</h3>
            <p className="text-gray-400">Moderación profesional y sistema anti-trampas para juego justo</p>
          </div>
        </div>

        {/* How to Download Section */}
        <div className="bg-gradient-to-r from-red-900/20 to-gray-900/20 backdrop-blur-lg rounded-2xl p-5 lg:p-8 border border-red-900/30 mb-3 fade-in-up">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-5 text-center">
            ¿Cómo Descargar Rust Gratis?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-5">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Descarga el Juego</h3>
              <p className="text-gray-300">
                Obtén Rust gratis desde la fuente oficial o plataformas alternativas compatibles con nuestro servidor
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instala y Configura</h3>
              <p className="text-gray-300">
                Sigue las instrucciones de instalación y configura tu juego para conectarte a servidores personalizados
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Únete a LATAMRUST</h3>
              <p className="text-gray-300">
                Conecta al servidor de LATAMRUST y empieza a jugar con la mejor comunidad latina de Rust
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-2">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-4 text-center">
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-2">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-5 border border-gray-700/50">
              <h3 className="text-lg font-bold text-red-400 mb-2">¿Es gratis jugar Rust en LATAMRUST?</h3>
              <p className="text-gray-300">
                Sí, puedes descargar Rust gratis y jugar en nuestro servidor sin ningún costo. LATAMRUST es completamente 
                gratuito y ofrece una experiencia premium sin barreras de pago.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-5 border border-gray-700/50">
              <h3 className="text-lg font-bold text-red-400 mb-2">¿Cómo descargo Rust gratis?</h3>
              <p className="text-gray-300">
                Rust gratis puede obtenerse a través de diferentes métodos. Una vez descargado e instalado, 
                simplemente conéctate a nuestro servidor LATAMRUST usando la IP que encontrarás en nuestro Discord.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-5 border border-gray-700/50">
              <h3 className="text-lg font-bold text-red-400 mb-2">¿LATAMRUST es un servidor latino?</h3>
              <p className="text-gray-300">
                Sí, LATAMRUST es el servidor de Rust más grande para Latinoamérica. Contamos con una comunidad 
                de más de 10,000 jugadores latinos, staff que habla español y soporte completo en nuestro idioma.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-5 border border-gray-700/50">
              <h3 className="text-lg font-bold text-red-400 mb-2">¿Qué hace especial a LATAMRUST?</h3>
              <p className="text-gray-300">
                LATAMRUST ofrece la mejor experiencia de Rust gratis en LATAM con servidores optimizados, bajo ping, 
                eventos exclusivos, comunidad activa 24/7, moderación profesional y una experiencia de juego justa 
                para todos los jugadores.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-6 lg:mt-8">
          <a
            href="https://discord.gg/dT8u5b3jga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-6 rounded-xl transform transition-all duration-300 hover:scale-105 pulse-glow"
          >
            Únete a Discord y Empieza a Jugar Gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
