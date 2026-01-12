"use client";

import { useState, useEffect } from "react";
import Container from "@/components/layout/Container";
import LanguageSwitcher from "./LanguageSwitcher";
import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { ModeToggle } from "@/components/mode-toggle";
import { UserAvatar } from "./UserAvatar";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/#Hero" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Services", href: "/#services" },
  { label: "Skills", href: "/#skills" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
];

const NavLinks = ({
  onClick,
  className = "",
}: {
  onClick?: () => void;
  className?: string;
}) => {

  const isHomePage = useLocation().pathname === "/";

  return (<ul className={className}>
    {navLinks.map((link) => (
      <li className="lg:mb-0 mb-1" key={link.href}>
        {isHomePage ? (<a
          href={link.href}
          onClick={onClick}
          className="
            lg:text-muted-foreground lg:hover:text-neon-pink lg:transition lg:font-medium lg:text-[14px]! lg:tracking-wide lg:py-0 lg:px-0 lg:rounded-none lg:text-sm lg:text-left
            lg:bg-transparent lg:shadow-none lg:p-0
            text-foreground font-bold tracking-wide py-3 px-4 rounded-2xl w-full block transition-all duration-200 text-base text-center
            hover:bg-neon-pink/10 hover:text-neon-pink lg:hover:bg-transparent
          "
        >
          {link.label}
        </a>) : (<Link
          to={link.href}
          onClick={onClick}
          className="
            lg:text-muted-foreground lg:hover:text-neon-pink lg:transition lg:font-medium lg:text-[14px]! lg:tracking-wide lg:py-0 lg:px-0 lg:rounded-none lg:text-sm lg:text-left
            lg:bg-transparent lg:shadow-none lg:p-0
            text-foreground font-bold tracking-wide py-3 px-4 rounded-2xl w-full block transition-all duration-200 text-base text-center
            hover:bg-neon-pink/10 hover:text-neon-pink lg:hover:bg-transparent
          "
        >
          {link.label}
        </Link>)}
      </li>
    ))}
  </ul>
  )
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScroll / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <nav className="fixed top-4 left-0 w-full z-50 px-4">
      <Container>
        <div
          className={`glass border border-border shadow-2xl rounded-3xl px-3 py-2 lg:px-6 lg:py-3 flex flex-col lg:flex-row items-start lg:items-center justify-between transition-all duration-300 ease-in-out overflow-hidden ring-1 ring-neon-purple/10 relative ${isOpen
            ? "max-h-[500px] scale-100"
            : "max-h-[56px] lg:max-h-[70px] scale-95"
            }`}
        >
          {/* Scroll Progress Bar */}
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-neon-gradient transition-all duration-150 z-20"
            style={{ width: `${scrollProgress}%` }}
          />

          <div className="w-full flex items-center justify-between">
            <div className="text-sm lg:text-base tracking-widest text-foreground font-black uppercase">
              <Link to="/">
                <span className="text-neon-blue">Abdulrahman </span>Habiba
              </Link>
            </div>

            <div className="hidden lg:flex flex-1 justify-center">
              <NavLinks className="flex space-x-6" />
            </div>

            <div className="hidden lg:flex items-center space-x-2">
              <UserAvatar />
              <LanguageSwitcher />
              <ModeToggle />
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <UserAvatar />
              <ModeToggle />
              <button
                className="p-2 bg-secondary/50 border border-border rounded-xl text-foreground"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <IoClose size={22} className="text-neon-pink" />
                ) : (
                  <HiMenu size={22} className="text-neon-pink" />
                )}
              </button>
            </div>
          </div>
          <div
            className={`w-full lg:hidden flex flex-col items-center gap-4 pt-4 pb-2 transition-all duration-300 ${isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 pointer-events-none scale-95 -translate-y-4"
              }`}
          >
            <NavLinks
              onClick={() => setIsOpen(false)}
              className="flex flex-col w-full gap-2"
            />
            <div className="flex items-center justify-center pt-2 border-t border-border w-full">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
