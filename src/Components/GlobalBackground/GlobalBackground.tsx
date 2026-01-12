import React from 'react';

const GlobalBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="global-background">
      {children}
      
      <style>{`
        .global-background {
          position: relative;
          background: #000000;
          min-height: 100vh;
        }
        
        .global-background::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          background-image: 
            linear-gradient(rgba(220, 38, 38, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.08) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridScroll 20s linear infinite;
          opacity: 0.3;
        }
        
        @keyframes gridScroll {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .global-background::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(circle at 30% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%);
          animation: gradientPulse 4s ease-in-out infinite;
        }
        
        @keyframes gradientPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .global-background > * {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default GlobalBackground;
