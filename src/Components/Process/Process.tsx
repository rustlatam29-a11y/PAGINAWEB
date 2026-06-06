import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { useLanguage } from "../../Context/LanguageContext";
import { MessageCircle, Settings, Rocket, Headphones } from "lucide-react";

const icons = [MessageCircle, Settings, Rocket, Headphones];

const Process: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t, tList } = useLanguage();
  const steps = tList("process.steps");

  return (
    <section
      ref={elementRef}
      className="py-24 bg-[#0a0a0a] border-t border-white/5"
      id="proceso"
      style={{ contain: "layout style" }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-12">
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
          }}
        >
          <span className="text-red-500 text-sm font-bold tracking-widest uppercase">
            {t("process.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            {t("process.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t("process.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.isArray(steps) &&
            steps.map((step: any, index: number) => {
              const Icon = icons[index] || MessageCircle;
              return (
                <div
                  key={index}
                  className="relative"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 500ms ease-out ${index * 100}ms, transform 500ms ease-out ${index * 100}ms`,
                  }}
                >
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-white/5" />
                  )}

                  <div className="text-center">
                    <div className="text-7xl font-black text-white/[0.02] mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-9 h-9 text-red-500" />
                    </div>

                    <h3 className="text-white font-bold text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Process;
