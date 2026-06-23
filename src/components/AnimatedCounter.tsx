"use client";

import { useEffect, useRef, useState } from "react";

function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { target: 0, suffix: value };
  return { target: Number(match[1]), suffix: match[2] };
}

type AnimatedCounterProps = {
  value: string;
  duration?: number;
  className?: string;
};

export default function AnimatedCounter({ value, duration = 1800, className }: AnimatedCounterProps) {
  const { target, suffix } = parseStatValue(value);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const runAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) runAnimation();
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      runAnimation();
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <p ref={ref} className={className}>
      {count}
      {suffix}
    </p>
  );
}
