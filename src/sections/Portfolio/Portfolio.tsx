import Title from "@/components/ui/Title";
import ProjectCard from "./components/ProjectCard";
import SectionMotion from "@/components/ui/SectionMotion";
import { useProjects } from "@/lib/hooks/useProjects";
import SkeletonCard from "@/components/ui/SkeletonCard";
import { fallbackProjects } from "@/lib/utils/ProjectsData";

// Fallback projects in case API fails or no projects are available


const Portfolio = () => {
  const { data: projects, isLoading, error } = useProjects();

  if (error) {
    console.error("Error loading projects:", error);
  }

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
            projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))
          )}
        </div>
      </SectionMotion>
    </section>
  );
};


export default Portfolio;
