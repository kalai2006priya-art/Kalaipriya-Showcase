import React from 'react';

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  centered = false,
  className = ''
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : ''} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 mb-3 shadow-sm ${centered ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
        {title}{' '}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}