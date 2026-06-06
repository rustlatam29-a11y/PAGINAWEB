import React from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { useLanguage } from "../../Context/LanguageContext";

const Hero: React.FC = () => {
  const { t, tList } = useLanguage();
  const advantages = tList("hero.advantages");

  return (
    <section className="relative min-h-[90vh] flex items-center py-24 overflow-hidden border-t border-white/5">
      {/* Glow rojo izquierda */}
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Izquierda - Texto */}
        <div>
          {/* Titulo */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tight mb-6">
            {t("hero.title1")}
            <br />
            <span className="text-red-500">{t("hero.title2")}</span>
          </h1>

          {/* Subtitulo */}
          <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed mb-4">
            {t("hero.subtitle")}
          </p>

          {/* Descripcion */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
            {t("hero.desc1")}{" "}
            <span className="text-white font-semibold">Rust 2275</span>{" "}
            {t("hero.desc2")}{" "}
            <span className="text-white font-semibold">Rust 2388</span>
            {t("hero.desc3")}
          </p>

          {/* Ventajas */}
          <div className="flex flex-wrap gap-4 mb-10">
            {advantages.map((advantage: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-red-500" />
                </div>
                <span className="text-gray-300 text-sm font-medium">
                  {advantage}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://api.whatsapp.com/send?phone=595981144534"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-5 rounded-xl text-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/25"
          >
            <MessageCircle className="w-6 h-6" />
            <span>{t("hero.cta")}</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Derecha - Decoracion */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-600/10 rounded-3xl blur-3xl" />
            <img
              src="/decoracion-pagina.png"
              alt="Rust Pirata"
              width="800"
              height="600"
              className="relative w-full max-w-lg rounded-3xl object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
