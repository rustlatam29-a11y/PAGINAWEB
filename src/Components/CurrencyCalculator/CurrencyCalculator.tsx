import React, { useState, useEffect } from "react";
import { TrendingUp, RefreshCw } from "lucide-react";

interface ExchangeRates {
  USD: number;
  ARS: number;
  BRL: number;
  CLP: number;
  COP: number;
  MXN: number;
  PEN: number;
  UYU: number;
  VES: number;
  BOB: number;
  USD_EC: number;
  PAB: number;
  PYG: number;
}

const CurrencyCalculator: React.FC = () => {
  const [rates, setRates] = useState<ExchangeRates | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "supremo">("supremo");
  const [selectedCurrency, setSelectedCurrency] = useState<keyof ExchangeRates>("USD");
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const planPrices = {
    basic: 5.0,
    supremo: 10.0,
  };

  const currencyFlags = {
    USD: "🇺🇸",
    ARS: "🇦🇷",
    BRL: "🇧🇷",
    CLP: "🇨🇱",
    COP: "🇨🇴",
    MXN: "🇲🇽",
    PEN: "🇵🇪",
    UYU: "🇺🇾",
    VES: "🇻🇪",
    BOB: "🇧🇴",
    USD_EC: "🇪🇨",
    PAB: "🇵🇦",
    PYG: "🇵🇾",
  };

  const currencyNames = {
    USD: "Dólar estadounidense",
    ARS: "Peso argentino",
    BRL: "Real brasileño",
    CLP: "Peso chileno",
    COP: "Peso colombiano",
    MXN: "Peso mexicano",
    PEN: "Sol peruano",
    UYU: "Peso uruguayo",
    VES: "Bolívar venezolano",
    BOB: "Boliviano",
    USD_EC: "Dólar (Ecuador)",
    PAB: "Balboa panameño",
    PYG: "Guaraní paraguayo",
  };

  const fetchExchangeRates = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Using exchangerate-api.com (free tier: 1,500 requests/month)
      const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
      
      if (!response.ok) {
        throw new Error("Error al obtener las tasas de cambio");
      }

      const data = await response.json();
      
      setRates({
        USD: 1,
        ARS: data.rates.ARS || 1000,
        BRL: data.rates.BRL || 5.5,
        CLP: data.rates.CLP || 950,
        COP: data.rates.COP || 4300,
        MXN: data.rates.MXN || 17,
        PEN: data.rates.PEN || 3.7,
        UYU: data.rates.UYU || 42,
        VES: data.rates.VES || 36,
        BOB: data.rates.BOB || 7,
        USD_EC: 1, // Ecuador usa USD
        PAB: data.rates.PAB || 1,
        PYG: data.rates.PYG || 7500,
      });
      
      setLastUpdate(new Date());
    } catch (err) {
      setError("No se pudieron cargar las tasas de cambio. Usando valores aproximados.");
      // Fallback rates
      setRates({
        USD: 1,
        ARS: 1000,
        BRL: 5.5,
        CLP: 950,
        COP: 4300,
        MXN: 17,
        PEN: 3.7,
        UYU: 42,
        VES: 36,
        BOB: 7,
        USD_EC: 1, // Ecuador usa USD
        PAB: 1,
        PYG: 7500,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Diferir la carga de la API para no bloquear el renderizado inicial
    const timer = setTimeout(() => {
      fetchExchangeRates();
    }, 1000); // Cargar después de 1 segundo
    
    // Actualizar cada 5 minutos
    const interval = setInterval(fetchExchangeRates, 300000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const calculatePrice = () => {
    if (!rates) return "0.00";
    const basePrice = planPrices[selectedPlan];
    // Agregar margen del 3% sobre el tipo de cambio (como Wise)
    const margin = 1.03;
    return (basePrice * rates[selectedCurrency] * margin).toFixed(2);
  };

  const formatNumber = (num: string | number) => {
    const value = typeof num === "string" ? parseFloat(num) : num;
    return value.toLocaleString("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <section className="relative py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header - Minimalista */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-white">Convertidor de </span>
            <span className="text-red-500">Precios</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Precios en tiempo real • 13 monedas disponibles
          </p>
        </div>

        {/* Calculator Card - Más compacto */}
        <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-5 md:p-6 border border-gray-800/50 shadow-xl">
          {loading ? (
            <div className="text-center py-4">
              <RefreshCw className="w-8 h-8 text-red-500 animate-spin mx-auto mb-3" />
              <p className="text-gray-400 text-sm">Cargando tasas...</p>
            </div>
          ) : (
            <>
              {/* Plan Selection - Compacto */}
              <div className="mb-6">
                <label className="block text-gray-300 font-medium mb-3 text-sm">
                  Plan
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedPlan("basic")}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      selectedPlan === "basic"
                        ? "border-red-500 bg-red-500/10 shadow-lg shadow-red-500/20"
                        : "border-gray-700 bg-gray-900/30 hover:border-gray-600"
                    }`}
                  >
                    <div className="text-white font-semibold text-sm mb-1">VIP Basic</div>
                    <div className="text-red-400 text-xl font-bold">$5</div>
                  </button>

                  <button
                    onClick={() => setSelectedPlan("supremo")}
                    className={`p-3 rounded-lg border transition-all duration-200 relative ${
                      selectedPlan === "supremo"
                        ? "border-red-500 bg-red-500/10 shadow-lg shadow-red-500/20"
                        : "border-gray-700 bg-gray-900/30 hover:border-gray-600"
                    }`}
                  >
                    <div className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-md font-semibold">
                      Popular
                    </div>
                    <div className="text-white font-semibold text-sm mb-1">Supremo</div>
                    <div className="text-red-400 text-xl font-bold">$10</div>
                  </button>
                </div>
              </div>

              {/* Currency Selection */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-3 text-base">
                  Selecciona tu moneda
                </label>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {(Object.keys(rates!) as Array<keyof ExchangeRates>).map((currency) => (
                    <button
                      key={currency}
                      onClick={() => setSelectedCurrency(currency)}
                      className={`group relative p-2.5 rounded-lg border transition-all duration-200 ${
                        selectedCurrency === currency
                          ? "border-red-500 bg-red-500/10"
                          : "border-gray-700/50 bg-gray-900/20 hover:border-gray-600 hover:bg-gray-900/40"
                      }`}
                      title={currencyNames[currency]}
                    >
                      <div className="text-lg mb-0.5">{currencyFlags[currency]}</div>
                      <div className={`text-xs font-medium ${
                        selectedCurrency === currency ? "text-red-400" : "text-gray-300"
                      }`}>
                        {currency}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Result - Minimalista */}
              <div className="bg-gradient-to-br from-red-950/30 to-black/30 rounded-xl p-6 border border-red-900/30 mb-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 text-sm font-medium">Precio final</span>
                  {selectedCurrency !== "USD" && selectedCurrency !== "USD_EC" && (
                    <span className="text-gray-500 text-xs">≈ ${planPrices[selectedPlan].toFixed(2)} USD</span>
                  )}
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl">{currencyFlags[selectedCurrency]}</span>
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    {formatNumber(calculatePrice())}
                  </span>
                  <span className="text-xl text-gray-400 font-medium">
                    {selectedCurrency}
                  </span>
                </div>
                <div className="mt-2 text-gray-500 text-xs">
                  por mes
                </div>
              </div>

              {/* Info & Actions */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-red-900/30">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300 text-sm">
                      Última actualización: {lastUpdate.toLocaleTimeString("es-ES")}
                    </span>
                  </div>
                  <button
                    onClick={fetchExchangeRates}
                    className="p-2 bg-red-950/50 hover:bg-red-900/50 rounded-lg transition-colors"
                    title="Actualizar tasas"
                  >
                    <RefreshCw className="w-5 h-5 text-red-400" />
                  </button>
                </div>

                {error && (
                  <div className="p-4 bg-yellow-950/30 border border-yellow-600/30 rounded-xl">
                    <p className="text-yellow-400 text-sm">{error}</p>
                  </div>
                )}

                {/* CTA Button */}
                <a
                  href={`https://wa.link/duxkp1?text=Hola!%20Quiero%20comprar%20el%20${
                    selectedPlan === "basic" ? "Plan%20VIP%20Basic" : "Plan%20Supremo"
                  }%20(${formatNumber(calculatePrice())}%20${selectedCurrency})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    <span>Comprar por WhatsApp</span>
                  </span>
                </a>

                <p className="text-center text-gray-400 text-sm">
                  💳 Aceptamos PIX, Belo App, AstroPay y Mercado Pago
                </p>
              </div>
            </>
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            * Las tasas de cambio se actualizan automáticamente cada 5 minutos. Los precios finales pueden variar ligeramente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurrencyCalculator;
