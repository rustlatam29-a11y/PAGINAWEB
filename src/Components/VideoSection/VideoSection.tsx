import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { Server, Code, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Servidores Rust Pirata",
    desc: "Rust 2275 OldRecoil y Rust 2388. Configuracion completa.",
  },
  {
    icon: Code,
    title: "+30,000 Plugins",
    desc: "Economia, kits, tiendas, anti-cheat. Oxide y uMod.",
  },
  {
    icon: Shield,
    title: "AntiCheat Profesional",
    desc: "Proteccion contra hackers. Ban automatico.",
  },
  {
    icon: Zap,
    title: "Soporte 24/7",
    desc: "WhatsApp directo. Sin tickets, sin colas.",
  },
];

const VideoSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-24 bg-[#0a0a0a] border-t border-white/5" id="servicios">
      <div className="max-w-screen-xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/LGcECozNXEw"
                  title="Rust Trailer Oficial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <span className="text-red-500 text-sm font-bold tracking-widest uppercase">
              ¿Por que elegirnos?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-6">
              Tu servidor Rust listo en minutos,{" "}
              <span className="text-red-500">sin complicaciones</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              No perdas tiempo con configuraciones complicadas. Tu servidor pirata con
              plugins, AntiCheat y soporte directo por WhatsApp. Asi de simple.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
