import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import SectionMotion from "@/components/ui/SectionMotion";

// Social icon component with modern hover

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-gap bg-background relative scroll-mt-24"
    >
      <SectionMotion>
        <div className="flex flex-col md:flex-row gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </SectionMotion>
    </section>
  );
}
