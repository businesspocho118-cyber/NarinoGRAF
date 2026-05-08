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
          {/* Logo - Link to home */}
          <a href="/" className="font-bebas text-3xl tracking-wider text-white hover:text-[var(--color-primary)] transition-colors">NARIÑO<span className="text-[var(--color-primary)]">GRAF</span></a>
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
