import ProjectHero from '../../components/projects/ProjectHero'
import CaseStudySection from '../../components/projects/CaseStudySection'
import ArchitectureDiagram from '../../components/projects/ArchitectureDiagram'
import ProjectImage from '../../components/projects/ProjectImage'
import ProjectVisual from '../../components/projects/ProjectVisual'
import TechnologyTag from '../../components/ui/TechnologyTag'
import LinkedEngineeringNote from '../../components/projects/LinkedEngineeringNote'
import NextProject from '../../components/projects/NextProject'
import { getProjectBySlug, getAdjacentProject } from '../../data/projects'
import { getNoteBySlug } from '../../data/notes'
import { site } from '../../data/site'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'

const project = getProjectBySlug('shelfsafe')
const next = getAdjacentProject('shelfsafe')
const linkedNote = getNoteBySlug('shelfsafe-serverless-reports')

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

      <CaseStudySection index="02" title="The Product">
        <p>{project.overview}</p>
      </CaseStudySection>

      <CaseStudySection index="03" title="My Role">
        <p>
          I built ShelfSafe end-to-end as the full-stack developer: the React dashboard, the
          Express/MongoDB API behind it, authentication, and the deployment pipeline to Vercel.
        </p>
      </CaseStudySection>

      <CaseStudySection index="04" title="The Problem">
        <p>
          Pharmacy teams manage inventory that carries real risk when it's mismanaged — expired
          medication, misplaced batches, and stock levels that are hard to see at a glance.
          ShelfSafe was built to give a team an accessible, centralized way to monitor stock,
          expiration and batch data before those risks become operational or safety problems.
        </p>
      </CaseStudySection>

      <CaseStudySection index="05" title="What We Built">
        <p>
          A dashboard that surfaces medication stock, low-stock alerts and expiration windows at
          a glance, with search and filtering to drill into specific batches or medications —
          plus PDF and CSV reporting and analytics for compliance tracking, all authenticated and
          backed by MongoDB.
        </p>
      </CaseStudySection>

      {/* Architecture */}
      <section className="container-page py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] mb-2">06</p>
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

      <CaseStudySection index="07" title="My Contribution">
        <p>{project.contribution}</p>
      </CaseStudySection>

      <CaseStudySection index="08" title="Technology">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <TechnologyTag key={t}>{t}</TechnologyTag>
          ))}
        </div>
      </CaseStudySection>

      {/* Key Features */}
      <section className="container-page py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] mb-2">09</p>
            <h2 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)]">Key Features</h2>
          </div>
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featureHighlights.map((f) => (
              <div key={f.title}>
                <ProjectImage src={null} alt={f.title} className="w-full aspect-[4/3] mb-4" />
                <h3 className="text-sm text-[var(--color-ink)]">{f.title}</h3>
                <p className="text-sm text-[var(--color-ink-muted)] mt-1">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudySection index="10" title="Engineering Challenges">
        <p>
          Reports generated and downloaded correctly in local development, then failed silently
          once the application shipped to Vercel — a serverless environment has no persistent
          filesystem to write a report to and read it back from between requests. The fix was
          generating reports to Vercel Blob Storage and serving the download from the persistent
          URL it returns. The rest of the work centered on modeling inventory data to support both
          batch-level tracking and fast dashboard queries, and keeping expiration/low-stock logic
          accurate as records change.
        </p>
      </CaseStudySection>

      <CaseStudySection index="11" title="What I Learned">
        <p>
          ShelfSafe reinforced how much of a data-heavy dashboard's quality comes down to the
          shape of the underlying schema, and that "it works locally" only tells you the logic is
          right — not that the architecture fits the environment it actually ships to.
        </p>
      </CaseStudySection>

      {linkedNote && (
        <CaseStudySection index="12" title="Linked Engineering Notes">
          <LinkedEngineeringNote note={linkedNote} />
        </CaseStudySection>
      )}

      <CaseStudySection index="13" title="Result / Current Status">
        <p>
          ShelfSafe is live and deployed at{' '}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-ink)] hover:text-[var(--color-accent)] underline underline-offset-4"
          >
            shelf-safe-frontend.vercel.app
          </a>
          , with a working dashboard, authenticated API, PDF/CSV reporting and MongoDB-backed
          inventory tracking.
        </p>
      </CaseStudySection>

      <NextProject project={next} />
    </div>
  )
}
