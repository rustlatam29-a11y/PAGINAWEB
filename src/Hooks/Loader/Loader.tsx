import React, { useState, useEffect } from "react";

interface LoaderProps {
  logoUrl?: string;
  onLoadComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ logoUrl = "/LATAMLOGO.webp", onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Inicializando panel...");
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const steps = [
    { text: "Conectando al panel de control...", icon: "🔌" },
    { text: "Cargando plugins del servidor...", icon: "🧩" },
    { text: "Configurando Rust 2275...", icon: "⚙️" },
    { text: "Activando AntiCheat...", icon: "🛡️" },
    { text: "Optimizando rendimiento...", icon: "⚡" },
    { text: "Servidor listo para usar", icon: "✅" },
  ];

  const terminalCommands = [
    "> Iniciando LATAMRUST Panel v3.0...",
    "> Cargando módulos: [OK]",
    "> Versión Rust 2275 OldRecoil: [DISPONIBLE]",
    "> Versión Rust 2388 Actualizado: [DISPONIBLE]",
    "> Plugins: +30,000 disponibles en la tienda",
    "> Oxide | Economy | Kits | Shop",
    "> AntiCheat: RustAdmin [ACTIVO]",
    "> Servidor: 64GB RAM | NVMe SSD | 1Gbps",
    "> ¡Creá tu servidor en minutos!",
  ];

  useEffect(() => {
    let lineIndex = 0;
    const terminalInterval = setInterval(() => {
      if (lineIndex < terminalCommands.length) {
        setTerminalLines(prev => [...prev, terminalCommands[lineIndex]]);
        lineIndex++;
      }
    }, 400);

    const loadingInterval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 12;
        const newProgress = Math.min(prev + increment, 100);

        const stepIndex = Math.floor((newProgress / 100) * steps.length);
        if (stepIndex !== currentStep && stepIndex < steps.length) {
          setCurrentStep(stepIndex);
          setStatus(steps[stepIndex].text);
        }

        if (newProgress >= 100) {
          clearInterval(loadingInterval);
          clearInterval(terminalInterval);
          setStatus("¡Servidor listo!");

          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              if (onLoadComplete) onLoadComplete();
            }, 600);
          }, 800);
        }

        return newProgress;
      });
    }, 350);

    return () => {
      clearInterval(loadingInterval);
      clearInterval(terminalInterval);
    };
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loader-root ${!isVisible ? "fade-out" : ""}`}>
      {/* Animated grid background */}
      <div className="loader-grid" />

      {/* Floating particles */}
      <div className="loader-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="loader-content">
        {/* Logo with glow */}
        <div className="logo-container">
          <img
            src={logoUrl}
            alt="LATAMRUST"
            className="loader-logo"
            width="140"
            height="140"
            fetchPriority="high"
          />
          <div className="logo-ring" />
          <div className="logo-ring logo-ring-2" />
        </div>

        {/* Title */}
        <h1 className="loader-title">
          <span className="title-white">LATAM</span>
          <span className="title-rust">RUST</span>
        </h1>
        <p className="loader-tagline">RUST 2275 &bull; 2388 &bull; +30,000 PLUGINS</p>

        {/* Terminal window */}
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <span className="terminal-title">latamrust@panel:~</span>
          </div>
          <div className="terminal-body">
            {terminalLines.map((line, i) => (
              <div key={i} className="terminal-line">
                {line}
              </div>
            ))}
            <span className="terminal-cursor">_</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="progress-wrapper">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
            <div className="progress-glow" />
          </div>
          <div className="progress-info">
            <span className="progress-status">{steps[currentStep].icon} {status}</span>
            <span className="progress-percent">{Math.floor(progress)}%</span>
          </div>
        </div>

        {/* Feature pills */}
        <div className="feature-pills">
          <div className="pill">
            <span className="pill-icon">🎮</span>
            <span>Rust 2275</span>
          </div>
          <div className="pill">
            <span className="pill-icon">🚀</span>
            <span>Rust 2388</span>
          </div>
          <div className="pill">
            <span className="pill-icon">🧩</span>
            <span>+30K Plugins</span>
          </div>
          <div className="pill">
            <span className="pill-icon">⚡</span>
            <span>Setup en Minutos</span>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .loader-root {
          position: fixed;
          inset: 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a0505 50%, #0a0a0a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .loader-root.fade-out {
          opacity: 0;
          transform: scale(0.98);
        }

        /* Grid */
        .loader-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(220, 38, 38, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridScroll 25s linear infinite;
        }
        @keyframes gridScroll {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        /* Particles */
        .loader-particles {
          position: absolute;
          inset: 0;
        }
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(220, 38, 38, 0.5);
          border-radius: 50%;
          animation: particleFloat 4s ease-in-out infinite;
          box-shadow: 0 0 6px rgba(220, 38, 38, 0.6);
        }
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-30px) scale(1.5); opacity: 1; }
        }

        /* Content */
        .loader-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 500px;
          padding: 1.5rem;
          width: 100%;
        }

        /* Logo */
        .logo-container {
          position: relative;
          display: inline-block;
          margin-bottom: 1.5rem;
        }
        .loader-logo {
          width: 120px;
          height: 120px;
          border-radius: 20px;
          position: relative;
          z-index: 2;
          animation: logoPulse 2.5s ease-in-out infinite;
        }
        @keyframes logoPulse {
          0%, 100% { filter: drop-shadow(0 0 15px rgba(220, 38, 38, 0.5)); transform: scale(1); }
          50% { filter: drop-shadow(0 0 30px rgba(220, 38, 38, 0.9)); transform: scale(1.03); }
        }
        .logo-ring {
          position: absolute;
          inset: -15px;
          border: 2px solid rgba(220, 38, 38, 0.3);
          border-radius: 28px;
          animation: ringPulse 2s ease-in-out infinite;
        }
        .logo-ring-2 {
          inset: -30px;
          border-color: rgba(220, 38, 38, 0.15);
          animation-delay: 0.5s;
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }

        /* Title */
        .loader-title {
          font-size: 2.8rem;
          font-weight: 900;
          margin: 0 0 0.3rem;
          letter-spacing: 2px;
          line-height: 1;
        }
        .title-white {
          color: #fff;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
        }
        .title-rust {
          color: #dc2626;
          background: linear-gradient(90deg, #dc2626, #ff4444, #dc2626);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shine 2s linear infinite;
        }
        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .loader-tagline {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.75rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin: 0 0 1.5rem;
          font-weight: 500;
        }

        /* Terminal */
        .terminal-window {
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(220, 38, 38, 0.3);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
          text-align: left;
        }
        .terminal-header {
          background: rgba(220, 38, 38, 0.1);
          padding: 0.5rem 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          border-bottom: 1px solid rgba(220, 38, 38, 0.2);
        }
        .terminal-dots {
          display: flex;
          gap: 5px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .dot.red { background: #ff5f57; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #28c840; }
        .terminal-title {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.7rem;
          font-family: monospace;
        }
        .terminal-body {
          padding: 0.8rem;
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          max-height: 120px;
          overflow-y: auto;
        }
        .terminal-line {
          color: #4ade80;
          margin-bottom: 0.2rem;
          opacity: 0;
          animation: lineAppear 0.3s ease forwards;
        }
        @keyframes lineAppear {
          to { opacity: 1; }
        }
        .terminal-cursor {
          color: #dc2626;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }

        /* Progress */
        .progress-wrapper {
          margin-bottom: 1.5rem;
        }
        .progress-track {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #dc2626, #ff4444, #dc2626);
          background-size: 200% 100%;
          border-radius: 10px;
          transition: width 0.3s ease;
          animation: progressShine 1.5s linear infinite;
          box-shadow: 0 0 15px rgba(220, 38, 38, 0.6);
        }
        @keyframes progressShine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .progress-glow {
          position: absolute;
          top: -5px;
          left: 0;
          right: 0;
          height: 14px;
          background: linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.3), transparent);
          filter: blur(5px);
        }
        .progress-info {
          display: flex;
          justify-content: space-between;
          margin-top: 0.5rem;
        }
        .progress-status {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.75rem;
        }
        .progress-percent {
          color: #dc2626;
          font-weight: 700;
          font-size: 0.85rem;
          text-shadow: 0 0 10px rgba(220, 38, 38, 0.5);
        }

        /* Feature pills */
        .feature-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }
        .pill {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(220, 38, 38, 0.1);
          border: 1px solid rgba(220, 38, 38, 0.25);
          padding: 0.4rem 0.8rem;
          border-radius: 50px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.65rem;
          font-weight: 500;
          animation: pillAppear 0.5s ease forwards;
          opacity: 0;
        }
        .pill:nth-child(1) { animation-delay: 0.5s; }
        .pill:nth-child(2) { animation-delay: 0.7s; }
        .pill:nth-child(3) { animation-delay: 0.9s; }
        .pill:nth-child(4) { animation-delay: 1.1s; }
        @keyframes pillAppear {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pill-icon {
          font-size: 0.8rem;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .loader-title { font-size: 2.2rem; }
          .loader-logo { width: 100px; height: 100px; }
          .terminal-body { font-size: 0.55rem; max-height: 90px; }
          .feature-pills { gap: 0.4rem; }
          .pill { font-size: 0.6rem; padding: 0.3rem 0.6rem; }
        }

        @media (max-width: 380px) {
          .loader-title { font-size: 1.8rem; }
          .loader-tagline { font-size: 0.6rem; letter-spacing: 2px; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
