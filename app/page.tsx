import Image from "next/image";
import { ContactForm } from "./_components/ContactForm";
import { Reveal } from "./_components/Reveal";
import { SideRail } from "./_components/SideRail";

const iconProps = {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "shrink-0 -translate-y-px",
};

function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...iconProps} fill="currentColor" stroke="none">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg {...iconProps} fill="currentColor" stroke="none">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg {...iconProps}>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
      <path d="M14 3v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>
  );
}

interface Entry {
  role: string;
  org: string;
  dates: string;
  summary: string;
  details?: string[];
  tags?: string[];
  href?: string;
  hrefLabel?: string;
  logo?: string;
};

const experience: Entry[] = [
  {
    role: "AI Security Graduate Researcher",
    org: "CWRU · PEAT AI Lab",
    dates: "May 2026 — Present",
    summary:
      "Building an unsupervised log-anomaly detection framework to flag security threats across 10M+ network events.",
    details: [
      "Pairing TF-IDF, Word2Vec, transformer and vLLM embedders (Qwen3) with classical outlier detectors to detect various attacks (DDoS, SQL Injection, Brute Force, and more) large-scale network flow logs.",
      "Designing feature pipelines and benchmarks across multiple embedding and detector combinations to maximize detection signal.",
      "Training and evaluating models on CWRU's HPC cluster via Slurm job scheduling.",
    ],
    tags: ["PyTorch", "Hugging Face", "vLLM", "Qwen3", "Slurm", "GPU"],
    logo: "/cwru.avif",
  },
  {
    role: "Machine Learning Engineer Intern",
    org: "Genentech",
    dates: "Jun 2025 — Dec 2025",
    summary:
      "Reduced the Bioassay department's experimental workload by 30% by building and deploying machine learning models that optimized drug potency assay parameters.",
    details: [
      "Trained machine learning models and neural networks to predict optimal assay parameters and minimize re-runs of drug potency experiments, cutting departmental experimental workload by up to 30%.",
      "Shipped ML models to production by authoring Python prediction endpoints in Dataiku's API framework and deploying them as REST APIs on AWS EKS through GitLab CI/CD pipelines with 100% automated test coverage.",
      "Drove cross-functional adoption of ML algorithms across drug development workflows by leading collaboration with 100+ engineers, scientists, and senior leadership through technical presentations and stakeholder reviews.",
      "Engineered ML feature pipelines by writing complex SQL queries across 30+ large-scale relational database tables.",
    ],
    tags: ["Python", "PyTorch", "Scikit-learn", "SQL", "GitLab CI/CD", "Docker", "AWS EKS", "Dataiku"],
    logo: "/gne.gif",
  },
  {
    role: "Deep Learning Undergraduate Researcher",
    org: "CWRU · INVent Lab",
    dates: "Sep 2024 — Nov 2025",
    summary:
      "Built deep learning pipelines for glomeruli segmentation in kidney whole-slide images by training U-Net and DenseNet models across multiple tissue stain types.",
    details: [
      "Built and scaled a U-Net training loop from a 25-tile prototype to 1000+ tiles on HPC infrastructure, expanding the dataset by a factor of 2 and parallelizing tile-splitting scripts across compute nodes.",
      "Applied CUDA memory optimization strategies and cuDNN benchmarking to reduce training time by 3x.",
      "Automated download of 3000+ whole-slide kidney images from the KPMP Atlas using a Python Selenium pipeline, cutting download time from over 10 hours to 30 minutes.",
      "Developed a DenseNet training loop to complement segmentation outputs with tile-level classification.",
      "Performed quality control variation analysis with HistoQC and annotated glomeruli regions across PAS, TOL, and SIL stained images in QuPath.",
    ],
    tags: ["PyTorch", "OpenCV", "MedSAM", "UNet", "DenseNet", "Selenium", "CUDA", "QuPath", "HPC"],
    logo: "/invent.avif",
  },
  {
    role: "Data Science Challenge Participant",
    org: "Lawrence Livermore National Laboratory",
    dates: "Jul 2024 — Aug 2024",
    summary:
      "Built multi-task deep-learning models on simulated 12-lead ECG signals to classify cardiac conditions and regress full heart-activation maps during LLNL's national Data Science Challenge.",
    details: [
      "Designed 1D-CNN classifiers and CNN→MLP regressors to predict both 75-point activation peaks and full 500×75 heart-activation graphs from simulated 12-lead ECG signals.",
      "Handled severe class imbalance with upsampling and a custom false-negative-weighted loss, sweeping penalty factors and analyzing confusion matrices to maximize recall.",
      "Co-developed a 3D heart model in game-engine software to visualize predicted activations spatially, and presented the results to technical and non-technical lab audiences.",
    ],
    tags: ["PyTorch", "1D CNN", "Time Series", "ECG"],
    logo: "/llnl.jpeg",
  },
  {
    role: "Undergraduate Researcher",
    org: "CWRU · Solar Durability Lifetime Extension Center (SDLE)",
    dates: "Oct 2023 — Aug 2024",
    summary:
      "Translated an R-based solar panel degradation prediction package into Python and applied statistical modeling to predict power loss over time, culminating in a first-author poster presentation at IEEE 2024 in Seattle.",
    details: [
      "First-authored a research poster presented at the 2024 IEEE Photovoltaic Specialists Conference in Seattle.",
      "Applied four statistical models combining multiple linear regression and physics-based approaches to derive relationships between power output and environmental factors (temperature, irradiance, wind speed), then layered weighted and yearly-separated regression techniques to compute Performance Loss Rate (PLR) degradation values.",
      "Evaluated model accuracy by generating synthetic photovoltaic datasets using specialized Python libraries such as pvlib, and visualized results through scatter plots and heatmaps.",
      "Preprocessed large volumes of unstructured solar panel sensor data by applying power and irradiance thresholds along with custom filters to prepare datasets for downstream modeling analysis.",
    ],
    tags: ["Python", "Scikit-learn", "pvlib", "Linear Regression", "BitBucket"],
    logo: "/cwru.avif",
  },
];

const projects: Entry[] = [
  {
    role: "AcoustiCare",
    org: "Software Engineering Lead",
    dates: "Nov 2025 — Present",
    summary:
      "Architected and deployed a HIPAA-compliant mobile app that screens patients for vocal disorders in seconds by computing clinical-grade acoustic metrics from a smartphone recording.",
    details: [
      "Built the entire Django backend and deployed it on AWS with HIPAA-compliant infrastructure (signed BAA, private VPC, ECS Fargate, encrypted RDS and S3 storage, and TLS termination through an Application Load Balancer), currently serving 100+ users in active beta and handling sensitive clinical data at scale.",
      "Engineered an asynchronous voice processing pipeline that queues uploaded audio, applies high-pass filtering, and extracts 20+ clinical-grade acoustic metrics (jitter, shimmer, cepstral peak prominence, harmonic-to-noise ratio) using the Praat-Parselmouth library in seconds.",
      "Validating acoustic measurements against gold-standard diagnostic tools by partnering directly with speech pathologists at UH Cleveland Medical Center to refine the product around real clinical workflows and meet provider standards for diagnostic decision-making.",
      "Filing a provisional patent protecting the novel integration of acoustic voice analysis, symptom assessment, and specialist matching into a single platform.",
      "Awarded $1,320 in grant funding and Silicon Valley alumni mentorship through the CWRU PRISE program to support development and clinical validation efforts.",
      "Led initial product designs using Figma templates, gathered iterative feedback from providers, and drove the React Native frontend implementation.",
    ],
    tags: ["AWS", "React Native", "Django", "Expo EAS", "Docker", "PostgreSQL", "Figma", "Praat-Parselmouth"],
    href: "https://apps.apple.com/us/app/acousticare/id6760281547",
    hrefLabel: "App Store",
    logo: "/acousticare.png",
  },
  {
    role: "Rival",
    org: "Software Engineering Lead",
    dates: "Jan 2026",
    summary:
      "A GenAI 1v1 mobile game that grades real GitHub and Notion contributions via OAuth and Gemini-driven prompt pipelines to declare a winner.",
    details: [
      "Pipes contributions through Gemini-driven prompt chains in a FastAPI backend to score and rank competitors.",
      "Pulls real activity history through GitHub and Notion OAuth integrations for both players.",
      "Built end-to-end during a CWRU hackathon with a small team.",
    ],
    tags: ["React Native", "FastAPI", "Docker", "Gemini API", "OAuth 2.0"],
    href: "https://github.com/surajkmr4218/rival",
    hrefLabel: "GitHub",
    logo: "/rival.png",
  },
];

function SectionHeader({ id, label, kicker }: { id: string; label: string; kicker?: string }) {
  return (
    <Reveal className="space-y-3" as="div">
      <div className="flex items-baseline justify-between gap-4">
        <h2
          id={id}
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted"
        >
          {label}
        </h2>
        {kicker && (
          <span className="font-serif italic text-foreground/40 text-sm">
            {kicker}
          </span>
        )}
      </div>
      <div className="rule-grow" />
    </Reveal>
  );
}

function EntryRow({ entry }: { entry: Entry }) {
  return (
    <article className="entry-row grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-6 border-b border-hairline last:border-b-0">
      <div className="flex items-center gap-3">
        {entry.logo && (
          <Image
            src={entry.logo}
            alt={`${entry.org} logo`}
            width={40}
            height={40}
            className="h-9 w-9 rounded-md object-cover ring-1 ring-hairline bg-background-tint/60 shrink-0"
          />
        )}
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-base font-medium text-foreground">
            {entry.role}
            <span className="text-muted font-normal"> · {entry.org}</span>
          </h3>
          {entry.href && (
            <a
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent"
            >
              {entry.hrefLabel ?? "Link"} ↗
            </a>
          )}
        </div>
      </div>
      <span className="font-mono text-xs text-muted tabular-nums whitespace-nowrap pt-1">
        {entry.dates}
      </span>
      <p className="col-span-2 text-[15px] leading-relaxed text-foreground/80 max-w-3xl mt-1">
        {entry.summary}
      </p>
      {entry.details && (
        <ul className="col-span-2 mt-3 space-y-1.5 max-w-3xl">
          {entry.details.map((d, i) => (
            <li
              key={i}
              className="relative pl-5 text-[14px] leading-relaxed text-foreground/70 before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-3 before:bg-muted/60"
            >
              {d}
            </li>
          ))}
        </ul>
      )}
      {entry.tags && (
        <ul className="col-span-2 flex flex-wrap gap-x-2 gap-y-1.5 mt-3">
          {entry.tags.map((t) => (
            <li
              key={t}
              className="font-mono text-[10.5px] uppercase tracking-wider text-muted bg-background-tint/60 border border-hairline px-2 py-0.5 rounded-full"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function Home() {
  return (
    <>
      <SideRail />
      <main className="relative mx-auto w-full max-w-4xl px-6 sm:px-10 lg:px-16 py-16 sm:py-24 z-[2]">
        {/* Hero */}
        <section className="relative">
          <div className="hero-glow" aria-hidden />
          <Reveal className="relative flex flex-col gap-8">
            <div className="photo-frame inline-block">
              <Image
                src="/profile.png"
                alt="Portrait of Suraj Kumar"
                width={460}
                height={460}
                priority
                className="rounded-2xl object-cover w-44 h-44 sm:w-60 sm:h-60 max-h-[33vh] ring-1 ring-hairline shadow-[0_10px_40px_-20px_rgba(26,26,26,0.35)]"
              />
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[1.02] tracking-tight text-foreground">
                  Suraj Kumar
                </h1>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  Hometown: Fremont, CA
                </p>
              </div>
              <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm pt-2">
                <a
                  href="mailto:surajkmr4218@gmail.com"
                  className="link-underline inline-flex items-center gap-2"
                >
                  <MailIcon />
                  surajkmr4218@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/surajkumar42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-2"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/surajkmr4218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-2"
                >
                  <GitHubIcon />
                  GitHub
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-2"
                >
                  <FileIcon />
                  Résumé ↗
                </a>
              </nav>
            </div>
          </Reveal>
        </section>

        {/* About */}
        <section className="mt-28 space-y-6">
          <SectionHeader id="about" label="About" kicker="01" />
          <Reveal delay={80}>
            <p className="text-[15.5px] leading-[1.75] text-foreground/85 max-w-3xl">
              I&rsquo;m an M.S. student studying Computer Science at Case Western Reserve University and graduating in December 2027.
              I have been programming for several years and I have the most experience in Python, TypeScript, JavaScript, HTML/CSS, and Java.
              Outside of class, I work as a researcher at the Case PEAT AI Lab where I am applying embedding models and detection algorithms
              to identify anomalies in large-scale network flow datasets (see <a href="#experience" className="link-underline text-foreground">Experience Section</a>). 
              I am also passionate about software engineering projects and building fullstack applications serving hundreds of users, like AcoustiCare and Rival 
              (see <a href="#projects" className="link-underline text-foreground">Projects Section</a>). I&rsquo;m specifically
              drawn to problems that sit at the forefront of innovative technology and real-world impact. I want to work on fullstack applications,
              ML/AI engineering, and large-scale distributed systems that solve meaningful problems for users.
            </p>
          </Reveal>
        </section>

        {/* Education */}
        <section className="mt-24 space-y-4">
          <SectionHeader id="education" label="Education" kicker="02" />

          <Reveal>
            <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-6 border-b border-hairline">
              <h3 className="text-base font-medium text-foreground">
                Case Western Reserve University
                <span className="text-muted font-normal"> · Cleveland, OH</span>
              </h3>
              <span className="font-mono text-xs text-muted tabular-nums whitespace-nowrap pt-1">
                Aug 2026 — Dec 2027
              </span>
              <p className="col-span-2 text-[15px] leading-relaxed text-foreground/80 mt-1">
                <em>Master of Science (M.S.)</em> - Computer Science
              </p>
              <p className="col-span-2 text-[15px] leading-relaxed text-foreground/80 mt-1">
                Artificial Intelligence Track
              </p>
              <p className="col-span-2 text-[15px] leading-relaxed text-foreground/80 mt-1">
                Planned Coursework: Large Language Models, Designing High Performant Systems for AI,
                Artificial Intelligence: Statistical Natural Language Processing, Deep Generative Models,
                Computer Networks, High Performance Data and Computing, Machine Learning
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-6">
              <h3 className="text-base font-medium text-foreground">
                Case Western Reserve University
                <span className="text-muted font-normal"> · Cleveland, OH</span>
              </h3>
              <span className="font-mono text-xs text-muted tabular-nums whitespace-nowrap pt-1">
                Aug 2023 — Dec 2027
              </span>
              <p className="col-span-2 text-[15px] leading-relaxed text-foreground/80 mt-1">
                <em>Bachelor of Science in Engineering (B.S.E)</em> - Biomedical Engineering
              </p>
              <p className="col-span-2 text-[15px] leading-relaxed text-foreground/80 mt-1">
                Computer Science Minor
              </p>
              <p className="col-span-2 text-[15px] leading-relaxed text-foreground/80 mt-1">
                Relevant CS Coursework: Operating Systems (C), Introduction to Artificial Intelligence, Algorithms, Data Structures (Java), Discrete Mathematics, Programming in Java
              </p>
              <p className="col-span-2 text-[15px] leading-relaxed text-foreground/80 mt-1">
                Relevant BME Coursework: Biomedical Signals and Systems (Matlab), Modeling of Biomedical Systems (Matlab), Principles
                of Biomedical Instrumentation (Circuits), Physiology-Biophysics
              </p>
            </div>
          </Reveal>
        </section>

        {/* Experience */}
        <section className="mt-24 space-y-4">
          <SectionHeader id="experience" label="Experience" kicker="03" />
          <div>
            {experience.map((e, i) => (
              <Reveal key={e.role + e.org} delay={i * 60}>
                <EntryRow entry={e} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mt-24 space-y-4">
          <SectionHeader id="projects" label="Projects" kicker="04" />
          <div>
            {projects.map((p, i) => (
              <Reveal key={p.role} delay={i * 60}>
                <EntryRow entry={p} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="mt-24 space-y-6">
          <SectionHeader id="awards" label="Recognition" kicker="05" />
          <Reveal>
            <ul className="divide-y divide-hairline">
              <li className="grid grid-cols-[1fr_auto] gap-x-6 py-4">
                <span className="text-[15px] text-foreground/85">
                  Junior-Senior Scholarship Award
                </span>
                <span className="font-mono text-xs text-muted tabular-nums">
                  Feb 2025
                </span>
              </li>
              <li className="grid grid-cols-[1fr_auto] gap-x-6 py-4">
                <span className="text-[15px] text-foreground/85">
                  President&rsquo;s Volunteer Service Award  
                </span>
                <span className="font-mono text-xs text-muted tabular-nums">
                  Oct 2022
                </span>
              </li>
            </ul>
          </Reveal>
        </section>

        {/* Off the Clock */}
        <section className="mt-24 space-y-6">
          <SectionHeader id="off-the-clock" label="Hobbies and Interests" kicker="06" />
          <div className="space-y-5">
            <Reveal direction="left" delay={80}>
              <p className="text-[15.5px] leading-[1.75] text-foreground/85 max-w-3xl">
                I shoot a fair amount of{" "}
                <span className="text-foreground italic font-serif text-[17px]">
                  photography
                </span> 
                , mostly landscapes from travel and photo walks. Most of it ends up on
                Instagram at{" "}
                <a
                  href="https://instagram.com/sklicks_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-foreground"
                >
                  @sklicks_
                </a>
                .
              </p>
            </Reveal>

            <Reveal direction="right" delay={160}>
              <p className="text-[15.5px] leading-[1.75] text-foreground/85 max-w-3xl">
                I&rsquo;m a bit of an{" "}
                <span className="text-foreground italic font-serif text-[17px]">
                  adrenaline junkie
                </span>{" "}
                — skydiving, jet skiing, and hiking trails with friends are some of my favorite ways to spend a weekend. 
              </p>
            </Reveal>

            <Reveal direction="left" delay={240}>
              <p className="text-[15.5px] leading-[1.75] text-foreground/85 max-w-3xl">
                I grew up playing{" "}
                <span className="text-foreground italic font-serif text-[17px]">
                  baseball
                </span> 
                , but now I&rsquo;m always down for a pickup game of{" "}
                <span className="text-foreground italic font-serif text-[17px]">
                  basketball
                </span>{" "}
                or{" "}
                <span className="text-foreground italic font-serif text-[17px]">
                  pickleball
                </span>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <Reveal as="div">
          <footer className="mt-32 pt-8 border-t border-hairline space-y-8">
            <div className="flex flex-wrap items-start justify-between gap-8">
              <div className="space-y-3">
                <p className="font-serif text-2xl text-foreground">
                  Let&rsquo;s talk.
                </p>
                <a
                  href="mailto:surajkmr4218@gmail.com"
                  className="link-underline text-sm text-muted block"
                >
                  surajkmr4218@gmail.com
                </a>
              </div>
              <ContactForm />
            </div>
            <div className="flex justify-end">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                © {new Date().getFullYear()} Suraj Kumar
              </span>
            </div>
          </footer>
        </Reveal>
      </main>
    </>
  );
}
