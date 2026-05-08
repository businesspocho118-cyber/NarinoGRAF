"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { Shield, Palette, Zap } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  polarizados: <Shield className="w-10 h-10 mb-4 text-[var(--color-gold)]" />,
  calcomanias: <Palette className="w-10 h-10 mb-4 text-[var(--color-primary)]" />,
  ppf: <Zap className="w-10 h-10 mb-4 text-[var(--color-gold)]" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="servicios" className="w-full py-24 bg-[#1a1a1a] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide mb-4">Nuestros <span className="text-[var(--color-primary)]">Servicios</span></h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mb-6"></div>
          <p className="text-gray-400 max-w-2xl font-light">
            Soluciones premium para vehiculos. Utilizamos los mejores materiales del mercado para garantizar durabilidad y acabados perfectos.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative bg-[var(--color-surface)] border border-[var(--color-border-subtle)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--color-primary)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

              {iconMap[service.id]}
              <h3 className="font-bebas text-2xl tracking-widest text-white mb-3 uppercase">{service.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="/servicios"
                className="inline-block px-6 py-3 bg-[var(--color-primary)] text-white text-sm uppercase tracking-widest hover:bg-[var(--color-primary-hover)] transition-all font-bold"
              >
                Mas detalles
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}