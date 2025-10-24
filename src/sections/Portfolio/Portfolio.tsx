import Title from "@/components/ui/Title";
import ProjectCard from "./components/ProjectCard";
import SectionMotion from "@/components/ui/SectionMotion";
import { useProjects } from "@/lib/hooks/useProjects";
import SkeletonCard from "@/components/ui/SkeletonCard";
import { fallbackProjects } from "@/lib/utils/ProjectsData";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SquareChevronRight } from "lucide-react";



const Portfolio = () => {
  const { data: projects, isLoading, error } = useProjects();

  if (error) {
    console.error("Error loading projects:", error);
  }
  const projectsLength = projects?.length || 20;
  const [size, setSize] = useState(projectsLength);
  const btnText = size <= 9 ? "Show All Projects" : "Show Only 9 projects";
  const handleShowMore = () => {
    setSize(size <= 9 ? projectsLength : 9);
  };
  return (
    <section
      id="portfolio"
      className="section-gap bg-background relative scroll-mt-24"
    >
      <SectionMotion>
        <div className="mb-10">
          <Title as="h2" underline>
            Portfolio
          </Title>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 xl:gap-14 place-items-center mb-8">
          {isLoading ? (
            [1, 2, 3, 4, 5, 6].map((i) => <SkeletonCard key={i} />)
          ) : error || !projects || projects.length === 0 ? (
            fallbackProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))
          ) : (
            projects.slice(0, size).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))
          )}
        </div> 
        {projects && projects?.length > 0 && (
        <div className="flex justify-center pt-3">
        
          <Button 
           className="p-5 px-6 border border-[color:var(--secondary)] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_0_var(--neon-card)] hover:border-[color:var(--neon-card)] hover:dark:text-gray-500"
          variant="outline"
          onClick={handleShowMore}
        >
          <p>{btnText } </p><SquareChevronRight />
        </Button>
        </div>
        )}
      </SectionMotion>
    </section>
  );
};


export default Portfolio;
