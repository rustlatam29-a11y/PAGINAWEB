import React from 'react';

const GlobalBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="global-background">
      {children}
      
      <style>{`
        .global-background {
          position: relative;
          background: #070d1b;
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
            linear-gradient(rgba(255, 107, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 0, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.4;
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
          background: radial-gradient(ellipse at 50% 0%, rgba(255, 107, 0, 0.06) 0%, transparent 50%);
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
