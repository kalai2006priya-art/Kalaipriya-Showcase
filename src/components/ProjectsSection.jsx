import React, { useState } from 'react';
import { 
  Code2, 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  Brain, 
  Cpu, 
  BookOpen, 
  Globe, 
  CheckCircle2,
  Maximize2
} from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import { personalInfo } from '../data/personalInfo';

export default function ProjectsSection({ onOpenProject }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "all") return true;
    return p.categoryKey === selectedCategory;
  });

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
            TECHNICAL WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-slate-900 dark:text-white">
            Projects & Technical Implementations
          </h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1">
            Production-grade machine learning pipelines, Retrieval-Augmented Generation platforms, and full-stack solutions.
          </p>
        </div>

        {/* Stats & GitHub Link Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="flex items-center gap-6 text-xs">
            <div>
              <span className="text-slate-400 block font-mono">Total Projects</span>
              <span className="text-lg font-bold text-slate-900 dark:text-white font-mono">
                {projects.length} Verified Systems
              </span>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
            <div>
              <span className="text-slate-400 block font-mono">Core Focus</span>
              <span className="text-xs font-bold text-blue-700 dark:text-blue-400">
                RAG • Deep Learning • NLP • Web
              </span>
            </div>
          </div>

          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-blue-700 dark:hover:bg-blue-600 text-white text-xs font-bold transition shadow-xs"
          >
            <Github className="w-4 h-4" />
            <span>github.com/kalai2006priya-art</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {projectCategories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-blue-700 text-white shadow-xs font-extrabold"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold">
                    {proj.category}
                  </span>
                  {proj.featured && (
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 text-[10px] font-mono font-bold uppercase">
                      Featured Implementation
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1.5">
                  <h3 className="text-xl font-serif-editorial font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-700 dark:text-blue-400">
                    {proj.tagline}
                  </p>
                </div>

                {/* Overview */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {proj.overview}
                </p>

                {/* Key Features */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Key Architectural Capabilities
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {proj.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Action Footer */}
              <div className="space-y-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    onClick={() => onOpenProject(proj)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs transition shadow-xs"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </button>

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
