import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Menu, X, Users, Trophy, Settings, Zap, MessageSquare, ExternalLink } from "lucide-react";

interface HeaderProps {
  discordInviteUrl?: string;
  logoUrl?: string;
}

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  href?: string;
}

interface MobileNavItemProps extends NavItemProps {
  delay: string;
}

// Componente NavItem optimizado
const NavItem: React.FC<NavItemProps> = React.memo(({ icon, text, onClick, href }) => {
  const handleClick = useCallback(() => {
    if (href && href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (onClick) {
      onClick();
    }
  }, [href, onClick]);

  return (
    <button
      onClick={handleClick}
      className="group flex items-center space-x-3 px-4 py-2 md:px-5 md:py-3 text-white/90 hover:text-white transition-all duration-300 rounded-xl hover:bg-red-950/30 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm border border-transparent hover:border-red-900/40"
    >
      <span className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{icon}</span>
      <span className="font-bold tracking-wide text-sm md:text-base">{text}</span>
      <div className="w-0 group-hover:w-2 h-2 bg-red-400 rounded-full transition-all duration-300" />
    </button>
  );
});

NavItem.displayName = "NavItem";

// Componente MobileNavItem optimizado
const MobileNavItem: React.FC<MobileNavItemProps> = React.memo(({ icon, text, delay, onClick, href }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = useCallback(() => {
    if (href && href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (onClick) {
      onClick();
    }
  }, [href, onClick]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), parseFloat(delay) * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <button
      onClick={handleClick}
      className={`w-full flex items-center space-x-4 px-4 py-3 text-white/90 hover:text-white transition-all duration-300 rounded-xl hover:bg-red-950/30 transform hover:scale-105 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
      }`}
    >
      <span className="transform transition-all duration-300 hover:scale-125 hover:rotate-12">{icon}</span>
      <span className="font-bold">{text}</span>
      <div className="flex-1" />
      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
    </button>
  );
});

MobileNavItem.displayName = "MobileNavItem";

const Header: React.FC<HeaderProps> = ({
  discordInviteUrl = "https://discord.gg/M9ud76fnYu",
  logoUrl = "/img1.webp",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [lettersVisible, setLettersVisible] = useState(false);

  // Memoizar valores estáticos
  const animatedText = useMemo(() => "LATAM RUST".split(""), []);

  // Callbacks optimizados
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleDiscordClick = useCallback(() => {
    window.open(discordInviteUrl, "_blank", "noopener,noreferrer");
  }, [discordInviteUrl]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  }, []);

  // Efectos optimizados
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    const lettersTimer = setTimeout(() => setLettersVisible(true), 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(lettersTimer);
    };
  }, []);

  // Generar elementos animados una sola vez
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${3 + Math.random() * 2}s`,
      })),
    []
  );

  const lightningBolts = useMemo(
    () =>
      Array.from({ length: 2 }, (_, i) => ({
        id: i,
        delay: `${i * 2}s`,
      })),
    []
  );

  // Configuración de navegación
  const navigationItems = useMemo(
    () => [
      {
        icon: <Trophy className="w-4 h-4 md:w-5 md:h-5" />,
        text: "Habla con nosotros",
        href: "https://discord.gg/dT8u5b3jga",
      },
      {
        icon: <Settings className="w-4 h-4 md:w-5 md:h-5" />,
        text: "SkyHosting",
        onClick: () => scrollToSection("collaboration"),
      },
      {
        icon: <Trophy className="w-4 h-4 md:w-5 md:h-5" />,
        text: "Canal de Telegram",
        href: "https://t.me/latamrust",
      },
    ],
    [scrollToSection]
  );

  const mobileNavigationItems = useMemo(
    () => [
      {
        icon: <Users className="w-5 h-5" />,
        text: "Jugadores",
        delay: "0.1",
        onClick: () => scrollToSection("players"),
      },
      {
        icon: <Trophy className="w-5 h-5" />,
        text: "SkyHosting",
        delay: "0.2",
        onClick: () => scrollToSection("collaboration"),
      },
      {
        icon: <Settings className="w-5 h-5" />,
        text: "Reglas del servidor",
        delay: "0.3",
        onClick: () => scrollToSection("server"),
      },
    ],
    [scrollToSection]
  );

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 overflow-hidden bg-gradient-to-r from-black via-red-950 to-neutral-950 shadow-xl md:shadow-2xl border-b border-red-900/20">
        {/* Fondo animado con partículas */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50">
            {/* Partículas flotantes */}
            {particles.map(({ id, left, top, delay, duration }) => (
              <div
                key={id}
                className={`absolute w-1 h-1 bg-red-800 rounded-full animate-pulse ${
                  isLoaded ? "animate-float" : "opacity-0"
                }`}
                style={{
                  left,
                  top,
                  animationDelay: delay,
                  animationDuration: duration,
                }}
              />
            ))}

            {/* Patrón de cuadrícula animado */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=&#39;40&#39;%20height=&#39;40&#39;%20viewBox=&#39;0%200%2040%2040&#39;%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%3E%3Cg%20fill=&#39;none&#39;%20fill-rule=&#39;evenodd&#39;%3E%3Cg%20fill=&#39;%23ffffff&#39;%20fill-opacity=&#39;0.03&#39;%3E%3Cpath%20d=&#39;M0%200h20v20H0zM20%2020h20v20H20z&#39;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse opacity-30" />

            {/* Orbes brillantes */}
            <div className="absolute top-10 left-20 w-24 md:w-32 h-24 md:h-32 bg-red-900/10 rounded-full blur-lg md:blur-xl animate-pulse" />
            <div
              className="absolute top-20 right-20 md:right-32 w-16 md:w-24 h-16 md:h-24 bg-red-950/15 rounded-full blur-lg md:blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-10 left-1/4 md:left-1/3 w-16 md:w-20 h-16 md:h-20 bg-neutral-900/10 rounded-full blur-lg md:blur-xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>

        {/* Efectos de rayo */}
        <div className="absolute inset-0 pointer-events-none">
          {lightningBolts.map(({ id, delay }) => (
            <div
              key={id}
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-red-900/5 to-transparent transform -skew-x-12 ${
                isLoaded ? "animate-lightning" : "opacity-0"
              }`}
              style={{
                animationDelay: delay,
                animationDuration: "3s",
              }}
            />
          ))}
        </div>

        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo animado MEJORADO */}
            <div
              className={`flex items-center space-x-3 md:space-x-5 group cursor-pointer transform transition-all duration-1000 ${
                isLoaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}
              onClick={() => scrollToSection("home")}
            >
              <div className="relative">
                {/* Anillo exterior con degradado profesional */}
                <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-br from-red-800 via-red-900 to-black rounded-2xl opacity-30 group-hover:opacity-60 blur-sm transition-all duration-500" />
                
                {/* Anillo medio giratorio */}
                <div className="absolute -inset-1.5 md:-inset-2.5 bg-gradient-to-tr from-red-900/20 via-red-800/20 to-red-900/20 rounded-xl animate-spin-slow" />
                
                {/* Contenedor del logo con borde metálico */}
                <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-950 via-black to-neutral-950 rounded-xl md:rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 shadow-2xl border border-red-900/50 group-hover:border-red-800/70 overflow-hidden">
                  
                  {/* Efecto de brillo interno */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-900/10 via-transparent to-red-800/5" />
                  
                  {/* Imagen del logo */}
                  <img
                    src={logoUrl}
                    alt="Logo LATAM RUST"
                    className="w-8 h-8 md:w-12 md:h-12 object-cover rounded-lg md:rounded-xl z-10 filter group-hover:brightness-110 transition-all duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  
                  {/* Fallback con diseño mejorado */}
                  <div
                    className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-red-900 to-black rounded-lg md:rounded-xl items-center justify-center text-white font-black text-sm md:text-lg z-10"
                    style={{ display: "none" }}
                  >
                    LR
                  </div>
                  
                  {/* Overlay de hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/0 to-red-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl" />
                  
                  {/* Partículas flotantes alrededor del logo */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400/40 rounded-full animate-ping" />
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-red-600/40 rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
                </div>

                {/* Icono decorativo */}
                <Zap
                  className="absolute -top-1 -left-1 md:-top-2 md:-left-2 w-4 h-4 md:w-5 md:h-5 text-red-400 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"
                />
              </div>

              <div className="flex flex-col space-y-1">
                {/* Título animado con letras escalonadas - MEJORADO */}
                <div className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight flex items-center">
                  {animatedText.map((letter, index) => (
                    <span
                      key={`${letter}-${index}`}
                      className={`inline-block transform transition-all duration-500 ${
                        lettersVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      } ${letter === " " ? "w-2 md:w-3" : ""} ${
                        index >= 6 ? "text-gray-300" : "text-white"
                      } hover:scale-110 md:hover:scale-125 hover:text-red-400 cursor-default relative group/letter`}
                      style={{
                        transitionDelay: `${index * 80}ms`,
                        textShadow: "0 2px 10px rgba(127, 29, 29, 0.5), 0 0 20px rgba(0, 0, 0, 0.6)",
                        fontFamily: "Impact, 'Arial Black', sans-serif",
                      }}
                    >
                      {letter}
                      {/* Subrayado animado individual */}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-800 group-hover/letter:w-full transition-all duration-300" />
                    </span>
                  ))}
                </div>

                {/* Subtítulo mejorado */}
                <div
                  className={`flex items-center space-x-2 transform transition-all duration-1000 ${
                    isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: "1s" }}
                >
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-black/80 to-red-950/80 px-3 py-1 rounded-full border border-red-900/40 backdrop-blur-sm">
                    <p className="text-gray-300 text-xs md:text-sm font-bold tracking-widest uppercase">
                      Free Rust Server
                    </p>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gradient-to-r from-red-500 to-red-700 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navegación de escritorio */}
            <div
              className={`hidden md:flex items-center space-x-1 lg:space-x-2 transform transition-all duration-1000 ${
                isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "1.2s" }}
            >
              {navigationItems.map((item, index) => (
                <NavItem
                  key={`nav-${index}`}
                  icon={item.icon}
                  text={item.text}
                  onClick={item.onClick}
                  href={item.href}
                />
              ))}

              {/* Botón de Discord con estilo especial */}
              <button
                onClick={handleDiscordClick}
                className="group flex items-center space-x-2 md:space-x-3 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg md:rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-purple-700/30 hover:border-purple-600/50 relative"
              >
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
                <span className="tracking-wide text-sm md:text-base">DISCORD</span>
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-0.5 md:group-hover:translate-x-1 group-hover:-translate-y-0.5 md:group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Botón del menú móvil */}
            <div
              className={`md:hidden transform transition-all duration-1000 ${
                isLoaded ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
              }`}
              style={{ transitionDelay: "1.5s" }}
            >
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg bg-black/40 text-white hover:bg-red-950/40 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-red-900/30"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Navegación móvil */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <div className="bg-black/70 rounded-xl backdrop-blur-md border border-red-900/30 p-4 space-y-2 shadow-xl">
              {mobileNavigationItems.map((item, index) => (
                <MobileNavItem
                  key={`mobile-nav-${index}`}
                  icon={item.icon}
                  text={item.text}
                  delay={item.delay}
                  onClick={item.onClick}
                />
              ))}

              {/* Botón de Discord móvil */}
              <div
                className={`transform transition-all duration-300 ${
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "0.35s" }}
              >
                <button
                  onClick={handleDiscordClick}
                  className="w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-[1.02] text-sm relative"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>ÚNETE AL DISCORD</span>
                  <div className="flex-1" />
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* CSS personalizado para animaciones adicionales */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(180deg);
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

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-lightning {
          animation: lightning 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Header;