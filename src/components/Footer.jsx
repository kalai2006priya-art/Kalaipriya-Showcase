import React from 'react';
import { 
  GraduationCap, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Github, 
  Linkedin, 
  ExternalLink, 
  BookOpen, 
  FileText 
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { navTabs } from '../data/navTabs';

export default function Footer({ onSelectTab }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, tabId) => {
    e.preventDefault();
    if (onSelectTab) {
      onSelectTab(tabId);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const academicLinks = [
    { label: "Publications & Presentations", id: "publications" },
    { label: "Technical Projects", id: "projects" },
    { label: "Industry Internships", id: "experience" },
    { label: "Education & Coursework", id: "education" },
    { label: "Skills Matrix", id: "skills" },
    { label: "Profiles & Networks", id: "profiles" }
  ];

  const scholarlyProfiles = [
    { name: "GitHub Profile", icon: "💻", url: personalInfo.socialLinks.github },
    { name: "LinkedIn Profile", icon: "💼", url: personalInfo.socialLinks.linkedin },
    { name: "Academic Email", icon: "✉️", url: `mailto:${personalInfo.email}` }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 font-sans relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-slate-800">
          {/* Column 1: Identity & Credentials */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shrink-0 mt-0.5 shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif-editorial font-bold text-white text-base tracking-tight">
                  {personalInfo.displayName}
                </h3>
                <p className="text-xs font-bold text-blue-400 font-mono">
                  {personalInfo.shortRole || "Aspiring Machine Learning Engineer"}
                </p>
                <p className="text-xs text-slate-300 font-medium">
                  Department of Computer Science & Engineering (AIML)
                </p>
                <p className="text-xs text-slate-400">
                  KIT-KALAIGNARKARUNANIDHI INSTITUTE OF TECHNOLOGY,COIMBATORE
                </p>
                <p className="text-[11px] text-slate-400">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Academic Credentials
              </span>
              <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700/80 text-blue-300 text-xs font-mono font-semibold">
                B.E. CSE (AIML) • Batch 2024–2028 • 8.14 CGPA
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md pt-1">
              "Undergraduate researcher and machine learning practitioner focused on applied deep learning, RAG architectures, and scalable production systems."
            </p>

            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1 max-w-md">
              <p className="text-xs font-bold text-blue-400 tracking-wide uppercase">
                Learning • Implementation • Innovation
              </p>
              <p className="text-[11px] text-slate-400 italic">
                "{personalInfo.tagline}"
              </p>
            </div>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-slate-200 hover:text-blue-400 transition-colors font-medium underline-offset-2 hover:underline"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Portfolio Navigation Tabs */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              PORTFOLIO
            </h4>
            <ul className="space-y-2 text-xs">
              {navTabs.map((tab) => (
                <li key={tab.id}>
                  <a 
                    href={`#${tab.id}`}
                    onClick={(e) => handleNavClick(e, tab.id)}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-1.5 py-0.5"
                  >
                    <span className="text-slate-500 text-[10px]">›</span>
                    <span>{tab.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Research & Academic Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              RESEARCH & ACADEMIC
            </h4>
            <ul className="space-y-2 text-xs">
              {academicLinks.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-1.5 py-0.5"
                  >
                    <span className="text-slate-500 text-[10px]">›</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Scholarly Profiles */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              SCHOLARLY & DEVELOPER PROFILES
            </h4>
            <ul className="space-y-2 text-xs">
              {scholarlyProfiles.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center justify-between py-0.5"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xs">{item.icon}</span>
                      <span className="group-hover:underline">{item.name}</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Connect Strip */}
        <div className="py-6 border-b border-slate-800 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <span>Connect on Developer & Scholarly Networks:</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:bg-purple-600 hover:text-white transition-all shadow-xs"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:bg-blue-600 hover:text-white transition-all shadow-xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              title="Send Direct Email"
              className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:bg-emerald-600 hover:text-white transition-all shadow-xs"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p className="font-medium text-center sm:text-left">
            © 2026 Kalaipriya Sowmiyan. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 px-4 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-300 transition-all flex items-center gap-2 font-semibold shadow-xs"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
