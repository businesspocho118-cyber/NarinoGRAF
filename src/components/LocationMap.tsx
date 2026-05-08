"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

interface LocationMapProps {
  className?: string;
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(230,48,48,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(230,48,48,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-64 h-64 bg-[#E63030]/20 rounded-full blur-[80px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-0 w-48 h-48 bg-[#C9A84C]/15 rounded-full blur-[60px]"
      />
    </div>
  );
}

export function LocationMap({ className = "" }: LocationMapProps) {
  const mapUrl = "https://www.google.com/maps/embed?pb=!4v1778088145613!6m8!1m7!1s253ENRmqoAthNPJb_eW4sA!2m2!1d1.196294802461748!2d-77.2640730463682!3f234.16553883877663!4f6.153524764773991!5f3.2539953841747584";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative w-full ${className}`}
    >
      <AnimatedBackground />
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="font-bebas text-4xl text-white tracking-widest">
            UBIC<span className="text-[#E63030]">ACIÓN</span>
          </span>
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#E63030]/10 border border-[#E63030]/30 px-4 py-2 rounded-full mb-3">
              <MapPin className="w-4 h-4 text-[#E63030]" />
              <span className="text-[#E63030] text-sm font-medium">Pasto, Nariño</span>
            </div>
            <h3 className="text-white font-bebas text-2xl tracking-wide mb-2">Barrio Lorenzo</h3>
            <p className="text-gray-400 text-sm mb-4">Contactanos para mas informacion.</p>
            <a
              href="https://goo.gl/maps/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#E63030] hover:text-white transition-colors text-sm"
            >
              <Navigation className="w-4 h-4" />
              <span>Como llegar</span>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-xl overflow-hidden border-2 border-white/10 hover:border-[#E63030]/50 transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-10" />
              <iframe
                src={mapUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Ubicacion NARINGRAF - Barrio Lorenzo Pasto"
              />
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#E63030] rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E63030] rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E63030] rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#E63030] rounded-br-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default LocationMap;