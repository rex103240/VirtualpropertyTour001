/**
 * Persistent thin header bar pinned to the top of the screen.
 * Shows the property identity at all times.
 */
const PropertyHeader = () => (
  <header className="property-header">
    <span className="prop-name">The Bird House</span>
    <span className="prop-sep">·</span>
    <span className="prop-detail">Millhaven Homes</span>
    <span className="prop-sep">·</span>
    <span className="prop-detail">Utah Valley, UT</span>
    <div className="prop-price">₹41,50,00,000</div>
  </header>
);

export default PropertyHeader;
