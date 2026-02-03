import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface Project {
  title: string;
  tech: string[];
  [key: string]: any;
}

interface ProjectFilterProps {
  projects: Project[];
  onFilterChange: (filteredProjects: Project[]) => void;
}

const ProjectFilter = ({ projects, onFilterChange }: ProjectFilterProps) => {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  // Get all unique technologies
  const allTech = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.tech.forEach((t) => techSet.add(t));
    });
    return Array.from(techSet).sort();
  }, [projects]);

  // Filter projects based on selected technologies
  const filteredProjects = useMemo(() => {
    if (selectedTech.length === 0) {
      return projects;
    }
    return projects.filter((project) =>
      selectedTech.some((tech) => project.tech.includes(tech))
    );
  }, [projects, selectedTech]);

  // Update parent when filtered projects change
  useMemo(() => {
    onFilterChange(filteredProjects);
  }, [filteredProjects, onFilterChange]);

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech)
        ? prev.filter((t) => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedTech([]);
  };

  return (
    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
      <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4">
        <h3 className="text-base sm:text-lg font-semibold">Filter by Technology:</h3>
        {selectedTech.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="text-xs px-2 sm:px-3"
          >
            <X className="w-3 h-3 mr-1" />
            <span className="hidden sm:inline">Clear Filters ({selectedTech.length})</span>
            <span className="sm:hidden">Clear ({selectedTech.length})</span>
          </Button>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {allTech.map((tech) => {
          const isSelected = selectedTech.includes(tech);
          return (
            <Badge
              key={tech}
              variant={isSelected ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "hover:border-primary/50 hover:bg-primary/5"
              }`}
              onClick={() => toggleTech(tech)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleTech(tech);
                }
              }}
              aria-pressed={isSelected}
            >
              {tech}
            </Badge>
          );
        })}
      </div>

      {selectedTech.length > 0 && (
        <p className="text-sm text-muted-foreground">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      )}
    </div>
  );
};

export default ProjectFilter;
