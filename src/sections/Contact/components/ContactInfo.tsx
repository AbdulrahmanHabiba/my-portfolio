import Title from "@/components/ui/Title";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

function SocialIcon({ url, label, children }: { url: string; label: string; children: React.ReactNode }) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#232a43] text-blue-400 hover:bg-blue-600 hover:text-blue-300 active:bg-blue-600 active:text-blue-300 transition-colors duration-150 border border-[#23263a] hover:border-blue-700 active:border-blue-700"
      >
        <span className="flex items-center justify-center">
          {children}
        </span>
      </a>
    );
  }
  

  const socialLinks = [
    { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/abdulrahman-habiba", label: "LinkedIn" },
    { icon: <FaGithub size={20} />, url: "https://github.com/AbdulrahmanHabiba", label: "GitHub" },
    { icon: <FaFacebook size={20} />, url: "https://www.facebook.com/abdulrahmanhsan.habiba.3", label: "Facebook" },
    { icon: <FaWhatsapp size={20} />, url: "https://wa.me/201113951795", label: "WhatsApp" },
    { icon: <FaEnvelope size={20} />, url: "mailto:abdulrahmanhabibh@gmail.com", label: "Email" },
  ];
  
function ContactInfo() {
    return (
      <div className="flex-1 flex flex-col justify-center mb-8 md:mb-0">
        <Title as="h2" underline className="mb-2 text-gray-200">Let's Connect!</Title>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">Do you have a project to discuss?</h3>
        <p className="text-gray-400 mb-6 max-w-md">I'm always open to new opportunities, collaborations, or just a friendly chat. Fill the form or reach out via WhatsApp or Email!</p>
        <div className="mb-4">
          <span className="block text-gray-400 text-sm mb-1">CONTACT</span>
          <a href="mailto:abdulrahmanhabibh@gmail.com" className="text-blue-400 hover:text-blue-300 hover:underline active:text-blue-300 active:underline text-base flex items-center gap-2 font-medium">
            <FaEnvelope size={18} /> abdulrahmanhabibh@gmail.com
          </a>
          <a href="https://wa.me/201113951795" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline active:text-blue-300 active:underline text-base flex items-center gap-2 font-medium mt-1">
            <FaWhatsapp size={18} /> WhatsApp: +20 111 395 1795
          </a>
        </div>
        <div className="mb-4">
          <span className="block text-gray-400 text-sm mb-1">SOCIAL</span>
          <div className="flex gap-3 flex-wrap">
            {socialLinks.map((s, i) => (
              <SocialIcon key={i} url={s.url} label={s.label}>{s.icon}</SocialIcon>
            ))}
          </div>
        </div>
      </div>
    );
  }

  export default ContactInfo;