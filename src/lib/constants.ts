export const CONTACT_PHONE = "573023191520"; // WhatsApp principal
export const CONTACT_PHONE_2 = "573173266964"; // WhatsApp alternativo
export const CONTACT_MESSAGE = "Hola NARIÑOGRAF, me gustaría cotizar un servicio para mi vehículo.";
export const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(CONTACT_MESSAGE)}`;

export const COMPANY_INFO = {
  name: "NARIÑOGRAF",
  experience: "6 años",
  description: "Somos especialistas en polarizado de vehículos, protección de pintura (PPF) y personalización con vinilo en Pasto. Trabajamos con materiales de alta calidad para garantizar protección, estilo y durabilidad en cada instalación.",
  location: "Pasto",
  phone: "573023191520",
  phone2: "573173266964",
};

export const SERVICES = [
  {
    id: "polarizados",
    title: "Polarizados",
    description: "Polarizado de carros y motos con materiales premium: papel americano, nanocarbono y nanoceramica.",
  },
  {
    id: "ppf",
    title: "PPF",
    description: "Instalacion de Paint Protection Film para proteccion extrema de tu vehiculo.",
  },
  {
    id: "calcomanias",
    title: "Diseno e Impresion",
    description: "Calcomanias y disenos personalizados para todo tipo de vehiculos.",
  },
];
