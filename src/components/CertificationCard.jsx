import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2, Clock } from 'lucide-react';

export default function CertificationCard({ cert }) {
  const isCompleted = cert.status?.toLowerCase().includes('completed');

  return (
    <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-400">
                {cert.issuer}
              </p>
            </div>
          </div>

          <span
            className={`text-[10px] font-mono font-medium px-2.5 py-1 rounded-full border shrink-0 flex items-center gap-1 ${
              isCompleted
                ? 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20'
                : 'text-amber-300 bg-amber-500/10 border-amber-500/20'
            }`}
          >
            {isCompleted ? (
              <CheckCircle2 className="w-3 h-3" />
            ) : (
              <Clock className="w-3 h-3" />
            )}
            {cert.status}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-4">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>{cert.date}</span>
        </div>

        {cert.summary && (
          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            {cert.summary}
          </p>
        )}

        {cert.skillsLearned && cert.skillsLearned.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-5">
            {cert.skillsLearned.map((skill) => (
              <span
                key={skill}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 font-mono">
          Verified Milestone
        </span>
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
          >
            <span>View Credential</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}