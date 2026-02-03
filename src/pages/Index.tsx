import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SEO from "@/components/SEO";
import Analytics from "@/components/Analytics";

const Index = () => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll) if available
    const initAOS = async () => {
      try {
        const AOS = (await import("aos")).default;
        AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: true,
          offset: 100,
        });
      } catch (error) {
        // AOS not installed, continue without it
        console.log("AOS not available");
      }
    };
    initAOS();

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <SEO />
      <Analytics />
      {/* Professional gradient background overlay */}
      <div className="app-gradient-bg" />
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
