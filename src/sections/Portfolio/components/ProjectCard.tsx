import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiJquery,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiStripe,
  SiClerk,
  SiPostgresql,
  SiRapid,
  SiReactbootstrap,
  SiAuthelia,
  SiJsonwebtokens,
  SiPrisma,
  SiRedux,
  SiStrapi,
  SiTailwindcss,
} from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";
import { RiLinksFill } from "react-icons/ri";
import AppButton from "@/components/ui/AppButton";
import { MdOutgoingMail } from "react-icons/md";
import Skeleton from "@/components/ui/Skeleton";
import React, { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  code?: string;
}

const techIcons: Record<string, React.ElementType> = {
  HTML: SiHtml5,
  CSS: SiCss3,
  Bootstrap: SiBootstrap,
  JavaScript: SiJavascript,
  jQuery: SiJquery,
  "React.js": SiReact,
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  Stripe: SiStripe,
  Clerk: SiClerk,
  PostgreSQL: SiPostgresql,
  Context: FaReact,
  "REST API": SiRapid,
  "React Bootstrap": SiReactbootstrap,
  JWT: SiJsonwebtokens,
  Auth: SiAuthelia,
  Prisma: SiPrisma,
  "Redux Toolkit": SiRedux,
  Strapi: SiStrapi,
  "React Email": MdOutgoingMail,
  "Tailwind CSS": SiTailwindcss,
};

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  link,
  code,
}: ProjectCardProps) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className="group relative flex flex-col bg-card border border-[color:var(--secondary)] rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_0_var(--neon-pink)] hover:border-[color:var(--neon-pink)] active:shadow-[0_8px_32px_0_var(--neon-pink)] active:border-[color:var(--neon-pink)]">
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 md:h-40 lg:h-44 w-full">
        {!imgLoaded && <Skeleton className="absolute inset-0 w-full h-full " />}
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 active:scale-105 ${
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
        <p className="text-gray-400 text-sm mb-2 line-clamp-2 min-h-[2.5em]">
          {description}
        </p>
        <div className="flex flex-wrap gap-1 mt-auto min-h-[3em]">
          {tech.map((t) => {
            const Icon = techIcons[t] || null;
            return (
              <span
                key={t}
                className="flex items-center gap-1 text-xs px-2 py-0.5 max-h-[2em] rounded-full bg-primary/30 border border-[color:var(--secondary)] text-gray-200 font-medium shadow-sm backdrop-blur-sm"
              >
                {Icon && <Icon className="text-base opacity-80" />} {t}
              </span>
            );
          })}
        </div>
        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
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
