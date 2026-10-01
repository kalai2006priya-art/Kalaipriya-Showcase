import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Sparkles } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.categoryKey === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.overview.toLowerCase().includes(q) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      {/* PAGE HEADER */}
      <PageHeader
        badge="// PORTFOLIO & REPOSITORIES"
        title="Featured"
        highlight="Projects & Systems"
        description="Production-grade defect diagnosis with RAG, deep learning radiograph classifiers, NLP counseling tools, and responsive web portals."
      />

      {/* SEARCH & FILTER CONTROLS */}
      <div className="space-y-6 my-10 max-w-5xl mx-auto">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by keyword or technology (e.g. FastAPI, RAG, BERT, CNN)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 rounded-xl bg-surface-100/90 border border-slate-700/60 text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/50 transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {projectCategories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-500/60 shadow-md shadow-purple-500/20'
                    : 'bg-surface-100/60 hover:bg-surface-200 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* PROJECTS GRID */}
      {filteredProjects.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="glass-card rounded-2xl p-12 text-center max-w-md mx-auto my-12 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mx-auto text-slate-400 border border-slate-700/60">
            <Filter className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">No matching projects found</h3>
          <p className="text-xs sm:text-sm text-slate-400">
            No projects matched your search for "{searchQuery}". Try another keyword or reset the filter.
          </p>
          <Button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            variant="secondary"
            size="sm"
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}