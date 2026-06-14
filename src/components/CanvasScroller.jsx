import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Tuning knobs ────────────────────────────────────────────────────────
const FRAMES_PER_SHEET = 25;
const COLS = 5;
const ROWS = 5;
const FRAME_W = 1280;
const FRAME_H = 720;

const PRELOAD_AHEAD_SHEETS  = 5;   // ~125 frames ahead
const PRELOAD_BEHIND_SHEETS = 2;   // ~50 frames behind
const CACHE_MAX_SHEETS      = 40;  // ~1000 frames in RAM max

const CanvasScroller = ({ frameCount = 9552 }) => {
  const canvasRef        = useRef(null);
  const cacheRef         = useRef(new Map());       // frame# → HTMLImageElement
  const cacheOrderRef    = useRef([]);              // insertion order for eviction
  const currentFrameRef  = useRef(1);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [loadedCount, setLoadedCount]   = useState(0);
  const [introState, setIntroState]     = useState('loading'); // 'loading' | 'ready'
  const [displayPct, setDisplayPct]     = useState(0);
  const [loadText, setLoadText]         = useState("Preparing the estate...");

  // ── Helpers ──────────────────────────────────────────────────────────
  const totalSheets = Math.ceil(frameCount / FRAMES_PER_SHEET);
  const sheetSrc = (idx) => `/sprites/sheet_${String(idx).padStart(4, '0')}.jpg`;

  // GSAP scroll trigger to cross-fade the Hero Poster into the Video on scroll
  useEffect(() => {
    if (introState === 'ready') {
      const st = ScrollTrigger.create({
        trigger: document.querySelector('.scroll-container'),
        start: '0% top',
        end: '400px top',
        scrub: true,
        animation: gsap.to('.hero-poster', { opacity: 0, display: 'none', ease: 'none' })
      });
      return () => st.kill();
    }
  }, [introState]);

  const evictOldest = () => {
    while (cacheOrderRef.current.length > CACHE_MAX_SHEETS) {
      const oldest = cacheOrderRef.current.shift();
      cacheRef.current.delete(oldest);
    }
  };

  const loadSheet = (sheetIdx) => {
    if (sheetIdx < 0 || sheetIdx >= totalSheets) return;
    if (cacheRef.current.has(sheetIdx)) return;

    const img = new Image();
    img.src = sheetSrc(sheetIdx);
    img.onload = () => {
      cacheRef.current.set(sheetIdx, img);
      cacheOrderRef.current.push(sheetIdx);
      evictOldest();
      setLoadedCount(c => c + 1);

      // If this is the very first sheet, draw frame 1 immediately
      if (sheetIdx === 0) drawFrame(1);
    };
  };

  const drawFrame = (n) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const zeroIdx = n - 1;
    const sheetIdx = Math.floor(zeroIdx / FRAMES_PER_SHEET);
    const localIdx = zeroIdx % FRAMES_PER_SHEET;
    
    const col = localIdx % COLS;
    const row = Math.floor(localIdx / COLS);
    
    const img = cacheRef.current.get(sheetIdx);
    if (img) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        col * FRAME_W, row * FRAME_H, FRAME_W, FRAME_H, // Source
        0, 0, canvas.width, canvas.height               // Destination
      );
    }
  };

  const preloadWindow = (currentFrame) => {
    const currentSheet = Math.floor((currentFrame - 1) / FRAMES_PER_SHEET);
    
    // Preload ahead
    for (let i = currentSheet; i <= Math.min(totalSheets - 1, currentSheet + PRELOAD_AHEAD_SHEETS); i++) {
      loadSheet(i);
    }
    // Keep buffer behind
    for (let i = Math.max(0, currentSheet - PRELOAD_BEHIND_SHEETS); i < currentSheet; i++) {
      loadSheet(i);
    }
  };

  // ── Init ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width  = 1280;
    canvas.height = 720;

    // Eagerly preload the first 4 sheets (100 frames) so the hero is instant
    for (let i = 0; i < Math.min(4, totalSheets); i++) loadSheet(i);

    const currentFrameObj = { frame: 1 };

    const onUpdate = () => {
      const n = Math.max(1, Math.min(frameCount, Math.round(currentFrameObj.frame)));
      if (n === currentFrameRef.current) return;
      currentFrameRef.current = n;
      setCurrentFrame(n);

      // Draw best available frame (fallback to nearest cached)
      if (cacheRef.current.has(n)) {
        drawFrame(n);
      } else {
        // Find closest cached frame to avoid blank canvas
        for (let delta = 1; delta < 15; delta++) {
          if (cacheRef.current.has(n - delta)) { drawFrame(n - delta); break; }
          if (cacheRef.current.has(n + delta)) { drawFrame(n + delta); break; }
        }
      }

      // Preload the window around current position
      preloadWindow(n);
    };

    gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          currentFrameObj.frame = 1 + self.progress * (frameCount - 1);
          onUpdate();
        }
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [frameCount]);

  // ── Cinematic Loader (Forced Showcase Sequence) ───────────────────────
  useEffect(() => {
    // Forces a luxurious 4-second entry sequence regardless of cache speed
    const tl = gsap.timeline();
    
    tl.to({ p: 0 }, {
      p: 35, duration: 1.2, ease: "power2.out",
      onUpdate: function() { setDisplayPct(Math.round(this.targets()[0].p)); }
    })
    .call(() => setLoadText("Polishing the fixtures..."))
    .to({ p: 35 }, {
      p: 75, duration: 1.5, ease: "power1.inOut",
      onUpdate: function() { setDisplayPct(Math.round(this.targets()[0].p)); }
    })
    .call(() => setLoadText("Setting the grand entrance..."))
    .to({ p: 75 }, {
      p: 100, duration: 1.2, ease: "power2.inOut",
      onUpdate: function() { setDisplayPct(Math.round(this.targets()[0].p)); }
    });

    return () => tl.kill();
  }, []);

  // Real progress
  const initTarget  = Math.min(4, totalSheets); // 4 sheets = ~100 frames
  const realPct     = Math.min(100, Math.round((loadedCount / initTarget) * 100));

  useEffect(() => {
    // Transition to 'awaiting-entry' when visual loader and real frames are ready
    if (introState === 'loading' && displayPct >= 100 && realPct >= 100) {
      setTimeout(() => setIntroState('awaiting-entry'), 400); 
    }
  }, [displayPct, realPct, introState]);

  useEffect(() => {
    if (introState !== 'ready') {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [introState]);

  return (
    <>
      <div className="canvas-container">
        <canvas ref={canvasRef} />
      </div>

      {/* ACT 2: EDITORIAL POSTER (Static Cover) */}
      <div className="hero-poster">
        <div className="hero-content">
          <h1 className="hero-title">The Bird House</h1>
          <p className="hero-subtitle">BY MILLHAVEN HOMES</p>
          <div className="hero-scroll-indicator">
            <span className="scroll-text">SCROLL TO EXPLORE</span>
            <div className="scroll-line"></div>
          </div>
        </div>
      </div>

      {/* ACT 1: LOADING CURTAIN */}
      <div className={`loading-screen ${introState === 'ready' ? 'fade-out' : ''}`}>
        <div className="loading-top-bar">
          <div className="loading-bar-fill" style={{ width: `${displayPct}%` }} />
        </div>
        <div className="loading-center">
          {introState === 'loading' && (
            <h1 className="loading-serif">{loadText}</h1>
          )}
          {introState === 'awaiting-entry' && (
            <button className="btn-enter-estate" onClick={() => setIntroState('ready')}>
              [ ENTER THE ESTATE ]
            </button>
          )}
        </div>
      </div>

      {/* Debug UI */}
      <div className="debug-ui">
        <h3>Debug</h3>
        <p>Frame: <span>{currentFrame}</span></p>
        <p style={{ fontSize: '0.7rem', color: 'var(--alpine)', marginTop: 4 }}>
          Cached: {cacheRef.current.size} / {frameCount}
        </p>
      </div>
    </>
  );
};

export default CanvasScroller;
