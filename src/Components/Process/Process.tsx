import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { MessageCircle, Settings, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Contactás por WhatsApp",
    description: "Me contás qué necesitás. Si es un servidor, plugins o soporte. Te respondo rápido.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Configuro tu servidor",
    description: "Me encargo de todo: instalación, plugins, AntiCheat, mundo personalizado. Todo listo.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Tu servidor está listo",
    description: "En menos de 24 horas tenés tu servidor funcionando. IP dedicada, backups y todo configurado.",
  },
  {
    icon: Headphones,
    step: "04",
    title: "Soporte continuo",
    description: "Si necesitás ayuda después, estoy disponible 24/7. Sin tickets, sin colas.",
  },
];

const Process: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-24 bg-[#0a0a0a] border-t border-white/5" id="proceso">
      <div className="max-w-screen-xl mx-auto px-8 md:px-12">
        <div
          className={`text-center mb-16 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-red-500 text-sm font-bold tracking-widest uppercase">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Cómo funciona
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Simple, rápido y sin complicaciones. Cuatro pasos y tu servidor está listo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-white/5" />
                )}

                <div className="text-center">
                  <div className="text-7xl font-black text-white/[0.02] mb-4">{step.step}</div>

                  <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-9 h-9 text-red-500" />
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
