import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { useLanguage } from "../../Context/LanguageContext";
import { Play, Film } from "lucide-react";

const VideosSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section
      ref={elementRef}
      id="videos"
      className="relative py-24 bg-[#0a0a0a] border-t border-white/5 rp-noise"
      style={{ contain: "layout style" }}
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-red-600/6 rounded-full blur-[160px] pointer-events-none" />

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
            {t("videos.label")}
          </span>
          <h2 className="rp-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mt-4 mb-4 rp-title-glow">
            {t("videos.title")}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto rp-ui">
            {t("videos.subtitle")}
          </p>
        </div>

        {/* Trailer destacado */}
        <div
          className="max-w-4xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 600ms ease-out 150ms, transform 600ms ease-out 150ms",
          }}
        >
          <div className="rp-card rp-hud rp-corners overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5 bg-black/40">
              <div className="w-9 h-9 rp-hud-sm bg-red-500/10 border border-red-500/25 flex items-center justify-center">
                <Film className="w-4 h-4 text-red-500" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="rp-mono text-red-500 text-[10px] font-bold tracking-[0.22em] uppercase block">
                  {t("videos.trailerLabel")}
                </span>
                <h3 className="rp-display text-white font-bold text-lg mt-0.5 tracking-tight">
                  {t("videos.trailerTitle")}
                </h3>
              </div>
            </div>

            {/* Embed */}
            <div className="relative pb-[56.25%] h-0 bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/JXWgp9BDhgs"
                title={t("videos.trailerTitle")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Descripción */}
            <p className="px-6 py-4 text-gray-400 text-xs leading-relaxed rp-ui">
              {t("videos.trailerDesc")}
            </p>
          </div>
        </div>

        {/* Link al canal */}
        <div
          className="text-center mt-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 600ms ease-out 500ms",
          }}
        >
          <a
            href="https://www.youtube.com/@ParaguayRAIDER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-red-500 text-xs font-bold tracking-[0.22em] uppercase transition-colors rp-mono"
          >
            <Play className="w-4 h-4" />
            @ParaguayRAIDER · YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;