import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import FloatingTechCards from "@/components/FloatingTechCards";


import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Architecture from "@/components/Architecture";
import Contact from "@/components/Contact";
import GithubActivity from "@/components/GithubActivity";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <ResponsiveNavbar />

      <main className="w-full">
        <Hero />
        <FloatingTechCards />
        <About />

        <Certifications />
        <Skills />
        <Projects />
        <Architecture />
        <GithubActivity />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
