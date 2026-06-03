import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <span className="text-white font-black text-lg">
              Paraguay<span className="text-red-500">RAIDER</span>
            </span>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Servidores y plugins de Rust pirata para toda Latinoamérica.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Enlaces</h4>
            <div className="space-y-2">
              <Link to="/terms" className="block text-gray-500 hover:text-white text-sm transition-colors">
                Términos
              </Link>
              <Link to="/privacy" className="block text-gray-500 hover:text-white text-sm transition-colors">
                Privacidad
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=595981144534"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-500 hover:text-white text-sm transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Comunidad</h4>
            <div className="space-y-2">
              <p className="text-gray-500 text-sm">Discord: paraguayraider</p>
              <p className="text-gray-500 text-sm">Discord: paraguayservers</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">
            &copy; {year} ParaguayRAIDER. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Hecho con experiencia real en Rust.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
