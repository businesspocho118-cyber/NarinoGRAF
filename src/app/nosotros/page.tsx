"use client";

import Header from "@/components/layout/Header";
import LocationMap from "@/components/LocationMap";
import { COMPANY_INFO } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MapPin, Phone, Star, Quote } from "lucide-react";

const features = [
  "Especialistas en polarizado de vehículos",
  "Protección de pintura (PPF)",
  "Personalización con vinilo",
  "Materiales de alta calidad",
  "Resultados profesionales",
  "Atención personalizada"
];

const stats = [
  { number: "6+", label: "Años de Experiencia" },
  { number: "500+", label: "Vehículos Atendidos" },
  { number: "100%", label: "Clientes Satisfechos" },
];

const testimonials = [
  {
    name: "Carlos Alberto",
    vehicle: "Toyota Hilux 2023",
    service: "Polarizados Nanocerámica",
    quote: "El trabajo quedó perfecto. Me explicó todas las opciones de materiales y el resultado exceedió mis expectativas. Totalmente recomendado.",
    rating: 5,
  },
  {
    name: "María Fernanda",
    vehicle: "Mazda 3 2022",
    service: "PPF Frontal",
    quote: "Excelente servicio. El Paint Protection Film le da una protección increíble a la pintura. El equipo es muy profesional.",
    rating: 5,
  },
  {
    name: "Jorge Hernán",
    vehicle: "Ford Ranger 2021",
    service: "Polarizados + Decoración",
    quote: "Llevo 3 vehículos tratados con ellos y siempre ha sido impecable. El mejor taller de polarizados en Pasto.",
    rating: 5,
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center w-full pt-24 pb-16 bg-[#0a0a0a] min-h-screen">
        {/* Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(230,48,48,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(230,48,48,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#E63030]/10 rounded-full blur-[150px]" 
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-white bg-black/50 px-4 py-2 rounded hover:bg-[#E63030] transition-colors border border-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm uppercase tracking-widest font-medium">Volver al inicio</span>
            </a>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="font-bebas text-4xl md:text-6xl text-white tracking-wide mb-3">
              CONÓCEN<span className="text-[#E63030]">OS</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Somos especialistas en el cuidado y personalización de tu vehículo.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-4 bg-[#111] border border-white/5 rounded-xl">
                <div className="font-bebas text-3xl text-[#E63030]">{stat.number}</div>
                <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Main content - two columns */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* About */}
            <div className="bg-[#111] border border-white/5 p-8 rounded-2xl">
              <h2 className="font-bebas text-2xl text-white mb-4">¿Quiénes somos?</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {COMPANY_INFO.description}
              </p>
              <div className="flex items-center gap-3 text-gray-300 mb-4">
                <MapPin className="w-5 h-5 text-[#E63030]" />
                <span>Ubicados en {COMPANY_INFO.location}</span>
              </div>
              <div className="flex flex-col gap-2">
                <a href={`https://wa.me/${COMPANY_INFO.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-[#E63030] transition-colors">
                  <Phone className="w-5 h-5 text-[#E63030]" />
                  <span>302 319 1520</span>
                </a>
                <a href={`https://wa.me/${COMPANY_INFO.phone2}`} className="flex items-center gap-3 text-gray-300 hover:text-[#E63030] transition-colors">
                  <Phone className="w-5 h-5 text-[#E63030]" />
                  <span>317 326 6964</span>
                </a>
              </div>
            </div>

            {/* Services list */}
            <div className="bg-[#111] border border-white/5 p-8 rounded-2xl">
              <h2 className="font-bebas text-2xl text-white mb-4">¿Qué hacemos?</h2>
              <div className="space-y-3">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <h2 className="font-bebas text-2xl text-white text-center mb-6">Lo que dicen <span className="text-[#E63030]">nuestros clientes</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-[#111] border border-white/5 p-6 rounded-xl">
                  <Quote className="w-8 h-8 text-[#E63030]/30 mb-3" />
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]" />
                    ))}
                  </div>
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.vehicle}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <h2 className="font-bebas text-2xl text-white text-center mb-6">¿<span className="text-[#E63030]">Dónde</span> estamos?</h2>
            <LocationMap />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a 
              href="/#contacto"
              className="inline-block bg-[#E63030] hover:bg-[#CC0000] text-white px-8 py-3 uppercase tracking-widest font-bold transition-all"
            >
              Contáctanos
            </a>
          </motion.div>
        </div>
      </main>
    </>
  );
}