import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, MapPin, Award, ExternalLink, Eye, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import CertificateModal from './CertificateModal';

export default function PublicationCard({ publication, index = 0 }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.35, delay: index * 0.08 }}
        className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Content (Text & Metadata) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-purple-300 bg-purple-500/10 border border-purple-500/25 flex items-center gap-1.5 shadow-sm">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                <span>Paper Presented</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                {publication.conferenceShort || "ICOSICS 2026"}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>{publication.status}</span>
              </span>
            </div>

            {/* Paper Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              {publication.title}
            </h3>

            {/* Conference & Organizer Details */}
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 pt-1">
              <div className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <span className="font-semibold text-slate-200">
                  {publication.conference}
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-400 font-mono">
                <Building2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <span>Organized by {publication.organizer}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  {publication.dates}
                </span>
                <span>•</span>
                <span>Role: <strong className="text-purple-300">{publication.role} ({publication.author})</strong></span>
              </div>
            </div>

            {/* Abstract / Description */}
            <p className="text-sm text-slate-300 leading-relaxed pt-2">
              {publication.abstract}
            </p>

            {/* Keywords */}
            {publication.keywords && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {publication.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-slate-300 bg-slate-800/80 border border-slate-700/60"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Certificate Preview Card */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-end justify-center">
            <div
              onClick={() => setModalOpen(true)}
              className="group/cert cursor-pointer w-full max-w-sm rounded-xl overflow-hidden bg-surface-100/90 border border-slate-700/70 hover:border-purple-500/50 transition-all p-3 shadow-md hover:shadow-purple-500/15"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-black/50 mb-3">
                <img
                  src={publication.certificateImage}
                  alt="Certificate of Presentation preview"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/cert:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover/cert:opacity-60 transition-opacity flex items-end p-2.5">
                  <span className="text-[11px] font-mono text-purple-200 flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-purple-400" />
                    Click to view full certificate
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-slate-200 group-hover/cert:text-purple-300 transition-colors">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-purple-400" />
                  View Presentation Certificate
                </span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover/cert:opacity-100" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal Popup */}
      <CertificateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={publication.certificateImage}
        title={publication.certificateTitle || "IEEE Certificate of Presentation"}
        subtitle={`${publication.conference} • ${publication.organizer}`}
      />
    </>
  );
}