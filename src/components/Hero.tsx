"use client";

import { ArrowRight, Download, Mail, Terminal, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Decorative subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 shadow-inner mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                {personal.availability}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.12] mb-5">
              Hi, I&apos;m <span className="gradient-text">{personal.name}</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-slate-300 font-bold block mt-2">
                {personal.role}
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mb-8">
              {personal.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700/80 bg-slate-800/40 hover:bg-slate-800/80 text-slate-200 hover:text-white font-medium hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm backdrop-blur-md"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </a>

              <a
                href="#experience"
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-slate-400 hover:text-slate-200 transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-1">
                Connect:
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/60 text-slate-400 hover:text-white hover:bg-slate-700/60 transition-all hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/60 text-slate-400 hover:text-white hover:bg-slate-700/60 transition-all hover:scale-105"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter profile"
                className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/60 text-slate-400 hover:text-white hover:bg-slate-700/60 transition-all hover:scale-105"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Direct Email"
                className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/60 text-slate-400 hover:text-white hover:bg-slate-700/60 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Terminal & Highlights Showcase */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Interactive Terminal Card */}
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/70 border-b border-slate-700/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>developer@jason ~</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-3 leading-relaxed">
                <div>
                  <span className="text-emerald-400">➜</span>{" "}
                  <span className="text-cyan-400">~/profile</span>{" "}
                  <span className="text-slate-300">cat developer.json</span>
                </div>
                <div className="text-slate-300 bg-slate-950/60 p-3 rounded-lg border border-slate-800 font-mono text-xs overflow-x-auto">
                  <pre>{`{
  "name": "Jason Adelmo",
  "services": ["Website Development", "Mobile Apps", "Website Design", "Website Management"],
  "turnaround": "ready_in_a_blink",
  "availability": "open_for_projects"
}`}</pre>
                </div>
                <div className="pt-1">
                  <span className="text-emerald-400">➜</span>{" "}
                  <span className="text-cyan-400">~/metrics</span>{" "}
                  <span className="text-slate-300">run quality-check</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Client Satisfaction | Blink Turnaround | Zero Bugs</span>
                </div>
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-3 gap-3">
              <div className="glass-panel p-3.5 rounded-xl text-center">
                <div className="text-2xl font-black text-cyan-400">{personal.yearsOfExperience}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Years Exp</div>
              </div>
              <div className="glass-panel p-3.5 rounded-xl text-center">
                <div className="text-2xl font-black text-indigo-400">{personal.projectsCompleted}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Projects</div>
              </div>
              <div className="glass-panel p-3.5 rounded-xl text-center">
                <div className="text-2xl font-black text-emerald-400">{personal.satisfactionRate}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Satisfaction</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
