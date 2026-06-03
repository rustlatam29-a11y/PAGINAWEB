import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Pago único, sin suscripciones",
    description: "Pagás una vez y el servidor es tuyo. Sin cargos mensuales ocultos.",
  },
  {
    title: "Experiencia real en Rust",
    description: "Más de 10,000 horas jugando y administrando servidores. Sé lo que funciona.",
  },
  {
    title: "Plugins de comunidades grandes",
    description: "Desarrollé plugins para RustSpain y Brasa.gg, dos de las comunidades más grandes de LATAM.",
  },
  {
    title: "Soporte directo y rápido",
    description: "WhatsApp directo. Sin tickets, sin colas, sin esperas.",
  },
  {
    title: "Configuración incluida",
    description: "No tenés que configurar nada solo. Me encargo de todo.",
  },
  {
    title: "Backup automático",
    description: "Tus datos se guardan automáticamente. No perdés nada.",
  },
];

const Benefits: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="text-red-500 text-sm font-bold tracking-widest uppercase">
              Por qué elegirme
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-6">
              No soy una empresa.{" "}
              <span className="text-gray-500">Soy alguien que sabe del tema.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Administré servidores de Rust por más de 8 años. Desarrollé plugins
              para las comunidades más grandes de Latinoamérica. No vendo humo,
              vendo resultados.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{benefit.title}</h4>
                    <p className="text-gray-500 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats card */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/10 mx-auto mb-4">
                  <img
                    src="/paraguayraider.png"
                    alt="ParaguayRAIDER"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">ParaguayRAIDER</h3>
                <p className="text-gray-500 text-sm">Fundador de LATAMRUST</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 rounded-xl bg-white/[0.03]">
                  <div className="text-2xl font-black text-red-500">8+</div>
                  <div className="text-gray-500 text-xs">Años en Rust</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/[0.03]">
                  <div className="text-2xl font-black text-red-500">10K+</div>
                  <div className="text-gray-500 text-xs">Horas jugando</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/[0.03]">
                  <div className="text-2xl font-black text-red-500">200+</div>
                  <div className="text-gray-500 text-xs">Servidores armados</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/[0.03]">
                  <div className="text-2xl font-black text-red-500">500+</div>
                  <div className="text-gray-500 text-xs">Clientes satisfechos</div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-center text-gray-400 text-sm italic">
                  "Desarrollador de Plugins para RustSpain y Brasa.gg"
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
