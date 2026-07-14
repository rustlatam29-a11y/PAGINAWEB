import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../Context/LanguageContext";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#050505] border-t border-red-500/15 rp-noise overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-red-600/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Línea diagonal */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-8 md:px-12 py-10">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" aria-label="RUST PIRATA inicio">
            <img
              src="/rust-old-school-logo.webp"
              alt="RUST OLD SCHOOL"
              width="36"
              height="36"
              className="w-9 h-9 rounded-md object-cover"
              loading="lazy"
            />
            <span className="rp-display text-white font-bold text-lg tracking-tight">
              RUST <span className="text-red-500">PIRATA</span>
            </span>
          </a>

          {/* Tagline servidor */}
          <span className="rp-mono text-gray-500 text-[10px] tracking-[0.25em] uppercase">
            {t("brand.server")} · 2275 OldRecoil
          </span>

          {/* Links legales */}
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <Link to="/terms" className="hover:text-red-500 transition-colors rp-ui">
              {t("footer.terms")}
            </Link>
            <span className="text-gray-700">·</span>
            <Link to="/privacy" className="hover:text-red-500 transition-colors rp-ui">
              {t("footer.privacy")}
            </Link>
          </div>

          <p className="text-gray-600 text-xs rp-ui">
            &copy; {year} RUST PIRATA. {t("footer.rights")}
          </p>
          <p className="text-gray-700 text-[10px] tracking-[0.2em] uppercase rp-mono">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;