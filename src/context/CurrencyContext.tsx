import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { getExchangeRates, convertPrice, formatPrice, SUPPORTED_CURRENCIES } from '../Libs/currencyService';
import type { ExchangeRates } from '../Libs/currencyService';

interface CurrencyContextType {
  selectedCurrency: string;
  rates: ExchangeRates;
  isLoading: boolean;
  setSelectedCurrency: (currency: string) => void;
  convertFromUSD: (priceUSD: number) => number;
  formatAmount: (amount: number, currency?: string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCurrency, setSelectedCurrencyState] = useState<string>('USD');
  const [rates, setRates] = useState<ExchangeRates>({ USD: 1 });
  const [isLoading, setIsLoading] = useState(true);

  // Cargar moneda guardada del localStorage
  useEffect(() => {
    const savedCurrency = localStorage.getItem('selected_currency');
    if (savedCurrency && SUPPORTED_CURRENCIES[savedCurrency as keyof typeof SUPPORTED_CURRENCIES]) {
      setSelectedCurrencyState(savedCurrency);
    }
  }, []);

  // Cargar tasas de cambio al iniciar
  useEffect(() => {
    const loadRates = async () => {
      setIsLoading(true);
      try {
        const data = await getExchangeRates();
        setRates(data.rates);
      } catch (error) {
        console.error('Error loading exchange rates:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadRates();
  }, []);

  const setSelectedCurrency = (currency: string) => {
    setSelectedCurrencyState(currency);
    localStorage.setItem('selected_currency', currency);
  };

  const convertFromUSD = (priceUSD: number): number => {
    return convertPrice(priceUSD, selectedCurrency, rates);
  };

  const formatAmount = (amount: number, currency?: string): string => {
    return formatPrice(amount, currency || selectedCurrency);
  };

  return (
    <CurrencyContext.Provider
      value={{
        selectedCurrency,
        rates,
        isLoading,
        setSelectedCurrency,
        convertFromUSD,
        formatAmount,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
