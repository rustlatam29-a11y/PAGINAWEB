import React from "react";
import { Server, Code, ShoppingCart, Headphones, Shield, Zap } from "lucide-react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";

const services = [
  {
    icon: Server,
    title: "Servidores Rust Pirata",
    description: "Rust 2275 OldRecoil y Rust 2388. Configuración completa, IP dedicada y mundo personalizado.",
  },
  {
    icon: ShoppingCart,
    title: "+30,000 Plugins",
    description: "Economía, kits, tiendas, anti-cheat, eventos y más. Compatibles con Oxide y uMod.",
  },
  {
    icon: Code,
    title: "Desarrollo a Medida",
    description: "Plugins personalizados para tu servidor. Experiencia real con RustSpain y Brasa.gg.",
  },
  {
    icon: Shield,
    title: "AntiCheat Profesional",
    description: "Protección contra hackers y cheaters. Configurado y listo para usar.",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Te ayudo con la instalación, configuración y cualquier problema que tengas.",
  },
  {
    icon: Zap,
    title: "Configuración Rápida",
    description: "Tu servidor listo en menos de 24 horas. Sin demoras ni complicaciones.",
  },
];

const Services: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-20 px-4" id="servicios" style={{ background: "linear-gradient(to bottom, #070d1b, #0a1225)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-orange-500 text-sm font-bold tracking-widest uppercase">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Todo lo que necesitás
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Desde la creación del servidor hasta plugins personalizados.
            Un solo lugar para todo.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group p-6 rounded-2xl border border-white/5 bg-[#0a1225] hover:bg-[#0e1a30] hover:border-orange-500/20 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
