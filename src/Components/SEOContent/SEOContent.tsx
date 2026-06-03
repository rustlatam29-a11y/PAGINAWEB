import React from 'react';
import { Server, Code, ShoppingCart, Wrench } from 'lucide-react';

const SEOContent: React.FC = () => {
  return (
    <>
      {/* Divider Line */}
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>
      
      <section className="relative py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-red-900/30 card-hover text-center">
              <Server className="w-12 h-12 text-red-500 mb-4 mx-auto icon-bounce" />
              <h3 className="text-xl font-bold text-white mb-2">Creación de Servidores</h3>
              <p className="text-gray-400">Rust 2275 y 2388</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-red-900/30 card-hover text-center">
              <Code className="w-12 h-12 text-red-500 mb-4 mx-auto icon-bounce" />
              <h3 className="text-xl font-bold text-white mb-2">Desarrollo de Plugins</h3>
              <p className="text-gray-400">Personalizados a medida</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-red-900/30 card-hover text-center">
              <ShoppingCart className="w-12 h-12 text-red-500 mb-4 mx-auto icon-bounce" />
              <h3 className="text-xl font-bold text-white mb-2">+30K Plugins</h3>
              <p className="text-gray-400">Para todas las versiones</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-red-900/30 card-hover text-center">
              <Wrench className="w-12 h-12 text-red-500 mb-4 mx-auto icon-bounce" />
              <h3 className="text-xl font-bold text-white mb-2">Soporte 24/7</h3>
              <p className="text-gray-400">Instalación y configuración</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://api.whatsapp.com/send?phone=595981144534"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black text-xl px-12 py-6 rounded-xl transform transition-all duration-300 hover:scale-105 pulse-glow shadow-2xl"
            >
              Contactar Ahora
            </a>
            <p className="text-gray-500 text-sm mt-4">
              WhatsApp directo • Respuesta inmediata
            </p>
          </div>
        </div>
        
        {/* Styles for divider */}
        <style>{`
          .section-divider {
            width: 100%;
            padding: 1.5rem 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .divider-line {
            width: 80%;
            max-width: 1200px;
            height: 2px;
            background: linear-gradient(90deg, transparent, #dc2626, transparent);
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.5);
            animation: dividerPulse 3s ease-in-out infinite;
          }
          
          @keyframes dividerPulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
        `}</style>
      </section>
    </>
  );
};

export default SEOContent;
