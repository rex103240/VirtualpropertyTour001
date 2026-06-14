import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroOverlay = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    // Fade out completely within the first 4% of scroll
    ScrollTrigger.create({
      trigger: document.querySelector('.scroll-container'),
      start: '0% top',
      end: '4% top',
      scrub: true,
      animation: gsap.to(el, { opacity: 0, y: -40, ease: 'none' })
    });
  }, []);

  return (
    <div className="hero-overlay" ref={heroRef}>
      <div className="hero-content">
        <h1 className="hero-title">The Bird House</h1>
        <p className="hero-subtitle">BY MILLHAVEN HOMES</p>
        <div className="hero-scroll-indicator">
          <span className="scroll-text">SCROLL TO EXPLORE</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroOverlay;
