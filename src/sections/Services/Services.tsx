import Title from "@/components/ui/Title";
import { FaCode, FaPlug, FaRocket } from "react-icons/fa";
import ServiceCard from "./components/ServiceCard";
import SectionMotion from "@/components/ui/SectionMotion";

export default function Services() {
  interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
  }

  const services: Service[] = [
    {
      title: "Frontend Development",
      description:
        "Responsive and scalable UIs with React, Next.js & Tailwind CSS.",
      icon: <FaCode className="text-pink-400 w-6 h-6" />,
    },
    {
      title: "API & CMS Integration",
      description:
        "Integrate Stripe, Clerk, Strapi and REST APIs into your app.",
      icon: <FaPlug className="text-purple-400 w-6 h-6" />,
    },
    {
      title: "SEO & Performance",
      description: "Optimize speed, structure, and SEO for better engagement.",
      icon: <FaRocket className="text-blue-400 w-6 h-6" />,
    },
  ];

  return (
    <section id="services" className="section-gap bg-background scroll-mt-24">
      <SectionMotion>
        <Title as="h2">My Services</Title>
        <div className="relative hidden md:flex flex-col items-center gap-8">
          {/* Top Card */}
          <div className="z-10">
            <ServiceCard {...services[0]} />
          </div>
          <div className="w-0.5 h-8 bg-neon-purple"></div>
          <div className="relative w-full flex justify-center gap-8">
            <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-[color:var(--neon-purple)] z-0" />
            {/* Left Card */}
            <div className="relative z-10">
              <ServiceCard {...services[1]} />
            </div>
            {/* Right Card */}
            <div className="relative z-10">
              <ServiceCard {...services[2]} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </SectionMotion>
    </section>
  );
}
