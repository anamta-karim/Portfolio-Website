import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  Code2,
  Compass,
  Cpu,
  ExternalLink,
  FolderGit2,
  GraduationCap,
  Mail,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import {
  ACHIEVEMENTS_DATA,
  EXPERIENCE_ITEMS,
  PROFILE_DATA,
  PROJECTS_DATA,
  RESEARCH_INTERESTS,
  RESEARCH_ITEMS,
  SKILL_GROUPS,
} from '../data/portfolioData';
import { ProjectFilterCategory } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ResumeButton } from './ResumeButton';

const FILTER_OPTIONS: { id: ProjectFilterCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'ai-ml', label: 'AI/ML & NLP' },
  { id: 'genai-cv', label: 'GenAI & Vision' },
  { id: 'fullstack-cloud', label: 'Full-Stack & Cloud' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="portfolio-section" aria-labelledby="heading-about">
      <div className="section-header">
        <span className="section-number">01.</span>
        <h2 id="heading-about" className="section-title">
          About Me
        </h2>
      </div>

      <div className="about-layout">
        <div className="about-main-col">
          <p className="about-lead">{PROFILE_DATA.shortBio}</p>
          <p className="about-body">{PROFILE_DATA.philosophy}</p>

          {/* Education & Currently Building Glass Cards */}
          <div className="about-cards-grid">
            <div className="info-glass-card">
              <div className="info-card-header">
                <span className="info-card-icon" aria-hidden="true">
                  <GraduationCap size={18} />
                </span>
                <span className="info-card-eyebrow">EDUCATION</span>
              </div>
              <h3 className="info-card-title">{PROFILE_DATA.education.institution}</h3>
              <p className="info-card-subtitle">{PROFILE_DATA.education.degree}</p>
              <div className="info-meta-pills">
                <span className="meta-pill">
                  <Calendar size={13} aria-hidden="true" />
                  <span>{PROFILE_DATA.education.period}</span>
                </span>
                <span className="meta-pill meta-pill--accent">
                  <TrendingUp size={13} aria-hidden="true" />
                  <span>CGPA {PROFILE_DATA.education.cgpa}</span>
                </span>
              </div>
            </div>

            <div className="info-glass-card info-glass-card--violet">
              <div className="info-card-header">
                <span className="info-card-icon info-card-icon--violet" aria-hidden="true">
                  <Cpu size={18} />
                </span>
                <span className="info-card-eyebrow">CURRENTLY BUILDING</span>
                <span className="mini-status-tag">{PROFILE_DATA.currentlyBuilding.status}</span>
              </div>
              <h3 className="info-card-title">{PROFILE_DATA.currentlyBuilding.title}</h3>
              <p className="info-card-desc">{PROFILE_DATA.currentlyBuilding.description}</p>
              <a
                href={PROFILE_DATA.currentlyBuilding.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-text-link"
              >
                <span>Inspect pipeline repository</span>
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Focus Area Chips */}
          <div className="focus-areas-block">
            <span className="focus-label">CORE FOCUS AREAS</span>
            <div className="focus-chips" aria-label="Core technical focus areas">
              {PROFILE_DATA.focusAreas.map((area) => (
                <span key={area} className="focus-chip">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Arched Celestial Observatory Window — 100% Crisp Vector Digital Art */}
        <div className="about-arch-col" aria-hidden="true">
          <div className="celestial-arch-frame">
            <svg viewBox="0 0 260 410" className="celestial-arch-svg">
              <defs>
                <linearGradient id="arch-sky" x1="0" y1="0" x2="0.2" y2="1">
                  <stop offset="0%" stopColor="#060A1C" />
                  <stop offset="50%" stopColor="#121942" />
                  <stop offset="82%" stopColor="#231D58" />
                  <stop offset="100%" stopColor="#0A102B" />
                </linearGradient>
                <radialGradient id="arch-milkyway-ice" cx="58%" cy="32%" r="55%">
                  <stop offset="0%" stopColor="#9EDCFF" stopOpacity="0.42" />
                  <stop offset="50%" stopColor="#5AA5F8" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#060A1C" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="arch-milkyway-violet" cx="44%" cy="54%" r="50%">
                  <stop offset="0%" stopColor="#C5A9FF" stopOpacity="0.38" />
                  <stop offset="55%" stopColor="#8B5CF6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#060A1C" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="arch-rim-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#9EDCFF" />
                  <stop offset="50%" stopColor="#C5A9FF" />
                  <stop offset="100%" stopColor="#9EDCFF" />
                </linearGradient>
                <clipPath id="arch-clip">
                  <path d="M 20 130 A 110 110 0 0 1 240 130 L 240 375 Q 240 385 230 385 L 30 385 Q 20 385 20 375 Z" />
                </clipPath>
              </defs>

              {/* Outer Double Arch Border */}
              <path
                d="M 12 130 A 118 118 0 0 1 248 130 L 248 382 Q 248 392 238 392 L 22 392 Q 12 392 12 382 Z"
                fill="none"
                stroke="url(#arch-rim-grad)"
                strokeOpacity="0.34"
                strokeWidth="1.2"
              />

              <g clipPath="url(#arch-clip)">
                <rect width="260" height="400" fill="url(#arch-sky)" />
                <ellipse
                  cx="145"
                  cy="135"
                  rx="115"
                  ry="160"
                  fill="url(#arch-milkyway-ice)"
                  transform="rotate(-26 145 135)"
                />
                <ellipse
                  cx="120"
                  cy="185"
                  rx="105"
                  ry="140"
                  fill="url(#arch-milkyway-violet)"
                  transform="rotate(-26 120 185)"
                />

                {/* Vector Crescent Moon */}
                <path
                  d="M 185 68 A 14 14 0 1 0 204 88 A 11.5 11.5 0 1 1 185 68 Z"
                  fill="#F2FAFF"
                  opacity="0.92"
                />

                {/* Shooting Star */}
                <line
                  x1="58"
                  y1="82"
                  x2="118"
                  y2="52"
                  stroke="#F2F7FF"
                  strokeWidth="1.5"
                  strokeOpacity="0.88"
                  strokeLinecap="round"
                />
                <circle cx="58" cy="82" r="2" fill="#FFFFFF" />

                {/* Mini Constellation Geometry */}
                <polyline
                  points="78,124 118,148 164,120 190,164 152,202 106,188 78,124"
                  fill="none"
                  stroke="rgba(182, 224, 255, 0.52)"
                  strokeWidth="1.2"
                />
                <circle cx="78" cy="124" r="3" fill="#9EDCFF" />
                <circle cx="118" cy="148" r="2.5" fill="#FFFFFF" />
                <circle cx="164" cy="120" r="3.6" fill="#9EDCFF" />
                <circle cx="190" cy="164" r="2.8" fill="#C5A9FF" />
                <circle cx="152" cy="202" r="3.2" fill="#FFFFFF" />
                <circle cx="106" cy="188" r="2.4" fill="#C5A9FF" />

                {/* Layered Vector Mountain Silhouettes */}
                <polygon points="10,320 68,252 128,298 188,228 250,320" fill="#171E4C" />
                <polyline
                  points="68,252 128,298 188,228"
                  fill="none"
                  stroke="rgba(197, 169, 255, 0.45)"
                  strokeWidth="1.2"
                />
                <polygon points="10,320 52,272 114,320" fill="#10173B" />
                <polygon points="95,320 148,256 212,320" fill="#0B112E" />
                <polygon points="150,320 202,270 250,320" fill="#070C22" />

                {/* Starlight Lake Reflection */}
                <rect x="15" y="318" width="230" height="72" fill="#060B1E" />
                <line
                  x1="20"
                  y1="318"
                  x2="240"
                  y2="318"
                  stroke="rgba(158, 220, 255, 0.45)"
                  strokeWidth="1.2"
                />
                <line
                  x1="82"
                  y1="330"
                  x2="178"
                  y2="330"
                  stroke="#9EDCFF"
                  strokeOpacity="0.55"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <line
                  x1="94"
                  y1="340"
                  x2="166"
                  y2="340"
                  stroke="#C5A9FF"
                  strokeOpacity="0.48"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <line
                  x1="104"
                  y1="350"
                  x2="156"
                  y2="350"
                  stroke="#9EDCFF"
                  strokeOpacity="0.4"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
                <line
                  x1="115"
                  y1="360"
                  x2="145"
                  y2="360"
                  stroke="#C5A9FF"
                  strokeOpacity="0.35"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
              </g>

              <path
                d="M 20 130 A 110 110 0 0 1 240 130 L 240 375 Q 240 385 230 385 L 30 385 Q 20 385 20 375 Z"
                fill="none"
                stroke="url(#arch-rim-grad)"
                strokeOpacity="0.65"
                strokeWidth="1.6"
              />
            </svg>
            <div className="arch-caption">
              <span>SAGITTARIUS • IX</span>
              <span>CURIOSITY &amp; RIGOR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterCategory>('all');

  const mainProjects = PROJECTS_DATA.filter((p) => p.status !== 'early-stage');
  const earlyStageProjects = PROJECTS_DATA.filter((p) => p.status === 'early-stage');

  const filteredMainProjects = mainProjects.filter((project) =>
    activeFilter === 'all' ? true : project.categories.includes(activeFilter),
  );

  return (
    <section id="projects" className="portfolio-section" aria-labelledby="heading-projects">
      <div className="section-header-with-desc">
        <div>
          <div className="section-header">
            <span className="section-number">02.</span>
            <h2 id="heading-projects" className="section-title">
              Featured Projects
            </h2>
          </div>
          <p className="section-lead">
            A closer look at systems I have built, tested, and designed, including notes on how
            they were verified, key architecture choices, and their current stage.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="project-filter-bar" role="group" aria-label="Filter projects by domain">
          {FILTER_OPTIONS.map((filter) => {
            const isSelected = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                className={`filter-pill ${isSelected ? 'is-active' : ''}`}
                aria-pressed={isSelected}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Project Cards (SkinWise, PassOn, Retinal VLM) */}
      <div className="projects-stack">
        {filteredMainProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Low-Prominence Early Exploration Strip (Financial Risk Engine ~10% On Hold) */}
      {earlyStageProjects.map((early) => (
        <div
          key={early.id}
          className="early-exploration-banner"
          aria-labelledby={`early-title-${early.id}`}
        >
          <div className="early-banner-header">
            <span className="early-badge">
              <Compass size={13} aria-hidden="true" />
              <span>{early.statusLabel}</span>
            </span>
            <span className="early-disclaimer-tag">
              Not a completed system (shared for transparency)
            </span>
          </div>

          <div className="early-banner-body">
            <div>
              <h3 id={`early-title-${early.id}`} className="early-title">
                {early.title}
              </h3>
              <p className="early-summary">{early.summary}</p>
              <p className="early-note">
                <strong>Current State:</strong> {early.limitations?.[0]}{' '}
                <em>({early.plannedWork?.[0]})</em>
              </p>
            </div>

            <div className="early-banner-actions">
              {early.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  <FolderGit2 size={15} aria-hidden="true" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="portfolio-section" aria-labelledby="heading-skills">
      <div className="section-header">
        <span className="section-number">03.</span>
        <h2 id="heading-skills" className="section-title">
          Technical Skills
        </h2>
      </div>
      <p className="section-lead">
        Grouped by domain, separating the core tools I use regularly from specialized frameworks
        applied in specific projects and research pipelines.
      </p>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <article key={group.id} className="skill-group-card" aria-labelledby={`skill-${group.id}`}>
            <div className="skill-card-top">
              <span className="skill-card-icon" aria-hidden="true">
                <Code2 size={18} />
              </span>
              <div>
                <h3 id={`skill-${group.id}`} className="skill-group-title">
                  {group.title}
                </h3>
                <p className="skill-group-subtitle">{group.subtitle}</p>
              </div>
            </div>

            <div className="skill-tier-block">
              <span className="skill-tier-label">Core &amp; Regular Workflow</span>
              <div className="skill-chip-list">
                {group.coreSkills.map((skill) => (
                  <span key={skill} className="skill-chip skill-chip--core">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {group.projectContextualSkills && group.projectContextualSkills.length > 0 && (
              <div className="skill-tier-block skill-tier-block--contextual">
                <span className="skill-tier-label">Project-Applied Stack</span>
                <div className="skill-chip-list">
                  {group.projectContextualSkills.map((skill) => (
                    <span key={skill} className="skill-chip skill-chip--contextual">
                      {skill}
                    </span>
                  ))}
                </div>
                {group.contextNote && <p className="skill-context-note">{group.contextNote}</p>}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="portfolio-section" aria-labelledby="heading-experience">
      <div className="section-header">
        <span className="section-number">04.</span>
        <h2 id="heading-experience" className="section-title">
          Experience &amp; Leadership
        </h2>
      </div>
      <p className="section-lead">
        Hands-on analytics training and campus leadership roles across student communities and
        national university events.
      </p>

      <div className="experience-timeline">
        {EXPERIENCE_ITEMS.map((item) => (
          <article
            key={item.id}
            className="experience-card"
            aria-labelledby={`exp-title-${item.id}`}
          >
            <div className="experience-card-header">
              <div>
                <span
                  className={`experience-type-badge ${
                    item.type === 'job-simulation'
                      ? 'experience-type-badge--sim'
                      : 'experience-type-badge--lead'
                  }`}
                >
                  {item.type === 'job-simulation' ? (
                    <Briefcase size={13} aria-hidden="true" />
                  ) : (
                    <Users size={13} aria-hidden="true" />
                  )}
                  <span>{item.typeBadge}</span>
                </span>
                <h3 id={`exp-title-${item.id}`} className="experience-role">
                  {item.role}
                </h3>
                <p className="experience-org">{item.organization}</p>
              </div>
              <span className="experience-period">{item.period}</span>
            </div>

            <p className="experience-summary">{item.summary}</p>

            <ul className="experience-bullets">
              {item.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>

            {item.clarificationNote && (
              <p className="experience-clarification" role="note">
                <strong>Note:</strong> {item.clarificationNote}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export const AchievementsSection: React.FC = () => {
  const [missingCertId, setMissingCertId] = useState<string | null>(null);

  const handleCertificateClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    achId: string,
    url: string,
  ) => {
    if (/^https?:\/\//i.test(url)) {
      return; // External certificate link opens normally in new tab
    }
    e.preventDefault();
    const baseWithoutExt = url.replace(/\.(pdf|png|jpe?g|webp)$/i, '');
    const candidates = Array.from(
      new Set([
        url,
        `${baseWithoutExt}.pdf`,
        `${baseWithoutExt}.png`,
        `${baseWithoutExt}.jpg`,
        `${baseWithoutExt}.jpeg`,
      ]),
    );

    for (const candidateUrl of candidates) {
      try {
        const response = await fetch(candidateUrl, { method: 'HEAD', cache: 'no-store' });
        const contentType = (response.headers.get('content-type') || '').toLowerCase();
        if (response.ok && !contentType.includes('text/html')) {
          window.open(candidateUrl, '_blank', 'noopener,noreferrer');
          setMissingCertId(null);
          return;
        }
      } catch {
        // Try next candidate extension
      }
    }
    setMissingCertId((prev) => (prev === achId ? null : achId));
  };

  return (
    <section
      id="achievements"
      className="portfolio-section"
      aria-labelledby="heading-achievements"
    >
      <div className="section-header">
        <span className="section-number">05.</span>
        <h2 id="heading-achievements" className="section-title">
          Achievements &amp; Programs
        </h2>
      </div>
      <p className="section-lead">
        Scholarships, hackathon selections, national invitations, and technical training programs.
      </p>

      <div className="achievements-grid">
        {ACHIEVEMENTS_DATA.map((ach) => (
          <article key={ach.id} className="achievement-card" aria-labelledby={`ach-${ach.id}`}>
            <div className="achievement-top">
              <span className="achievement-category-tag">
                <Award size={13} aria-hidden="true" />
                <span>{ach.categoryLabel}</span>
              </span>
              <span className="achievement-date">{ach.date}</span>
            </div>
            <h3 id={`ach-${ach.id}`} className="achievement-title">
              {ach.title}
            </h3>
            <p className="achievement-issuer">{ach.issuer}</p>
            <p className="achievement-desc">{ach.description}</p>

            {ach.certificateUrl && (
              <div className="achievement-footer">
                <a
                  href={ach.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-cert-link"
                  onClick={(e) => handleCertificateClick(e, ach.id, ach.certificateUrl!)}
                >
                  <span>{ach.certificateLabel ?? 'View Certificate'}</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
                {missingCertId === ach.id && (
                  <p className="achievement-cert-hint" role="status">
                    Add your certificate file at <code>public{ach.certificateUrl}</code> (or set an
                    external URL in <code>src/data/portfolioData.ts</code>) to open it directly.
                  </p>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="portfolio-section" aria-labelledby="heading-research">
      <div className="section-header">
        <span className="section-number">06.</span>
        <h2 id="heading-research" className="section-title">
          Research &amp; Learning
        </h2>
      </div>
      <p className="section-lead">
        Ongoing vision-language experimentation, hardware-conscious training setups, and engineering
        notes from building real projects. (These are active technical investigations and learning
        notes rather than formal published papers.)
      </p>

      <div className="research-stack">
        {RESEARCH_ITEMS.map((item) => (
          <article key={item.id} className="research-card" aria-labelledby={`res-${item.id}`}>
            <div className="research-card-header">
              <span className="research-status-pill">
                <BookOpen size={13} aria-hidden="true" />
                <span>{item.statusLabel}</span>
              </span>
              {item.repoUrl && (
                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-text-link"
                >
                  <span>View Repository</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              )}
            </div>

            <h3 id={`res-${item.id}`} className="research-title">
              {item.title}
            </h3>
            <p className="research-summary">{item.summary}</p>

            <ul className="research-detail-list">
              {item.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>

            <div className="research-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="tech-chip">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="research-interests-box">
        <h3 className="interests-heading">
          <Sparkles size={16} aria-hidden="true" />
          <span>Core Research &amp; Engineering Interests</span>
        </h3>
        <ul className="interests-grid">
          {RESEARCH_INTERESTS.map((interest) => (
            <li key={interest} className="interest-item">
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="portfolio-section" aria-labelledby="heading-contact">
      <div className="contact-panel">
        <div className="section-header">
          <span className="section-number">07.</span>
          <h2 id="heading-contact" className="section-title">
            Contact
          </h2>
        </div>

        <p className="contact-lead">
          I am actively looking for AI/ML, Data Science, GenAI, and Software Engineering internship
          and early-career opportunities, as well as collaborative research projects. Feel free to
          reach out directly by email or connect on LinkedIn and GitHub.
        </p>

        <div className="contact-cards-grid">
          <a href={`mailto:${PROFILE_DATA.contact.email}`} className="contact-channel-card">
            <span className="contact-channel-icon" aria-hidden="true">
              <Mail size={20} />
            </span>
            <div>
              <span className="contact-channel-label">Direct Email</span>
              <strong className="contact-channel-value">{PROFILE_DATA.contact.email}</strong>
            </div>
          </a>

          <a
            href={PROFILE_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel-card"
          >
            <span className="contact-channel-icon" aria-hidden="true">
              <LinkedinIcon size={20} />
            </span>
            <div>
              <span className="contact-channel-label">LinkedIn</span>
              <strong className="contact-channel-value">linkedin.com/in/anamta-karim</strong>
            </div>
          </a>

          <a
            href={PROFILE_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel-card"
          >
            <span className="contact-channel-icon" aria-hidden="true">
              <GithubIcon size={20} />
            </span>
            <div>
              <span className="contact-channel-label">GitHub</span>
              <strong className="contact-channel-value">github.com/anamta-karim</strong>
            </div>
          </a>
        </div>

        <div className="contact-cta-row">
          <a
            href={`mailto:${PROFILE_DATA.contact.email}`}
            className="cta-button cta-button--primary"
          >
            <Mail size={16} aria-hidden="true" />
            <span>Send an Email</span>
          </a>
          <ResumeButton variant="secondary" label="View Resume" />
        </div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-name">{PROFILE_DATA.name}</span>
          <span className="footer-sep" aria-hidden="true">
            •
          </span>
          <span className="footer-meta">
            B.Tech CSE (AI), Jamia Hamdard University (Expected 2027)
          </span>
        </div>

        <div className="footer-links">
          <a href="#top" className="footer-link">
            Constellation Map
          </a>
          <a
            href={PROFILE_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href={PROFILE_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a href={`mailto:${PROFILE_DATA.contact.email}`} className="footer-link">
            Email
          </a>
        </div>
      </div>

      <div className="footer-colophon">
        <span className="footer-colophon-mark" aria-hidden="true">
          ♐︎
        </span>
        <span>Crafted with a Sagittarius celestial atlas, a personal nod to my sun sign.</span>
      </div>
    </footer>
  );
};
