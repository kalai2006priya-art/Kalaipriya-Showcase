import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Layers, Wrench, GraduationCap } from 'lucide-react';

const iconMap = {
  Brain,
  Code2,
  Layers,
  Wrench,
  GraduationCap
};

export default function SkillCard({ category, index = 0 }) {
  const IconComponent = iconMap[category.icon] || Brain;

  const levelColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'primary':
      case 'advanced':
        return 'text-purple-300 bg-purple-500/10 border-purple-500/20';
      case 'proficient':
        return 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20';
      case 'core':
        return 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20';
      case 'foundational':
      case 'intermediate':
        return 'text-amber-300 bg-amber-500/10 border-amber-500/20';
      default:
        return 'text-slate-300 bg-slate-800 border-slate-700';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 relative overflow-hidden"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3.5 mb-5">
        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
          <IconComponent className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {category.title}
          </h3>
          <p className="text-xs text-slate-400">
            {category.description}
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-800/80">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="p-3 rounded-xl bg-surface-100/70 hover:bg-surface-100 border border-slate-800 hover:border-slate-700/80 transition-all duration-200"
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="font-semibold text-xs sm:text-sm text-slate-200">
                {skill.name}
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${levelColor(skill.level)}`}>
                {skill.level}
              </span>
            </div>
            {skill.desc && (
              <p className="text-[11px] text-slate-400 leading-snug line-clamp-1">
                {skill.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}