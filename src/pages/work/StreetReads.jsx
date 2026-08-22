import ProjectHero from '../../components/projects/ProjectHero'
import CaseStudySection from '../../components/projects/CaseStudySection'
import ArchitectureDiagram from '../../components/projects/ArchitectureDiagram'
import ProjectImage from '../../components/projects/ProjectImage'
import ProjectVisual from '../../components/projects/ProjectVisual'
import TechnologyTag from '../../components/ui/TechnologyTag'
import AwardBadge from '../../components/ui/AwardBadge'
import LinkedEngineeringNote from '../../components/projects/LinkedEngineeringNote'
import NextProject from '../../components/projects/NextProject'
import { getProjectBySlug, getAdjacentProject } from '../../data/projects'
import { getNoteBySlug } from '../../data/notes'
import { site } from '../../data/site'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'

const project = getProjectBySlug('street-reads')
const next = getAdjacentProject('street-reads')
const linkedNote = getNoteBySlug('streetreads-location-discovery')

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

      <CaseStudySection index="02" title="The Product">
        <p>{project.overview}</p>
      </CaseStudySection>

      <CaseStudySection index="03" title="My Role">
        <p>
          I led development on Street Reads — driving the technical architecture, the map and
          location integration, and the Firebase/Firestore data layer, while coordinating how the
          rest of the feature set (authentication, favorites, image uploads) fit together into a
          single cohesive application.
        </p>
      </CaseStudySection>

      <CaseStudySection index="04" title="The Problem">
        <p>
          Community BookBoxes exist all over cities, but there was no easy way to discover where
          they were or contribute a new one. Street Reads solves this with a map-first interface
          that turns scattered, informal book-sharing points into something discoverable.
        </p>
      </CaseStudySection>

      <CaseStudySection index="05" title="What We Built">
        <p>
          A location-aware map experience built on the TomTom Maps SDK, combined with browser
          geolocation and reverse geocoding to translate coordinates into readable addresses.
          Firestore backs BookBox records, favorites and user data with real-time listeners
          keeping the map in sync as new BookBoxes are added, gated behind Firebase
          Authentication. Adding a BookBox includes a photo, captured or uploaded and stored via
          Cloudinary.
        </p>
      </CaseStudySection>

      {/* Architecture */}
      <section className="container-page py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] mb-2">06</p>
            <h2 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)]">Architecture</h2>
          </div>
          <div className="lg:col-span-9 overflow-x-auto">
            <ArchitectureDiagram
              layers={['Browser', 'JavaScript Application', ['Firebase / Firestore', 'TomTom Maps', 'Cloudinary']]}
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
          Google Maps' API pricing and usage limits made it a poor fit for how the app needed to
          run, which meant migrating to TomTom Maps to compute and display the two nearest
          BookBoxes reliably. Reliable image storage was a separate problem, solved with
          Cloudinary for upload, optimization and CDN delivery. Leading the map and data layer also
          meant keeping Firestore reads efficient as BookBoxes scale and handling geolocation
          permission failures gracefully.
        </p>
      </CaseStudySection>

      <CaseStudySection index="11" title="What I Learned">
        <p>
          Leading development on Street Reads surfaced how much of a location-based product's
          quality lives in the details — permission flows, real-time sync edge cases, and
          remembering that a map full of markers isn't the same thing as a useful discovery
          feature.
        </p>
      </CaseStudySection>

      {linkedNote && (
        <CaseStudySection index="12" title="Linked Engineering Notes">
          <LinkedEngineeringNote note={linkedNote} />
        </CaseStudySection>
      )}

      <CaseStudySection index="13" title="Result / Current Status">
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

      <NextProject project={next} />
    </div>
  )
}
