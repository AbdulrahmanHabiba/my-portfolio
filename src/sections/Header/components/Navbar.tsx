"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import LanguageSwitcher from "./LanguageSwitcher";
import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#Hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const NavLinks = ({
  onClick,
  className = "",
}: {
  onClick?: () => void;
  className?: string;
}) => (
  <ul className={className}>
    {navLinks.map((link) => (
      <li className="md:mb-0 mb-1" key={link.href}>
        <a
          href={link.href}
          onClick={onClick}
          className="
            md:text-gray-300 md:hover:text-pink-400 md:transition md:font-normal md:text-[14px]! md:tracking-wide md:py-0 md:px-0 md:rounded-none md:text-xs md:text-left
            md:bg-transparent md:shadow-none md:p-0
            text-gray-100 font-bold tracking-wide py-3 px-2 rounded-2xl w-full block transition-all duration-200 text-base text-center shadow-pink-500/20 shadow-md
            hover:bg-neon-pink/10 hover:text-pink-400 md:hover:bg-transparent
          "
        >
          {link.label}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-2 left-0 w-full z-50">
      <Container>
        <div
          className={`bg-secondary/10 backdrop-blur-lg border border-secondary shadow-2xl rounded-3xl px-3 py-2 md:px-6 md:py-4 flex flex-col md:flex-row items-start md:items-center justify-between transition-all duration-300 ease-in-out overflow-hidden ring-1 ring-pink-500/10 ${
            isOpen
              ? "max-h-[400px] scale-100"
              : "max-h-[56px] md:max-h-[70px] scale-95"
          }`}
        >
          <div className="w-full flex items-center justify-between">
            <div className="text-sm md:text-base tracking-widest text-white font-black uppercase">
              Abdulrahman Habiba
            </div>
            <div className="hidden md:flex mt-4 md:mt-0">
              <NavLinks className="flex space-x-6" />
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSwitcher />
            </div>
            <button
              className="md:hidden px-2 py-2 bg-transparent border border-pink-500/10 rounded-2xl"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <IoClose size={19} className="text-pink-400" />
              ) : (
                <HiMenu size={19} className="text-pink-400" />
              )}
            </button>
          </div>
          <div
            className={`w-full md:hidden flex flex-col items-center gap-1 transition-all duration-300 ${
              isOpen
                ? "opacity-100 scale-100"
                : "opacity-0 pointer-events-none scale-95"
            }`}
          >
            <NavLinks
              onClick={() => setIsOpen(false)}
              className="flex flex-col w-full"
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
