import { forwardRef } from 'react';

/**
 * Architectural Blueprint style overlay.
 * Uses fine lines, technical markers, and precision alignment.
 */
const FeatureOverlay = forwardRef(({ title, description, badge, align = "left", showCta = false }, ref) => {
  return (
    <div className={`feature-overlay align-${align}`} ref={ref}>
      <div className="bp-content">
        <div className="bp-header">
          <span className="bp-marker">REF // {badge}</span>
        </div>
        
        <div className="bp-line-wrapper">
          <div className="bp-line"></div>
          <div className="bp-crosshair">+</div>
        </div>
        
        <h2 className="bp-title">{title}</h2>
        
        <div className="bp-footer">
          <p className="bp-desc">{description}</p>
        </div>
        
        {showCta && (
          <a href="#contact" className="btn-cta blueprint-cta">[ INITIATE INQUIRY ]</a>
        )}
      </div>
    </div>
  );
});

export default FeatureOverlay;
