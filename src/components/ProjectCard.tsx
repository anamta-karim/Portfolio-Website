import React, { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  ExternalLink,
  Info,
  Layers,
  PlayCircle,
  ShieldAlert,
  Wrench,
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { Project, ProjectLink } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
}

const ProjectPreviewArt: React.FC<{ projectId: string }> = ({ projectId }) => {
  if (projectId === 'skinwise') {
    return (
      <svg
        viewBox="0 0 420 260"
        className="project-preview-svg"
        role="img"
        aria-label="SkinWise architecture preview showing 4 modules: Ingredient Analyzer, Personal Regimen, EthiScan, and Ingredient Pulse"
      >
        <defs>
          <linearGradient id="sw-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0E2238" />
            <stop offset="100%" stopColor="#091326" />
          </linearGradient>
        </defs>
        <rect width="420" height="260" rx="12" fill="url(#sw-bg)" />
        {/* Browser Top Bar */}
        <rect x="14" y="14" width="392" height="26" rx="6" fill="#07111F" opacity="0.85" />
        <circle cx="28" cy="27" r="4" fill="#9EDCFF" opacity="0.7" />
        <circle cx="40" cy="27" r="4" fill="#C5A9FF" opacity="0.7" />
        <circle cx="52" cy="27" r="4" fill="#244F70" />
        <text x="72" y="31" fill="#A8B8CC" fontFamily="monospace" fontSize="10">
          SkinWise • Multi-Stage SerpApi + MiniLM-L6-v2
        </text>

        {/* Left Main Card: Ingredient Safety Mapping */}
        <rect
          x="14"
          y="50"
          width="230"
          height="194"
          rx="8"
          fill="#0B182B"
          stroke="#9EDCFF"
          strokeOpacity="0.25"
        />
        <text x="28" y="74" fill="#9EDCFF" fontFamily="sans-serif" fontSize="11" fontWeight="600">
          LIVE INGREDIENT ANALYZER
        </text>
        <text x="28" y="92" fill="#F2F7FF" fontFamily="serif" fontSize="16" fontWeight="600">
          Safer skincare, verified live
        </text>
        <rect x="28" y="106" width="202" height="28" rx="5" fill="#112640" />
        <text x="38" y="124" fill="#D8EEFF" fontFamily="monospace" fontSize="10">
          966 terms → 385 safety DB (Cosine + Fuzz)
        </text>
        <rect x="28" y="142" width="96" height="44" rx="6" fill="#0F2038" stroke="#9EDCFF" strokeOpacity="0.2" />
        <text x="38" y="160" fill="#9EDCFF" fontFamily="monospace" fontSize="13" fontWeight="700">
          8 / 12
        </text>
        <text x="38" y="176" fill="#A8B8CC" fontFamily="sans-serif" fontSize="9">
          Usable lists retrieved
        </text>
        <rect x="134" y="142" width="96" height="44" rx="6" fill="#0F2038" stroke="#C5A9FF" strokeOpacity="0.2" />
        <text x="144" y="160" fill="#C5A9FF" fontFamily="monospace" fontSize="13" fontWeight="700">
          27 Tests
        </text>
        <text x="144" y="176" fill="#A8B8CC" fontFamily="sans-serif" fontSize="9">
          pytest mocked APIs
        </text>
        <rect x="28" y="196" width="202" height="34" rx="5" fill="rgba(197, 169, 255, 0.1)" />
        <text x="38" y="217" fill="#C5A9FF" fontFamily="sans-serif" fontSize="9.5">
          Confidence-aware flags + EasyOCR + Groq LLM
        </text>

        {/* Right Stack: 4 Modules */}
        <rect x="256" y="50" width="150" height="44" rx="7" fill="#0F223B" stroke="#9EDCFF" strokeOpacity="0.22" />
        <text x="268" y="69" fill="#F2F7FF" fontFamily="sans-serif" fontSize="11" fontWeight="600">
          01. Ingredient Analyzer
        </text>
        <text x="268" y="83" fill="#A8B8CC" fontFamily="sans-serif" fontSize="9">
          OCR &amp; live INCI validation
        </text>

        <rect x="256" y="100" width="150" height="44" rx="7" fill="#0F223B" stroke="#9EDCFF" strokeOpacity="0.22" />
        <text x="268" y="119" fill="#F2F7FF" fontFamily="sans-serif" fontSize="11" fontWeight="600">
          02. Personal Regimen
        </text>
        <text x="268" y="133" fill="#A8B8CC" fontFamily="sans-serif" fontSize="9">
          Routine &amp; price alternatives
        </text>

        <rect x="256" y="150" width="150" height="44" rx="7" fill="#0F223B" stroke="#9EDCFF" strokeOpacity="0.22" />
        <text x="268" y="169" fill="#F2F7FF" fontFamily="sans-serif" fontSize="11" fontWeight="600">
          03. EthiScan
        </text>
        <text x="268" y="183" fill="#A8B8CC" fontFamily="sans-serif" fontSize="9">
          Brand claims &amp; news search
        </text>

        <rect x="256" y="200" width="150" height="44" rx="7" fill="#0F223B" stroke="#C5A9FF" strokeOpacity="0.28" />
        <text x="268" y="219" fill="#F2F7FF" fontFamily="sans-serif" fontSize="11" fontWeight="600">
          04. Ingredient Pulse
        </text>
        <text x="268" y="233" fill="#A8B8CC" fontFamily="sans-serif" fontSize="9">
          Live Google Trends signals
        </text>
      </svg>
    );
  }

  if (projectId === 'passon') {
    return (
      <svg
        viewBox="0 0 420 260"
        className="project-preview-svg"
        role="img"
        aria-label="PassOn architecture preview showing invite-gated living circles, shelf-photo AI vision routing, and AWS Amplify frontend"
      >
        <defs>
          <linearGradient id="po-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#101A36" />
            <stop offset="100%" stopColor="#07111F" />
          </linearGradient>
        </defs>
        <rect width="420" height="260" rx="12" fill="url(#po-bg)" />
        <rect x="14" y="14" width="392" height="26" rx="6" fill="#07111F" opacity="0.85" />
        <circle cx="28" cy="27" r="4" fill="#9EDCFF" />
        <circle cx="40" cy="27" r="4" fill="#C5A9FF" />
        <text x="60" y="31" fill="#A8B8CC" fontFamily="monospace" fontSize="10">
          PassOn • React 19 + Bedrock Claude 3 / Groq Vision
        </text>

        {/* Left Box: Shelf Photo Vision Flow */}
        <rect
          x="14"
          y="50"
          width="192"
          height="194"
          rx="8"
          fill="#0B162A"
          stroke="#9EDCFF"
          strokeOpacity="0.25"
        />
        <text x="26" y="72" fill="#9EDCFF" fontFamily="sans-serif" fontSize="10.5" fontWeight="600">
          SHELF-PHOTO AI INTAKE
        </text>
        <rect x="26" y="84" width="168" height="62" rx="6" fill="#12243F" />
        <text x="36" y="104" fill="#F2F7FF" fontFamily="sans-serif" fontSize="12" fontWeight="600">
          Vision Provider Router
        </text>
        <text x="36" y="122" fill="#9EDCFF" fontFamily="monospace" fontSize="9.5">
          Bedrock Sonnet ⇄ Groq Qwen
        </text>
        <text x="36" y="137" fill="#A8B8CC" fontFamily="sans-serif" fontSize="9">
          + Offline deterministic fallback
        </text>
        <rect x="26" y="156" width="168" height="76" rx="6" fill="#0E1D34" stroke="#C5A9FF" strokeOpacity="0.22" />
        <text x="36" y="175" fill="#C5A9FF" fontFamily="sans-serif" fontSize="10" fontWeight="600">
          Schema Sanitization
        </text>
        <text x="36" y="192" fill="#D8EEFF" fontFamily="monospace" fontSize="9.5">
          • Category &amp; Condition check
        </text>
        <text x="36" y="207" fill="#D8EEFF" fontFamily="monospace" fontSize="9.5">
          • Reuse vs. Scrap/E-Waste
        </text>
        <text x="36" y="222" fill="#D8EEFF" fontFamily="monospace" fontSize="9.5">
          • Clamped INR Price Band
        </text>

        {/* Right Box: Living Circles & Verification */}
        <rect
          x="216"
          y="50"
          width="190"
          height="194"
          rx="8"
          fill="#0B162A"
          stroke="#C5A9FF"
          strokeOpacity="0.25"
        />
        <text x="228" y="72" fill="#C5A9FF" fontFamily="sans-serif" fontSize="10.5" fontWeight="600">
          HYPER-LOCAL LIVING CIRCLES
        </text>
        <rect x="228" y="84" width="166" height="44" rx="6" fill="#12243F" />
        <text x="238" y="103" fill="#F2F7FF" fontFamily="sans-serif" fontSize="11" fontWeight="600">
          Invite-Gated Hostel / PG
        </text>
        <text x="238" y="118" fill="#A8B8CC" fontFamily="sans-serif" fontSize="9">
          Wishlists &amp; Scrap-Drive Scheduling
        </text>

        <rect x="228" y="138" width="80" height="46" rx="6" fill="#0F2038" />
        <text x="238" y="158" fill="#9EDCFF" fontFamily="monospace" fontSize="13" fontWeight="700">
          40 / 40
        </text>
        <text x="238" y="174" fill="#A8B8CC" fontFamily="sans-serif" fontSize="9">
          Backend tests
        </text>

        <rect x="314" y="138" width="80" height="46" rx="6" fill="#0F2038" />
        <text x="324" y="158" fill="#9EDCFF" fontFamily="monospace" fontSize="13" fontWeight="700">
          Live UI
        </text>
        <text x="324" y="174" fill="#A8B8CC" fontFamily="sans-serif" fontSize="9">
          AWS Amplify
        </text>

        <rect x="228" y="194" width="166" height="38" rx="5" fill="rgba(158, 220, 255, 0.1)" />
        <text x="238" y="211" fill="#9EDCFF" fontFamily="sans-serif" fontSize="9">
          Public demo mocks CRUD/Auth safely
        </text>
        <text x="238" y="224" fill="#A8B8CC" fontFamily="sans-serif" fontSize="8.5">
          AWS SAM template defines serverless stack
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 420 220"
      className="project-preview-svg"
      role="img"
      aria-label="Retinal VLM pipeline diagram showing 4-bit quantization and LoRA adaptation under 4GB VRAM constraint"
    >
      <rect width="420" height="220" rx="12" fill="#0A1526" />
      <rect x="16" y="16" width="388" height="188" rx="8" fill="#0D1B30" stroke="#C5A9FF" strokeOpacity="0.28" />
      <text x="32" y="44" fill="#C5A9FF" fontFamily="monospace" fontSize="11" fontWeight="600">
        IN PROGRESS (~50%) • 4GB VRAM CONSTRAINT PIPELINE
      </text>
      <text x="32" y="70" fill="#F2F7FF" fontFamily="serif" fontSize="18" fontWeight="600">
        Retinal Fundus → LoRA VLM → Clinical Narrative
      </text>
      <rect x="32" y="88" width="110" height="58" rx="6" fill="#132744" />
      <text x="42" y="110" fill="#9EDCFF" fontFamily="sans-serif" fontSize="10.5" fontWeight="600">
        DeepEyeNet Data
      </text>
      <text x="42" y="128" fill="#A8B8CC" fontFamily="sans-serif" fontSize="9">
        ~15.7k licensed pairs
      </text>

      <rect x="155" y="88" width="110" height="58" rx="6" fill="#132744" />
      <text x="165" y="110" fill="#C5A9FF" fontFamily="sans-serif" fontSize="10.5" fontWeight="600">
        4-Bit + PEFT/LoRA
      </text>
      <text x="165" y="128" fill="#A8B8CC" fontFamily="sans-serif" fontSize="9">
        bitsandbytes + PyTorch
      </text>

      <rect x="278" y="88" width="110" height="58" rx="6" fill="#132744" stroke="#9EDCFF" strokeDasharray="3 3" />
      <text x="288" y="110" fill="#F2F7FF" fontFamily="sans-serif" fontSize="10.5" fontWeight="600">
        Planned Eval
      </text>
      <text x="288" y="128" fill="#A8B8CC" fontFamily="sans-serif" fontSize="9">
        vs. DeepOpht baseline
      </text>

      <text x="32" y="176" fill="#A8B8CC" fontFamily="monospace" fontSize="10">
        Current stage: CUDA environment &amp; modular training/eval pipeline setup
      </text>
    </svg>
  );
};

const renderLinkIcon = (kind: ProjectLink['kind']) => {
  switch (kind) {
    case 'repository':
      return <GithubIcon size={15} aria-hidden="true" />;
    case 'live-demo':
      return <ExternalLink size={15} aria-hidden="true" />;
    case 'video':
      return <PlayCircle size={15} aria-hidden="true" />;
    default:
      return <ExternalLink size={15} aria-hidden="true" />;
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [resolvedImgUrl, setResolvedImgUrl] = useState<string | null>(project.imageUrl ?? null);
  const [imgFailed, setImgFailed] = useState(false);

  React.useEffect(() => {
    if (project.imageUrl) {
      setResolvedImgUrl(project.imageUrl);
      setImgFailed(false);
      return;
    }

    let cancelled = false;
    const candidates = [
      `/projects/${project.id}.png`,
      `/projects/${project.id}.jpg`,
      `/projects/${project.id}.jpeg`,
      `/projects/${project.id}.webp`,
    ];

    (async () => {
      for (const url of candidates) {
        try {
          const res = await fetch(url, { method: 'HEAD', cache: 'no-store' });
          const ct = (res.headers.get('content-type') || '').toLowerCase();
          if (res.ok && ct.startsWith('image/')) {
            if (!cancelled) {
              setResolvedImgUrl(url);
              setImgFailed(false);
            }
            return;
          }
        } catch {
          // Ignore and check next candidate
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [project.id, project.imageUrl]);

  const statusBadgeClass =
    project.status === 'built-tested'
      ? 'status-badge--built'
      : project.status === 'in-progress'
        ? 'status-badge--progress'
        : 'status-badge--early';

  return (
    <article
      id={`project-${project.id}`}
      className={`project-card ${project.featured ? 'project-card--featured' : 'project-card--secondary'}`}
      aria-labelledby={`title-${project.id}`}
    >
      {/* Top Layout: Visual Preview + Core Narrative */}
      <div className="project-card-main">
        <div className="project-visual-col">
          <div className="project-preview-frame">
            {resolvedImgUrl && !imgFailed ? (
              <img
                key={resolvedImgUrl}
                src={resolvedImgUrl}
                alt={project.imageAlt ?? `${project.title} screenshot`}
                className="project-preview-img"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <ProjectPreviewArt projectId={project.id} />
            )}
          </div>

          <div className="project-context-meta">
            <span className="project-context-label">{project.context}</span>
            <span className="project-role-label">
              <strong>Role:</strong> {project.role}
            </span>
          </div>
        </div>

        <div className="project-content-col">
          <div className="project-header-row">
            <span className={`project-status-badge ${statusBadgeClass}`}>
              {project.status === 'built-tested' ? (
                <CheckCircle2 size={13} aria-hidden="true" />
              ) : (
                <Clock size={13} aria-hidden="true" />
              )}
              <span>{project.statusLabel}</span>
            </span>
          </div>

          <h3 id={`title-${project.id}`} className="project-title">
            {project.title}
          </h3>
          <p className="project-subtitle">{project.subtitle}</p>

          <p className="project-summary">{project.summary}</p>

          {/* Mandatory Caveat / Disclaimer Callouts Always Visible */}
          {project.disclaimer && (
            <div className="project-callout project-callout--disclaimer" role="note">
              <ShieldAlert size={17} className="callout-icon" aria-hidden="true" />
              <p>{project.disclaimer}</p>
            </div>
          )}

          {project.publicDemoCaveat && (
            <div className="project-callout project-callout--caveat" role="note">
              <Info size={17} className="callout-icon" aria-hidden="true" />
              <p>{project.publicDemoCaveat}</p>
            </div>
          )}

          {project.completionNote && (
            <div className="project-callout project-callout--progress" role="note">
              <Clock size={17} className="callout-icon" aria-hidden="true" />
              <p>{project.completionNote}</p>
            </div>
          )}

          {/* Technology Stack Chips */}
          <div className="project-tech-list" aria-label={`${project.title} technologies`}>
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-chip">
                {tech}
              </span>
            ))}
          </div>

          {/* Primary Actions & Case Study Toggle */}
          <div className="project-actions-row">
            <button
              type="button"
              className="project-expand-btn"
              aria-expanded={expanded}
              aria-controls={`details-${project.id}`}
              onClick={() => setExpanded((prev) => !prev)}
            >
              <span>{expanded ? 'Hide Technical Details' : 'View Technical Case Study'}</span>
              {expanded ? (
                <ChevronUp size={16} aria-hidden="true" />
              ) : (
                <ChevronDown size={16} aria-hidden="true" />
              )}
            </button>

            <div className="project-external-links">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-link-btn ${
                    link.kind === 'live-demo' ? 'project-link-btn--primary' : ''
                  }`}
                >
                  {renderLinkIcon(link.kind)}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Deep-Dive Case Study Panel */}
      {expanded && (
        <div
          id={`details-${project.id}`}
          className="project-details-drawer"
          aria-label={`${project.title} technical case study details`}
        >
          <div className="details-grid">
            <div className="details-block">
              <h4 className="details-heading">
                <Layers size={15} aria-hidden="true" />
                <span>Problem &amp; Engineering Approach</span>
              </h4>
              <p className="details-problem">{project.problem}</p>
              <ul className="details-bullet-list">
                {project.approach.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>

            {project.modules && project.modules.length > 0 && (
              <div className="details-block">
                <h4 className="details-heading">
                  <Wrench size={15} aria-hidden="true" />
                  <span>Key System Modules</span>
                </h4>
                <div className="modules-mini-grid">
                  {project.modules.map((mod) => (
                    <div key={mod.name} className="module-mini-card">
                      <strong>{mod.name}</strong>
                      <p>{mod.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.evidence && project.evidence.length > 0 && (
              <div className="details-block">
                <h4 className="details-heading">
                  <CheckCircle2 size={15} aria-hidden="true" />
                  <span>Verification &amp; Documented Evidence</span>
                </h4>
                <ul className="details-bullet-list">
                  {project.evidence.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.plannedWork && project.plannedWork.length > 0 && (
              <div className="details-block">
                <h4 className="details-heading">
                  <Clock size={15} aria-hidden="true" />
                  <span>Planned Next Steps (Not Yet Implemented)</span>
                </h4>
                <ul className="details-bullet-list">
                  {project.plannedWork.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.limitations && project.limitations.length > 0 && (
              <div className="details-block">
                <h4 className="details-heading">
                  <AlertTriangle size={15} aria-hidden="true" />
                  <span>Known Limitations &amp; Scope Boundaries</span>
                </h4>
                <ul className="details-bullet-list">
                  {project.limitations.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
};
