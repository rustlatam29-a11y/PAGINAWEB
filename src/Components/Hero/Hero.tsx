import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Play, Users, Server, Zap, Trophy, Shield, Sword, Target, ArrowRight, Star } from "lucide-react";

// Componentes separados para mejor organización y re-renderizado
const FeatureIcon: React.FC<{ icon: React.ReactNode; text: string }> = React.memo(({ icon, text }) => (
  <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-red-900/30 hover:bg-red-950/40 hover:border-red-800/50 transition-all duration-300 transform hover:scale-110">
    <div className="text-red-400">{icon}</div>
    <span className="text-gray-100 font-bold">{text}</span>
  </div>
));

const StatCard: React.FC<{
  icon: React.ReactNode;
  value: string | number;
  label: string;
  max?: string;
  animate: boolean;
}> = React.memo(({ icon, value, label, max, animate }) => (
  <div
    className={`text-center p-4 bg-black/30 rounded-xl border border-red-900/20 hover:bg-black/40 hover:border-red-800/30 transition-all duration-300 transform ${
      animate ? "hover:scale-105" : ""
    }`}
  >
    <div className="flex justify-center mb-2">{icon}</div>
    <div className="text-2xl font-black text-white">
      {value}
      {max && <span className="text-sm text-gray-400">/{max}</span>}
    </div>
    <div className="text-gray-300 text-sm font-medium">{label}</div>
  </div>
));

const FeatureCard: React.FC<{
  title: string;
  subtitle: string;
  color: string;
}> = React.memo(({ title, subtitle, color }) => (
  <div
    className={`bg-gradient-to-r ${color} p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-red-900/20`}
  >
    <h4 className="text-white font-bold text-lg">{title}</h4>
    <p className="text-white/80 text-sm">{subtitle}</p>
  </div>
));

const Hero: React.FC = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(105);
  const [currentLatency, setCurrentLatency] = useState(32);
  const [isLoaded, setIsLoaded] = useState(false);

  // Memoizar valores que no cambian
  const heroText = useMemo(() => "RUST GRATIS".split(""), []);
  const subText = useMemo(() => "Servidor Pirata v2275 • Grátis BR•ES • Jogue Agora!".split(""), []);

  // Optimización del intervalo de jugadores
  const updatePlayerCount = useCallback(() => {
    setCurrentPlayer((prev) => {
      const change = Math.floor(Math.random() * 3) - 1;
      return Math.max(50, Math.min(160, prev + change)); // Limitar entre 50 y 160
    });
  }, []);

  // Optimización del intervalo de latencia
  const updateLatency = useCallback(() => {
    setCurrentLatency((prev) => {
      const change = Math.floor(Math.random() * 3) - 1;
      return Math.max(20, Math.min(50, prev + change)); // Limitar entre 20ms y 50ms
    });
  }, []);

  useEffect(() => {
    const loadTimer = setTimeout(() => setIsLoaded(true), 200);
    const textTimer = setTimeout(() => setTextVisible(true), 800);
    const statsTimer = setTimeout(() => setStatsVisible(true), 1400);

    const playerInterval = setInterval(updatePlayerCount, 3000);
    const latencyInterval = setInterval(updateLatency, 3000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(textTimer);
      clearTimeout(statsTimer);
      clearInterval(playerInterval);
      clearInterval(latencyInterval);
    };
  }, [updatePlayerCount, updateLatency]);

  // Generar partículas una sola vez
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${4 + Math.random() * 4}s`,
      })),
    []
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-red-950 to-neutral-950 overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Rust-themed background */}
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ff6b35\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

        {/* Floating particles */}
        {particles.map(({ id, left, top, delay, duration }) => (
          <div
            key={id}
            className={`absolute w-1 h-1 bg-gradient-to-r from-red-800 to-red-950 rounded-full ${
              isLoaded ? "animate-float-random" : "opacity-0"
            }`}
            style={{
              left,
              top,
              animationDelay: delay,
              animationDuration: duration,
            }}
          />
        ))}

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-red-950/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-neutral-900/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <div className="flex flex-wrap justify-center lg:justify-start gap-1 md:gap-2">
                {heroText.map((letter, index) => (
                  <span
                    key={index}
                    className={`inline-block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black transform transition-all duration-700 ${
                      textVisible ? "translate-y-0 opacity-100 text-white" : "translate-y-16 opacity-0"
                    } hover:scale-110 hover:text-red-400 cursor-default ${letter === " " ? "w-4 md:w-6" : ""}`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      textShadow: "0 0 30px rgba(127, 29, 29, 0.8), 0 0 60px rgba(0, 0, 0, 0.6)",
                      fontFamily: "Impact, Arial Black, sans-serif",
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>

              {/* Subtitle */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-1">
                {subText.map((letter, index) => (
                  <span
                    key={index}
                    className={`inline-block text-lg sm:text-xl lg:text-2xl font-bold transform transition-all duration-500 ${
                      textVisible ? "translate-y-0 opacity-100 text-gray-300" : "translate-y-8 opacity-0"
                    } ${letter === " " ? "w-1 md:w-2" : ""}`}
                    style={{
                      transitionDelay: `${800 + index * 30}ms`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature Icons */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 transform transition-all duration-1000 ${
                textVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "1.5s" }}
            >
              <FeatureIcon icon={<Sword className="w-5 h-5 md:w-6 md:h-6" />} text="PVP" />
              <FeatureIcon icon={<Shield className="w-5 h-5 md:w-6 md:h-6" />} text="Clanes" />
              <FeatureIcon icon={<Target className="w-5 h-5 md:w-6 md:h-6" />} text="Raids" />
              <FeatureIcon icon={<Trophy className="w-5 h-5 md:w-6 md:h-6" />} text="Eventos" />
            </div>

            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start transform transition-all duration-1000 ${
                textVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
              style={{ transitionDelay: "2s" }}
            >
              <a
                href="https://gofile.io/d/SR1o8T"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 text-white font-bold sm:font-black text-lg md:text-xl rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl transform hover:scale-105 sm:hover:scale-110 transition-all duration-300 overflow-hidden inline-block border border-green-800/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-transform duration-1000" />
                <span className="relative flex items-center space-x-5 sm:space-x-5">
                  <Play className="w-10 h-10 md:w-10 md:h-10 group-hover:animate-pulse" />
                  <span>DESCARGAR - BAIXAR</span>
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </a>
              <a
                href="https://www.youtube.com/watch?v=ZNTfR90nPtg"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-black/40 text-white font-bold text-lg md:text-xl rounded-xl md:rounded-2xl backdrop-blur-sm border-2 border-red-900/40 hover:border-red-700 hover:bg-red-950/40 transform hover:scale-105 transition-all duration-300 inline-block"
              >
                <span className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-current rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-4 border-l-current border-y-2 border-y-transparent ml-0.5 md:ml-1" />
                  </div>
                  <span>VER TRAILER</span>
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6 md:space-y-8">
            <div
              className={`bg-black/50 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 border border-red-900/30 shadow-xl md:shadow-2xl transform transition-all duration-1000 ${
                statsVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
            >
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">Estado del Servidor</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-ping" />
                  <span className="text-green-400 font-bold text-sm md:text-base">ONLINE</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <StatCard
                  icon={<Users className="w-6 h-6 md:w-8 md:h-8 text-red-400" />}
                  value={currentPlayer}
                  label="Jugadores"
                  max="160"
                  animate={statsVisible}
                />
                <StatCard
                  icon={<Server className="w-6 h-6 md:w-8 md:h-8 text-red-500" />}
                  value={`${currentLatency}ms`}
                  label="Latencia"
                  animate={statsVisible}
                />
                <StatCard
                  icon={<Zap className="w-6 h-6 md:w-8 md:h-8 text-red-400" />}
                  value="99.9%"
                  label="Uptime"
                  animate={statsVisible}
                />
                <StatCard
                  icon={<Star className="w-6 h-6 md:w-8 md:h-8 text-red-500" />}
                  value="4.9/5"
                  label="Rating"
                  animate={statsVisible}
                />
              </div>
            </div>

            {/* Server Features */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 transform transition-all duration-1000 ${
                statsVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              <FeatureCard title="Reinicio Semanal" subtitle="Mundo renovado cada 7 días" color="from-red-900 to-red-950" />
              <FeatureCard title="ANTI-DDOS" subtitle="Sistema anti-trampas avanzado" color="from-neutral-900 to-red-950" />
              <FeatureCard title="Actividades Diarias" subtitle="Eventos programados" color="from-red-950 to-black" />
              <FeatureCard title="Asistencia 24/7" subtitle="Equipo de soporte disponible" color="from-black to-red-900" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float-random {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.5;
          }
          25% {
            transform: translate(10px, -15px) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: translate(-5px, -25px) rotate(180deg);
            opacity: 0.7;
          }
          75% {
            transform: translate(-15px, -10px) rotate(270deg);
            opacity: 1;
          }
        }

        .animate-float-random {
          animation: float-random 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;