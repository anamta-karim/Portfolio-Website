import React, { useEffect, useState } from 'react';
import { Download, Mail, X, CheckCircle2, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface ResumeButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'nav';
  label?: string;
  className?: string;
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({
  variant = 'secondary',
  label = 'View Resume',
  className = '',
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(PROFILE_DATA.contact.resumePath, {
        method: 'HEAD',
        cache: 'no-store',
      });
      const contentType = response.headers.get('content-type') || '';
      if (response.ok && contentType.toLowerCase().includes('pdf')) {
        window.open(PROFILE_DATA.contact.resumePath, '_blank', 'noopener,noreferrer');
        return;
      }
    } catch {
      // Fall through to accessible credential modal when PDF is absent
    }
    setModalOpen(true);
  };

  const baseClass = `resume-btn resume-btn--${variant} ${className}`.trim();

  return (
    <>
      <a
        href={PROFILE_DATA.contact.resumePath}
        onClick={handleClick}
        className={baseClass}
        aria-haspopup="dialog"
        aria-expanded={modalOpen}
      >
        <Download size={15} aria-hidden="true" />
        <span>{label}</span>
      </a>

      {modalOpen && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-dialog-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div className="modal-panel resume-modal">
            <div className="modal-header">
              <div className="modal-badge">
                <Sparkles size={14} aria-hidden="true" />
                <span>Resume Overview &amp; Direct Request</span>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={() => setModalOpen(false)}
                aria-label="Close resume dialog"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <h3 id="resume-dialog-title" className="modal-title">
              {PROFILE_DATA.name} — Curriculum Vitae Snapshot
            </h3>

            <p className="modal-description">
              The downloadable PDF file (<code>public/resume.pdf</code>) will open automatically
              once the approved PDF asset is placed in the repository. Below is the verified
              credential summary, or you can request the full PDF directly via email.
            </p>

            <div className="resume-snapshot-grid">
              <div className="resume-snapshot-card">
                <h4>Education</h4>
                <p className="snapshot-strong">{PROFILE_DATA.education.institution}</p>
                <p>{PROFILE_DATA.education.degree}</p>
                <p className="snapshot-meta">
                  {PROFILE_DATA.education.period} • CGPA: {PROFILE_DATA.education.cgpa}
                </p>
              </div>

              <div className="resume-snapshot-card">
                <h4>Key Highlights</h4>
                <ul className="snapshot-list">
                  <li>
                    <CheckCircle2 size={14} aria-hidden="true" />
                    <span>
                      <strong>SkinWise:</strong> Live Skincare Ingredient &amp; Price Intelligence
                      (SerpApi Hackathon 2026)
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 size={14} aria-hidden="true" />
                    <span>
                      <strong>PassOn:</strong> Circular Economy Platform (Team Lead, AWS Hackathon)
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 size={14} aria-hidden="true" />
                    <span>
                      <strong>Research (~50%):</strong> LoRA-Adapted VLM Retinal Report Generation
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 size={14} aria-hidden="true" />
                    <span>Reliance Foundation Undergraduate Scholar (2023–Present)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="modal-actions">
              <a
                href={`mailto:${PROFILE_DATA.contact.email}?subject=Resume%20Request%20%E2%80%94%20Anamta%20Karim`}
                className="cta-button cta-button--primary"
              >
                <Mail size={16} aria-hidden="true" />
                <span>Request PDF via Email</span>
              </a>
              <a
                href={PROFILE_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button cta-button--secondary"
              >
                <span>View LinkedIn Profile</span>
              </a>
              <button
                type="button"
                className="cta-button cta-button--ghost"
                onClick={() => setModalOpen(false)}
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
