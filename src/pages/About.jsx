import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Sparkles,
  Target,
  BookOpen,
  Code2,
  Brain,
  Rocket,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Calendar,
  Briefcase,
  Award
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { experiences } from '../data/experience';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import ExperienceCard from '../components/ExperienceCard';

export default function About() {
  const principles = [
    {
      title: "Foundations Before Frameworks",
      desc: "Understanding the underlying linear algebra, calculus, and algorithmic logic before relying solely on high-level libraries.",
      icon: BookOpen,
      color: "text-purple-400"
    },
    {
      title: "Clean, Reproducible Code",
      desc: "Writing modular scripts, well-documented Jupyter notebooks, and version-controlled experiments that others can replicate.",
      icon: Code2,
      color: "text-cyan-400"
    },
    {
      title: "Real-World Impact",
      desc: "Focusing on AI models that solve concrete human problems—from defect diagnosis with RAG to clinical radiograph imaging.",
      icon: Target,
      color: "text-indigo-400"
    },
    {
      title: "Continuous Exploration",
      desc: "Staying curious with rapid advancements in LLM architectures, prompt engineering, and multimodal AI workflows.",
      icon: Rocket,
      color: "text-emerald-400"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {/* PAGE HEADER */}
      <PageHeader
        badge="// BACKGROUND & VISION"
        title="Engineering"
        highlight="Intelligent Systems"
        description="A look into my academic journey at KIT (8.14 CGPA), industry internships in AI/ML, and technical philosophy."
      />

      {/* MAIN BIO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
        {/* Left narrative */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="glass-card rounded-3xl p-7 sm:p-9 space-y-5">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Hello! I'm <span className="text-purple-300">{personalInfo.name}</span>
            </h2>

            <p className="text-base text-slate-200 leading-relaxed font-medium">
              {personalInfo.about.lead}
            </p>

            {personalInfo.about.paragraphs.map((para, idx) => (
              <p key={idx} className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {para}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4">
              <Button
                to="/projects"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
              >
                View My Projects
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                size="md"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Core Areas of Interest */}
          <div className="glass-card rounded-3xl p-7 sm:p-9">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-400" />
              Primary Technical Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {personalInfo.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-purple-500/10 border border-purple-500/25 text-purple-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right card / profile summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Quick Academic Profile Card */}
          <div className="glass-card rounded-3xl p-7 relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-[2px] mb-5 shadow-lg shadow-purple-500/20">
              <div className="w-full h-full bg-[#0b0f19] rounded-[14px] flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-purple-400" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-white">
              {personalInfo.name}
            </h3>
            <p className="text-xs font-mono text-purple-400 mt-0.5 mb-4">
              {personalInfo.title}
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs sm:text-sm">
              <div>
                <span className="text-slate-400 block text-[11px] font-mono uppercase">College</span>
                <span className="text-slate-200 font-medium">{personalInfo.college}</span>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] font-mono uppercase">Degree</span>
                <span className="text-slate-200 font-medium">{personalInfo.degree}</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-slate-400 block text-[11px] font-mono uppercase">Batch</span>
                  <span className="text-slate-200 font-medium">{personalInfo.batch}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-mono uppercase">Current CGPA</span>
                  <span className="text-emerald-400 font-bold font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/25">
                    {personalInfo.cgpa}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-slate-400 block text-[11px] font-mono uppercase">Native Base</span>
                  <span className="text-slate-200 font-medium">{personalInfo.location}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-mono uppercase">Internships</span>
                  <span className="text-purple-300 font-medium">2 Completed</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800">
              <span className="text-xs font-mono text-slate-400 block mb-3">Connect With Me:</span>
              <SocialLinks iconSize="w-4 h-4" showLabels={true} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* INTERNSHIP & INDUSTRY EXPERIENCE SECTION */}
      <div className="mt-24">
        <SectionHeading
          badge="// PRACTICAL EXPERIENCE"
          title="Industry"
          highlight="Internships"
          subtitle="Real-world engineering internships applying machine learning, RAG pipelines, and automated bug diagnosis."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={exp.id} experience={exp} index={idx} />
          ))}
        </div>
      </div>

      {/* PRINCIPLES & VALUES */}
      <div className="mt-24">
        <SectionHeading
          badge="// HOW I WORK"
          title="Core Principles &"
          highlight="Approach"
          subtitle="The mental models and discipline that guide my learning and engineering practice."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="glass-card glass-card-hover rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-surface-100 border border-slate-700/80 flex items-center justify-center mb-4">
                    <Icon className={`w-5 h-5 ${p.color}`} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}