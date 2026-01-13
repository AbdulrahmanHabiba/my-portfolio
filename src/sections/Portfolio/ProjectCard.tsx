import { FaGithub, FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineDrag } from "react-icons/ai";
import { RiLinksFill } from "react-icons/ri";
import AppButton from "@/components/ui/AppButton";
import Skeleton from "@/components/ui/Skeleton";
import { useState } from "react";
import { type Project } from "@/lib/utils/projectsService";
import { Button } from "@/components/ui/button";
import { techIcons } from "@/lib/icons";

interface ProjectCardProps extends Partial<Project> {
  title?: string;
  description?: string;
  image?: string;
  tech?: string[];
  link?: string;
  code?: string;
  inProgress?: boolean;
  isAdminPage?: boolean;
  onEdit?: (project: Project) => void;
  onDelete?: (id: string) => void;
  id?: string;
  dragHandleProps?: React.HTMLAttributes<HTMLDivElement>;
}

const ProjectCard = ({
  id,
  title,
  description,
  image,
  tech,
  link,
  code,
  inProgress,
  isAdminPage,
  onEdit,
  onDelete,
  dragHandleProps,
}: ProjectCardProps) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const projectData = {
    id: id || "",
    title,
    description,
    image,
    tech,
    link,
    code,
    inProgress,
  };
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const displayImage = image || "/project_ex.jpg";

  const hasLiveLink = Boolean(link);
  const hasCodeLink = Boolean(code);

  return (
    <div className="group relative flex flex-col bg-card/80 dark:bg-card/60 border-2 border-border/60 dark:border-border/40 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:border-neon-purple/50 hover:shadow-2xl active:border-neon-purple/50 active:shadow-2xl backdrop-blur-md">
      {/* Project Image */}
      <div
        {...(!isMobile ? dragHandleProps : {})}
        className={`relative overflow-hidden h-48 md:h-40 lg:h-44 w-full ${isAdminPage && !isMobile && "cursor-move"
          }`}
      >
        {inProgress && (
          <div className="absolute top-2 left-2 z-10 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-md">
            In Progress
          </div>
        )}

        {!imgLoaded && <Skeleton className="absolute inset-0 w-full h-full " />}
        <img
          src={displayImage}
          alt={title}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-105 ${imgLoaded ? "opacity-100" : "opacity-0"
            }`}
          onLoad={() => setImgLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-4 gap-2 bg-gradient-to-b from-card/50 dark:from-card/40 to-card dark:to-card/80">
        <h3 className="text-foreground text-xl font-bold mb-1 line-clamp-1">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed mb-1 line-clamp-3 min-h-[3.6em]">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto min-h-[3.5em]">
          {tech?.map((t) => {
            const Icon = techIcons[t] || null;
            return (
              <span
                key={t}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-primary/5 dark:bg-primary/10 text-foreground border border-primary/20 dark:border-primary/30 font-medium hover:bg-primary/10 dark:hover:bg-primary/20 active:bg-primary/10 dark:active:bg-primary/20 transition-all max-h-8"
              >
                {Icon && <Icon className="text-sm opacity-70" />} {t}
              </span>
            );
          })}
        </div>

        {/* Admin Buttons */}
        {isAdminPage && id && (
          <div className="flex gap-2 mt-2 mb-2 absolute top-2 right-2 z-20">
            {/* Drag */}
            <div
              {...dragHandleProps}
              className="rounded-lg bg-muted/90 dark:bg-muted/70 text-foreground hover:bg-muted border border-border/50 transition-all cursor-grab active:cursor-grabbing flex items-center justify-center p-2 shadow-md hover:shadow-lg"
            >
              <AiOutlineDrag className="w-4 h-4" />
            </div>

            {/* Edit */}
            <Button
              size="icon"
              className="rounded-lg bg-blue-500/90 dark:bg-blue-600/90 hover:bg-blue-600 dark:hover:bg-blue-700 text-white transition-all shadow-md hover:shadow-lg border-none"
              onClick={() => onEdit && onEdit(projectData as Project)}
            >
              <FaEdit size={17} />
            </Button>

            {/* Delete */}
            <Button
              size="icon"
              className="rounded-lg bg-red-500/90 dark:bg-red-600/90 hover:bg-red-600 dark:hover:bg-red-700 text-white transition-all shadow-md hover:shadow-lg border-none"
              onClick={() => onDelete && onDelete(id)}
            >
              <FaTrash size={16} />
            </Button>
          </div>
        )}

        {/* Links Section */}
        <div className="flex gap-3 mt-2">
          {!hasLiveLink && !hasCodeLink ? (
            <AppButton
              variant="outline"
              size="sm"
              disabled
              className="flex-1 opacity-70 cursor-not-allowed !bg-secondary/30 dark:bg-primary/30  "
            >
              <p className="text-black dark:text-amber-300">
                {" "}
                Links isn't available yet 🚧 ,Try later
              </p>
            </AppButton>
          ) : (
            <>
              {/* Live link */}
              {hasLiveLink && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <AppButton
                    variant="primary"
                    size="sm"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    Live <RiLinksFill size={18} />
                  </AppButton>
                </a>
                // ) : (
                //   <AppButton
                //     variant="outline"
                //     size="sm"
                //     disabled
                //     className="flex-1 opacity-70 cursor-not-allowed !px-1"
                //   >
                //     <p className="text-black dark:text-amber-300">
                //       Under development 😞
                //     </p>
                //   </AppButton>
                // 
              )}

              {/* Code link */}
              {hasCodeLink ? (
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <AppButton
                    variant="outline"
                    size="sm"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    Code <FaGithub size={18} />
                  </AppButton>
                </a>
              ) : (
                <AppButton
                  variant="outline"
                  size="sm"
                  disabled
                  className="flex-1 opacity-70 cursor-not-allowed !px-1"
                >
                  <p className="text-black dark:text-amber-300">
                    Soon available ⏳
                  </p>
                </AppButton>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
