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
            linear-gradient(rgba(220, 38, 38, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.5;
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
          background: radial-gradient(ellipse at 50% 0%, rgba(220, 38, 38, 0.08) 0%, transparent 60%);
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
