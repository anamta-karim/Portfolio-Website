import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail, Sparkles, Compass } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import {
  CONSTELLATION_EDGES,
  PRIMARY_STARS,
  PROFILE_DATA,
  SECONDARY_STARS,
} from '../data/portfolioData';
import { SectionId } from '../types/portfolio';
import { ResumeButton } from './ResumeButton';

interface ConstellationHeroProps {
  activeSection: SectionId;
  hasSelectedSection: boolean;
  onSelectSection: (sectionId: SectionId) => void;
}

const VIEWBOX_WIDTH = 600;
const VIEWBOX_HEIGHT = 540;

export const ConstellationHero: React.FC<ConstellationHeroProps> = ({
  activeSection,
  hasSelectedSection,
  onSelectSection,
}) => {
  const [hoveredStar, setHoveredStar] = useState<SectionId | null>(null);
  const [clickedStar, setClickedStar] = useState<SectionId | null>(null);
  const pulseTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (pulseTimerRef.current !== null) {
        window.clearTimeout(pulseTimerRef.current);
      }
    };
  }, []);

  const highlightedSection: SectionId | null =
    hoveredStar ?? (hasSelectedSection ? activeSection : null);

  const activeStarMeta =
    PRIMARY_STARS.find((s) => s.id === (hoveredStar ?? activeSection)) ?? PRIMARY_STARS[1];

  const getNodeCoords = (nodeId: string): { x: number; y: number } | null => {
    const primary = PRIMARY_STARS.find((s) => s.id === nodeId);
    if (primary) return { x: primary.x, y: primary.y };
    const secondary = SECONDARY_STARS.find((s) => s.id === nodeId);
    if (secondary) return { x: secondary.x, y: secondary.y };
    return null;
  };

  const handleStarActivate = (sectionId: SectionId) => {
    setClickedStar(sectionId);
    onSelectSection(sectionId);
    if (pulseTimerRef.current !== null) {
      window.clearTimeout(pulseTimerRef.current);
    }
    pulseTimerRef.current = window.setTimeout(() => {
      setClickedStar((prev) => (prev === sectionId ? null : prev));
    }, 650);
  };

  return (
    <section
      id="top"
      className="hero-section"
      aria-label="Introduction and interactive Sagittarius constellation navigation"
    >
      <div className="hero-container">
        {/* Left Column: Editorial Identity & CTAs */}
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <Sparkles size={14} className="eyebrow-icon" aria-hidden="true" />
            <span>{PROFILE_DATA.badge} • JAMIA HAMDARD UNIVERSITY</span>
          </div>

          <h1 className="hero-title">{PROFILE_DATA.name}</h1>

          <p className="hero-headline">{PROFILE_DATA.headline}</p>

          <p className="hero-tagline">{PROFILE_DATA.heroTagline}</p>

          <div className="hero-cta-group">
            <a
              href="#projects"
              className="cta-button cta-button--primary"
              onClick={() => onSelectSection('projects')}
            >
              <span>Explore My Work</span>
              <ArrowRight size={17} aria-hidden="true" />
            </a>

            <ResumeButton variant="secondary" label="View Resume" />
          </div>

          <div className="hero-social-row" aria-label="Direct profile and contact links">
            <a
              href={PROFILE_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <GithubIcon size={16} aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <span className="social-divider" aria-hidden="true">
              •
            </span>
            <a
              href={PROFILE_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <LinkedinIcon size={16} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <span className="social-divider" aria-hidden="true">
              •
            </span>
            <a href={`mailto:${PROFILE_DATA.contact.email}`} className="hero-social-link">
              <Mail size={16} aria-hidden="true" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Sagittarius Star-Atlas Satellite Navigator */}
        <div className="hero-constellation-wrapper">
          <div className="constellation-header-bar">
            <span className="constellation-coord">
              <Compass size={14} aria-hidden="true" />
              <span>SAGITTARIUS ASTERISM • 7 NAVIGATION STARS</span>
            </span>
            <span className="constellation-hint">Click or Tab + Enter any star</span>
          </div>

          <div
            className="constellation-stage"
            role="navigation"
            aria-label="Sagittarius constellation section map"
          >
            {/* Vector SVG Layer: Nebula, Observatory Rings, Edges & Star Flares */}
            <svg
              className="constellation-svg"
              viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <radialGradient id="sagittarius-nebula-ice" cx="56%" cy="44%" r="48%">
                  <stop offset="0%" stopColor="#9EDCFF" stopOpacity="0.28" />
                  <stop offset="45%" stopColor="#5CA4F8" stopOpacity="0.14" />
                  <stop offset="100%" stopColor="#070B1E" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="sagittarius-nebula-violet" cx="42%" cy="58%" r="46%">
                  <stop offset="0%" stopColor="#C5A9FF" stopOpacity="0.24" />
                  <stop offset="50%" stopColor="#7C52E8" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#070B1E" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="active-edge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EBF8FF" />
                  <stop offset="50%" stopColor="#9EDCFF" />
                  <stop offset="100%" stopColor="#C5A9FF" />
                </linearGradient>
                <filter id="star-glow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="4.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Ambient Digital-Art Nebula Clouds */}
              <ellipse cx="325" cy="245" rx="245" ry="200" fill="url(#sagittarius-nebula-ice)" />
              <ellipse
                cx="255"
                cy="300"
                rx="215"
                ry="175"
                fill="url(#sagittarius-nebula-violet)"
              />

              {/* Crisp Observatory Atlas Rings */}
              <circle
                cx="285"
                cy="275"
                r="222"
                fill="none"
                stroke="rgba(158, 220, 255, 0.11)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
              <circle
                cx="285"
                cy="275"
                r="142"
                fill="none"
                stroke="rgba(197, 169, 255, 0.1)"
                strokeWidth="1"
              />

              {/* Constellation Edges */}
              <g className="constellation-edges">
                {CONSTELLATION_EDGES.map((edge, index) => {
                  const from = getNodeCoords(edge.from);
                  const to = getNodeCoords(edge.to);
                  if (!from || !to) return null;

                  const isEdgeHighlighted =
                    highlightedSection !== null &&
                    (edge.from === highlightedSection ||
                      edge.to === highlightedSection ||
                      edge.primarySection === highlightedSection);

                  return (
                    <line
                      key={`${edge.from}-${edge.to}-${index}`}
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      className={`constellation-line ${
                        isEdgeHighlighted ? 'constellation-line--active' : ''
                      }`}
                    />
                  );
                })}
              </g>

              {/* Secondary Sagittarius Asterism Stars */}
              <g className="constellation-secondary-stars">
                {SECONDARY_STARS.map((star) => (
                  <g key={star.id} transform={`translate(${star.x}, ${star.y})`}>
                    <circle r={star.r * 2.6} fill="rgba(197, 169, 255, 0.2)" />
                    <circle r={star.r} fill="#E2F2FF" />
                  </g>
                ))}
              </g>

              {/* Primary Navigation Star Visual Nodes */}
              <g className="constellation-primary-stars">
                {PRIMARY_STARS.map((star) => {
                  const isHovered = hoveredStar === star.id;
                  const isActive = hasSelectedSection && activeSection === star.id;
                  const isClicked = clickedStar === star.id;
                  const isHighlighted = isHovered || isActive;
                  const coreRadius = star.magnitude === 'alpha' ? 5.2 : 4.4;
                  const spikeLen = isHighlighted ? 20 : star.magnitude === 'alpha' ? 14 : 11;

                  return (
                    <g
                      key={star.id}
                      transform={`translate(${star.x}, ${star.y})`}
                      className={`star-visual-group ${isHighlighted ? 'is-highlighted' : ''} ${
                        isClicked ? 'is-clicked' : ''
                      }`}
                    >
                      {/* Outer Metallic Ice & Violet Halo */}
                      <circle
                        r={isHighlighted ? 25 : 16}
                        fill={
                          isHighlighted
                            ? 'rgba(158, 220, 255, 0.26)'
                            : 'rgba(197, 169, 255, 0.14)'
                        }
                        className="star-halo"
                      />

                      {/* Active / Hover Orbit Ring */}
                      {isHighlighted && (
                        <circle
                          r={16}
                          fill="none"
                          stroke="#9EDCFF"
                          strokeWidth="1.3"
                          strokeOpacity="0.85"
                          className="star-orbit-ring"
                        />
                      )}

                      {/* Click Ripple Ring */}
                      {isClicked && (
                        <circle
                          r={28}
                          fill="none"
                          stroke="#C5A9FF"
                          strokeWidth="1.8"
                          className="star-click-ring"
                        />
                      )}

                      {/* 4-Point Tapered Celestial Diffraction Spikes */}
                      <path
                        d={`M 0 ${-spikeLen} Q 0 -2 ${spikeLen} 0 Q 0 2 0 ${spikeLen} Q 0 2 ${-spikeLen} 0 Q 0 -2 0 ${-spikeLen} Z`}
                        fill="#F4FAFF"
                        filter="url(#star-glow)"
                      />

                      {/* Diagonal Violet Rays on Highlighted Star */}
                      {isHighlighted && (
                        <>
                          <line
                            x1={-spikeLen * 0.55}
                            y1={-spikeLen * 0.55}
                            x2={spikeLen * 0.55}
                            y2={spikeLen * 0.55}
                            stroke="#C5A9FF"
                            strokeWidth="1.2"
                            strokeOpacity="0.85"
                          />
                          <line
                            x1={-spikeLen * 0.55}
                            y1={spikeLen * 0.55}
                            x2={spikeLen * 0.55}
                            y2={-spikeLen * 0.55}
                            stroke="#C5A9FF"
                            strokeWidth="1.2"
                            strokeOpacity="0.85"
                          />
                        </>
                      )}

                      {/* Star Core */}
                      <circle r={isHighlighted ? coreRadius : coreRadius - 0.8} fill="#FFFFFF" />
                    </g>
                  );
                })}
              </g>
            </svg>

            {/* Accessible Interactive Star Anchors Overlaid at Exact Coordinates */}
            <ul className="constellation-star-links" aria-label="Seven primary portfolio sections">
              {PRIMARY_STARS.map((star) => {
                const leftPercent = (star.x / VIEWBOX_WIDTH) * 100;
                const topPercent = (star.y / VIEWBOX_HEIGHT) * 100;
                const isActive = hasSelectedSection && activeSection === star.id;
                const isHovered = hoveredStar === star.id;

                const alignClass =
                  star.labelOffset.anchor === 'middle'
                    ? 'star-anchor--bottom'
                    : 'star-anchor--right';

                return (
                  <li
                    key={star.id}
                    className="constellation-star-item"
                    style={{
                      left: `${leftPercent}%`,
                      top: `${topPercent}%`,
                    }}
                  >
                    <a
                      href={`#${star.id}`}
                      className={`star-anchor ${alignClass} ${isActive ? 'is-active' : ''} ${
                        isHovered ? 'is-hovered' : ''
                      }`}
                      aria-label={`${star.number}. ${star.label} — ${star.subtitle}`}
                      aria-current={isActive ? 'location' : undefined}
                      onMouseEnter={() => setHoveredStar(star.id)}
                      onMouseLeave={() => setHoveredStar(null)}
                      onFocus={() => setHoveredStar(star.id)}
                      onBlur={() => setHoveredStar(null)}
                      onClick={() => handleStarActivate(star.id)}
                    >
                      <span className="star-hit-target" aria-hidden="true" />
                      <span className="star-label-pill">
                        <span className="star-label-num">{star.number}</span>
                        <span className="star-label-text">{star.shortLabel}</span>
                        {isActive && <span className="star-active-dot" aria-hidden="true" />}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Live Star Readout Bar */}
          <div className="constellation-readout" aria-live="polite">
            <div className="readout-primary">
              <span className="readout-star-code">{activeStarMeta.starName}</span>
              <span className="readout-sep" aria-hidden="true">
                →
              </span>
              <strong className="readout-section-name">
                {activeStarMeta.number}. {activeStarMeta.label}
              </strong>
            </div>
            <p className="readout-subtitle">{activeStarMeta.subtitle}</p>
          </div>

          {/* Mobile & Touch Quick-Jump Section Strip */}
          <nav
            className="mobile-constellation-quicknav"
            aria-label="Quick section jump list for mobile and touch devices"
          >
            {PRIMARY_STARS.map((star) => (
              <a
                key={star.id}
                href={`#${star.id}`}
                className={`quicknav-chip ${
                  hasSelectedSection && activeSection === star.id ? 'is-active' : ''
                }`}
                onClick={() => handleStarActivate(star.id)}
              >
                <span className="quicknav-num">{star.number}.</span>
                <span>{star.shortLabel}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};
