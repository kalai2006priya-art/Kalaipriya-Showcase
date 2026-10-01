import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  GraduationCap, 
  Mail, 
  FileText 
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { navTabs } from '../data/navTabs';

export default function Header({ activeTab, onSelectTab, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Initial theme detection
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  const handleTabClick = (tabId) => {
    onSelectTab(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm" 
        : "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60"
    }`}>
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        {/* Monogram & Title */}
        <button 
          onClick={() => handleTabClick("about")} 
          className="flex items-center gap-3 group text-left shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-700 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-105 transition">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="block">
            <span className="font-serif-editorial font-bold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight block group-hover:text-blue-700 dark:group-hover:text-blue-400 transition">
              {personalInfo.displayName || "Kalaipriya Sowmiyan"}
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 dark:text-slate-400 block tracking-wide">
              {personalInfo.title || "Aspiring Machine Learning Engineer | B.E. CSE (AIML)"}
            </span>
          </div>
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Search Button */}
          <button 
            onClick={onOpenSearch}
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/40 dark:hover:text-blue-400 transition flex items-center gap-2 text-xs font-medium"
            title="Search Portfolio (Cmd+K / Ctrl+K)"
          >
            <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="hidden sm:inline text-slate-500 dark:text-slate-400 font-mono text-[10px]">
              Search <kbd className="bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded text-[9px]">⌘K</kbd>
            </span>
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/40 transition"
            title="Toggle Light / Dark Mode"
            aria-label="Toggle Light / Dark Mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Contact / Hire CTA Button */}
          <button 
            onClick={() => handleTabClick("contact")}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-blue-700 text-white hover:bg-blue-800 transition shadow-xs"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden md:inline">Get In Touch</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            title="Toggle Menu"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Sub-Navigation Pill Bar */}
      <nav className="border-t border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 overflow-x-auto py-2 no-scrollbar scroll-smooth">
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all duration-200 ${
                    isActive
                      ? "bg-blue-700 text-white shadow-xs scale-102 font-extrabold"
                      : "text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-800/80"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-1.5 animate-in slide-in-from-top">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 px-2">
            Portfolio Navigation Tabs
          </div>
          {navTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-between ${
                  isActive
                    ? "bg-blue-700 text-white"
                    : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="text-[10px] font-mono bg-blue-800 px-2 py-0.5 rounded">
                    Active
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
