import { SiReact, SiPostgresql } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";

const certifications = [
    {
        title: "Front-End Development Diploma",
        issuer: "Route Academy",
        date: "Mar 2023",
        icon: <SiReact className="text-cyan-500" />,
    },
    {
        title: "Next.js Crash Course",
        issuer: "Adrian Hajdin (JS Mastery)",
        date: "2024",
        icon: <SiReact className="text-blue-500" />,
    },
    {
        title: "Full Stack Food Delivery App (React Native)",
        issuer: "Adrian Hajdin",
        date: "2024",
        icon: <SiReact className="text-purple-500" />,
    },
    {
        title: "Introduction to Databases",
        issuer: "ITI (Mahara Tech)",
        date: "2023",
        icon: <SiPostgresql className="text-blue-700" />,
    },
];

const Certifications = () => {
    return (
        <div className="mt-12">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <FaGraduationCap className="text-neon-pink" /> Certifications & Courses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                    <div key={idx} className="glass-card p-4 rounded-2xl flex items-center gap-4 group hover:scale-[1.02] transition-all">
                        <div className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">
                            {cert.icon}
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-foreground leading-tight">{cert.title}</h4>
                            <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
