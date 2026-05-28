import React, { useState, useEffect } from "react";
import { TrendingUp, RefreshCw, Server, Zap } from "lucide-react";

interface ExchangeRates {
  USD: number;
  ARS: number;
  BRL: number;
  CLP: number;
  COP: number;
  MXN: number;
  PEN: number;
  UYU: number;
  PYG: number;
}

interface RustPlan {
  id: string;
  name: string;
  version: string;
  price: number;
  icon: React.ReactNode;
  popular?: boolean;
}

const rustPlans: RustPlan[] = [
  {
    id: "rust2275",
    name: "Rust 2275",
    version: "OldRecoil",
    price: 17.0,
    icon: <Server className="w-5 h-5" />,
  },
  {
    id: "rust2388",
    name: "Rust 2388",
    version: "Actualizado",
    price: 25.0,
    icon: <Zap className="w-5 h-5" />,
    popular: true,
  },
];

const CurrencyCalculator: React.FC = () => {
  const [rates, setRates] = useState<ExchangeRates | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string>("rust2388");
  const [selectedCurrency, setSelectedCurrency] = useState<keyof ExchangeRates>("USD");
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const currencyFlags: Record<keyof ExchangeRates, string> = {
    USD: "🇺🇸",
    ARS: "🇦🇷",
    BRL: "🇧🇷",
    CLP: "🇨🇱",
    COP: "🇨🇴",
    MXN: "🇲🇽",
    PEN: "🇵🇪",
    UYU: "🇺🇾",
    PYG: "🇵🇾",
  };

  const currencyNames: Record<keyof ExchangeRates, string> = {
    USD: "Dólar",
    ARS: "Peso Argentino",
    BRL: "Real Brasileño",
    CLP: "Peso Chileno",
    COP: "Peso Colombiano",
    MXN: "Peso Mexicano",
    PEN: "Sol Peruano",
    UYU: "Peso Uruguayo",
    PYG: "Guaraní",
  };

  const fetchExchangeRates = async () => {
    setLoading(true);
    setError(null);

    try {
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
        PYG: data.rates.PYG || 7500,
      });

      setLastUpdate(new Date());
    } catch {
      setError("No se pudieron cargar las tasas. Usando valores aproximados.");
      setRates({
        USD: 1,
        ARS: 1000,
        BRL: 5.5,
        CLP: 950,
        COP: 4300,
        MXN: 17,
        PEN: 3.7,
        UYU: 42,
        PYG: 7500,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchExchangeRates(), 1000);
    const interval = setInterval(fetchExchangeRates, 300000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const getSelectedPlan = () => rustPlans.find((p) => p.id === selectedPlan) || rustPlans[0];

  const calculatePrice = () => {
    if (!rates) return "0.00";
    const plan = getSelectedPlan();
    const margin = 1.03;
    return (plan.price * rates[selectedCurrency] * margin).toFixed(2);
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
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-white">Calculadora de </span>
            <span className="text-red-500">Precios</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Precios en tiempo real • 9 monedas de LATAM
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-5 md:p-6 border border-gray-800/50 shadow-xl">
          {loading ? (
            <div className="text-center py-4">
              <RefreshCw className="w-8 h-8 text-red-500 animate-spin mx-auto mb-3" />
              <p className="text-gray-400 text-sm">Cargando tasas...</p>
            </div>
          ) : (
            <>
              {/* Plan Selection */}
              <div className="mb-6">
                <label className="block text-gray-300 font-medium mb-3 text-sm">
                  Seleccioná tu servidor
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {rustPlans.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`p-4 rounded-xl border transition-all duration-200 relative ${
                        selectedPlan === plan.id
                          ? "border-red-500 bg-red-500/10 shadow-lg shadow-red-500/20"
                          : "border-gray-700 bg-gray-900/30 hover:border-gray-600"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-md font-semibold">
                          Popular
                        </div>
                      )}
                      <div className="flex items-center gap-2 mb-2">
                        <span className={selectedPlan === plan.id ? "text-red-400" : "text-gray-400"}>
                          {plan.icon}
                        </span>
                        <span className="text-white font-semibold text-sm">{plan.name}</span>
                      </div>
                      <div className="text-gray-400 text-xs mb-2">{plan.version}</div>
                      <div className="text-red-400 text-xl font-bold">${plan.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Currency Selection */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-3 text-base">
                  Selecciona tu moneda
                </label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {(Object.keys(rates!) as Array<keyof ExchangeRates>).map((currency) => (
                    <button
                      key={currency}
                      onClick={() => setSelectedCurrency(currency)}
                      className={`group relative p-3 rounded-xl border transition-all duration-200 ${
                        selectedCurrency === currency
                          ? "border-red-500 bg-red-500/10"
                          : "border-gray-700/50 bg-gray-900/20 hover:border-gray-600 hover:bg-gray-900/40"
                      }`}
                      title={currencyNames[currency]}
                    >
                      <div className="text-lg mb-1">{currencyFlags[currency]}</div>
                      <div
                        className={`text-xs font-medium ${
                          selectedCurrency === currency ? "text-red-400" : "text-gray-300"
                        }`}
                      >
                        {currency}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="bg-gradient-to-br from-red-950/30 to-black/30 rounded-xl p-6 border border-red-900/30 mb-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 text-sm font-medium">
                    {getSelectedPlan().name} ({getSelectedPlan().version})
                  </span>
                  {selectedCurrency !== "USD" && (
                    <span className="text-gray-500 text-xs">≈ ${getSelectedPlan().price.toFixed(2)} USD</span>
                  )}
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl">{currencyFlags[selectedCurrency]}</span>
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    {formatNumber(calculatePrice())}
                  </span>
                  <span className="text-xl text-gray-400 font-medium">{selectedCurrency}</span>
                </div>
                <div className="mt-2 text-gray-500 text-xs">por mes</div>
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
                  href="https://discord.gg/54zHAYmtzp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
                    </svg>
                    <span>Consultar por Discord</span>
                  </span>
                </a>

                <p className="text-center text-gray-400 text-sm">
                  Contactanos por Discord para coordinar el pago
                </p>
              </div>
            </>
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            * Las tasas de cambio se actualizan cada 5 minutos. El precio final incluye un margen del 3% para cubrir comisiones de cambio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurrencyCalculator;
