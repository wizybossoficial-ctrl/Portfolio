"use client";

import { Cpu, Zap, Layout, ShieldCheck, MapPin, Globe2, Coffee, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function About() {
  const { personal } = portfolioData;

  const corePillars = [
    {
      icon: Zap,
      title: "Performance by Default",
      desc: "Obsessed with fast initial loads, 60fps animations, optimized database queries, and 99+ Core Web Vitals.",
      color: "text-amber-400 bg-amber-400/10 border-amber-400/20"
    },
    {
      icon: Layout,
      title: "Intuitive Product UX",
      desc: "Bridging the gap between design vision and technical implementation. Crafting accessible, human interfaces.",
      color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20"
    },
    {
      icon: ShieldCheck,
      title: "Resilient Architecture",
      desc: "Strict type-safety, modular decoupled boundaries, automated unit/E2E test suites, and fail-safe error handling.",
      color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
    },
    {
      icon: Cpu,
      title: "Modern AI & Cloud",
      desc: "Leveraging state-of-the-art LLMs, vector search, edge computing, and serverless infrastructure to build smart tools.",
      color: "text-purple-400 bg-purple-400/10 border-purple-400/20"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background & Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
            Passionate About Crafting Seamless Software
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Bio narrative & Quick details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-8 rounded-2xl space-y-5">
              <h3 className="text-xl font-bold text-slate-200">
                A bit more about me
              </h3>
              {personal.detailedBio.map((paragraph, index) => (
                <p key={index} className="text-slate-400 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}

              {/* Quick Info Grid */}
              <div className="pt-4 border-t border-slate-700/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 text-cyan-400 border border-slate-700/50">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Location</div>
                    <div className="text-sm font-semibold text-slate-200">{personal.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 text-indigo-400 border border-slate-700/50">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Timezone</div>
                    <div className="text-sm font-semibold text-slate-200">UTC-7 (Pacific) / Flexible</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 text-emerald-400 border border-slate-700/50">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Fuel</div>
                    <div className="text-sm font-semibold text-slate-200">Espresso & Curiosity</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 text-purple-400 border border-slate-700/50">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Current Obsession</div>
                    <div className="text-sm font-semibold text-slate-200">AI Agents & Turbopack</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: 4 Engineering Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {corePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl flex items-start gap-4"
                >
                  <div className={`p-3 rounded-xl border shrink-0 ${pillar.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 text-base mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
