import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2, FolderGit2 } from 'lucide-react';

export default function ExperienceCard({ experience, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden"
    >
      {/* Top Banner Row */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
            <Briefcase className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {experience.role}
            </h3>
            <p className="text-sm font-semibold text-purple-300">
              {experience.company}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-medium px-3 py-1 rounded-full text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
            {experience.duration}
          </span>
          <span className="text-xs font-mono font-medium px-3 py-1 rounded-full text-purple-300 bg-purple-500/10 border border-purple-500/20">
            {experience.type}
          </span>
        </div>
      </div>

      {/* Meta Row: Period & Location */}
      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-purple-400" />
          <span>{experience.period}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          <span>{experience.location}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-300 leading-relaxed mb-4">
        {experience.description}
      </p>

      {/* Associated Project Callout if any */}
      {experience.project && (
        <div className="mb-5 p-3.5 rounded-xl bg-surface-100/90 border border-purple-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <FolderGit2 className="w-4 h-4 text-purple-400 shrink-0" />
            <span className="text-xs font-medium text-purple-200">
              Project: <strong className="text-white">{experience.project}</strong>
            </span>
          </div>
          {experience.projectRepo && (
            <a
              href={experience.projectRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-cyan-300 hover:text-cyan-200 shrink-0 underline"
            >
              <span>View Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      )}

      {/* Key Responsibilities */}
      {experience.responsibilities && (
        <div className="space-y-2 mb-5">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
            Key Contributions & Deliverables:
          </h4>
          <ul className="space-y-2">
            {experience.responsibilities.map((resp, rIdx) => (
              <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-0.5 rounded-md text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700/60"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}