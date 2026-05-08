"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const features = [
  "Especialistas en polarizado de vehículos",
  "Protección de pintura (PPF)",
  "Personalización con vinilo",
  "Materiales de alta calidad",
  "Resultados profesionales",
  "Atención personalizada"
];

export default function Features() {
  return (
    <section id="nosotros" className="w-full py-24 bg-[var(--color-surface)] border-y border-[var(--color-border-subtle)] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-primary)]/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide mb-6">¿Por qué elegir <br/><span className="text-[var(--color-primary)]">Nariñograf?</span></h2>
            <p className="text-gray-400 text-lg mb-6 font-light max-w-lg">
              {COMPANY_INFO.description}
            </p>
            <div className="flex items-center gap-4 mb-8">
              <MapPin className="w-5 h-5 text-[var(--color-gold)]" />
              <span className="text-gray-300">Ubicados en {COMPANY_INFO.location}</span>
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <a href={`https://wa.me/${COMPANY_INFO.phone}`} className="flex items-center gap-3 hover:text-[var(--color-primary)] transition-colors">
                <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                <span className="text-gray-300">3023191520</span>
              </a>
              <a href={`https://wa.me/${COMPANY_INFO.phone2}`} className="flex items-center gap-3 hover:text-[var(--color-primary)] transition-colors">
                <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                <span className="text-gray-300">3173266964</span>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 w-full aspect-square md:aspect-video lg:aspect-square relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 border border-white/10 m-4 z-20"></div>
            <img 
              src="/nosotros.png" 
              alt="NARIÑOGRAF - Por qué elegirnos" 
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute bottom-8 right-8 bg-[var(--color-primary)] text-white p-6 z-30 shadow-2xl">
              <span className="block font-bebas text-5xl mb-1">6+</span>
              <span className="block text-xs uppercase tracking-widest font-bold">Años de <br/>Experiencia</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
