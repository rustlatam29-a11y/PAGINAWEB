import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { useLanguage } from "../../Context/LanguageContext";
import { Check, ArrowRight, Zap } from "lucide-react";

const ServerPlans: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t, tObj } = useLanguage();

  const plan2275 = tObj("plans.2275");
  const plan2388 = tObj("plans.2388");

  const plans = [
    {
      name: "Rust 2275",
      subtitle: plan2275.subtitle || "OldRecoil",
      price: "$20",
      description: plan2275.description || "",
      features: Array.isArray(plan2275.features) ? plan2275.features : [],
    },
    {
      name: "Rust 2388",
      subtitle: plan2388.subtitle || "Actualizado",
      price: "$28",
      description: plan2388.description || "",
      popular: true,
      features: Array.isArray(plan2388.features) ? plan2388.features : [],
    },
  ];

  return (
    <section
      ref={elementRef}
      className="py-24 bg-[#0a0a0a] border-t border-white/5"
      id="planes"
      style={{ contain: "layout style" }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-12">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 mb-6">
            <Zap className="w-4 h-4 text-red-500" />
            <span className="text-red-400 text-xs font-bold tracking-widest uppercase">
              {t("plans.label")}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            {t("plans.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t("plans.subtitle")}
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 500ms ease-out ${index * 150}ms, transform 500ms ease-out ${index * 150}ms`,
              }}
            >
              <div
                className={`relative h-full rounded-3xl p-8 sm:p-10 border transition-colors duration-300 hover-lift ${
                  plan.popular
                    ? "bg-gradient-to-b from-red-500/10 to-transparent border-red-500/30"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-red-600 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg shadow-red-500/25">
                      {t("plans.popular")}
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <p
                    className={`text-xs font-bold tracking-widest uppercase mb-3 ${
                      plan.popular ? "text-red-400" : "text-gray-500"
                    }`}
                  >
                    {plan.subtitle}
                  </p>
                  <h3 className="text-3xl font-black text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-6xl font-black text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 text-sm font-medium">
                      USD
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs mt-1">
                    {t("plans.oneTime")}
                  </p>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.popular ? "bg-red-500/20" : "bg-white/5"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.popular ? "text-red-400" : "text-gray-500"
                          }`}
                        />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://api.whatsapp.com/send?phone=595981144534"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-bold text-base transition-colors duration-300 ${
                    plan.popular
                      ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/25"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {t("plans.cta")}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className="mt-12 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition:
              "opacity 500ms ease-out 300ms, transform 500ms ease-out 300ms",
          }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/5">
            <p className="text-gray-500 text-sm">
              {t("plans.note")}{" "}
              <span className="text-yellow-500 font-medium">
                {t("plans.noteHighlight")}
              </span>{" "}
              {t("plans.noteHelp")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerPlans;
