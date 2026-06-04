import React, { useState, useEffect } from "react";
import { Menu, X, Gamepad2 } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#planes" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "FAQ", href: "#faq" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md"
          : "bg-[#0a0a0a]/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-8 md:px-12">
        <div className="flex items-center h-18">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/loader-bg.png"
              alt="Logo"
              width="40"
              height="40"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div>
              <span className="text-white font-black text-xl tracking-tight block leading-tight">
                Paraguay<span className="text-red-500">RAIDER</span>
              </span>
              <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase block leading-tight mt-1">
                SERVIDORES PIRATAS!
              </span>
            </div>
          </a>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-red-500 text-sm font-bold tracking-wide transition-colors border-b-2 border-transparent hover:border-red-500 pb-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://discord.gg/hYxwFeMXp3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-all flex items-center gap-2"
            >
              <Gamepad2 className="w-4 h-4" />
              DC DEV
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-300 hover:text-red-500 text-sm font-bold py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://discord.gg/hYxwFeMXp3"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#5865F2] text-white text-sm font-bold px-5 py-2.5 rounded-lg text-center flex items-center justify-center gap-2"
            >
              <Gamepad2 className="w-4 h-4" />
              DC DEV
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
