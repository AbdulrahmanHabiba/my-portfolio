import Title from "@/components/ui/Title";
import ProjectCard from "./components/ProjectCard";
import SectionMotion from "@/components/ui/SectionMotion";

const projects = [
  {
    title: "YC Directory",
    description:
      "Next.js 15 startup pitch directory with GitHub auth, Sanity CMS & clean UI.",
    image:
      "https://res.cloudinary.com/dnvlh7gm3/image/upload/v1752553420/YC-Directory.png",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Sanity",
      "NextAuth",
    ],
    link: "https://yc-directory-chi-pink.vercel.app/",
    code: "https://github.com/AbdulrahmanHabiba/yc_directory",
  },
  {
    title: "Next.js E-Commerce App",
    description:
      "Full-stack store with products, auth, Stripe checkout & admin panel.",
    image:
      "https://res.cloudinary.com/dnvlh7gm3/image/upload/v1747309753/My%20Projects%20Images/Ecommerce-App.png",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Context API",
      "Stripe",
      "Clerk",
      "Strapi",
      "React Email",
    ],
    link: "https://next-js-ecommerce-liard.vercel.app/",
    code: "https://github.com/AbdulrahmanHabiba/next-js-ecommerce",
  },
  {
    title: "Food Ordering App",
    description:
      "Modern food ordering platform with cart, Stripe payments & state management.",
    image:
      "https://res.cloudinary.com/dnvlh7gm3/image/upload/v1747309753/My%20Projects%20Images/Food-Ordering-App.png",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Stripe",
      "Prisma",
      "PostgreSQL",
    ],
    link: "https://food-ordering-app-lyart-three.vercel.app/",
    code: "https://github.com/AbdulrahmanHabiba/food-ordering-app",
  },
  {
    title: "Game Over - Free Games App",
    description:
      "Browse, search & filter free PC games using a public API. Built with React.",
    image:
      "https://res.cloudinary.com/dnvlh7gm3/image/upload/v1747310094/My%20Projects%20Images/Game-Over-App.png",
    tech: ["React.js", "REST API", "React Bootstrap", "JWT", "Auth"],
    link: "https://abdulrahmanhabiba.github.io/Game_over-React/",
    code: "https://github.com/AbdulrahmanHabiba/Game_Over-React_code",
  },
  {
    title: "Yummy Recipes App",
    description:
      "Single-page app to explore meals with categories & search using API.",
    image:
      "https://res.cloudinary.com/dnvlh7gm3/image/upload/v1747313157/My%20Projects%20Images/Yummy-Meals-App.png",
    tech: ["JavaScript", "jQuery", "Bootstrap", "REST API"],
    link: "https://abdulrahmanhabiba.github.io/yummy2024/",
    code: "https://github.com/AbdulrahmanHabiba/yummy2024",
  },
  {
    title: "DevFolio - Developer Portfolio",
    description:
      "Fully responsive personal portfolio using Bootstrap framework.",
    image:
      "https://res.cloudinary.com/dnvlh7gm3/image/upload/v1747313376/My%20Projects%20Images/Devfolio-Page.png",
    tech: ["HTML", "CSS", "Bootstrap"],
    link: "https://abdulrahmanhabiba.github.io/DevFolio/",
    code: "https://github.com/AbdulrahmanHabiba/DevFolio",
  },
  {
    title: "Simone Olive - Portfolio Site",
    description:
      "Clean one-page portfolio built with semantic HTML & modern CSS.",
    image:
      "https://res.cloudinary.com/dnvlh7gm3/image/upload/v1747313427/My%20Projects%20Images/Simone-Page.png",
    tech: ["HTML", "CSS"],
    link: "https://abdulrahmanhabiba.github.io/Simone_Olive/",
    code: "https://github.com/AbdulrahmanHabiba/Simone_Olive",
  },
];

const Portfolio = () => {
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
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </SectionMotion>
    </section>
  );
};

export default Portfolio;
