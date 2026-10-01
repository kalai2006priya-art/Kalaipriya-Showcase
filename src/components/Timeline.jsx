import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle, BookOpen, Award } from 'lucide-react';

export default function Timeline({ items }) {
  return (
    <div className="relative pl-6 sm:pl-8 border-l border-purple-500/20 space-y-10 my-8">
      {items.map((item, idx) => (
        <motion.div
          key={item.institution}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: idx * 0.15 }}
          className="relative group"
        >
          {/* Glowing Timeline Node */}
          <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0b0f19] border-2 border-purple-500 flex items-center justify-center shadow-md shadow-purple-500/30 group-hover:scale-125 transition-transform duration-300">
            <div className={`w-1.5 h-1.5 rounded-full ${item.isCurrent ? 'bg-cyan-400 animate-pulse' : 'bg-purple-400'}`} />
          </div>

          {/* Timeline Card */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 relative overflow-hidden">
            {/* Top Row: Degree & Status */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <span className="text-xs font-mono font-medium px-3 py-1 rounded-full text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                {item.degree}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {item.grade && (
                  <span className="text-xs font-mono font-bold px-3 py-0.5 rounded-full text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 flex items-center gap-1 shadow-sm">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.grade}</span>
                  </span>
                )}
                {item.isCurrent && (
                  <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full text-purple-300 bg-purple-500/15 border border-purple-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    {item.status}
                  </span>
                )}
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
              </div>
            </div>

            {/* Institution & Specialization */}
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mt-2">
              {item.institution}
            </h3>
            {item.specialization && (
              <p className="text-sm font-semibold text-purple-400 mt-1">
                {item.specialization}
              </p>
            )}

            <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1 mb-4">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{item.location}</span>
            </div>

            {item.description && (
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                {item.description}
              </p>
            )}

            {/* Coursework Section */}
            {item.coursework && item.coursework.length > 0 && (
              <div className="mb-5">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2.5">
                  <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                  Key Coursework & Domains
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-surface-100/80 border border-slate-700/50 text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Academic Highlights */}
            {item.highlights && item.highlights.length > 0 && (
              <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}