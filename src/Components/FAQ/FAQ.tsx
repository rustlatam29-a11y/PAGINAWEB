import React, { useState } from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { useLanguage } from "../../Context/LanguageContext";
import { ChevronDown } from "lucide-react";

const FAQ: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t, tList } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = tList("faq.list") as { q: string; a: string }[];

  return (
    <section
      ref={elementRef}
      id="faq"
      className="relative py-24 bg-[#050505] border-t border-white/5 rp-noise"
      style={{ contain: "layout style" }}
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
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
            {t("faq.label")}
          </span>
          <h2 className="rp-display text-3xl sm:text-4xl lg:text-6xl font-bold text-white mt-4 mb-4 rp-title-glow">
            {t("faq.title")}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto rp-ui">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {Array.isArray(faqs) &&
            faqs.map((faq: { q: string; a: string }, index: number) => (
              <div
                key={index}
                className={`rp-hud overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "rp-card border-red-500/25"
                    : "rp-card"
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(8px)",
                  transition: `opacity 500ms ease-out ${index * 40}ms, transform 500ms ease-out ${index * 40}ms, border-color 300ms ease-out, box-shadow 300ms ease-out`,
                }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="rp-ui text-white font-semibold text-sm sm:text-base pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-red-500/80 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className="accordion-content"
                  data-open={openIndex === index ? "true" : "false"}
                >
                  <div>
                    <p className="px-5 sm:px-6 pb-6 text-gray-400 text-sm leading-relaxed rp-ui">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;