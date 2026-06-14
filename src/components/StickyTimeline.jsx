import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  { pct: 0    },
  { pct: 4.7  },
  { pct: 12.6 },
  { pct: 17.0 },
  { pct: 24.7 },
  { pct: 49.5 },
  { pct: 54.5 },
  { pct: 68.0 },
  { pct: 75.7 },
  { pct: 79.8 },
  { pct: 90.3 },
];

const StickyTimeline = ({ scrollContainerRef }) => {
  const fillRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    if (!scrollContainerRef?.current) return;

    ScrollTrigger.create({
      trigger: scrollContainerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3,
      onUpdate: (self) => {
        const pct = self.progress * 100;
        if (fillRef.current) fillRef.current.style.height = `${pct}%`;
        dotsRef.current.forEach((dot, i) => {
          if (!dot) return;
          dot.classList.toggle('active', pct >= MILESTONES[i].pct);
        });
      }
    });
  }, [scrollContainerRef]);

  return (
    <div className="sticky-timeline" aria-hidden="true">
      <div className="timeline-track" />
      <div className="timeline-fill" ref={fillRef} />
      {MILESTONES.map((m, i) => (
        <div
          key={i}
          className="timeline-milestone"
          ref={el => dotsRef.current[i] = el}
          style={{ top: `${m.pct}%` }}
        />
      ))}
    </div>
  );
};

export default StickyTimeline;
