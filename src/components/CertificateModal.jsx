import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, Download, CheckCircle2, Building, Calendar } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose, imageSrc, title, subtitle }) {
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-5 sm:p-7 z-10 my-6 max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between gap-3 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-serif-editorial font-bold text-slate-900 dark:text-white leading-snug">
                  {title || "Official Certificate of Presentation"}
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-mono">
                  {subtitle || "ICOSICS 2026 • RV College of Engineering, Bengaluru"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={imageSrc || "/certificate-icosics-2026.jpg"}
                target="_blank"
                rel="noopener noreferrer"
                download="Kalaipriya_S_ICOSICS_Certificate.jpg"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-white hover:bg-blue-700 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition flex items-center gap-1.5 text-xs font-semibold"
                title="Download Certificate"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span>
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Certificate Image View */}
          <div className="relative flex-grow flex items-center justify-center overflow-auto rounded-2xl bg-slate-950 border border-slate-800 p-2 sm:p-4 shadow-inner">
            <img
              src={imageSrc || "/certificate-icosics-2026.jpg"}
              alt={title || "Certificate of Presentation"}
              className="max-h-[65vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
          </div>

          {/* Footer Bar */}
          <div className="pt-4 mt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Verified Conference Presentation • IEEE SMC & Cisco Co-Sponsored</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
