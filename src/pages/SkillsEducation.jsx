import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Cpu,
  Brain,
  Layers,
  Terminal,
  FileCheck2,
  BookOpen,
  Briefcase,
  FileText
} from 'lucide-react';
import { skillCategories } from '../data/skills';
import { educationData } from '../data/education';
import { certifications } from '../data/certifications';
import { experiences } from '../data/experience';
import { publications } from '../data/publications';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import Timeline from '../components/Timeline';
import CertificationCard from '../components/CertificationCard';
import ExperienceCard from '../components/ExperienceCard';
import PublicationCard from '../components/PublicationCard';

export default function SkillsEducation() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {/* PAGE HEADER */}
      <PageHeader
        badge="// EXPERTISE, RESEARCH & EXPERIENCE"
        title="Technical Skills,"
        highlight="Research & Career"
        description="Comprehensive matrix of my technical competencies, research publication at ICOSICS 2026, industry internships, and academic foundation."
      />

      {/* RESEARCH & PUBLICATIONS SECTION */}
      <section className="my-12">
        <SectionHeading
          badge="// SCHOLARLY WORK"
          title="Research &"
          highlight="Publications"
          subtitle="Peer-reviewed conference research presentation with IEEE-associated proceedings."
        />

        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <PublicationCard key={pub.id} publication={pub} index={idx} />
          ))}
        </div>
      </section>

      {/* INDUSTRY INTERNSHIPS SECTION */}
      <section className="mt-24">
        <SectionHeading
          badge="// WORK EXPERIENCE"
          title="Industry"
          highlight="Internships"
          subtitle="Practical industry roles at Infosys Springboard and Litz Tech developing applied AI & ML software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={exp.id} experience={exp} index={idx} />
          ))}
        </div>
      </section>

      {/* SKILLS MATRIX */}
      <section className="mt-24">
        <SectionHeading
          badge="// SKILLS MATRIX"
          title="Technical"
          highlight="Proficiencies"
          subtitle="Categorized across core programming languages, machine learning frameworks, and developer tools."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <SkillCard key={category.id} category={category} index={idx} />
          ))}
        </div>
      </section>

      {/* ACADEMIC TIMELINE */}
      <section className="mt-24">
        <SectionHeading
          badge="// FORMAL EDUCATION"
          title="Academic"
          highlight="Journey"
          subtitle="Pursuing B.E. in Computer Science and Engineering (AIML) at KIT – Kalaignar Karunanidhi Institute of Technology (8.14 CGPA)."
        />

        <div className="max-w-4xl">
          <Timeline items={educationData} />
        </div>
      </section>

      {/* CERTIFICATIONS & SPECIALIZATIONS */}
      <section className="mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <SectionHeading
            badge="// CONTINUOUS LEARNING"
            title="Certifications &"
            highlight="Milestones"
            subtitle="Verified self-paced courses, specializations, and foundational achievements."
            className="mb-0"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </section>
    </div>
  );
}