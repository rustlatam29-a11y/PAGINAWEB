import React, { useState, useEffect, useRef } from "react";
import { Server, Shield, Star, Check } from "lucide-react";

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
  const [selectedRustPlan, setSelectedRustPlan] = useState<number | null>(null);
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

          {/* ===================== FEATURES BAR ===================== */}

          {/* ===================== PLANES RUST ===================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-8">
            {rustPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative transform transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                } ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
                style={{ transitionDelay: `${index * 200 + 400}ms` }}
                onMouseEnter={() => setSelectedRustPlan(index)}
                onMouseLeave={() => setSelectedRustPlan(null)}
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center gap-2 shadow-lg shadow-red-500/30">
                      <Star className="w-4 h-4" fill="currentColor" />
                      MÁS VENDIDO
                    </div>
                  </div>
                )}

                <div
                  className={`relative h-full bg-gradient-to-b ${
                    plan.popular
                      ? "from-gray-800/80 to-gray-900/80 border-red-500/50"
                      : "from-gray-800/50 to-gray-900/50 border-white/10"
                  } backdrop-blur-lg rounded-2xl p-6 lg:p-8 border transition-all duration-500 ${
                    selectedRustPlan === index
                      ? "scale-105 border-red-500/70 shadow-2xl shadow-red-500/20"
                      : "hover:border-white/30"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent rounded-2xl"></div>
                  )}

                  <div className="text-center mb-6 relative">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                        plan.popular ? "bg-red-500/20 text-red-400" : "bg-white/10 text-gray-300"
                      }`}
                    >
                      <Server className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                    <p className={`text-lg font-semibold mb-1 ${plan.popular ? "text-red-400" : "text-gray-400"}`}>
                      {plan.version}
                    </p>
                    <p className="text-gray-500 text-sm mb-3">{plan.subtitle}</p>
                    <meta itemProp="priceCurrency" content="USD" />
                    <meta itemProp="price" content={plan.price.replace("$", "")} />
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-black text-white">{plan.price}</span>
                      <span className="text-gray-400 text-lg">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 relative">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            plan.popular ? "bg-red-500/20 text-red-400" : "bg-white/10 text-gray-400"
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://api.whatsapp.com/send?phone=595981144534"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-green-600 to-green-800 text-white hover:from-green-700 hover:to-green-900 shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40"
                    }`}
                  >
                    {plan.popular ? "Contratar Ahora" : "Contratar Ahora"}
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
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Shield className="w-6 h-6 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-lg">INFORMACIÓN IMPORTANTE</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Los precios incluyen <span className="text-white font-bold">licencia, configuración y soporte del servidor Rust Pirata</span>. 
                El <span className="text-yellow-400 font-bold">hosting (VPS) NO está incluido</span>. 
                Te ayudamos a elegir el mejor VPS para tu servidor de Rust.
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
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
                ¿Por qué elegir un <span className="text-red-400">Servidor Rust Pirata</span>?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 text-sm">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p><strong className="text-white">Rust 2275 OldRecoil:</strong> La versión más querida por la comunidad. Recoil clásico que todos conocen y aman.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p><strong className="text-white">Rust 2388:</strong> La última versión con todos los gráficos y mejoras oficiales. Actualizadoconstantly.</p>
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
