import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { useLanguage } from "../../Context/LanguageContext";
import { CreditCard, ExternalLink } from "lucide-react";

const PaymentMethods: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t, tList } = useLanguage();

  const title = t("payment.title");
  const subtitle = t("payment.subtitle");
  const methods = tList("payment.methods");
  const note = t("payment.note");
  const highlight = t("payment.highlight");

  const getBadgeStyle = (badge: string) => {
    if (badge === "Principal") return "bg-green-500/15 text-green-400 border border-green-500/30";
    return "bg-red-500/10 text-red-400 border border-red-500/20";
  };

  return (
    <section
      ref={elementRef}
      className="py-24 bg-[#0a0a0a] border-t border-white/5"
      id="pagos"
      style={{ contain: "layout style" }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-12">
        {/* Header */}
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 mb-6">
            <CreditCard className="w-4 h-4 text-red-500" />
            <span className="text-red-400 text-xs font-bold tracking-widest uppercase">
              {t("payment.label")}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* PIX only highlight */}
        <div
          className="mb-10 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 500ms ease-out 150ms",
          }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-red-500/20 bg-red-500/5">
            <CreditCard className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-bold tracking-wide uppercase">
              {highlight}
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {methods.map((method: any, index: number) => (
            <div
              key={index}
              className="relative group border border-white/10 bg-white/[0.02] rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover-lift"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 500ms ease-out ${index * 100}ms, transform 500ms ease-out ${index * 100}ms`,
              }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${getBadgeStyle(method.badge)}`}>
                  {method.badge}
                </span>
              </div>

              {/* Logo */}
              <div className="mb-5">
                {method.icon === "pix" ? (
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 font-black text-lg">PX</span>
                  </div>
                ) : method.icon === "belo" ? (
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 font-black text-lg">Be</span>
                  </div>
                ) : method.icon === "mercadopago" ? (
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 font-black text-lg">MP</span>
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <span className="text-orange-400 font-black text-lg">AP</span>
                  </div>
                )}
              </div>

              {/* Name */}
              <h3 className="text-white font-bold text-xl mb-2">{method.name}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {method.desc}
              </p>

              {/* Link */}
              {method.link && (
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-lg transition-all duration-200"
                >
                  <span>{method.linkText}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 600ms ease-out 400ms",
          }}
        >
          <div className="inline-block max-w-2xl border border-white/10 bg-white/[0.02] rounded-xl px-6 py-4">
            <p className="text-gray-400 text-sm leading-relaxed">
              {note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
