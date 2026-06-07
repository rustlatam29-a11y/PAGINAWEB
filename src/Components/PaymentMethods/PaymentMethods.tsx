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

  const iconColors: Record<string, string> = {
    pix: "bg-green-500/15 border-green-500/30 text-green-400",
    mercadopago: "bg-blue-500/15 border-blue-500/30 text-blue-400",
    paypal: "bg-yellow-500/15 border-yellow-500/30 text-yellow-400",
    belo: "bg-purple-500/15 border-purple-500/30 text-purple-400",
    astropay: "bg-orange-500/15 border-orange-500/30 text-orange-400",
  };

  const iconLabels: Record<string, string> = {
    pix: "PX",
    mercadopago: "MP",
    paypal: "PP",
    belo: "Be",
    astropay: "AP",
  };

  return (
    <section
      ref={elementRef}
      className="py-16 bg-[#0a0a0a] border-t border-white/5"
      id="pagos"
      style={{ contain: "layout style" }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-12">
        {/* Header */}
        <div
          className="text-center mb-8"
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3">
            {title}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-6">
            {subtitle}
          </p>
        </div>

        {/* Inline methods row */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 500ms ease-out 150ms",
          }}
        >
          {methods.map((method: any, index: number) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.02] rounded-xl px-4 py-3 hover:border-white/20 transition-all duration-200"
            >
              <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${iconColors[method.icon] || "bg-white/10 border-white/20 text-white"}`}>
                <span className="font-black text-xs">{iconLabels[method.icon] || "?"}</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-sm">{method.name}</span>
                  {method.badge === "Principal" && (
                    <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/30">
                      Principal
                    </span>
                  )}
                </div>
                {method.link && (
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-bold text-white/40 hover:text-white/80 transition-colors duration-200 mt-0.5"
                  >
                    <span>{method.linkText}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 600ms ease-out 300ms",
          }}
        >
          <p className="text-gray-500 text-xs max-w-2xl mx-auto leading-relaxed">
            {note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
