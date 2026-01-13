// Servicio de conversión de divisas usando exchangerate-api.com
export interface ExchangeRates {
  [key: string]: number;
}

export interface CurrencyData {
  base: string;
  rates: ExchangeRates;
  timestamp: number;
}

export const SUPPORTED_CURRENCIES = {
  USD: { code: 'USD', symbol: '$', name: 'Dólar', flag: '🇺🇸' },
  ARS: { code: 'ARS', symbol: '$', name: 'Peso Argentino', flag: '🇦🇷' },
  BRL: { code: 'BRL', symbol: 'R$', name: 'Real Brasileiro', flag: '🇧🇷' },
  CLP: { code: 'CLP', symbol: '$', name: 'Peso Chileno', flag: '🇨🇱' },
  MXN: { code: 'MXN', symbol: '$', name: 'Peso Mexicano', flag: '🇲🇽' },
  COP: { code: 'COP', symbol: '$', name: 'Peso Colombiano', flag: '🇨🇴' },
  PEN: { code: 'PEN', symbol: 'S/', name: 'Sol Peruano', flag: '🇵🇪' },
  UYU: { code: 'UYU', symbol: '$', name: 'Peso Uruguayo', flag: '🇺🇾' },
  PYG: { code: 'PYG', symbol: '₲', name: 'Guaraní', flag: '🇵🇾' },
};

const API_URL = 'https://open.exchangerate-api.com/v6/latest/USD';
const CACHE_KEY = 'currency_rates_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 horas

// Obtener tasas de cambio (con cache)
export const getExchangeRates = async (): Promise<CurrencyData> => {
  try {
    // Verificar cache
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const data: CurrencyData = JSON.parse(cached);
      const now = Date.now();
      
      // Si el cache es válido (menos de 24h), usarlo
      if (now - data.timestamp < CACHE_DURATION) {
        return data;
      }
    }

    // Fetch nuevas tasas
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Error fetching exchange rates');
    }

    const apiData = await response.json();
    
    const currencyData: CurrencyData = {
      base: 'USD',
      rates: apiData.rates,
      timestamp: Date.now(),
    };

    // Guardar en cache
    localStorage.setItem(CACHE_KEY, JSON.stringify(currencyData));

    return currencyData;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    
    // Si hay error, intentar usar cache antiguo
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }

    // Fallback: retornar tasas de 1:1
    return {
      base: 'USD',
      rates: { USD: 1 },
      timestamp: Date.now(),
    };
  }
};

// Convertir precio de USD a otra moneda
export const convertPrice = (
  priceUSD: number,
  targetCurrency: string,
  rates: ExchangeRates
): number => {
  if (targetCurrency === 'USD') return priceUSD;
  
  const rate = rates[targetCurrency];
  if (!rate) return priceUSD;
  
  return priceUSD * rate;
};

// Formatear precio con símbolo de moneda
export const formatPrice = (
  amount: number,
  currencyCode: string
): string => {
  const currency = SUPPORTED_CURRENCIES[currencyCode as keyof typeof SUPPORTED_CURRENCIES];
  if (!currency) return `$${amount.toFixed(2)}`;

  // Formateo especial para cada moneda
  const formatted = new Intl.NumberFormat('es-AR', {
    minimumFractionDigits: currencyCode === 'CLP' || currencyCode === 'COP' || currencyCode === 'PYG' ? 0 : 2,
    maximumFractionDigits: currencyCode === 'CLP' || currencyCode === 'COP' || currencyCode === 'PYG' ? 0 : 2,
  }).format(amount);

  return `${currency.symbol} ${formatted}`;
};
