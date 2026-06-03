import React from 'react';

const GlobalBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="global-background">
      {children}
      
      <style>{`
        .global-background {
          position: relative;
          background: #0a0a0a;
          min-height: 100vh;
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
