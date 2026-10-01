import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function SocialLinks({ className = '', iconSize = 'w-5 h-5', showLabels = false }) {
  const links = [
    {
      name: 'GitHub',
      href: personalInfo.socialLinks.github,
      icon: Github,
      hoverClass: 'hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10'
    },
    {
      name: 'LinkedIn',
      href: personalInfo.socialLinks.linkedin,
      icon: Linkedin,
      hoverClass: 'hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10'
    },
    {
      name: 'Email',
      href: personalInfo.socialLinks.email,
      icon: Mail,
      hoverClass: 'hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10'
    }
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            aria-label={link.name}
            className={`flex items-center gap-2 p-2.5 rounded-xl border border-slate-700/60 bg-surface-100/80 text-slate-300 transition-all duration-300 hover:-translate-y-1 shadow-sm ${link.hoverClass}`}
          >
            <Icon className={iconSize} />
            {showLabels && <span className="text-xs font-medium pr-1">{link.name}</span>}
          </a>
        );
      })}
    </div>
  );
}