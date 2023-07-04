import Layout from "@/components/Layout/Layout";
import HeroSection from "@/components/HeroSection";
import services from "../data/Services";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <Layout>
        <HeroSection />
        
        <section id="services">
        <ServiceSection/>
        </section>
        
        <section id="about">
        <div className="bg-[#7F1D1D] w-full">
        <AboutSection/>
        </div>
        </section>
      </Layout>
    </>
  );
}
