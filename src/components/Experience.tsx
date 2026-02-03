import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
import professionalBg from "@/assets/professional-tech-bg.jpg";

const Experience = () => {
  const experiences = [
    {
      title: "Technical Intern",
      company: "Prasanta Communications",
      location: "Hyderabad, TS",
      period: "October 2024 – January 2025",
      type: "Internship",
      responsibilities: [
        "Developed features using JavaScript and AI tools",
        "Worked on various tasks and projects using modern web technologies",
        "Actively participated in development activities and feature implementation"
      ],
      skills: ["JavaScript", "AI Tools", "Astro Frameworks", "Web Development"]
    },
    {
      title: "Web Developer Intern",
      company: "TruPricer",
      location: "Hyderabad, TS",
      period: "February 2025 – August 2025",
      type: "Internship",
      responsibilities: [
        "Registered and managed domains using platforms like Hostinger, GoDaddy, and Namecheap",
        "Set up and maintained WordPress Websites with optimized hosting settings",
        "Handled DNS records, SSL integration, and website migrations",
        "Built responsive and SEO-friendly websites using HTML, CSS, JavaScript, and basic PHP"
      ],
      skills: ["WordPress", "Domain Management", "DNS", "SSL", "HTML", "CSS", "JavaScript", "PHP", "SEO"]
    },
    {
      title: "SDE Intern (Part-time, Remote)",
      company: "Bluestock Fintech",
      location: "Remote",
      period: "September 2025 – October 2025",
      type: "Internship",
      responsibilities: [
        "Selected for a Software Development Engineer internship in a fintech environment with remote collaboration",
        "Worked with leadership and engineers to gain experience in software development workflows"
      ],
      skills: ["Software Development", "Fintech", "Remote Collaboration", "Agile Workflows"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Siddhartha Institute Of Engineering and Technology",
      period: "June 2021 – July 2025",
      grade: "CGPA: 7.33",
      type: "education"
    },
    {
      degree: "Intermediate Public Examination",
      institution: "Krishnaveni Junior College",
      period: "June 2020 – March 2021",
      grade: "Marks: 900",
      type: "education"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20 relative overflow-hidden">
      {/* Professional Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"
        style={{
          backgroundImage: `url(${professionalBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.06
        }}
      ></div>
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-secondary/40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 slide-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-4 sm:mb-6">Experience & Education</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Professional experience and educational background in technology and development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Professional Experience</h3>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line - Hidden on mobile */}
                <div className="hidden sm:block absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
                
                {/* Timeline Dot - Adjusted for mobile */}
                <div className="absolute left-2 sm:left-6 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-background shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`ml-8 sm:ml-20 mb-8 sm:mb-12 slide-in-right stagger-${index + 1}`}>
                  <Card className="tech-card">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <h4 className="text-xl font-bold text-primary">{exp.title}</h4>
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            {exp.type}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-3">
                        <h5 className="font-semibold">Key Responsibilities:</h5>
                        <ul className="space-y-2 text-muted-foreground">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className="space-y-3">
                        <h5 className="font-semibold">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs border-border/50">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Education</h3>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline Line - Hidden on mobile */}
                {index < education.length - 1 && (
                  <div className="hidden sm:block absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-tech-purple"></div>
                )}
                
                {/* Timeline Dot - Adjusted for mobile */}
                <div className="absolute left-2 sm:left-6 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full border-2 sm:border-4 border-background shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`ml-8 sm:ml-20 mb-8 sm:mb-12 slide-in-left stagger-${index + 1}`}>
                  <Card className="tech-card">
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <h4 className="text-xl font-bold text-accent">{edu.degree}</h4>
                          <Badge className="bg-accent/10 text-accent border-accent/20">
                            Education
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        
                        <div className="text-primary font-medium">{edu.grade}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;