// Global site configuration: name, resume, SEO defaults.
export const site = {
  name: 'Jefferson Uche-Okoro',
  role: 'Full-Stack Developer',
  logoText: 'JEFFERSON.',

  // TODO: place the resume PDF at public/resume/Jefferson-Uche-Okoro-Resume.pdf
  // and flip `resumeAvailable` to true. The download button stays hidden until then
  // so no broken link is ever shown.
  resumeUrl: '/resume/Jefferson-Uche-Okoro-Resume.pdf',
  resumeAvailable: false,

  portraitAvailable: true,
  portraitSrc: '/images/jefferson.jpg',
  portraitAlt: 'Portrait of Jefferson Uche-Okoro',

  seoDefaultTitle: 'Jefferson Uche-Okoro | Full-Stack Developer',
  seoDefaultDescription:
    'Portfolio of Jefferson Uche-Okoro, a full-stack developer with an engineering background building modern web and mobile applications using React, React Native, Node.js and modern backend technologies.',
}
