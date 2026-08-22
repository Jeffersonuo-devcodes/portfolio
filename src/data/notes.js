// Engineering notes placeholders. `body` is intentionally empty — these are cards, not
// published articles. Structured as data so Markdown/MDX can be dropped in later without
// changing the page layout: swap `body: null` for `body: '<markdown or MDX import>'`.
export const notes = [
  {
    slug: 'location-experiences-tomtom-firebase',
    title: 'Building Location-Based Experiences with TomTom + Firebase',
    relatedTo: 'Street Reads',
    excerpt: 'Notes on combining a mapping SDK with a real-time database for a location-driven product.',
    body: null,
  },
  {
    slug: 'structuring-authentication',
    title: 'Structuring Authentication in a Full-Stack Application',
    relatedTo: 'JWT / Backend',
    excerpt: 'How authentication is typically structured across a token-based full-stack app.',
    body: null,
  },
  {
    slug: 'react-native-to-express',
    title: 'Connecting React Native to an Express Backend',
    relatedTo: 'Curio',
    excerpt: 'Notes on wiring a mobile client to a REST API in practice.',
    body: null,
  },
  {
    slug: 'camera-to-api-workflows',
    title: 'Building Camera-to-API Workflows in Mobile Applications',
    relatedTo: 'Curio',
    excerpt: 'Getting a device camera pipeline talking to a backend service reliably.',
    body: null,
  },
  {
    slug: 'deploying-express-applications',
    title: 'Deploying Express Applications',
    relatedTo: 'Render / Server Deployment',
    excerpt: 'Notes on shipping a Node/Express API to a hosted environment.',
    body: null,
  },
  {
    slug: 'lessons-leading-street-reads',
    title: 'Lessons From Leading Development on Street Reads',
    relatedTo: 'Engineering Leadership',
    excerpt: 'What leading development on a team project surfaced about scope and decisions.',
    body: null,
  },
]
