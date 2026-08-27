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

const project = getProjectBySlug('curio')
const next = getAdjacentProject('curio')
const linkedNote = getNoteBySlug('curio-image-bottleneck')

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

      <CaseStudySection index="02" title="The Product">
        <p>{project.overview}</p>
      </CaseStudySection>

      <CaseStudySection index="03" title="My Role">
        <p>
          I worked as Co-Developer Lead on Curio, contributing across the React Native/Expo
          mobile client and the Express/MongoDB backend that powers it.
        </p>
      </CaseStudySection>

      <CaseStudySection index="04" title="The Problem">
        <p>
          Children are naturally curious about the objects around them, but that curiosity
          rarely has a safe, structured outlet that connects the physical world to digital
          learning. Curio was built to give that curiosity a destination — a mobile experience
          a child can use to explore what's in front of them, while parents retain visibility
          and control over what's being learned.
        </p>
      </CaseStudySection>

      <CaseStudySection index="05" title="What We Built">
        <p>
          An end-to-end mobile learning product: a React Native/Expo app where a child scans an
          object with the camera and gets back a short educational fact, sitting on top of a
          parent-controlled account system — parent authentication, per-child profiles, a parent
          dashboard, and a journal of what's been explored, all backed by an Express/MongoDB API.
        </p>
      </CaseStudySection>

      {/* Architecture */}
      <section className="container-page py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] mb-2">06</p>
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
          Oversized image payloads coming off the device camera were causing 3–5 second delays in
          the scan flow. Rather than adding a queue or a separate processing service, the fix was
          identifying image size itself as the real bottleneck and introducing client-side
          compression before the request went out — cutting scan response time by roughly 60%.
          Building Curio also meant structuring JWT-based authentication across separate parent
          and child profiles, and designing the API to support the camera-to-content workflow end
          to end.
        </p>
      </CaseStudySection>

      <CaseStudySection index="11" title="What I Learned">
        <p>
          Curio pushed my understanding of end-to-end mobile product development — from wiring a
          camera pipeline to a backend service, to thinking carefully about safety and oversight
          when the end user is a child, to catching myself reaching for infrastructure before
          confirming that infrastructure was actually the problem.
        </p>
      </CaseStudySection>

      {linkedNote && (
        <CaseStudySection index="12" title="Linked Engineering Notes">
          <LinkedEngineeringNote note={linkedNote} />
        </CaseStudySection>
      )}

      <CaseStudySection index="13" title="Result / Current Status">
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

      <NextProject project={next} />
    </div>
  )
}
