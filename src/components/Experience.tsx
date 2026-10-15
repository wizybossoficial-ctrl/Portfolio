"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
            Work Experience & Milestones
          </h2>
          <p className="text-slate-400 text-base max-w-lg mt-3">
            A track record of engineering impact, technical leadership, and driving product outcomes.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-700/80 ml-4 sm:ml-6 space-y-12">
          {portfolioData.experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline marker node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:border-cyan-300 group-hover:scale-125 transition-all shadow-md shadow-cyan-500/30" />

              {/* Experience Card */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-indigo-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 hidden sm:flex">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Accomplishments Bullet Points */}
                <div className="space-y-2 mb-5">
                  {exp.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800/60 text-slate-300 border border-slate-700/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
