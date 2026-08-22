// Every project the UI renders — homepage, /work, and case studies — reads from here.
// Add a new project by appending an object; no page structure changes needed.

export const projects = [
  {
    slug: 'curio',
    number: '01',
    title: 'Curio',
    tagline: 'Turning everyday curiosity into learning.',
    description:
      'Curio is a mobile learning experience designed to help children explore everyday objects using their device camera and receive short, age-appropriate educational content while parents maintain oversight of the learning experience.',
    role: 'Full-Stack Developer',
    type: 'Mobile / Full-Stack Product',
    year: '2025', // TODO: confirm exact build year/range if different
    technologies: [
      'React Native',
      'Expo',
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
      'REST APIs',
      'JWT / Authentication',
      'OpenAI API',
      'Camera APIs',
    ],
    features: [
      'Parent authentication',
      'Child profiles',
      'Camera-based exploration',
      'Educational facts',
      'Learning journal',
      'Categories',
      'Challenges',
      'Parent dashboard',
      'Safety / moderation workflow',
      'Backend API',
      'Database integration',
    ],
    image: '/images/projects/curio/cover.png',
    frame: 'device',
    gallery: [],
    liveUrl: 'https://curio-landing.onrender.com',
    githubUrl: 'https://github.com/discoverySquad/curio',
    status: 'Active',
    featured: true,
    award: null,
    client: null,
    stackShort: 'React Native · Node.js · MongoDB',
  },
  {
    slug: 'shelfsafe',
    number: '02',
    title: 'ShelfSafe',
    tagline: 'Smarter inventory. Safer shelves.',
    description:
      'A pharmacy inventory management platform designed to help teams monitor medication stock, expiration dates, batches and inventory risks through an accessible dashboard.',
    role: 'Full-Stack Developer',
    type: 'Full-Stack Web Application',
    year: '2025', // TODO: confirm exact build year/range if different
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT / Authentication', 'Vercel'],
    features: [
      'Inventory dashboard',
      'Medication management',
      'Expiration monitoring',
      'Low-stock monitoring',
      'Batch / lot tracking',
      'Search',
      'Filtering',
      'Reporting',
      'Inventory analytics',
      'Authentication',
    ],
    image: '/images/projects/shelfsafe/cover.jpg',
    frame: 'browser',
    gallery: [],
    liveUrl: 'https://shelf-safe-frontend.vercel.app/dashboard',
    githubUrl: 'https://github.com/Shelf-Safe/Shelf-Safe/tree/development',
    status: 'Active',
    featured: true,
    award: null,
    client: null,
    stackShort: 'React · Node.js · MongoDB',
  },
  {
    slug: 'street-reads',
    number: '03',
    title: 'Street Reads',
    tagline: 'Helping communities discover books around them.',
    description:
      'Street Reads is a location-based web application that helps people discover and contribute community BookBoxes through an interactive map.',
    role: 'Developer Lead',
    type: 'Location-Based Web Application',
    year: '2024', // TODO: confirm exact build year/range if different
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'Firebase',
      'Firebase Authentication',
      'Firestore',
      'TomTom Maps',
      'Geolocation',
      'Reverse Geocoding',
      'Cloudinary',
    ],
    features: [
      'Interactive map',
      'User geolocation',
      'BookBox discovery',
      'Add BookBox workflow',
      'Camera / image upload',
      'Firebase authentication',
      'Favorites',
      'Firestore CRUD',
      'Real-time updates',
      'Map bounds',
      'Reverse geocoding',
      'Error handling',
      'Responsive interface',
    ],
    image: '/images/projects/streetreads/cover.jpg',
    frame: 'browser',
    gallery: [],
    liveUrl: 'https://streetreads.netlify.app/',
    // Project-specific repository (kept independent from the personal GitHub profile).
    githubUrl: 'https://github.com/street-reads/streetReads',
    status: 'Featured',
    featured: true,
    award: 'Best Product — Showcase',
    client: null,
    stackShort: 'Firebase · TomTom Maps · Cloudinary',
  },
]

export const clientWork = [
  {
    slug: 'umyidi',
    title: 'Umumazi Youth Development Initiative',
    tagline: 'A community platform for youth development programming.',
    type: 'Nonprofit / Community Website',
    technologies: ['Web Development'], // TODO: confirm exact stack used
    image: '/images/projects/umyidi/cover.jpg',
    liveUrl: null, // TODO: add live URL
    status: 'Live',
  },
]

export const previousWork = [
  {
    slug: 'doodles-stick',
    title: 'Doodles Stick',
    type: 'Healthcare Website',
    technologies: ['Angular', 'TypeScript', 'Firebase', 'Bootstrap'],
    image: '/images/projects/archive/doodles-stick.jpg',
    status: 'Previous Project',
  },
  {
    slug: 'iklothing-store',
    title: 'Iklothing Store',
    type: 'E-Commerce',
    technologies: ['WordPress', 'WooCommerce'],
    image: '/images/projects/archive/iklothing-store.jpg',
    status: 'Previous Project',
  },
  {
    slug: 'anita-harris-empowerment-foundation',
    title: 'Anita Harris Empowerment Foundation',
    type: 'Nonprofit Website',
    technologies: ['WordPress', 'Web Development'],
    image: '/images/projects/archive/anita-harris.jpg',
    status: 'Previous Project',
  },
  {
    slug: 'heavy-duty-pub',
    title: 'Heavy Duty Pub',
    type: 'Corporate Website',
    industry: 'Construction / Energy',
    technologies: [],
    image: '/images/projects/archive/heavy-duty-pub.jpg',
    status: 'Previous Project',
  },
]

export const labs = [
  { title: 'React Native / Expo', description: 'Mobile application development.' },
  { title: 'Swift / SwiftUI', description: 'Native iOS development and UI experimentation.' },
  { title: 'Kotlin / Jetpack Compose', description: 'Native Android UI development.' },
  { title: 'Authentication Systems', description: 'JWT, bcrypt and secure authentication workflows.' },
  { title: 'AWS / Server Deployment', description: 'EC2, Apache and Linux server configuration.' },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProject(slug) {
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return projects[0]
  return projects[(index + 1) % projects.length]
}
