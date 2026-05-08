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
  { id: 1, category: "Carros", title: "Nanoceramica 5%", description: "Polarizado nanoceramico en vehiculo", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" },
  { id: 2, category: "Impresiones", title: "Banner Gran Formato", description: "Banner para negocio", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80" },
  { id: 3, category: "Motos", title: "PPF Motos", description: "Proteccion de Paint Protection Film", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80" },
  { id: 4, category: "Carros", title: "Papel Americano", description: "Instalacion de papel americano", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80" },
  { id: 5, category: "Carros", title: "Lineas Deportivas", description: "Rayas deportivas personalizadas", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80" },
  { id: 6, category: "Motos", title: "PPF Completo", description: "Cobertura total de pintura", image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80" },
  { id: 7, category: "Carros", title: "Polarizados Premium", description: "Polarizado de alta calidad", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80" },
  { id: 8, category: "Impresiones", title: "Calcomania DTF", description: "Diseno en vinilo DTF", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80" },
];

const categories = ["Todos", "Impresiones", "Carros", "Motos"];

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