"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Shadow Solar Film", logo: "/logos/shadow.png" },
  { name: "Sunmask", logo: "/logos/sunmask.png" },
  { name: "Gravity", logo: "/logos/gravity.png" },
  { name: "Dass", logo: "/logos/dass.jpeg" },
  { name: "Speedmax", logo: "/logos/speedmax.jpeg" },
  { name: "Spectra", logo: "/logos/spectra.jpeg" },
];

// Duplicate enough for seamless infinite loop
const allBrands = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands];

export default function LogoCloud() {
  return (
    <section id="marcas" className="w-full py-16 bg-[#111] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-bebas text-3xl md:text-4xl text-white tracking-wide mb-3">
            Trabajamos con las mejores <span className="text-[#E63030]">marcas</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Materiales de alta calidad, garantizados y contramarcados para tu total confianza.
          </p>
        </motion.div>
      </div>

      {/* Scrolling logos container */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111] to-transparent z-10 pointer-events-none" />

        {/* CSS-based infinite scroll animation */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / ${brands.length}));
            }
          }
          .logo-track {
            animation: scroll 20s linear infinite;
          }
        `}</style>

        <div className="flex overflow-hidden">
          <div className="logo-track flex gap-20 md:gap-24 py-4">
            {allBrands.map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center px-8 shrink-0"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-14 md:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}