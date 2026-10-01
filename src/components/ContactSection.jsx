import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Building, 
  Sparkles,
  Phone
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        text: "Thank you for reaching out! Your message has been received. Kalaipriya will get back to you shortly."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-slate-900 dark:text-white">
            Contact & Academic Collaboration
          </h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1">
            Let's connect regarding machine learning engineering internships, research inquiries, or project discussions.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-serif-editorial font-bold text-slate-900 dark:text-white">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Always open to exciting AI/ML opportunities and scholarly dialogue.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase block">Email Address</span>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* College / Work Location */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase block">Institution</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 block text-xs">
                      KIT-KALAIGNARKARUNANIDHI INSTITUTE OF TECHNOLOGY,COIMBATORE
                    </span>
                    <span className="text-[11px] text-slate-500">Coimbatore, Tamil Nadu</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase block">Location</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">
                      Coimbatore, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Pill */}
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/60 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-300">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  <span>Availability Status</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                  Seeking Machine Learning Engineer Internships & Entry-Level AI Developer Roles (Batch 2024–2028).
                </p>
              </div>

              {/* Social Connect */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-700 hover:text-white transition shadow-xs"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-700 hover:text-white transition shadow-xs"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-700 hover:text-white transition shadow-xs"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-serif-editorial font-bold text-slate-900 dark:text-white">
                  Send Direct Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Fill in your details below and I will get back to you promptly.
                </p>
              </div>

              {submitStatus && (
                <div className={`p-4 rounded-2xl flex items-start gap-3 ${
                  submitStatus.type === "success" 
                    ? "bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200" 
                    : "bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200"
                }`}>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs font-medium leading-relaxed">
                    {submitStatus.text}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block font-mono">
                      Your Name *
                    </label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Ramesh / Recruiter"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block font-mono">
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block font-mono">
                    Subject
                  </label>
                  <input 
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. AI/ML Internship Opportunity / Research Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block font-mono">
                    Message *
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or inquiry here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs transition shadow-md flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Sending Message..." : "Submit Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
