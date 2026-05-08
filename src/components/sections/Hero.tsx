"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" /> {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(230,48,48,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(230,48,48,0.05)_1px,transparent_1px)] bg-[size:100px_100px] z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container relative z-20 mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-[var(--color-gold)] uppercase tracking-[0.3em] font-medium text-sm md:text-base mb-6 flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-[var(--color-gold)]/50 block"></span>
            6 Años de Experiencia
            <span className="w-12 h-[1px] bg-[var(--color-gold)]/50 block"></span>
          </p>
          <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white tracking-normal drop-shadow-2xl mb-6">
            POLARIZADOS<br />
            <span className="text-[var(--color-primary)]">PASTO</span><br />
            PREMIUM
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 font-light">
            Los mejores polarizados en Pasto. Protegemos tu vehículo con materiales de alta calidad. Decoración vehicular, PPF y más.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-4 uppercase tracking-widest font-bold text-sm transition-all duration-300 w-full sm:w-auto"
            >
              Solicitar Cotización
            </a>
            <a
              href="#servicios"
              className="border border-white/20 hover:border-white/60 hover:bg-white/5 text-white px-8 py-4 uppercase tracking-widest font-bold text-sm transition-all duration-300 w-full sm:w-auto"
            >
              Ver Servicios
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
