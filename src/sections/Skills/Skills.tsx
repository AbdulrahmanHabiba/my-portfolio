import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiStrapi,
  SiPostgresql,
  SiPrisma,
  SiHtml5,
  SiCss3,
  SiGit,
  SiStripe,
  SiShadcnui,
  SiSanity,
  SiFirebase
} from "react-icons/si";
import { TbMapSearch } from "react-icons/tb";

import { FaRegCircle } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiShieldKeyholeFill } from "react-icons/ri";
import Title from "@/components/ui/Title";
import SectionMotion from "@/components/ui/SectionMotion";

const skillsRows = [
  [
    { name: "React", icon: <SiReact size={36} className="text-cyan-400" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={36} className="text-black dark:text-gray-200" />,
    },

    { name: "Redux", icon: <SiRedux size={36} className="text-purple-400" /> },
    {
      name: "Context API",
      icon: <FaRegCircle size={36} className="text-green-400" />,
    },
     { name: "Firebase" ,
      icon: <SiFirebase size={36} className="text-[#FF9100] dark:text-yellow-400" />
    } ,
    
    { name: "NextAuth", icon: <RiShieldKeyholeFill size={36} className="text-green-400" /> },
   

    {
      name: "TypeScript",
      icon: <SiTypescript size={36} className="text-blue-400" />,
    },

    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={36} className="text-teal-300" />,
    },
    { name: "ShadCN UI", icon: <SiShadcnui size={36} className="text-violet-400" /> },

  ],
  [
    {
      name: "Strapi",
      icon: <SiStrapi size={36} className="text-indigo-400" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql size={36} className="text-blue-500" />,
    },
     {
      name: "Prisma",
      icon: <SiPrisma size={36} className="text-black dark:text-white" />,
    },
    { name: "Sanity",
       icon: <SiSanity size={36} className="text-red-400" />
    },
    {
      name : "Maps" ,
      icon: <TbMapSearch size={36} className="text-green-400" />
    } ,
   
    {
      name: "Clerk",
      icon: <MdOutlineAccountCircle size={36} className="text-pink-800 dark:text-pink-400" />,
    } ,

    {
      name: "Stripe",
      icon: <SiStripe size={36} className="text-indigo-500" />,
    },
  ],
  [
    { name: "HTML5", icon: <SiHtml5 size={36} className="text-orange-400" /> },
    { name: "CSS3", icon: <SiCss3 size={36} className="text-blue-400" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript size={36} className="text-yellow-400" />,
    },
    { name: "Git", icon: <SiGit size={36} className="text-orange-500" /> },
  ],
];

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const Skills = () => (
  <section
    id="skills"
    className="section-gap bg-background relative scroll-mt-24"
  >
    <SectionMotion>
      <div className="mb-10">
        <Title as="h2" underline>
          SKILLS
        </Title>
        <p className="mt-2 text-center text-new-gray text-lg">
          The skills, tools and technologies I use:
        </p>
      </div>
      {/* Desktop  */}
      <div className="hidden md:flex flex-col items-center gap-6">
        {skillsRows.map((row, i) => (
          <div key={i} className=" flex md:flex-row icons justify-center gap-8 ">
            {row.map((skill: { name: string; icon: React.ReactNode }) => (
              <div
                key={skill.name}
                className="flex flex-col items-center group"
              >
                <div className="rounded-full bg-white dark:bg-secondary backdrop-blur-lg shadow-lg p-5  transition-transform duration-300 group-hover:scale-110 group-hover:shadow-pink-400/40 group-focus:scale-110 group-focus:shadow-pink-400/40">
                  {skill.icon}
                </div>
                <span className="mt-2 text-sm icons text-new-gray text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Mobile */}
      <div className="mobile block md:hidden">
        {chunkArray(skillsRows.flat(), 4).map((group, i) => (
          <div key={i} className="flex flex-row justify-center gap-6">
            {group.map((skill: { name: string; icon: React.ReactNode }) => (
              <div
                key={skill.name}
                className="flex flex-col items-center group my-2"
              >
                <div className="rounded-full bg-secondary shadow-lg p-4  transition-transform duration-300 group-hover:scale-110 group-hover:shadow-pink-400/40 group-focus:scale-110 group-focus:shadow-pink-400/40">
                  {skill.icon}
                </div>
                <span className="mt-2 text-sm  text-new-gray text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </SectionMotion>
  </section>
);

export default Skills;
