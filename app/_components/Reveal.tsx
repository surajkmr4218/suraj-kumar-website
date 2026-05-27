"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  direction?: "up" | "left" | "right";
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  direction = "up",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform =
    direction === "left"
      ? "opacity-0 -translate-x-10 blur-[2px]"
      : direction === "right"
      ? "opacity-0 translate-x-10 blur-[2px]"
      : "opacity-0 translate-y-6 blur-[2px]";

  const visibleTransform =
    direction === "up"
      ? "opacity-100 translate-y-0 blur-0"
      : "opacity-100 translate-x-0 blur-0";

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? visibleTransform : hiddenTransform
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
