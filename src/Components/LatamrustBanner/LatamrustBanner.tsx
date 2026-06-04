import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { Gamepad2, Clock, Users, Shield, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Acceso Gratuito",
    desc: "Sin costo, sin suscripcion. Entrá y jugá.",
  },
  {
    icon: Clock,
    title: "Activo 24/7",
    desc: "Servidor estable todo el dia. Sin caidas.",
  },
  {
    icon: Users,
    title: "Comunidad LATAM",
    desc: "Jugadores de toda Latinoamérica conectados.",
  },
  {
    icon: Shield,
    title: "Anti-Cheat",
    desc: "Partidas limpias y seguras para todos.",
  },
];

const LatamrustBanner: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-24 bg-[#0a0a0a]">
      <div className="max-w-screen-xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Trailer */}
          <div
            className={`transition-all duration-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/1x7Rbq7OXd4"
                  title="LATAMRUST Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Texto + Features */}
          <div
            className={`transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <span className="text-red-500 text-sm font-bold tracking-widest uppercase">
              Servidor Gratuito
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-2">
              LATAMRUST
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-gray-400 mb-6">
              Servidor de <span className="text-red-500">Rust Pirata</span>
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Unite a LATAMRUST, el servidor pirata más grande de la región. Activo
              24/7, sin costo y con la mejor comunidad de jugadores.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">{feature.title}</h3>
                      <p className="text-gray-500 text-xs mt-1">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="https://discord.gg/nG2GEDZUKR"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-5 rounded-xl text-xl transition-all duration-300 hover:scale-105 btn-shine"
            >
              <span>Jugar Gratis Ahora</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatamrustBanner;
