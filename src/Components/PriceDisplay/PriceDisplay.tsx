import React from 'react';
import { useCurrency } from '../../context/CurrencyContext';

interface PriceDisplayProps {
  priceUSD: number;
  className?: string;
  showOriginal?: boolean;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ 
  priceUSD, 
  className = '', 
  showOriginal = true 
}) => {
  const { selectedCurrency, convertFromUSD, formatAmount } = useCurrency();
  
  const convertedPrice = convertFromUSD(priceUSD);
  const formattedPrice = formatAmount(convertedPrice);

  // Si la moneda es USD, solo mostrar el precio
  if (selectedCurrency === 'USD') {
    return (
      <span className={className}>
        ${priceUSD.toFixed(2)}
      </span>
    );
  }

  // Si la moneda es otra, mostrar conversión
  return (
    <div className="flex flex-col items-center">
      <span className={className}>
        {formattedPrice}
      </span>
      {showOriginal && (
        <span className="text-xs text-gray-400 mt-1">
          ≈ ${priceUSD.toFixed(2)} USD
        </span>
      )}
    </div>
  );
};

export default PriceDisplay;
