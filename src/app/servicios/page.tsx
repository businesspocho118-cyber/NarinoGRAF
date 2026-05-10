"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import { Shield, Palette, Zap, ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";

const serviciosDetallados = [
  {
    id: "polarizados",
    title: "Polarizados Profesional",
    icon: Shield,
    color: "#C9A84C",
    description: "Los mejores materiales para proteger tu vehiculo del calor y rayos UV. Nanotecnologia de ultima generacion.",
    opciones: [
      { nombre: "Papel Americano", descripcion: "Calidad americana estandar. Buena rejected de calor.", image: "/polarizado-papel-americano.jpeg" },
      { nombre: "Nanocarbono", descripcion: "Tecnologia de carbon nano. 99% UV, reduce temperatura hasta 15F.", image: "/polarizado-nanocarbono.webp" },
      { nombre: "Nanoceramica", descripcion: "Capas ceramicas de maxima rejected termica. Durabilidad excepcional.", image: "/polarizado-nanoceramica.webp" },
      { nombre: "Papel Ultraceramico", descripcion: "Tecnologia ultra ceramica. Maxima rejected termica y durabilidd.", image: "/polarizado-ultraceramico.webp" },
      { nombre: "Papel Titanio", descripcion: "Reflectivo deportivo. Look agresivo con maxima privacidad.", image: "/polarizado-titanio.jpg" },
    ],
  },
  {
    id: "calcomanias",
    title: "Diseno e Impresion",
    icon: Palette,
    color: "#E63030",
    description: "Calcomanias en diferentes materiales de alta resistencia para cualquier necesidad.",
    opciones: [
      { nombre: "Vinilo de Corte", descripcion: "Corta y pega. Ideal para logos y textos.", image: "/portafolio/extras/trabajo-1.jpeg" },
      { nombre: "Senalizacion Vehicular", descripcion: " senalizacion para vehiculos y negocios.", image: "/portafolio/extras/trabajo-2.jpeg" },
      { nombre: "Lona", descripcion: "Para publicidad exterior. Resistente a la intemperie.", image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&q=80" },
      { nombre: "DTF", descripcion: "Transferencia directa. Colores ilimitados.", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80" },
    ],
  },
  {
    id: "ppf",
    title: "PPF - Paint Protection",
    icon: Zap,
    color: "#C9A84C",
    description: "Paint Protection Film de ultima generacion. Proteccion extrema para tu vehiculo.",
    opciones: [
      { nombre: "PPF Parcial", descripcion: "Guardachoque y frontal. Zonas de mayor exposicion.", image: "/portafolio/carros/carro-4.jpeg" },
      { nombre: "PPF Completo", descripcion: "Cobertura total de pintura. Maxima proteccion.", image: "/portafolio/carros/carro-3.jpeg" },
      { nombre: "Rotulacion", descripcion: "Personalizacion de moto. Looks unicos y profesionales.", image: "/portafolio/motos/moto-3.jpeg" },
      { nombre: "Renovacion", descripcion: "Renovacion de cascos viejos y a gusto. Forrado de viseras.", image: "/portafolio/motos/moto-2.jpeg" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function OptionWithImage({ opcion, color }: { opcion: { nombre: string; descripcion: string; image: string }; color: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-black/50 border border-white/5 overflow-hidden group"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={opcion.image}
          alt={opcion.nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color }} />
          <div>
            <h3 className="font-bebas text-lg text-white tracking-wide mb-0.5">
              {opcion.nombre}
            </h3>
            <p className="text-gray-500 text-sm leading-tight">
              {opcion.descripcion}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="relative flex flex-col items-center w-full pt-24 pb-16 min-h-screen">
        <SmokeBackground smokeColor="#E63030" />

        <div className="container mx-auto px-6 relative z-10">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="font-bebas text-5xl md:text-7xl text-white tracking-wide mb-4">
              NUESTROS <span className="text-[#E63030]">SERVICIOS</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Conoce todas las opciones que ofrecemos para tu vehiculo.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {serviciosDetallados.map((servicio) => {
              const Icon = servicio.icon;
              return (
                <motion.div
                  key={servicio.id}
                  variants={itemVariants}
                  className="bg-[#111] border border-white/5 overflow-hidden group"
                >
                  <div className="p-8 border-b border-white/5">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${servicio.color}15` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: servicio.color }} />
                      </div>
                      <div>
                        <h2 className="font-bebas text-2xl md:text-3xl text-white tracking-wide">
                          {servicio.title}
                        </h2>
                        <p className="text-gray-400">{servicio.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                    {servicio.opciones.map((opcion, idx) => (
                      <OptionWithImage
                        key={idx}
                        opcion={opcion}
                        color={servicio.color}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <div className="text-center mt-16 pb-12">
            <a
              href="#"
              className="inline-block bg-[#E63030] hover:bg-[#CC0000] text-white px-12 py-5 uppercase tracking-widest font-bold transition-all text-lg"
            >
              Cotizar ahora
            </a>
          </div>
        </div>
      </main>
    </>
  );
}