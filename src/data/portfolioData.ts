import {
  Achievement,
  ConstellationEdge,
  ExperienceItem,
  PrimaryStarNode,
  Project,
  ResearchItem,
  SecondaryStarNode,
  SkillGroup,
} from '../types/portfolio';
import skinwiseScreenshot from '../assets/projects/skinwise.png';
import passonScreenshot from '../assets/projects/passon.png';

export const PROFILE_DATA = {
  name: 'Anamta Karim',
  badge: 'B.TECH CSE (AI)',
  headline: 'AI/ML & Software Engineering | Building practical, reliable AI products',
  heroTagline:
    'I enjoy turning messy real-world data into working products and understanding why a system behaves the way it does.',
  shortBio:
    'I am a B.Tech Computer Science and Engineering undergraduate specializing in Artificial Intelligence at Jamia Hamdard University, graduating in 2027. I like taking projects from raw data and model design all the way to tested, usable applications across retrieval systems, computer vision, natural language processing, and web development.',
  philosophy:
    'I care about what happens when an AI model meets real users and imperfect data. My focus is on pairing machine learning and generative AI with thoughtful software engineering, clear validation, and reliable fallbacks so the applications I build hold up in everyday use.',
  education: {
    institution: 'Jamia Hamdard University',
    degree: 'B.Tech in Computer Science & Engineering (Artificial Intelligence)',
    period: '2023 – 2027 (Expected)',
    cgpa: '9.25 / 10',
    location: 'New Delhi, India',
  },
  currentlyBuilding: {
    title: 'LoRA Vision-Language Pipeline for Retinal Report Generation',
    status: 'In Progress (~50%)',
    description:
      'Setting up a modular PyTorch and Hugging Face PEFT/LoRA training and evaluation pipeline with 4-bit quantization (bitsandbytes) to generate clinical descriptions from retinal fundus images within a 4GB VRAM limit.',
    repoUrl: 'https://github.com/anamta-karim/lora-retinal-report-gen',
  },
  focusAreas: [
    'AI / Machine Learning',
    'GenAI & LLM Applications',
    'Natural Language Processing',
    'Computer Vision',
    'Data Science & Analytics',
    'Full-Stack AI Engineering',
  ],
  contact: {
    email: 'anamtakarim13@gmail.com',
    github: 'https://github.com/anamta-karim',
    linkedin: 'https://www.linkedin.com/in/anamta-karim',
    resumePath: '/resume.pdf',
  },
};

export const PRIMARY_STARS: PrimaryStarNode[] = [
  {
    id: 'about',
    number: '01',
    label: 'About Me',
    shortLabel: 'About Me',
    starName: 'Kaus Borealis (λ Sgr)',
    subtitle: 'Bio, education & current focus',
    x: 212,
    y: 84,
    labelOffset: { dx: 18, dy: 5, anchor: 'start' },
    magnitude: 'alpha',
  },
  {
    id: 'projects',
    number: '02',
    label: 'Projects',
    shortLabel: 'Projects',
    starName: 'Nunki (σ Sgr)',
    subtitle: 'SkinWise, PassOn & VLM pipelines',
    x: 362,
    y: 152,
    labelOffset: { dx: 18, dy: -10, anchor: 'start' },
    magnitude: 'alpha',
  },
  {
    id: 'skills',
    number: '03',
    label: 'Technical Skills',
    shortLabel: 'Skills',
    starName: 'Ascella (ζ Sgr)',
    subtitle: 'ML, NLP/CV, Data & Full-Stack tools',
    x: 436,
    y: 235,
    labelOffset: { dx: 18, dy: 5, anchor: 'start' },
    magnitude: 'beta',
  },
  {
    id: 'experience',
    number: '04',
    label: 'Experience & Leadership',
    shortLabel: 'Experience',
    starName: 'Kaus Australis (ε Sgr)',
    subtitle: 'Deloitte simulation, Ignite & Aarambh',
    x: 400,
    y: 318,
    labelOffset: { dx: 20, dy: 12, anchor: 'start' },
    magnitude: 'alpha',
  },
  {
    id: 'achievements',
    number: '05',
    label: 'Achievements',
    shortLabel: 'Achievements',
    starName: 'Arkab (β Sgr)',
    subtitle: 'Scholarships, SIH & programs',
    x: 422,
    y: 422,
    labelOffset: { dx: 18, dy: 6, anchor: 'start' },
    magnitude: 'beta',
  },
  {
    id: 'research',
    number: '06',
    label: 'Research & Learning',
    shortLabel: 'Research & Learning',
    starName: 'Rukbat (α Sgr)',
    subtitle: 'Retinal VLM pipeline & technical notes',
    x: 284,
    y: 472,
    labelOffset: { dx: 0, dy: 28, anchor: 'middle' },
    magnitude: 'alpha',
  },
  {
    id: 'contact',
    number: '07',
    label: 'Contact',
    shortLabel: 'Contact',
    starName: 'Alnasl (γ Sgr)',
    subtitle: 'Email, GitHub & LinkedIn',
    x: 136,
    y: 378,
    labelOffset: { dx: 0, dy: 28, anchor: 'middle' },
    magnitude: 'alpha',
  },
];

export const SECONDARY_STARS: SecondaryStarNode[] = [
  { id: 's1', x: 232, y: 152, r: 2.3 },
  { id: 's2', x: 180, y: 192, r: 2.8 },
  { id: 's3', x: 92, y: 246, r: 2.2 },
  { id: 's4', x: 260, y: 232, r: 3.0 },
  { id: 's5', x: 292, y: 202, r: 2.3 },
  { id: 's6', x: 322, y: 205, r: 2.2 },
  { id: 's7', x: 318, y: 272, r: 2.4 },
  { id: 's8', x: 258, y: 378, r: 2.5 },
  { id: 's9', x: 204, y: 414, r: 2.3 },
  { id: 's10', x: 268, y: 432, r: 2.2 },
  { id: 's11', x: 378, y: 454, r: 2.2 },
];

export const CONSTELLATION_EDGES: ConstellationEdge[] = [
  { from: 'about', to: 's1', primarySection: 'about' },
  { from: 's1', to: 's4', primarySection: 'about' },
  { from: 's4', to: 's2', primarySection: 'about' },
  { from: 's2', to: 's3', primarySection: 'contact' },
  { from: 's3', to: 'contact', primarySection: 'contact' },
  { from: 'contact', to: 's8', primarySection: 'contact' },
  { from: 'contact', to: 's9', primarySection: 'contact' },
  { from: 's9', to: 's10', primarySection: 'research' },
  { from: 's10', to: 'research', primarySection: 'research' },
  { from: 'research', to: 's11', primarySection: 'research' },
  { from: 's11', to: 'achievements', primarySection: 'achievements' },
  { from: 's4', to: 's5', primarySection: 'projects' },
  { from: 's5', to: 's6', primarySection: 'projects' },
  { from: 's6', to: 'projects', primarySection: 'projects' },
  { from: 'projects', to: 'skills', primarySection: 'skills' },
  { from: 'projects', to: 'experience', primarySection: 'projects' },
  { from: 'skills', to: 'experience', primarySection: 'skills' },
  { from: 's4', to: 's7', primarySection: 'experience' },
  { from: 's7', to: 'experience', primarySection: 'experience' },
  { from: 's7', to: 'projects', primarySection: 'projects' },
  { from: 'experience', to: 's9', primarySection: 'experience' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'skinwise',
    title: 'SkinWise',
    subtitle: 'Live Skincare Ingredient & Price Intelligence Platform',
    status: 'built-tested',
    statusLabel: 'Built & Tested • Flagship AI Project',
    featured: true,
    categories: ['ai-ml', 'genai-cv', 'fullstack-cloud'],
    context:
      'Independent Full-Stack Project • Extended & submitted to SerpApi India Hackathon 2026',
    role: 'Solo Developer (System Architecture, Live Retrieval Pipeline, Semantic Matching & Web App)',
    imageUrl: skinwiseScreenshot,
    imageAlt: 'SkinWise application interface showing ingredient safety analysis and routines',
    summary:
      'An end-to-end skincare intelligence platform I designed and built from the ground up. It brings together four modules (Ingredient Analyzer, Personal Regimen, EthiScan, and Ingredient Pulse), combining OCR label reading, semantic ingredient matching, LLM insights, and live web retrieval for product ingredients, pricing, news, and search trends.',
    problem:
      'Static skincare datasets go out of date quickly when brands reformulate products or release regional variants. At the same time, raw web searches often pull up marketing pages or mismatched product variants without complete ingredient lists.',
    modules: [
      {
        name: 'Ingredient Analyzer',
        description:
          'Fetches product ingredient lists through live web search or OCR photo capture, matches ingredients against a safety knowledge base, and flags incomplete or low-confidence results.',
      },
      {
        name: 'Personal Regimen',
        description:
          'Evaluates multi-product skincare routines and finds more affordable alternatives using live shopping and price data.',
      },
      {
        name: 'EthiScan',
        description:
          'Looks up brand claims, cruelty-free or sustainability context, and recent news coverage using live search and news retrieval.',
      },
      {
        name: 'Ingredient Pulse',
        description:
          'Tracks rising skincare active ingredients and shifts in consumer interest using live search trend signals.',
      },
    ],
    approach: [
      'Evolved my initial static 105-product prototype into a live multi-stage retrieval pipeline using SerpApi across Google Search, Shopping, News, and Trends.',
      'Built validation checks for brand name, product variant, and ingredient list structure before running safety scoring.',
      'Mapped 966 indexed ingredient terms to a 385-ingredient safety database using Sentence-Transformers (all-MiniLM-L6-v2), cosine similarity, and RapidFuzz string matching.',
      'Added EasyOCR for reading ingredient photos and a Groq-hosted LLM for structured summaries, supported by caching, retry logic, and fallback handling.',
    ],
    technologies: [
      'Python',
      'Flask',
      'Sentence-Transformers (all-MiniLM-L6-v2)',
      'Cosine Similarity',
      'EasyOCR',
      'Groq LLM',
      'SerpApi (Shopping/Search/News/Trends)',
      'RapidFuzz',
      'Pandas',
      'NumPy',
      'pytest',
      'Docker',
      'JavaScript / HTML / CSS',
    ],
    evidence: [
      'Tested across 12 real skincare products: retrieved usable ingredient lists for 8 of 12 products (7 exact product pages and 1 closest-match variant), 3 partial low-confidence lists, and 1 with no list found.',
      '27 pytest unit tests passing with mocked API responses covering retrieval, fallback, and ingredient matching logic.',
      'A separate 8-query synonym test set reached 100% accuracy as a targeted check for synonym resolution (not a claim of broad general model accuracy).',
    ],
    limitations: [
      'Live web search can still return nearby product variants or incomplete retailer ingredient lists.',
      'Embedding similarity can occasionally trigger false positives on closely named chemical derivatives.',
      'Depends on external APIs (SerpApi and Groq) that require rate-limit handling and can vary slightly across live runs.',
    ],
    disclaimer:
      'Screening Aid Disclaimer: SkinWise is an informational screening aid, not a medical diagnostic tool. An ingredient list alone does not establish clinical safety, formulation concentration, or dermatological suitability for an individual.',
    links: [
      {
        label: 'Watch Demo Video',
        url: 'https://www.youtube.com/watch?v=d6dFXuMQhOg',
        kind: 'video',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/anamta-karim/SkinWise',
        kind: 'repository',
      },
    ],
    order: 1,
  },
  {
    id: 'passon',
    title: 'PassOn',
    subtitle: 'Hyper-Local Circular Economy & Reuse Platform',
    status: 'built-tested',
    statusLabel: 'Built & Tested • Live Frontend',
    featured: true,
    categories: ['genai-cv', 'fullstack-cloud'],
    context: 'Environmental Hacks AWS Hackathon by WeMakeDevs (Team of 4)',
    role: 'Team Lead & Core Developer (Originated Concept, Architecture, Multi-Provider AI Pipeline & Core Full-Stack Flows)',
    imageUrl: passonScreenshot,
    imageAlt: 'PassOn application interface showing campus living circles and AI item intake',
    summary:
      'A hyper-local reuse platform built by my four-person team for campuses, hostels, and PGs. It combines invite-gated living circles, photo-based item intake, automated condition and INR price-band estimation, and smart routing between peer reuse and scrap or e-waste collection.',
    problem:
      'Students and hostel residents often throw away usable books, electronics, and room essentials when moving out because creating manual listings takes too much effort and open marketplaces lack local trust.',
    modules: [
      {
        name: 'Shelf-Photo AI Intake',
        description:
          'Analyzes uploaded item photos to suggest a category (including stationery), condition, reuse-versus-scrap routing, and realistic INR price bands.',
      },
      {
        name: 'Verified Living Circles',
        description:
          'Invite-gated campus and hostel communities featuring wishlist requests and group scrap-drive scheduling.',
      },
      {
        name: 'Modular Vision Pipeline',
        description:
          'Supports both AWS Bedrock (Claude 3 Sonnet) and Groq vision (qwen/qwen3.8-27b) with strict output validation and an offline fallback.',
      },
      {
        name: 'Circular Impact Dashboard',
        description:
          'Visualizes community reuse activity and estimated waste diversion (dashboard impact figures are illustrative estimates rather than audited field measurements).',
      },
    ],
    approach: [
      'Originated the product concept and system architecture as Team Lead, working closely with my three teammates across the frontend and backend.',
      'Built a modular AI provider layer supporting AWS Bedrock Claude 3 Sonnet and Groq Vision (qwen/qwen3.8-27b) with a deterministic offline fallback.',
      'Added strict JSON schema validation for item categories, condition labels, routing decisions, and INR price clamping so bad model outputs never break the app.',
      'Implemented the photo upload and AI review flow, listing image persistence, image fallbacks, and an AWS SAM serverless specification (Lambda, API Gateway, DynamoDB, and Bedrock IAM).',
    ],
    technologies: [
      'React 19',
      'React Router v7',
      'Vite 6',
      'Tailwind CSS v4',
      'Python / Flask',
      'AWS Bedrock (Claude 3 Sonnet)',
      'Groq Vision (qwen/qwen3.8-27b)',
      'AWS SAM (Lambda, API Gateway, DynamoDB)',
      'boto3',
      'Lucide Icons',
    ],
    evidence: [
      '40/40 backend unit tests passing at the time reported.',
      'Frontend Vite production build completed with zero errors (1,609 modules in ~2 seconds at the time reported).',
      'Photo analysis ran in roughly 1.5 to 3 seconds during development testing (an informal development observation, not a formal benchmark).',
    ],
    publicDemoCaveat:
      'Public Demo vs. Backend Note: My teammates and I built both the frontend and backend for PassOn. The public frontend is live on AWS Amplify, while persistent DynamoDB CRUD and Cognito authentication are intentionally mocked in the public demo so visitors can try every workflow safely without modifying shared data. The backend code and AWS SAM serverless specification are included in the repository.',
    limitations: [
      'Persistent DynamoDB storage and Cognito authentication are mocked in the public demo deployment.',
      'Environmental impact numbers shown in the dashboard UI are illustrative estimates rather than measured real-world outcomes.',
    ],
    links: [
      {
        label: 'Live Frontend Demo',
        url: 'https://main.d2f6r799co6n12.amplifyapp.com/home',
        kind: 'live-demo',
      },
      {
        label: 'Watch Demo Video',
        url: 'https://youtu.be/aNBhSCocAaQ',
        kind: 'video',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/hariszzai/PassOn',
        kind: 'repository',
      },
    ],
    order: 2,
  },
  {
    id: 'retinal-vlm',
    title: 'Retinal Image Clinical Report Generation',
    subtitle: 'LoRA Vision-Language Models under 4GB VRAM Constraints',
    status: 'in-progress',
    statusLabel: 'In Progress (~50% • Training & Pipeline Setup)',
    completionNote:
      'Active research engineering project (~50% complete). The CUDA environment, quantization setup, and modular pipeline are currently being built; final evaluation metrics and a public demo are not yet completed.',
    featured: false,
    categories: ['ai-ml', 'genai-cv'],
    context: 'Independent Applied Vision-Language Research Project',
    role: 'Independent Researcher & Developer',
    imageAlt: 'Retinal VLM pipeline overview',
    summary:
      'Developing a parameter-efficient vision-language pipeline to generate clinical descriptions from retinal fundus images, moving beyond single-label disease classification while fitting inside a strict 4GB GPU memory budget.',
    problem:
      'Standard retinal classifiers only output discrete disease labels without clinical narrative context, while full fine-tuning of modern vision-language models exceeds consumer GPU memory.',
    approach: [
      'Setting up a reproducible CUDA environment and modular data, training, and evaluation pipeline in PyTorch and Hugging Face Transformers.',
      'Combining 4-bit quantization (bitsandbytes) with Low-Rank Adaptation (PEFT/LoRA) to run training and inference within 4GB of VRAM.',
      'Structuring preprocessing workflows around the licensed DeepEyeNet dataset (~15,700 retinal images paired with ophthalmologist-written clinical descriptions) in accordance with dataset licensing.',
    ],
    plannedWork: [
      'Planned: Comparative benchmarking of BLIP and InstructBLIP model variants against the DeepOpht baseline (Huang et al., WACV 2021).',
      'Planned: Evaluation using text-generation metrics (BLEU, ROUGE, CIDEr) alongside clinical accuracy checks beyond surface word overlap.',
      'Planned: Lightweight Flask inference interface and Docker packaging once model training and validation are finished.',
    ],
    technologies: [
      'Python',
      'PyTorch',
      'Hugging Face Transformers',
      'PEFT / LoRA',
      'bitsandbytes (4-bit Quantization)',
      'CUDA',
    ],
    limitations: [
      'Currently ~50% complete and in the training and pipeline engineering phase.',
      'Full DeepEyeNet training runs, BLEU/ROUGE/CIDEr benchmarks, and Flask/Docker deployment are planned next steps.',
    ],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/anamta-karim/lora-retinal-report-gen',
        kind: 'repository',
      },
    ],
    order: 3,
  },
  {
    id: 'financial-risk-engine',
    title: 'Enterprise Financial Risk & Market Sentiment Intelligence Engine',
    subtitle: 'Concept Exploration: Volatility Forecasting + Filing RAG',
    status: 'early-stage',
    statusLabel: 'Early Exploration (~10% • On Hold)',
    completionNote:
      'Early concept and repository scaffolding (~10%, currently on hold). Shared for transparency about areas I have explored, rather than as a finished system.',
    featured: false,
    categories: ['ai-ml'],
    context: 'Early Concept Exploration (On Hold)',
    role: 'Solo Explorer',
    summary:
      'An early exploration into combining market volatility forecasting with retrieval-augmented question answering over corporate filings and annual reports.',
    problem:
      'Exploring how quantitative market signals and qualitative disclosures in corporate filings can be queried together in one workflow.',
    approach: [
      'Initial problem scoping and repository structure for pairing tabular volatility modeling with document RAG.',
    ],
    plannedWork: [
      'Proposed stack (not yet implemented): Python, Streamlit, scikit-learn, Random Forest/XGBoost, yfinance, RAG pipeline, and MySQL.',
    ],
    technologies: ['Python (Proposed)', 'scikit-learn (Proposed)', 'RAG Concept'],
    limitations: [
      'On hold at the ~10% planning stage with no live demo, evaluation metrics, or completed implementation.',
    ],
    links: [
      {
        label: 'GitHub Repository (Early Stage)',
        url: 'https://github.com/anamta-karim/financial-risk-intelligence-engine',
        kind: 'repository',
      },
    ],
    order: 4,
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'programming-data',
    title: 'Programming & Data Analysis',
    subtitle: 'Core languages, data wrangling & exploratory analysis',
    coreSkills: [
      'Python',
      'SQL',
      'Pandas',
      'NumPy',
      'Exploratory Data Analysis (EDA)',
      'Data Cleaning',
      'Matplotlib',
      'Seaborn',
      'Excel',
      'Power BI',
    ],
    order: 1,
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Foundations',
    subtitle: 'Classical modeling, preprocessing & evaluation workflows',
    coreSkills: [
      'scikit-learn',
      'Regression',
      'Classification',
      'Clustering',
      'Data Preprocessing',
      'Feature Scaling',
      'Model Evaluation',
      'Cross-Validation',
    ],
    order: 2,
  },
  {
    id: 'nlp-llm-cv',
    title: 'NLP, LLMs & Computer Vision',
    subtitle: 'Semantic retrieval, OCR, multimodal APIs & parameter-efficient fine-tuning',
    coreSkills: [
      'Sentence-Transformers',
      'Semantic Embeddings',
      'Cosine Similarity',
      'EasyOCR',
      'LLM API Integration',
      'Retrieval-Augmented Generation (RAG)',
    ],
    projectContextualSkills: [
      'PyTorch',
      'Hugging Face Transformers',
      'PEFT / LoRA',
      'bitsandbytes (4-bit Quantization)',
      'Groq Vision API',
    ],
    contextNote:
      'Applied in SkinWise, PassOn, and my ongoing Retinal VLM pipeline.',
    order: 3,
  },
  {
    id: 'web-cloud-tools',
    title: 'Web, Cloud & Engineering Tools',
    subtitle: 'Backend APIs, frontend interfaces, testing & cloud infrastructure',
    coreSkills: [
      'Flask',
      'REST APIs',
      'Requests & BeautifulSoup',
      'MySQL',
      'Git & GitHub',
      'Jupyter Notebook',
      'VS Code',
    ],
    projectContextualSkills: [
      'JavaScript',
      'React',
      'Tailwind CSS',
      'pytest',
      'Docker',
      'AWS Bedrock',
      'AWS Amplify & SAM (Lambda, API Gateway, DynamoDB)',
    ],
    contextNote:
      'Used across full-stack project deployments with unit testing and schema validation.',
    order: 4,
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'deloitte-forage',
    role: 'Data Analytics Job Simulation',
    organization: 'Deloitte Australia (via Forage)',
    period: 'May – June 2026',
    type: 'job-simulation',
    typeBadge: 'Virtual Job Simulation (Forage)',
    summary:
      'Completed practical data analytics case tasks modeled on forensic technology and business intelligence workflows.',
    bullets: [
      'Analyzed a forensic technology dataset to spot operational patterns and data anomalies.',
      'Used Microsoft Excel for structured data classification and verification.',
      'Built an interactive Tableau dashboard to present key analytical findings clearly.',
    ],
    clarificationNote:
      'Completed as a self-paced virtual job simulation on Forage, not employment at Deloitte.',
    order: 1,
  },
  {
    id: 'ignite-vp',
    role: 'Vice-President',
    organization: 'Ignite Community, Jamia Hamdard',
    period: 'March – October 2025',
    type: 'leadership',
    typeBadge: 'Campus Leadership',
    summary:
      'Led operations, student mentorship, and technical community programming for a 100+ member university group.',
    bullets: [
      'Guided a student community of over 100 members across technical workshops and collaborative projects.',
      'Planned and hosted campus events, peer learning sessions, and student outreach.',
      'Coordinated student organizers and speakers to keep community programs active and welcoming.',
    ],
    order: 2,
  },
  {
    id: 'aarambh-js',
    role: 'Joint Secretary (Ruling)',
    organization: 'Aarambh’25 National Student Parliament',
    period: '2025',
    type: 'leadership',
    typeBadge: 'Event Leadership',
    summary:
      'Managed delegate coordination, parliamentary documentation, and on-ground logistics for a national student parliament event.',
    bullets: [
      'Coordinated over 100 student delegates across sessions and parliamentary debates.',
      'Handled session documentation, scheduling, and cross-team event logistics.',
    ],
    order: 3,
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'iirs-isro-geodata',
    title: 'AI/ML for Geodata Analysis',
    issuer: 'IIRS / ISRO',
    date: '2026',
    description:
      'Completed specialized training on applying artificial intelligence and machine learning methods to geospatial and remote sensing data.',
    category: 'coursework',
    categoryLabel: 'Technical Program',
    certificateUrl: '/certificates/iirs-isro-geodata.pdf',
    certificateLabel: 'View Certificate',
    order: 1,
  },
  {
    id: 'mckinsey-forward',
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    date: '2026 (In Progress)',
    description:
      'Currently enrolled in McKinsey’s capability-building program focused on structured problem solving, communication, and adaptable leadership in digital workplaces.',
    category: 'program',
    categoryLabel: 'Professional Program',
    order: 2,
  },
  {
    id: 'google-cloud-agentic-ai',
    title: 'Agentic AI on Google Cloud',
    issuer: 'Google Cloud Skills Boost',
    date: '2026',
    description:
      'Explored agentic AI architectures, tool-use workflows, and cloud generative AI patterns through Google Cloud Skills Boost.',
    category: 'coursework',
    categoryLabel: 'Technical Course',
    order: 3,
  },
  {
    id: 'codewithharry-data-science',
    title: 'Ultimate Job Ready Data Science Course',
    issuer: 'CodeWithHarry',
    date: '2026',
    description:
      'Completed hands-on training in Python data analysis, data cleaning, visualization, and practical machine learning workflows.',
    category: 'coursework',
    categoryLabel: 'Technical Course',
    order: 4,
  },
  {
    id: 'reliance-scholarship',
    title: 'Reliance Foundation Undergraduate Scholar',
    issuer: 'Reliance Foundation',
    date: '2023 – Present',
    description:
      'Selected as a Reliance Foundation Undergraduate Scholar through a competitive nationwide selection process recognizing academic excellence and leadership potential.',
    category: 'scholarship',
    categoryLabel: 'Scholarship',
    order: 5,
  },
  {
    id: 'sih-2025',
    title: 'Smart India Hackathon 2025 (Internal Selection)',
    issuer: 'Jamia Hamdard University',
    date: '2025',
    description:
      'Cleared the competitive university-level internal selection round for Smart India Hackathon 2025.',
    category: 'selection',
    categoryLabel: 'Hackathon Selection',
    order: 6,
  },
  {
    id: 'national-space-day',
    title: 'National Space Day 2024 Invitee',
    issuer: 'Bharat Mandapam, New Delhi',
    date: 'August 2024',
    description:
      'Selected and invited to attend the National Space Day 2024 celebrations held at Bharat Mandapam in New Delhi.',
    category: 'selection',
    categoryLabel: 'National Invitation',
    order: 7,
  },
  {
    id: 'ledby-bootcamp',
    title: 'Career Acceleration Bootcamp',
    issuer: 'LedBy Foundation in partnership with the U.S. Embassy',
    date: 'August 2024',
    description:
      'Completed intensive leadership, professional communication, and career readiness training.',
    category: 'program',
    categoryLabel: 'Leadership Program',
    certificateUrl: '/certificates/career-acceleration-bootcamp.png',
    certificateLabel: 'View Certificate',
    order: 8,
  },
];

export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    id: 'retinal-vlm-research',
    title: 'LoRA Vision-Language Models for Retinal Clinical Narratives',
    statusLabel: 'Active Research Pipeline (~50% Complete)',
    summary:
      'Exploring how multimodal vision-language models can be adapted within a strict 4GB VRAM limit to generate structured clinical descriptions from retinal fundus images.',
    details: [
      'Why free-text generation: Clinical fundus interpretation requires describing lesion locations, optic disc appearance, and vascular findings rather than outputting a single disease label.',
      'Hardware-aware training: Combining 4-bit NormalFloat quantization (bitsandbytes) with Low-Rank Adaptation (PEFT/LoRA) in PyTorch so experiments can run reproducibly on a 4GB GPU.',
      'Planned evaluation: Preparing comparisons of BLIP and InstructBLIP variants against the DeepOpht baseline (Huang et al., WACV 2021) using licensed DeepEyeNet data (~15,700 image-report pairs), pairing BLEU/ROUGE/CIDEr scores with clinical accuracy checks.',
    ],
    tags: ['Vision-Language Models', 'PEFT / LoRA', '4-bit Quantization', 'Medical Imaging AI', 'PyTorch'],
    repoUrl: 'https://github.com/anamta-karim/lora-retinal-report-gen',
  },
  {
    id: 'retrieval-validation-notes',
    title: 'Working with Messy Real-World Data in Applied AI Systems',
    statusLabel: 'Applied Engineering Learnings',
    summary:
      'Practical lessons from building SkinWise and PassOn on why AI applications need clear validation rules around model outputs.',
    details: [
      'Multi-stage retrieval checks: While building SkinWise, live search queries often returned product bundles or regional reformulations. Adding brand, variant, and ingredient-list verification steps with confidence flags helped prevent silent errors.',
      'Schema validation and fallbacks: In PassOn, wrapping Bedrock Claude 3 Sonnet and Groq vision outputs with strict JSON validation, category checks, and INR price clamping kept the interface stable even when model responses varied.',
      'Honest evaluation on small test sets: Keeping a clear distinction between targeted unit checks (such as 27 mocked-API pytest tests or an 8-query synonym check) and broad claims of model accuracy.',
    ],
    tags: ['Retrieval Pipelines', 'Schema Validation', 'Confidence Scoring', 'Multi-Provider LLMs'],
  },
];

export const RESEARCH_INTERESTS: string[] = [
  'Parameter-Efficient Multimodal & Vision-Language Models (PEFT / LoRA / Quantization)',
  'Reliable Retrieval-Augmented Generation (RAG) & Confidence-Aware NLP',
  'Medical Imaging Narrative Generation & Clinically Grounded Evaluation',
  'Resilient Multi-Provider AI Systems with Deterministic Guardrails',
];
