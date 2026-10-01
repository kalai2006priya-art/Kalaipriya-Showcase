import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink, Code2 } from 'lucide-react';
import { experiences } from '../data/experience';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            PROFESSIONAL JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Internships & Industry Experience
          </h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-6 sm:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={exp.id || idx}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? "sm:flex-row-reverse" : ""
                } gap-6 sm:gap-12`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-xs shadow-md z-10 ring-4 ring-white dark:ring-slate-950 mt-1.5">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Content Card */}
                <div className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                  isEven ? "sm:text-left" : "sm:text-left"
                }`}>
                  <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-md hover:border-blue-500/50 transition-all duration-300 space-y-4">
                    {/* Header */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap justify-between">
                        <span className="px-2.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-[10px] font-mono font-bold uppercase">
                          {exp.duration} • {exp.type}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif-editorial font-bold text-slate-900 dark:text-white pt-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                        {exp.company}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {exp.location}
                      </p>
                    </div>

                    {/* Project & Description */}
                    {exp.project && (
                      <div className="p-3 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Internship Project
                          </span>
                          {exp.projectRepo && (
                            <a
                              href={exp.projectRepo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                            >
                              <span>Repo</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                        <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          {exp.project}
                        </p>
                      </div>
                    )}

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Key Responsibilities & Deliverables
                      </span>
                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Tags */}
                    <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/80">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2 py-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
