"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="font-bebas text-3xl tracking-wider text-white hover:text-[var(--color-primary)] transition-colors">NARIÑO<span className="text-[var(--color-primary)]">GRAF</span></a>
          
          {/* Social Links - Next to logo */}
          <div className="hidden lg:flex items-center gap-2 ml-4 pl-4 border-l border-white/20">
            <a
              href="https://www.facebook.com/profile.php?id=100063580525899"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#1877F2] transition-colors"
            >
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@luismigueltoledo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-black transition-colors"
            >
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.1 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.19 8.19 0 004.78 1.52V6.74a4.83 4.83 0 01-1.01-.05z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/luishurtado.790/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 transition-colors"
            >
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-gray-300">
          <a href="/servicios" className="hover:text-white transition-colors hover:text-[var(--color-primary)]">Servicios</a>
          <a href="/portafolio" className="hover:text-white transition-colors hover:text-[var(--color-primary)]">Portafolio</a>
          <a href="/nosotros" className="hover:text-white transition-colors hover:text-[var(--color-primary)]">Nosotros</a>
          <a
            href="/#contacto"
            className="px-6 py-2 border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 font-bold"
          >
            Cotizar
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-6">
          <a href="/servicios" className="text-xl font-bebas tracking-wide" onClick={() => setIsMenuOpen(false)}>Servicios</a>
          <a href="/portafolio" className="text-xl font-bebas tracking-wide" onClick={() => setIsMenuOpen(false)}>Portafolio</a>
          <a href="/nosotros" className="text-xl font-bebas tracking-wide" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
          <a
            href="/#contacto"
            className="text-center px-6 py-3 bg-[var(--color-primary)] text-white font-bold w-full uppercase tracking-wider"
          >
            Cotizar
          </a>
        </div>
      )}
    </header>
  );
}
