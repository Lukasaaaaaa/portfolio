import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import Recommendations from "@/components/Recommendations";
import Skills from "@/components/Skills";
import AskAI from "@/components/AskAI";
import FitCheck from "@/components/FitCheck";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <FitCheck />
        <CaseStudies />
        <Recommendations />
        <Skills />
        <AskAI />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
