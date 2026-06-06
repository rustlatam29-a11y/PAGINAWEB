import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { useLanguage } from "../../Context/LanguageContext";
import { Server, Code, Shield, Zap } from "lucide-react";

const iconMap = [Server, Code, Shield, Zap];

const VideoSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t, tList } = useLanguage();

  const features = tList("video.features");

  return (
    <section
      ref={elementRef}
      className="py-24 bg-[#0a0a0a] border-t border-white/5"
      id="servicios"
      style={{ contain: "layout style" }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 500ms ease-out, transform 500ms ease-out",
            }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/LGcECozNXEw"
                  title="Rust Trailer Oficial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(32px)",
              transition:
                "opacity 500ms ease-out 200ms, transform 500ms ease-out 200ms",
            }}
          >
            <span className="text-red-500 text-sm font-bold tracking-widest uppercase">
              {t("video.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-6">
              Tu servidor Rust listo en minutos,{" "}
              <span className="text-red-500">
                {t("video.titleHighlight")}
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t("video.description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {Array.isArray(features) &&
                features.map((feature: any, index: number) => {
                  const Icon = iconMap[index] || Server;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover-lift"
                    >
                      <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm">
                          {feature.title}
                        </h3>
                        <p className="text-gray-500 text-xs mt-1">
                          {feature.desc}
                        </p>
                      </div>
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

export default VideoSection;
