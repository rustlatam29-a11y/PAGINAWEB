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
    <section className="relative py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-white mb-2">
            Calculadora de <span className="text-red-500">Precios</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Precios en tiempo real • 9 monedas de LATAM
          </p>
        </div>

        {/* Calculator Card */}
        <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
          {loading ? (
            <div className="text-center py-8">
              <RefreshCw className="w-6 h-6 text-gray-500 animate-spin mx-auto mb-3" />
              <p className="text-gray-500 text-sm">Cargando tasas...</p>
            </div>
          ) : (
            <>
              {/* Plan Selection */}
              <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-3">Seleccioná tu servidor</label>
                <div className="grid grid-cols-2 gap-3">
                  {rustPlans.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        selectedPlan === plan.id
                          ? "border-red-500/50 bg-red-500/5"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20"
                      }`}
                    >
                      {plan.popular && (
                        <div className="text-xs text-red-400 font-bold mb-2">Popular</div>
                      )}
                      <div className="flex items-center gap-2 mb-1">
                        <span className={selectedPlan === plan.id ? "text-red-400" : "text-gray-500"}>
                          {plan.icon}
                        </span>
                        <span className="text-white font-bold text-sm">{plan.name}</span>
                      </div>
                      <div className="text-gray-500 text-xs mb-2">{plan.version}</div>
                      <div className="text-white text-xl font-black">${plan.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Currency Selection */}
              <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-3">Selecciona tu moneda</label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {(Object.keys(rates!) as Array<keyof ExchangeRates>).map((currency) => (
                    <button
                      key={currency}
                      onClick={() => setSelectedCurrency(currency)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedCurrency === currency
                          ? "border-red-500/50 bg-red-500/5"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20"
                      }`}
                      title={currencyNames[currency]}
                    >
                      <div className="text-lg mb-1">{currencyFlags[currency]}</div>
                      <div className={`text-xs font-medium ${selectedCurrency === currency ? "text-red-400" : "text-gray-400"}`}>
                        {currency}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="border border-white/10 rounded-xl p-6 mb-6 bg-white/[0.02]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 text-sm">
                    {getSelectedPlan().name} ({getSelectedPlan().version})
                  </span>
                  {selectedCurrency !== "USD" && (
                    <span className="text-gray-500 text-xs">≈ ${getSelectedPlan().price.toFixed(2)} USD</span>
                  )}
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl">{currencyFlags[selectedCurrency]}</span>
                  <span className="text-4xl md:text-5xl font-black text-white">
                    {formatNumber(calculatePrice())}
                  </span>
                  <span className="text-lg text-gray-500 font-medium">{selectedCurrency}</span>
                </div>
                <div className="mt-2 text-gray-500 text-xs">pago único</div>
              </div>

              {/* Info & Actions */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border border-white/10 rounded-xl bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400 text-sm">
                      Última actualización: {lastUpdate.toLocaleTimeString("es-ES")}
                    </span>
                  </div>
                  <button
                    onClick={fetchExchangeRates}
                    className="p-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                    title="Actualizar tasas"
                  >
                    <RefreshCw className="w-4 h-4 text-gray-400" />
                  </button>
                </div>

                {error && (
                  <div className="p-4 border border-yellow-500/20 rounded-xl bg-yellow-500/5">
                    <p className="text-yellow-400 text-sm">{error}</p>
                  </div>
                )}

                {/* CTA Button */}
                <a
                  href="https://discord.com/invite/7Vz4YBamFG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Consultar por Discord
                </a>

                <p className="text-center text-gray-500 text-sm">
                  Contactanos para coordinar el pago
                </p>
              </div>
            </>
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-xs">
            * Las tasas de cambio se actualizan cada 5 minutos. El precio final incluye un margen del 3% para cubrir comisiones de cambio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurrencyCalculator;
