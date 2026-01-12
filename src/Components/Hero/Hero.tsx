import React, { useState, useEffect, useRef } from "react";
import { Download, Play, Users, Server, Activity, Star } from "lucide-react";

const Hero: React.FC = () => {
  const [playerCount, setPlayerCount] = useState(74);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Sistema realista de jugadores basado en horarios
  useEffect(() => {
    const getRealisticPlayerCount = () => {
      const now = new Date();
      const hour = now.getHours();
      
      let baseCount;
      
      // Horarios PICO (18:00 - 22:59) → 80-100 jugadores
      if (hour >= 18 && hour <= 22) {
        baseCount = 80 + Math.floor(Math.random() * 21); // 80-100
      }
      // Horarios BAJOS (03:00 - 06:59) → 25-40 jugadores
      else if (hour >= 3 && hour < 7) {
        baseCount = 25 + Math.floor(Math.random() * 16); // 25-40
      }
      // Madrugada temprana (00:00 - 02:59) → 40-60 jugadores
      else if (hour >= 0 && hour < 3) {
        baseCount = 40 + Math.floor(Math.random() * 21); // 40-60
      }
      // Mañana (07:00 - 11:59) → 45-65 jugadores
      else if (hour >= 7 && hour < 12) {
        baseCount = 45 + Math.floor(Math.random() * 21); // 45-65
      }
      // Mediodía (12:00 - 14:59) → 60-75 jugadores
      else if (hour >= 12 && hour < 15) {
        baseCount = 60 + Math.floor(Math.random() * 16); // 60-75
      }
      // Tarde (15:00 - 17:59) → 70-85 jugadores
      else if (hour >= 15 && hour < 18) {
        baseCount = 70 + Math.floor(Math.random() * 16); // 70-85
      }
      // Noche tardía (23:00) → 65-80 jugadores
      else {
        baseCount = 65 + Math.floor(Math.random() * 16); // 65-80
      }
      
      // Agregar variación pequeña (+/- 3)
      const variation = Math.floor(Math.random() * 7) - 3;
      let finalCount = baseCount + variation;
      
      // Limitar entre 25 y 160
      return Math.max(25, Math.min(160, finalCount));
    };

    // Actualizar cada 30 segundos
    const interval = setInterval(() => {
      const newCount = getRealisticPlayerCount();
      setPlayerCount(newCount);
    }, 30000); // 30 segundos

    // Establecer valor inicial basado en hora actual
    setPlayerCount(getRealisticPlayerCount());

    return () => clearInterval(interval);
  }, []);

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

  const percentage = (playerCount / 160) * 100;

  return (
    <section className="hero-section">
      {/* Background animado */}
      <div className="hero-background">
        <div className="grid-overlay"></div>
        <div className="particles-container" ref={particlesRef}></div>
        <div className="gradient-overlay"></div>
      </div>

      <div className="hero-container">
        
        {/* Lado Izquierdo: Contenido Principal */}
        <div className="hero-content">
          
          {/* Título Principal con Animación */}
          <div className="hero-title-wrapper">
            <h1 className="hero-title">
              <span className="title-line">RUST</span>
              <span className="title-line gradient-text">GRATIS</span>
            </h1>
            <div className="title-underline"></div>
          </div>
          
          {/* Subtítulo */}
          <div className="hero-subtitle">
            <p className="subtitle-text">
              Servidor Pirata v2275 • Gratis BR•ES
            </p>
            <p className="subtitle-cta">• Jogue Agora!</p>
          </div>
          
          {/* Botones de Acción */}
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
          
        </div>
        
        {/* Lado Derecho: Estado del Servidor (ANIMADO) */}
        <div className="server-status-card">
          
          {/* Header con pulse */}
          <div className="status-header">
            <h3 className="status-title">Estado del Servidor</h3>
            <div className="status-indicator">
              <div className="pulse-dot"></div>
              <span className="status-text">ONLINE</span>
            </div>
          </div>
          
          {/* Stats Grid con animaciones */}
          <div className="stats-grid">
            
            {/* Stat 1: Jugadores */}
            <div className="stat-item">
              <div className="stat-icon">
                <Users className="w-10 h-10" />
              </div>
              <div className="stat-content">
                <div className="stat-label">Jugadores</div>
                <div className="stat-values">
                  <div className="stat-value">{playerCount}</div>
                  <div className="stat-max">/160</div>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: `${percentage}%` }}></div>
                </div>
              </div>
            </div>
            
            {/* Stat 2: Latencia */}
            <div className="stat-item">
              <div className="stat-icon">
                <Server className="w-10 h-10" />
              </div>
              <div className="stat-content">
                <div className="stat-label">Latencia</div>
                <div className="stat-value">33<span className="stat-unit">ms</span></div>
              </div>
              <div className="latency-indicator excellent">
                <div className="latency-bar"></div>
                <div className="latency-bar"></div>
                <div className="latency-bar"></div>
                <div className="latency-bar"></div>
              </div>
            </div>
            
            {/* Stat 3: Uptime */}
            <div className="stat-item">
              <div className="stat-icon">
                <Activity className="w-10 h-10" />
              </div>
              <div className="stat-content">
                <div className="stat-label">Uptime</div>
                <div className="stat-value">99.9<span className="stat-unit">%</span></div>
              </div>
              <div className="uptime-ring">
                <svg viewBox="0 0 36 36" className="w-10 h-10">
                  <path className="uptime-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                  <path className="uptime-progress" strokeDasharray="99.9, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                </svg>
              </div>
            </div>
            
            {/* Stat 4: Rating */}
            <div className="stat-item">
              <div className="stat-icon">
                <Star className="w-10 h-10" fill="currentColor" />
              </div>
              <div className="stat-content">
                <div className="stat-label">Rating</div>
                <div className="stat-value">4.9<span className="stat-unit">/5</span></div>
              </div>
              <div className="rating-stars">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star half">★</span>
              </div>
            </div>
            
          </div>
          
          {/* Footer con info adicional */}
          <div className="status-footer">
            <div className="footer-item">
              <div className="footer-icon">🔄</div>
              <div className="footer-text">
                <div className="footer-label">Reinicio Semanal</div>
                <div className="footer-value">Mundo renovado cada 7 días</div>
              </div>
            </div>
            
            <div className="footer-item">
              <div className="footer-icon">🛡️</div>
              <div className="footer-text">
                <div className="footer-label">ANTI-DDOS</div>
                <div className="footer-value">Sistema anti-trampas avanzado</div>
              </div>
            </div>
            
            <div className="footer-item">
              <div className="footer-icon">📅</div>
              <div className="footer-text">
                <div className="footer-label">Actividades Diarias</div>
                <div className="footer-value">Eventos programados</div>
              </div>
            </div>
            
            <div className="footer-item">
              <div className="footer-icon">💬</div>
              <div className="footer-text">
                <div className="footer-label">Asistencia 24/7</div>
                <div className="footer-value">Equipo de soporte disponible</div>
              </div>
            </div>
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
          background: #000000;
          padding: 6rem 0 2rem 0;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .grid-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(220, 38, 38, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.08) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridScroll 20s linear infinite;
        }

        @keyframes gridScroll {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
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

        .gradient-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%);
          animation: gradientPulse 4s ease-in-out infinite;
        }

        @keyframes gradientPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .hero-container {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
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
          font-size: 6rem;
          color: #ffffff;
        }

        /* GRATIS - MÁS PEQUEÑO */
        .title-line:nth-child(2) {
          font-size: 4rem;
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
          gap: 1rem;
          flex-wrap: wrap;
          animation: fadeIn 1s ease-out 0.9s both;
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
          padding: 2rem;
          backdrop-filter: blur(20px);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.5),
            inset 0 0 40px rgba(220, 38, 38, 0.05);
          animation: cardFloat 3s ease-in-out infinite;
        }

        @keyframes cardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .status-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(220, 38, 38, 0.2);
        }

        .status-title {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pulse-dot {
          width: 12px;
          height: 12px;
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
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        .status-text {
          font-size: 0.9rem;
          font-weight: 700;
          color: #16a34a;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-shadow: 0 0 10px rgba(22, 163, 74, 0.5);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(220, 38, 38, 0.2);
          border-radius: 12px;
          padding: 1.25rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
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

        .stat-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex: 1;
        }
        
        .stat-values {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 900;
          color: #ffffff;
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }

        .stat-max {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 700;
        }

        .stat-unit {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 600;
        }

        .stat-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 1px;
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
          gap: 0.75rem;
        }

        .footer-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
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
          font-size: 1.5rem;
          filter: drop-shadow(0 0 5px rgba(220, 38, 38, 0.5));
        }

        .footer-text {
          flex: 1;
        }

        .footer-label {
          font-size: 0.75rem;
          color: #dc2626;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.25rem;
        }

        .footer-value {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 1200px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .title-line:nth-child(1) {
            font-size: 5rem;
          }
          
          .title-line:nth-child(2) {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 5rem 0 1rem 0;
          }
          
          .hero-container {
            padding: 0 1rem;
            gap: 2rem;
          }
          
          .title-line:nth-child(1) {
            font-size: 4rem;
          }
          
          .title-line:nth-child(2) {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .title-line:nth-child(1) {
            font-size: 3rem;
          }
          
          .title-line:nth-child(2) {
            font-size: 2rem;
          }
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
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .server-status-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
