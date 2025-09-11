import Title from "@/components/ui/Title";
import AppButton from "@/components/ui/AppButton";
import FakeCode from "./components/FaceCode";
import SectionMotion from "@/components/ui/SectionMotion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaDownload, FaPaperPlane } from "react-icons/fa";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Frontend Developer"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 70,
  });

  return (
    <section id="Hero" className="scroll-mt-24">
      <SectionMotion className="pt-4 md:pt-16 text-white flex justify-center items-center h-screen scroll-mt-24">
        <div className="flex flex-col-reverse md:flex-row gap-5 justify-between items-center w-full">
          <div className="text-center md:text-left space-y-4 max-w-md ">
            <Title as={"h1"} underline={false}>
              <span className="inline-block min-h-[1em]">
                {text}
                <Cursor cursorStyle="|" />
              </span>
            </Title>
            <p className="text-new-gray text-lg">
              I'm Abdulrahman – a frontend developer building responsive web
              apps using{" "}
              <span className="text-blue-400 font-semibold">React</span> &{" "}
              <span className="text-green-400 font-semibold">Next.js</span>.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://drive.google.com/file/d/1jb0Fkl2wJgdm4M6OrN9x9BDzvBtQU_dQ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppButton variant="primary">
                  Download CV <FaDownload className="inline ml-2" />
                </AppButton>
              </a>
              <a href="#contact">
                <AppButton variant="outline">
                  Contact Me <FaPaperPlane className="inline ml-2" />
                </AppButton>
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-400 to-neon-purple rounded-full blur-3xl opacity-25"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-full blur-3xl opacity-25"></div>
            <FakeCode />
            <div className="relative w-56 h-56 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-neon-purple shadow-lg shadow-pink-500/30 z-10">
              <img
                //src="https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai-cyber-gamer_117038-7603.jpg?w=996"
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
