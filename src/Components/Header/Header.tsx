import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/img1.webp"
              alt="Logo"
              className="w-10 h-10 rounded-lg object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="text-white font-black text-xl tracking-tight">
              Paraguay<span className="text-red-500">RAIDER</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
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
              href="https://api.whatsapp.com/send?phone=595981144534"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all"
            >
              WhatsApp
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
              href="https://api.whatsapp.com/send?phone=595981144534"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-red-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg text-center"
            >
              WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
