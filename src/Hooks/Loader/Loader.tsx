import React, { useState, useEffect } from "react";

interface LoaderProps {
  logoUrl?: string;
  onLoadComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ logoUrl = "/img1.webp", onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Preparando experiencia...");
  const [isVisible, setIsVisible] = useState(true);

  const statusMessages = [
    'Conectando al servidor...',
    'Cargando recursos...',
    'Preparando experiencia...',
    'Optimizando conexión...',
    'Casi listo...'
  ];

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 15;
        const newProgress = Math.min(prev + increment, 100);
        
        if (newProgress >= 100) {
          clearInterval(loadingInterval);
          setStatus('¡Listo para jugar!');
          
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              if (onLoadComplete) onLoadComplete();
            }, 800);
          }, 1000);
        } else {
          const messageIndex = Math.floor((newProgress / 100) * statusMessages.length);
          if (messageIndex < statusMessages.length) {
            setStatus(statusMessages[messageIndex]);
          }
        }
        
        return newProgress;
      });
    }, 300);

    return () => clearInterval(loadingInterval);
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${!isVisible ? 'fade-out' : ''}`}>
      {/* Grid de fondo animado */}
      <div className="grid-background"></div>
      
      {/* Partículas sutiles */}
      <div className="particles"></div>
      
      {/* Contenedor principal */}
      <div className="loading-container">
        
        {/* Logo con efecto glow */}
        <div className="logo-wrapper">
          <img 
            src={logoUrl} 
            alt="LATAMRUST Logo" 
            className="loading-logo"
            width="175"
            height="175"
            fetchPriority="high"
            loading="eager"
          />
          <div className="logo-glow"></div>
        </div>
        
        {/* Título principal */}
        <h1 className="loading-title">
          <span className="text-white">LATAM</span>
          <span className="text-rust">RUST</span>
        </h1>
        
        {/* Subtítulo */}
        <p className="loading-subtitle">● ● ● SERVIDORES PIRATAS ● ● ●</p>
        
        {/* Barra de progreso moderna */}
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            <div className="progress-shine"></div>
          </div>
          <span className="progress-text">{Math.floor(progress)}%</span>
        </div>
        
        {/* Estado de carga */}
        <p className="loading-status">{status}</p>
        
        {/* Stats Cards */}
        <div className="stats-grid">
          
          {/* Card 1: Conexión */}
          <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                <circle cx="12" cy="20" r="1"></circle>
              </svg>
            </div>
            <span className="stat-label">Conexión</span>
            <span className="stat-value">Estable</span>
          </div>
          
          {/* Card 2: Jugadores */}
          <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <span className="stat-label">Jugadores</span>
            <span className="stat-value">10K+ Online</span>
          </div>
          
          {/* Card 3: Servidor */}
          <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <span className="stat-label">Servidor</span>
            <span className="stat-value">Premium</span>
          </div>
          
        </div>
      </div>

      {/* Estilos integrados */}
      <style>{`
        /* === PANTALLA DE CARGA PRINCIPAL === */
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #000000 0%, #1a0000 50%, #000000 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .loading-screen.fade-out {
          opacity: 0;
          transform: scale(0.95);
        }

        /* === GRID DE FONDO (EFECTO CYBERPUNK) === */
        .grid-background {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
          opacity: 0.3;
        }

        @keyframes gridMove {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(50px) translateX(50px); }
        }

        /* === PARTÍCULAS SUTILES === */
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20% 30%, rgba(220, 38, 38, 0.4), transparent),
            radial-gradient(2px 2px at 60% 70%, rgba(255, 255, 255, 0.3), transparent),
            radial-gradient(1px 1px at 50% 50%, rgba(220, 38, 38, 0.3), transparent),
            radial-gradient(2px 2px at 80% 10%, rgba(255, 255, 255, 0.2), transparent),
            radial-gradient(1px 1px at 90% 60%, rgba(220, 38, 38, 0.3), transparent),
            radial-gradient(2px 2px at 30% 80%, rgba(255, 255, 255, 0.2), transparent);
          background-size: 200% 200%;
          background-position: 0% 0%;
          animation: particlesFloat 20s ease-in-out infinite;
        }

        @keyframes particlesFloat {
          0%, 100% { 
            background-position: 0% 0%;
            opacity: 0.5;
          }
          25% { 
            background-position: 100% 0%;
            opacity: 0.8;
          }
          50% { 
            background-position: 100% 100%;
            opacity: 0.6;
          }
          75% { 
            background-position: 0% 100%;
            opacity: 0.7;
          }
        }

        /* === CONTENEDOR PRINCIPAL === */
        .loading-container {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 600px;
          padding: 2rem;
        }

        /* === LOGO CON EFECTOS === */
        .logo-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 2rem;
          animation: logoFloat 3s ease-in-out infinite;
        }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.02); }
        }

        .loading-logo {
          width: 150px;
          height: 150px;
          position: relative;
          z-index: 2;
          border-radius: 50%;
          animation: logoPulse 2s ease-in-out infinite;
        }

        @keyframes logoPulse {
          0%, 100% { 
            filter: drop-shadow(0 0 20px rgba(220, 38, 38, 0.6));
          }
          50% { 
            filter: drop-shadow(0 0 40px rgba(220, 38, 38, 1));
          }
        }

        .logo-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(220, 38, 38, 0.4) 0%, transparent 70%);
          animation: glowPulse 2s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes glowPulse {
          0%, 100% { 
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        /* === TÍTULO PRINCIPAL === */
        .loading-title {
          font-size: 3.5rem;
          font-weight: 900;
          margin: 0;
          letter-spacing: 3px;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .text-white {
          color: #ffffff;
          text-shadow: 
            0 0 10px rgba(255, 255, 255, 0.5),
            0 0 20px rgba(255, 255, 255, 0.3);
        }

        .text-rust {
          color: #dc2626;
          background: linear-gradient(45deg, #dc2626, #ff4444, #dc2626);
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

        /* === SUBTÍTULO === */
        .loading-subtitle {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
          letter-spacing: 6px;
          margin: 0;
          margin-bottom: 3rem;
          text-transform: uppercase;
          font-weight: 500;
        }

        /* === BARRA DE PROGRESO === */
        .progress-container {
          width: 100%;
          max-width: 450px;
          margin: 0 auto 1rem;
          position: relative;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          box-shadow: 
            inset 0 0 10px rgba(0, 0, 0, 0.8),
            0 0 10px rgba(220, 38, 38, 0.2);
          border: 1px solid rgba(220, 38, 38, 0.2);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, 
            #dc2626 0%, 
            #ff4444 25%,
            #ff6b6b 50%,
            #ff4444 75%,
            #dc2626 100%
          );
          background-size: 200% 100%;
          border-radius: 10px;
          transition: width 0.3s ease;
          animation: progressShine 2s linear infinite;
          box-shadow: 
            0 0 20px rgba(220, 38, 38, 0.8),
            0 0 40px rgba(220, 38, 38, 0.4);
          position: relative;
        }

        @keyframes progressShine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .progress-text {
          position: absolute;
          top: -30px;
          right: 0;
          color: #dc2626;
          font-weight: 700;
          font-size: 1rem;
          text-shadow: 0 0 10px rgba(220, 38, 38, 0.8);
        }

        /* === ESTADO DE CARGA === */
        .loading-status {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          margin: 1rem 0 3rem;
          animation: statusBlink 1.5s ease-in-out infinite;
          font-weight: 400;
        }

        @keyframes statusBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* === STATS CARDS === */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 3rem;
          animation: statsAppear 1s ease-out 0.5s both;
        }

        @keyframes statsAppear {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stat-card {
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(220, 38, 38, 0.3);
          border-radius: 12px;
          padding: 1.2rem 0.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(220, 38, 38, 0.1), 
            transparent
          );
          transition: left 0.5s ease;
        }

        .stat-card:hover::before {
          left: 100%;
        }

        .stat-card:hover {
          background: rgba(220, 38, 38, 0.1);
          border-color: rgba(220, 38, 38, 0.6);
          transform: translateY(-5px);
          box-shadow: 
            0 10px 30px rgba(220, 38, 38, 0.3),
            inset 0 0 20px rgba(220, 38, 38, 0.1);
        }

        .stat-icon {
          width: 40px;
          height: 40px;
          color: #dc2626;
          margin-bottom: 0.3rem;
          filter: drop-shadow(0 0 8px rgba(220, 38, 38, 0.6));
          transition: all 0.3s ease;
        }

        .stat-card:hover .stat-icon {
          transform: scale(1.1);
          filter: drop-shadow(0 0 15px rgba(220, 38, 38, 1));
        }

        .stat-icon svg {
          width: 100%;
          height: 100%;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 500;
        }

        .stat-value {
          color: #ffffff;
          font-weight: 700;
          font-size: 0.95rem;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        /* === RESPONSIVE === */
        @media (max-width: 768px) {
          .loading-title {
            font-size: 2.5rem;
          }
          
          .loading-logo {
            width: 120px;
            height: 120px;
          }
          
          .progress-container {
            max-width: 320px;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 0.8rem;
            max-width: 250px;
            margin: 2rem auto 0;
          }
          
          .stat-card {
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .loading-title {
            font-size: 2rem;
            letter-spacing: 2px;
          }
          
          .loading-subtitle {
            font-size: 0.7rem;
            letter-spacing: 4px;
          }
          
          .loading-logo {
            width: 100px;
            height: 100px;
          }
          
          .progress-container {
            max-width: 280px;
          }
          
          .stat-icon {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
