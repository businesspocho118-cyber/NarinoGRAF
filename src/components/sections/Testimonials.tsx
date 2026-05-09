"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  vehicle: string;
  service: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Andres Felipe",
    vehicle: "Toyota Corolla 2023",
    service: "Polarizados Nanocarbono",
    quote: "El trabajo quedo excepscional. Me explico todas las opciones y el resultado supero mis expectativas. Totalmente recomendado.",
    rating: 5,
    image: "https://i.pravatar.cc/160?img=33",
  },
  {
    id: 2,
    name: "Maria Camila",
    vehicle: "Mazda CX-5 2022",
    service: "PPF Frontal",
    quote: "Excelente servicio. El Paint Protection Film le da una proteccion increible a la pintura. El equipo es muy profesional.",
    rating: 5,
    image: "https://i.pravatar.cc/160?img=24",
  },
  {
    id: 3,
    name: "Jorge Andres",
    vehicle: "Ford Ranger 2021",
    service: "Polarizados + Diseno",
    quote: "Llevo 3 vehiculos tratados con ellos y siempre ha sido impecable. El mejor taller de polarizados en Pasto.",
    rating: 5,
    image: "https://i.pravatar.cc/160?img=12",
  },
  {
    id: 4,
    name: "Laura Isabella",
    vehicle: "Kia Sportage 2024",
    service: "Polarizados Nanoceramica",
    quote: "Muy contenta con el servicio. La calidad del polarizado es genial. Lo recomiendo a ojos cerrados.",
    rating: 5,
    image: "https://i.pravatar.cc/160?img=44",
  },
  {
    id: 5,
    name: "Roberto Carlos",
    vehicle: "Nissan Frontier 2022",
    service: "Diseno e Impresion",
    quote: "Me hicieron un diseno personalizado unico. La atencion al detalle es extraordinaria. Mi truck quedo increible.",
    rating: 5,
    image: "https://i.pravatar.cc/160?img=53",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const goTo = (direction: number) => {
    const newIndex = (activeIndex + direction + testimonials.length) % testimonials.length;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => goTo(1), 6000);
    return () => clearInterval(interval);
  }, [isAutoplay, activeIndex]);

  return (
    <section id="testimonios" className="w-full py-24 bg-[var(--color-surface)] border-y border-[var(--color-border-subtle)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 mb-4">
            <Quote className="w-4 h-4 text-[var(--color-primary)]" />
            <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Testimonios</span>
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide mb-4">
            Lo que dicen <span className="text-[var(--color-primary)]">nuestros</span> clientes
          </h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mb-6" />
          <p className="text-gray-400 max-w-xl font-light">
            Descubre por qué somos la elección preferido de cientos de conductores en Nariño. 
            Estas son experiencias reales de quienes confiaran sus vehículos.
          </p>
        </div>

        {/* Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-black/40 border border-white/10 p-8 md:p-12 backdrop-blur-sm"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-8 w-16 h-16 text-[var(--color-primary)]/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[var(--color-gold)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-8">
                  "{testimonials[activeIndex].quote}"
                </p>
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[var(--color-primary)]/30">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">{testimonials[activeIndex].name}</p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[activeIndex].vehicle} • {testimonials[activeIndex].service}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-12 bg-[var(--color-primary)]"
                      : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => goTo(-1)}
                className="p-3 rounded-full border border-white/20 text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => goTo(1)}
                className="p-3 rounded-full border border-white/20 text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}