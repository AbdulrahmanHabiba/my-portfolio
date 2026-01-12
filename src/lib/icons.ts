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
  SiGooglemaps,
  SiGooglemeet,
  SiStreamlit,
  SiExpo,
  SiAppwrite,
  SiLeaflet
} from "react-icons/si";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { FaShop } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { ImBlog } from "react-icons/im";

import { FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiLinksFill, RiShieldKeyholeFill } from "react-icons/ri";
import { MdOutgoingMail, MdOutlineDashboardCustomize ,MdDarkMode, MdOutlinePlaylistAddCircle } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";

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
  "Light/Dark" : MdDarkMode ,
  "Multi Languages" : IoLanguageOutline ,
  "CRUD Operations" : MdOutlinePlaylistAddCircle ,
  "Responsive Disign" :HiMiniDevicePhoneMobile  ,
  "E-Commerce" : FaShop  ,
  "Social Media" :IoIosChatbubbles ,
  "Meetings" : SiGooglemeet ,
  "Blog" :ImBlog ,
  "Contact Form" : MdOutgoingMail ,
  "stream.io" :SiStreamlit,
    "React Native": SiReact,
    "Expo": SiExpo,
    "Appwrite": SiAppwrite,
    "React-Leaflet": SiLeaflet,
    "Google APIs": SiGooglemaps,
    "NativeWind": SiTailwindcss,
    "UploadThing": RiLinksFill, 
};

export const iconNamesFromTechIcons =  Object.keys(techIcons) 