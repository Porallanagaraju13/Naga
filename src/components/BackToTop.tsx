import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = (scrolled / scrollableHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-secondary/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-tech-purple transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-tech-blue hover:from-primary/90 hover:to-tech-blue/90 border-0"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </Button>
    </>
  );
};

export default BackToTop;
