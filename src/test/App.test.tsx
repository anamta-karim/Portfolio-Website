import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../App';

describe('Anamta Karim Sagittarius Portfolio', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        headers: {
          get: () => 'text/html',
        },
      }),
    );
  });

  it('renders a single H1, education credentials, and all seven primary sections in order', () => {
    render(<App />);

    const h1s = screen.getAllByRole('heading', { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveTextContent(/Anamta Karim/i);
    expect(screen.getByText(/CGPA 9\.25 \/ 10/i)).toBeInTheDocument();

    const sectionIds = [
      'about',
      'projects',
      'skills',
      'experience',
      'achievements',
      'research',
      'contact',
    ];
    for (const id of sectionIds) {
      expect(document.getElementById(id)).not.toBeNull();
    }
  });

  it('provides 7 accessible Sagittarius constellation star links and updates active state on selection', () => {
    render(<App />);

    const starList = screen.getByRole('list', {
      name: /Seven primary portfolio sections/i,
    });
    const starLinks = within(starList).getAllByRole('link');
    expect(starLinks).toHaveLength(7);

    expect(starLinks[0]).toHaveAttribute('href', '#about');
    expect(starLinks[1]).toHaveAttribute('href', '#projects');
    expect(starLinks[2]).toHaveAttribute('href', '#skills');
    expect(starLinks[3]).toHaveAttribute('href', '#experience');
    expect(starLinks[4]).toHaveAttribute('href', '#achievements');
    expect(starLinks[5]).toHaveAttribute('href', '#research');
    expect(starLinks[6]).toHaveAttribute('href', '#contact');

    // Activate the Projects star
    fireEvent.click(starLinks[1]);
    expect(starLinks[1]).toHaveAttribute('aria-current', 'location');

    // Verify Compact Constellation Sidebar also reflects Projects as active
    const sidebarNav = screen.getByRole('navigation', { name: /Section index/i });
    const sidebarProjectsLink = within(sidebarNav).getByRole('link', { name: /02 Projects/i });
    expect(sidebarProjectsLink).toHaveAttribute('aria-current', 'location');
  });

  it('supports mobile menu drawer toggle, keyboard Escape close, and section selection', () => {
    render(<App />);

    const menuToggle = screen.getByRole('button', { name: /Open navigation menu/i });
    expect(menuToggle).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(menuToggle);
    expect(menuToggle).toHaveAttribute('aria-expanded', 'true');

    const mobileDrawer = screen.getByRole('navigation', { name: /Mobile section navigation/i });
    expect(mobileDrawer).toBeInTheDocument();

    // Press Escape to close
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(
      screen.queryByRole('navigation', { name: /Mobile section navigation/i }),
    ).not.toBeInTheDocument();

    // Reopen and click Skills
    fireEvent.click(menuToggle);
    const mobileDrawerReopened = screen.getByRole('navigation', {
      name: /Mobile section navigation/i,
    });
    const skillsItem = within(mobileDrawerReopened).getByRole('link', {
      name: /03\. Technical Skills/i,
    });
    fireEvent.click(skillsItem);
    expect(
      screen.queryByRole('navigation', { name: /Mobile section navigation/i }),
    ).not.toBeInTheDocument();
  });

  it('enforces project truthfulness, SkinWise disclaimer, and PassOn demo caveat', () => {
    render(<App />);

    // SkinWise screening aid disclaimer
    expect(
      screen.getByText(/SkinWise is an informational screening aid, not a medical diagnostic tool/i),
    ).toBeInTheDocument();

    // PassOn public demo vs mocked backend caveat
    expect(
      screen.getByText(
        /persistent DynamoDB CRUD and Cognito authentication are intentionally mocked in the public demo/i,
      ),
    ).toBeInTheDocument();

    // Retinal VLM in-progress (~50%) status
    expect(
      screen.getByText(/In Progress \(~50% • Training & Pipeline Setup\)/i),
    ).toBeInTheDocument();

    // Financial Risk Engine low-prominence early exploration (~10% On Hold)
    expect(screen.getByText(/Early Exploration \(~10% • On Hold\)/i)).toBeInTheDocument();
  });

  it('filters projects by domain category and expands technical case study details', () => {
    render(<App />);

    const filterGroup = screen.getByRole('group', { name: /Filter projects by domain/i });
    const fullStackBtn = within(filterGroup).getByRole('button', { name: /Full-Stack & Cloud/i });

    fireEvent.click(fullStackBtn);
    expect(fullStackBtn).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('heading', { name: 'SkinWise' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'PassOn' })).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Retinal Image Clinical Report Generation' }),
    ).not.toBeInTheDocument();

    // Restore All Work filter
    const allWorkBtn = within(filterGroup).getByRole('button', { name: /All Work/i });
    fireEvent.click(allWorkBtn);
    expect(
      screen.getByRole('heading', { name: 'Retinal Image Clinical Report Generation' }),
    ).toBeInTheDocument();

    // Expand SkinWise technical case study
    const expandButtons = screen.getAllByRole('button', {
      name: /View Technical Case Study/i,
    });
    fireEvent.click(expandButtons[0]);
    expect(
      screen.getByText(/Mapped 966 indexed ingredient terms to a 385-ingredient safety database/i),
    ).toBeInTheDocument();
  });

  it('clearly labels the Deloitte Forage experience as a virtual job simulation', () => {
    render(<App />);

    expect(
      screen.getByText(/Completed as a self-paced virtual job simulation on Forage, not employment/i),
    ).toBeInTheDocument();
  });

  it('handles missing public/resume.pdf safely with an accessible credential dialog', async () => {
    render(<App />);

    const resumeLinks = screen.getAllByRole('link', { name: /Resume/i });
    fireEvent.click(resumeLinks[0]);

    const dialog = await screen.findByRole('dialog', {
      name: /Anamta Karim — Curriculum Vitae Snapshot/i,
    });
    expect(dialog).toBeInTheDocument();

    // Close with Escape
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(
      screen.queryByRole('dialog', { name: /Anamta Karim — Curriculum Vitae Snapshot/i }),
    ).not.toBeInTheDocument();
  });

  it('ensures all external links use safe rel attributes and avoids fake forms or skill meters', () => {
    const { container } = render(<App />);

    const externalLinks = container.querySelectorAll('a[target="_blank"]');
    expect(externalLinks.length).toBeGreaterThan(0);
    externalLinks.forEach((link) => {
      const rel = link.getAttribute('rel') || '';
      expect(rel).toContain('noopener');
      expect(rel).toContain('noreferrer');
    });

    // No fake contact forms or skill percentage progressbars
    expect(container.querySelectorAll('form')).toHaveLength(0);
    expect(container.querySelectorAll('[role="progressbar"]')).toHaveLength(0);
  });
});
