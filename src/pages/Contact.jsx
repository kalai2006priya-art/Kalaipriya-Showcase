import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <PageHeader
        badge="// GET IN TOUCH"
        title="Let's Connect &"
        highlight="Collaborate"
        description="Whether you have an internship opportunity, a research collaboration, or just want to chat about AI & ML, I'd love to hear from you."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="glass-card rounded-2xl p-6 relative overflow-hidden group">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-surface-100 hover:bg-surface-200 border border-slate-700/60 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">Direct Email</h3>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-base font-semibold text-white hover:text-purple-300 transition-colors mt-0.5 block"
            >
              {personalInfo.email}
            </a>
            <p className="text-xs text-slate-400 mt-2">
              Feel free to send questions, opportunities, or inquiries anytime.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Professional Profiles
            </h3>

            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-surface-100/70 hover:bg-surface-200 border border-slate-800 hover:border-purple-500/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    GitHub
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    @kalaipriya031
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-300 transition-colors" />
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-surface-100/70 hover:bg-surface-200 border border-slate-800 hover:border-blue-500/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    kalaipriya-s
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-300 transition-colors" />
            </a>
          </div>

          <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">Base Location</h3>
              <p className="text-sm font-semibold text-white mt-0.5">
                {personalInfo.location}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {personalInfo.college}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="glass-card rounded-3xl p-7 sm:p-9 relative overflow-hidden">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, {formData.name}. I will get back to you at{' '}
                  <span className="text-purple-300">{formData.email}</span> as soon as possible.
                </p>
                <div className="pt-4">
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    variant="secondary"
                    size="sm"
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                    Direct Inquiry Form
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Carter"
                      className="w-full px-4 py-3 rounded-xl bg-surface-100/90 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-surface-100/90 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Machine Learning Internship / Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-surface-100/90 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-surface-100/90 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <p className="text-[11px] font-mono text-slate-400">
                    Typically responds within 24-48 hours.
                  </p>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    icon={Send}
                    iconPosition="right"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}