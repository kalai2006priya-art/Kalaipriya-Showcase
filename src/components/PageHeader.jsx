import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeader({
  badge,
  title,
  highlight,
  description,
  className = ''
}) {
  return (
    <div className={`relative pt-28 pb-12 sm:pt-32 sm:pb-16 text-center max-w-4xl mx-auto px-4 ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 mb-4 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight"
      >
        {title}{' '}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </motion.h1>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}