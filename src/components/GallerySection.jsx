import React, { useState } from 'react';
import { Image, Maximize2, Tag, Calendar, Sparkles, Award } from 'lucide-react';
import { galleryItems } from '../data/gallery';

export default function GallerySection({ onOpenLightbox }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Portraits", "Conferences & Certifications", "Academic Activities"];

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
            ACADEMIC & PROFESSIONAL MOMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-slate-900 dark:text-white">
            Photo Gallery & Verification Media
          </h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1">
            Visual archive of academic milestones, conference presentations, and professional credentials.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                  isActive
                    ? "bg-blue-700 text-white shadow-xs font-extrabold"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => onOpenLightbox(idx)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600/90 text-white text-xs font-bold backdrop-blur-sm">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to Zoom</span>
                  </span>
                </div>
              </div>

              {/* Caption Content */}
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-[10px] font-mono font-bold">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {item.year}
                  </span>
                </div>

                <h3 className="font-serif-editorial font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
