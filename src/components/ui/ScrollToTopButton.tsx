import React, { useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 z-50 flex items-center justify-center p-2 rounded-full bg-primary/10 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/5 active:bg-white/5 transition-all duration-200 focus:outline-none ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <GoArrowUp size={22} className="text-pink-400" />
    </button>
  );
};

export default ScrollToTopButton;
