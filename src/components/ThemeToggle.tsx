"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("light", savedTheme === "light");
    } else {
      // Default to dark mode
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.classList.toggle("light", nextTheme === "light");
  };

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full bg-slate-800/40" />;
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle theme"
      className="relative flex items-center justify-center w-9 h-9 rounded-full border border-slate-700/60 bg-slate-800/50 hover:bg-slate-700/60 text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm hover:scale-105"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-180 duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-500 animate-in spin-in-180 duration-300" />
      )}
    </button>
  );
}
