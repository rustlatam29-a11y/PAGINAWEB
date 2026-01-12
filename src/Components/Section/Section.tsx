import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  Crown,
  Code,
  Shield,
  Users,
  Zap,
  Star,
  Github,
  Twitter,
  Instagram,
  Award,
  Gamepad2,
  Coffee,
} from "lucide-react";

interface AboutProps {
  name?: string;
}

const About: React.FC<AboutProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Detectar tipo de dispositivo
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    checkDeviceType();
    const handleResize = () => {
      checkDeviceType();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: isMobile ? 0.1 : 0.3,
        rootMargin: isMobile ? "50px" : "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  const titleText = useMemo(() => "CONOCE AL EQUIPO".split(""), []);

  // Optimización de elementos flotantes - reducidos en móviles
  const floatingElements = useMemo(() => {
    const symbols = ["</", "/>", "{}", "[]", "()", "<>", "&&", "||", "==", "!="];
    const count = isMobile ? 8 : 15; // Menos elementos en móviles
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
    }));
  }, [isMobile]);

  return (
    <>
      {/* Divider Line */}
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>
      
      <section
        ref={sectionRef}
        className="relative py-6 sm:py-8 lg:py-10 overflow-hidden"
      >
      {/* Animated Background - Optimizado */}
      <div className="absolute inset-0">
        {/* Matrix-style grid - Simplificado en móviles */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M0 0h40v40H0zM40 40h40v40H40z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        {/* Floating code symbols - Optimizados */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={`absolute text-lg sm:text-xl lg:text-2xl font-mono text-green-400/20 ${
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

        {/* Glowing orbs - Reducidos en móviles */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-56 sm:w-80 h-56 sm:h-80 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/5 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Electric lines - Solo en desktop */}
        {!isMobile &&
          [...Array(3)].map((_, i) => (
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
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title - Responsive */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex justify-center flex-wrap gap-1 sm:gap-2 mb-4 lg:mb-6">
            {titleText.map((letter, index) => (
              <span
                key={index}
                className={`inline-block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black transform transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100 text-white" : "translate-y-16 opacity-0"
                } hover:scale-110 hover:text-cyan-400 cursor-default ${letter === " " ? "w-4 sm:w-6 lg:w-8" : ""}`}
                style={{
                  transitionDelay: isMobile ? `${index * 60}ms` : `${index * 100}ms`,
                  textShadow: "0 0 30px rgba(0, 255, 255, 0.5)",
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: isMobile ? "1s" : "1.5s" }}
          >
            <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-3 lg:mb-4"></div>
            <p className="text-lg lg:text-xl text-gray-300 font-medium px-4">
              Los cerebros detrás de la experiencia LATAM RUST
            </p>
          </div>
        </div>

        {/* Team Cards - Grid responsivo */}
        <div
          className={`grid ${
            isMobile ? "grid-cols-1 gap-8" : "grid-cols-2 gap-8 lg:gap-12"
          } max-w-5xl mx-auto`}
        >
          {/* Owner Card */}
          <TeamMemberCard
            name="ParaguayRAIDER"
            role="Dueño & Fundador del Servidor"
            description="Veterano de Rust con más de 10000 horas de juego. Fundó LATAM RUST en 2021 con la visión de crear la mejor experiencia de supervivencia en Latinoamérica."
            avatar="/LATAMLOGO.webp"
            specialties={[
              { icon: <Crown className="w-4 lg:w-5 h-4 lg:h-5" />, text: "Administración" },
              { icon: <Shield className="w-4 lg:w-5 h-4 lg:h-5" />, text: "Moderación" },
              { icon: <Users className="w-4 lg:w-5 h-4 lg:h-5" />, text: "Comunidad" },
              { icon: <Gamepad2 className="w-4 lg:w-5 h-4 lg:h-5" />, text: "Gaming Expert" },
            ]}
            stats={[
              { label: "Años de Experiencia", value: "8+" },
              { label: "Horas en Rust", value: "10,000+" },
              { label: "Jugadores Gestionados", value: "10K+" },
              { label: "Eventos Organizados", value: "200+" },
            ]}
            socialLinks={[
              { icon: <Twitter className="w-4 lg:w-5 h-4 lg:h-5" />, url: "#", color: "hover:text-blue-400" },
              { icon: <Instagram className="w-4 lg:w-5 h-4 lg:h-5" />, url: "#", color: "hover:text-pink-400" },
              { icon: <Gamepad2 className="w-4 lg:w-5 h-4 lg:h-5" />, url: "#", color: "hover:text-green-400" },
            ]}
            isVisible={isVisible}
            delay="0.5s"
            onHover={() => !isMobile && setActiveCard(1)}
            onLeave={() => !isMobile && setActiveCard(null)}
            isActive={activeCard === 1}
            isMobile={isMobile}
          />

          {/* Developer Card */}
          <TeamMemberCard
            name="GalpónTech"
            role="Desarrollador Web"
            description="Full-stack developer especializado en React, Node.js y sistemas de alta disponibilidad. Creó esta web épica y mantiene toda la infraestructura técnica del servidor."
            avatar="/galpon.webp"
            specialties={[
              { icon: <Code className="w-4 lg:w-5 h-4 lg:h-5" />, text: "Full-Stack Dev" },
              { icon: <Zap className="w-4 lg:w-5 h-4 lg:h-5" />, text: "Performance" },
              { icon: <Award className="w-4 lg:w-5 h-4 lg:h-5" />, text: "UI/UX Design" },
              { icon: <Coffee className="w-4 lg:w-5 h-4 lg:h-5" />, text: "Café Adicto" },
            ]}
            stats={[
              { label: "Líneas de Código", value: "100K+" },
              { label: "Proyectos Completados", value: "50+" },
              { label: "Cafés por Día", value: "∞" },
              { label: "Bugs Solucionados", value: "9,999+" },
            ]}
            socialLinks={[
              { icon: <Github className="w-4 lg:w-5 h-4 lg:h-5" />, url: "#", color: "hover:text-gray-400" },
              { icon: <Twitter className="w-4 lg:w-5 h-4 lg:h-5" />, url: "#", color: "hover:text-blue-400" },
              { icon: <Code className="w-4 lg:w-5 h-4 lg:h-5" />, url: "#", color: "hover:text-purple-400" },
            ]}
            isVisible={isVisible}
            delay={isMobile ? "0.7s" : "0.8s"}
            onHover={() => !isMobile && setActiveCard(2)}
            onLeave={() => !isMobile && setActiveCard(null)}
            isActive={activeCard === 2}
            isMobile={isMobile}
          />

        </div>

        {/* Bottom Quote Section - Responsive */}
        <div
          className={`mt-6 lg:mt-8 text-center transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: isMobile ? "1.5s" : "2s" }}
        >
          <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-5 lg:p-6 border border-white/10 max-w-4xl mx-auto">
            <Star className="w-8 lg:w-12 h-8 lg:h-12 text-yellow-400 mx-auto mb-4 animate-spin-slow" />
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6 italic px-2">
              "La comunidad más grande de Rust Pirata en toda LATAM."
            </blockquote>
            <div className={`flex ${isMobile ? "flex-col space-y-4" : "justify-center items-center space-x-8"}`}>
              <div className="text-center">
                <div className="text-cyan-400 font-black text-base lg:text-lg">ParaguayRAIDER</div>
                <div className="text-gray-400 text-sm">Fundador</div>
              </div>
              {!isMobile && (
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
              )}
              <div className="text-center">
                <div className="text-purple-400 font-black text-base lg:text-lg">GalpónTech</div>
                <div className="text-gray-400 text-sm">Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations - Optimizadas */}
      <style>{`
        @keyframes float-code {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px) rotate(180deg);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-20px) rotate(270deg);
            opacity: 0.8;
          }
        }

        @keyframes electric-line {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
          100% {
            transform: scaleX(0);
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

        .animate-float-code {
          animation: float-code 8s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .animate-electric-line {
          animation: electric-line 4s ease-in-out infinite;
          transform-origin: center;
          will-change: transform, opacity;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
          will-change: transform;
        }

        /* Optimizaciones para móviles */
        @media (max-width: 768px) {
          .animate-pulse {
            animation-duration: 3s;
          }
          
          .backdrop-blur-lg {
            backdrop-filter: blur(8px);
          }
        }

        /* Reducir movimiento para usuarios que lo prefieren */
        @media (prefers-reduced-motion: reduce) {
          .animate-float-code,
          .animate-electric-line,
          .animate-spin-slow,
          .animate-pulse {
            animation: none !important;
          }
          
          .transition-all,
          .transition-transform,
          .transition-opacity,
          .transition-colors {
            transition: none !important;
          }
        }

        /* Optimizar rendimiento en dispositivos táctiles */
        @media (hover: none) and (pointer: coarse) {
          .group:hover .group-hover\\:scale-110,
          .hover\\:scale-110 {
            transform: none;
          }
          
          .group:hover .group-hover\\:border-cyan-400\\/50 {
            border-color: inherit;
          }
        }

        /* Touch-friendly improvements */
        button, a {
          min-height: 44px;
          min-width: 44px;
        }

        /* Optimizar para pantallas muy pequeñas */
        @media (max-width: 480px) {
          .text-3xl {
            font-size: 1.5rem;
            line-height: 2rem;
          }
        }
        
        .section-divider {
          width: 100%;
          padding: 2rem 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .divider-line {
          width: 80%;
          max-width: 1200px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #dc2626, transparent);
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.5);
          animation: dividerPulse 3s ease-in-out infinite;
        }
        
        @keyframes dividerPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
    </>
  );
};

// Team Member Card Component - Optimizado
interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  avatar: string;
  specialties: { icon: React.ReactNode; text: string }[];
  stats: { label: string; value: string }[];
  socialLinks: { icon: React.ReactNode; url: string; color: string }[];
  isVisible: boolean;
  delay: string;
  onHover: () => void;
  onLeave: () => void;
  isActive: boolean;
  isMobile: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  description,
  avatar,
  specialties,
  stats,
  socialLinks,
  isVisible,
  delay,
  onHover,
  onLeave,
  isActive,
  isMobile,
}) => {
  const handleClick = useCallback(() => {
    if (isMobile) {
      onHover();
      setTimeout(onLeave, 2000); // Auto-hide después de 2 segundos en móviles
    }
  }, [isMobile, onHover, onLeave]);

  return (
    <div
      className={`group relative transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      } ${isMobile ? "cursor-pointer" : ""}`}
      style={{ transitionDelay: delay }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={handleClick}
    >
      <div
        className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 lg:p-8 border transition-all duration-500 ${
          isActive
            ? "border-cyan-400/50 shadow-2xl shadow-cyan-400/20 scale-105"
            : "border-white/10 hover:border-white/30"
        }`}
      >
        {/* Glowing background effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            isActive ? "opacity-100" : ""
          }`}
        ></div>

        {/* Avatar Section - Responsive */}
        <div className="relative mb-6 lg:mb-8">
          <div className="flex justify-center">
            <div className="relative">
              {/* Spinning ring - Solo desktop */}
              {!isMobile && (
                <div
                  className={`absolute -inset-3 lg:-inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-75 transition-opacity duration-500 animate-spin-slow ${
                    isActive ? "opacity-75" : ""
                  }`}
                ></div>
              )}

              {/* Avatar */}
              <div
                className={`relative w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 rounded-full overflow-hidden border-4 border-white/20 ${
                  !isMobile ? "group-hover:border-cyan-400/50" : ""
                } transition-colors duration-500`}
              >
                <img
                  src={avatar}
                  alt={name}
                  className={`w-full h-full object-cover ${
                    !isMobile ? "transform group-hover:scale-110" : ""
                  } transition-transform duration-500`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Status indicator */}
              <div className="absolute -bottom-1 lg:-bottom-2 -right-1 lg:-right-2 w-6 lg:w-8 h-6 lg:h-8 bg-green-500 rounded-full border-2 lg:border-4 border-gray-800 flex items-center justify-center">
                <div className="w-2 lg:w-3 h-2 lg:h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section - Responsive */}
        <div className="text-center mb-6 lg:mb-8">
          <h3
            className={`text-2xl lg:text-3xl font-black text-white mb-2 ${
              !isMobile ? "group-hover:text-cyan-400" : ""
            } transition-colors duration-500`}
          >
            {name}
          </h3>
          <p className="text-base lg:text-lg font-bold text-purple-400 mb-3 lg:mb-4">{role}</p>
          <p className="text-gray-300 leading-relaxed text-sm lg:text-base">{description}</p>
        </div>

        {/* Specialties - Grid responsivo */}
        <div className="mb-6 lg:mb-8">
          <h4 className="text-base lg:text-lg font-bold text-white mb-3 lg:mb-4 text-center">Especialidades</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white/5 rounded-lg p-2 lg:p-3 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="text-cyan-400 shrink-0">{specialty.icon}</div>
                <span className="text-white font-medium text-xs lg:text-sm truncate">{specialty.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats - Grid responsivo */}
        <div className="mb-6 lg:mb-8">
          <h4 className="text-base lg:text-lg font-bold text-white mb-3 lg:mb-4 text-center">Estadísticas</h4>
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-black/20 rounded-lg p-2 lg:p-3">
                <div className="text-lg lg:text-2xl font-black text-cyan-400">{stat.value}</div>
                <div className="text-gray-400 text-xs lg:text-sm leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links - Touch friendly */}
        <div className="flex justify-center space-x-3 lg:space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`p-2 lg:p-3 bg-white/10 rounded-full text-gray-400 transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation ${link.color}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
