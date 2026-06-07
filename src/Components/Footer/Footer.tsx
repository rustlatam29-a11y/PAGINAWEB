import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../Context/LanguageContext";
import VisitorCounter from "../VisitorCounter/VisitorCounter";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-[#111] border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-8 md:px-12 py-5">
        <div className="flex flex-col items-center gap-3">
          <span className="text-white font-black text-lg">
            Paraguay<span className="text-red-500">RAIDER</span>
          </span>

          <div className="flex items-center gap-3 text-xs text-gray-500">
            <Link
              to="/terms"
              className="hover:text-white transition-colors"
            >
              {t("footer.terms")}
            </Link>
            <span className="text-gray-700">|</span>
            <Link
              to="/privacy"
              className="hover:text-white transition-colors"
            >
              {t("footer.privacy")}
            </Link>
            <span className="text-gray-700">|</span>
            <a
              href="https://discord.com/invite/7Vz4YBamFG"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Discord
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="https://discord.gg/hYxwFeMXp3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Discord
            </a>
          </div>

          <VisitorCounter />

          <p className="text-gray-600 text-xs">
            &copy; {year} ParaguayRAIDER. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
