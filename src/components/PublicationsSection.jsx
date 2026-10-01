import React, { useState } from 'react';
import { 
  BookOpen, 
  Award, 
  Calendar, 
  MapPin, 
  Eye, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  Tag, 
  Search,
  Building,
  FileCheck
} from 'lucide-react';
import { publications } from '../data/publications';

export default function PublicationsSection({ onOpenCertificate }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch = 
      !searchQuery ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.conference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesYear = selectedYear === "all" || pub.year === selectedYear;

    return matchesSearch && matchesYear;
  });

  return (
    <section id="publications" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Scholarly Contributions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-slate-900 dark:text-white tracking-tight">
            Publications & Conference Presentations
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Peer-reviewed research and scholarly presentations at international IEEE-sponsored conferences.
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
              placeholder="Search title, keywords, conference..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Year Filter */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-medium">Year:</span>
            {["all", "2026"].map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition ${
                  selectedYear === yr
                    ? "bg-blue-700 text-white shadow-xs"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {yr === "all" ? "All Years" : yr}
              </button>
            ))}
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {filteredPublications.map((pub) => (
            <div 
              key={pub.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-lg hover:border-blue-500/50 transition-all duration-300 space-y-6"
            >
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold">
                    Conference Presentation
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold">
                    {pub.status}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-400 text-xs font-mono font-bold">
                    IEEE SMC & Cisco Co-Sponsored
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{pub.dates}</span>
                </div>
              </div>

              {/* Title & Authors */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-serif-editorial font-bold text-slate-900 dark:text-white leading-snug">
                  {pub.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold">
                    <span className="text-blue-600 dark:text-blue-400">Author & Presenter:</span>
                    <span>{pub.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>{pub.organizer}</span>
                  </div>
                </div>

                <p className="text-xs font-medium text-blue-700 dark:text-blue-400 font-mono">
                  {pub.conference}
                </p>
              </div>

              {/* Abstract */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800 space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  Research Summary & Abstract
                </span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pub.abstract}
                </p>
              </div>

              {/* Keywords */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  Indexed Keywords & Research Domains
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {pub.keywords.map((kw, kwIdx) => (
                    <span 
                      key={kwIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3 text-blue-500" />
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Presentation Highlights & Verification Action */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Conference Presentation Credential
                  </span>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Official IEEE ICOSICS 2026 Certificate of Presentation</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onOpenCertificate(pub)}
                    className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs transition shadow-md flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Certificate of Presentation</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
