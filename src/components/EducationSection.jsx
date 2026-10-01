import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export default function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Academic Excellence & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-slate-900 dark:text-white tracking-tight">
            Education & Academic Background
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive timeline of academic qualifications, specialized engineering degrees, and ongoing advanced technical coursework.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-md hover:border-blue-500/50 transition-all duration-300 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold">
                      {edu.degree}
                    </span>
                    {edu.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-[10px] font-mono font-bold uppercase">
                        Current Degree
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-editorial font-bold text-slate-900 dark:text-white">
                    {edu.specialization}
                  </h3>
                  <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </p>
                </div>

                <div className="text-left sm:text-right space-y-1 shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-xl">
                    <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    {edu.period}
                  </span>
                  <div className="pt-1">
                    <span className="text-xs text-slate-400 block font-mono">Academic Standing</span>
                    <span className="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {edu.description}
              </p>

              {/* Coursework Badges */}
              {edu.coursework && (
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-mono">
                    Key Academic Coursework & Specializations
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, cIdx) => (
                      <span 
                        key={cIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Highlights */}
              {edu.highlights && (
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-mono">
                    Academic Highlights
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
