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
  SiShadcnui,
  SiSanity, 
  SiGooglemaps
} from "react-icons/si";

import { FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiShieldKeyholeFill } from "react-icons/ri";
import { MdOutgoingMail, MdOutlineDashboardCustomize ,MdDarkMode } from "react-icons/md";

export const techIcons: Record<string, React.ElementType> = {
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
  "ShadCN UI" : SiShadcnui ,
  "NextAuth" : RiShieldKeyholeFill ,
  "Sanity" : SiSanity ,
  "Tailwind CSS" : SiTailwindcss ,
  "Firebase" : RiFirebaseFill ,
  "Google Maps" : SiGooglemaps ,
  "Admin Dashboard" : MdOutlineDashboardCustomize ,
  "Light/Dark" : MdDarkMode
};

export const iconNamesFromTechIcons =  Object.keys(techIcons)