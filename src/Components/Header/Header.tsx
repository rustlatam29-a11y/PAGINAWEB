import React, { useState, useEffect } from "react";

interface HeaderProps {
  logoUrl?: string;
}

const Header: React.FC<HeaderProps> = ({
  logoUrl = "/img1.webp",
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="Logo LATAMRUST"
              className="w-10 h-10 rounded-lg object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
              }}
            />
            <div>
              <span className="text-white font-black text-lg tracking-tight">
                Paraguay<span className="text-red-500">RAIDER</span>
              </span>
              <p className="text-gray-500 text-[10px] tracking-widest uppercase -mt-0.5">Ventas de Servidores y Plugins de Rust Pirata</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://api.whatsapp.com/send?phone=595981144534" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
