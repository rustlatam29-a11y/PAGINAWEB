import React, { useState, useEffect, useCallback } from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { useLanguage } from "../../Context/LanguageContext";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t, tList } = useLanguage();
  const testimonials = tList("testimonials.list");
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  if (!testimonials.length) return null;

  const t_item = testimonials[current];

  return (
    <section
      ref={elementRef}
      className="py-24 bg-[#0a0a0a] border-t border-white/5"
      id="testimonios"
      style={{ contain: "layout style" }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-12">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
          }}
        >
          <span className="text-red-500 text-sm font-bold tracking-widest uppercase">
            {t("testimonials.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-2xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 500ms ease-out 200ms, transform 500ms ease-out 200ms",
          }}
        >
          {/* Quote icon */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <Quote className="w-5 h-5 text-red-500" />
            </div>
          </div>

          {/* Testimonial card */}
          <div className="relative bg-white/[0.02] border border-white/5 rounded-2xl p-8 sm:p-10 text-center min-h-[260px] flex flex-col justify-center">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-red-500"
                  fill="currentColor"
                />
              ))}
            </div>

            {/* Text with crossfade */}
            <div className="testimonial-slide" key={current}>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 italic">
                &ldquo;{t_item.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {t_item.location?.charAt(0) || "?"}
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">
                    {t_item.location?.split(",")[0] || "Anónimo"}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {t_item.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-500/30 transition-colors duration-200"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-500/30 transition-colors duration-200"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_: any, i: number) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-red-500 w-6"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
