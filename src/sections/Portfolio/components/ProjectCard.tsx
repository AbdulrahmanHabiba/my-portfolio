
import { FaGithub, FaEdit, FaTrash } from "react-icons/fa";
import { RiLinksFill } from "react-icons/ri";
import AppButton from "@/components/ui/AppButton";
import Skeleton from "@/components/ui/Skeleton";
import  { useState } from "react";
import {type Project } from "@/lib/utils/projectsService";
import { Button } from "@/components/ui/button";
import { techIcons } from "@/lib/icons";

interface ProjectCardProps extends Partial<Project> {
  title?: string
  description?: string
  image?: string
  tech?: string[]
  link?: string
  code?: string;
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
  isAdminPage,
  onEdit,
  onDelete,
  dragHandleProps,
}: ProjectCardProps) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  
  const projectData = {
    id: id || '',
    title,
    description,
    image,
    tech,
    link,
    code,
  };
  
  return (
    <div   className="group relative flex flex-col bg-card border border-[color:var(--secondary)] rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_0_var(--neon-pink)] hover:border-[color:var(--neon-pink)]">
      {/* Project Image */}
      <div {...dragHandleProps} className={`relative overflow-hidden h-48 md:h-40 lg:h-44 w-full ${isAdminPage && "cursor-move"}`}>
        
        {!imgLoaded && <Skeleton className="absolute inset-0 w-full h-full " />}
        <img
          src={image}
          alt={title}
          loading="lazy"
         
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImgLoaded(true)}
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>
      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5 gap-2">
        <h3 className="text-white text-lg font-semibold mb-2 flex items-center gap-2">
          {title}
        </h3>
        <p className="text-new-gray text-sm mb-2 line-clamp-2 min-h-[2.5em]">
          {description}
        </p>
        <div className="flex flex-wrap gap-1 mt-auto min-h-[3em]">
          {tech?.map((t) => {
            const Icon = techIcons[t] || null;
            return (
              <span
                key={t}
                className="flex items-center gap-1 text-xs px-2 py-0.5 max-h-[2em] rounded-full bg-secondary/30 dark:bg-primary/30  text-primary border border-[color:var(--secondary)] dark:text-gray-200 font-medium shadow-sm backdrop-blur-sm"
              >
                {Icon && <Icon className="text-base opacity-80" />} {t}
              </span>
            );
          })}
        </div>
        
        {isAdminPage && id && (
          <div className="flex  gap-2 mt-2 mb-2 absolute top-1 right-2">
            <Button
              variant="secondary"
              size="sm"
              className="rounded-full bg-green-500 text-white "
              onClick={() => onEdit && onEdit(projectData as Project)}
            >
              <FaEdit size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full   bg-red-700 text-white"
              onClick={() => onDelete && onDelete(id)}
            >
            <FaTrash size={16} />
            </Button>
          
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex gap-3 mt-2">
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
          {code && (
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
          )}
        </div>
      </div>
      {/* Border Glow Effect */}
    </div>
  );
};

export default ProjectCard;
