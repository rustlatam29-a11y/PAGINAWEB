import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { useLanguage } from "../../Context/LanguageContext";
import { ArrowRight, Search, Gamepad2, MapPin, Zap, Globe } from "lucide-react";

const iconMap: Record<string, React.FC<any>> = { MapPin, Zap, Gamepad2 };

const LatamrustBanner: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t, tList, tObj, language } = useLanguage();

  const badge = t("banner.badge");
  const title = t("banner.title");
  const subtitle = t("banner.subtitle");
  const desc = t("banner.desc");
  const howTo = t("banner.howTo");
  const steps = tList("banner.steps");
  const cta = t("banner.cta");
  const stats = tObj("banner.stats");
  const badges = tObj("banner.badges");

  const statsArr = Array.isArray(stats) ? stats : [];
  const badgesArr = Array.isArray(badges) ? badges : [];

  return (
    <section
      ref={elementRef}
      className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden border-t border-white/5"
      style={{ contain: "layout style" }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none rs-grid-bg" />

      {/* Red glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[800px] bg-red-600/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-8 md:px-12 py-24 md:py-32">
        {/* Top bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-16px)",
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
          }}
        >
          <div className="inline-flex items-center gap-2 border border-red-500/20 bg-red-500/5 px-4 py-2 rounded-full float-badge">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-xs font-bold tracking-widest uppercase">
              {badge}
            </span>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div
            className="lg:col-span-7"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition:
                "opacity 700ms ease-out 100ms, transform 700ms ease-out 100ms",
            }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6">
              {title}
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 font-semibold mb-4">
              {subtitle}
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
              {desc}
            </p>

            {/* Stats */}
            <div className="flex gap-10 sm:gap-14 mb-10">
              {statsArr.map((stat: any, i: number) => (
                <div key={i} className="text-center">
                  <div className="text-4xl sm:text-5xl font-black text-white leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-10">
              {badgesArr.map((item: any, i: number) => {
                const Icon = iconMap[item.icon] || Gamepad2;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-gray-400 text-xs font-medium"
                  >
                    <Icon className="w-3.5 h-3.5 text-red-500" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="https://discord.gg/7Vz4YBamFG"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold px-10 py-5 rounded-xl text-lg transition-transform duration-300 hover:scale-[1.02] shadow-lg shadow-red-600/20"
            >
              <Gamepad2 className="w-5 h-5" />
              <span>{cta}</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right — How to join */}
          <div
            className="lg:col-span-5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition:
                "opacity 700ms ease-out 200ms, transform 700ms ease-out 200ms",
            }}
          >
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
              <h3 className="text-red-500 text-xs font-bold tracking-[0.2em] uppercase mb-8 flex items-center gap-2">
                <Search className="w-4 h-4" />
                {howTo}
              </h3>
              <div className="space-y-5">
                {steps.map((step: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-red-500/20">
                      <span className="text-red-500 text-sm font-black">
                        {i + 1}
                      </span>
                    </div>
                    <span className="text-gray-300 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatamrustBanner;
