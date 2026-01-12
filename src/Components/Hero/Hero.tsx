import React, { useEffect, useRef, useState } from "react";
import { Download, Play, Server } from "lucide-react";

type GameType = "rust" | "dayz";

const Hero: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [selectedGame, setSelectedGame] = useState<GameType>("rust");
  const [isAnimating, setIsAnimating] = useState(false);

  // Crear partículas
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const container = particlesRef.current;
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'hero-particle';
      particle.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 5}s;
        animation-duration: ${Math.random() * 20 + 10}s;
      `;
      container.appendChild(particle);
    }
  }, []);

  // Handler para cambio de juego con animación
  const handleGameChange = (game: GameType) => {
    if (game === selectedGame || isAnimating) return;
    setIsAnimating(true);
    setSelectedGame(game);
    setTimeout(() => setIsAnimating(false), 200);
  };

  return (
    <section className="hero-section">
      {/* Partículas */}
      <div className="particles-container" ref={particlesRef}></div>

      <div className="hero-container-center">
        
        {/* Contenido Principal Centrado */}
        <div className="hero-content-center">
          
          {/* Selector de Juegos - Tabs */}
          <div className="game-selector">
            <button 
              className={`game-tab ${selectedGame === "rust" ? "active" : ""}`}
              onClick={() => handleGameChange("rust")}
            >
              RUST
            </button>
            <button 
              className={`game-tab ${selectedGame === "dayz" ? "active" : ""}`}
              onClick={() => handleGameChange("dayz")}
            >
              DAYZ
            </button>
          </div>

          {/* Contenido dinámico con animación */}
          <div className={`hero-dynamic-content ${isAnimating ? "fade-out" : "fade-in"}`}>
            
            {selectedGame === "rust" && (
              <>
                {/* Título Principal con Animación - RUST */}
                <div className="hero-title-wrapper">
                  <h1 className="hero-title">
                    <span className="title-line">RUST</span>
                    <span className="title-line gradient-text">GRATIS</span>
                  </h1>
                  <div className="title-underline"></div>
                </div>
                
                {/* Subtítulo - RUST */}
                <div className="hero-subtitle">
                  <p className="subtitle-text">
                    Servidor Pirata v2275 • Gratis BR•ES
                  </p>
                  <p className="subtitle-cta">• Jogue Agora!</p>
                </div>
                
                {/* Botones de Acción - RUST */}
                <div className="hero-actions">
                  <a href="https://discord.gg/dT8u5b3jga" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <span className="btn-icon">
                      <Download className="w-6 h-6" />
                    </span>
                    <span className="btn-text">
                      <span className="btn-label">DESCARGAR</span>
                      <span className="btn-subtitle">Baixar Agora</span>
                    </span>
                    <span className="btn-arrow">→</span>
                  </a>
                  
                  <button className="btn-secondary">
                    <span className="btn-icon">
                      <Play className="w-5 h-5" fill="currentColor" />
                    </span>
                    <span className="btn-text">Ver Tráiler</span>
                  </button>
                </div>
              </>
            )}

            {selectedGame === "dayz" && (
              <>
                {/* Título Principal con Animación - DAYZ */}
                <div className="hero-title-wrapper">
                  <h1 className="hero-title">
                    <span className="title-line">DAYZ</span>
                    <span className="title-line gradient-text">GRATIS</span>
                  </h1>
                  <div className="title-underline"></div>
                </div>
                
                {/* Subtítulo - DAYZ */}
                <div className="hero-subtitle">
                  <p className="subtitle-text">
                    Servidor DayZ • LATAM • 24/7
                  </p>
                  <p className="subtitle-cta">• Únete Ahora!</p>
                </div>
                
                {/* Botones de Acción - DAYZ */}
                <div className="hero-actions">
                  <a href="/dayz" className="btn-primary">
                    <span className="btn-icon">
                      <Server className="w-6 h-6" />
                    </span>
                    <span className="btn-text">
                      <span className="btn-label">UNIRSE AL SERVIDOR</span>
                      <span className="btn-subtitle">Ver Info</span>
                    </span>
                    <span className="btn-arrow">→</span>
                  </a>
                  
                  <a href="https://store.steampowered.com/app/221100/DayZ/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <span className="btn-icon">
                      <Download className="w-5 h-5" />
                    </span>
                    <span className="btn-text">Descargar Oficial</span>
                  </a>
                </div>
              </>
            )}
            
          </div>
          
        </div>
        
      </div>

      {/* Estilos CSS integrados */}
      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 6rem 0 2rem 0;
        }

        .particles-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .hero-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #dc2626;
          border-radius: 50%;
          opacity: 0.3;
          animation: particleFloat 15s linear infinite;
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        .hero-container-center {
          position: relative;
          z-index: 10;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-content-center {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          text-align: center;
          align-items: center;
        }

        /* Game Selector Tabs */
        .game-selector {
          display: flex;
          gap: 0.75rem;
          padding: 0.5rem;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 12px;
          border: 1px solid rgba(220, 38, 38, 0.2);
          backdrop-filter: blur(10px);
        }

        .game-tab {
          padding: 0.75rem 2rem;
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 1px;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
        }

        .game-tab:hover {
          color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.05);
        }

        .game-tab.active {
          color: #ffffff;
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.3), rgba(220, 38, 38, 0.2));
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.3);
        }

        .game-tab.active::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: #dc2626;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(220, 38, 38, 0.8);
        }

        /* Dynamic Content Animations */
        .hero-dynamic-content {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          width: 100%;
          align-items: center;
        }

        .fade-in {
          animation: fadeInContent 0.2s ease-in both;
        }

        .fade-out {
          animation: fadeOutContent 0.15s ease-out both;
        }

        @keyframes fadeInContent {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOutContent {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        .hero-title {
          margin: 0;
          line-height: 0.9;
        }

        .title-line {
          display: block;
          font-weight: 900;
          letter-spacing: -2px;
          text-shadow: 
            0 0 20px rgba(255, 255, 255, 0.3),
            0 0 40px rgba(220, 38, 38, 0.2);
          animation: titleAppear 1s ease-out both;
        }

        /* RUST - MÁS GRANDE */
        .title-line:nth-child(1) {
          font-size: 7rem;
          color: #ffffff;
        }

        /* GRATIS - MÁS PEQUEÑO */
        .title-line:nth-child(2) {
          font-size: 5rem;
          animation-delay: 0.2s;
        }

        @keyframes titleAppear {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gradient-text {
          background: linear-gradient(135deg, #dc2626 0%, #ff4444 50%, #dc2626 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textShine 3s linear infinite;
        }

        @keyframes textShine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .title-underline {
          height: 6px;
          background: linear-gradient(90deg, #dc2626, transparent);
          margin-top: 1rem;
          border-radius: 3px;
          animation: underlineGrow 1s ease-out 0.5s both;
        }

        @keyframes underlineGrow {
          from { width: 0; }
          to { width: 100%; }
        }

        .hero-subtitle {
          animation: fadeIn 1s ease-out 0.7s both;
        }

        .subtitle-text {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 0.5rem 0;
          font-weight: 500;
          letter-spacing: 1px;
        }

        .subtitle-cta {
          font-size: 1.1rem;
          color: #dc2626;
          margin: 0;
          font-weight: 700;
          text-shadow: 0 0 10px rgba(220, 38, 38, 0.5);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          flex-wrap: nowrap;
          animation: fadeIn 1s ease-out 0.9s both;
          justify-content: center;
        }

        .btn-primary {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 2rem;
          background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
          border: none;
          border-radius: 12px;
          text-decoration: none;
          color: #ffffff;
          font-weight: 700;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(22, 163, 74, 0.3);
          cursor: pointer;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(22, 163, 74, 0.5);
        }

        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.15rem;
        }

        .btn-label {
          font-size: 1.1rem;
          letter-spacing: 1px;
        }

        .btn-subtitle {
          font-size: 0.75rem;
          opacity: 0.9;
          font-weight: 500;
        }

        .btn-arrow {
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(5px);
        }

        .btn-secondary {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem 2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(220, 38, 38, 0.3);
          border-radius: 12px;
          color: #ffffff;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          cursor: pointer;
          text-decoration: none;
          flex-shrink: 0;
        }

        .btn-secondary:hover {
          background: rgba(220, 38, 38, 0.1);
          border-color: rgba(220, 38, 38, 0.6);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);
        }

        .server-status-card {
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(220, 38, 38, 0.3);
          border-radius: 16px;
          padding: 1.25rem;
          backdrop-filter: blur(20px);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.5),
            inset 0 0 40px rgba(220, 38, 38, 0.05);
          animation: cardFloat 3s ease-in-out infinite;
          max-width: 400px;
          width: 100%;
        }

        @keyframes cardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .status-header {
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(220, 38, 38, 0.2);
        }

        .status-title {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
        }

        .pulse-dot-large {
          width: 32px;
          height: 32px;
          background: #16a34a;
          border-radius: 50%;
          box-shadow: 0 0 20px #16a34a;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .status-online {
          color: #16a34a !important;
          text-shadow: 0 0 10px rgba(22, 163, 74, 0.5);
          font-size: 1.25rem !important;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .stat-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(220, 38, 38, 0.2);
          border-radius: 10px;
          padding: 1rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          aspect-ratio: 1 / 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .stat-item-full {
          grid-column: 1 / -1;
          aspect-ratio: auto;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
        }

        .stat-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .stat-item:hover::before {
          left: 100%;
        }

        .stat-item:hover {
          background: rgba(220, 38, 38, 0.08);
          border-color: rgba(220, 38, 38, 0.4);
          transform: translateY(-3px);
        }

        .stat-icon {
          color: #dc2626;
          filter: drop-shadow(0 0 8px rgba(220, 38, 38, 0.6));
          flex-shrink: 0;
        }
        
        .stat-item-full .stat-icon {
          margin-bottom: 0;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex: 1;
        }
        
        .stat-item-full .stat-content {
          flex: 1;
        }
        
        .stat-values {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .stat-value {
          font-size: 1.4rem;
          font-weight: 900;
          color: #ffffff;
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
          line-height: 1.2;
        }

        .stat-max {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 700;
        }

        .stat-unit {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 600;
        }

        .stat-label {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        .stat-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
        }

        .stat-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #dc2626, #ff4444);
          border-radius: 3px;
          transition: width 1s ease;
          box-shadow: 0 0 10px rgba(220, 38, 38, 0.8);
          animation: barPulse 2s ease-in-out infinite;
        }

        @keyframes barPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .latency-indicator {
          display: flex;
          gap: 0.25rem;
          align-items: flex-end;
          height: 30px;
        }

        .latency-bar {
          width: 8px;
          background: rgba(220, 38, 38, 0.3);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .latency-indicator.excellent .latency-bar:nth-child(1) {
          height: 40%;
          background: #16a34a;
          animation: barBounce 1s ease-in-out infinite;
        }

        .latency-indicator.excellent .latency-bar:nth-child(2) {
          height: 60%;
          background: #16a34a;
          animation: barBounce 1s ease-in-out 0.1s infinite;
        }

        .latency-indicator.excellent .latency-bar:nth-child(3) {
          height: 80%;
          background: #16a34a;
          animation: barBounce 1s ease-in-out 0.2s infinite;
        }

        .latency-indicator.excellent .latency-bar:nth-child(4) {
          height: 100%;
          background: #16a34a;
          animation: barBounce 1s ease-in-out 0.3s infinite;
        }

        @keyframes barBounce {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.8); }
        }

        .uptime-ring svg {
          transform: rotate(-90deg);
        }

        .uptime-bg {
          fill: none;
          stroke: rgba(255, 255, 255, 0.1);
          stroke-width: 3;
        }

        .uptime-progress {
          fill: none;
          stroke: #16a34a;
          stroke-width: 3;
          stroke-linecap: round;
          filter: drop-shadow(0 0 5px #16a34a);
          animation: ringGrow 2s ease-out;
        }

        @keyframes ringGrow {
          from { stroke-dasharray: 0, 100; }
        }

        .rating-stars {
          display: flex;
          gap: 0.25rem;
          flex-shrink: 0;
        }
        
        .stat-item-full .rating-stars {
          margin-left: auto;
        }

        .star {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.2);
        }

        .star.filled {
          color: #fbbf24;
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
          animation: starTwinkle 2s ease-in-out infinite;
        }

        .star.half {
          background: linear-gradient(90deg, #fbbf24 50%, rgba(255, 255, 255, 0.2) 50%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes starTwinkle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .star:nth-child(1) { animation-delay: 0s; }
        .star:nth-child(2) { animation-delay: 0.2s; }
        .star:nth-child(3) { animation-delay: 0.4s; }
        .star:nth-child(4) { animation-delay: 0.6s; }
        .star:nth-child(5) { animation-delay: 0.8s; }

        .status-footer {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.5rem;
        }

        .footer-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(220, 38, 38, 0.15);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .footer-item:hover {
          background: rgba(220, 38, 38, 0.05);
          border-color: rgba(220, 38, 38, 0.3);
        }

        .footer-icon {
          font-size: 1.25rem;
          filter: drop-shadow(0 0 5px rgba(220, 38, 38, 0.5));
        }

        .footer-text {
          flex: 1;
        }

        .footer-label {
          font-size: 0.7rem;
          color: #dc2626;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.15rem;
        }

        .footer-value {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 1200px) {
          .title-line:nth-child(1) {
            font-size: 6rem;
          }
          
          .title-line:nth-child(2) {
            font-size: 4rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 5rem 0 1rem 0;
          }
          
          .hero-container-center {
            padding: 0 1rem;
          }
          
          .title-line:nth-child(1) {
            font-size: 4.5rem;
          }
          
          .title-line:nth-child(2) {
            font-size: 3rem;
          }
          
          .hero-actions {
            flex-wrap: wrap;
            gap: 1rem;
          }
          
          .btn-primary,
          .btn-secondary {
            flex: 1;
            min-width: 140px;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .title-line:nth-child(1) {
            font-size: 3.5rem;
          }
          
          .title-line:nth-child(2) {
            font-size: 2.5rem;
          }
          
          .subtitle-text {
            font-size: 1rem;
          }
          
          .hero-actions {
            flex-direction: column;
          }
          
          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
