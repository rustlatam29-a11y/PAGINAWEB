import React, { useState, useEffect, useRef } from "react";
import { Star, Check, ArrowRight } from "lucide-react";

interface RustPlan {
  name: string;
  version: string;
  subtitle: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

const rustPlans: RustPlan[] = [
  {
    name: "Servidor Rust Pirata",
    version: "2275 OldRecoil",
    subtitle: "La versión clásica favorita de la comunidad",
    price: "$17",
    period: "pago único",
    features: [
      "Rust 2275 OldRecoil estable",
      "+30,000 plugins disponibles (Oxide/uMod)",
      "AntiCheat incluido y configurado",
      "Panel de control WebPanel",
      "Backup automático diario",
      "IP dedicada exclusiva",
      "Soporte técnico 24/7",
      "Configuración de mods incluida",
    ],
  },
  {
    name: "Servidor Rust Pirata",
    version: "2388 Actualizado",
    subtitle: "La última versión con todo actualizado",
    price: "$25",
    period: "pago único",
    popular: true,
    features: [
      "Rust 2388 última versión estable",
      "+30,000 plugins Premium disponibles",
      "AntiCheat avanzado profesional",
      "Panel de control premium",
      "Backup cada 6 horas",
      "IP dedicada exclusiva",
      "Mods y plugins premium incluidos",
      "Configuración personalizada a medida",
      "Mundo personalizado con seed",
      "Soporte prioritario 24/7",
    ],
  },
];

const ServerSales: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Divider */}
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      <section
        ref={sectionRef}
        className="relative py-16 overflow-hidden"
        style={{ background: "transparent" }}
        itemScope
        itemType="https://schema.org/Product"
      >
        <div className="relative max-w-screen-xl mx-auto px-8 md:px-12">

              {/* ===================== HEADER ===================== */}
              <div className="text-center mb-12">
                <div
                  className={`transform transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4" itemProp="name">
                VENTAS DE{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                  SERVIDORES RUST PIRATA
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto" itemProp="description">
                Creá tu servidor de <strong className="text-white">Rust Pirata</strong> con las versiones{" "}
                <strong className="text-red-400">2275</strong> y{" "}
                <strong className="text-red-400">2388</strong>. 
                Más de <strong className="text-white">30,000 plugins</strong> disponibles. 
                ¡Soporte 24/7 y la mejor experiencia para tu comunidad!
              </p>
            </div>
          </div>

          {/* ===================== PLANES RUST ===================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-8">
            {rustPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative transform transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                } ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
                style={{ transitionDelay: `${index * 200 + 400}ms` }}
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-red-500/30">
                      <Star className="w-3.5 h-3.5" fill="currentColor" />
                      MÁS VENDIDO
                    </div>
                  </div>
                )}

                <div
                  className={`relative h-full rounded-2xl p-6 lg:p-8 border transition-all duration-300 ${
                    plan.popular
                      ? "bg-white/[0.03] border-red-500/40"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="text-center mb-6">
                    <div className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-3">
                      {plan.version}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{plan.subtitle}</p>
                    <meta itemProp="priceCurrency" content="USD" />
                    <meta itemProp="price" content={plan.price.replace("$", "")} />
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-black text-white">{plan.price}</span>
                      <span className="text-gray-500 text-sm">{plan.period}</span>
                    </div>
                  </div>

                  <div className="w-full h-px bg-white/10 mb-6"></div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className={`w-4 h-4 flex-shrink-0 ${plan.popular ? "text-red-400" : "text-gray-500"}`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                      href="https://discord.gg/7Vz4YBamFG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${
                      plan.popular
                        ? "bg-white text-black hover:bg-gray-100"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30"
                    }`}
                  >
                    Contratar Ahora
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ===================== NOTA: HOSTING NO INCLUIDO ===================== */}
          <div
            className={`max-w-4xl mx-auto mb-8 transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="border border-yellow-500/20 rounded-xl p-5 text-center bg-yellow-500/[0.03]">
              <p className="text-gray-300 text-sm">
                <span className="text-yellow-400 font-bold">Nota:</span>{" "}
                Los precios incluyen <span className="text-white font-semibold">licencia, configuración y soporte</span>. 
                El <span className="text-yellow-400 font-semibold">hosting (VPS) NO está incluido</span>. 
                Te ayudamos a elegir el mejor VPS para tu servidor.
              </p>
            </div>
          </div>

          {/* ===================== SEO CONTENT ===================== */}
          <div
            className={`max-w-4xl mx-auto transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="border border-white/10 rounded-2xl p-6 sm:p-8 bg-white/[0.02]">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
                ¿Por qué elegir un <span className="text-red-400">Servidor Rust Pirata</span>?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 text-sm">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p><strong className="text-white">Rust 2275 OldRecoil:</strong> La versión más querida por la comunidad. Recoil clásico que todos conocen y aman.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p><strong className="text-white">Rust 2388:</strong> La última versión con todos los gráficos y mejoras oficiales.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p><strong className="text-white">+30,000 Plugins:</strong> Oxide, uMod, economía, kits, tiendas, anti-cheat y mucho más para personalizar tu servidor.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p><strong className="text-white">Soporte 24/7:</strong> Te ayudamos con la instalación, configuración y resolución de problemas en cualquier momento.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ServerSales;
