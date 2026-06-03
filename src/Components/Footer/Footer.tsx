import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <span className="text-white font-black text-2xl">
              Paraguay<span className="text-red-500">RAIDER</span>
            </span>
          </div>

          <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
            <Link to="/terms" className="hover:text-white transition-colors">
              Términos
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacidad
            </Link>
            <span className="text-gray-600">|</span>
            <a
              href="https://api.whatsapp.com/send?phone=595981144534"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">Discord: paraguayservers</span>
          </div>

          <p className="text-gray-500 text-sm">
            &copy; {year} ParaguayRAIDER. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
