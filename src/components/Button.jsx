import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button Component
 * Supports multiple variants, sizes, internal Router links, and external links.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-400 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 hover:-translate-y-0.5',
    secondary: 'bg-surface-100 hover:bg-surface-200 text-slate-200 border border-slate-700/60 hover:border-purple-500/40 hover:-translate-y-0.5',
    outline: 'bg-transparent text-purple-300 border border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400 hover:-translate-y-0.5',
    ghost: 'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white',
    cyan: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5'
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`group ${combinedClasses}`}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group ${combinedClasses}`}
      {...props}
    >
      {content}
    </button>
  );
}