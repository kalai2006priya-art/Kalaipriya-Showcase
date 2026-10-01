import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Cpu, CheckCircle2, Workflow, Layers, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto space-y-6"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="pr-10 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50">
                {project.category}
              </span>
              {project.metrics && (
                <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950">
                  {project.metrics}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-400 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Body Content */}
          <div className="space-y-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Problem Statement & Overview
              </h4>
              <p className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200/60 dark:border-slate-700/60 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Architecture Pipeline */}
            {project.architecture && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Workflow className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  Technical Architecture & Data Pipeline
                </h4>
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200/60 dark:border-slate-700/60 font-mono text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                  {project.architecture}
                </div>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Key Implementations & Highlights
                </h4>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                Verified Technologies & Libraries
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono border border-slate-200 dark:border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs transition shadow-md flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Explore Source Code on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs text-slate-400 font-mono">Academic Implementation</span>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
