// Placeholder portfolio entries. Replace `image` with a real file under
// public/ or src/assets/ and update title/category/alt as real work comes
// in. The homepage grid just maps over this array — add, remove, or
// reorder entries here; no other file needs to change.
export const portfolioItems = [
  {
    title: 'Illustration',
    category: 'Sketches & doodles',
    image: '/portfolio/ig-nobel-stand.webp',
    alt: 'Detailed pen doodle of "The Ig Nobel Stand," a newsstand booth packed with tiny references to past Ig Nobel Prizes and Annals of Improbable Research issues',
    slug: 'ig-nobel-stand',
    description:
      'The Ig Nobel News Stand. This piece is one of several doodles I made for the Ig History Posters, on exhibit at the 2026 Ig Nobel Prize ceremony. Look closely, and you may spot familiar items, past prizes, the Annals of Improbable Research, and more.',
    framed: true,
  },
  {
    title: 'Live Drawing for the Ig Nobels',
    category: 'Science illustration',
    image: '/portfolio/ig-live-drawing-cover.webp',
    alt: 'Drawing live on a lecture-hall chalkboard at the Ig Nobel Prize ceremony, while performers in a yellow hard hat, a top hat and an inflatable cow costume act out a "Biology Demonstration" in front of the board',
    slug: 'ig-nobel-live-drawing',
    description:
      "I've had the glorious honour of illustrating the Ig Nobel Prizes, including at the recent ceremonies at MIT in 2024 and in Zurich in 2026 (<a href=\"https://lnkd.in/p/gVC-Bckh\" target=\"_blank\" rel=\"noopener noreferrer\">here's my LinkedIn post</a>).",
    framed: true,
    gallery: [
      {
        image: '/portfolio/ig-live-drawing-cover.webp',
        alt: 'Drawing live on a lecture-hall chalkboard at the Ig Nobel Prize ceremony, while performers in a yellow hard hat, a top hat and an inflatable cow costume act out a "Biology Demonstration" in front of the board (links to a video)',
        link: 'https://youtu.be/ukBwV9Lap2A',
        linkLabel: 'Watch the ceremony and my live drawings',
      },
      {
        image: '/portfolio/ig-zurich-posters.webp',
        link: 'https://youtu.be/I4l-zFWZCS0',
        linkLabel: 'Watch the ceremony and my live drawings',
        alt: 'Kneeling on a wooden floor in front of a stage, gesturing to a row of black chalkboard posters hand-drawn for the Ig Nobel Prizes in Economics, Chemistry, Medicine, Biology, Physics and Technology',
      },
    ],
  },
  {
    title: 'Falling Walls and Berlin Science Week 2026',
    category: 'Events',
    image: '/portfolio/falling-walls-talk.webp',
    alt: 'A packed auditorium with a speaker on stage beside a screen titled "How to live-draw: Improbable Research"',
    slug: 'falling-walls-berlin-science-week',
    description:
      "In November I got to draw and talk about drawing. I gave a short talk on how to live-draw Improbable Research at the Falling Walls Science Summit and at Berlin Science Week. I'll admit I struggled with what to talk about at first. Normally my presentations revolve around scientific data, and this was my first time talking about drawing. I suppose I did have data: data on what it's like to live-draw Improbable Research. In the end, what I wanted to convey was my love of drawing: how putting pen to paper makes all the difference, and how seeing something tangible lets you iterate and ask more questions about the science all around us.",
    framed: true,
    gallery: [
      {
        image: '/portfolio/ig-berlin-science-week-briefs.webp',
        alt: 'White briefs hand-doodled with "Improbable Research," the Ig logo, tiny stick-figure scenes and the dates of Falling Walls Science Summit (6 November 2026) and Berlin Science Week (8 November 2026)',
      },
    ],
  },
  {
    title: 'Wee World Comics',
    category: 'Comics',
    image: '/portfolio/weeworld-sock8.jpg',
    alt: 'Four-panel comic: a lone green sock on the washing line is reunited with its lost partner, found in the washing machine',
    slug: 'wee-world-comics',
    framed: true,
    // Shown stacked, in this order, on the piece's own page.
    gallery: [
      {
        image: '/portfolio/weeworld-sock8.jpg',
        alt: 'Four-panel comic: a lone green sock on the washing line is reunited with its lost partner, found in the washing machine, singing "reunited and it feels so good!"',
      },
      {
        image: '/portfolio/weeworld-almost-done.jpg',
        alt: 'Four-panel comic: a little round character watches something in the oven, decides "Yes, I think it\'s done," pulls out a charred stick, and sits back down to keep waiting',
      },
      {
        image: '/portfolio/weeworld-walking-guide.jpg',
        alt: 'Four-panel comic, "A wee guide to walking — based on trail type": only step on black or white on a zebra crossing, hopscotch a stone path, and Super Mario-fy the boring ones',
      },
    ],
  },
];
