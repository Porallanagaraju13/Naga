import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Menu, X, Download, Search } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", href: "#" },
    { id: "about", label: "About", href: "#about" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "certifications", label: "Certifications", href: "#certifications" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = section === "home" 
          ? document.body 
          : document.getElementById(section);
        
        if (element) {
          const offsetTop = section === "home" ? 0 : element.offsetTop;
          const offsetBottom = offsetTop + (section === "home" ? window.innerHeight : element.offsetHeight);
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  // No text search box; we show suggestions in a popover from the search icon.

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#");
              }}
              className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              aria-label="Home - Nagaraju Poralla"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <span className="text-background font-bold text-base sm:text-lg">NP</span>
              </div>
              <span className="font-bold text-lg sm:text-xl text-gradient hidden sm:inline">Nagaraju Poralla</span>
              <span className="font-bold text-lg sm:text-xl text-gradient sm:hidden">NP</span>
            </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Search sections"
                  className="hover:bg-primary/10"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-56 p-2">
                <div className="flex flex-col">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <Button 
              className="btn-glow text-xs sm:text-sm px-3 sm:px-4"
              onClick={() => {
                // Open the CV in a new window for printing/downloading as PDF
                window.open('/Nagaraju_Poralla_CV.html', '_blank');
              }}
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">CV</span>
              <span className="sm:hidden">CV</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border"
            role="menu"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="w-full mt-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2"
                      aria-label="Search sections"
                    >
                      <Search className="w-4 h-4" />
                      Search
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="center" className="w-[calc(100%-2rem)] mx-4 p-2">
                    <div className="flex flex-col">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            scrollToSection(item.href);
                            setIsOpen(false);
                          }}
                          className="text-left px-2 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <Button 
                className="btn-glow w-full"
                onClick={() => {
                  // Open the CV in a new window for printing/downloading as PDF
                  window.open('/Nagaraju_Poralla_CV.html', '_blank');
                  setIsOpen(false);
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navigation;