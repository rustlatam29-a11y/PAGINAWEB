import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Shield,
  Users,
  Trophy,
  Zap,
  Twitter,
  Instagram,
  Youtube,
  Github,
  ExternalLink,
  Heart,
  Server,
  Wifi,
  Database,
  Code,
  Star,
  ArrowUp,
} from "lucide-react";

interface FooterProps {
  title: string;
  logoUrl?: string; // Nueva prop para la URL de la imagen
}

const Footer: React.FC<FooterProps> = ({ logoUrl = "/img1.webp" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [serverStats, setServerStats] = useState({
    uptime: 99.9,
    players: 247,
    ping: 32,
  });
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Show back to top button on scroll
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    // Simulate live server stats
    const statsInterval = setInterval(() => {
      setServerStats((prev) => ({
        uptime: Math.min(99.99, Math.max(98.5, prev.uptime + (Math.random() - 0.5) * 0.01)),
        players: Math.max(0, Math.min(300, prev.players + Math.floor(Math.random() * 5) - 2)),
        ping: Math.max(1, Math.min(100, prev.ping + Math.floor(Math.random() * 6) - 3)),
      }));
    }, 5000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      clearInterval(statsInterval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const titleText = "LATAM RUST".split("");

  return (
    <>
      <footer ref={footerRef} className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Circuit board pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%22100%22%20height=%22100%22%20viewBox=%220%200%20100%20100%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.02%22%3E%3Cpath%20d=%22M10%2010h80v80H10zM0%200h20v20H0zM80%2080h20v20H80z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

          {/* Floating gaming elements */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className={`absolute text-2xl ${isVisible ? "animate-float-gaming" : "opacity-0"}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${10 + Math.random() * 5}s`,
                color: ["#ff6b3580", "#f7931e80", "#ffdc0080", "#00d4aa80", "#0099e580"][Math.floor(Math.random() * 5)],
              }}
            >
              {["🎮", "⚔️", "🛡️", "🏹", "💎", "🔥", "⚡", "🏆", "💰", "🗡️"][Math.floor(Math.random() * 10)]}
            </div>
          ))}

          {/* Glowing orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>

          {/* Animated grid lines */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-full h-px bg-gradient-to-r from-transparent via-orange-400/20 to-transparent ${
                isVisible ? "animate-grid-line" : "opacity-0"
              }`}
              style={{
                top: `${25 + i * 25}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: "6s",
              }}
            />
          ))}
        </div>

        <div className="relative">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
              {/* Brand Column */}
              <div
                className={`lg:col-span-2 transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
              >
                {/* Animated Logo with Custom Image */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-75 group-hover:opacity-100 animate-spin-slow"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl overflow-hidden">
                      <img
                        src={logoUrl}
                        alt="LATAM RUST Logo"
                        className="w-full h-full object-cover rounded-2xl"
                        onError={(e) => {
                          // Fallback si la imagen no carga
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          target.nextElementSibling?.classList.remove("hidden");
                        }}
                      />
                      {/* Fallback text si la imagen no carga */}
                      <div className="hidden absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                        LR
                      </div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                  </div>

                  <div>
                    <div className="flex">
                      {titleText.map((letter, index) => (
                        <span
                          key={index}
                          className={`inline-block text-3xl font-black transform transition-all duration-500 ${
                            isVisible ? "translate-y-0 opacity-100 text-white" : "translate-y-4 opacity-0"
                          } hover:scale-110 hover:text-orange-400 cursor-default ${letter === " " ? "w-3" : ""}`}
                          style={{
                            transitionDelay: `${index * 80}ms`,
                            textShadow: "0 0 20px rgba(255, 165, 0, 0.4)",
                          }}
                        >
                          {letter}
                        </span>
                      ))}
                    </div>
                    <p className="text-orange-200 font-bold tracking-wide">El mejor servidor de Rust en LATAM</p>
                  </div>
                </div>

                <div
                  className={`space-y-6 transform transition-all duration-1000 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "0.3s" }}
                >
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Desde 2021 ofreciendo la mejor experiencia de supervivencia en Rust. Únete a miles de jugadores en
                    batallas épicas, construye tu imperio y demuestra que eres el rey de la supervivencia.
                  </p>

                  {/* Live Server Status */}
                  <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                    <h4 className="text-white font-bold mb-4 flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                      Estado del Servidor - ONLINE
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-black text-green-400">{serverStats.uptime.toFixed(1)}%</div>
                        <div className="text-gray-400 text-sm">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-blue-400">{serverStats.players}</div>
                        <div className="text-gray-400 text-sm">Jugadores</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-yellow-400">{serverStats.ping}ms</div>
                        <div className="text-gray-400 text-sm">Latencia</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div
                className={`transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "0.5s" }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Zap className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
                  Enlaces Rápidos
                </h3>
                <div className="space-y-4">
                  <FooterLink icon={<Users />} text="Ranking de Jugadores" />
                  <FooterLink icon={<Trophy />} text="Eventos y Torneos" />
                  <FooterLink icon={<Shield />} text="Reglas del Servidor" />
                  <FooterLink icon={<Database />} text="Estadísticas" />
                  <FooterLink icon={<Server />} text="Estado del Servidor" />
                  <FooterLink icon={<Code />} text="API Documentación" />
                </div>
              </div>

              {/* Contact & Social */}
              <div
                className={`transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "0.7s" }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Mail className="w-6 h-6 text-purple-400 mr-2" />
                  Contacto
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-red-400" />
                    <span>Latinoamérica</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span>Soporte 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Wifi className="w-5 h-5 text-green-400" />
                    <span>https://latamrust.xyz</span>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Síguenos</h4>
                  <div className="flex space-x-4">
                    <SocialButton icon={<Twitter />} color="hover:bg-blue-500" />
                    <SocialButton
                      icon={<Instagram />}
                      color="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
                    />
                    <SocialButton icon={<Youtube />} color="hover:bg-red-500" />
                    <SocialButton icon={<Github />} color="hover:bg-gray-700" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div
              className={`border-t border-gray-800 pt-8 transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "1s" }}
            >
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                <div className="flex items-center space-x-2 text-gray-400">
                  <span>&copy; {currentYear} LATAM RUST. Hecho con</span>
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>por el equipo de desarrollo</span>
                </div>

                <div className="flex items-center space-x-6">
                  <button className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    Términos de Servicio
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    Política de Privacidad
                  </button>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 animate-spin-slow" />
                    <span className="text-sm">v2.4.1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-orange-500/50 z-50 ${
              showBackToTop ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
          >
            <ArrowUp className="w-6 h-6 mx-auto animate-bounce" />
          </button>
        </div>
      </footer>

      {/* Custom CSS */}
      <style>{`
        @keyframes float-gaming {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.3; 
          }
          25% { 
            transform: translateY(-20px) rotate(10deg) scale(1.1); 
            opacity: 0.7; 
          }
          50% { 
            transform: translateY(-40px) rotate(-10deg) scale(0.9); 
            opacity: 0.5; 
          }
          75% { 
            transform: translateY(-20px) rotate(5deg) scale(1.05); 
            opacity: 0.8; 
          }
        }
        
        @keyframes grid-line {
          0% { 
            transform: scaleX(0); 
            opacity: 0; 
          }
          50% { 
            transform: scaleX(1); 
            opacity: 0.5; 
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
        
        .animate-float-gaming {
          animation: float-gaming 10s ease-in-out infinite;
        }
        
        .animate-grid-line {
          animation: grid-line 6s ease-in-out infinite;
          transform-origin: center;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </>
  );
};

// Footer Link Component
const FooterLink: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => {
  return (
    <button className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-2">
      <div className="w-5 h-5 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-300">
        {React.cloneElement(icon as React.ReactElement)}
      </div>
      <span className="group-hover:font-medium">{text}</span>
      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

// Social Button Component
const SocialButton: React.FC<{ icon: React.ReactNode; color: string }> = ({ icon, color }) => {
  return (
    <button
      className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${color}`}
    >
      {React.cloneElement(icon as React.ReactElement)}
    </button>
  );
};

export default Footer;
