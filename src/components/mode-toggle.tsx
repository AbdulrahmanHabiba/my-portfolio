import { Button } from "@/components/ui/button";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "@/components/theme-provider";
import React, { useState, useEffect } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const [icon, setIcon] = useState<React.ReactNode>(null);

  useEffect(() => {
    setIcon(
      theme === "dark"
        ? <FaMoon className="h-[1.2rem] w-[1.2rem]" />
        : <FaSun className="h-[1.2rem] w-[1.2rem]" />
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {icon}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
