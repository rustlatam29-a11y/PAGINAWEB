import React from "react";
import { Zap, CreditCard, Globe, Star, Sparkles, Shield, Check, Crown, Rocket, Award } from "lucide-react";

const VIPSection: React.FC = () => {
  return (
    <section id="vip-section" className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Premium con Animaciones */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <Crown className="w-16 h-16 md:w-20 md:h-20 text-red-600 animate-pulse" />
              <div className="absolute inset-0 bg-red-600/20 blur-2xl animate-pulse"></div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="text-white">PLANES </span>
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">VIP</span>
          </h2>
          
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-6">
            Desbloquea todo el potencial de LATAMRUST con nuestros planes premium
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-red-500" />
              <span>Activación Instantánea</span>
            </div>
            <div className="flex items-center space-x-2">
              <Rocket className="w-5 h-5 text-red-500" />
              <span>Soporte 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-red-500" />
              <span>Pago Mensual</span>
            </div>
          </div>
        </div>

        {/* Planes Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* PLAN SUPREMO */}
          <div className="relative group">
            {/* Badge Destacado con mejor animación */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white px-8 py-2.5 rounded-full text-xs font-bold shadow-2xl flex items-center space-x-2 animate-pulse">
                <Star className="w-4 h-4 fill-current" />
                <span className="tracking-wide">MÁS POPULAR</span>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-red-950/60 via-black/80 to-black/80 backdrop-blur-2xl rounded-3xl p-6 md:p-8 border-2 border-red-600/60 hover:border-red-500/90 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/60 transform hover:scale-[1.03]">
              
              {/* Efectos de Fondo Mejorados */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-transparent rounded-3xl" />
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/40 to-red-900/40 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-red-600/20 blur-3xl rounded-full" />
              
              <div className="relative z-10">
                {/* Header del Plan Mejorado */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 via-red-600 to-red-800 rounded-2xl mb-4 shadow-2xl transform group-hover:rotate-12 transition-transform duration-300 relative">
                    <Crown className="w-10 h-10 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-red-400/50 to-transparent rounded-2xl animate-pulse" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">PLAN SUPREMO</h3>
                  <p className="text-gray-300 text-sm md:text-base font-medium">La experiencia VIP definitiva</p>
                </div>

                {/* Precio Destacado con mejor diseño */}
                <div className="text-center mb-8 p-6 bg-gradient-to-br from-red-950/70 to-black/70 rounded-2xl border-2 border-red-600/40 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-red-500/20 to-red-600/10 animate-pulse" />
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 mb-2">$10.00</div>
                    <div className="text-gray-300 text-sm uppercase tracking-widest font-semibold">USD / Mes</div>
                    <div className="mt-3 inline-block px-4 py-1 bg-red-600/20 border border-red-500/30 rounded-full">
                      <span className="text-red-400 text-xs font-bold">✓ Suscripción mensual</span>
                    </div>
                  </div>
                </div>

                {/* Imagen */}
                <div className="mb-6 rounded-2xl overflow-hidden border-2 border-red-600/30 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/vip-supremo.png" 
                    alt="VIP Supremo" 
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Beneficios Destacados */}
                <div className="mb-6 p-4 bg-gradient-to-br from-red-950/40 to-black/50 rounded-xl border border-red-600/30">
                  <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="w-5 h-5 text-red-400" />
                    <span className="text-white font-bold text-sm">Características Incluidas</span>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      "Mochilas ilimitadas desbloqueadas",
                      "Espacios de almacenamiento ilimitados",
                      "Acceso premium completo al servidor",
                      "Soporte prioritario 24/7",
                      "Sistema de SKINES VIP exclusivas",
                      "Ventajas especiales en el juego"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-300">
                        <Check className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Disponibilidad Compacta */}
                <div className="mb-6 p-4 bg-black/40 rounded-xl border border-red-900/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <Globe className="w-4 h-4 text-red-400" />
                    <span className="text-white font-semibold text-sm">Disponible en</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["🇺🇸 USA", "🇦🇷 ARG", "🇨🇱 CHL", "🇵🇪 PER", "🇺🇾 URY", "🇧🇷 BRA"].map((country) => (
                      <span key={country} className="px-2.5 py-1 bg-red-950/50 text-red-400 rounded-lg text-xs font-semibold border border-red-900/30">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Métodos de Pago Mejorados */}
                <div className="mb-6 p-4 bg-black/40 rounded-xl border border-red-900/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <CreditCard className="w-4 h-4 text-red-400" />
                    <span className="text-white font-semibold text-sm">Métodos de Pago</span>
                  </div>
                  <div className="space-y-2.5 text-sm">
                    <div className="p-2 bg-red-950/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-red-400 font-semibold text-xs">🇧🇷 PIX (Brasil)</span>
                        <span className="text-gray-400 text-xs">Instantáneo</span>
                      </div>
                      <div className="bg-black/40 p-2 rounded">
                        <div className="text-xs text-gray-400">
                          <span className="text-red-300 font-semibold">Chave:</span>
                          <span className="ml-1 text-white font-mono text-[10px]">financeiro.cambiobrasil@gmail.com</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-red-950/20 rounded-lg">
                      <span className="text-red-400 font-semibold text-xs">💎 Belo App</span>
                      <span className="text-xs bg-red-600/80 px-2 py-0.5 rounded text-white">Recomendado</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-red-950/20 rounded-lg">
                      <span className="text-red-400 font-semibold text-xs">💳 AstroPay</span>
                      <span className="text-gray-400 text-xs">LATAM</span>
                    </div>
                    <div className="p-2 bg-red-950/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-red-400 font-semibold text-xs">💰 Mercado Pago</span>
                        <span className="text-gray-400 text-xs">Seguro</span>
                      </div>
                      <div className="bg-black/40 p-2 rounded space-y-1">
                        <div className="text-xs text-gray-400">
                          <span className="text-red-300 font-semibold">CVU:</span>
                          <span className="ml-1 text-white font-mono">0000184305010002618771</span>
                        </div>
                        <div className="text-xs text-gray-400">
                          <span className="text-red-300 font-semibold">Alias:</span>
                          <span className="ml-1 text-white">paraguayraider</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href="https://wa.link/duxkp1?text=Hola!%20Quiero%20comprar%20el%20Plan%20Supremo%20VIP%20de%20$10.00/mes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Rocket className="w-5 h-5" />
                    <span>COMPRAR AHORA</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* PLAN VIP BASIC */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-gray-900/60 via-black/80 to-black/80 backdrop-blur-2xl rounded-3xl p-6 md:p-8 border-2 border-gray-700/60 hover:border-red-500/70 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/40 transform hover:scale-[1.03]">
              
              {/* Efectos de Fondo */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-transparent rounded-3xl" />
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-gray-700/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-red-500/10 blur-3xl rounded-full" />
              
              <div className="relative z-10">
                {/* Header del Plan */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900 rounded-2xl mb-4 shadow-2xl transform group-hover:rotate-12 transition-transform duration-300 relative">
                    <Zap className="w-10 h-10 text-red-400" />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-500/30 to-transparent rounded-2xl" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">PLAN VIP BASIC</h3>
                  <p className="text-gray-300 text-sm md:text-base font-medium">Tu primer paso al mundo VIP</p>
                </div>

                {/* Precio Destacado con mejor diseño */}
                <div className="text-center mb-8 p-6 bg-gradient-to-br from-gray-900/70 to-black/70 rounded-2xl border-2 border-gray-700/40 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700/10 via-gray-600/20 to-gray-700/10" />
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-red-400 to-red-500 mb-2">$5.00</div>
                    <div className="text-gray-300 text-sm uppercase tracking-widest font-semibold">USD / Mes</div>
                    <div className="mt-3 inline-block px-4 py-1 bg-gray-700/30 border border-gray-600/30 rounded-full">
                      <span className="text-red-400 text-xs font-bold">✓ Suscripción mensual</span>
                    </div>
                  </div>
                </div>

                {/* Imagen */}
                <div className="mb-6 rounded-2xl overflow-hidden border-2 border-gray-700/30 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/vip-basic.png" 
                    alt="VIP Basic" 
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Beneficios Destacados */}
                <div className="mb-6 p-4 bg-gradient-to-br from-gray-900/40 to-black/50 rounded-xl border border-gray-700/30">
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="w-5 h-5 text-red-400" />
                    <span className="text-white font-bold text-sm">Características Incluidas</span>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      "Acceso VIP esencial al servidor",
                      "Slots extra de mochila",
                      "Soporte prioritario en Discord",
                      "Ventajas especiales en el juego",
                      "Sistema de SKINES VIP compartidas",
                      "Bonus de bienvenida"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-300">
                        <Check className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Disponibilidad */}
                <div className="mb-6 p-4 bg-black/40 rounded-xl border border-gray-700/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <Globe className="w-4 h-4 text-red-400" />
                    <span className="text-white font-semibold text-sm">Disponible en</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["🇺🇸 USA", "🇦🇷 ARG", "🇨🇱 CHL", "🇵🇪 PER", "🇺🇾 URY", "🇧🇷 BRA"].map((country) => (
                      <span key={country} className="px-2.5 py-1 bg-gray-900/50 text-red-400 rounded-lg text-xs font-semibold border border-gray-800/30">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Métodos de Pago */}
                <div className="mb-6 p-4 bg-black/40 rounded-xl border border-gray-700/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <CreditCard className="w-4 h-4 text-red-400" />
                    <span className="text-white font-semibold text-sm">Métodos de Pago</span>
                  </div>
                  <div className="space-y-2.5 text-sm">
                    <div className="p-2 bg-gray-900/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-red-400 font-semibold text-xs">🇧🇷 PIX (Brasil)</span>
                        <span className="text-gray-400 text-xs">Instantáneo</span>
                      </div>
                      <div className="bg-black/40 p-2 rounded">
                        <div className="text-xs text-gray-400">
                          <span className="text-red-300 font-semibold">Chave:</span>
                          <span className="ml-1 text-white font-mono text-[10px]">financeiro.cambiobrasil@gmail.com</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-900/20 rounded-lg">
                      <span className="text-red-400 font-semibold text-xs">💎 Belo App</span>
                      <span className="text-xs bg-red-600/80 px-2 py-0.5 rounded text-white">Recomendado</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-900/20 rounded-lg">
                      <span className="text-red-400 font-semibold text-xs">💳 AstroPay</span>
                      <span className="text-gray-400 text-xs">LATAM</span>
                    </div>
                    <div className="p-2 bg-gray-900/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-red-400 font-semibold text-xs">💰 Mercado Pago</span>
                        <span className="text-gray-400 text-xs">Seguro</span>
                      </div>
                      <div className="bg-black/40 p-2 rounded space-y-1">
                        <div className="text-xs text-gray-400">
                          <span className="text-red-300 font-semibold">CVU:</span>
                          <span className="ml-1 text-white font-mono">0000184305010002618771</span>
                        </div>
                        <div className="text-xs text-gray-400">
                          <span className="text-red-300 font-semibold">Alias:</span>
                          <span className="ml-1 text-white">paraguayraider</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href="https://wa.link/duxkp1?text=Hola!%20Quiero%20comprar%20el%20Plan%20VIP%20Basic%20de%20$5.00/mes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-red-600 hover:to-red-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Rocket className="w-5 h-5" />
                    <span>COMPRAR AHORA</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Final Mejorado */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-br from-red-950/30 to-black/50 backdrop-blur-xl rounded-3xl p-8 border border-red-900/30">
            <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">¿Tienes Dudas?</h3>
            <p className="text-gray-300 mb-6">Contáctanos por WhatsApp y te ayudamos a elegir el plan perfecto</p>
            
            <a 
              href="https://wa.link/duxkp1?text=Hola!%20Tengo%20dudas%20sobre%20los%20planes%20VIP%20de%20LATAMRUST" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-900/50 text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Contáctanos por WhatsApp</span>
            </a>
            
            <p className="text-gray-400 text-sm mt-4">
              ⚡ Respondemos en menos de 5 minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VIPSection;
