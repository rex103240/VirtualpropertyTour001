import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 9552;
const timeToFrame  = (m, s) => (m * 60 + s) * 15;

// Floor phases tied to actual video sections
const FLOORS = [
  { label: "Ground Floor",        startFrame: 0,                          endFrame: timeToFrame(2, 37) },
  { label: "Upper Level",         startFrame: timeToFrame(2, 37),         endFrame: timeToFrame(5, 46) },
  { label: "Entertainment Level", startFrame: timeToFrame(5, 46),         endFrame: timeToFrame(9,  0) },
  { label: "Backyard Resort",     startFrame: timeToFrame(9,  0),         endFrame: TOTAL_FRAMES       },
];

const FloorIndicator = ({ scrollContainerRef }) => {
  const labelRef  = useRef(null);
  const prevFloor = useRef(null);

  useEffect(() => {
    if (!scrollContainerRef?.current) return;

    ScrollTrigger.create({
      trigger: scrollContainerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const frame = Math.round(self.progress * (TOTAL_FRAMES - 1));
        const floor = FLOORS.find(f => frame >= f.startFrame && frame < f.endFrame);
        if (!floor || floor === prevFloor.current) return;
        prevFloor.current = floor;

        // Animate label swap
        const el = labelRef.current;
        if (!el) return;
        gsap.to(el, {
          opacity: 0, y: 6, duration: 0.2,
          onComplete: () => {
            el.textContent = floor.label;
            gsap.to(el, { opacity: 1, y: 0, duration: 0.3 });
          }
        });
      }
    });
  }, [scrollContainerRef]);

  return (
    <div className="floor-indicator">
      <div className="floor-line" />
      <span className="floor-label" ref={labelRef}>Ground Floor</span>
    </div>
  );
};

export default FloorIndicator;
