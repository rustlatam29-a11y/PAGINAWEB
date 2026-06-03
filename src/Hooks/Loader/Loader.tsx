import React, { useState, useEffect } from "react";

interface LoaderProps {
  logoUrl?: string;
  onLoadComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ logoUrl = "/LATAMLOGO.webp", onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 15;
        const newProgress = Math.min(prev + increment, 100);

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              if (onLoadComplete) onLoadComplete();
            }, 500);
          }, 600);
        }

        return newProgress;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-[#070d1b] flex items-center justify-center z-50 transition-opacity duration-500"
      style={{ opacity: progress >= 100 ? 0 : 1 }}>
      
      <div className="text-center px-6">
        {/* Logo */}
        <img
          src={logoUrl}
          alt="LATAMRUST"
          className="w-20 h-20 rounded-2xl mx-auto mb-6 object-cover"
        />

        {/* Text */}
        <h1 className="text-white font-black text-2xl tracking-tight mb-1">
          Paraguay<span className="text-orange-500">RAIDER</span>
        </h1>
        <p className="text-gray-500 text-xs tracking-widest uppercase mb-8">
          Servidores y Plugins de Rust
        </p>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-gray-600 text-xs mt-4">ParaguayDev</p>
      </div>
    </div>
  );
};

export default Loader;
