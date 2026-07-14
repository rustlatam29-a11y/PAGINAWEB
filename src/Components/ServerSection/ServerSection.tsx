import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { useLanguage } from "../../Context/LanguageContext";
import { Server, Crosshair, Shield, MapPin, ArrowRight } from "lucide-react";

const featureIcons = [Crosshair, Shield, MapPin];

const ServerSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t, tList } = useLanguage();

  const stats = tList("server.stats") as { value: string; label: string }[];
  const features = tList("server.features") as { title: string; desc: string }[];

  return (
    <section
      ref={elementRef}
      id="servidor"
      className="relative py-24 bg-[#0a0a0a] border-t border-white/5 rp-noise"
      style={{ contain: "layout style" }}
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/4 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Header + imagen a la derecha (como siempre estuvo) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
          }}
        >
          {/* Texto */}
          <div className="lg:col-span-8 text-center lg:text-left">
            <span className="rp-mono text-red-500 text-xs font-bold tracking-[0.22em] uppercase rp-divider">
              {t("server.label")}
            </span>
            <h2 className="rp-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mt-4 mb-4 flex items-center justify-center lg:justify-start gap-4 rp-title-glow">
              <Server className="w-10 h-10 sm:w-14 sm:h-14 text-red-500 hidden sm:block" />
              {t("server.title")}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 rp-ui">
              {t("server.desc")}
            </p>
          </div>

          {/* Imagen pequeña a la derecha */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative max-w-[220px]">
              <img
                src="/decoracion-pagina.webp"
                alt="Rust Pirata 2275 OldRecoil — RUST OLD SCHOOL"
                width="220"
                height="124"
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Stats grid — cards HUD */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 600ms ease-out 100ms, transform 600ms ease-out 100ms",
          }}
        >
          {stats.map((stat: { value: string; label: string }, i: number) => (
            <div key={i} className="rp-card rp-hud rp-corners text-center p-6">
              <div className="rp-display text-3xl sm:text-4xl font-bold text-white leading-none mb-2">
                {stat.value}
              </div>
              <div className="rp-mono text-[9px] font-bold tracking-[0.22em] text-gray-500 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {features.map((feature: { title: string; desc: string }, i: number) => {
            const Icon = featureIcons[i] || Server;
            return (
              <div
                key={i}
                className="rp-card rp-hud p-6"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 500ms ease-out ${200 + i * 80}ms, transform 500ms ease-out ${200 + i * 80}ms, border-color 300ms, box-shadow 300ms`,
                }}
              >
                <div className="w-12 h-12 rp-hud-sm bg-red-500/10 border border-red-500/25 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="rp-display text-white font-bold text-base mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed rp-ui">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 600ms ease-out 600ms",
          }}
        >
          <a
            href="https://discord.gg/7Vz4YBamFG"
            target="_blank"
            rel="noopener noreferrer"
            className="rp-btn-primary rp-hud group inline-flex items-center gap-3 text-white font-bold px-10 py-5 text-base uppercase tracking-wide rp-ui"
          >
            <span>{t("server.cta")}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServerSection;