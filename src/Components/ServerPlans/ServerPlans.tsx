import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { useLanguage } from "../../Context/LanguageContext";
import { Check, ArrowRight, Zap, Star } from "lucide-react";

const planNamesEs: Record<string, { name: string; price: string }> = {
  "2275": { name: "Rust 2275", price: "$20" },
  "2388": { name: "Rust 2388", price: "$30" },
};

const ServerPlans: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t, tObj } = useLanguage();

  const plan2275 = tObj("plans.2275");
  const plan2388 = tObj("plans.2388");

  const plans = [
    {
      key: "2275",
      name: planNamesEs["2275"].name,
      price: planNamesEs["2275"].price,
      subtitle: (plan2275.subtitle as string) || "OldRecoil",
      description: (plan2275.description as string) || "",
      features: (Array.isArray(plan2275.features) ? plan2275.features : []) as string[],
      popular: false,
    },
    {
      key: "2388",
      name: planNamesEs["2388"].name,
      price: planNamesEs["2388"].price,
      subtitle: (plan2388.subtitle as string) || "Atualizado",
      description: (plan2388.description as string) || "",
      features: (Array.isArray(plan2388.features) ? plan2388.features : []) as string[],
      popular: true,
    },
  ];

  return (
    <section
      ref={elementRef}
      id="planes"
      className="relative py-24 bg-[#050505] border-t border-white/5 rp-noise"
      style={{ contain: "layout style" }}
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div
          className="text-center mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
          }}
        >
          <span className="rp-mono text-red-500 text-xs font-bold tracking-[0.22em] uppercase rp-divider">
            {t("plans.label")}
          </span>
          <h2 className="rp-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mt-4 mb-4 rp-title-glow">
            {t("plans.title")}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto rp-ui">
            {t("plans.subtitle")}
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.key}
              className="relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 500ms ease-out ${index * 150}ms, transform 500ms ease-out ${index * 150}ms`,
              }}
            >
              {/* Badge popular */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="rp-hud-sm bg-gradient-to-r from-red-600 to-red-500 text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest shadow-lg shadow-red-500/30 flex items-center gap-1.5">
                    <Star className="w-3 h-3" />
                    {t("plans.popular")}
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`rp-card rp-hud rp-corners h-full p-7 sm:p-9 mt-3 ${
                  plan.popular ? "border-red-500/30 bg-gradient-to-b from-red-500/8 to-transparent" : ""
                }`}
                style={
                  plan.popular
                    ? { boxShadow: "0 0 30px -8px rgba(239, 68, 68, 0.2)" }
                    : undefined
                }
              >
                {/* Header del plan */}
                <div className="text-center mb-7">
                  <span
                    className={`rp-mono text-[10px] font-bold tracking-[0.22em] uppercase block mb-3 ${
                      plan.popular ? "text-red-400" : "text-gray-500"
                    }`}
                  >
                    {plan.subtitle}
                  </span>
                  <h3 className="rp-display text-3xl font-bold text-white mb-2 tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-xs mb-5 rp-ui">{plan.description}</p>

                  {/* Precio */}
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="rp-display text-6xl font-bold text-white leading-none">
                      {plan.price}
                    </span>
                    <span className="rp-mono text-gray-500 text-xs font-bold tracking-widest uppercase">
                      USD
                    </span>
                  </div>
                  <p className="rp-mono text-gray-600 text-[10px] mt-1 tracking-widest uppercase">
                    {t("plans.oneTime")}
                  </p>
                </div>

                {/* Divisor */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-7" />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rp-hud-sm flex items-center justify-center flex-shrink-0 ${
                          plan.popular
                            ? "bg-red-500/20 border border-red-500/30"
                            : "bg-white/5 border border-white/10"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${plan.popular ? "text-red-400" : "text-gray-400"}`}
                        />
                      </div>
                      <span className="text-gray-300 text-sm rp-ui">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.link/j4c0au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn flex items-center justify-center gap-3 w-full py-4 rp-hud font-bold text-sm uppercase tracking-wider rp-ui transition-all duration-300 ${
                    plan.popular
                      ? "rp-btn-primary text-white"
                      : "rp-btn-secondary text-white"
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
          className="text-center mt-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 500ms ease-out 300ms, transform 500ms ease-out 300ms",
          }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rp-hud-sm bg-white/[0.03] border border-white/8 max-w-2xl">
            <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0" />
            <p className="text-gray-500 text-xs sm:text-sm rp-ui text-left">
              {t("plans.note")}{" "}
              <span className="text-yellow-500 font-semibold">
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