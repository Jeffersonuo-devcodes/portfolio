import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ProjectHero from '../../components/projects/ProjectHero'
import CaseStudySection from '../../components/projects/CaseStudySection'
import ArchitectureDiagram from '../../components/projects/ArchitectureDiagram'
import TechnologyTag from '../../components/ui/TechnologyTag'
import { getProjectBySlug } from '../../data/projects'
import { site } from '../../data/site'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'

const project = getProjectBySlug('iklothing')

export default function Iklothing() {
  useDocumentMeta({
    title: `iKlothing | ${site.name}`,
    description: project.description,
  })

  return (
    <div>
      <ProjectHero project={project} />

      <CaseStudySection index="01" title="Overview">
        <p>{project.overview}</p>
      </CaseStudySection>

      <CaseStudySection index="02" title="Why I'm Rebuilding It">
        <p>
          The earlier version of iKlothing was a WordPress/WooCommerce storefront — a reasonable
          starting point, but not a foundation that could support a more structured product
          direction. Rebuilding it as a React/Vite application with Supabase gives the product
          room to grow into things a template storefront can't easily do, particularly around
          exploring how sizing and fit could be handled more intelligently.
        </p>
      </CaseStudySection>

      {/* Architecture */}
      <section className="container-page py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] mb-2">03</p>
            <h2 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)]">
              Current Architecture
            </h2>
          </div>
          <div className="lg:col-span-9 overflow-x-auto">
            <ArchitectureDiagram
              layers={['UI / Components', 'Application / Business Logic', 'Services', 'Supabase / External Services']}
            />
            <p className="text-sm text-[var(--color-ink-muted)] mt-6 max-w-xl">
              Business and data logic live in dedicated services rather than inside UI components
              — the same separation-of-concerns lesson from{' '}
              <Link
                to="/engineering/enterprise-components"
                className="text-[var(--color-ink)] hover:text-[var(--color-accent)] underline underline-offset-4"
              >
                building enterprise components at Remita
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CaseStudySection index="04" title="My Contribution">
        <p>{project.contribution}</p>
      </CaseStudySection>

      <CaseStudySection index="05" title="Technology">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <TechnologyTag key={t}>{t}</TechnologyTag>
          ))}
        </div>
      </CaseStudySection>

      {/* Roadmap */}
      <section className="container-page py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] mb-2">06</p>
            <h2 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)]">Where It Stands</h2>
          </div>
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-accent)] mb-4">Currently Building</p>
              <ul className="space-y-2.5">
                {project.current.map((item) => (
                  <li key={item} className="text-sm text-[var(--color-ink-muted)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-ink-faint)] mb-4">Exploring Next</p>
              <ul className="space-y-2.5">
                {project.exploring.map((item) => (
                  <li key={item} className="text-sm text-[var(--color-ink-muted)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)]">
        <div className="container-page py-16 md:py-20">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Work
          </Link>
        </div>
      </section>
    </div>
  )
}
