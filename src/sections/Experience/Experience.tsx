import Title from "@/components/ui/Title";
import SectionMotion from "@/components/ui/SectionMotion";

const experiences = [
    {
        company: "USAM - EdTech Startup",
        role: "Software Development Intern",
        duration: "Aug 2025 – Present",
        location: "Remote, Cairo",
        description: [
            "Developing real-world EdTech solutions using React and modern web technologies in an intensive program.",
            "Participating in hackathons to solve business challenges through rapid software prototyping.",
        ],
    },
    {
        company: "Dev Wave",
        role: "Web Development Intern",
        duration: "Aug 2025 – Present",
        location: "Remote, Cairo",
        description: [
            "Building production-ready web applications with React, Next.js, and TypeScript using Agile methodologies.",
            "Implementing responsive UI components with a focus on performance optimization and Core Web Vitals.",
        ],
    },
    {
        company: "Faculty of Computer Science - Al-Azhar University",
        role: "Class Representative & Coordinator",
        duration: "3rd & 4th Year",
        location: "Cairo",
        description: [
            "Facilitated communication and resource sharing for 50+ students across various platforms.",
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="section-gap scroll-mt-24">
            <SectionMotion>
                <Title as="h2" underline>
                    Experience
                </Title>
                <div className="mt-12 space-y-12">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-neon-purple/30 group">
                            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-neon-purple group-hover:scale-150 transition-transform shadow-[0_0_8px_var(--neon-purple)]" />
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                    <span className="text-neon-pink font-medium">{exp.company}</span>
                                </div>
                                <div className="text-muted-foreground text-sm mt-1 md:mt-0 italic">
                                    {exp.duration} | {exp.location}
                                </div>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="leading-relaxed">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </SectionMotion>
        </section>
    );
};

export default Experience;
