import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({ 
  title = "Nagaraju Poralla - AI/ML Developer & Web Developer Portfolio",
  description = "AI/ML Developer and Web Developer with expertise in Python, JavaScript, Machine Learning, and modern web technologies. View my projects, certifications, and experience.",
  keywords = "AI developer, ML developer, web developer, Python, JavaScript, machine learning, portfolio, Nagaraju Poralla, fullstack developer",
  image = "/lovable-uploads/8bb0b87d-da64-4f99-b5cd-78969e88ffca.png",
  url = typeof window !== "undefined" ? window.location.href : ""
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Nagaraju Poralla");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Nagaraju Poralla",
      "jobTitle": "Fullstack Developer & AI/ML Enthusiast",
      "url": url,
      "sameAs": [
        "https://github.com/Porallanagaraju13",
        "https://linkedin.com/in/nagarajuporalla"
      ],
      "email": "nagarajuporalla13@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Siddhartha Institute Of Engineering and Technology"
      }
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;
