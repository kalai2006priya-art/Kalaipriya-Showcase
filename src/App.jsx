import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import PublicationsSection from './components/PublicationsSection';
import ResearchProfilesSection from './components/ResearchProfilesSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import SearchModal from './components/SearchModal';
import CertificateModal from './components/CertificateModal';
import ProjectModal from './components/ProjectModal';

import { publications } from './data/publications';

export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Sync hash and pathname on load and navigation
  useEffect(() => {
    const handleLocationChange = () => {
      const validTabs = ["about", "education", "experience", "publications", "profiles", "projects", "skills", "contact"];
      const hash = window.location.hash.replace("#", "").toLowerCase();
      const path = window.location.pathname.replace(/^\//, "").toLowerCase();

      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      } else if (hash === "research_profiles") {
        setActiveTab("profiles");
      } else if (validTabs.includes(path)) {
        setActiveTab(path);
      } else if (path === "research_profiles") {
        setActiveTab("profiles");
      }
    };

    handleLocationChange();
    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const handleSelectTab = (tabId) => {
    const resolvedTab = tabId === "research_profiles" ? "profiles" : tabId;
    setActiveTab(resolvedTab);
    window.location.hash = resolvedTab;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const validTabs = ["about", "education", "experience", "publications", "profiles", "projects", "skills", "contact"];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-blue-700 selection:text-white transition-colors duration-300">
      {/* Fixed Sticky Header & Horizontal Sub-Nav */}
      <Header 
        activeTab={activeTab} 
        onSelectTab={handleSelectTab} 
        onOpenSearch={() => setSearchOpen(true)} 
      />

      {/* Main Content Sections Switched by Navigation Tabs */}
      <main className="pt-20 sm:pt-24 min-h-[calc(100vh-380px)]">
        {(!validTabs.includes(activeTab) || activeTab === "about") && (
          <div className="animate-in fade-in duration-300">
            <AboutSection 
              onSelectTab={handleSelectTab} 
              onOpenCertificate={(pub) => setSelectedCertificate(pub || publications[0])} 
            />
          </div>
        )}

        {activeTab === "education" && (
          <div className="animate-in fade-in duration-300">
            <EducationSection />
          </div>
        )}

        {activeTab === "experience" && (
          <div className="animate-in fade-in duration-300">
            <ExperienceSection />
          </div>
        )}

        {activeTab === "publications" && (
          <div className="animate-in fade-in duration-300">
            <PublicationsSection 
              onOpenCertificate={(pub) => setSelectedCertificate(pub || publications[0])} 
            />
          </div>
        )}

        {(activeTab === "profiles" || activeTab === "research_profiles") && (
          <div className="animate-in fade-in duration-300">
            <ResearchProfilesSection />
          </div>
        )}

        {activeTab === "projects" && (
          <div className="animate-in fade-in duration-300">
            <ProjectsSection 
              onOpenProject={(proj) => setSelectedProject(proj)} 
            />
          </div>
        )}

        {activeTab === "skills" && (
          <div className="animate-in fade-in duration-300">
            <SkillsSection />
          </div>
        )}

        {activeTab === "contact" && (
          <div className="animate-in fade-in duration-300">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Academic 4-Column Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Interactive Global Search Modal */}
      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
        onSelectResult={handleSelectTab} 
      />

      {/* ICOSICS 2026 Presentation Certificate Modal */}
      <CertificateModal 
        isOpen={!!selectedCertificate} 
        onClose={() => setSelectedCertificate(null)} 
        imageSrc={selectedCertificate?.certificateImage || "/certificate-icosics-2026.jpg"}
        title={selectedCertificate?.title || "Certificate of Presentation"}
        subtitle={selectedCertificate?.conference || "ICOSICS 2026 • RV College of Engineering, Bengaluru"}
      />

      {/* Project Deep Dive Architecture Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
