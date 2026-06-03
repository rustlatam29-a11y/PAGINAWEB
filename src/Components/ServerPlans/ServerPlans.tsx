import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { Check, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "Rust 2275",
    subtitle: "OldRecoil",
    price: "$17",
    description: "La versión clásica que la comunidad ama",
    features: [
      "Recoil clásico conocido por todos",
      "+30,000 plugins Oxide/uMod",
      "AntiCheat configurado",
      "Panel de control WebPanel",
      "Backup automático diario",
      "IP dedicada exclusiva",
      "Soporte técnico 24/7",
    ],
  },
  {
    name: "Rust 2388",
    subtitle: "Actualizado",
    price: "$25",
    description: "La última versión con todo actualizado",
    popular: true,
    features: [
      "Última versión estable",
      "+30,000 plugins Premium",
      "AntiCheat avanzado",
      "Panel de control premium",
      "Backup cada 6 horas",
      "IP dedicada exclusiva",
      "Mods y plugins premium",
      "Mundo personalizado con seed",
      "Soporte prioritario 24/7",
    ],
  },
];

const ServerPlans: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-20 px-4 bg-[#0a0a0a]" id="planes">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-red-500 text-sm font-bold tracking-widest uppercase">
            Planes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Elegí tu servidor
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Pago único. Sin suscripciones. Todo incluido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                plan.popular
                  ? "bg-white/[0.03] border-red-500/30"
                  : "bg-white/[0.02] border-white/5 hover:border-white/10"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                    <Star className="w-3 h-3" fill="currentColor" />
                    MÁS VENDIDO
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <p className="text-red-400 text-xs font-bold tracking-widest uppercase mb-2">
                  {plan.subtitle}
                </p>
                <h3 className="text-2xl font-black text-white mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-5">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-500 text-sm">pago único</span>
                </div>
              </div>

              <div className="w-full h-px bg-white/5 mb-6" />

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 ${
                        plan.popular ? "text-red-400" : "text-gray-500"
                      }`}
                    />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://api.whatsapp.com/send?phone=595981144534"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  plan.popular
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                Contratar ahora
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <div
          className={`mt-8 text-center transition-all duration-500 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-gray-500 text-sm">
            Los precios incluyen licencia, configuración y soporte.{" "}
            <span className="text-yellow-500">El hosting (VPS) no está incluido.</span>{" "}
            Te ayudo a elegir el mejor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServerPlans;
