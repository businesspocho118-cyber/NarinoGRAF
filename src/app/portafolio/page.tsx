"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Image as ImageIcon, X } from "lucide-react";

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  // Carros
  { id: 1, category: "Carros", title: "Polarizado Carro 1", description: "Trabajo realizado", image: "/portafolio/carros/carro-1.jpeg" },
  { id: 2, category: "Carros", title: "Polarizado Carro 2", description: "Polarizado profesional", image: "/portafolio/carros/carro-2.jpeg" },
  { id: 3, category: "Carros", title: "Polarizado Carro 3", description: "Instalacion completa", image: "/portafolio/carros/carro-3.jpeg" },
  { id: 4, category: "Carros", title: "Polarizado Carro 4", description: "Acabado premium", image: "/portafolio/carros/carro-4.jpeg" },
  { id: 5, category: "Carros", title: "Polarizado Carro 5", description: "Trabajo en vehiculo", image: "/portafolio/carros/carro-5.jpeg" },
  { id: 6, category: "Carros", title: "Polarizado Carro 6", description: "Polarizado profesional", image: "/portafolio/carros/carro-6.jpeg" },
  { id: 7, category: "Carros", title: "Polarizado Carro 7", description: "Instalacion completa", image: "/portafolio/carros/carro-7.jpeg" },
  { id: 8, category: "Carros", title: "Polarizado Carro 8", description: "Acabado premium", image: "/portafolio/carros/carro-8.jpeg" },
  { id: 9, category: "Carros", title: "Polarizado Carro 9", description: "Trabajo en vehiculo", image: "/portafolio/carros/carro-9.jpeg" },
  { id: 10, category: "Carros", title: "Polarizado Carro 10", description: "Polarizado profesional", image: "/portafolio/carros/carro-10.jpeg" },
  // Motos
  { id: 11, category: "Motos", title: "Polarizado Moto 1", description: "Trabajo en moto", image: "/portafolio/motos/moto-1.jpeg" },
  { id: 13, category: "Motos", title: "Polarizado Moto 3", description: "Trabajo personalizado", image: "/portafolio/motos/moto-3.jpeg" },
  { id: 14, category: "Motos", title: "Polarizado Moto 4", description: "PPF parcial", image: "/portafolio/motos/moto-4.jpeg" },
  { id: 15, category: "Motos", title: "Polarizado Moto 5", description: "Trabajo en moto", image: "/portafolio/motos/moto-5.jpeg" },
  { id: 16, category: "Motos", title: "Polarizado Moto 6", description: "Polarizado profesional", image: "/portafolio/motos/moto-6.jpeg" },
  { id: 17, category: "Motos", title: "Polarizado Moto 7", description: "Trabajo personalizado", image: "/portafolio/motos/moto-7.jpeg" },
  { id: 18, category: "Motos", title: "Polarizado Moto 8", description: "PPF parcial", image: "/portafolio/motos/moto-8.jpeg" },
  { id: 19, category: "Motos", title: "Polarizado Moto 9", description: "Trabajo en moto", image: "/portafolio/motos/moto-9.jpeg" },
  // Calcomanias
  { id: 20, category: "Calcomanias", title: "Calcomania 1", description: "Diseno y calcomania", image: "/portafolio/calcomanias/calcomania-1.jpeg" },
  { id: 21, category: "Calcomanias", title: "Calcomania 2", description: "Diseno y calcomania", image: "/portafolio/calcomanias/calcomania-2.jpeg" },
  { id: 22, category: "Calcomanias", title: "Calcomania 3", description: "Diseno y calcomania", image: "/portafolio/calcomanias/calcomania-3.jpeg" },
  { id: 23, category: "Calcomanias", title: "Calcomania 4", description: "Diseno y calcomania", image: "/portafolio/calcomanias/calcomania-4.jpeg" },
  { id: 24, category: "Calcomanias", title: "Calcomania 5", description: "Diseno y calcomania", image: "/portafolio/calcomanias/calcomania-5.jpeg" },
  { id: 25, category: "Calcomanias", title: "Calcomania 6", description: "Diseno y calcomania", image: "/portafolio/calcomanias/calcomania-6.jpeg" },
  { id: 26, category: "Calcomanias", title: "Calcomania 7", description: "Diseno y calcomania", image: "/portafolio/calcomanias/calcomania-7.jpeg" },
  { id: 27, category: "Calcomanias", title: "Calcomania 8", description: "Diseno y calcomania", image: "/portafolio/calcomanias/calcomania-8.jpeg" },
  { id: 28, category: "Calcomanias", title: "Calcomania 9", description: "Diseno y calcomania", image: "/portafolio/calcomanias/calcomania-9.jpeg" },
  { id: 29, category: "Calcomanias", title: "Calcomania 10", description: "Diseno y calcomania", image: "/portafolio/calcomanias/calcomania-10.jpeg" },
  { id: 30, category: "Calcomanias", title: "Calcomania 11", description: "Diseno y calcomania", image: "/portafolio/calcomanias/calcomania-11.jpeg" },
  { id: 31, category: "Calcomanias", title: "Calcomania 12", description: "Diseno y calcomania", image: "/portafolio/calcomanias/calcomania-12.jpeg" },
  { id: 32, category: "Calcomanias", title: "Calcomania 13", description: "Diseno y calcomania", image: "/portafolio/calcomanias/calcomania-13.jpeg" },
  { id: 33, category: "Calcomanias", title: "Calcomania 14", description: "Diseno y calcomania", image: "/portafolio/calcomanias/calcomania-14.jpeg" },
  // Cascos
  { id: 34, category: "Cascos", title: "Casco 1", description: "Renovacion de casco", image: "/portafolio/cascos/casco-1.jpeg" },
  { id: 35, category: "Cascos", title: "Casco 2", description: "Renovacion de casco", image: "/portafolio/cascos/casco-moto2.jpeg" },
  { id: 36, category: "Cascos", title: "Casco 3", description: "Renovacion de casco", image: "/portafolio/cascos/casco-3.jpeg" },
  { id: 37, category: "Cascos", title: "Casco 4", description: "Renovacion de casco", image: "/portafolio/cascos/casco-4.jpeg" },
  { id: 38, category: "Cascos", title: "Casco 5", description: "Renovacion de casco", image: "/portafolio/cascos/casco-5.jpeg" },
  { id: 39, category: "Cascos", title: "Casco 6", description: "Renovacion de casco", image: "/portafolio/cascos/casco-6.jpeg" },
  { id: 40, category: "Cascos", title: "Casco 7", description: "Renovacion de casco", image: "/portafolio/cascos/casco-7.jpeg" },
  { id: 41, category: "Cascos", title: "Casco 8", description: "Renovacion de casco", image: "/portafolio/cascos/casco-8.jpeg" },
  { id: 42, category: "Cascos", title: "Casco 9", description: "Renovacion de casco", image: "/portafolio/cascos/casco-9.jpeg" },
  // Impresiones
  { id: 43, category: "Impresiones", title: "Impresion 1", description: "Trabajo de impresion", image: "/portafolio/extras/trabajo-2.jpeg" },
  { id: 44, category: "Impresiones", title: "Impresion 2", description: "Diseno e impresion", image: "/portafolio/impresiones/impresion-1.jpeg" },
  { id: 45, category: "Impresiones", title: "Impresion 3", description: "Impresion digital", image: "/portafolio/impresiones/impresion-2.jpeg" },
  // Extras (solo 1)
  { id: 46, category: "Extras", title: "Trabajo Extra", description: "Otro trabajo realizado", image: "/portafolio/extras/trabajo-3.jpeg" },
];

const categories = ["Todos", "Carros", "Motos", "Calcomanias", "Cascos", "Impresiones", "Extras"];

export default function PortafolioPage() {
  const [filter, setFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center w-full pt-24 pb-16 bg-[#0a0a0a] min-h-screen">
        <div className="container mx-auto px-6">
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
            className="text-center mb-10"
          >
            <h1 className="font-bebas text-4xl md:text-6xl text-white tracking-wide mb-3">
              NUESTRO <span className="text-[#E63030]">PORTAFOLIO</span>
            </h1>
            <p className="text-gray-400 text-sm">Revisa algunos de nuestros trabajos.</p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                  filter === cat 
                    ? "bg-[#E63030] border-[#E63030] text-white" 
                    : "bg-black border-white/10 text-gray-400 hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative aspect-square cursor-pointer overflow-hidden"
                >
                  {/* Imagen real */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <span className="text-[#E63030] text-xs uppercase tracking-widest font-bold mb-1">{project.category}</span>
                    <h3 className="text-white font-bebas text-xl tracking-wide">{project.title}</h3>
                    <p className="text-gray-400 text-xs mt-1">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative bg-[#111] border border-white/10 max-w-4xl w-full rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-[#E63030] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                {/* Imagen real */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover"
                />
                
                <div className="p-6">
                  <span className="text-[#E63030] text-xs uppercase tracking-widest font-bold">{selectedProject.category}</span>
                  <h2 className="font-bebas text-3xl text-white mt-1">{selectedProject.title}</h2>
                  <p className="text-gray-400 mt-2">{selectedProject.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}