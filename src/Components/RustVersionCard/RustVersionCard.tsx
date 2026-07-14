import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { useLanguage } from "../../Context/LanguageContext";
import { Check, Crosshair, Cpu, Trophy, ShieldCheck, Terminal } from "lucide-react";

const reasonIcons = [Crosshair, Cpu, Trophy, ShieldCheck];

const RustVersionCard: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t, tList } = useLanguage();

  const specs = tList("version2275.specs") as { key: string; value: string }[];
  const reasons = tList("version2275.reasons") as { title: string; desc: string }[];

  return (
    <section
      ref={elementRef}
      id="version"
      className="relative py-24 bg-[#050505] border-t border-white/5 rp-noise"
      style={{ contain: "layout style" }}
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/6 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div
          className="text-center mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
          }}
        >
          <span className="rp-mono text-red-500 text-xs font-bold tracking-[0.22em] uppercase rp-divider">
            {t("version2275.label")}
          </span>
          <h2 className="rp-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mt-4 mb-4 rp-title-glow">
            {t("version2275.title")}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto rp-ui">
            {t("version2275.subtitle")}
          </p>
        </div>

        {/* Descripción */}
        <p
          className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-14 rp-ui"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 500ms ease-out 100ms",
          }}
        >
          {t("version2275.desc")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Ficha técnica — terminal aesthetic */}
          <div
            className="lg:col-span-5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 600ms ease-out 150ms, transform 600ms ease-out 150ms",
            }}
          >
            <div className="rp-card rp-hud overflow-hidden bg-black/50">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-red-500" />
                  <span className="rp-mono text-gray-400 text-xs tracking-[0.18em] uppercase">
                    rust2275.spec
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                </div>
              </div>

              <div className="p-7">
                {/* Pionero badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rp-hud-sm bg-red-500/10 border border-red-500/30 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="rp-mono text-red-400 text-[10px] font-bold tracking-[0.18em] uppercase">
                    {t("version2275.badge")}
                  </span>
                </div>

                {/* Spec rows */}
                <div>
                  {specs.map((spec: { key: string; value: string }, i: number) => (
                    <div key={i} className="rp-spec-row">
                      <span className="rp-spec-key">{spec.key}</span>
                      <span className="rp-spec-val">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Razones */}
          <div
            className="lg:col-span-7"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 600ms ease-out 250ms, transform 600ms ease-out 250ms",
            }}
          >
            <h3 className="rp-ui text-white font-bold text-base mb-5 flex items-center gap-2">
              <Check className="w-5 h-5 text-red-500" />
              {t("version2275.reasonsTitle")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason: { title: string; desc: string }, i: number) => {
                const Icon = reasonIcons[i] || Check;
                return (
                  <div
                    key={i}
                    className="rp-card rp-hud p-5"
                    style={{
                      transitionDelay: isVisible ? `${250 + i * 80}ms` : "0ms",
                    }}
                  >
                    <div className="w-10 h-10 rp-hud-sm bg-red-500/10 border border-red-500/25 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <h4 className="rp-display text-white font-bold text-sm mb-2 tracking-tight">
                      {reason.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed rp-ui">
                      {reason.desc}
                    </p>
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

export default RustVersionCard;