import Title from "@/components/ui/Title";
import ProjectCard from "./ProjectCard";
import SectionMotion from "@/components/ui/SectionMotion";
import { useProjects } from "@/lib/hooks/useProjects";
import SkeletonCard from "@/components/ui/SkeletonCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const { data: projects, isLoading, error } = useProjects();
  const [visibleCount, setVisibleCount] = useState(9);

  const visibleProjects = projects?.slice(0, visibleCount) || [];
  const hasMore = projects && visibleCount < projects.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, projects?.length || 0));
  };

  return (
    <section
      id="portfolio"
      className="section-gap relative scroll-mt-24"
    >
      <SectionMotion>
        <div className="mb-10">
          <Title as="h2" underline>
            Portfolio
          </Title>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 xl:gap-14 place-items-center mb-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">Error loading projects. Please try again.</p>
          </div>
        ) : projects && projects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 xl:gap-14 place-items-center mb-8">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
            {hasMore && (
              <div className="flex justify-center mt-8">
                <Button
                  onClick={loadMore}
                  variant="outline"
                  className="px-8 py-6 text-base font-semibold border-2 border-neon-purple hover:bg-neon-purple/10 hover:border-neon-pink transition-all"
                >
                  Load More Projects
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects available yet.</p>
          </div>
        )}
      </SectionMotion>
    </section>
  );
};

export default Portfolio;
