import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  FileText, 
  MapPin, 
  BookOpen, 
  Code, 
  Brain, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink, 
  Layers, 
  Cpu, 
  ArrowRight,
  Database,
  Building,
  Calendar,
  Eye,
  Mail
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { publications } from '../data/publications';

export default function AboutSection({ onSelectTab, onOpenCertificate }) {
  const paper = publications[0];

  return (
    <section id="about" className="py-12 sm:py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            About Me
          </span>
          <h2 className="mt-1 text-3xl font-serif-editorial font-bold text-slate-900 dark:text-white sm:text-4xl">
            Academic Profile & Vision
          </h2>
          <div className="mt-2.5 w-16 h-1 bg-blue-700 mx-auto rounded-full"></div>
        </div>

        {/* Main Hero Banner Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          {/* Left Column: Portrait & Identity */}
          <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-amber-500 rounded-3xl blur-md opacity-80 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-950">
                <img 
                  src="/profile.jpg" 
                  alt="Kalaipriya Sowmiyan - Academic & Professional Portrait" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-center shadow-lg">
                  <span className="text-xs font-serif-editorial font-bold text-white block">
                    Kalaipriya Sowmiyan
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                Aspiring Machine Learning Engineer
              </span>
              <p className="text-xs text-slate-300 font-medium">
                Department of Computer Science & Engineering (AIML)
              </p>
              <p className="text-[11px] text-slate-400">
                KIT – Kalaignar Karunanidhi Institute of Technology, Coimbatore
              </p>
              <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3 text-blue-400" />
                Coimbatore, Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* Right Column: Narrative, Stat Badges & Quick Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-mono font-semibold">
                B.E. Computer Science & Engineering (AIML) • Batch 2024–2028 • 8.14 CGPA
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-white tracking-tight">
                Kalaipriya Sowmiyan, <span className="text-blue-300 text-lg sm:text-xl font-normal">B.E. CSE (AIML)</span>
              </h3>
              <p className="text-sm font-medium text-blue-300 italic">
                "{personalInfo.tagline}"
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              I am a 3rd-year Computer Science and Engineering (Artificial Intelligence and Machine Learning) undergraduate at KIT – Kalaignar Karunanidhi Institute of Technology, Coimbatore (Batch 2024–2028, 8.14 CGPA). I have hands-on experience working on programming languages, Machine Learning, and Deep Learning projects, with a strong focus on practical problem solving.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              With hands-on industry internship experience at Infosys Springboard and Litz Tech, coupled with peer-reviewed research presentation at IEEE-cosponsored ICOSICS 2026 (RVCE Bengaluru), I am driven to engineer reliable, verifiable AI solutions for real-world production environments.
            </p>

            {/* 4 Quick Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-1">
                <span className="text-xl sm:text-2xl font-extrabold text-blue-400 block font-mono">
                  8.14
                </span>
                <span className="text-[11px] font-semibold text-slate-300 block">
                  CGPA
                </span>
                <span className="text-[10px] text-slate-400 block">
                  KIT Coimbatore
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-1">
                <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 block font-mono">
                  2
                </span>
                <span className="text-[11px] font-semibold text-slate-300 block">
                  Internships
                </span>
                <span className="text-[10px] text-slate-400 block">
                  Infosys & Litz Tech
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-1">
                <span className="text-xl sm:text-2xl font-extrabold text-amber-400 block font-mono">
                  1
                </span>
                <span className="text-[11px] font-semibold text-slate-300 block">
                  Conference Paper
                </span>
                <span className="text-[10px] text-slate-400 block">
                  ICOSICS 2026 (RVCE)
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-1">
                <span className="text-xl sm:text-2xl font-extrabold text-purple-400 block font-mono">
                  4
                </span>
                <span className="text-[11px] font-semibold text-slate-300 block">
                  AI Projects
                </span>
                <span className="text-[10px] text-slate-400 block">
                  RAG, DL, NLP & Web
                </span>
              </div>
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onSelectTab("publications")}
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-md flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>View Publications</span>
              </button>

              <button
                onClick={() => onSelectTab("projects")}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs transition flex items-center gap-2"
              >
                <Code className="w-4 h-4 text-blue-400" />
                <span>Explore Projects</span>
              </button>

              <button
                onClick={() => onSelectTab("contact")}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs transition flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Meta Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs border-t border-slate-800/80">
              <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-center gap-2.5">
                <Building className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-mono">Institution</span>
                  <span className="font-medium text-slate-200">KIT-KALAIGNARKARUNANIDHI INSTITUTE OF TECHNOLOGY,COIMBATORE</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-mono">Batch & Status</span>
                  <span className="font-medium text-slate-200">2024 – 2028 • Seeking Internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Positioning Quote Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 p-8 sm:p-10 text-white shadow-xl text-center">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
              Core Philosophy
            </span>
            <blockquote className="text-lg sm:text-2xl font-serif-editorial font-bold italic tracking-wide text-blue-100">
              "{personalInfo.tagline}"
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
              Connecting computational algorithms, deep feature representation, and reproducible engineering pipelines to build production-grade AI solutions.
            </p>
          </div>
        </div>

        {/* Research & Publication Milestone */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/60 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif-editorial font-bold text-slate-900 dark:text-white">
                    Research & Conference Presentation
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    ICOSICS 2026 • RV College of Engineering, Bengaluru
                  </span>
                </div>
              </div>

              <span className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold uppercase self-start sm:self-auto">
                Successfully Presented • Peer Reviewed
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2.5">
              <h4 className="font-serif-editorial font-bold text-slate-900 dark:text-white text-base sm:text-lg leading-snug">
                {paper.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Presented at the International Conference on Secure IoT and Cybersecurity (ICOSICS 2026) organized by RV College of Engineering, Bengaluru. Technically co-sponsored by IEEE Systems, Man, and Cybernetics Society (IEEE SMC) Bangalore Chapter & Cisco.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <button
                onClick={() => onOpenCertificate(paper)}
                className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs transition shadow-md flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>View Presentation Certificate</span>
              </button>
              <button
                onClick={() => onSelectTab("publications")}
                className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1.5"
              >
                <span>Full Publication Details & Keywords</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Technical Focus Areas Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Areas of Technical Expertise
            </span>
            <h3 className="text-2xl font-serif-editorial font-bold text-slate-900 dark:text-white">
              Core Competencies & Research Verticals
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Machine Learning & AI",
                desc: "Supervised classification, regression, model evaluation, and predictive workflow engineering.",
                icon: Brain,
                color: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30"
              },
              {
                title: "Retrieval-Augmented Generation (RAG)",
                desc: "FAISS vector search, dense embeddings, defect repository querying, and LLM augmentation.",
                icon: Layers,
                color: "text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30"
              },
              {
                title: "Deep Learning & Vision",
                desc: "Convolutional Neural Networks (CNN) for radiographic imaging and agricultural viability screening.",
                icon: Cpu,
                color: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30"
              },
              {
                title: "NLP & Semantic Text Processing",
                desc: "Transformer architectures, BERT embeddings, text classification, and emotional state analysis.",
                icon: BookOpen,
                color: "text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30"
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300 space-y-2 group"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
