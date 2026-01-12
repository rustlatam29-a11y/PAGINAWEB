import React from "react";
import { Zap, CreditCard, Globe, Star, Sparkles, Shield } from "lucide-react";

const VIPSection: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título Principal */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="text-white">PLANES </span>
            <span className="text-red-600">VIP</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Desbloquea todo el potencial de LATAMRUST con nuestros planes premium
          </p>
        </div>

        {/* Planes Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* PLAN SUPREMO */}
          <div className="relative group">
            {/* Badge Destacado */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>MÁS POPULAR</span>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-red-950/40 via-black/60 to-black/60 backdrop-blur-xl rounded-3xl p-8 border-2 border-red-900/50 hover:border-red-600/70 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/50 hover:scale-105">
              
              {/* Efectos de Fondo */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-transparent rounded-3xl" />
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-red-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Header del Plan */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl mb-4 shadow-xl">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-white mb-2">PLAN SUPREMO</h2>
                  <p className="text-gray-400 text-sm">El plan más completo con todas las funcionalidades premium</p>
                </div>

                {/* Imagen */}
                <div className="mb-6 rounded-xl overflow-hidden border-2 border-red-900/30">
                  <img 
                    src="/vip-supremo.png" 
                    alt="VIP Supremo" 
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Precio */}
                <div className="text-center mb-6 p-6 bg-black/40 rounded-xl border border-red-900/30">
                  <div className="text-5xl font-black text-red-500 mb-2">$10.00</div>
                  <div className="text-gray-400 text-sm">USD</div>
                </div>

                {/* Disponibilidad */}
                <div className="mb-6 p-4 bg-black/40 rounded-xl border border-red-900/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <Globe className="w-5 h-5 text-red-500" />
                    <span className="text-white font-bold">Disponibilidad</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["USA", "ARG", "CHL", "PER", "URY", "BRA"].map((country) => (
                      <span key={country} className="px-3 py-1 bg-red-950/50 text-red-400 rounded-full text-sm font-semibold border border-red-900/30">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Métodos de Pago */}
                <div className="mb-6 p-4 bg-black/40 rounded-xl border border-red-900/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <CreditCard className="w-5 h-5 text-red-500" />
                    <span className="text-white font-bold">Métodos de Pago</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-300">
                      <span className="text-red-400 font-semibold">PIX (Brasil)</span>
                      <p className="text-xs text-gray-500 mt-1">financeiro.cambiobrasil@gmail.com</p>
                    </div>
                    <div className="text-gray-300">
                      <span className="text-red-400 font-semibold">Belo App</span>
                      <span className="ml-2 text-xs bg-red-950/50 px-2 py-0.5 rounded text-red-400">recomendado</span>
                    </div>
                    <div className="text-gray-300">
                      <span className="text-red-400 font-semibold">Mercado Pago</span>
                      <p className="text-xs text-gray-500 mt-1">galpontech.mp</p>
                      <p className="text-xs text-gray-500">Titular: Ximena Ana Rodríguez</p>
                    </div>
                  </div>
                </div>

                {/* Beneficios Premium */}
                <div className="mb-6 p-4 bg-gradient-to-br from-red-950/30 to-black/40 rounded-xl border border-red-900/50">
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="w-5 h-5 text-red-500" />
                    <span className="text-white font-bold">Beneficios Premium</span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Todas las mochilas desbloqueadas",
                      "Espacios ilimitados",
                      "Acceso premium completo",
                      "Soporte prioritario"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2 text-gray-300">
                        <Zap className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skines Exclusivas */}
                <div className="p-4 bg-gradient-to-br from-red-900/20 to-black/40 rounded-xl border border-red-800/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-5 h-5 text-red-400" />
                    <span className="text-red-400 font-bold text-sm">SKINES EXCLUSIVAS VIP</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Acceso completo al sistema de SKINES VIP LATAMRUST. Destácate en el servidor con skins exclusivas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PLAN VIP BASIC */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-neutral-900/40 via-black/60 to-black/60 backdrop-blur-xl rounded-3xl p-8 border-2 border-neutral-800/50 hover:border-red-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/30 hover:scale-105">
              
              {/* Efectos de Fondo */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/10 via-transparent to-transparent rounded-3xl" />
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/10 to-red-900/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Header del Plan */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-2xl mb-4 shadow-xl">
                    <Zap className="w-10 h-10 text-red-400" />
                  </div>
                  <h2 className="text-3xl font-black text-white mb-2">PLAN VIP BASIC</h2>
                  <p className="text-gray-400 text-sm">Plan esencial con funcionalidades básicas a precio accesible</p>
                </div>

                {/* Imagen */}
                <div className="mb-6 rounded-xl overflow-hidden border-2 border-neutral-800/30">
                  <img 
                    src="/vip-basic.png" 
                    alt="VIP Basic" 
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Precio */}
                <div className="text-center mb-6 p-6 bg-black/40 rounded-xl border border-neutral-800/30">
                  <div className="text-5xl font-black text-red-400 mb-2">$5.00</div>
                  <div className="text-gray-400 text-sm">USD</div>
                </div>

                {/* Disponibilidad */}
                <div className="mb-6 p-4 bg-black/40 rounded-xl border border-neutral-800/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <Globe className="w-5 h-5 text-red-400" />
                    <span className="text-white font-bold">Disponibilidad</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["USA", "ARG", "CHL", "PER", "URY", "BRA"].map((country) => (
                      <span key={country} className="px-3 py-1 bg-neutral-900/50 text-red-400 rounded-full text-sm font-semibold border border-neutral-800/30">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Métodos de Pago */}
                <div className="mb-6 p-4 bg-black/40 rounded-xl border border-neutral-800/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <CreditCard className="w-5 h-5 text-red-400" />
                    <span className="text-white font-bold">Métodos de Pago</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-300">
                      <span className="text-red-400 font-semibold">PIX (Brasil)</span>
                      <p className="text-xs text-gray-500 mt-1">financeiro.cambiobrasil@gmail.com</p>
                    </div>
                    <div className="text-gray-300">
                      <span className="text-red-400 font-semibold">Belo App</span>
                      <span className="ml-2 text-xs bg-neutral-900/50 px-2 py-0.5 rounded text-red-400">recomendado</span>
                    </div>
                    <div className="text-gray-300">
                      <span className="text-red-400 font-semibold">Mercado Pago</span>
                      <p className="text-xs text-gray-500 mt-1">galpontech.mp</p>
                      <p className="text-xs text-gray-500">Titular: Ximena Ana Rodríguez</p>
                    </div>
                  </div>
                </div>

                {/* Beneficios Incluidos */}
                <div className="mb-6 p-4 bg-gradient-to-br from-neutral-900/30 to-black/40 rounded-xl border border-neutral-800/50">
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="w-5 h-5 text-red-400" />
                    <span className="text-white font-bold">Beneficios Incluidos</span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Acceso VIP esencial",
                      "Slots extra de mochila",
                      "Soporte prioritario al servidor",
                      "Ventajas en el juego"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2 text-gray-300">
                        <Zap className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skines VIP */}
                <div className="p-4 bg-gradient-to-br from-neutral-900/20 to-black/40 rounded-xl border border-neutral-800/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-5 h-5 text-red-400" />
                    <span className="text-red-400 font-bold text-sm">SKINES VIP</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Acceso al sistema de SKINES VIP LATAMRUST. Compartido con usuarios de Kit Booster.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <a 
            href="https://wa.me/+595972610336" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-900/50"
          >
            <span className="text-lg">¿Dudas? Contáctanos por WhatsApp</span>
            <Zap className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VIPSection;
