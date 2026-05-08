"use client";

import { useState } from "react";
import { COMPANY_INFO, CONTACT_PHONE } from "@/lib/constants";
import { motion } from "framer-motion";
import { Phone, MapPin, Send, Car, Shield, Palette, Zap } from "lucide-react";

const serviceIcons: Record<string, React.ReactNode> = {
  "Polarizados": <Shield className="w-4 h-4" />,
  "PPF": <Zap className="w-4 h-4" />,
  "Decoración": <Car className="w-4 h-4" />,
  "Diseño": <Palette className="w-4 h-4" />,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    vehicle: "",
    service: "Polarizados",
    message: ""
  });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola NARIÑOGRAF, soy ${formData.name}. Me interesa el servicio de *${formData.service}* para mi vehículo (${formData.vehicle}). ${formData.message}`;
    const url = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="w-full py-16 bg-[#151515] relative overflow-hidden">
      {/* Background gradient with animation */}
      <motion.div 
        animate={{ 
          background: [
            "radial-gradient(circle at 0% 0%, rgba(230,48,48,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(230,48,48,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(230,48,48,0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none" 
      />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-bebas text-4xl md:text-5xl text-white tracking-wide mb-3">Agenda tu <span className="text-[var(--color-primary)]">Cita</span></h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mb-4 mx-auto"></div>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Contáctanos directamente o déjanos tus datos.
          </p>
        </motion.div>

        {/* Two column layout: Image + Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Left: Image side */}
          <div className="relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden">
            <img 
              src="/cita.png"
              alt="Agenda tu cita - NARIÑOGRAF"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-bebas text-3xl text-white tracking-wide mb-4">¿ Listo para transformar tu vehículo?</h3>
              <p className="text-gray-300 text-sm mb-6">Contáctanos ahora y obtén tu cotización gratis.</p>
              
              {/* Phone numbers - display only, form sends to WhatsApp */}
              <div className="space-y-2">
                <p className="text-xs text-gray-400 mb-2">O contáctanos directo:</p>
                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                  <Phone className="w-4 h-4 text-[#E63030]" />
                  <span className="text-white text-sm">302 319 1520</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                  <Phone className="w-4 h-4 text-[#E63030]" />
                  <span className="text-white text-sm">317 326 6964</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#111] border border-white/5 p-6 md:p-8 rounded-2xl">
            <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Tu Nombre</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black border border-white/10 text-white px-3 py-2 rounded-lg focus:outline-none focus:border-[#E63030] transition-colors text-sm"
                  placeholder="Ej. Juan Pérez"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Vehículo</label>
                <input 
                  type="text" 
                  required
                  value={formData.vehicle}
                  onChange={e => setFormData({...formData, vehicle: e.target.value})}
                  className="w-full bg-black border border-white/10 text-white px-3 py-2 rounded-lg focus:outline-none focus:border-[#E63030] transition-colors text-sm"
                  placeholder="Marca/Modelo/Año"
                />
              </div>

<div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Servicio</label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(serviceIcons).map((service) => (
                    <motion.button
                      key={service}
                      type="button"
                      onClick={() => setFormData({...formData, service})}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center gap-1 py-2 px-2 rounded-lg border transition-all text-xs ${
                        formData.service === service 
                          ? "bg-[#E63030] border-[#E63030] text-white" 
                          : "bg-black border-white/10 text-gray-400 hover:border-white/30"
                      }`}
                    >
                      {serviceIcons[service]}
                      <span className="text-xs font-medium">{service}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Mensaje</label>
                <textarea 
                  rows={2}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black border border-white/10 text-white px-3 py-2 rounded-lg focus:outline-none focus:border-[#E63030] transition-colors resize-none text-sm"
                  placeholder="Detalles adicionales..."
                />
              </div>

              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2 bg-[#E63030] hover:bg-[#CC0000] text-white font-bold uppercase tracking-widest py-3 rounded-lg transition-colors text-sm"
              >
                <Send className="w-4 h-4" />
                Enviar Solicitud
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
