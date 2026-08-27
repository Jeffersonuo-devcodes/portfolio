// Every project the UI renders — homepage, /work, and case studies — reads from here.
// Add a new project by appending an object; no page structure changes needed.
//
// `featured` controls the homepage's 3-project spotlight. `caseStudy` controls whether the
// project links to its own /work/:slug page (and takes part in the case-study prev/next cycle)
// or is presented as a card only (e.g. a live URL with no dedicated write-up yet).

export const projects = [
  {
    slug: 'curio',
    number: '01',
    title: 'Curio',
    tagline: 'Turning everyday curiosity into learning.',
    description:
      'Curio is a mobile learning experience designed to help children explore everyday objects using their device camera and receive short, age-appropriate educational content while parents maintain oversight of the learning experience.',
    overview:
      "Curio is a mobile learning application designed to help children learn about the world around them by scanning real-world objects and receiving short, age-appropriate educational facts. The product combines a child-facing discovery experience with parent-focused controls, allowing parents to create and manage child profiles while children use the camera-based experience to explore objects around them.",
    contribution:
      "I worked across the mobile application and backend, including React Native/Expo interfaces, Node.js/Express APIs, MongoDB data models, JWT-based authentication, parent and child application flows, camera/image workflows, API integration and safety-related features. I also worked through performance and networking issues around the camera-to-backend workflow, including identifying unnecessarily large image payloads as a bottleneck and optimizing the image flow rather than introducing unnecessary infrastructure.",
    cardCopy:
      "Curio is a full-stack mobile learning experience that lets children scan objects around them and discover short, age-appropriate facts. I worked across the React Native application and Node.js backend, including authentication, child profiles, camera workflows, APIs, MongoDB and safety-focused product features.",
    role: 'Co-Developer Lead',
    type: 'Full-Stack Mobile Learning Application',
    year: '2026',
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
      'Parent dashboard',
      'Camera-based object scanning',
      'Educational fact generation',
      'Journal / history experience',
      'Safety-related scan handling',
      'Mobile/backend communication',
    ],
    image: '/images/projects/curio/cover.png',
    frame: 'device',
    gallery: [],
    liveUrl: 'https://curio-landing.onrender.com',
    githubUrl: 'https://github.com/discoverySquad/curio',
    status: 'Active',
    featured: true,
    caseStudy: true,
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
    overview:
      'ShelfSafe is a full-stack inventory and compliance application built to make inventory tracking, reporting and operational information easier to manage from one system. The application combines an interactive frontend with backend services, database-driven inventory workflows, analytics and downloadable reporting.',
    contribution:
      'I worked across both the frontend and backend using React, Node.js, Express and MongoDB. My work included database queries, MongoDB aggregation pipelines, reporting workflows, analytics, PDF/CSV exports and production deployment. One of the more interesting production problems involved generated reports working correctly during local development but failing to download reliably after deployment to Vercel. The reporting workflow was adapted to use Vercel Blob Storage rather than relying on assumptions about persistent local file storage in a serverless environment.',
    cardCopy:
      'ShelfSafe is a full-stack inventory and compliance application built around inventory management, analytics and downloadable reporting. I worked across the React frontend and Node.js/Express backend, including MongoDB data workflows, reporting, PDF/CSV exports and production deployment.',
    role: 'Full-Stack Developer',
    type: 'Full-Stack Inventory & Compliance Web Application',
    year: '2026',
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT / Authentication', 'Vercel', 'Vercel Blob'],
    features: [
      'Inventory management',
      'Compliance workflows',
      'Analytics',
      'Reporting',
      'PDF exports',
      'CSV exports',
      'Database-driven application state',
      'Production file handling',
    ],
    image: '/images/projects/shelfsafe/cover.png',
    frame: 'browser',
    gallery: [],
    liveUrl: 'https://shelf-safe-frontend.vercel.app/dashboard',
    githubUrl: 'https://github.com/Shelf-Safe/Shelf-Safe/tree/development',
    status: 'Active',
    featured: true,
    caseStudy: true,
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
    overview:
      "Street Reads is a location-based web application designed to help people discover community BookBoxes around them. Instead of treating the map as the product itself, the experience was built around a simpler user need: understanding what BookBoxes are nearby and being able to discover or contribute locations.",
    contribution:
      'As Developer Lead, I worked on the core location experience, including geolocation, reverse geocoding, proximity calculations, map interactions and Firebase/Firestore data workflows. The application used TomTom Maps for the mapping experience and Cloudinary for image storage and delivery. I also worked on the Add BookBox experience, camera/image handling, Firestore CRUD operations, favourites, map popup cards, real-time updates, map bounds and application error handling.',
    cardCopy:
      'Street Reads helps people discover community BookBoxes around them through a location-aware map experience. As Developer Lead, I worked on geolocation, proximity-based discovery, Firestore data workflows, TomTom Maps, image handling and the experience for adding new BookBox locations.',
    role: 'Developer Lead',
    type: 'Location-Based Community Web Application',
    year: '2025',
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
      'User geolocation',
      'BookBox discovery',
      'Reverse geocoding',
      'Distance / proximity calculations',
      'Interactive map',
      'Add BookBox workflow',
      'Image uploads',
      'Favourites',
      'Real-time Firestore updates',
    ],
    image: '/images/projects/streetreads/cover.png',
    frame: 'browser',
    gallery: [],
    liveUrl: 'https://streetreads.netlify.app/',
    // Project-specific repository (kept independent from the personal GitHub profile).
    githubUrl: 'https://github.com/street-reads/streetReads',
    status: 'Featured',
    featured: true,
    caseStudy: true,
    award: 'Best Product — Showcase',
    client: null,
    stackShort: 'Firebase · TomTom Maps · Cloudinary',
  },
]

// Delivered through client/community work rather than a flagship product build — its own
// tier on /work, shown just above "In Development".
export const communityWork = [
  {
    slug: 'umyidi',
    number: null,
    title: 'UMYIDI',
    tagline: 'A community platform for youth development programming.',
    description:
      "UMYIDI is a nonprofit website built for the Umumazi Youth Development Initiative, presenting the organization's mission, programs and ways to get involved.",
    overview:
      "UMYIDI is a nonprofit website built for the Umumazi Youth Development Initiative, presenting the organization's mission, programs and ways to get involved, with Flutterwave integrated for online donations. It was developed through RenastereDev, the product studio I co-founded, as part of our client and community work.",
    contribution: 'As part of RenastereDev\'s work on the project, I contributed to the website\'s build and delivery.',
    cardCopy:
      "UMYIDI is a nonprofit website built for the Umumazi Youth Development Initiative, presenting the organization's mission, programs and community impact, with Flutterwave integrated for online donations. Delivered through RenastereDev as part of our client and community work.",
    role: null,
    type: 'Nonprofit / Community Website',
    year: null,
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Flutterwave'],
    features: [],
    image: '/images/projects/umyidi/cover.png',
    frame: null,
    gallery: [],
    liveUrl: 'https://umumaziyouthdevelopmentinitiative.netlify.app/',
    githubUrl: null,
    status: 'Live',
    featured: false,
    caseStudy: false,
    award: null,
    client: 'Umumazi Youth Development Initiative',
    stackShort: 'React · Vite · Tailwind CSS',
  },
]

// Actively being rebuilt — kept out of `projects` so it never enters the flagship
// homepage/case-study rotation, but it still gets its own /work/:slug page.
export const inDevelopment = [
  {
    slug: 'iklothing',
    number: null,
    title: 'iKlothing',
    tagline: 'Exploring a smarter way to shop for clothing online.',
    description: 'A fashion technology application currently being rebuilt to explore a smarter online clothing-shopping experience.',
    overview:
      "iKlothing is a fashion technology project currently being rebuilt around a more structured web application architecture. The product explores how online clothing shopping can go beyond a traditional storefront, particularly around helping users make better decisions about clothing and sizing. The current rebuild uses React and Vite for the application experience, with Supabase supporting backend and data functionality — evolving from an earlier version of the product with a modern application architecture.",
    contribution:
      "I'm currently working on the technical structure of the application, including separating presentation from business logic, organizing product and image-related services, integrating Supabase and building the React application around reusable, maintainable components. Part of the product direction also explores image-based sizing, where a user's image could potentially help estimate clothing measurements or improve size recommendations — an area still being explored, not a completed or production-ready feature.",
    cardCopy:
      "iKlothing is a fashion technology application currently being rebuilt to explore a smarter online clothing-shopping experience. I'm rebuilding the application with React, Vite and Supabase, with a focus on clean application architecture, separated business logic and future sizing-related functionality.",
    role: 'Software Developer & Co-Founder',
    type: 'Fashion Technology / E-Commerce Application',
    year: '2026',
    technologies: ['React', 'JavaScript', 'Vite', 'Supabase'],
    current: ['Application architecture', 'React / Vite frontend', 'Supabase integration', 'Product / service separation'],
    exploring: ['Image-assisted sizing', 'Measurement workflows', 'Improved clothing recommendations'],
    image: null, // TODO: add a current screenshot once the rebuild has a presentable UI
    frame: null,
    gallery: [],
    liveUrl: null,
    githubUrl: null,
    status: 'In Development',
    featured: false,
    caseStudy: true,
    award: null,
    client: null,
    stackShort: 'React · Vite · Supabase',
  },
]

export const previousWork = [
  {
    slug: 'doodles-stick',
    title: 'Doodles Stick',
    type: 'Healthcare Website',
    description:
      'Doodles Stick was a client web project delivered as part of my earlier web development work. I worked on implementing the website experience and translating project requirements into a responsive web interface.',
    technologies: ['Angular', 'TypeScript', 'Firebase', 'Bootstrap'],
    image: '/images/projects/archive/doodles-stick.jpg',
    status: 'Previous Project',
  },
  {
    slug: 'anita-harris-empowerment-foundation',
    title: 'Anita Harris Empowerment Foundation',
    type: 'Nonprofit Website',
    description:
      "Anita Harris was a client website delivered as part of my earlier web development work. The project involved turning the client's content and requirements into a functional web presence across desktop and mobile.",
    technologies: ['WordPress', 'Web Development'],
    image: '/images/projects/archive/anita-harris.jpg',
    status: 'Previous Project',
  },
  {
    slug: 'heavy-duty-pub',
    title: 'Heavy Duty Pub',
    type: 'Corporate Website',
    industry: 'Construction / Energy',
    description:
      "Heavy Duty Pub was a client web project focused on delivering a usable, responsive online experience based on the client's requirements. I contributed to implementing the website and its user-facing interface.",
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

const allCaseStudyProjects = [...projects, ...inDevelopment, ...communityWork]

export function getProjectBySlug(slug) {
  return allCaseStudyProjects.find((p) => p.slug === slug)
}

// Only cycles through the flagship, finished case studies — iKlothing and UMYIDI stay out
// of this rotation since one has no case study yet and the other has no write-up planned.
export function getAdjacentProject(slug) {
  const cycle = projects.filter((p) => p.caseStudy)
  const index = cycle.findIndex((p) => p.slug === slug)
  if (index === -1) return cycle[0]
  return cycle[(index + 1) % cycle.length]
}
