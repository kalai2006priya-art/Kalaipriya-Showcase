import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Terminal,
  Cpu,
  Brain,
  Code2,
  Sparkles,
  Layers,
  GraduationCap,
  ExternalLink,
  ChevronRight,
  Briefcase,
  Award,
  BookOpen
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { projects } from '../data/projects';
import { publications } from '../data/publications';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import PublicationCard from '../components/PublicationCard';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  const focusAreas = [
    {
      icon: Brain,
      title: 'Generative AI & RAG Systems',
      desc: 'Building intelligent defect diagnosis and retrieval systems using Retrieval-Augmented Generation (RAG), FAISS vector search, and FastAPI.',
      gradient: 'from-purple-500/15 to-indigo-500/15',
      border: 'border-purple-500/25',
      iconColor: 'text-purple-400'
    },
    {
      icon: Cpu,
      title: 'Deep Learning & Computer Vision',
      desc: 'Developing convolutional neural networks and transfer learning models (MobileNetV2) for clinical radiograph classification and diagnostics.',
      gradient: 'from-cyan-500/15 to-blue-500/15',
      border: 'border-cyan-500/25',
      iconColor: 'text-cyan-400'
    },
    {
      icon: Code2,
      title: 'NLP & AI Web Engineering',
      desc: 'Deploying transformer-based sentiment models with BERT, interactive Streamlit apps, and modern responsive web interfaces in React.',
      gradient: 'from-indigo-500/15 to-purple-500/15',
      border: 'border-indigo-500/25',
      iconColor: 'text-indigo-400'
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-28 pt-28 sm:pt-36">
      {/* HERO SECTION WITH PROFILE PHOTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Profile Photo Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative mb-6"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 shadow-xl shadow-purple-500/20">
              <img
                src={personalInfo.profilePhoto}
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover object-top border-2 border-[#080b11]"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-emerald-500 border-2 border-[#080b11]" title="Available for roles">
              <span className="sr-only">Available</span>
            </div>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-purple-300 bg-purple-500/10 border border-purple-500/25 mb-4 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Machine Learning & AI Internships</span>
          </motion.div>

          {/* Main Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.12]"
          >
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-slate-300 font-mono mb-3"
          >
            {personalInfo.title}
          </motion.p>

          {/* Subtitle / Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 italic"
          >
            "{personalInfo.tagline}"
            <span className="block not-italic text-sm text-slate-400 mt-2">
              3rd-year B.E. Computer Science & Engineering (AIML) at <strong className="text-slate-200">KIT Coimbatore</strong> (Batch 2024–2026, 8.14 CGPA) • Internships at <span className="text-purple-300 font-medium">Infosys Springboard</span> & <span className="text-cyan-300 font-medium">Litz Tech</span>.
            </span>
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mb-10"
          >
            <Button
              to="/projects"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              Explore Projects
            </Button>

            <Button
              to="/skills"
              variant="secondary"
              size="lg"
              icon={BookOpen}
              iconPosition="left"
            >
              Research & Skills
            </Button>

            <Button
              to="/contact"
              variant="outline"
              size="lg"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="flex items-center gap-4 pt-1"
          >
            <span className="text-xs font-mono text-slate-400">CONNECT:</span>
            <SocialLinks iconSize="w-4 h-4" />
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto"
        >
          {personalInfo.highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-5 text-center relative overflow-hidden group"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                {item.label}
              </div>
              <div className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                {item.value}
              </div>
              <div className="text-xs text-slate-400 font-mono mt-1">
                {item.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* RESEARCH PUBLICATION SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// SCHOLARLY PUBLICATION"
          title="Featured"
          highlight="Research Paper"
          subtitle="Recent peer-reviewed paper presentation at the IEEE SMC & Cisco Co-Sponsored International Conference (ICOSICS 2026)."
        />

        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <PublicationCard key={pub.id} publication={pub} index={idx} />
          ))}
        </div>
      </section>

      {/* CORE FOCUS AREAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// CORE PILLARS"
          title="Technical"
          highlight="Focus Areas"
          subtitle="Combining algorithmic modeling with modern engineering frameworks to build production-grade AI systems."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between relative group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${area.gradient} border ${area.border} flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${area.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FEATURED PROJECTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <SectionHeading
            badge="// RECENT IMPLEMENTATIONS"
            title="Featured"
            highlight="Projects"
            subtitle="Selected implementations in Generative AI, Computer Vision, and Natural Language Processing."
            className="mb-0"
          />

          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group shrink-0"
          >
            <span>View All Projects</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* VERIFIED TECH TOOLBOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-8 border border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400">
              Core Tech Stack
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              Languages & Engineering Tools
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {[
              'Python',
              'Go (Golang)',
              'FastAPI',
              'Streamlit',
              'RAG & Vector Search',
              'FAISS',
              'BERT & NLP',
              'Scikit-Learn',
              'Pandas & NumPy',
              'React.js',
              'HTML5 & CSS3',
              'Java',
              'C (Basics)',
              'SQL',
              'Git & GitHub',
              'VS Code',
              'Google Colab',
              'Jupyter Notebook'
            ].map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-300 bg-surface-100 border border-slate-700/60 hover:border-purple-500/40 hover:text-white transition-all hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATION CALLOUT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 border border-purple-500/20 bg-gradient-to-b from-[#101426] to-[#0a0d18]">
          <div className="relative z-10 max-w-3xl">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-4 inline-block">
              KIT – Kalaignar Karunanidhi Institute of Technology
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
              Looking for a dedicated <span className="gradient-text">Machine Learning Engineer</span> or Intern?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              I am actively seeking internship opportunities, research collaborations, and full-time roles where I can apply my experience in RAG pipelines, deep learning models, and API development to build impactful systems.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
              >
                Get In Touch
              </Button>

              <Button
                to="/about"
                variant="secondary"
                size="md"
              >
                Read Background & Experience
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}