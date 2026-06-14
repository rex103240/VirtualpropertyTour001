import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CanvasScroller from './components/CanvasScroller';
import FeatureOverlay from './components/FeatureOverlay';
import StickyTimeline from './components/StickyTimeline';
import PropertyHeader from './components/PropertyHeader';
import FloorIndicator from './components/FloorIndicator';
import { TOUR_STOPS, timeToFrame } from './tourData';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 9552;



function App() {
  const containerRef  = useRef(null);
  const overlaysRef   = useRef(null);
  const overlayRefs   = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ── 1. Staggered editorial animations for each overlay ───────────────
    TOUR_STOPS.forEach((stop, index) => {
      const el = overlayRefs.current[index];
      if (!el) return;

      const startPct = (stop.startFrame / TOTAL_FRAMES) * 100;
      const endPct   = (stop.endFrame   / TOTAL_FRAMES) * 100;

      // Select each typographic child individually for stagger
      const children = el.querySelectorAll('.bp-marker, .bp-line, .bp-title, .bp-desc, .btn-cta');

      // Hide parent completely until active to prevent overlapping
      gsap.set(el, { autoAlpha: 0 });
      gsap.set(children, { opacity: 0, x: stop.align === 'right' ? 22 : -22 });

      ScrollTrigger.create({
        trigger: container,
        start: `${startPct}% top`,
        end:   `${endPct}% top`,
        onEnter: () => {
          gsap.set(el, { autoAlpha: 1 });
          gsap.to(children, {
            opacity: 1, x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
          });
        },
        onLeave: () => {
          gsap.to(children, {
            opacity: 0, x: stop.align === 'right' ? -16 : 16,
            duration: 0.4,
            stagger: 0.05,
            ease: 'power2.in',
            onComplete: () => gsap.set(el, { autoAlpha: 0 })
          });
        },
        onEnterBack: () => {
          gsap.set(el, { autoAlpha: 1 });
          gsap.to(children, {
            opacity: 1, x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
          });
        },
        onLeaveBack: () => {
          gsap.to(children, {
            opacity: 0, x: stop.align === 'right' ? 22 : -22,
            duration: 0.35,
            stagger: 0.04,
            ease: 'power2.in',
            onComplete: () => gsap.set(el, { autoAlpha: 0 })
          });
        },
      });
    });


    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="app-wrapper">

      <PropertyHeader />

      <div className="scroll-container" ref={containerRef}>

        {/* Fixed video canvas */}
        <CanvasScroller frameCount={TOTAL_FRAMES} />

        {/* All editorial text overlays */}
        <div className="overlays-container" ref={overlaysRef}>
          {TOUR_STOPS.map((stop, index) => (
            <FeatureOverlay
              key={index}
              ref={el => overlayRefs.current[index] = el}
              title={stop.title}
              description={stop.description}
              badge={stop.badge}
              align={stop.align}
              showCta={stop.showCta || false}
            />
          ))}
        </div>

        {/* Floor level indicator — bottom left */}
        <FloorIndicator scrollContainerRef={containerRef} />

        {/* Brass progress timeline — right edge */}
        <StickyTimeline scrollContainerRef={containerRef} />

      </div>
    </div>
  );
}

export default App;
