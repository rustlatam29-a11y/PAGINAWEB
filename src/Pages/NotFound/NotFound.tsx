import React, { useState, useEffect } from "react";
import {
  Gamepad2,
  Home,
  Search,
  AlertTriangle,
  Shield,
  Skull,
  Crosshair,
  Map,
  Users,
  Server,
  RefreshCw,
} from "lucide-react";

const EpicRustNotFound: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lettersVisible, setLettersVisible] = useState(false);
  const [errorCode, setErrorCode] = useState("404");
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    const lettersTimer = setTimeout(() => {
      setLettersVisible(true);
    }, 800);

    // Glitch effect every 3 seconds
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    // Random error code animation
    const codeInterval = setInterval(() => {
      const codes = ["404", "4Ø4", "4∅4", "404", "ERR"];
      setErrorCode(codes[Math.floor(Math.random() * codes.length)]);
      setTimeout(() => setErrorCode("404"), 150);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(lettersTimer);
      clearInterval(glitchInterval);
      clearInterval(codeInterval);
    };
  }, []);

  const titleText = "PÁGINA NO ENCONTRADA".split("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 overflow-hidden relative flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Apocalyptic pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2240%22%20height=%2240%22%20viewBox=%220%200%2040%2040%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ff0000%22%20fill-opacity=%220.03%22%3E%3Cpath%20d=%22M20%200l20%2020-20%2020L0%2020z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse opacity-30"></div>

        {/* Floating danger elements */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-2xl animate-float-danger ${glitchActive ? "animate-glitch" : ""}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 5}s`,
              color: ["#ff000060", "#ff4d0060", "#ff800060", "#ffcc0060", "#ffffff40"][Math.floor(Math.random() * 5)],
            }}
          >
            {["💀", "⚠️", "🔥", "💥", "⚡", "🚫", "❌", "💣", "🔴", "⭕"][Math.floor(Math.random() * 10)]}
          </div>
        ))}

        {/* Glitch lines */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-full h-px bg-red-500 opacity-20 ${
              glitchActive ? "animate-glitch-line" : "animate-pulse"
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        {/* Danger zones */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-red-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-10 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Lightning effects */}
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/10 to-transparent transform -skew-x-12 animate-lightning opacity-60"
            style={{
              animationDelay: `${i * 4}s`,
              animationDuration: "5s",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative text-center max-w-4xl mx-auto px-8 z-10">
        {/* Epic Error Logo */}
        <div className="flex justify-center mb-12">
          <div className="relative group">
            {/* Outer warning rings */}
            <div className="absolute -inset-8 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full opacity-75 animate-spin-slow"></div>
            <div className="absolute -inset-6 bg-gradient-to-r from-yellow-500 via-red-500 to-orange-600 rounded-full opacity-50 animate-spin-reverse"></div>

            {/* Main error container */}
            <div className="relative w-28 h-28 bg-gradient-to-br from-red-600 via-red-700 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-red-500/20 rounded-2xl animate-pulse"></div>
              <AlertTriangle className="w-14 h-14 text-white animate-pulse relative z-10" />

              {/* Danger indicators */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-500 rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            {/* Floating danger icons */}
            <Skull
              className="absolute -top-4 -left-4 w-6 h-6 text-red-400 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            />
            <Crosshair
              className="absolute -bottom-4 -right-4 w-5 h-5 text-orange-400 animate-bounce"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>

        {/* Giant 404 */}
        <div
          className={`mb-8 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-90"
          }`}
        >
          <div
            className={`text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mb-4 ${
              glitchActive ? "animate-glitch-text" : "animate-glow-error"
            }`}
          >
            {errorCode}
          </div>
          <div className="text-red-400 text-xl font-bold tracking-widest uppercase animate-pulse">ERROR CRÍTICO</div>
        </div>

        {/* Animated Title */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center text-3xl font-black tracking-tight mb-6">
            {titleText.map((letter, index) => (
              <span
                key={index}
                className={`inline-block transform transition-all duration-700 ${
                  lettersVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                } ${letter === " " ? "w-3" : ""} text-white hover:scale-110 cursor-default ${
                  glitchActive ? "animate-glitch" : ""
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  textShadow: "0 0 20px rgba(255, 0, 0, 0.5)",
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Error Messages */}
        <div
          className={`bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <Shield className="w-7 h-7 text-red-400 mr-3 animate-pulse" />
            ¡ZONA PELIGROSA DETECTADA!
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="text-lg font-bold text-orange-400 mb-3">🎯 Posibles Causas:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span>La página fue saqueada por raiders</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span>URL incorrecta o desactualizada</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span>Contenido movido a zona segura</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span>Mantenimiento del servidor</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-green-400 mb-3">🛡️ Acciones Recomendadas:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Regresar a la base segura</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Buscar en el mapa del sitio</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span>Contactar administradores</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span>Intentar recarga del mapa</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <ActionButton
            icon={<Home />}
            text="Volver al Inicio"
            color="from-green-600 to-green-700"
            hoverColor="hover:from-green-500 hover:to-green-600"
          />

          <ActionButton
            icon={<Search />}
            text="Buscar Contenido"
            color="from-blue-600 to-blue-700"
            hoverColor="hover:from-blue-500 hover:to-blue-600"
          />

          <ActionButton
            icon={<Map />}
            text="Mapa del Sitio"
            color="from-purple-600 to-purple-700"
            hoverColor="hover:from-purple-500 hover:to-purple-600"
          />

          <ActionButton
            icon={<RefreshCw />}
            text="Recargar"
            color="from-orange-600 to-red-600"
            hoverColor="hover:from-orange-500 hover:to-red-500"
          />
        </div>

        {/* Server Status */}
        <div
          className={`bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "1s" }}
        >
          <div className="flex items-center justify-center space-x-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <Server className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-green-400 font-bold text-sm">Servidor</span>
              <span className="text-green-300 text-xs">ONLINE</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-blue-400 font-bold text-sm">Jugadores</span>
              <span className="text-blue-300 text-xs">247 Activos</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                <Gamepad2 className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-yellow-400 font-bold text-sm">Estado</span>
              <span className="text-yellow-300 text-xs">Funcionando</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        @keyframes float-danger {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.3; 
          }
          25% { 
            transform: translateY(-25px) rotate(15deg) scale(1.1); 
            opacity: 0.7; 
          }
          50% { 
            transform: translateY(-50px) rotate(-15deg) scale(0.9); 
            opacity: 0.5; 
          }
          75% { 
            transform: translateY(-25px) rotate(10deg) scale(1.05); 
            opacity: 0.8; 
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
        
        @keyframes glitch {
          0%, 100% { 
            transform: translateX(0); 
          }
          10% { 
            transform: translateX(-2px) skewX(5deg); 
          }
          20% { 
            transform: translateX(2px) skewX(-5deg); 
          }
          30% { 
            transform: translateX(-1px) skewX(2deg); 
          }
          40% { 
            transform: translateX(1px) skewX(-2deg); 
          }
        }
        
        @keyframes glitch-text {
          0%, 100% { 
            transform: translateX(0); 
            filter: hue-rotate(0deg); 
          }
          10% { 
            transform: translateX(-5px) skewX(10deg); 
            filter: hue-rotate(90deg); 
          }
          20% { 
            transform: translateX(5px) skewX(-10deg); 
            filter: hue-rotate(180deg); 
          }
          30% { 
            transform: translateX(-3px) skewX(5deg); 
            filter: hue-rotate(270deg); 
          }
        }
        
        @keyframes glitch-line {
          0%, 100% { 
            transform: scaleX(0); 
            opacity: 0; 
          }
          50% { 
            transform: scaleX(1); 
            opacity: 0.5; 
          }
        }
        
        @keyframes glow-error {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 100, 0, 0.4); 
          }
          50% { 
            text-shadow: 0 0 30px rgba(255, 0, 0, 1), 0 0 60px rgba(255, 100, 0, 0.6); 
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-float-danger {
          animation: float-danger 10s ease-in-out infinite;
        }
        
        .animate-lightning {
          animation: lightning 5s ease-in-out infinite;
        }
        
        .animate-glitch {
          animation: glitch 0.3s ease-in-out infinite;
        }
        
        .animate-glitch-text {
          animation: glitch-text 0.5s ease-in-out infinite;
        }
        
        .animate-glitch-line {
          animation: glitch-line 0.2s ease-in-out infinite;
        }
        
        .animate-glow-error {
          animation: glow-error 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

// Action Button Component
const ActionButton: React.FC<{
  icon: React.ReactNode;
  text: string;
  color: string;
  hoverColor: string;
}> = ({ icon, text, color, hoverColor }) => {
  return (
    <button
      className={`group relative px-6 py-4 bg-gradient-to-r ${color} ${hoverColor} text-white font-bold rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden`}
    >
      {/* Button effects */}
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700"></div>

      <div className="relative flex flex-col items-center space-y-2">
        <div className="group-hover:scale-110 transition-transform duration-300">
          {React.cloneElement(icon as React.ReactElement)}
        </div>
        <span className="text-sm">{text}</span>
      </div>
    </button>
  );
};

export default EpicRustNotFound;
