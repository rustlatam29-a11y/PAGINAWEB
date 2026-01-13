import React from 'react';
import { Download, Users, Server, Shield } from 'lucide-react';

const SEOContent: React.FC = () => {
  return (
    <>
      {/* Divider Line */}
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>
      
      <section className="relative py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Simple Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-red-900/30 card-hover text-center">
              <Download className="w-12 h-12 text-red-500 mb-4 mx-auto icon-bounce" />
              <h3 className="text-xl font-bold text-white mb-2">100% Gratis</h3>
              <p className="text-gray-400">Descarga y juega sin límites</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-red-900/30 card-hover text-center">
              <Users className="w-12 h-12 text-red-500 mb-4 mx-auto icon-bounce" />
              <h3 className="text-xl font-bold text-white mb-2">+10K Jugadores</h3>
              <p className="text-gray-400">Comunidad activa BR-LATAM</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-red-900/30 card-hover text-center">
              <Server className="w-12 h-12 text-red-500 mb-4 mx-auto icon-bounce" />
              <h3 className="text-xl font-bold text-white mb-2">Ping Bajo</h3>
              <p className="text-gray-400">Servidores premium 24/7</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-red-900/30 card-hover text-center">
              <Shield className="w-12 h-12 text-red-500 mb-4 mx-auto icon-bounce" />
              <h3 className="text-xl font-bold text-white mb-2">Anti-Cheat</h3>
              <p className="text-gray-400">Moderación profesional</p>
            </div>
          </div>

          {/* Simple CTA */}
          <div className="text-center">
            <a
              href="https://discord.gg/dT8u5b3jga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-xl px-12 py-6 rounded-xl transform transition-all duration-300 hover:scale-105 pulse-glow shadow-2xl"
            >
              Únete al Discord - Empieza a Jugar
            </a>
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
