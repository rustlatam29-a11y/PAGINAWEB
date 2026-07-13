import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../../Context/LanguageContext";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t, tList } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setMobileOpen((prev) => !prev);
    }
  }, []);

  const navLabels = tList("header.nav") as string[];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-sm"
          : "bg-[#0a0a0a]/80"
      }`}
      style={{
        transition:
          "background-color 300ms ease-out, backdrop-filter 300ms ease-out",
      }}
    >
      <nav
        className="max-w-screen-xl mx-auto px-8 md:px-12"
        aria-label="Menu principal"
      >
        <div className="flex items-center h-18">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 flex-shrink-0"
            aria-label="LATAMRUST - Ir al inicio"
          >
            <img
              src="/loader-bg.webp"
              alt="LATAMRUST"
              width="40"
              height="40"
              className="w-10 h-10 rounded-lg object-cover"
              loading="eager"
            />
            <div>
              <span className="text-white font-black text-xl tracking-tight block leading-tight">
                Paraguay<span className="text-red-500">RAIDER</span>
              </span>
              <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase block leading-tight mt-1">
                {t("header.tagline")}
              </span>
            </div>
          </a>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5">
            {Array.isArray(navLabels) &&
              navLabels.map((label: string, i: number) => {
                const hrefs = ["#servicios", "#planes", "#proyectos", "#faq"];
                return (
                  <a
                    key={i}
                    href={hrefs[i]}
                    className="text-gray-300 hover:text-red-500 text-sm font-bold tracking-wide transition-colors border-b-2 border-transparent hover:border-red-500 pb-1"
                  >
                    {label}
                  </a>
                );
              })}

            {/* Language Switcher */}
            <div className="inline-flex items-center border border-white/10 bg-white/[0.02] ml-2">
              <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase transition-colors duration-200 ${
                  language === "es"
                    ? "bg-red-600 text-white"
                    : "text-gray-500 hover:text-white"
                }`}
                aria-label="Cambiar a español"
              >
                <Globe className="w-3 h-3 inline mr-1 -mt-0.5" />
                ES
              </button>
              <div className="w-px h-4 bg-white/10" />
              <button
                onClick={() => setLanguage("pt")}
                className={`px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase transition-colors duration-200 ${
                  language === "pt"
                    ? "bg-red-600 text-white"
                    : "text-gray-500 hover:text-white"
                }`}
                aria-label="Mudar para português"
              >
                <Globe className="w-3 h-3 inline mr-1 -mt-0.5" />
                PT
              </button>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            onKeyDown={handleToggleKeyDown}
            className="md:hidden text-white"
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          role="menu"
          aria-hidden={!mobileOpen}
          className={`md:hidden border-t border-white/10 py-4 space-y-3 overflow-hidden transition-all duration-300 ${
            mobileOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 border-t-0"
          }`}
        >
          {Array.isArray(navLabels) &&
            navLabels.map((label: string, i: number) => {
              const hrefs = ["#servicios", "#planes", "#proyectos", "#faq"];
              return (
                <a
                  key={i}
                  href={hrefs[i]}
                  onClick={() => setMobileOpen(false)}
                  role="menuitem"
                  className="block text-gray-300 hover:text-red-500 text-sm font-bold py-2 transition-colors"
                >
                  {label}
                </a>
              );
            })}

          {/* Mobile Language Switcher */}
          <div className="flex gap-2 py-2">
            <button
              onClick={() => setLanguage("es")}
              className={`px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase rounded-lg transition-colors duration-200 ${
                language === "es"
                  ? "bg-red-600 text-white"
                  : "bg-white/5 text-gray-500 border border-white/10"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("pt")}
              className={`px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase rounded-lg transition-colors duration-200 ${
                language === "pt"
                  ? "bg-red-600 text-white"
                  : "bg-white/5 text-gray-500 border border-white/10"
              }`}
            >
              PT
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
