import Hero from "@/sections/Hero/Hero";
import Header from "@/sections/Header/Header";
import Services from "@/sections/Services/Services";
import Skills from "@/sections/Skills/Skills";
import Portfolio from "@/sections/Portfolio/Portfolio";
import Contact from "@/sections/Contact/Contact";
import Footer from "@/components/layout/Footer";
import Container from "./components/layout/Container";
import About from "@/sections/About/About";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{ style: { fontSize: "1rem", borderRadius: "8px" } }}
      />
      <ThemeProvider>
        <Header />
        <main>
          <Container>
            <Hero />
            <About />
            <Services />
            <Skills />
            <Portfolio />
            <Contact />
          </Container>
        </main>
        <Footer />
        <ScrollToTopButton />
      </ThemeProvider>
    </>
  );
}

export default App;
