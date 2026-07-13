import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { useLanguage } from "../../Context/LanguageContext";
import { Check } from "lucide-react";

const Benefits: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t, tList } = useLanguage();
  const benefits = tList("benefits.list") as { title: string; desc: string }[];

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
              transform: isVisible ? "translateX(0)" : "translateX(-16px)",
              transition: "opacity 500ms ease-out, transform 500ms ease-out",
            }}
          >
            <span className="text-red-500 text-sm font-bold tracking-widest uppercase">
              {t("benefits.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-6">
              {t("benefits.title")}{" "}
              <span className="text-gray-500">
                {t("benefits.titleHighlight")}
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t("benefits.description")}
            </p>

            <div className="space-y-4">
              {Array.isArray(benefits) &&
                benefits.map((benefit: { title: string; desc: string }, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateX(0)" : "translateX(-8px)",
                      transition: `opacity 300ms ease-out ${index * 50}ms, transform 300ms ease-out ${index * 50}ms`,
                    }}
                  >
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(16px)",
              transition:
                "opacity 500ms ease-out 200ms, transform 500ms ease-out 200ms",
            }}
          >
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 sm:p-10 hover-lift">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/10 mx-auto mb-4">
                  <img
                    src="/loader-bg.webp"
                    alt="ParaguayRAIDER"
                    width="80"
                    height="80"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t("benefits.profileName")}
                </h3>
                <p className="text-gray-500 text-sm">
                  {t("benefits.profileRole")}
                </p>
              </div>

              <div className="border-t border-white/5 pt-6">
                <p className="text-center text-gray-400 text-sm italic">
                  "Experiencia en grandes servidores del ecosistema Rust"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
