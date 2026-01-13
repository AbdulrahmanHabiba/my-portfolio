import Title from "@/components/ui/Title";
import AppButton from "@/components/ui/AppButton";
import FakeCode from "./FaceCode";
import SectionMotion from "@/components/ui/SectionMotion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaDownload, FaPaperPlane, FaLinkedin, FaGithub, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Frontend Developer"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 70,
  });

  return (
    <section id="Hero" className="scroll-mt-24">
      <SectionMotion className="pt-28 md:pt-16 text-foreground flex justify-center items-center min-h-[calc(100dvh-100px)] scroll-mt-24">
        <div className="flex flex-col-reverse md:flex-row gap-8 justify-between items-center w-full">
          <div className="text-center md:text-left space-y-4 max-w-md ">
            <Title as={"h1"} underline={false}>
              <span className="inline-block min-h-[1em]">
                {text}
                <Cursor cursorStyle="|" />
              </span>
            </Title>
            <p className="text-muted-foreground text-lg">
              I'm Abdulrahman – a <span className="text-foreground font-bold underline decoration-neon-pink">Frontend Developer</span> specializing in <span className="text-blue-500 dark:text-blue-400 font-semibold">React</span> & <span className="text-green-500 dark:text-green-400 font-semibold">Next.js</span>, with full-stack capabilities and a passion for premium UX.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://drive.google.com/file/d/1jb0Fkl2wJgdm4M6OrN9x9BDzvBtQU_dQ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppButton variant="primary" size="sm" className="md:size-md px-4 md:px-6 h-9 md:h-11 text-xs md:text-sm">
                  Download CV <FaDownload className="inline ml-2" />
                </AppButton>
              </a>
              <a href="/#contact">
                <AppButton variant="outline" size="sm" className="md:size-md px-4 md:px-6 h-9 md:h-11 text-xs md:text-sm">
                  Contact Me <FaPaperPlane className="inline ml-2" />
                </AppButton>
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-8 justify-center md:ml-8 md:justify-start mt-6">
              <a href="https://www.linkedin.com/in/abdulrahman-habiba" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/AbdulrahmanHabiba" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.facebook.com/abdulrahmanhsan.habiba.3" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://wa.me/201113951795" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-green-500 transition-colors" aria-label="WhatsApp">
                <FaWhatsapp size={24} />
              </a>
              <a href="mailto:abdulrahmanhabibh@gmail.com" className="text-muted-foreground hover:text-neon-pink transition-colors" aria-label="Email">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-gradient rounded-full blur-3xl opacity-20 dark:opacity-25 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-full blur-3xl opacity-20 dark:opacity-25 animate-pulse"></div>
            <FakeCode />
            <div className="relative w-56 h-56 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-neon-purple shadow-lg shadow-pink-500/30 z-10 glass-card">
              <img
                src="/profile.jpg"
                alt="AbdulrahmanHabiba"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </SectionMotion>
    </section>
  );
}
