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
      className="py-16 bg-[#0a0a0a] border-t border-white/5"
      id="faq"
      style={{ contain: "layout style" }}
    >
      <div className="max-w-4xl mx-auto px-8 md:px-12">
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
          }}
        >
          <span className="text-red-500 text-sm font-bold tracking-widest uppercase">
            {t("faq.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
            {t("faq.title")}
          </h2>
        </div>

        <div className="space-y-3">
          {Array.isArray(faqs) &&
            faqs.map((faq: { q: string; a: string }, index: number) => (
              <div
                key={index}
                className={`border border-white/5 rounded-xl overflow-hidden transition-colors duration-300 hover-lift ${
                  openIndex === index
                    ? "bg-white/[0.03] border-red-500/20"
                    : "bg-white/[0.01]"
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(8px)",
                  transition: `opacity 500ms ease-out ${index * 40}ms, transform 500ms ease-out ${index * 40}ms, background-color 300ms ease-out, border-color 300ms ease-out`,
                }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-white font-semibold text-base pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
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
                    <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
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
