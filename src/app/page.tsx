import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import SideProjects from "@/components/SideProjects";
import Skills from "@/components/Skills";
import FitCheck from "@/components/FitCheck";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Experience />
        <SideProjects />
        <Skills />
        <FitCheck />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
