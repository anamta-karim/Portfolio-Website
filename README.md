# Anamta Karim — Sagittarius Portfolio

A celestial, Sagittarius-inspired personal portfolio website for **Anamta Karim** (B.Tech CSE — Artificial Intelligence, Jamia Hamdard University, expected 2027).

Built with a static-first **React 19 + TypeScript + Vite 6** architecture, custom SVG constellation geometry, semantic HTML, full keyboard navigation, and `prefers-reduced-motion` support.

---

## Architecture & Stack

- **Framework:** React 19 + TypeScript (`strict` mode) + Vite 6
- **Styling:** Custom CSS variables (`src/index.css`) implementing the hybrid palette (`#07111F` midnight void, `#0B0D26` deep navy, `#244F70` secondary blue, `#9EDCFF` icy blue, `#C5A9FF` restrained violet)
- **Icons:** `lucide-react`
- **Data Architecture:** Single source of truth in [`src/data/portfolioData.ts`](./src/data/portfolioData.ts), typed by [`src/types/portfolio.ts`](./src/types/portfolio.ts) and aligned with [`CONTENT_SOURCE_OF_TRUTH.md`](./CONTENT_SOURCE_OF_TRUTH.md)
- **Quality & Testing:** ESLint 9, TypeScript compiler check (`tsc -b`), and Vitest + React Testing Library (`src/test/App.test.tsx`)

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local dev server
npm run dev

# 3. Run unit & integration tests
npm run test

# 4. Run linter
npm run lint

# 5. Build for production
npm run build

# 6. Preview production build locally
npm run preview
```

---

## Adding the Approved Resume PDF

1. Place your final approved resume file at:
   ```text
   public/resume.pdf
   ```
2. No code changes are required. [`src/components/ResumeButton.tsx`](./src/components/ResumeButton.tsx) automatically checks whether `/resume.pdf` is present with `Content-Type: application/pdf`:
   - **Before `public/resume.pdf` is added:** Clicking **View Resume** opens an accessible credential snapshot dialog with a direct email request button (`mailto:anamtakarim13@gmail.com`) so visitors never hit a broken 404 link.
   - **Once `public/resume.pdf` is added:** All **View Resume** buttons automatically open/download `/resume.pdf` directly in a new tab.

---

## Updating Portfolio Content

All copy, links, project descriptions, skill groups, experience items, and achievements live in:

- [`src/data/portfolioData.ts`](./src/data/portfolioData.ts)

Edit that file and run `npm run build` to verify types and bundle output.

---

## Free Static Deployment

This project is 100% static and requires no backend server, database, or environment variables.

### Option A: Vercel / Netlify
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node Version:** `20.x` or `22.x`

### Option B: GitHub Pages
- Run `npm run build` and deploy the generated `dist/` folder via the `actions/deploy-pages` GitHub Action.
