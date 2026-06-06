import React from "react";
import { useLanguage } from "../../Context/LanguageContext";
import { Shield, Check, Zap, Eye } from "lucide-react";

const ArgosEyesPartner: React.FC = () => {
  const { t, tList } = useLanguage();
  const features = tList("partner.features");

  return (
    <section
      className="py-16 bg-[#0a0a0a] border-t border-b border-white/5"
      style={{ contain: "layout style" }}
    >
      <div className="max-w-4xl mx-auto px-8 md:px-12">
        <div className="relative rounded-2xl border border-red-500/10 bg-gradient-to-b from-red-500/[0.04] to-transparent p-8 sm:p-10 hover-lift">
          {/* Glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[120px] bg-red-600/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative flex flex-col items-center text-center gap-8">
            {/* Logo + Badge */}
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur-xl" />
                <img
                  src="/splash.png"
                  alt="ArgosEyes AntiCheat"
                  width="100"
                  height="100"
                  className="relative w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="text-red-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                  {t("partner.badge")}
                </span>
                <h3 className="text-white font-black text-xl sm:text-2xl leading-tight">
                  {t("partner.title")}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
              {t("partner.desc")}
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {features.map((feature: string, i: number) => {
                const icons = [Shield, Eye, Zap, Check];
                const Icon = icons[i] || Shield;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-gray-400 text-xs font-medium"
                  >
                    <Icon className="w-3.5 h-3.5 text-red-500" />
                    <span>{feature}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="https://dsc.gg/argoseye"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-500 text-white font-bold text-sm px-8 py-3 rounded-lg transition-colors duration-200"
            >
              {t("partner.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArgosEyesPartner;
