# NARIÑOGRAF - Polarizados y Protección Vehicular

Sitio web profesional para **NARIÑOGRAF**, taller especializado en polarizado de vehículos y protección de pintura en Pasto, Colombia.

## 🚗 Servicios

- **Polarizados Profesional**: Papel americana, nanocarbono, nanocerámica
- **PPF (Paint Protection Film)**: Protección extrema de pintura
- **Diseño e Impresión**: Calcomanias, vinilos, banners, rollups

## 📍 Ubicación

**Barrio Lorenzo, Pasto, Nariño, Colombia**

**Teléfonos:**
- 302 319 1520
- 317 326 6964

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages

## 📂 Estructura

```
src/
├── app/                    # Páginas
│   ├── page.tsx           # Home
│   ├── servicios/         # Servicios
│   ├── portafolio/        # Portafolio
│   └── nosotros/          # Nosotros
├── components/
│   ├── layout/            # Header, Footer
│   └── sections/          # Secciones de página
├── lib/
│   └── constants.ts       # Constantes del proyecto
└── components/ui/         # Componentes UI
```

## 🚀 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar producción
npm run start
```

## 🌐 Deploy en Cloudflare

1. Subir el proyecto a GitHub
2. Ir a [Cloudflare Pages](https://pages.cloudflare.com)
3. Conectar el repositorio
4. Configurar:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
5. Deploy automático en cada push

## 📝 Notas

- Imagenes de servicios y portafolio usan Unsplash como placeholders
- WhatsApp integration para contacto directo
- Diseño responsive y optimizado para SEO

---

**Licencia MIT** - Libre uso comercial y personal.