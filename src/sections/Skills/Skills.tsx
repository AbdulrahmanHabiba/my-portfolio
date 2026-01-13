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
  SiReactquery,
  SiFirebase,
  SiZod,
} from "react-icons/si";
import { FaRegCircle } from "react-icons/fa";
import { RiShieldKeyholeFill } from "react-icons/ri";
import Title from "@/components/ui/Title";
import SectionMotion from "@/components/ui/SectionMotion";

const skillsRows = [
  [
    { name: "React", icon: <SiReact size={36} className="text-cyan-600 dark:text-cyan-400" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={36} className="text-foreground" />,
    },
    { name: "Redux", icon: <SiRedux size={36} className="text-purple-600 dark:text-purple-400" /> },
    {
      name: "Context API",
      icon: <FaRegCircle size={36} className="text-green-600 dark:text-green-400" />,
    },
    { name: "TanStack Query", icon: <SiReactquery size={36} className="text-red-500" /> },
    {
      name: "TypeScript",
      icon: <SiTypescript size={36} className="text-blue-600 dark:text-blue-400" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={36} className="text-teal-600 dark:text-teal-300" />,
    },
    { name: "ShadCN UI", icon: <SiShadcnui size={36} className="text-foreground" /> },
  ],
  [
    {
      name: "Strapi",
      icon: <SiStrapi size={36} className="text-indigo-600 dark:text-indigo-400" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql size={36} className="text-blue-700 dark:text-blue-500" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase size={36} className="text-yellow-500" />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma size={36} className="text-foreground" />,
    },
    {
      name: "NextAuth",
      icon: <RiShieldKeyholeFill size={36} className="text-green-600 dark:text-green-400" />,
    },
    {
      name: "Zod",
      icon: <SiZod size={36} className="text-blue-800 dark:text-blue-500" />,
    },
    {
      name: "Stripe",
      icon: <SiStripe size={36} className="text-indigo-600 dark:text-indigo-500" />,
    },
  ],
  [
    { name: "HTML5", icon: <SiHtml5 size={36} className="text-orange-600 dark:text-orange-400" /> },
    { name: "CSS3", icon: <SiCss3 size={36} className="text-blue-600 dark:text-blue-400" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript size={36} className="text-yellow-600 dark:text-yellow-400" />,
    },
    { name: "Git", icon: <SiGit size={36} className="text-orange-700 dark:text-orange-500" /> },
    { name: "Sanity", icon: <SiSanity size={36} className="text-red-600 dark:text-red-400" /> },
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
    className="section-gap relative scroll-mt-24"
  >
    <SectionMotion>
      <div className="mb-10">
        <Title as="h2" underline>
          SKILLS
        </Title>
        <p className="mt-2 text-center text-muted-foreground text-lg">
          The skills, tools and technologies I use:
        </p>
      </div>
      {/* Desktop  */}
      <div className="hidden md:flex flex-col items-center gap-6">
        {skillsRows.map((row, i) => (
          <div key={i} className=" flex md:flex-row  justify-center gap-8 ">
            {row.map((skill: { name: string; icon: React.ReactNode }) => (
              <div
                key={skill.name}
                className="flex flex-col items-center group"
              >
                <div className="rounded-full bg-secondary shadow-lg p-5  transition-transform duration-300 group-hover:scale-110 group-hover:shadow-pink-400/40 group-focus:scale-110 group-focus:shadow-pink-400/40 group-active:scale-110 group-active:shadow-pink-400/40">
                  {skill.icon}
                </div>
                <span className="mt-2 text-sm  text-muted-foreground text-center">
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
                <div className="rounded-full bg-secondary shadow-lg p-4  transition-transform duration-300 group-hover:scale-110 group-hover:shadow-pink-400/40 group-focus:scale-110 group-focus:shadow-pink-400/40 group-active:scale-110 group-active:shadow-pink-400/40">
                  {skill.icon}
                </div>
                <span className="mt-2 text-sm  text-muted-foreground text-center">
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
