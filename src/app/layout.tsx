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
  title: "Polarizados Pasto | NARIÑOGRAF - Polarizados Premium y Decoración Vehicular",
  description: "Los mejores polarizados en Pasto, Nariño. Nanocerámica, nanocarbono, titanio y PPF. Decoración vehicular, calcomanías y diseño gráfico. 6 años de experiencia. Cotiza ahora.",
  keywords: "polarizados Pasto, polarizado nanocerámica Pasto, polarizados Nariño, decoración vehicular Pasto, PPF Pasto, taller polarizados, calcomanías Pasto, vinilo vehicular",
  openGraph: {
    title: "Polarizados Pasto | NARIÑOGRAF",
    description: "Los mejores polarizados premium en Pasto. Nanocerámica, nanocarbono, titanio y PPF. 6 años de experiencia.",
    type: "website",
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
