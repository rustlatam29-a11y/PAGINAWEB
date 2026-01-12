import React from 'react';
import { Download, Users, Server, Shield } from 'lucide-react';

const SEOContent: React.FC = () => {
  return (
    <>
      {/* Divider Line */}
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>
      
      <section className="relative py-4 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main SEO Section */}
        <div className="text-center mb-4 fade-in-up">
          <h2 className="text-2xl lg:text-4xl font-black text-white mb-4">
            <span className="text-red-500">Rust Pirata 2275</span> e <span className="text-red-500">DayZ 1.28</span> Grátis
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Baixar Rust Pirata v2275 e DayZ 1.28 grátis! LATAMRUST é o servidor premium para Brasil e LATAM. 
            Descarga Rust gratis y DayZ pirata con comunidad activa BR-ES, soporte português/español 24/7.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 mb-4">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-red-900/30 card-hover">
            <Download className="w-9 h-9 text-red-500 mb-2 icon-bounce" />
            <h3 className="text-lg font-bold text-white mb-2">Grátis para Sempre</h3>
            <p className="text-gray-400">Baixar Rust Pirata 2275 e DayZ 1.28 grátis - Descargar sin límites en servidores BR-ES</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-red-900/30 card-hover">
            <Users className="w-9 h-9 text-red-500 mb-2 icon-bounce" />
            <h3 className="text-lg font-bold text-white mb-2">Comunidade BR-LATAM</h3>
            <p className="text-gray-400">A maior comunidade de Rust pirata e DayZ pirata em LATAM - +10K jogadores</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-red-900/30 card-hover">
            <Server className="w-9 h-9 text-red-500 mb-2 icon-bounce" />
            <h3 className="text-lg font-bold text-white mb-2">Servidores Premium</h3>
            <p className="text-gray-400">Rust 2275 e DayZ 1.28 - Alta disponibilidade, ping baixo BR-LATAM 24/7</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-red-900/30 card-hover">
            <Shield className="w-9 h-9 text-red-500 mb-2 icon-bounce" />
            <h3 className="text-lg font-bold text-white mb-2">Anti-Cheat Ativo</h3>
            <p className="text-gray-400">Moderação profissional português/español - Sistema anti-trampa activo</p>
          </div>
        </div>

        {/* How to Download Section */}
        <div className="bg-gradient-to-r from-red-900/20 to-gray-900/20 backdrop-blur-lg rounded-2xl p-5 lg:p-8 border border-red-900/30 mb-3 fade-in-up">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-5 text-center">
            Como Baixar Rust Pirata 2275 e DayZ 1.28 Grátis?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-5">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Baixar o Jogo</h3>
              <p className="text-gray-300">
                Download Rust Pirata 2275 ou DayZ 1.28 grátis - Versiones compatibles con servidores BR-LATAM
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instalar e Configurar</h3>
              <p className="text-gray-300">
                Siga as instruções de instalação - Configure para conectar em servidores personalizados LATAM
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Junte-se ao LATAMRUST</h3>
              <p className="text-gray-300">
                Conecte ao servidor LATAMRUST e jogue com a maior comunidade BR-ES de Rust pirata e DayZ pirata
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-2">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-4 text-center">
            Perguntas Frequentes / Preguntas Frecuentes
          </h2>
          
          <div className="space-y-2">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-5 border border-gray-700/50">
              <h3 className="text-lg font-bold text-red-400 mb-2">É grátis jogar Rust Pirata 2275 e DayZ 1.28 no LATAMRUST?</h3>
              <p className="text-gray-300">
                Sim! Baixar Rust Pirata v2275 e DayZ 1.28 grátis e jogar nos servidores LATAMRUST sem nenhum custo. 
                Servidores BR-ES completamente gratuitos, experiência premium português/español 24/7.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-5 border border-gray-700/50">
              <h3 className="text-lg font-bold text-red-400 mb-2">Como baixar Rust Pirata 2275 e DayZ pirata grátis?</h3>
              <p className="text-gray-300">
                Download Rust Pirata versión 2275 y DayZ 1.28 gratis desde nuestro Discord. Una vez instalado, 
                conecta al servidor LATAMRUST BR-LATAM usando la IP que encontrarás en la comunidad Discord.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-5 border border-gray-700/50">
              <h3 className="text-lg font-bold text-red-400 mb-2">LATAMRUST é servidor brasileiro e latino?</h3>
              <p className="text-gray-300">
                Sim! LATAMRUST é o maior servidor de Rust pirata e DayZ pirata para Brasil e Latinoamérica. 
                +10.000 jogadores BR-LATAM, equipe bilíngue português/español, suporte completo 24/7.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-5 border border-gray-700/50">
              <h3 className="text-lg font-bold text-red-400 mb-2">O que torna LATAMRUST especial?</h3>
              <p className="text-gray-300">
                LATAMRUST oferece la mejor experiencia Rust Pirata 2275 y DayZ 1.28 gratis en LATAM: servidores 
                otimizados, ping baixo BR, eventos exclusivos, comunidade ativa BR-ES, moderação profissional e anti-cheat.
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
            🔥 Baixar Rust 2275 + DayZ 1.28 Grátis - Discord BR-ES
          </a>
        </div>
      </div>
      
      {/* Styles for divider */}
      <style>{`
        .section-divider {
          width: 100%;
          padding: 2rem 0;
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
