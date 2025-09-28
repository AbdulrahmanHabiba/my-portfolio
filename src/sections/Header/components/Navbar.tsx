"use client"
import { useState } from "react";
import ModeToggle from "@/components/mode-toggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { useUser } from "@/lib/context/UserContext";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
}) => {
  const isHomePage = useLocation().pathname === "/";

  return (
    <ul className={className}>
      {navLinks.map((link) => (
        <li className="md:mb-0 mb-1" key={link.href}>
          <a
            href={isHomePage ? link.href : "/" + link.href}
            onClick={onClick}
            className="
            md:text-foreground/80 md:hover:text-primary md:transition md:font-normal md:text-[14px]! md:tracking-wide md:py-0 md:px-0 md:rounded-none md:text-xs md:text-left
            md:bg-transparent md:shadow-none md:p-0
            text-foreground font-bold tracking-wide py-3 px-2 rounded-2xl w-full block transition-all duration-200 text-base text-center shadow-primary/20 shadow-md
            hover:bg-primary/10 hover:text-primary md:hover:bg-transparent
          "
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  return (
    <nav className="fixed top-2 left-0 w-full z-50 ">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8  ">
        <div
          className={`bg-white/50 dark:bg-secondary/10  backdrop-blur-lg border border-secondary shadow-2xl rounded-3xl px-3 py-2 md:px-6 md:py-4 flex flex-col md:flex-row items-start md:items-center justify-between transition-all duration-300 ease-in-out overflow-hidden ring-1 ring-primary/10 
            ${isOpen
              ? "max-h-[400px] scale-100"
              : "max-h-[56px] md:max-h-[70px] scale-95"
            }`}
        >
          <div className="w-full flex items-center justify-between">
            <div className="text-xs  md:text-sm xl:text-base w-auto  xs:max-w-[100px] sm:w-auto tracking-widest text-foreground font-black uppercase cursor-pointer flex items-center">
              <Link to="/">Abdulrahman <span className="text-blue-400">Habiba</span></Link>
            </div>
            <div className="hidden md:flex mt-4 md:mt-0 mx-2">
              <NavLinks className="flex space-x-6" />
            </div>
            <div className="flex gap-4">
            <div className="hidden lg:flex  items-center">
              <LanguageSwitcher />
            </div>
            <div className=" flex items-center  gap-4">
               <ModeToggle />
               <Link to="/admin" className="">
              {user ? (
                <div className=" ">
                  <Avatar className="cursor-pointer  text-black dark:text-white ">
                    <AvatarImage src={user.photoURL || ""} alt={user.displayName || "User"} />
                    <AvatarFallback className="bg-secondary">{user.displayName?.charAt(0) || "U"}</AvatarFallback>
                  </Avatar>
                </div>
              ) : <Button variant="outline" size="icon" className="rounded-full ">
                  <RiAdminLine className="h-5 w-5" />
                </Button> }
</Link>
              <button
                className="md:hidden px-2 py-2 border-1 bg-transparent border border-primary/10 rounded-2xl"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >

                {isOpen ? (
                  <IoClose size={19} className="text-primary dark:text-gray-200" />
                ) : (
                  <HiMenu size={19} className="text-primary dark:text-gray-200" />
                )}
              </button>
            </div>
          </div>
          </div>
          <div
            className={`w-full md:hidden flex flex-col items-center gap-1 transition-all duration-300 ${isOpen
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
      </div>
    </nav>
  );
};

export default Navbar;


