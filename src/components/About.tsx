import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Palette, Brain, Globe, Server } from "lucide-react";

// ✅ GitHub Pages safe paths
const professionalBg =
  `${import.meta.env.BASE_URL}assets/professional-tech-bg.jpg`;

const aboutImage =
  `${import.meta.env.BASE_URL}lovable-uploads/c15bea31-3118-4b90-88bd-8f37c5467029.png`;

const About = () => {

  const skillsData = [
    { name: "Python", icon: Code, color: "from-yellow-400 to-yellow-600" },
    { name: "JavaScript", icon: Code, color: "from-yellow-300 to-orange-500" },
    { name: "Java", icon: Code, color: "from-red-400 to-red-600" },
    { name: "PHP", icon: Code, color: "from-purple-400 to-purple-600" },
    { name: "C", icon: Code, color: "from-blue-400 to-blue-600" },
    { name: "HTML/CSS", icon: Globe, color: "from-orange-400 to-pink-500" },
    { name: "React", icon: Globe, color: "from-cyan-400 to-blue-500" },
    { name: "MySQL", icon: Database, color: "from-blue-500 to-indigo-600" },
    { name: "WordPress", icon: Server, color: "from-blue-600 to-gray-700" },
    { name: "Git", icon: Server, color: "from-orange-500 to-red-600" },
    { name: "Figma", icon: Palette, color: "from-purple-500 to-pink-500" },
    { name: "Canva", icon: Palette, color: "from-blue-400 to-purple-500" },
    { name: "Machine Learning", icon: Brain, color: "from-green-400 to-emerald-600" },
    { name: "Deep Learning", icon: Brain, color: "from-emerald-400 to-teal-600" },
    { name: "NLP", icon: Brain, color: "from-teal-400 to-cyan-600" },
    { name: "TensorFlow", icon: Brain, color: "from-orange-400 to-red-500" },
  ];

  const categories = [
    { name: "Languages", items: ["Java", "JavaScript", "C", "PHP", "Python"], icon: Code },
    { name: "Frontend", items: ["HTML", "CSS", "React", "Responsive Design"], icon: Globe },
    { name: "Database", items: ["MySQL", "Database Design"], icon: Database },
    { name: "Design", items: ["Figma", "Canva", "UI/UX"], icon: Palette },
    { name: "AI/ML", items: ["Machine Learning", "Deep Learning", "NLP", "TensorFlow"], icon: Brain },
    { name: "Tools", items: ["WordPress", "Git", "Domain Management"], icon: Server },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"
        style={{
          backgroundImage: `url(${professionalBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.08,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Computer Science Engineering student passionate about AI/ML and web development.
            Experienced in building intelligent solutions and modern web applications.
          </p>
        </div>

        {/* Skills Cloud */}
        <div className="mb-16">

          <h3 className="text-2xl font-bold mb-8 text-center">
            Technical Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            {skillsData.map((skill, index) => (

              <div
                key={index}
                className={`px-5 py-2 rounded-full text-white font-medium text-sm
                bg-gradient-to-r ${skill.color}
                shadow-lg hover:scale-110 transition`}
              >
                {skill.name}
              </div>

            ))}

          </div>

        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          {/* LEFT TEXT */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Background
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">

              <p>
                I'm a Computer Science Engineering student at Siddhartha Institute Of Engineering and Technology,
                passionate about artificial intelligence and web development.
              </p>

              <p>
                With hands-on experience in machine learning projects and web development internships,
                I've built AI chatbots, modern React apps, and WordPress websites.
              </p>

              <p>
                Currently working as a Web Developer Intern at TruPricer, managing domains,
                DNS records, and building SEO-optimized websites.
              </p>

            </div>

            <div className="flex flex-wrap gap-3 mt-6">

              <Badge className="bg-primary/10 text-primary border-primary/20">
                🎓 CSE Student
              </Badge>

              <Badge className="bg-accent/10 text-accent border-accent/20">
                💼 Web Developer Intern
              </Badge>

              <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                🤖 AI/ML Enthusiast
              </Badge>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div>

            <div className="rounded-2xl overflow-hidden border border-border/20 shadow-xl">

              <img
                src={aboutImage}
                alt="Professional tech workspace"
                className="w-full h-auto object-cover hover:scale-105 transition duration-500"
              />

            </div>

          </div>

        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {categories.map((category, index) => (

            <Card key={index} className="p-6">

              <div className="flex items-center gap-3 mb-4">

                <category.icon className="w-5 h-5 text-primary" />

                <h4 className="font-semibold text-lg">
                  {category.name}
                </h4>

              </div>

              <div className="flex flex-wrap gap-2">

                {category.items.map((item, i) => (

                  <Badge key={i} variant="outline">
                    {item}
                  </Badge>

                ))}

              </div>

            </Card>

          ))}

        </div>

      </div>

    </section>
  );
};

export default About;
