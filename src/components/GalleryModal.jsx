import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, Calendar, Tag, Maximize2 } from 'lucide-react';
import { galleryItems } from '../data/gallery';

export default function GalleryModal({ activeIndex, onClose, onNavigate }) {
  const isOpen = activeIndex !== null && activeIndex >= 0 && activeIndex < galleryItems.length;
  const currentItem = isOpen ? galleryItems[activeIndex] : null;

  const handlePrev = useCallback(() => {
    if (activeIndex !== null) {
      const prevIdx = (activeIndex - 1 + galleryItems.length) % galleryItems.length;
      onNavigate(prevIdx);
    }
  }, [activeIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (activeIndex !== null) {
      const nextIdx = (activeIndex + 1) % galleryItems.length;
      onNavigate(nextIdx);
    }
  }, [activeIndex, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-950/70 text-white">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-blue-600/30 text-blue-400 text-xs font-mono font-bold">
                {currentItem.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {activeIndex + 1} / {galleryItems.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={currentItem.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
                title="Download Image"
              >
                <Download className="w-4 h-4" />
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image Area */}
          <div className="relative flex-1 flex items-center justify-center bg-black/60 p-4 min-h-[300px] overflow-hidden">
            <img 
              src={currentItem.imageUrl} 
              alt={currentItem.title}
              className="max-h-[60vh] max-w-full object-contain rounded-xl shadow-2xl"
            />

            {/* Prev/Next arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-2 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-slate-700 transition shadow-lg"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 p-2 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-slate-700 transition shadow-lg"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Caption Area */}
          <div className="p-5 bg-slate-950 border-t border-slate-800 space-y-1 text-white">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-editorial font-bold text-base sm:text-lg">
                {currentItem.title}
              </h3>
              <span className="text-xs font-mono text-slate-400">
                {currentItem.year}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {currentItem.caption}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
