import Title from "@/components/ui/Title";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaFacebook, FaDownload, FaPhone, FaTelegram, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function SocialIcon({ url, label, children }: { url: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-card/80 dark:bg-card/60 hover:text-neon-purple dark:hover:text-neon-purple  text-foreground transition-all duration-300 border-2 border-border/50 dark:border-border/40 hover:border-neon-purple hover:scale-110 shadow-md hover:shadow-lg"
    >
      <span className="flex items-center justify-center text-lg">
        {children}
      </span>
    </a>
  );
}
// add telegram icon
const socialLinks = [
  { icon: <FaLinkedin size={22} />, url: "https://www.linkedin.com/in/abdulrahman-habiba", label: "LinkedIn" },
  { icon: <FaGithub size={22} />, url: "https://github.com/AbdulrahmanHabiba", label: "GitHub" },
    { icon: <FaEnvelope size={22} />, url: "mailto:abdulrahmanhabibh@gmail.com", label: "Email" },
  { icon: <FaWhatsapp size={22} />, url: "https://wa.me/201113951795", label: "WhatsApp" },
  { icon: <FaTelegram size={22} /> ,url: "https://t.me/Abdulrahman_hsan", label: "Telegram"},
  { icon: <FaFacebook size={22} />, url: "https://www.facebook.com/abdulrahmanhsan.habiba.3", label: "Facebook" },
    { icon: <FaInstagram size={22} /> ,url: "https://www.instagram.com/abdulrahman.habibh" , label: "Instagram"}

];

function ContactInfo() {
  return (
    <div className="flex-1 flex flex-col justify-center mb-8 md:mb-0">
      <Title as="h2" underline className="mb-2 text-muted-foreground">Let's Connect!</Title>
      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">Do you have a project to discuss?</h3>
      <p className="text-muted-foreground mb-8 max-w-md">I'm always open to new opportunities, collaborations, or just a friendly chat. Fill the form or reach out via WhatsApp or Email!</p>

      {/* Social Icons - Prominent Display */}
      <div className="mb-6">
        <span className="block text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Connect With Me</span>
        <div className="flex gap-4 flex-wrap">
          {socialLinks.map((s, i) => (
            <SocialIcon key={i} url={s.url} label={s.label}>{s.icon}</SocialIcon>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <a
          href="https://drive.google.com/file/d/1jb0Fkl2wJgdm4M6OrN9x9BDzvBtQU_dQ/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button className="w-full bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white font-bold px-6 py-6 text-base shadow-lg hover:shadow-xl transition-all rounded-xl">
            <FaDownload className="mr-2 text-lg" />
            Download My CV
          </Button>
        </a>
        <a
          href="https://wa.me/201113951795"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button variant="outline" className="w-full border-2 border-green-600 dark:border-green-500 bg-white dark:bg-transparent hover:bg-green-600 dark:hover:bg-green-500 hover:text-white text-green-600 dark:text-green-400 dark:hover:text-white font-bold px-6 py-6 text-base shadow-md hover:shadow-lg transition-all rounded-xl">
            <FaWhatsapp className="mr-2 text-lg" />
            Chat on WhatsApp
          </Button>
        </a>
      </div>

      {/* Contact Details */}
      <div className="space-y-3 pt-4 border-t border-border/50">
        <div className="flex items-center gap-3 text-muted-foreground text-sm">
          <FaEnvelope className="text-neon-pink dark:text-neon-pink text-lg" />
          <a href="mailto:abdulrahmanhabibh@gmail.com" className="hover:text-neon-pink dark:hover:text-neon-pink transition-colors font-medium">
            abdulrahmanhabibh@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground text-sm">
          <FaPhone className="text-blue-500 dark:text-blue-400 text-lg" />
          <a href="tel:+201113951795" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium">
            +20 111 395 1795
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;