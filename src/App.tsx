import React, { useEffect, useState } from 'react';
import { CelestialBackdrop } from './components/CelestialBackdrop';
import { ConstellationHero } from './components/ConstellationHero';
import {
  CompactConstellationSidebar,
  TopNavigation,
} from './components/ConstellationNavigator';
import {
  AboutSection,
  AchievementsSection,
  ContactSection,
  ExperienceSection,
  Footer,
  ProjectsSection,
  ResearchSection,
  SkillsSection,
} from './components/PortfolioSections';
import { PRIMARY_STARS } from './data/portfolioData';
import { SectionId } from './types/portfolio';

const VALID_SECTIONS = new Set<SectionId>(PRIMARY_STARS.map((s) => s.id));

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('about');
  const [hasSelectedSection, setHasSelectedSection] = useState<boolean>(false);

  const handleSelectSection = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    setHasSelectedSection(true);
  };

  // Sync initial URL hash or hashchange events
  useEffect(() => {
    const syncFromHash = () => {
      const rawHash = window.location.hash.replace('#', '') as SectionId;
      if (VALID_SECTIONS.has(rawHash)) {
        setActiveSection(rawHash);
        setHasSelectedSection(true);
      }
    };
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  // Track active section while scrolling
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const sectionElements = PRIMARY_STARS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id as SectionId;
          if (VALID_SECTIONS.has(id)) {
            setActiveSection(id);
            setHasSelectedSection(true);
          }
        }
      },
      {
        rootMargin: '-18% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      {/* Crisp Vector SVG Digital-Art Celestial Backdrop */}
      <CelestialBackdrop />

      {/* Persistent Conventional Navigation Header */}
      <TopNavigation
        activeSection={activeSection}
        hasSelectedSection={hasSelectedSection}
        onSelectSection={handleSelectSection}
      />

      {/* Signature Sagittarius Constellation Hero */}
      <ConstellationHero
        activeSection={activeSection}
        hasSelectedSection={hasSelectedSection}
        onSelectSection={handleSelectSection}
      />

      {/* Main Content Workspace with Compact Sticky Constellation Navigator + 7 Sections */}
      <div className="workspace-container">
        <CompactConstellationSidebar
          activeSection={activeSection}
          hasSelectedSection={hasSelectedSection}
          onSelectSection={handleSelectSection}
        />

        <main id="main-content" className="main-content" tabIndex={-1}>
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <AchievementsSection />
          <ResearchSection />
          <ContactSection />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default App;
