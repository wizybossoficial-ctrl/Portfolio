"use client";

import { useState } from "react";
import { FolderGit2, ExternalLink, Sparkles, Layers, ArrowUpRight, X, CheckCircle } from "lucide-react";
import { GithubIcon } from "./Icons";
import { portfolioData, Project } from "@/data/portfolio";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "Full Stack",
    "AI / Machine Learning",
    "Frontend",
    "DevOps / Cloud"
  ];

  const filteredProjects = activeCategory === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
            Selected Projects & Engineering Case Studies
          </h2>
          <p className="text-slate-400 text-base max-w-xl mt-3">
            A showcase of production-ready systems, developer tools, and intuitive web applications built from scratch.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mt-4" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-slate-100 text-slate-900 font-semibold shadow-lg shadow-white/10 scale-105"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-700/60"
            >
              {/* Card Header / Visual Mockup Header */}
              <div
                className={`relative h-44 bg-gradient-to-br ${project.imageGradient} p-5 flex flex-col justify-between overflow-hidden`}
              >
                {/* Overlay backdrop pattern */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Top bar inside mockup */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black/40 text-white backdrop-blur-md border border-white/15">
                    {project.category}
                  </span>

                  {project.metrics && (
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-950/70 text-emerald-300 backdrop-blur-md border border-emerald-500/30">
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Title badge in card header */}
                <div className="relative z-10">
                  <h3 className="text-xl font-extrabold text-white tracking-tight drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-1 mt-0.5 font-medium">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    type="button"
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Repository"
                        className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live Demo"
                        className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-3">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-medium text-slate-400 mt-1">
                {selectedProject.tagline}
              </p>
            </div>

            {/* Metrics Callout */}
            {selectedProject.metrics && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium flex items-center gap-2 mb-6">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Impact Metric: {selectedProject.metrics}</span>
              </div>
            )}

            {/* Deep Breakdown */}
            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                Architecture & Implementation Details
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedProject.longDescription || selectedProject.description}
              </p>
            </div>

            {/* Tech Stack List */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Live Demo</span>
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="ml-auto px-4 py-2.5 text-xs text-slate-400 hover:text-white transition"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
