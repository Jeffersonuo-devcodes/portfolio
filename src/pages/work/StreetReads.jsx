import ProjectHero from '../../components/projects/ProjectHero'
import CaseStudySection from '../../components/projects/CaseStudySection'
import ArchitectureDiagram from '../../components/projects/ArchitectureDiagram'
import ProjectImage from '../../components/projects/ProjectImage'
import ProjectVisual from '../../components/projects/ProjectVisual'
import TechnologyTag from '../../components/ui/TechnologyTag'
import AwardBadge from '../../components/ui/AwardBadge'
import NextProject from '../../components/projects/NextProject'
import { getProjectBySlug, getAdjacentProject } from '../../data/projects'
import { site } from '../../data/site'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'

const project = getProjectBySlug('street-reads')
const next = getAdjacentProject('street-reads')

const featureHighlights = [
  { title: 'Interactive Map', description: 'Discover community BookBoxes plotted on a live TomTom map.' },
  { title: 'Add BookBox Workflow', description: 'Contribute a new BookBox with location, details and a photo.' },
  { title: 'Favorites', description: 'Save BookBoxes to revisit, backed by per-user Firestore data.' },
  { title: 'Real-Time Updates', description: 'New and updated BookBoxes reflect across the map via Firestore.' },
]

export default function StreetReads() {
  useDocumentMeta({
    title: `Street Reads | ${site.name}`,
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
          Community BookBoxes exist all over cities, but there was no easy way to discover where
          they were or contribute a new one. Street Reads solves this with a map-first interface
          that turns scattered, informal book-sharing points into something discoverable.
        </p>
      </CaseStudySection>

      <CaseStudySection index="03" title="Developer Lead Role">
        <p>
          I led development on Street Reads — driving the technical architecture, the map and
          location integration, and the Firebase/Firestore data layer, while coordinating how the
          rest of the feature set (authentication, favorites, image uploads) fit together into a
          single cohesive application.
        </p>
      </CaseStudySection>

      {/* Architecture */}
      <section className="container-page py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] mb-2">04</p>
            <h2 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)]">Architecture</h2>
          </div>
          <div className="lg:col-span-9 overflow-x-auto">
            <ArchitectureDiagram
              layers={['Browser', 'JavaScript Application', ['Firebase / Firestore', 'TomTom Maps', 'Cloudinary']]}
            />
          </div>
        </div>
      </section>

      <CaseStudySection index="05" title="Location & Mapping">
        <p>
          The map experience is built on the TomTom Maps SDK, combined with browser geolocation
          to center the map on the user and reverse geocoding to translate coordinates into
          readable addresses when a BookBox is added.
        </p>
      </CaseStudySection>

      <CaseStudySection index="06" title="Real-Time Data">
        <p>
          Firestore backs BookBox records, favorites and user data, with Firebase Authentication
          gating write actions. Firestore's real-time listeners keep the map in sync as BookBoxes
          are added, without a manual refresh.
        </p>
      </CaseStudySection>

      <CaseStudySection index="07" title="Image Workflow">
        <p>
          Adding a BookBox includes a photo, captured or uploaded from the device and stored via
          Cloudinary, with the resulting URL attached to the BookBox's Firestore record.
        </p>
      </CaseStudySection>

      {/* Key Features */}
      <section className="container-page py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] mb-2">08</p>
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

      <CaseStudySection index="09" title="Challenges">
        <p>
          {/* TODO: expand with specifics once documented — kept honest rather than invented. */}
          Leading the map and data layer meant handling map-bounds-aware querying, keeping
          Firestore reads efficient as BookBoxes scale, and building error handling around
          geolocation permissions and failed uploads so the experience stays reliable.
        </p>
      </CaseStudySection>

      <CaseStudySection index="10" title="Outcome">
        <div className="space-y-5">
          <AwardBadge label="Best Product" sublabel="Showcase" />
          <p>
            Street Reads shipped as a full location-based web application, live at{' '}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-ink)] hover:text-[var(--color-accent)] underline underline-offset-4"
            >
              streetreads.netlify.app
            </a>
            , and was recognized as Best Product at its Showcase.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection index="11" title="Lessons Learned">
        <p>
          {/* TODO: personalize with specific lessons once ready to write them. */}
          Leading development on Street Reads surfaced how much of a location-based product's
          quality lives in the details — permission flows, real-time sync edge cases, and keeping
          a map interface responsive as data grows.
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
