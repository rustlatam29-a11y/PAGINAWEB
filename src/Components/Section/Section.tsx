import React, { useState, useEffect, useRef } from "react";
import { Crown, Shield, Gamepad2, Code } from "lucide-react";

const Section: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>
      
      <section
        ref={sectionRef}
        className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 
              className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              FUNDADOR
            </h2>
            <div 
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-4"></div>
              <p className="text-lg lg:text-xl text-gray-400 font-medium">
                FUNDADOR DE LATAMRUST Y SERVIDORES DE RUST PIRATA
              </p>
            </div>
          </div>

          {/* Founder Card */}
          <div 
            className={`max-w-md mx-auto transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/20">
                    <img
                      src="/paraguayraider.webp"
                      alt="ParaguayRAIDER"
                      width="112"
                      height="112"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-800 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-white mb-1">ParaguayRAIDER</h3>
                <p className="text-lg font-bold text-purple-400 mb-3">Fundador</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Veterano de Rust con más de 10,000 horas de juego. Fundó LATAMRUST en 2021 con la visión de crear la mejor experiencia de supervivencia en Latinoamérica.
                </p>
              </div>

              {/* Experience Badge */}
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
                <p className="text-center text-sm text-gray-300">
                  <span className="text-white font-bold">Desarrollador de Plugins</span> para{' '}
                  <span className="text-red-400 font-bold">RustSpain</span> y{' '}
                  <span className="text-red-400 font-bold">Brasa.gg</span>
                </p>
              </div>

              {/* Specialties */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
                  <Crown className="w-4 h-4 text-cyan-400" />
                  <span className="text-white text-xs font-medium">Fundador</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
                  <Code className="w-4 h-4 text-cyan-400" />
                  <span className="text-white text-xs font-medium">Dev Plugins</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="text-white text-xs font-medium">RustSpain</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
                  <Gamepad2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-white text-xs font-medium">Brasa.gg</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center bg-black/20 rounded-lg p-3">
                  <div className="text-xl font-black text-cyan-400">8+</div>
                  <div className="text-gray-400 text-xs">Años Experiencia</div>
                </div>
                <div className="text-center bg-black/20 rounded-lg p-3">
                  <div className="text-xl font-black text-cyan-400">10K+</div>
                  <div className="text-gray-400 text-xs">Horas en Rust</div>
                </div>
                <div className="text-center bg-black/20 rounded-lg p-3">
                  <div className="text-xl font-black text-cyan-400">10K+</div>
                  <div className="text-gray-400 text-xs">Jugadores</div>
                </div>
                <div className="text-center bg-black/20 rounded-lg p-3">
                  <div className="text-xl font-black text-cyan-400">200+</div>
                  <div className="text-gray-400 text-xs">Eventos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div 
            className={`mt-8 text-center transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl p-6 border border-white/5 max-w-3xl mx-auto">
              <blockquote className="text-xl sm:text-2xl font-semibold text-white/95 mb-4">
                "FUNDADOR DE LATAMRUST Y SERVIDORES DE RUST PIRATA"
              </blockquote>
              <div className="text-cyan-300 font-semibold">ParaguayRAIDER</div>
              <div className="text-gray-400/75 text-sm tracking-wide">FUNDADOR</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
