"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/70 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 font-bold text-lg text-slate-100">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-xs text-white font-extrabold">
                AM
              </span>
              <span>{portfolioData.personal.name}</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              {portfolioData.personal.role} · Building modern web experiences and resilient cloud backends.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-white transition"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-white transition"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="text-slate-400 hover:text-white transition"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              aria-label="Email"
              className="text-slate-400 hover:text-white transition"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-xs text-slate-400 hover:text-white transition cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div>
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with Next.js, React 19 & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
