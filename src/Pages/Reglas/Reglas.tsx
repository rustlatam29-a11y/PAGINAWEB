import React, { useState, useEffect, useMemo } from "react";
import { Shield, AlertTriangle, Ban, Eye, Scale, Users, FileText, CheckCircle, XCircle } from "lucide-react";

// Componente para iconos de reglas
const RuleIcon: React.FC<{ icon: React.ReactNode; color: string }> = React.memo(({ icon, color }) => (
  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300`}>
    {icon}
  </div>
));

// Componente para cada regla
const RuleCard: React.FC<{
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  subtitle: string;
  items: string[];
  note?: string;
  index: number;
  isVisible: boolean;
}> = React.memo(({ icon, iconColor, title, subtitle, items, note, index, isVisible }) => (
  <div
    className={`bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl transform transition-all duration-1000 hover:bg-black/50 hover:border-orange-400/40 hover:shadow-2xl hover:scale-105 ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
    }`}
    style={{ transitionDelay: `${index * 200}ms` }}
  >
    <div className="flex items-start space-x-4 mb-4">
      <RuleIcon icon={icon} color={iconColor} />
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-orange-200 text-sm font-medium">{subtitle}</p>
      </div>
    </div>
    
    <div className="space-y-3">
      {items.map((item, itemIndex) => (
        <div key={itemIndex} className="flex items-start space-x-3 group">
          <div className="flex-shrink-0 w-2 h-2 bg-orange-400 rounded-full mt-2 group-hover:bg-yellow-400 transition-colors duration-300" />
          <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
            {item}
          </p>
        </div>
      ))}
    </div>
    
    {note && (
      <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
        <p className="text-yellow-200 text-xs italic font-medium">
          <span className="text-yellow-400">Nota:</span> {note}
        </p>
      </div>
    )}
  </div>
));

// Componente para estadísticas de políticas
const PolicyStat: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
  color: string;
  isVisible: boolean;
  index: number;
}> = React.memo(({ icon, label, value, description, color, isVisible, index }) => (
  <div
    className={`text-center p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-black/40 hover:border-white/40 transition-all duration-300 transform hover:scale-105 ${
      isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
    }`}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    <div className={`flex justify-center mb-3 text-${color}-400`}>
      {icon}
    </div>
    <div className={`text-2xl font-black text-${color}-400 mb-1`}>
      {value}
    </div>
    <div className="text-white text-sm font-bold mb-1">{label}</div>
    <div className="text-gray-400 text-xs">{description}</div>
  </div>
));

const RulesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => setTitleVisible(true), 300);
    const contentTimer = setTimeout(() => setIsVisible(true), 800);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  // Generar partículas flotantes
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${6 + Math.random() * 4}s`,
      })),
    []
  );

  const rulesData = [
    {
      icon: <Ban className="w-6 h-6 text-white" />,
      iconColor: "from-red-500 to-red-600",
      title: "Prohibiciones Generales",
      subtitle: "Software externo y herramientas prohibidas",
      items: [
        "Está estrictamente prohibido usar software o herramientas externas (gratuitas o pagas) que den ventajas injustas",
        "Hacks de combate, recolección o construcción",
        "Scripts, macros, auto-clickers",
        "Software que modifique el comportamiento del juego"
      ],
      note: "Incluso scripts de recoil son considerados cheating y resultarán en baneo permanente"
    },
    {
      icon: <Eye className="w-6 h-6 text-white" />,
      iconColor: "from-blue-500 to-blue-600",
      title: "Verificaciones y Baneos",
      subtitle: "Proceso de verificación y políticas de baneo",
      items: [
        "Jugadores sospechosos deben pasar verificación del staff obligatoriamente",
        "Negarse o evadir la verificación = baneo permanente inmediato",
        "VAC: Prohibido con bans menores a 120 días",
        "EAC (Rust): Prohibido con bans menores a 365 días",
        "Solo 1 cuenta con historial EAC permitido por jugador"
      ]
    },
    {
      icon: <Scale className="w-6 h-6 text-white" />,
      iconColor: "from-purple-500 to-purple-600",
      title: "Responsabilidad y Apelaciones",
      subtitle: "Políticas de cuentas y proceso de apelación",
      items: [
        "Eres completamente responsable de tu cuenta - NO la compartas",
        "Evitar bans con cuentas alternas = baneo total en todas las cuentas",
        "Jugar con cheaters conocidos = baneo por asociación",
        "Las apelaciones deben incluir pruebas contundentes",
        "Solo se aceptan tickets oficiales para apelaciones"
      ]
    }
  ];

  const policyStats = [
    {
      icon: <Shield className="w-8 h-8" />,
      label: "Tolerancia",
      value: "0%",
      description: "Contra cheaters",
      color: "red"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      label: "Verificación",
      value: "100%",
      description: "Casos sospechosos",
      color: "green"
    },
    {
      icon: <XCircle className="w-8 h-8" />,
      label: "VAC Bans",
      value: "120d",
      description: "Tiempo mínimo",
      color: "orange"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      label: "EAC Bans",
      value: "365d",
      description: "Tiempo mínimo",
      color: "blue"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23dc2626\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2L78 40h-2z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        
        {/* Partículas flotantes */}
        {particles.map(({ id, left, top, delay, duration }) => (
          <div
            key={id}
            className="absolute w-1 h-1 bg-gradient-to-r from-red-400 to-orange-500 rounded-full animate-float-random"
            style={{
              left,
              top,
              animationDelay: delay,
              animationDuration: duration,
            }}
          />
        ))}

        {/* Orbes brillantes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex justify-center items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
                REGLAS DEL SERVIDOR
              </h2>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-xl text-orange-200 font-bold max-w-3xl mx-auto">
              LATAMRUST mantiene una política de tolerancia cero frente a trampas, software externo o conductas que comprometan la integridad y respeto
            </p>
          </div>
        </div>

        {/* Estadísticas de políticas */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          {policyStats.map((stat, index) => (
            <PolicyStat
              key={index}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              description={stat.description}
              color={stat.color}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>

        {/* Tarjetas de reglas */}
        <div className="grid lg:grid-cols-1 gap-8 mb-12">
          {rulesData.map((rule, index) => (
            <RuleCard
              key={index}
              icon={rule.icon}
              iconColor={rule.iconColor}
              title={rule.title}
              subtitle={rule.subtitle}
              items={rule.items}
              note={rule.note}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Mensaje final de advertencia */}
        <div
          className={`bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-red-500/40 text-center transform transition-all duration-1000 hover:scale-105 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "1.2s" }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            ¡Mantengamos la comunidad limpia y divertida para todos!
          </h3>
          <p className="text-orange-200 text-lg font-medium">
            El incumplimiento de estas reglas resultará en sanciones inmediatas. 
            Para reportar jugadores sospechosos o hacer consultas, contacta a nuestro staff oficial.
          </p>
        </div>
      </div>

      {/* Animaciones CSS personalizadas */}
      <style>{`
        @keyframes float-random {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translate(15px, -20px) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translate(-10px, -30px) rotate(180deg);
            opacity: 0.6;
          }
          75% {
            transform: translate(-20px, -15px) rotate(270deg);
            opacity: 1;
          }
        }

        .animate-float-random {
          animation: float-random 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default RulesSection;