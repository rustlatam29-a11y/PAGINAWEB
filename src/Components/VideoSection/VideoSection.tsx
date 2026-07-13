import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { useLanguage } from "../../Context/LanguageContext";
import { Play } from "lucide-react";

const VideoSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section
      ref={elementRef}
      className="py-16 bg-[#0a0a0a] border-t border-white/5"
      id="servicios"
      style={{ contain: "layout style" }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-12">
        <div
          className="text-center mb-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
          }}
        >
          <span className="text-red-500 text-xs font-bold tracking-widest uppercase">
            {t("video.label")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
            {t("video.title")}
          </h2>
        </div>

        <div
          className="max-w-3xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 600ms ease-out 100ms, transform 600ms ease-out 100ms",
          }}
        >
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-red-500/5">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/ef1xtDhP2Dk"
                title="Tutorial Rust Pirata LATAM"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6 text-gray-500 text-sm">
            <Play className="w-4 h-4 text-red-500" />
            <span>{t("video.description")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
