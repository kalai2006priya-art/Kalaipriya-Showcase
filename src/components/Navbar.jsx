import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills & Education', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3.5 shadow-lg shadow-black/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1px] shadow-md shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-sm">
                  KP
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 text-base tracking-tight group-hover:text-purple-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-purple-400/80 -mt-0.5 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                AIML Engineer
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 bg-surface-100/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/50 shadow-inner">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-purple-600/80 to-indigo-600/80 shadow-sm shadow-purple-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              to="/contact"
              variant="outline"
              size="sm"
              icon={Sparkles}
              iconPosition="right"
              className="text-xs font-semibold"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl border border-slate-700/60 bg-surface-100 text-slate-300 hover:text-white hover:border-purple-500/50 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 text-purple-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-nav border-b border-purple-500/20 px-4 pt-3 pb-6 space-y-3 bg-[#090d16]/95 backdrop-blur-xl animate-in slide-in-from-top-3 duration-200">
          <div className="space-y-1 pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-white bg-purple-600/20 border border-purple-500/40'
                      : 'text-slate-300 hover:text-white hover:bg-surface-100'
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center"
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}