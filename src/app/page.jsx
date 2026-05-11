import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VFormationCarousel from "@/components/VFormationCarousel";
import TheGrind from "@/components/TheGrind";
import Pillars from "@/components/Pillars";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col gap-24 md:gap-40 pt-16">
        <Hero />
        <VFormationCarousel />
        <TheGrind />
        <Pillars />
      </main>
      <Footer />
    </>
  );
}
