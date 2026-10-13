import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Star, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import {
  CONSTELLATION_EDGES,
  PRIMARY_STARS,
  PROFILE_DATA,
  SECONDARY_STARS,
} from '../data/portfolioData';
import { SectionId } from '../types/portfolio';
import { ResumeButton } from './ResumeButton';

interface NavigationProps {
  activeSection: SectionId;
  hasSelectedSection: boolean;
  onSelectSection: (sectionId: SectionId) => void;
}

export const TopNavigation: React.FC<NavigationProps> = ({
  activeSection,
  hasSelectedSection,
  onSelectSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionId: SectionId) => {
    onSelectSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <div className="header-inner">
        <a
          href="#top"
          className="brand-link"
          aria-label="Anamta Karim, back to constellation hero"
        >
          <span className="brand-constellation-mark" aria-hidden="true">
            <Sparkles size={16} />
          </span>
          <span className="brand-name">{PROFILE_DATA.name}</span>
        </a>

        {/* Conventional Desktop Navigation */}
        <nav className="desktop-top-nav" aria-label="Primary sections">
          <ul className="top-nav-list">
            {PRIMARY_STARS.map((star) => {
              const isActive = hasSelectedSection && activeSection === star.id;
              return (
                <li key={star.id}>
                  <a
                    href={`#${star.id}`}
                    className={`top-nav-link ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={() => handleNavClick(star.id)}
                  >
                    <span className="top-nav-num">{star.number}.</span>
                    <span>{star.shortLabel}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="header-resume-desktop">
            <ResumeButton variant="nav" label="Resume" />
          </div>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            <span className="mobile-menu-label">Menu</span>
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer (List-Based, Large Touch Targets) */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="mobile-nav-drawer"
          role="navigation"
          aria-label="Mobile section navigation"
        >
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-subtitle">
              SAGITTARIUS NAVIGATOR • 7 SECTIONS
            </span>
          </div>

          <ul className="mobile-nav-list">
            {PRIMARY_STARS.map((star) => {
              const isActive = activeSection === star.id;
              return (
                <li key={star.id}>
                  <a
                    href={`#${star.id}`}
                    className={`mobile-nav-item ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={() => handleNavClick(star.id)}
                  >
                    <span className="mobile-nav-star-icon" aria-hidden="true">
                      <Star size={15} fill={isActive ? 'currentColor' : 'none'} />
                    </span>
                    <div className="mobile-nav-text">
                      <span className="mobile-nav-title">
                        {star.number}. {star.label}
                      </span>
                      <span className="mobile-nav-desc">{star.subtitle}</span>
                    </div>
                    {isActive && <span className="mobile-active-badge">Active</span>}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <ResumeButton variant="primary" label="View Resume" className="w-full" />
            <div className="mobile-social-links">
              <a
                href={PROFILE_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-btn"
              >
                <GithubIcon size={16} aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href={PROFILE_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-btn"
              >
                <LinkedinIcon size={16} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a href={`mailto:${PROFILE_DATA.contact.email}`} className="mobile-social-btn">
                <Mail size={16} aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export const CompactConstellationSidebar: React.FC<NavigationProps> = ({
  activeSection,
  onSelectSection,
}) => {
  const getNodeCoords = (nodeId: string): { x: number; y: number } | null => {
    const primary = PRIMARY_STARS.find((s) => s.id === nodeId);
    if (primary) return { x: primary.x, y: primary.y };
    const secondary = SECONDARY_STARS.find((s) => s.id === nodeId);
    if (secondary) return { x: secondary.x, y: secondary.y };
    return null;
  };

  return (
    <aside
      className="compact-constellation-sidebar"
      aria-label="Compact Sagittarius constellation navigator"
    >
      <div className="sidebar-sticky-card">
        {/* Mini Interactive Constellation Map */}
        <div className="mini-constellation-box">
          <div className="mini-constellation-header">
            <span className="mini-constellation-title">STAR ATLAS</span>
            <a href="#top" className="mini-top-link" aria-label="Return to full constellation hero">
              <ArrowUp size={12} aria-hidden="true" />
              <span>Hero</span>
            </a>
          </div>

          <svg
            className="mini-constellation-svg"
            viewBox="60 50 420 460"
            aria-hidden="true"
            focusable="false"
          >
            {CONSTELLATION_EDGES.map((edge, idx) => {
              const from = getNodeCoords(edge.from);
              const to = getNodeCoords(edge.to);
              if (!from || !to) return null;
              const isEdgeActive =
                edge.from === activeSection ||
                edge.to === activeSection ||
                edge.primarySection === activeSection;
              return (
                <line
                  key={`${edge.from}-${edge.to}-${idx}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={isEdgeActive ? '#9EDCFF' : 'rgba(176, 198, 255, 0.25)'}
                  strokeWidth={isEdgeActive ? '2.4' : '1.3'}
                />
              );
            })}

            {SECONDARY_STARS.map((s) => (
              <circle
                key={s.id}
                cx={s.x}
                cy={s.y}
                r={2.5}
                fill="rgba(216, 232, 255, 0.5)"
              />
            ))}

            {PRIMARY_STARS.map((star) => {
              const isActive = activeSection === star.id;
              return (
                <g key={star.id} transform={`translate(${star.x}, ${star.y})`}>
                  {isActive && (
                    <>
                      <circle r={18} fill="rgba(197, 169, 255, 0.28)" />
                      <circle
                        r={12}
                        fill="none"
                        stroke="#9EDCFF"
                        strokeWidth="1.5"
                      />
                    </>
                  )}
                  <circle
                    r={isActive ? 6.5 : 4.2}
                    fill={isActive ? '#FFFFFF' : '#9EDCFF'}
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Vertical Section List with Star Indicators */}
        <nav aria-label="Section index">
          <ul className="sidebar-nav-list">
            {PRIMARY_STARS.map((star) => {
              const isActive = activeSection === star.id;
              return (
                <li key={star.id}>
                  <a
                    href={`#${star.id}`}
                    className={`sidebar-nav-link ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={() => onSelectSection(star.id)}
                  >
                    <span className="sidebar-star-marker" aria-hidden="true">
                      <Star
                        size={14}
                        fill={isActive ? 'currentColor' : 'none'}
                        strokeWidth={isActive ? 2.2 : 1.75}
                      />
                    </span>
                    <span className="sidebar-nav-num">{star.number}</span>
                    <span className="sidebar-nav-label">{star.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
