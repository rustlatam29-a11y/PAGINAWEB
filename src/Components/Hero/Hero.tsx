import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-gray-400 text-sm font-medium">Servidores activos 24/7</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6">
          VENDEmos
          <br />
          <span className="text-red-500">SERVIDORES</span>
          <br />
          <span className="text-gray-500 text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal">
            de Rust Pirata
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Licencias, configuración, plugins y soporte para{" "}
          <span className="text-white font-semibold">Rust 2275</span> y{" "}
          <span className="text-white font-semibold">Rust 2388</span>.
          <br className="hidden sm:block" />
          Todo lo que necesitás para tener tu propio servidor.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://api.whatsapp.com/send?phone=595981144534"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Consultar por WhatsApp</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#planes"
            className="flex items-center gap-2 text-gray-400 hover:text-white font-medium px-6 py-4 rounded-xl border border-white/10 hover:border-white/20 transition-all"
          >
            Ver planes y precios
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">30K+</div>
            <div className="text-gray-500 text-xs sm:text-sm">Plugins</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">24/7</div>
            <div className="text-gray-500 text-xs sm:text-sm">Soporte</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">8+</div>
            <div className="text-gray-500 text-xs sm:text-sm">Años</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
