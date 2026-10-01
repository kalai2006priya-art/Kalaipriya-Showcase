import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  BookOpen, 
  Code2, 
  Wrench, 
  Briefcase, 
  GraduationCap, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { publications } from '../data/publications';
import { projects } from '../data/projects';
import { skillCategories } from '../data/skills';
import { experiences } from '../data/experience';
import { educationData } from '../data/education';

export default function SearchModal({ isOpen, onClose, onSelectResult }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  // Search Results
  const matchingPubs = publications.filter(p => 
    !q || p.title.toLowerCase().includes(q) || p.conference.toLowerCase().includes(q) || p.keywords.some(k => k.toLowerCase().includes(q))
  );

  const matchingProjects = projects.filter(p => 
    !q || p.title.toLowerCase().includes(q) || p.overview.toLowerCase().includes(q) || p.technologies.some(t => t.toLowerCase().includes(q))
  );

  const matchingSkills = [];
  skillCategories.forEach(cat => {
    cat.skills.forEach(s => {
      if (!q || s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q)) {
        matchingSkills.push({ ...s, category: cat.title });
      }
    });
  });

  const matchingExp = experiences.filter(e => 
    !q || e.role.toLowerCase().includes(q) || e.company.toLowerCase().includes(q) || e.technologies.some(t => t.toLowerCase().includes(q))
  );

  const matchingEdu = educationData.filter(e => 
    !q || e.degree.toLowerCase().includes(q) || e.institution.toLowerCase().includes(q) || e.specialization.toLowerCase().includes(q)
  );

  const totalResults = matchingPubs.length + matchingProjects.length + matchingSkills.length + matchingExp.length + matchingEdu.length;

  const handleSelect = (tabId) => {
    onClose();
    if (onSelectResult) {
      onSelectResult(tabId);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Header */}
        <div className="flex items-center px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
          <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 shrink-0" />
          <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search publications, projects, skills, education, experience..."
            className="w-full bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none text-sm sm:text-base font-sans"
            autoFocus
          />
          {query && (
            <button 
              onClick={() => setQuery("")}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mr-2"
            >
              Clear
            </button>
          )}
          <button 
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {totalResults === 0 ? (
            <div className="text-center py-12 text-slate-500 dark:text-slate-400 space-y-2">
              <p className="text-sm font-semibold">No matching records found for "{query}".</p>
              <p className="text-xs">Try searching for keywords like "RAG", "FastAPI", "Soybean", "Infosys", "KIT", or "Python".</p>
            </div>
          ) : (
            <>
              {/* Publications */}
              {matchingPubs.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Publications & Research ({matchingPubs.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchingPubs.slice(0, 3).map((pub) => (
                      <div 
                        key={pub.id}
                        onClick={() => handleSelect("publications")}
                        className="p-3 rounded-2xl border border-slate-100 dark:border-slate-800/80 hover:border-blue-400 dark:hover:border-blue-600 bg-slate-50/50 dark:bg-slate-800/50 cursor-pointer transition flex items-center justify-between group"
                      >
                        <div className="space-y-0.5 pr-2">
                          <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs group-hover:text-blue-600 dark:group-hover:text-blue-400 transition line-clamp-1">
                            {pub.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                            {pub.conference} • {pub.year}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects */}
              {matchingProjects.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Projects & Implementations ({matchingProjects.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchingProjects.slice(0, 4).map((p) => (
                      <div 
                        key={p.id}
                        onClick={() => handleSelect("projects")}
                        className="p-3 rounded-2xl border border-slate-100 dark:border-slate-800/80 hover:border-emerald-400 dark:hover:border-emerald-600 bg-slate-50/50 dark:bg-slate-800/50 cursor-pointer transition flex items-center justify-between group"
                      >
                        <div className="space-y-0.5 pr-2">
                          <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                            {p.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                            {p.tagline}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              {matchingSkills.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 font-mono">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Skills & Technologies ({matchingSkills.length})</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {matchingSkills.slice(0, 8).map((s, idx) => (
                      <button 
                        key={idx}
                        onClick={() => handleSelect("skills")}
                        className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 hover:border-purple-400 text-xs text-slate-700 dark:text-slate-300 transition flex items-center gap-1.5"
                      >
                        <span className="font-bold">{s.name}</span>
                        <span className="text-[10px] text-slate-400 font-mono">({s.category})</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience */}
              {matchingExp.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Work Experience & Internships ({matchingExp.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchingExp.map((e) => (
                      <div 
                        key={e.id}
                        onClick={() => handleSelect("experience")}
                        className="p-3 rounded-2xl border border-slate-100 dark:border-slate-800/80 hover:border-amber-400 dark:hover:border-amber-600 bg-slate-50/50 dark:bg-slate-800/50 cursor-pointer transition flex items-center justify-between group"
                      >
                        <div className="space-y-0.5 pr-2">
                          <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">
                            {e.role} – {e.company}
                          </h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            {e.period} • {e.location}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-0.5 transition shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education */}
              {matchingEdu.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-mono">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Academic Qualifications ({matchingEdu.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchingEdu.map((edu, idx) => (
                      <div 
                        key={idx}
                        onClick={() => handleSelect("education")}
                        className="p-3 rounded-2xl border border-slate-100 dark:border-slate-800/80 hover:border-cyan-400 dark:hover:border-cyan-600 bg-slate-50/50 dark:bg-slate-800/50 cursor-pointer transition flex items-center justify-between group"
                      >
                        <div className="space-y-0.5 pr-2">
                          <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition">
                            {edu.degree} – {edu.specialization}
                          </h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            {edu.institution} • {edu.grade}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-0.5 transition shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span>Click any result to jump to that section</span>
          <span className="font-mono">Press Esc to close</span>
        </div>
      </div>
    </div>
  );
}
