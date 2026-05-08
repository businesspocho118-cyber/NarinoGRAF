"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="galeria" className="w-full py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide mb-4">Nuestro <span className="text-[var(--color-primary)]">Portafolio</span></h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mb-6"></div>
          <p className="text-gray-400 max-w-xl mb-8">
            Mira todos nuestros trabajos realizados. Polarizados, PPF, decoración vehicular y más.
          </p>
          <a 
            href="/portafolio"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-4 uppercase tracking-widest font-bold transition-all"
          >
            Ver Portafolio Voll
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}