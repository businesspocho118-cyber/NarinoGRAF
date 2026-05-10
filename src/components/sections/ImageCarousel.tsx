"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

export default function ImageCarousel({ images, interval = 1000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img
            src={images[currentIndex]}
            alt={`Agenda tu cita ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="font-bebas text-3xl text-white tracking-wide mb-4">¿Listo para transformar tu vehículo?</h3>
        <p className="text-gray-300 text-sm mb-6">Contáctanos ahora y obtén tu cotización gratis.</p>
        <div className="space-y-2">
          <p className="text-xs text-gray-400 mb-2">O contáctanos directo:</p>
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
            <span className="text-white text-sm">302 319 1520</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
            <span className="text-white text-sm">317 326 6964</span>
          </div>
        </div>
      </div>
      {/* Dots indicator */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white w-4" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}