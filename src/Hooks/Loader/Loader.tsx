import React, { useState, useEffect } from "react";

interface LoaderProps {
  onLoadComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
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
    <div
      className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50 transition-opacity duration-500"
      style={{ opacity: progress >= 100 ? 0 : 1 }}
    >
      <div className="text-center px-6">
        <img
          src="/loader-bg.webp"
          alt="Rust Pirata"
          width="80"
          height="80"
          className="w-20 h-20 rounded-2xl mx-auto mb-6 object-cover"
          decoding="async"
        />

        <p className="text-white font-black text-2xl tracking-tight mb-1">
          Paraguay<span className="text-red-500">RAIDER</span>
        </p>
        <p className="text-gray-500 text-xs tracking-widest uppercase mb-8">
          Servidores y Plugins de Rust
        </p>

        <div className="w-48 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
          <div
            className="h-full bg-red-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-gray-600 text-xs mt-4">ParaguayDev</p>
      </div>
    </div>
  );
};

export default Loader;
