import Title from "@/components/ui/Title";
import AboutInfo from "./components/AboutInfo";
import Education from "./components/Education";
import SectionMotion from "@/components/ui/SectionMotion";

const About = () => (
  <section
    id="about"
    className="section-gap text-white space-y-12 relative scroll-mt-28"
  >
    <SectionMotion>
      <Title as="h2" underline>
        ABOUT ME
      </Title>
      <div className="flex flex-col md:flex-row gap-8">
        <AboutInfo />
        <Education />
      </div>
    </SectionMotion>
  </section>
);

export default About;
