import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { useLanguage } from "../../Context/LanguageContext";
import {
  ArrowRight,
  Search,
  Gamepad2,
  MapPin,
  Zap,
  Download,
  Play,
} from "lucide-react";

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  MapPin,
  Zap,
  Gamepad2,
};

const LatamrustBanner: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t, tList, tObj } = useLanguage();

  const steps = tList("banner.steps") as string[];
  const badges = tObj("banner.badges");
  const badgesArr = Array.isArray(badges) ? badges : [];

  return (
    <section
      ref={elementRef}
      className="relative flex items-center bg-[#0a0a0a] overflow-hidden border-t border-white/5 rp-noise rp-scanline min-h-[88vh]"
      style={{ contain: "layout style" }}
    >
      {/* Fondo: grid + glow + viñeta + imagen temática overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid sutil */}
        <div className="absolute inset-0 opacity-[0.05] rs-grid-bg" />

        {/* Imagen temática fondo con brillo */}
        <div className="absolute inset-0 opacity-[0.18] bg-cover bg-center"
          style={{ backgroundImage: "url(/decoracion-pagina.webp)" }}
        />
        {/* Brillo trasero tipo flash */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-400/15 to-red-500/10 blur-3xl" />
        {/* Overlay degradado para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40" />

        {/* Glows rojos ambientales */}
        <div className="absolute top-0 right-0 w-[560px] h-[820px] bg-red-600/12 rounded-full blur-[200px]" />
        <div className="absolute bottom-[-220px] left-[-120px] w-[520px] h-[520px] bg-red-600/8 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-red-500/6 rounded-full blur-[120px]" />

        {/* Viñeta */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* Línea HUD superior */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        {/* Línea HUD inferior */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Top bar — Badge verde con más presencia */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-16px)",
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
          }}
        >
          <div className="rp-status-badge">
            <div className="rp-status-dot">
              <span />
            </div>
            <span className="rp-status-text">100% GRATIS</span>
            <div className="rp-status-sep" />
            <span className="rp-status-text">SIN STEAM</span>
          </div>
        </div>

        {/* Main grid: asimétrico 7/5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT — Titular + info + CTAs */}
          <div
            className="lg:col-span-7"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 700ms ease-out 100ms, transform 700ms ease-out 100ms",
            }}
          >
            {/* Logo + etiqueta servidor */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/30 blur-xl rounded-full" />
                <img
                  src="/rust-old-school-logo.webp"
                  alt="RUST OLD SCHOOL"
                  width="96"
                  height="96"
                  className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-px bg-gradient-to-b from-transparent via-red-500/40 to-transparent" />
                <div>
                  <span className="rp-mono text-red-500 text-[11px] font-bold tracking-[0.28em] uppercase block mb-1">
                    {t("brand.server")}
                  </span>
                  <span className="rp-mono text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase block">
                    2275 · OldRecoil
                  </span>
                </div>
              </div>
            </div>

            {/* TÍTULO — punto focal indiscutible */}
            <h1 className="rp-display text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold text-white leading-[0.88] tracking-tight mb-5 rp-title-stroke">
              RUST
              <br />
              <span className="text-red-500 rp-title-glow">PIRATA</span>
            </h1>

            {/* GIF del servidor — visible, bien posicionado */}
            <div className="relative mb-7 max-w-md">
              <div className="absolute inset-0 bg-red-600/10 rounded-lg blur-2xl pointer-events-none" />
              <img
                src="/rust-hero.gif"
                alt="Rust Pirata 2275 OldRecoil gameplay"
                className="relative w-full h-auto rounded-lg border border-white/8 rp-hud-sm"
                loading="eager"
                width="468"
                height="60"
                fetchPriority="high"
                decoding="async"
              />
            </div>

            {/* Subtítulo + descripción */}
            <p className="text-lg sm:text-xl text-gray-200 font-semibold mb-3 max-w-xl rp-ui">
              {t("banner.subtitle")}
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-9 max-w-xl rp-ui">
              {t("banner.desc")}
            </p>

            {/* Badges HUD */}
            <div className="flex flex-wrap gap-2 mb-9">
              {badgesArr.map((item: { icon: string; text: string }, i: number) => {
                const Icon = iconMap[item.icon] || Gamepad2;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1.5 rp-hud-sm bg-white/[0.04] border border-white/8 text-gray-300 text-xs font-medium backdrop-blur-sm"
                  >
                    <Icon className="w-3.5 h-3.5 text-red-500" />
                    <span className="rp-ui">{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTAs premium */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://gofile.io/d/RagZSX"
                target="_blank"
                rel="noopener noreferrer"
                className="rp-btn-primary rp-hud group inline-flex items-center gap-3 text-white font-bold px-9 py-5 text-base sm:text-lg uppercase tracking-wider rp-ui"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>{t("banner.cta")}</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="https://discord.gg/7Vz4YBamFG"
                target="_blank"
                rel="noopener noreferrer"
                className="rp-btn-secondary rp-hud inline-flex items-center gap-3 text-white font-bold px-9 py-5 text-base sm:text-lg rp-ui"
              >
                <Gamepad2 className="w-5 h-5" />
                <span>{t("banner.discord")}</span>
              </a>
            </div>
          </div>

          {/* RIGHT — Panel HUD: pasos + tutorial integrado */}
          <div
            className="lg:col-span-5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 700ms ease-out 200ms, transform 700ms ease-out 200ms",
            }}
          >
            {/* Panel contenedor unificado HUD */}
            <div className="rp-hud rp-corners bg-gradient-to-br from-black/60 to-black/40 border border-red-500/15 backdrop-blur-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
              {/* Header del panel */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-red-500/15 bg-red-500/5">
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-red-500" />
                  <span className="rp-mono text-red-500 text-[10px] font-bold tracking-[0.22em] uppercase">
                    {t("banner.howTo")}
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500/50" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Pasos — con iconografía angular */}
              <div className="p-5 pb-4">
                <div className="space-y-3">
                  {steps.map((step: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 group transition-all duration-200"
                    >
                      <div className="relative flex-shrink-0">
                        {/* Hexágono angular */}
                        <div className="w-9 h-9 rp-hud-sm bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/30 flex items-center justify-center transition-all duration-200 group-hover:from-red-500/40 group-hover:to-red-500/10 group-hover:border-red-500/60 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                          <span className="rp-mono text-red-400 text-[13px] font-bold">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                      <span className="text-gray-200 text-sm rp-ui leading-snug pt-1.5 group-hover:text-white transition-colors">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divisor con línea roja */}
              <div className="relative h-px mx-5 bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

              {/* Tutorial video integrado al panel */}
              <div className="relative bg-black">
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/ef1xtDhP2Dk"
                    title={t("videos.tutorialTitle")}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                {/* Overlay label inferior */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 px-4 py-2 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <span className="flex items-center gap-1.5">
                    <Play className="w-3 h-3 text-red-500" />
                    <span className="rp-mono text-[10px] tracking-[0.2em] uppercase text-gray-300">
                      {t("videos.tutorialLabel")}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatamrustBanner;