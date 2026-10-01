import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  GraduationCap, 
  ExternalLink, 
  Globe, 
  Code2, 
  Award,
  BookOpen
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function ResearchProfilesSection() {
  const profiles = [
    {
      name: "GitHub Developer Profile",
      identifier: "kalai2006priya-art",
      category: "Open Source Repositories & Code",
      url: personalInfo.socialLinks.github,
      icon: Github,
      color: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30",
      description: "Personal repositories featuring Machine Learning, Deep Learning, and academic programming projects."
    },
    {
      name: "LinkedIn Professional Profile",
      identifier: "kalaipriya-sowmiyan",
      category: "Professional & Academic Network",
      url: personalInfo.socialLinks.linkedin,
      icon: Linkedin,
      color: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
      description: "Professional profile for connecting with peers, academic community, and career opportunities."
    },
    {
      name: "Academic & Professional Email",
      identifier: personalInfo.email,
      category: "Direct Inquiries & Collaboration",
      url: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30",
      description: "Direct academic correspondence for project inquiries, discussions, and technical collaborations."
    }
  ];

  return (
    <section id="profiles" className="py-16 sm:py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono">
            CONNECT & EXPLORE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-slate-900 dark:text-white">
            Profiles
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1">
            Verified developer repositories, professional networks, and direct contact channels.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {profiles.map((p, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold ${p.color}`}>
                    <p.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Verified
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {p.name}
                  </h3>
                  <span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-400 block truncate">
                    {p.identifier}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
                    {p.category}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
