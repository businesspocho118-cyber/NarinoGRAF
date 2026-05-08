import { COMPANY_INFO } from "@/lib/constants";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-bebas text-4xl tracking-wider text-white">NARIÑO<span className="text-[var(--color-primary)]">GRAF</span></span>
            <p className="text-gray-400 text-sm max-w-xs">
              Especialistas en polarizado de vehículos, PPF y personalización con vinilo en Pasto. {COMPANY_INFO.experience} de experiencia.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{COMPANY_INFO.location}</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bebas tracking-widest text-xl text-white">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a 
                href={`https://wa.me/${COMPANY_INFO.phone}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors group"
              >
                <Phone className="w-5 h-5 text-[var(--color-primary)] group-hover:scale-110 transition-transform" />
                <span>302 319 1520</span>
              </a>
              <a 
                href={`https://wa.me/${COMPANY_INFO.phone2}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors group"
              >
                <Phone className="w-5 h-5 text-[var(--color-primary)] group-hover:scale-110 transition-transform" />
                <span>317 326 6964</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} NARIÑOGRAF. Todos los derechos reservados.</p>
          <p>Desarrollado con precisión técnica.</p>
        </div>
      </div>
    </footer>
  );
}
