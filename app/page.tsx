import Image from "next/image";
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

type Entry = {
  role: string;
  org: string;
  dates: string;
  summary: string;
  tags?: string[];
};

const experience: Entry[] = [
  {
    role: "AI Security Graduate Researcher",
    org: "CWRU · PEAT AI Lab",
    dates: "May 2026 — Present",
    summary:
      "Building an unsupervised log-anomaly framework that pairs transformer/vLLM embedders with classical outlier detectors to flag threats across 10M+ events at 0.98+ AUROC.",
    tags: ["Qwen3", "DeepSVDD", "SLURM", "HPC"],
  },
  {
    role: "Machine Learning Engineer Intern",
    org: "Genentech",
    dates: "Jun — Dec 2025",
    summary:
      "Cut the Bioassay department's experimental workload by 30% with ML models that predict drug-potency failures. Shipped inference endpoints to AWS EKS via GitLab CI/CD.",
    tags: ["PyTorch", "AWS EKS", "Dataiku", "SQL"],
  },
  {
    role: "Deep Learning Undergraduate Researcher",
    org: "CWRU · INVent Lab",
    dates: "Sep 2024 — Nov 2025",
    summary:
      "Trained a UNet on MedSAM pseudo-labels for glomeruli segmentation on pathology slides, lifting baseline accuracy by 19% while cutting HPC training time 3×.",
    tags: ["MedSAM", "UNet", "CUDA"],
  },
  {
    role: "Undergraduate Researcher",
    org: "CWRU · SDLE — incl. LLNL Data Science Challenge",
    dates: "Oct 2023 — Aug 2024",
    summary:
      "Ported a solar-panel degradation R package to Python and fit physics-based and regression models for power loss; first author on a poster presented at IEEE 2024 in Seattle.",
    tags: ["pvlib", "Regression", "ECG DL"],
  },
];

const projects: Entry[] = [
  {
    role: "AcoustiCare",
    org: "Software Engineering Lead",
    dates: "Nov 2025 — Present",
    summary:
      "A HIPAA-compliant voice-screening iOS app for ENT clinics. Computes 20+ clinical acoustic metrics from a phone recording — replacing a multi-hour workflow with one that returns results in seconds. Validated with clinicians at UH Cleveland Medical Center.",
    tags: ["Django", "AWS ECS", "React Native", "PostgreSQL"],
  },
  {
    role: "Rival",
    org: "CWRU Hackathon",
    dates: "Jan 2026",
    summary:
      "A GenAI 1v1 mobile game that grades real GitHub and Notion contributions via OAuth and Gemini-driven prompt pipelines to declare a winner.",
    tags: ["Gemini API", "FastAPI", "OAuth 2.0"],
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
      <div>
        <h3 className="text-base font-medium text-foreground">
          {entry.role}
          <span className="text-muted font-normal"> · {entry.org}</span>
        </h3>
      </div>
      <span className="font-mono text-xs text-muted tabular-nums whitespace-nowrap pt-1">
        {entry.dates}
      </span>
      <p className="col-span-2 text-[15px] leading-relaxed text-foreground/80 max-w-3xl mt-1">
        {entry.summary}
      </p>
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
                  Email
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
              I&rsquo;m an M.S. student studying Computer Science at Case Western Reserve University (graduating in December 2027).
              I have been programming for several years and I have the most experience in Python, TypeScript, JavaScript, HTML/CSS, and Java.
              Outside of class, I work as a researcher at the Case PEAT AI Lab where I am applying embedding models and detection algorithms
              to identify anomalies in large-scale network flow datasets (see Experience Section). I am also passionate about building fullstack applications and cloud
              infrastructure serving hundreds of users, like AcoustiCare and Rival (see Projects Section). I&rsquo;m specifically drawn to problems
              that sit at the forefront of innovative technology and real-world impact. I want to work on fullstack applications, ML/AI products,
              and large-scale distributed systems that solve meaningful problems for users.
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
                  AcoustiCare — PRISE grant ($1,320) + Silicon Valley alumni
                  mentorship
                </span>
                <span className="font-mono text-xs text-muted tabular-nums">
                  2025
                </span>
              </li>
              <li className="grid grid-cols-[1fr_auto] gap-x-6 py-4">
                <span className="text-[15px] text-foreground/85">
                  President&rsquo;s Volunteer Service Award — Bronze
                </span>
                <span className="font-mono text-xs text-muted tabular-nums">
                  2022
                </span>
              </li>
            </ul>
          </Reveal>
        </section>

        {/* Off the Clock */}
        <section className="mt-24 space-y-6">
          <SectionHeader id="off-the-clock" label="Off the Clock" kicker="06" />
          <Reveal>
            <p className="text-[15.5px] leading-[1.75] text-foreground/85 max-w-3xl">
              Outside of work I shoot a fair amount of{" "}
              <span className="text-foreground italic font-serif text-[17px]">
                photography
              </span>{" "}
              — mostly landscapes from{" "}
              <span className="text-foreground italic font-serif text-[17px]">
                hikes
              </span>
              , which I try to chase on most free weekends. I grew up playing{" "}
              <span className="text-foreground italic font-serif text-[17px]">
                baseball
              </span>{" "}
              and still find any excuse for a pickup game of{" "}
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
        </section>

        {/* Footer */}
        <Reveal as="div">
          <footer className="mt-32 pt-8 border-t border-hairline flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-1">
              <p className="font-serif text-2xl text-foreground">
                Let&rsquo;s talk.
              </p>
              <a
                href="mailto:surajkmr4218@gmail.com"
                className="link-underline text-sm text-muted"
              >
                surajkmr4218@gmail.com
              </a>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              © {new Date().getFullYear()} Suraj Kumar
            </span>
          </footer>
        </Reveal>
      </main>
    </>
  );
}
