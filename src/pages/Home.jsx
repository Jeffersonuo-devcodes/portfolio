import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons'
import Button from '../components/ui/Button'
import PortraitFrame from '../components/ui/PortraitFrame'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import FeaturedProject from '../components/projects/FeaturedProject'
import { projects } from '../data/projects'
import { experience } from '../data/experience'
import { socials } from '../data/socials'
import { site } from '../data/site'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const stack = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'JWT'] },
  { category: 'Mobile', items: ['React Native', 'Expo', 'Flutter', 'Jetpack Compose'] },
  { category: 'Data', items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Vercel', 'Docker', 'GitHub Actions'] },
]

export default function Home() {
  useDocumentMeta({ title: site.seoDefaultTitle, description: site.seoDefaultDescription })

  const featured = projects.filter((p) => p.featured)
  const credibleRoles = experience.slice(0, 2)

  return (
    <>
      {/* Hero */}
      <section className="container-page min-h-[80vh] md:min-h-[85vh] lg:min-h-[88vh] flex items-center py-16 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-6 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <p className="text-xs font-medium tracking-[0.2em] text-[var(--color-accent)] uppercase mb-7">
              Jefferson Uche-Okoro / {site.roleShort}
            </p>
            <h1 className="font-[var(--font-display)] text-[clamp(3rem,6.2vw,6.5rem)] leading-[0.98] text-[var(--color-ink)]">
              I build digital products
              <br />
              from{' '}
              <span className="text-[var(--color-accent)]">idea to deployment.</span>
            </h1>
            <p className="mt-8 max-w-lg text-base md:text-lg text-[var(--color-ink-muted)] leading-relaxed">
              I build responsive web and mobile applications from interface to backend — working
              across React, React Native, Node.js, APIs, databases and deployment.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-11">
              <Button to="/work" variant="primary">
                View My Work
              </Button>
              <Button to="/about" variant="secondary">
                About Me
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-14">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
              {site.resumeAvailable && (
                <a
                  href={site.resumeUrl}
                  className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
                >
                  Resume ↓
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <PortraitFrame className="w-full max-w-[22rem] sm:max-w-sm lg:max-w-[30rem] aspect-square lg:-mr-4" />
          </motion.div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-page section-pad">
          <RevealOnScroll>
            <p className="text-xs font-medium tracking-[0.2em] text-[var(--color-accent)] uppercase mb-6">
              Selected Work
            </p>
            <h2 className="font-[var(--font-display)] text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-[var(--color-ink)] max-w-3xl">
              Products I've helped take from ideas and requirements to working experiences.
            </h2>
            <p className="mt-6 max-w-xl text-base md:text-lg text-[var(--color-ink-muted)] leading-relaxed">
              Selected full-stack, mobile and location-based products I've helped design, build
              and ship.
            </p>
          </RevealOnScroll>

          <div className="mt-20 flex flex-col gap-28 md:gap-40">
            {featured.map((project, i) => (
              <FeaturedProject key={project.slug} project={project} reverse={i % 2 === 1} />
            ))}
          </div>

          <RevealOnScroll className="mt-20 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-base text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
            >
              Explore All Work
              <ArrowRight size={16} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* Building across the stack */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-page section-pad">
          <RevealOnScroll className="max-w-2xl">
            <h2 className="font-[var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] text-[var(--color-ink)]">
              Building across the stack.
            </h2>
            <p className="mt-5 text-base md:text-lg text-[var(--color-ink-muted)] leading-relaxed">
              Comfortable moving between interface, application logic, data and deployment.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 mt-16">
            {stack.map((s, i) => (
              <RevealOnScroll key={s.category} delay={i * 0.05}>
                <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-ink-faint)] mb-4">
                  {s.category}
                </p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--color-ink)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering background teaser */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-page section-pad grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <RevealOnScroll className="lg:col-span-8">
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] uppercase mb-6">
              Engineering → Software → Products
            </p>
            <h2 className="font-[var(--font-display)] text-[clamp(1.85rem,4vw,2.75rem)] leading-[1.1] text-[var(--color-ink)] max-w-2xl">
              An engineering foundation, applied to software.
            </h2>
            <p className="mt-5 max-w-xl text-base md:text-lg text-[var(--color-ink-muted)] leading-relaxed">
              My path into software started with Electrical &amp; Electronics Engineering and
              evolved through front-end development into full-stack web and mobile product
              development.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08} className="lg:col-span-4 lg:flex lg:justify-end">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-base text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
            >
              More About My Journey
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* Experience credibility */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-page section-pad">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] uppercase mb-10">Experience</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {credibleRoles.map((job, i) => (
              <RevealOnScroll key={job.company} delay={i * 0.05}>
                <h3 className="font-[var(--font-display)] text-xl text-[var(--color-ink)]">{job.company}</h3>
                <p className="text-sm text-[var(--color-ink-muted)] mt-1">{job.role}</p>
              </RevealOnScroll>
            ))}
            <RevealOnScroll delay={0.1}>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--color-ink)]">
                Full-Stack Product Development
              </h3>
              <p className="text-sm text-[var(--color-ink-muted)] mt-1">Web · Mobile · APIs · Data</p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-page section-pad">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.2em] text-[var(--color-accent)] uppercase mb-6">
              Have Something Worth Building?
            </p>
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-[var(--color-ink)] max-w-3xl">
              Let's build something useful.
            </h2>
            <p className="mt-6 max-w-xl text-base md:text-lg text-[var(--color-ink-muted)] leading-relaxed">
              I'm open to software development opportunities, interesting products and
              collaborations.
            </p>

            <div className="flex flex-wrap items-center gap-8 mt-11">
              <Button to="/contact" variant="primary">
                Get In Touch
                <ArrowRight size={16} />
              </Button>

              <div className="flex items-center gap-6">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
                >
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
