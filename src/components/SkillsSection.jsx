import React, { useState } from 'react';
import { 
  Wrench, 
  Code2, 
  Brain, 
  Layers, 
  GraduationCap, 
  Search, 
  CheckCircle2, 
  Sparkles,
  Database
} from 'lucide-react';
import { skillCategories } from '../data/skills';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = skillCategories.map(cat => {
    const matchesCategory = selectedCategory === "all" || cat.id === selectedCategory;
    if (!matchesCategory) return null;

    const matchingSkills = cat.skills.filter(s => 
      !searchQuery || 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchingSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'languages': return Code2;
      case 'ai-ml': return Brain;
      case 'frameworks': return Layers;
      case 'tools': return Wrench;
      case 'cs-fundamentals':
      case 'core-cs': return GraduationCap;
      default: return Sparkles;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-slate-900 dark:text-white tracking-tight">
            Skills Matrix & Competencies
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Verified proficiencies across programming languages, machine learning architectures, frameworks, and developer platforms.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills, tools, frameworks..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === "all"
                  ? "bg-blue-700 text-white shadow-xs font-extrabold"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  selectedCategory === cat.id
                    ? "bg-blue-700 text-white shadow-xs font-extrabold"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-10">
          {filteredCategories.map((cat) => {
            const IconComp = getCategoryIcon(cat.id);
            return (
              <div 
                key={cat.id}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif-editorial font-bold text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800 hover:border-blue-400/50 transition-all duration-200 space-y-1.5 group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
