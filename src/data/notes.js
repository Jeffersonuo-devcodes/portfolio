// Engineering notes. Each `body` is an ordered list of content blocks rendered by
// ArticleBody.jsx: { type: 'p' }, { type: 'heading', id } (also builds the table of
// contents), { type: 'diagram' }, { type: 'diagramPair' }, { type: 'pull' }.
// `relatedProject` links back to a slug in projects.js when the note grew out of that build.

export const notes = [
  {
    slug: 'curio-image-bottleneck',
    number: '01',
    category: 'Curio / Mobile / Performance',
    title: 'I Almost Solved the Wrong Problem',
    subtitle: "Finding the actual bottleneck in Curio's image workflow.",
    technologies: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB', 'Image Processing', 'REST APIs'],
    readingTime: '6 min read',
    relatedProject: 'curio',
    featured: true,
    body: [
      {
        type: 'p',
        text: "When the scan flow in Curio started feeling slow, my first instinct wasn't to look at the image itself. It was to assume the problem was somewhere deeper — the API route, the database query, maybe even that we needed a background job or a separate processing service sitting between the mobile client and the backend.",
      },
      { type: 'heading', id: 'what-i-considered', text: 'What I considered first' },
      {
        type: 'p',
        text: "Curio's core loop is simple to describe: a child points the camera at something, the app captures it, sends it to the backend, and gets back a short piece of educational content. Every part of that chain felt like a plausible suspect. Was the Express route doing too much before responding? Was MongoDB slow on that particular query? Did we need a queue so the mobile client wasn't waiting on a synchronous request at all?",
      },
      { type: 'p', text: "I spent more time than I'd like to admit reasoning about infrastructure I didn't have evidence I needed." },
      { type: 'heading', id: 'the-actual-problem', text: 'What was actually happening' },
      {
        type: 'p',
        text: "The backend and database were doing exactly what they were supposed to do. The problem was upstream of all of it: the images coming off the camera were large, and we were sending them over the network at full size before anything else happened — adding up to a 3-5 second delay on every scan. Every other part of the system was reacting correctly to a payload that shouldn't have been that big in the first place.",
      },
      { type: 'heading', id: 'the-fix', text: 'The fix' },
      {
        type: 'p',
        text: "The fix wasn't a new service. It was resizing and compressing the image on the client before it left the device — smaller payload in, same backend, same database, same response shape. That alone cut scan response time by roughly 60%.",
      },
      {
        type: 'diagramPair',
        beforeTitle: 'Before',
        beforeLayers: ['Camera', 'Full-Size Image', 'Network Request', 'Express API', 'Processing', 'Response'],
        afterTitle: 'After',
        afterLayers: ['Camera', 'Resize / Compress', 'Smaller Payload', 'Express API', 'Processing', 'Response'],
      },
      { type: 'heading', id: 'what-i-learned', text: "What I'd take from this" },
      {
        type: 'p',
        text: "It's easy to reach for architecture when something feels slow — a queue, a cache, a new service — because those are satisfying things to build. None of that would have fixed Curio's scan flow. It would have added moving parts around a problem that was actually just about the size of the data going in.",
      },
      { type: 'pull', text: "Sometimes the best architecture decision is deciding you don't need more architecture." },
    ],
  },
  {
    slug: 'shelfsafe-serverless-reports',
    number: '02',
    category: 'ShelfSafe / Backend / Cloud',
    title: 'It Worked Locally',
    subtitle: 'Fixing report downloads in a serverless environment.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel', 'Vercel Blob', 'PDF', 'CSV'],
    readingTime: '5 min read',
    relatedProject: 'shelfsafe',
    featured: true,
    body: [
      {
        type: 'p',
        text: "One of the more frustrating bugs I ran into on ShelfSafe was the kind that makes you question code you already know works. The reports generated locally. The files downloaded locally. Then I deployed the application, and the same flow just — didn't.",
      },
      { type: 'heading', id: 'the-assumption', text: "The assumption I didn't know I was making" },
      {
        type: 'p',
        text: "ShelfSafe generates PDF and CSV reports from medication and inventory data — expiry windows, batch tracking, stock levels. Locally, the flow was straightforward: generate the file, write it somewhere, hand the client a link to download it. That worked because my machine has a persistent filesystem sitting right there, and I'd built the feature around that assumption without ever stating it out loud.",
      },
      { type: 'heading', id: 'what-changed-in-production', text: 'What changed in production' },
      {
        type: 'p',
        text: "Vercel's functions are serverless. There's no guarantee the function generating a report and the function serving its download are even the same instance, and there's no persistent disk to write to and read back from between requests. The code wasn't wrong — the environment it ran in during development just wasn't the same shape as the one it would actually ship to.",
      },
      { type: 'heading', id: 'the-fix', text: 'The fix' },
      {
        type: 'p',
        text: 'Instead of writing the generated report to a local path, I pushed it to Vercel Blob Storage and got back a persistent URL. The report generation logic barely changed — what changed was where the output actually lived once it existed.',
      },
      {
        type: 'diagramPair',
        beforeTitle: 'Local Assumption',
        beforeLayers: ['Application', 'Generate Report', 'Local File', 'Download'],
        afterTitle: 'Production Approach',
        afterLayers: ['Application', 'Generate Report', 'Vercel Blob', 'Persistent URL', 'Download'],
      },
      { type: 'heading', id: 'the-lesson', text: 'The lesson' },
      {
        type: 'p',
        text: '"It works locally" tells you the logic is right. It doesn\'t tell you the architecture fits where the code is actually going to run. Environment assumptions are part of the design, whether or not you wrote them down.',
      },
    ],
  },
  {
    slug: 'streetreads-location-discovery',
    number: '03',
    category: 'StreetReads / Maps / Product',
    title: "A Map Isn't Useful Just Because It Has Markers",
    subtitle: 'What building StreetReads taught me about location-based products.',
    technologies: ['JavaScript', 'Firebase', 'Firestore', 'TomTom Maps', 'Cloudinary', 'Geolocation APIs'],
    readingTime: '6 min read',
    relatedProject: 'street-reads',
    featured: true,
    body: [
      {
        type: 'p',
        text: "The earliest version of StreetReads did exactly what it sounds like it should do: it pulled BookBox records out of Firestore and dropped a pin on the map for each one. It worked, in the sense that markers appeared where they were supposed to. It didn't actually answer the question someone opening the app had.",
      },
      { type: 'heading', id: 'the-real-question', text: 'The question underneath the feature' },
      {
        type: 'p',
        text: 'Nobody opens a map app to admire markers. The real question is "what\'s near me right now" — and answering that properly meant treating location as data to be processed, not just coordinates to be plotted.',
      },
      {
        type: 'p',
        text: "That meant building the actual pipeline: get the user's position, reverse-geocode it into something readable, calculate distance to every candidate BookBox, sort by proximity, and only then hand the nearest ones to the map to render.",
      },
      {
        type: 'diagram',
        layers: ['User Location', 'Lat / Long', 'Reverse Geocoding', 'Distance Calculation', 'Sort by Proximity', 'Nearest BookBoxes', 'Map Experience'],
      },
      { type: 'heading', id: 'tomtom-not-google', text: 'Why TomTom, not "TomTom is better"' },
      {
        type: 'p',
        text: "Partway through, Google Maps' API pricing and usage limits made it a bad fit for how the app needed to run. Moving to TomTom Maps wasn't a statement about one SDK being superior to another — it was a constraint the product had to work within, and TomTom's API let me compute and surface the two nearest BookBoxes reliably inside that constraint.",
      },
      { type: 'heading', id: 'images-too', text: 'Storage needed the same treatment' },
      {
        type: 'p',
        text: 'Adding a BookBox includes a photo, and that surfaced a smaller version of the same lesson: reliable image storage isn\'t free either. Cloudinary handled storage, optimization and CDN delivery so uploads stayed fast regardless of the source image size.',
      },
      { type: 'heading', id: 'closing', text: 'What I took from it' },
      {
        type: 'p',
        text: 'The map is the interface. The feature people actually came for was discovery — knowing what\'s near them. Building the interface first and the discovery logic as an afterthought would have shipped something that looked finished and wasn\'t.',
      },
    ],
  },
  {
    slug: 'enterprise-components',
    number: '04',
    category: 'Frontend / Enterprise',
    title: "A Component Isn't Finished Just Because It Works",
    subtitle: 'What enterprise frontend development taught me about reusable software.',
    technologies: ['Angular', 'Design Systems', 'REST APIs', 'Nx Monorepo', 'Unit Testing'],
    readingTime: '5 min read',
    relatedProject: null,
    featured: false,
    body: [
      {
        type: 'p',
        text: "At Remita, I was building Angular components and design-system primitives for a fintech product used by thousands of people every day. That's a different bar than building a component that just works on my machine, for the one screen I'm looking at.",
      },
      { type: 'heading', id: 'the-gap', text: 'The gap between "works" and "works for someone else"' },
      {
        type: 'p',
        text: "A component only I understand is a liability the moment someone else on the team needs to use it, extend it, or fix it under deadline pressure. What mattered wasn't visible in a demo: predictable inputs and outputs, documented edge cases, behavior that held up once we built out the i18n framework across locales, and tests that verified behavior rather than just checking that something rendered.",
      },
      {
        type: 'p',
        text: "Contributing to the Nx monorepo migration made this more concrete — once components cross team boundaries inside a shared workspace, an undocumented assumption in your code becomes someone else's bug report.",
      },
      { type: 'heading', id: 'what-changed', text: 'What changed in how I build' },
      {
        type: 'p',
        text: 'I stopped thinking of a component as done when it matched the design. Done meant another engineer could read its API, understand what it wouldn\'t do, and trust it without opening the source to check.',
      },
      { type: 'pull', text: 'Writing code that works and writing code that works inside a team are different skills.' },
    ],
  },
  {
    slug: 'full-stack-ownership',
    number: '05',
    category: 'Full-Stack / Product Engineering',
    title: 'The Frontend Was Only One Part of the Feature',
    subtitle: 'How taking ownership across the stack changed the way I build software.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'React Native'],
    readingTime: '5 min read',
    relatedProject: null,
    featured: false,
    body: [
      {
        type: 'p',
        text: 'I started out frontend-focused — comfortable turning a design into a responsive interface, confident in state management and component structure. That was the job, and I was good at it.',
      },
      { type: 'heading', id: 'the-shift', text: 'Where the shift happened' },
      {
        type: 'p',
        text: "At HNG Tech, and later across Curio and ShelfSafe, features stopped being \"done\" when the screen looked right. I owned the API route it called, the JWT check guarding it, the MongoDB model behind it, and what happened when any part of that chain failed.",
      },
      {
        type: 'p',
        text: 'That meant carrying questions into every feature the frontend alone never forced: where does this data actually come from, who\'s allowed to see it, what does validation look like on the way in, what does the client show when the request fails instead of succeeds, what does this look like in production logs.',
      },
      { type: 'heading', id: 'the-advantage', text: "The part that didn't go away" },
      {
        type: 'p',
        text: "None of this made the frontend work less important. If anything, already understanding what an interface needs from an API made the backend work easier to design — I wasn't guessing at what a consumer would want from an endpoint, I'd been that consumer.",
      },
      { type: 'heading', id: 'closing', text: 'Where that leaves me now' },
      {
        type: 'p',
        text: "Full-stack ownership isn't about being equally deep in every layer. It's about not stopping at the boundary of the layer that's most comfortable.",
      },
    ],
  },
  {
    slug: 'authentication-is-more-than-login',
    number: '06',
    category: 'Backend / Security',
    title: 'Authentication Is More Than a Login Form',
    subtitle: 'What changed when I started working on both sides of authentication.',
    technologies: ['JWT', 'Node.js', 'Express', 'REST APIs', 'React', 'Role-Based Access'],
    readingTime: '5 min read',
    relatedProject: 'curio',
    featured: false,
    body: [
      {
        type: 'p',
        text: 'From the frontend, authentication looks like a form: email, password, submit, redirect on success. That\'s most of what a user ever sees, and for a while it was most of what I thought about too.',
      },
      { type: 'heading', id: 'the-other-side', text: 'What the other side of the form involves' },
      {
        type: 'p',
        text: "Building the backend for that same flow means deciding how a token gets created, where it lives on the client, how it's attached to outgoing requests, what happens the moment it expires, and how every protected route verifies it before doing anything else.",
      },
      { type: 'heading', id: 'logged-in-as-what', text: 'Not just "logged in" — logged in as what' },
      {
        type: 'p',
        text: 'Curio made this concrete: parent and child accounts need different things visible and different actions available inside the same app. Authentication answers "who is this." Authorization answers "what are they allowed to touch." Building both sides made clear how much of the real work lives in that second question.',
      },
      { type: 'heading', id: 'closing', text: 'What stuck with me' },
      {
        type: 'p',
        text: "The login form is maybe ten percent of the feature. The rest is the quiet infrastructure that decides whether the other ninety percent can be trusted.",
      },
    ],
  },
  {
    slug: 'performance-is-product-quality',
    number: '07',
    category: 'Frontend / Performance',
    title: "Performance Isn't Something I Want to Fix at the End Anymore",
    subtitle: 'How production frontend work changed the way I think about speed.',
    technologies: ['React', 'Next.js', 'Code Splitting', 'Core Web Vitals', 'Caching'],
    readingTime: '4 min read',
    relatedProject: null,
    featured: false,
    body: [
      {
        type: 'p',
        text: 'For a long time my process looked like: build the feature, ship it, and if it felt slow, profile it and fix whatever showed up. Performance was a pass I did after the real work was finished.',
      },
      { type: 'heading', id: 'what-changed', text: 'What changed at RenastereDev Canada' },
      {
        type: 'p',
        text: "Working on production React and Next.js platforms serving real traffic made that order stop making sense. Code splitting and lazy loading aren't things you bolt on afterward — they're decisions about how a route or component is structured from the start. Memoization only helps when you already know which re-renders are actually expensive, which means paying attention while you write the component, not after.",
      },
      {
        type: 'p',
        text: 'The same went for the network side: client-side caching and REST API integration patterns that avoid redundant requests are easier to design in from the beginning than to retrofit once a dozen components already call the same endpoint their own way.',
      },
      { type: 'heading', id: 'closing', text: 'Why this matters beyond metrics' },
      {
        type: 'p',
        text: "A feature that's technically complete but slow to load isn't a finished feature with a performance bug attached — it's a worse feature. Once that clicked, performance stopped being a separate task and became part of how I evaluate whether an implementation is actually done.",
      },
    ],
  },
  {
    slug: 'from-code-to-decisions',
    number: '08',
    category: 'Engineering / Leadership',
    title: "Eventually, the Hard Part Isn't Writing the Code",
    subtitle: 'What changed when I started making engineering decisions for other people too.',
    technologies: ['Architecture', 'CI/CD', 'Design Systems', 'Team Workflow'],
    readingTime: '5 min read',
    relatedProject: 'street-reads',
    featured: false,
    body: [
      {
        type: 'p',
        text: "For a long time, good engineering meant writing code that worked. That's still true — it's just not the whole picture anymore.",
      },
      { type: 'heading', id: 'templates-and-friction', text: 'Templates, linting, and other unglamorous decisions' },
      {
        type: 'p',
        text: "At RenastereDev Canada, introducing standardized templates, linting rules and automated CI/CD pipelines wasn't exciting work. But every one of those decisions is really a decision about someone else's Tuesday — whether they spend it fighting inconsistent setup or building the thing they actually meant to build.",
      },
      { type: 'heading', id: 'leading-street-reads', text: 'Leading StreetReads' },
      {
        type: 'p',
        text: 'As Developer Lead on StreetReads, the hard part was never any single feature. It was making sure authentication, favorites and the image upload workflow fit together as one coherent application instead of four features that happened to share a repository.',
      },
      { type: 'heading', id: 'client-work', text: 'The other side, at RenastereDev' },
      {
        type: 'p',
        text: "Running RenastereDev as co-founder added a different version of the same lesson: translating a client's actual requirements into a technical solution that could realistically be built and maintained is itself an engineering decision, made before a single line of code exists.",
      },
      { type: 'heading', id: 'closing', text: 'What I try to remember' },
      {
        type: 'p',
        text: 'Every architecture choice, every workflow standard, every "good enough for now" outlives the moment you made it — for teammates, for future maintenance, for whoever debugs it next. The best engineering decisions are the ones that make things easier for whoever touches the code after you.',
      },
    ],
  },
]

export const principles = [
  'Understand the problem before choosing the technology.',
  'Find the actual bottleneck before adding infrastructure.',
  'Build for the environment the software will actually run in.',
  'Write code another developer can understand and change.',
  'Treat performance, accessibility and reliability as product features.',
  'The simplest solution that solves the real problem is often the better engineering decision.',
]

export const currentlyExploring = ['Spring Boot', 'Django', 'Go', 'Kubernetes', 'TensorFlow']

export function getNoteBySlug(slug) {
  return notes.find((n) => n.slug === slug)
}

export function getAdjacentNote(slug) {
  const index = notes.findIndex((n) => n.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? notes[index - 1] : null,
    next: index < notes.length - 1 ? notes[index + 1] : null,
  }
}
