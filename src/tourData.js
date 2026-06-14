export const timeToFrame = (min, sec) => (min * 60 + sec) * 15;

export const TOUR_STOPS = [

  // ── Phase 1: The Hero & Introduction ─────────────────────────────────
  {
    startFrame: timeToFrame(0, 0), endFrame: timeToFrame(0, 5),
    badge: "Welcome",
    title: "The Bird House",
    description: "$5,000,000 · 2024 Utah Valley Parade of Homes · Millhaven Homes",
    align: "center"
  },
  {
    startFrame: timeToFrame(0, 5), endFrame: timeToFrame(0, 11),
    badge: "Curb Appeal",
    title: "The Approach",
    description: "Sweeping stone steps, manicured grounds, and a commanding façade — your first impression is unforgettable.",
    align: "center"
  },
  {
    startFrame: timeToFrame(0, 11), endFrame: timeToFrame(0, 16),
    badge: "Entry",
    title: "The Grand Foyer",
    description: "Soaring ceilings and custom millwork greet every guest the moment they step inside.",
    align: "left"
  },
  {
    startFrame: timeToFrame(0, 16), endFrame: timeToFrame(0, 22),
    badge: "Ground Floor",
    title: "Executive Office",
    description: "A dedicated private workspace with architectural detail and natural light — built for those who work at the highest level.",
    align: "left"
  },

  // ── Phase 2: Core Living Spaces ───────────────────────────────────────
  {
    startFrame: timeToFrame(0, 30), endFrame: timeToFrame(0, 36),
    badge: "Main Living",
    title: "The Great Room",
    description: "Double-height ceilings, a statement fireplace, and floor-to-ceiling windows that frame the mountain view.",
    align: "right"
  },
  {
    startFrame: timeToFrame(0, 36), endFrame: timeToFrame(0, 41),
    badge: "Formal Dining",
    title: "The Dining Room",
    description: "Designed for intimate dinners and grand gatherings alike — seated beneath custom pendant lighting.",
    align: "left"
  },
  {
    startFrame: timeToFrame(0, 41), endFrame: timeToFrame(0, 46),
    badge: "Chef's Kitchen",
    title: "Kitchen Island",
    description: "A monumental quartzite island anchors the kitchen — perfect for entertaining and everyday elegance.",
    align: "right"
  },
  {
    startFrame: timeToFrame(0, 46), endFrame: timeToFrame(0, 51),
    badge: "Chef's Kitchen",
    title: "Culinary Wall",
    description: "Commercial-grade Wolf range, custom black range hood, and hand-selected cabinetry for the serious cook.",
    align: "left"
  },
  {
    startFrame: timeToFrame(0, 51), endFrame: timeToFrame(0, 59),
    badge: "Chef's Kitchen",
    title: "Prep Kitchen",
    description: "A fully equipped secondary kitchen keeps entertaining seamless — hidden from guests, essential for the host.",
    align: "left"
  },
  {
    startFrame: timeToFrame(0, 59), endFrame: timeToFrame(1, 10),
    badge: "Chef's Kitchen",
    title: "Prep Hub",
    description: "Continuous counter space, additional storage, and a dedicated sink — every detail considered.",
    align: "right"
  },
  {
    startFrame: timeToFrame(1, 10), endFrame: timeToFrame(1, 16),
    badge: "Storage",
    title: "Walk-In Pantry",
    description: "Custom shelving, a butler's counter, and organizational cabinetry built for the modern family.",
    align: "left"
  },

  // ── Phase 3: Secondary Ground Wing ────────────────────────────────────
  {
    startFrame: timeToFrame(1, 20), endFrame: timeToFrame(1, 29),
    badge: "Ground Floor",
    title: "Powder Room",
    description: "Dark walnut, aged brass fixtures, and moody tile — a deliberate contrast that leaves a lasting impression.",
    align: "right"
  },
  {
    startFrame: timeToFrame(1, 29), endFrame: timeToFrame(1, 36),
    badge: "Ground Floor",
    title: "Mudroom",
    description: "Geometric tile floors, custom built-in lockers, and seamless access from the garage — function meets beauty.",
    align: "left"
  },
  {
    startFrame: timeToFrame(1, 48), endFrame: timeToFrame(1, 59),
    badge: "Primary Suite",
    title: "The Retreat",
    description: "A sanctuary-level master bedroom with a canopy bed, private patio access, and sweeping backyard views.",
    align: "right"
  },
  {
    startFrame: timeToFrame(1, 59), endFrame: timeToFrame(2, 10),
    badge: "Primary Suite",
    title: "Fireside Sitting Room",
    description: "A private white fireplace and curated sitting lounge — the indoor/outdoor lifestyle, perfected.",
    align: "left"
  },
  {
    startFrame: timeToFrame(2, 10), endFrame: timeToFrame(2, 20),
    badge: "Primary Bath",
    title: "The Wet Room",
    description: "Marble slab walls, a rainfall ceiling fixture, and a soaking tub — spa-grade luxury in your own home.",
    align: "left"
  },
  {
    startFrame: timeToFrame(2, 27), endFrame: timeToFrame(2, 37),
    badge: "Primary Closet",
    title: "Boutique Wardrobe",
    description: "A bespoke walk-in closet island with custom joinery, lit display shelving, and a dedicated dressing area.",
    align: "right"
  },

  // ── Phase 4: Upper Level ──────────────────────────────────────────────
  {
    startFrame: timeToFrame(2, 37), endFrame: timeToFrame(2, 48),
    badge: "Upper Level",
    title: "Guest Suite",
    description: "A generously proportioned en-suite bedroom — every guest sleeps like a resident.",
    align: "left"
  },
  {
    startFrame: timeToFrame(2, 48), endFrame: timeToFrame(3, 3),
    badge: "Upper Level",
    title: "Laundry & Craft Room",
    description: "Custom cabinetry, full-size appliances, and dedicated workspace — thoughtfully placed on the bedroom level.",
    align: "right"
  },
  {
    startFrame: timeToFrame(3, 3), endFrame: timeToFrame(3, 15),
    badge: "Upper Level",
    title: "Open Catwalk",
    description: "A dramatic open railing corridor looks down into the Great Room — a perspective that never gets old.",
    align: "left"
  },
  {
    startFrame: timeToFrame(3, 15), endFrame: timeToFrame(3, 26),
    badge: "Upper Level",
    title: "Upper Ascent",
    description: "Hand-crafted wooden staircase with architectural paneling — each floor a discovery.",
    align: "right"
  },
  {
    startFrame: timeToFrame(3, 35), endFrame: timeToFrame(3, 48),
    badge: "Upper Level",
    title: "Junior Suite",
    description: "A sloped ceiling and a custom hanging chair give this room a character unlike any other.",
    align: "left"
  },
  {
    startFrame: timeToFrame(3, 48), endFrame: timeToFrame(4, 3),
    badge: "Upper Level",
    title: "Suite Bath & Closet",
    description: "A private gray-toned bathroom and a white walk-in closet — thoughtfully compact and fully featured.",
    align: "right"
  },
  {
    startFrame: timeToFrame(4, 3), endFrame: timeToFrame(4, 19),
    badge: "Signature View",
    title: "The Overlook",
    description: "A long panoramic sweep from the upper railing — the entire Great Room unfolds beneath you.",
    align: "center"
  },
  {
    startFrame: timeToFrame(4, 19), endFrame: timeToFrame(4, 33),
    badge: "Upper Level",
    title: "Teen Lounge",
    description: "A bold dark accent wall, guitar art, and a private layout designed for the next generation.",
    align: "left"
  },
  {
    startFrame: timeToFrame(4, 33), endFrame: timeToFrame(4, 44),
    badge: "Upper Level",
    title: "Jack-and-Jill Bath",
    description: "A symmetrical double-vanity bathroom with custom wooden cabinetry — shared access, private by design.",
    align: "center"
  },
  {
    startFrame: timeToFrame(4, 44), endFrame: timeToFrame(4, 54),
    badge: "Upper Level",
    title: "Utility Room",
    description: "Olive-toned cabinetry and dedicated sorting stations keep every household operation running cleanly.",
    align: "left"
  },
  {
    startFrame: timeToFrame(4, 54), endFrame: timeToFrame(5, 9),
    badge: "Guest Room",
    title: "The Blue Room",
    description: "A soft blue palette, a window bench, and warm afternoon light — the coziest room in the house.",
    align: "right"
  },
  {
    startFrame: timeToFrame(5, 9), endFrame: timeToFrame(5, 18),
    badge: "Guest Bath",
    title: "Green Tile Bath",
    description: "Deep forest green handmade tile from floor to ceiling — bold, beautiful, and completely unique.",
    align: "left"
  },
  {
    startFrame: timeToFrame(5, 18), endFrame: timeToFrame(5, 34),
    badge: "Kids' Level",
    title: "Custom Bunk Room",
    description: "Built-in bunk steps, lounge bean bags, and curated nooks — a children's suite designed to inspire imagination.",
    align: "right"
  },

  // ── Phase 5: Entertainment Level ──────────────────────────────────────
  {
    startFrame: timeToFrame(5, 46), endFrame: timeToFrame(6, 7),
    badge: "Lower Level",
    title: "Basement Lounge",
    description: "A full bar, lounge seating, and an open family room — the social hub of the lower level.",
    align: "left"
  },
  {
    startFrame: timeToFrame(6, 7), endFrame: timeToFrame(6, 14),
    badge: "Smart Home",
    title: "Technology Core",
    description: "A dedicated server room housing the full smart home infrastructure — automation, security, and AV, centralized.",
    align: "right"
  },
  {
    startFrame: timeToFrame(6, 14), endFrame: timeToFrame(6, 25),
    badge: "Lower Level",
    title: "Reading Nook",
    description: "A curated white armchair corner tucked under the stairs — quiet, cozy, and entirely unexpected.",
    align: "right"
  },
  {
    startFrame: timeToFrame(6, 25), endFrame: timeToFrame(6, 44),
    badge: "Lower Level",
    title: "Basement Suite",
    description: "A private bedroom with its own en-suite — ideal for long-term guests or a live-in nanny suite.",
    align: "center"
  },
  {
    startFrame: timeToFrame(6, 44), endFrame: timeToFrame(6, 55),
    badge: "Lower Level",
    title: "Custom Shower",
    description: "Sleek wood vanity and precision-laid custom tile — luxury finishes carried all the way to the basement.",
    align: "left"
  },
  {
    startFrame: timeToFrame(7, 13), endFrame: timeToFrame(7, 27),
    badge: "Entertainment",
    title: "The Arena",
    description: "Ping-pong, a pool table, and a private theater — all in one monumental open space.",
    align: "center"
  },
  {
    startFrame: timeToFrame(7, 28), endFrame: timeToFrame(7, 46),
    badge: "Kids' Zone",
    title: "The Playhouse",
    description: "A fully built custom cottage playroom with a tent — whimsy and wonder, architecturally designed.",
    align: "left"
  },
  {
    startFrame: timeToFrame(8, 3), endFrame: timeToFrame(8, 18),
    badge: "Sports & Fitness",
    title: "Golf Simulator",
    description: "A private green room golf simulator and a personal pull-up station — train like an athlete at home.",
    align: "right"
  },
  {
    startFrame: timeToFrame(8, 18), endFrame: timeToFrame(8, 28),
    badge: "Sports & Fitness",
    title: "Fitness Center",
    description: "A fully equipped private gym with structural columns, rubber flooring, and natural light.",
    align: "left"
  },
  {
    startFrame: timeToFrame(8, 29), endFrame: timeToFrame(8, 39),
    badge: "Signature Feature",
    title: "The Birdhouse Halfpipe",
    description: "An indoor wooden skate bowl — the single most talked-about room in the entire home.",
    align: "left"
  },
  {
    startFrame: timeToFrame(8, 40), endFrame: timeToFrame(8, 59),
    badge: "Sports & Fitness",
    title: "Indoor Basketball",
    description: "A regulation indoor basketball court — play every day, rain or shine, regardless of season.",
    align: "right"
  },

  // ── Phase 6: The Backyard Resort ──────────────────────────────────────
  {
    startFrame: timeToFrame(9, 35), endFrame: timeToFrame(9, 44),
    badge: "Outdoor Living",
    title: "Indoor to Outdoor",
    description: "Full-width glass sliders dissolve the boundary between inside and out — the transition is seamless.",
    align: "left"
  },
  {
    startFrame: timeToFrame(9, 45), endFrame: timeToFrame(10, 0),
    badge: "Outdoor Living",
    title: "Casual Kitchen",
    description: "A secondary kitchen lounge opens directly to the pool deck — effortless al-fresco dining.",
    align: "right"
  },
  {
    startFrame: timeToFrame(10, 1), endFrame: timeToFrame(10, 6),
    badge: "Outdoor Living",
    title: "Covered Patio",
    description: "A brick outdoor fireplace and a built-in BBQ station define the covered entertaining terrace.",
    align: "left"
  },
  {
    startFrame: timeToFrame(10, 7), endFrame: timeToFrame(10, 14),
    badge: "Outdoor Living",
    title: "Exterior Dining",
    description: "A wood-beamed porch, a full sectional, and a dining set — the ultimate outdoor living room.",
    align: "center"
  },
  {
    startFrame: timeToFrame(10, 15), endFrame: timeToFrame(10, 36),
    badge: "The Bird House",
    title: "The Resort",
    description: "Resort-style pool, waterslide, hot tub, firepit, pickleball court — this is not a backyard. This is a destination.",
    align: "center",
    showCta: true
  }
];
