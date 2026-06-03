import React from 'react';
import { Server, Code, ShoppingCart, Wrench } from 'lucide-react';

const SEOContent: React.FC = () => {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02] text-center hover:border-white/20 transition-all">
            <Server className="w-10 h-10 text-gray-500 mb-4 mx-auto" />
            <h3 className="text-white font-bold mb-1">Creación de Servidores</h3>
            <p className="text-gray-500 text-sm">Rust 2275 y 2388</p>
          </div>
          
          <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02] text-center hover:border-white/20 transition-all">
            <Code className="w-10 h-10 text-gray-500 mb-4 mx-auto" />
            <h3 className="text-white font-bold mb-1">Desarrollo de Plugins</h3>
            <p className="text-gray-500 text-sm">Personalizados a medida</p>
          </div>
          
          <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02] text-center hover:border-white/20 transition-all">
            <ShoppingCart className="w-10 h-10 text-gray-500 mb-4 mx-auto" />
            <h3 className="text-white font-bold mb-1">+30K Plugins</h3>
            <p className="text-gray-500 text-sm">Para todas las versiones</p>
          </div>
          
          <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02] text-center hover:border-white/20 transition-all">
            <Wrench className="w-10 h-10 text-gray-500 mb-4 mx-auto" />
            <h3 className="text-white font-bold mb-1">Soporte 24/7</h3>
            <p className="text-gray-500 text-sm">Instalación y configuración</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://api.whatsapp.com/send?phone=595981144534"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all"
          >
            Contactar Ahora
          </a>
          <p className="text-gray-500 text-sm mt-3">
            WhatsApp directo • Respuesta inmediata
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
