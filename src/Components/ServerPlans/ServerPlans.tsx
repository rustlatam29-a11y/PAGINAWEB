import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { Check, ArrowRight, Zap } from "lucide-react";

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
    <section ref={elementRef} className="py-24 bg-[#0a0a0a] border-t border-white/5" id="planes">
      <div className="max-w-screen-xl mx-auto px-8 md:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 mb-6">
            <Zap className="w-4 h-4 text-red-500" />
            <span className="text-red-400 text-xs font-bold tracking-widest uppercase">
              Planes
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Elegí tu servidor
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Pago único. Sin suscripciones. Todo incluido.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div
                className={`relative h-full rounded-3xl p-8 sm:p-10 border transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-b from-red-500/10 to-transparent border-red-500/30"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-red-600 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg shadow-red-500/25">
                      MÁS VENDIDO
                    </div>
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-8">
                  <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${
                    plan.popular ? "text-red-400" : "text-gray-500"
                  }`}>
                    {plan.subtitle}
                  </p>
                  <h3 className="text-3xl font-black text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-6xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-500 text-sm font-medium">USD</span>
                  </div>
                  <p className="text-gray-600 text-xs mt-1">pago único</p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? "bg-red-500/20" : "bg-white/5"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? "text-red-400" : "text-gray-500"}`} />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://api.whatsapp.com/send?phone=595981144534"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-bold text-base transition-all duration-300 ${
                    plan.popular
                      ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/25"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  Contratar ahora
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className={`mt-12 text-center transition-all duration-500 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/5">
            <p className="text-gray-500 text-sm">
              Los precios incluyen licencia, configuración y soporte.{" "}
              <span className="text-yellow-500 font-medium">El hosting (VPS) no está incluido.</span>{" "}
              Te ayudo a elegir el mejor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerPlans;
