import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import GlobalBackground from "../../Components/GlobalBackground/GlobalBackground";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import { ShoppingCart, Gem, Zap, Sparkles, Crown, Rocket, Gift, Star, Award } from "lucide-react";

const RPShop: React.FC = () => {
  const rpPackages = [
    {
      id: 1,
      price: "$3.50",
      rp: "10,000",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-blue-600 to-blue-800",
      borderColor: "border-blue-600/60",
      glowColor: "shadow-blue-600/50",
      titleES: "Pack Básico",
      titlePT: "Pacote Básico",
      descES: "Pack básico de 10.000 RP LATAMRUST, ideal para compras en /shop y beneficios VIP.",
      descPT: "Pacote básico com 10.000 RP LATAMRUST, ideal para compras na /shop e benefícios VIP.",
      badge: "💎"
    },
    {
      id: 2,
      price: "$5.50",
      rp: "18,000",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-purple-600 to-purple-800",
      borderColor: "border-purple-600/60",
      glowColor: "shadow-purple-600/50",
      titleES: "Pack Avanzado",
      titlePT: "Pacote Avançado",
      descES: "Pack avanzado de 18.000 RP LATAMRUST para mejorar tu experiencia en /shop y VIP.",
      descPT: "Pacote avançado com 18.000 RP LATAMRUST para melhorar sua experiência na /shop e VIP.",
      badge: "✨",
      popular: true
    },
    {
      id: 3,
      price: "$9.00",
      rp: "35,000",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-red-600 to-red-800",
      borderColor: "border-red-600/60",
      glowColor: "shadow-red-600/50",
      titleES: "Pack Premium",
      titlePT: "Pacote Premium",
      descES: "Pack premium de 35.000 RP LATAMRUST, pensado para jugadores frecuentes en /shop y VIP.",
      descPT: "Pacote premium com 35.000 RP LATAMRUST, pensado para jogadores frequentes na /shop e VIP.",
      badge: "🚀"
    },
    {
      id: 4,
      price: "$13.50",
      rp: "55,000",
      icon: <Crown className="w-8 h-8" />,
      color: "from-yellow-600 to-orange-800",
      borderColor: "border-yellow-600/60",
      glowColor: "shadow-yellow-600/50",
      titleES: "Pack Élite",
      titlePT: "Pacote Elite",
      descES: "Pack élite de 55.000 RP LATAMRUST para maximizar ventajas en /shop y benefícios VIP.",
      descPT: "Pacote elite com 55.000 RP LATAMRUST para maximizar vantagens na /shop e benefícios VIP.",
      badge: "👑"
    }
  ];

  return (
    <GlobalBackground>
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <Gem className="w-16 h-16 md:w-20 md:h-20 text-purple-500 animate-pulse" />
                <div className="absolute inset-0 bg-purple-500/20 blur-2xl animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              <span className="text-white">TIENDA DE </span>
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-700 bg-clip-text text-transparent">RP</span>
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                <span className="font-semibold text-purple-400">ES:</span> RP es la moneda oficial de LATAMRUST. Con RP se pueden comprar ítems en <span className="text-purple-400 font-semibold">/shop</span> y acceder a beneficios VIP.
              </p>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                <span className="font-semibold text-purple-400">PT:</span> RP é a moeda oficial do LATAMRUST. Com RP é possível comprar itens na <span className="text-purple-400 font-semibold">/shop</span> e ter benefícios VIP.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base text-gray-400 mt-8">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-purple-500" />
                <span>Entrega Instantánea</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-purple-500" />
                <span>Pago Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gift className="w-5 h-5 text-purple-500" />
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>

          {/* RP Packages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
            {rpPackages.map((pkg) => (
              <div key={pkg.id} className="relative group">
                
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-xs font-bold shadow-2xl flex items-center space-x-2 animate-pulse">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="tracking-wide">MÁS VENDIDO</span>
                    </div>
                  </div>
                )}

                <div className={`relative bg-gradient-to-br from-gray-900/80 via-black/80 to-black/80 backdrop-blur-2xl rounded-3xl p-6 border-2 ${pkg.borderColor} hover:border-opacity-100 transition-all duration-500 hover:shadow-2xl ${pkg.glowColor} transform hover:scale-105 h-full flex flex-col`}>
                  
                  {/* Effects */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-10 rounded-3xl`} />
                  <div className={`absolute -inset-1 bg-gradient-to-r ${pkg.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon & Badge */}
                    <div className="text-center mb-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl mb-3 shadow-xl transform group-hover:rotate-12 transition-transform duration-300`}>
                        {pkg.icon}
                      </div>
                      <div className="text-4xl mb-2">{pkg.badge}</div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-white mb-2 text-center">
                      {pkg.titleES}
                    </h3>
                    <p className="text-gray-400 text-sm text-center mb-4">
                      {pkg.titlePT}
                    </p>

                    {/* RP Amount */}
                    <div className={`text-center mb-4 p-4 bg-gradient-to-br from-gray-900/70 to-black/70 rounded-xl border ${pkg.borderColor} shadow-xl`}>
                      <div className={`text-4xl font-black bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent mb-1`}>
                        {pkg.rp} RP
                      </div>
                      <div className="text-2xl font-bold text-white">{pkg.price}</div>
                      <div className="text-xs text-gray-400 mt-1">USD</div>
                    </div>

                    {/* Description */}
                    <div className="mb-4 flex-grow">
                      <p className="text-gray-300 text-xs leading-relaxed mb-2">
                        <span className="font-semibold text-purple-400">ES:</span> {pkg.descES}
                      </p>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        <span className="font-semibold text-purple-400">PT:</span> {pkg.descPT}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <a 
                      href={`https://wa.link/6wker8?text=Hola!%20Quiero%20comprar%20${pkg.rp}%20RP%20por%20${pkg.price}%20USD`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`block w-full text-center py-3 bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl mt-auto`}
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <ShoppingCart className="w-4 h-4" />
                        <span>COMPRAR AHORA</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="max-w-3xl mx-auto mt-16 p-8 bg-gradient-to-br from-purple-950/30 to-black/50 backdrop-blur-xl rounded-3xl border border-purple-900/30">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">💬 Compra por WhatsApp</h2>
              <p className="text-gray-300 text-lg mb-6">
                Para comprar RP, contáctanos directamente y te ayudaremos con el proceso de pago
              </p>
              <a 
                href="https://wa.link/6wker8?text=Hola!%20Quiero%20comprar%20RP%20en%20LATAMRUST" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Contactar por WhatsApp</span>
              </a>
              <p className="text-gray-400 text-sm mt-4">⚡ Respuesta en menos de 5 minutos</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </GlobalBackground>
  );
};

export default RPShop;
