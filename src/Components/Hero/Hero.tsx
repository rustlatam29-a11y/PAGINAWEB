import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-24 pb-16">
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-gray-300 text-sm font-medium">Servidores activos 24/7</span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tight mb-6">
          RUST
          <br />
          <span className="text-red-500">PIRATA</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Venta de servidores, plugins y soporte técnico para{" "}
          <span className="text-white font-semibold">Rust 2275</span> y{" "}
          <span className="text-white font-semibold">Rust 2388</span>.
          Más de 8 años de experiencia administrando comunidades gaming.
        </p>

        {/* CTA */}
        <a
          href="https://api.whatsapp.com/send?phone=595981144534"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5" />
          <span>CONSULTAR AHORA</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
