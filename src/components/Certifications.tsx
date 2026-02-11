import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, ExternalLink } from "lucide-react";
import professionalBg from "@/assets/professional-tech-bg.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Certifications = () => {
  const [preview, setPreview] = useState<{ url: string; title: string } | null>(null);

  // ⭐ GitHub Pages base path auto fix
  const BASE = import.meta.env.BASE_URL;

  // ⭐ FIXED BrandImage (handles /Naga automatically)
  const BrandImage = ({
    localSrc,
    remoteSrc,
    alt,
  }: {
    localSrc: string;
    remoteSrc: string;
    alt: string;
  }) => {
    const [src, setSrc] = useState(
      localSrc.startsWith("http")
        ? localSrc
        : `${BASE}${localSrc.replace(/^\/+/, "")}`
    );

    return (
      <img
        src={src}
        alt={alt}
        className="h-6 w-auto"
        loading="lazy"
        onError={() => {
          if (src !== remoteSrc) setSrc(remoteSrc);
        }}
      />
    );
  };

  const AWSLogo = () => (
    <BrandImage
      localSrc="/logos/aws.svg"
      remoteSrc="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
      alt="AWS logo"
    />
  );

  const IBMLogo = () => (
    <BrandImage
      localSrc="/logos/ibm.svg"
      remoteSrc="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
      alt="IBM logo"
    />
  );

  const UdemyLogo = () => (
    <BrandImage
      localSrc="/logos/udemy.svg"
      remoteSrc="https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg"
      alt="Udemy logo"
    />
  );

  const MicrosoftLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <rect x="1" y="1" width="10" height="10" fill="#F25022" />
      <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
      <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
      <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
    </svg>
  );

  const renderProviderLogo = (provider: string, fallback: React.ReactNode) => {
    const p = provider.toLowerCase();
    if (p.includes("aws")) return <AWSLogo />;
    if (p.includes("ibm")) return <IBMLogo />;
    if (p.includes("udemy")) return <UdemyLogo />;
    if (p.includes("microsoft")) return <MicrosoftLogo />;
    return <>{fallback}</>;
  };

  // ⭐ unchanged certificate data (no edits needed)
  const certifications = [
    {
      title: "Programming in Python: Core Concepts",
      provider: "LearnTube By CareerNinja",
      year: "2024",
      type: "Programming",
      logo: (
        <BrandImage
          localSrc="/logos/python.svg"
          remoteSrc="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
          alt="Python logo"
        />
      ),
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      link: "/python.jpg",
    },
    {
      title: "Java Advanced (English) — Certificate of Achievement",
      provider: "LearnTube by CareerNinja",
      year: "2024-05-16",
      type: "Programming",
      logo: (
        <BrandImage
          localSrc="/logos/java.svg"
          remoteSrc="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
          alt="Java logo"
        />
      ),
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      link: "/java.jpg",
    },
  ];

  // ⭐ GLOBAL PREVIEW HANDLER (fixes PDFs + images)
  const openPreview = (url: string, title: string) => {
    const finalUrl = /^(https?:\/\/)/i.test(url)
      ? url
      : `${BASE}${url.replace(/^\/+/, "")}`;

    setPreview({ url: finalUrl, title });
  };

  return (
    <section id="certifications" className="py-20 bg-secondary/20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${professionalBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.title} className="tech-card group">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className={`text-3xl p-3 rounded-lg ${cert.bgColor}`}>
                    {renderProviderLogo(cert.provider, cert.logo)}
                  </div>

                  <div className="flex-1">
                    <Badge className={`${cert.bgColor} ${cert.color}`}>
                      {cert.type}
                    </Badge>
                    <h4 className="font-bold text-sm">{cert.title}</h4>
                  </div>
                </div>

                <button
                  onClick={() => openPreview(cert.link, cert.title)}
                  className="flex items-center gap-2 text-xs text-primary"
                >
                  <ExternalLink className="w-3 h-3" />
                  View Certificate
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!preview} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="sm:max-w-4xl" aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle>{preview?.title || "Certificate"}</DialogTitle>
          </DialogHeader>

          {preview?.url && (
            <div className="w-full h-[70vh]">
              {/\.(png|jpe?g|gif|webp|svg)/i.test(preview.url) ? (
                <img
                  src={preview.url}
                  className="w-full h-full object-contain"
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <iframe
                  src={preview.url}
                  className="w-full h-full rounded-md"
                  loading="eager"
                />
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certifications;
