import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, DollarSign } from 'lucide-react';
import { useCurrency } from '../../context/CurrencyContext';
import { SUPPORTED_CURRENCIES } from '../../Libs/currencyService';

const CurrencySelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedCurrency, setSelectedCurrency } = useCurrency();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentCurrency = SUPPORTED_CURRENCIES[selectedCurrency as keyof typeof SUPPORTED_CURRENCIES] || SUPPORTED_CURRENCIES.USD;

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectCurrency = (currencyCode: string) => {
    setSelectedCurrency(currencyCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-gray-800/80 to-gray-900/80 hover:from-gray-700/80 hover:to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-lg transition-all duration-300 group"
        aria-label="Seleccionar moneda"
      >
        <DollarSign className="w-4 h-4 text-red-400" />
        <span className="text-white font-semibold text-sm hidden sm:inline">
          {currentCurrency.flag} {currentCurrency.code}
        </span>
        <span className="text-white font-semibold text-sm sm:hidden">
          {currentCurrency.flag}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden z-50 animate-fade-in">
          <div className="p-2">
            <div className="text-xs text-gray-400 px-3 py-2 font-semibold uppercase tracking-wider">
              Selecciona tu moneda
            </div>
            
            {/* Currency List */}
            <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-800">
              {Object.entries(SUPPORTED_CURRENCIES).map(([code, currency]) => (
                <button
                  key={code}
                  onClick={() => handleSelectCurrency(code)}
                  className={`w-full text-left px-3 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                    selectedCurrency === code
                      ? 'bg-red-600/20 border border-red-500/30'
                      : 'hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{currency.flag}</span>
                    <div>
                      <div className="text-white font-semibold text-sm">{currency.code}</div>
                      <div className="text-gray-400 text-xs">{currency.name}</div>
                    </div>
                  </div>
                  
                  {selectedCurrency === code && (
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Info Footer */}
            <div className="mt-2 px-3 py-2 bg-gray-800/50 rounded-lg">
              <p className="text-xs text-gray-400 text-center">
                💱 Tasas actualizadas diariamente
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CSS para scrollbar personalizado */}
      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #dc2626;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #ef4444;
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CurrencySelector;
