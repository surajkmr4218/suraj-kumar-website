"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Recognition" },
  { id: "off-the-clock", label: "Off the Clock" },
];

export function SideRail() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-10 flex-col gap-3"
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group relative flex items-center gap-3 py-1"
          >
            <span
              className={`block h-px transition-all duration-500 ease-out ${
                isActive
                  ? "w-8 bg-foreground"
                  : "w-3 bg-foreground/30 group-hover:w-6 group-hover:bg-foreground/70"
              }`}
            />
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.18em] transition-all duration-300 ${
                isActive
                  ? "text-foreground opacity-100"
                  : "text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {s.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
