import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Cloud,
  Server,
  Shield,
  Zap,
  Users,
  Globe,
  ArrowRight,
  Star,
  CheckCircle,
  Wifi,
  MessageCircle,
} from "lucide-react";

// Componentes memoizados para evitar re-renderizados innecesarios
const FeatureIcon: React.FC<{ icon: React.ReactNode; text: string }> = React.memo(({ icon, text }) => (
  <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-600/30 hover:bg-white/10 transition-all duration-300 transform hover:scale-110">
    <div className="text-slate-400">{icon}</div>
    <span className="text-white font-bold text-sm md:text-base">{text}</span>
  </div>
));

const StatCard: React.FC<{
  icon: React.ReactNode;
  value: string | number;
  label: string;
  animate: boolean;
}> = React.memo(({ icon, value, label, animate }) => (
  <div
    className={`text-center p-3 md:p-4 bg-white/5 rounded-xl border border-slate-700/30 hover:bg-white/10 transition-all duration-300 transform ${
      animate ? "hover:scale-105" : ""
    }`}
  >
    <div className="flex justify-center mb-1 md:mb-2">{icon}</div>
    <div className="text-xl md:text-2xl font-black text-white">{value}</div>
    <div className="text-slate-300 text-xs md:text-sm font-medium">{label}</div>
  </div>
));

const FeatureCard: React.FC<{
  title: string;
  subtitle: string;
  color: string;
}> = React.memo(({ title, subtitle, color }) => (
  <div
    className={`bg-gradient-to-r ${color} p-3 md:p-4 rounded-lg md:rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.03] transition-all duration-300`}
  >
    <h4 className="text-white font-bold text-base md:text-lg">{title}</h4>
    <p className="text-white/80 text-xs md:text-sm">{subtitle}</p>
  </div>
));

const BenefitItem: React.FC<{ text: string }> = React.memo(({ text }) => (
  <div className="flex items-center space-x-2">
    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-slate-400" />
    <span className="text-slate-200 text-xs md:text-sm font-medium">{text}</span>
  </div>
));

// Componente de fondo optimizado con efectos animados
const OptimizedBackground: React.FC<{ isVisible: boolean }> = React.memo(({ isVisible }) => {
  // Elementos flotantes optimizados
  const floatingElements = useMemo(() => {
    const symbols = ["</", "/>", "{}", "[]", "()", "<>", "&&", "||", "==", "!="];
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
    }));
  }, []);

  return (
    <>
      {/* Gradiente base */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-gray-900 to-black" />
      
      {/* Matrix-style grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M0 0h40v40H0zM40 40h40v40H40z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      {/* Floating code symbols */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className={`absolute text-xl font-mono text-green-400/20 ${
            isVisible ? "animate-float-code" : "opacity-0"
          }`}
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
        >
          {element.symbol}
        </div>
      ))}

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Electric lines */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={`absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent ${
            isVisible ? "animate-electric-line" : "opacity-0"
          }`}
          style={{
            top: `${20 + i * 30}%`,
            left: "0",
            right: "0",
            animationDelay: `${i * 2}s`,
            animationDuration: "4s",
          }}
        />
      ))}
    </>
  );
});

const SkyHostingCollaboration: React.FC = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentUptime, setCurrentUptime] = useState(99.98);

  // Memoizar valores estáticos
  const heroText = useMemo(() => "SKYHOSTING".split(""), []);
  const subText = useMemo(() => "Tu aliado estratégico en soluciones de hosting premium".split(""), []);

  // Simulación de uptime optimizada
  const simulateUptime = useCallback(() => {
    setCurrentUptime((prev) => Math.min(99.99, prev + Math.random() * 0.01));
  }, []);

  useEffect(() => {
    const textTimer = setTimeout(() => setTextVisible(true), 800);
    const statsTimer = setTimeout(() => setStatsVisible(true), 1400);
    const uptimeInterval = setInterval(simulateUptime, 5000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(statsTimer);
      clearInterval(uptimeInterval);
    };
  }, [simulateUptime]);

  return (
    <section className="relative min-h-[80vh] md:min-h-screen overflow-hidden flex items-center" id="collaboration">
      {/* Fondo optimizado */}
      <OptimizedBackground isVisible={textVisible} />

      {/* Capa de fondo oscura */}
      
      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Columna izquierda - Contenido principal */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            {/* Partnership Badge */}
            <div
              className={`inline-flex items-center space-x-2 bg-gradient-to-r from-slate-700/30 to-blue-800/30 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full border border-slate-500/40 transform transition-all duration-700 ${
                textVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              <span className="text-slate-300 font-bold text-xs md:text-sm">COLABORACIÓN ESTRATÉGICA</span>
            </div>

            {/* Título principal */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-wrap justify-center lg:justify-start gap-1 md:gap-2">
                {heroText.map((letter, index) => (
                  <span
                    key={index}
                    className={`inline-block text-4xl sm:text-5xl lg:text-6xl font-black transform transition-all duration-500 ${
                      textVisible ? "translate-y-0 opacity-100 text-white" : "translate-y-12 opacity-0"
                    } hover:text-slate-300 cursor-default ${letter === " " ? "w-3 md:w-4" : ""}`}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                      textShadow: "0 0 20px rgba(71, 85, 105, 0.8), 0 0 40px rgba(30, 64, 175, 0.6)",
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>

              {/* Subtítulo */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-1">
                {subText.map((letter, index) => (
                  <span
                    key={index}
                    className={`inline-block text-base md:text-lg lg:text-xl font-bold transform transition-all duration-300 ${
                      textVisible ? "translate-y-0 opacity-100 text-slate-300" : "translate-y-8 opacity-0"
                    } ${letter === " " ? "w-1 md:w-2" : ""}`}
                    style={{
                      transitionDelay: `${800 + index * 20}ms`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>

            {/* Iconos de características */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 transform transition-all duration-700 ${
                textVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "1.2s" }}
            >
              <FeatureIcon icon={<Cloud className="w-5 h-5 md:w-6 md:h-6" />} text="Cloud" />
              <FeatureIcon icon={<Shield className="w-5 h-5 md:w-6 md:h-6" />} text="Seguridad" />
              <FeatureIcon icon={<Zap className="w-5 h-5 md:w-6 md:h-6" />} text="Velocidad" />
              <FeatureIcon icon={<Globe className="w-5 h-5 md:w-6 md:h-6" />} text="Global" />
            </div>

            {/* Botones de acción */}
            <div
              className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start transform transition-all duration-700 ${
                textVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "1.5s" }}
            >
              <a
                href="https://skyhostingcloud.com/services"
                className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-slate-600 via-slate-700 to-blue-800 text-white font-bold md:font-black text-base md:text-lg rounded-xl md:rounded-2xl shadow-lg transform hover:scale-[1.03] transition-all duration-300 overflow-hidden inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center space-x-2 md:space-x-3">
                  <Cloud className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-pulse" />
                  <span>CONTRATAR HOSTING</span>
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>

              <a
                href="https://skyhostingcloud.com/pricing"
                className="group relative px-6 py-3 md:px-8 md:py-4 bg-white/5 text-white font-bold text-base md:text-lg rounded-xl md:rounded-2xl backdrop-blur-sm border border-slate-600/40 hover:border-slate-400 hover:bg-slate-700/30 transform hover:scale-[1.03] transition-all duration-300 inline-block"
              >
                <span className="flex items-center space-x-2 md:space-x-3">
                  <Server className="w-5 h-5 md:w-6 md:h-6" />
                  <span>VER PLANES</span>
                </span>
              </a>
            </div>

            {/* Botón de Discord */}
            <div
              className={`flex justify-center lg:justify-start transform transition-all duration-700 ${
                textVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "1.8s" }}
            >
              <a
                href="https://discord.gg/wtMDBEJ5tc"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-bold text-sm md:text-base rounded-xl md:rounded-2xl shadow-lg transform hover:scale-[1.03] transition-all duration-300 overflow-hidden inline-block"
              >
                <span className="relative flex items-center space-x-2 md:space-x-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                    <path d="M8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span>ÚNETE A DISCORD</span>
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>

          {/* Columna derecha - Estadísticas */}
          <div className="space-y-6 md:space-y-8">
            {/* Tarjeta de estado del servidor */}
            <div
              className={`bg-black/30 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 border border-slate-700/40 shadow-lg transform transition-all duration-700 ${
                statsVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
              }`}
            >
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">Estado de Servidores</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-ping" />
                  <span className="text-green-400 font-bold text-sm md:text-base">OPERATIVO</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <StatCard
                  icon={<Wifi className="w-6 h-6 md:w-8 md:h-8 text-slate-400" />}
                  value={`${currentUptime.toFixed(2)}%`}
                  label="Uptime"
                  animate={statsVisible}
                />
                <StatCard
                  icon={<Server className="w-6 h-6 md:w-8 md:h-8 text-slate-400" />}
                  value="1,247"
                  label="Servidores"
                  animate={statsVisible}
                />
                <StatCard
                  icon={<Users className="w-6 h-6 md:w-8 md:h-8 text-slate-400" />}
                  value="50K+"
                  label="Clientes"
                  animate={statsVisible}
                />
                <StatCard
                  icon={<Zap className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />}
                  value="<1ms"
                  label="Latencia"
                  animate={statsVisible}
                />
              </div>
            </div>

            {/* Características de hosting */}
            <div
              className={`grid grid-cols-2 gap-3 md:gap-4 transform transition-all duration-700 ${
                statsVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              <FeatureCard
                title="SSD NVMe"
                subtitle="Almacenamiento ultra rápido"
                color="from-slate-600 to-slate-700"
              />
              <FeatureCard title="CDN Global" subtitle="Distribución mundial" color="from-blue-800 to-blue-900" />
              <FeatureCard title="SSL Gratuito" subtitle="Certificados incluidos" color="from-slate-700 to-slate-800" />
              <FeatureCard title="Soporte 24/7" subtitle="Asistencia premium" color="from-blue-700 to-blue-800" />
            </div>

            {/* Beneficios de colaboración */}
            <div
              className={`bg-gradient-to-r from-slate-700/30 to-blue-800/30 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-600/40 transform transition-all duration-700 ${
                statsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              <div className="text-center mb-3 md:mb-4">
                <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Beneficios de la Colaboración</h4>
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <BenefitItem text="Descuentos exclusivos" />
                <BenefitItem text="Soporte prioritario" />
                <BenefitItem text="Recursos dedicados" />
                <BenefitItem text="Migración gratuita" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkyHostingCollaboration;