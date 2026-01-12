import Hero from "@/sections/Hero/Hero";
import Services from "@/sections/Services/Services";
import Skills from "@/sections/Skills/Skills";
import Portfolio from "@/sections/Portfolio/Portfolio";
import Contact from "@/sections/Contact/Contact";
import Container from "@/components/layout/Container";
import About from "@/sections/About/About";
import Experience from "@/sections/Experience/Experience";

export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <Experience />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
    </Container>
  );
}
