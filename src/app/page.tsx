import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Features from "@/components/sections/Features";
import LogoCloud from "@/components/sections/LogoCloud";
import Testimonials from "@/components/sections/Testimonials";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero />
        <Services />
        <Contact />
        <Features />
        <LogoCloud />
        <Testimonials />
        <Portfolio />
        <LocationMap className="py-12 bg-[#151515]" />
      </main>
      <Footer />
    </>
  );
}
