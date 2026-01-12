import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Zap, Shield, Wifi, Server, Users } from "lucide-react";

interface EpicRustLoaderProps {
  logoUrl?: string;
  onLoadComplete?: () => void;
}

const EpicRustLoader: React.FC<EpicRustLoaderProps> = ({ logoUrl = "/img1.webp", onLoadComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Inicializando...");
  const [isVisible, setIsVisible] = useState(true);
  const [lettersVisible, setLettersVisible] = useState(false);

  // Memoizar valores estáticos
  const titleText = useMemo(() => "LATAM RUST".split(""), []);
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${8 + Math.random() * 4}s`,
        emoji: ["⚡", "🔥", "⚔️", "🛡️", "💎", "🏆", "💰", "🗡️", "🎯", "🚀"][Math.floor(Math.random() * 10)],
        color: ["#ff6b3560", "#f7931e60", "#ffdc0060", "#00d4aa60", "#0099e560"][Math.floor(Math.random() * 5)],
        size: `${1 + Math.random() * 1.5}rem`,
      })),
    []
  );

  const lightningBolts = useMemo(
    () =>
      Array.from({ length: 2 }, (_, i) => ({
        id: i,
        delay: `${i * 3}s`,
      })),
    []
  );

  const gears = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`,
        delay: `${i * 2}s`,
        duration: `${15 + i * 3}s`,
      })),
    []
  );

  const loadingSteps = useMemo(
    () => [
      { progress: 15, text: "Conectando al servidor...", duration: 800 },
      { progress: 35, text: "Verificando archivos...", duration: 600 },
      { progress: 55, text: "Cargando mundo...", duration: 700 },
      { progress: 75, text: "Sincronizando jugadores...", duration: 500 },
      { progress: 90, text: "Preparando experiencia...", duration: 400 },
      { progress: 100, text: "¡Listo para jugar!", duration: 300 },
    ],
    []
  );

  // Simulación de carga optimizada
  const simulateLoading = useCallback(() => {
    let currentStep = 0;
    const progressInterval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        const step = loadingSteps[currentStep];
        setLoadingProgress(step.progress);
        setLoadingText(step.text);
        currentStep++;
      } else {
        clearInterval(progressInterval);
        setTimeout(() => {
          setIsVisible(false);
          onLoadComplete?.();
        }, 1000);
      }
    }, 800);

    return () => clearInterval(progressInterval);
  }, [loadingSteps, onLoadComplete]);

  useEffect(() => {
    const letterTimer = setTimeout(() => setLettersVisible(true), 500);
    simulateLoading();
    return () => clearTimeout(letterTimer);
  }, [simulateLoading]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Circuit pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%2229%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse opacity-40" />

        {/* Floating gaming particles - reducidas de 30 a 20 */}
        {particles.map(({ id, left, top, delay, duration, emoji, color, size }) => (
          <div
            key={id}
            className="absolute animate-float-particles"
            style={{
              left,
              top,
              animationDelay: delay,
              animationDuration: duration,
              fontSize: size,
              color,
            }}
          >
            {emoji}
          </div>
        ))}

        {/* Rotating gears - reducidas de 4 a 3 */}
        {gears.map(({ id, left, top, delay, duration }) => (
          <div
            key={id}
            className="absolute w-24 h-24 border-4 border-orange-500/20 rounded-full animate-spin-slow opacity-30"
            style={{
              left,
              top,
              animationDelay: delay,
              animationDuration: duration,
            }}
          >
            <div className="absolute inset-4 border-2 border-red-500/30 rounded-full animate-spin-reverse" />
          </div>
        ))}

        {/* Lightning effects - reducidos de 3 a 2 */}
        {lightningBolts.map(({ id, delay }) => (
          <div
            key={id}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent transform -skew-x-12 animate-lightning opacity-50"
            style={{
              animationDelay: delay,
              animationDuration: "4s",
            }}
          />
        ))}

        {/* Glowing orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 md:w-40 md:h-40 bg-orange-500/10 rounded-full blur-xl md:blur-2xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-24 h-24 md:w-32 md:h-32 bg-red-500/10 rounded-full blur-xl md:blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-60 md:h-60 bg-yellow-500/5 rounded-full blur-2xl md:blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative text-center max-w-md mx-auto px-6 md:px-8 w-full">
        {/* Epic Logo with Custom Image */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="relative group">
            {/* Outer spinning rings */}
            <div className="absolute -inset-6 md:-inset-8 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 rounded-full opacity-75 animate-spin-slow" />
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 rounded-full opacity-50 animate-spin-reverse" />
            <div
              className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 rounded-full opacity-25 animate-spin-slow"
              style={{ animationDuration: "12s" }}
            />

            {/* Main logo container with custom image */}
            <div className="relative w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-orange-500 via-red-600 to-yellow-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg md:shadow-2xl transform hover:scale-110 transition-all duration-300 overflow-hidden">
              <img
                src={logoUrl}
                alt="LATAM RUST Logo"
                className="w-full h-full object-cover rounded-xl md:rounded-2xl animate-pulse"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.nextElementSibling?.classList.remove("hidden");
                }}
                loading="lazy"
              />
              {/* Fallback text si la imagen no carga */}
              <div className="hidden absolute inset-0 flex items-center justify-center text-white font-bold text-xl md:text-2xl">
                LR
              </div>

              {/* Overlay brillante */}
              <div className="absolute inset-0 bg-white/20 rounded-xl md:rounded-2xl animate-pulse" />
            </div>

            {/* Status indicators */}
            <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-green-500 rounded-full animate-ping" />
            <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-green-400 rounded-full animate-pulse" />

            {/* Floating elements around logo */}
            <Zap
              className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 text-yellow-400 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            />
            <Shield
              className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 text-blue-400 animate-bounce"
              style={{ animationDelay: "1s" }}
            />
            <Server
              className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-3 h-3 md:w-5 md:h-5 text-green-400 animate-bounce"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
        </div>

        {/* Animated Title */}
        <div className="mb-6 md:mb-8">
          <div className="flex justify-center text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-3 md:mb-4">
            {titleText.map((letter, index) => (
              <span
                key={index}
                className={`inline-block transform transition-all duration-500 ${
                  lettersVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                } ${letter === " " ? "w-2 md:w-4" : ""} ${
                  index >= 6 ? "text-yellow-400" : "text-white"
                } hover:scale-110 cursor-default animate-glow`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  textShadow: "0 0 20px rgba(255, 165, 0, 0.8), 0 0 40px rgba(255, 165, 0, 0.4)",
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-2 md:space-x-3 text-orange-200 font-bold tracking-wider md:tracking-widest uppercase text-sm md:text-base">
            <div className="flex space-x-0.5 md:space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.4}s` }}
                />
              ))}
            </div>
            <span className="animate-pulse">Servidor Pirata</span>
            <div className="flex space-x-0.5 md:space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.4 + 1.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Loading Progress */}
        <div className="mb-6 md:mb-8">
          {/* Progress Bar Container */}
          <div className="relative w-full h-3 md:h-4 bg-gray-800 rounded-full overflow-hidden mb-4 md:mb-6 shadow-inner">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 animate-pulse" />

            {/* Progress fill */}
            <div
              className="relative h-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full transition-all duration-500 ease-out shadow-md md:shadow-lg"
              style={{ width: `${loadingProgress}%` }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />

              {/* Sparks */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping"
                    style={{
                      right: `${i * 2}px`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Percentage text */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-xs md:text-sm font-bold">
              {loadingProgress}%
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-center">
            <p className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 animate-pulse">{loadingText}</p>
            <div className="flex justify-center space-x-1 md:space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 md:w-3 md:h-3 bg-orange-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Server Status Indicators */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 text-center">
          <div className="bg-green-900/30 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-4 border border-green-500/30">
            <Wifi className="w-5 h-5 md:w-6 md:h-6 text-green-400 mx-auto mb-1 md:mb-2 animate-pulse" />
            <div className="text-green-400 font-bold text-xs md:text-sm">Conexión</div>
            <div className="text-green-300 text-xxs md:text-xs">Estable</div>
          </div>

          <div className="bg-blue-900/30 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-4 border border-blue-500/30">
            <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-400 mx-auto mb-1 md:mb-2 animate-pulse" />
            <div className="text-blue-400 font-bold text-xs md:text-sm">Jugadores</div>
            <div className="text-blue-300 text-xxs md:text-xs">247 Online</div>
          </div>

          <div className="bg-yellow-900/30 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-4 border border-yellow-500/30">
            <Server className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 mx-auto mb-1 md:mb-2 animate-pulse" />
            <div className="text-yellow-400 font-bold text-xs md:text-sm">Servidor</div>
            <div className="text-yellow-300 text-xxs md:text-xs">32ms</div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style >{`
        @keyframes float-particles {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-20px) rotate(90deg) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px) rotate(180deg) scale(0.8);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-20px) rotate(270deg) scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes lightning {
          0% {
            transform: translateX(-100%) skewX(-12deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%) skewX(-12deg);
            opacity: 0;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 15px rgba(255, 165, 0, 0.8), 0 0 30px rgba(255, 165, 0, 0.4);
          }
          50% {
            text-shadow: 0 0 25px rgba(255, 165, 0, 1), 0 0 50px rgba(255, 165, 0, 0.6);
          }
        }

        .animate-float-particles {
          animation: float-particles 8s ease-in-out infinite;
        }

        .animate-lightning {
          animation: lightning 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 10s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default React.memo(EpicRustLoader);
