import ProjectHero from '../../components/projects/ProjectHero'
import CaseStudySection from '../../components/projects/CaseStudySection'
import ArchitectureDiagram from '../../components/projects/ArchitectureDiagram'
import ProjectImage from '../../components/projects/ProjectImage'
import ProjectVisual from '../../components/projects/ProjectVisual'
import TechnologyTag from '../../components/ui/TechnologyTag'
import NextProject from '../../components/projects/NextProject'
import { getProjectBySlug, getAdjacentProject } from '../../data/projects'
import { site } from '../../data/site'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'

const project = getProjectBySlug('shelfsafe')
const next = getAdjacentProject('shelfsafe')

const featureHighlights = [
  { title: 'Inventory Dashboard', description: 'A single view of stock levels, batches and risk across the pharmacy.' },
  { title: 'Expiration Monitoring', description: 'Surfaces medication approaching expiry before it becomes a liability.' },
  { title: 'Batch / Lot Tracking', description: 'Tracks stock at the batch level, not just by SKU.' },
  { title: 'Reporting & Analytics', description: 'Search, filter and report across the inventory dataset.' },
]

export default function ShelfSafe() {
  useDocumentMeta({
    title: `ShelfSafe | ${site.name}`,
    description: project.description,
  })

  return (
    <div>
      <ProjectHero project={project} />

      <div className="container-page pb-16 md:pb-20">
        <ProjectVisual project={project} className="w-full min-h-[18rem] md:min-h-[28rem]" />
      </div>

      <CaseStudySection index="01" title="Overview">
        <p>{project.description}</p>
      </CaseStudySection>

      <CaseStudySection index="02" title="The Problem">
        <p>
          Pharmacy teams manage inventory that carries real risk when it's mismanaged — expired
          medication, misplaced batches, and stock levels that are hard to see at a glance.
          ShelfSafe was built to give a team an accessible, centralized way to monitor stock,
          expiration and batch data before those risks become operational or safety problems.
        </p>
      </CaseStudySection>

      <CaseStudySection index="03" title="My Role">
        <p>
          I built ShelfSafe end-to-end as the full-stack developer: the React dashboard, the
          Express/MongoDB API behind it, authentication, and the deployment pipeline to Vercel.
        </p>
      </CaseStudySection>

      {/* Architecture */}
      <section className="container-page py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] mb-2">04</p>
            <h2 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)]">
              Application Architecture
            </h2>
          </div>
          <div className="lg:col-span-9 overflow-x-auto">
            <ArchitectureDiagram
              layers={['React Dashboard', 'Express REST API', 'Auth Middleware (JWT)', 'MongoDB']}
            />
          </div>
        </div>
      </section>

      {/* Inventory Workflow */}
      <CaseStudySection index="05" title="Inventory Workflow">
        <p>
          The core workflow centers on a dashboard that surfaces medication stock, low-stock
          alerts and expiration windows at a glance, with search and filtering to drill into
          specific batches or medications. Authenticated users manage records through the same
          interface, backed by the REST API and validated at the database layer.
        </p>
      </CaseStudySection>

      {/* Key Features */}
      <section className="container-page py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] mb-2">06</p>
            <h2 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)]">Key Features</h2>
          </div>
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featureHighlights.map((f) => (
              <div key={f.title}>
                <ProjectImage
                  src={null}
                  label={f.title}
                  sublabel="Screenshot coming soon"
                  className="w-full aspect-[4/3] mb-4"
                />
                <h3 className="text-sm text-[var(--color-ink)]">{f.title}</h3>
                <p className="text-sm text-[var(--color-ink-muted)] mt-1">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudySection index="07" title="Backend, Database & Authentication">
        <p>
          The API is built on Node.js and Express, with MongoDB as the data layer for medications,
          batches and inventory records. Authentication is JWT-based, gating write access to
          inventory data behind an authenticated session.
        </p>
      </CaseStudySection>

      <CaseStudySection index="08" title="Technical Challenges">
        <p>
          {/* TODO: expand with specifics once documented — kept honest rather than invented. */}
          Key challenges centered on modeling inventory data in a way that supports both
          batch-level tracking and fast dashboard queries, and designing expiration/low-stock
          logic that stays accurate as records change.
        </p>
      </CaseStudySection>

      <CaseStudySection index="09" title="Outcome">
        <p>
          ShelfSafe is live and deployed at{' '}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-ink)] hover:text-[var(--color-accent)] underline underline-offset-4"
          >
            shelf-safe-wmdd.vercel.app
          </a>
          , with a working dashboard, authenticated API and MongoDB-backed inventory tracking.
        </p>
      </CaseStudySection>

      <CaseStudySection index="10" title="Lessons">
        <p>
          {/* TODO: personalize with specific lessons once ready to write them. */}
          ShelfSafe reinforced how much of a data-heavy dashboard's quality comes down to the
          shape of the underlying schema — good data modeling made the dashboard and reporting
          layer considerably simpler to build.
        </p>
      </CaseStudySection>

      <div className="container-page py-8 border-t border-[var(--color-border)]">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <TechnologyTag key={t}>{t}</TechnologyTag>
          ))}
        </div>
      </div>

      <NextProject project={next} />
    </div>
  )
}
