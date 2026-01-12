import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

interface FooterProps {
  title?: string;
  logoUrl?: string;
}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-950 to-black border-t border-red-900/20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-950/10 to-transparent pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          {/* Copyright text */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>&copy; {currentYear} LATAM RUST. Hecho con</span>
            <Heart className="w-4 h-4 text-red-600 animate-pulse" />
            <span>por el equipo de desarrollo.</span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6 text-sm">
            <Link 
              to="/terms" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
            >
              Términos de Servicio
            </Link>
            <span className="text-gray-700">|</span>
            <Link 
              to="/privacy" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
