import React from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "../VisitorCounter/VisitorCounter";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111] border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-8 md:px-12 py-5">
        <div className="flex flex-col items-center gap-3">
          <span className="text-white font-black text-lg">
            Paraguay<span className="text-red-500">RAIDER</span>
          </span>

          <div className="flex items-center gap-3 text-xs text-gray-500">
            <Link to="/terms" className="hover:text-white transition-colors">
              Términos
            </Link>
            <span className="text-gray-700">|</span>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacidad
            </Link>
            <span className="text-gray-700">|</span>
            <a
              href="https://wa.me/595981144534"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="https://discord.gg/hYxwFeMXp3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Discord: paraguayservers
            </a>
          </div>

          <VisitorCounter />

          <p className="text-gray-600 text-xs">
            &copy; {year} ParaguayRAIDER. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
