import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
} from "lucide-react";

import ParticleBackground from "./ParticleBackground";
import { useState, useEffect } from "react";

// ✅ GitHub Pages safe asset paths
const profileImage = `${import.meta.env.BASE_URL}lovable-uploads/8bb0b87d-da64-4f99-b5cd-78969e88ffca.png`;
const backgroundImage = `${import.meta.env.BASE_URL}assets/professional-tech-bg.jpg`;

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState("");

  const fullText = "Fullstack Developer & AI/ML Enthusiast";

  useEffect(() => {
    let i = 0;

    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Particle Background */}
      <ParticleBackground />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.15,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* Greeting */}
            <div className="space-y-4">

              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <p className="text-accent font-medium text-lg">
                  Hello, I'm
                </p>
              </div>

              {/* Name */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-tech-blue via-primary to-tech-purple bg-clip-text text-transparent">
                  Nagaraju
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent via-tech-purple to-primary bg-clip-text text-transparent">
                  Poralla
                </span>
              </h1>

              {/* Typewriter */}
              <p className="text-lg md:text-xl text-muted-foreground min-h-[40px]">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </p>

            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {["Python", "JavaScript", "AI/ML", "Web Development"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-secondary rounded-full text-sm border border-primary/20"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              {/* Download CV */}
              <Button
                onClick={() =>
                  window.open(
                    `${import.meta.env.BASE_URL}Nagaraju_Poralla_CV.html`,
                    "_blank"
                  )
                }
                className="bg-primary text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>

              {/* Contact */}
              <Button
                variant="outline"
                onClick={() =>
                  (window.location.href =
                    "mailto:nagarajuporalla13@gmail.com")
                }
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>

            </div>

            {/* Social Links */}
            <div className="flex gap-5">

              <a
                href="https://github.com/porallanagaraju13"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 hover:text-primary transition" />
              </a>

              <a
                href="https://linkedin.com/in/nagarajuporalla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 hover:text-primary transition" />
              </a>

              <a href="mailto:nagarajuporalla13@gmail.com">
                <Mail className="w-6 h-6 hover:text-primary transition" />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center">

            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">

              <img
                src={profileImage}
                alt="Nagaraju Poralla"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                loading="lazy"
              />

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
