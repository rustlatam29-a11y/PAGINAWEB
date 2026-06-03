import React, { useState } from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Qué incluye el servidor Rust pirata?",
    answer: "Incluye la licencia del servidor, configuración completa, AntiCheat, panel de control, backups automáticos y soporte 24/7. El hosting (VPS) no está incluido, pero te ayudo a elegir el mejor.",
  },
  {
    question: "¿Cuál es la diferencia entre Rust 2275 y 2388?",
    answer: "Rust 2275 es la versión clásica con OldRecoil, la favorita de la comunidad. Rust 2388 es la última versión actualizada con todos los gráficos y mejoras oficiales. Ambas son excelentes, depende de tu preferencia.",
  },
  {
    question: "¿El pago es mensual o único?",
    answer: "Es un pago único. Pagás una vez y el servidor es tuyo. No hay cargos mensuales ni suscripciones ocultas.",
  },
  {
    question: "¿Necesito un VPS por separado?",
    answer: "Sí, el hosting (VPS) no está incluido en el precio. Pero te ayudo a elegir el mejor VPS para tu servidor y te guío en la configuración.",
  },
  {
    question: "¿Cuánto tarda en estar listo mi servidor?",
    answer: "Generalmente menos de 24 horas. Depende de la complejidad de la configuración y los plugins que necesites.",
  },
  {
    question: "¿Puedo elegir mi propio seed y mundo?",
    answer: "Sí, podés elegir el seed que quieras. Configuro el mundo exacto que necesitás.",
  },
  {
    question: "¿Qué pasa si tengo un problema después?",
    answer: "Me contactás por WhatsApp y te ayudo. Soporte 24/7, sin tickets ni colas.",
  },
  {
    question: "¿Hacés plugins personalizados?",
    answer: "Sí, desarrollo plugins a medida para tu servidor. Tengo experiencia en las comunidades más grandes del ecosistema Rust.",
  },
];

const FAQ: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={elementRef} className="py-20 px-4 bg-[#0a0a0a]" id="faq">
      <div className="max-w-3xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-red-500 text-sm font-bold tracking-widest uppercase">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
            Dudas comunes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-white/5 rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? "bg-white/[0.03] border-red-500/20" : "bg-white/[0.01]"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white font-semibold text-sm pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
