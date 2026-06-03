import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-xs text-gray-500">
          <span>&copy; {currentYear} LATAMRUST</span>
          
          <div className="flex items-center space-x-4">
            <Link to="/terms" className="hover:text-white transition-colors">Términos</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacidad</Link>
            <a href="https://api.whatsapp.com/send?phone=595981144534" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors font-bold">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
