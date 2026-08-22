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

const project = getProjectBySlug('curio')
const next = getAdjacentProject('curio')

const featureHighlights = [
  { title: 'Camera-Based Exploration', description: 'Point the device camera at an everyday object to start a learning moment.' },
  { title: 'Parent Dashboard', description: 'Oversight of child profiles, activity and the content being surfaced.' },
  { title: 'Learning Journal', description: 'A running record of what a child has explored, organized by category.' },
  { title: 'Challenges', description: 'Structured prompts that turn passive exploration into active learning.' },
]

export default function Curio() {
  useDocumentMeta({
    title: `Curio | ${site.name}`,
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
          Children are naturally curious about the objects around them, but that curiosity
          rarely has a safe, structured outlet that connects the physical world to digital
          learning. Curio was built to give that curiosity a destination — a mobile experience
          a child can use to explore what's in front of them, while parents retain visibility
          and control over what's being learned.
        </p>
      </CaseStudySection>

      <CaseStudySection index="03" title="My Role">
        <p>
          I worked as the full-stack developer on Curio, building both the React Native/Expo
          mobile client and the Express/MongoDB backend that powers it — including the REST API,
          authentication flow, and the integration with the camera and AI-assisted content
          generation.
        </p>
      </CaseStudySection>

      {/* Architecture */}
      <section className="container-page py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] mb-2">04</p>
            <h2 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)]">
              Product Architecture
            </h2>
          </div>
          <div className="lg:col-span-9 overflow-x-auto">
            <ArchitectureDiagram
              layers={['React Native / Expo', 'Express REST API', 'Application Services', ['MongoDB', 'AI Service']]}
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container-page py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] mb-2">05</p>
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

      <CaseStudySection index="06" title="Technical Challenges">
        <p>
          {/* TODO: expand with specifics once documented — kept honest rather than invented. */}
          Building Curio meant working through several non-trivial problems: coordinating the
          mobile client's camera workflow with a backend service reliably, structuring JWT-based
          authentication across parent and child profiles, designing an API that could support
          age-appropriate content generation, and putting safety/moderation logic in place around
          what gets surfaced to a child.
        </p>
      </CaseStudySection>

      <CaseStudySection index="07" title="Outcome">
        <p>
          Curio shipped as a working end-to-end product: a React Native mobile app backed by a
          production Express/MongoDB API, with parent authentication, child profiles, camera-based
          exploration and a landing presence live at{' '}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-ink)] hover:text-[var(--color-accent)] underline underline-offset-4"
          >
            curio-landing.onrender.com
          </a>
          .
        </p>
      </CaseStudySection>

      <CaseStudySection index="08" title="What I Learned">
        <p>
          {/* TODO: personalize with specific lessons once ready to write them. */}
          Curio pushed my understanding of end-to-end mobile product development — from wiring a
          camera pipeline to a backend service, to thinking carefully about safety and oversight
          when the end user is a child.
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
