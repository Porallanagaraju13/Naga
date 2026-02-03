import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics tracking
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    
    if (gaId && typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", gaId, {
        page_path: location.pathname + location.search,
      });
    }

    // Track page view
    if (typeof window !== "undefined") {
      // Custom analytics tracking
      const trackEvent = (eventName: string, data?: Record<string, any>) => {
        if ((window as any).gtag) {
          (window as any).gtag("event", eventName, data);
        }
        // You can also send to your own analytics endpoint
        console.log("Analytics Event:", eventName, data);
      };

      // Track section views on scroll
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) {
              trackEvent("section_view", {
                section: sectionId,
                timestamp: new Date().toISOString(),
              });
            }
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      // Observe all sections
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => observer.observe(section));

      // Track button clicks
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const button = target.closest("button, a");
        if (button) {
          const text = button.textContent?.trim() || "";
          const href = (button as HTMLAnchorElement).href || "";
          trackEvent("button_click", {
            button_text: text,
            href: href || undefined,
            timestamp: new Date().toISOString(),
          });
        }
      };

      document.addEventListener("click", handleClick);

      return () => {
        observer.disconnect();
        document.removeEventListener("click", handleClick);
      };
    }
  }, [location]);

  // Initialize Google Analytics
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    
    if (gaId && typeof window !== "undefined" && !(window as any).gtag) {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `;
      document.head.appendChild(script2);
    }
  }, []);

  return null;
};

export default Analytics;
