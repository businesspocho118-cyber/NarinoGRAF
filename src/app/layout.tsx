import type { Metadata } from "next";
import { Sora, Bebas_Neue } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Polarizados Pasto | NARIÑOGRAF - Polarizados Premium, PPF y Decoración Vehicular",
  description: "Los mejores polarizados en Pasto, Nariño. Nanocerámica, nanocarbono, titanio, ultracerámico y PPF. Decoración vehicular, calcomanías, diseño gráfico y rotulación. 6 años de experiencia. Cotiza ahora.",
  keywords: "polarizados Pasto, polarizado Nariño, polarizados carros Pasto, polarizados carros Nariño, PPF Pasto, PPF Nariño, decoración vehicular Pasto, taller polarizados Pasto, calcomanías Pasto, vinilo vehicular Pasto, rotulación Pasto, polarizado moto Pasto, protection film Pasto",
  openGraph: {
    title: "NARIÑOGRAF - Polarizados Premium en Pasto",
    description: "Especialistas en polarizados, PPF y decoración vehicular en Nariño. Nanocerámica, nanocarbono, titanio. Cotiza ya.",
    type: "website",
    url: "https://narinograf.com",
    siteName: "NARIÑOGRAF",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sora.variable} ${bebas.variable} dark antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        {children}
      </body>
    </html>
  );
}
