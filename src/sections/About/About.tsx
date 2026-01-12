import Title from "@/components/ui/Title";
import AboutInfo from "./AboutInfo";
import Education from "./Education";
import Certifications from "./Certifications";
import SectionMotion from "@/components/ui/SectionMotion";

const About = () => (
  <section
    id="about"
    className="text-foreground space-y-12 relative scroll-mt-28"
  >
    <SectionMotion>
      <Title as="h2" underline>
        ABOUT ME
      </Title>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-8">
          <AboutInfo />
        </div>
        <div className="flex-1">
          <Education />
          <Certifications />
        </div>
      </div>
    </SectionMotion>
  </section>
);

export default About;
