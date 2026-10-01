import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Layers, Cpu, Eye, Sparkles } from 'lucide-react';
import Button from './Button';
import ProjectModal from './ProjectModal';

export default function ProjectCard({ project, index = 0 }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.35, delay: index * 0.08 }}
        className="group relative flex flex-col justify-between rounded-2xl glass-card glass-card-hover p-6 sm:p-7 overflow-hidden"
      >
        <div>
          {/* Header Row: Category Tag & External GitHub Button */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium text-purple-300 bg-purple-500/15 border border-purple-500/30">
                  Featured
                </span>
              )}
            </div>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Code on GitHub"
                aria-label={`View ${project.title} on GitHub`}
                className="p-2 rounded-xl text-slate-400 hover:text-white bg-surface-100 hover:bg-surface-200 border border-slate-700/60 transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight mb-2 leading-snug">
            {project.title}
          </h3>

          {/* Tagline / Subtitle */}
          <p className="text-xs font-medium text-slate-400 mb-3 leading-relaxed">
            {project.tagline}
          </p>

          {/* Description Excerpt */}
          <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
            {project.overview}
          </p>

          {/* Metrics highlight if present */}
          {project.metrics && (
            <div className="mb-5 py-2 px-3 rounded-xl bg-surface-50/70 border border-slate-800 text-[11px] font-mono text-purple-200/90 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
              <span className="truncate">{project.metrics}</span>
            </div>
          )}
        </div>

        <div>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800/80">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-slate-300 bg-slate-800/70 border border-slate-700/40"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-400 bg-slate-800/40">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1.5 transition-colors group/btn py-1"
            >
              <span>View Architecture & Details</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
              >
                <span>Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal Popup */}
      <ProjectModal
        project={project}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}