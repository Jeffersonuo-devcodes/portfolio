import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import TechnologyTag from '../components/ui/TechnologyTag'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import { notes, principles, currentlyExploring } from '../data/notes'
import { site } from '../data/site'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const positioning = [
  { label: 'Full-Stack', value: 'APIs · Authentication · Databases · Application Logic' },
  { label: 'Mobile', value: 'React Native · Expo · Camera · Device Workflows' },
  { label: 'Frontend', value: 'React · Next.js · Angular · TypeScript' },
  { label: 'Cloud', value: 'Vercel · AWS · Firebase · Docker' },
  { label: 'Product', value: 'Requirements → Architecture → Build → Test → Deploy' },
]

function NoteCard({ note, large = false }) {
  return (
    <Link to={`/engineering/${note.slug}`} className="group block h-full">
      <div
        className={`h-full flex flex-col justify-between rounded-2xl border border-[var(--color-border)] p-7 md:p-9 transition-colors group-hover:border-[var(--color-accent)]/50 ${
          large ? 'md:p-10' : ''
        }`}
      >
        <div>
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-accent)] mb-4">{note.category}</p>
          <h3
            className={`font-[var(--font-display)] text-[var(--color-ink)] leading-tight ${
              large ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
            }`}
          >
            {note.title}
          </h3>
          <p className={`text-[var(--color-ink-muted)] mt-4 leading-relaxed ${large ? 'text-base md:text-lg max-w-md' : 'text-sm'}`}>
            {note.subtitle}
          </p>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-1.5 mb-6">
            {note.technologies.slice(0, large ? 5 : 3).map((t) => (
              <TechnologyTag key={t}>{t}</TechnologyTag>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
            {note.readingTime}
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function Engineering() {
  useDocumentMeta({
    title: `Engineering Notes | ${site.name}`,
    description: 'Problems solved, decisions made, and lessons picked up while building across web, backend, mobile and cloud.',
  })

  const featured = notes.filter((n) => n.featured)
  const more = notes.filter((n) => !n.featured)
  const [flagship, ...restFeatured] = featured

  return (
    <div>
      {/* Hero */}
      <section className="container-page pt-16 md:pt-24 pb-14">
        <RevealOnScroll>
          <p className="text-xs font-medium tracking-[0.2em] text-[var(--color-accent)] uppercase mb-6">Engineering</p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-[var(--color-ink)] max-w-3xl">
            Engineering notes from building real products.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-[var(--color-ink-muted)] leading-relaxed">
            Problems I've solved, decisions I've made, and lessons I've picked up while building
            across web, backend, mobile and cloud.
          </p>
          <p className="mt-3 text-sm text-[var(--color-ink-faint)]">Not tutorials. Just things worth writing down.</p>
        </RevealOnScroll>
      </section>

      {/* Positioning strip */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-page py-10">
          <RevealOnScroll className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-6">
            {positioning.map((p) => (
              <div key={p.label}>
                <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-ink-faint)] mb-1.5">{p.label}</p>
                <p className="text-sm text-[var(--color-ink-muted)]">{p.value}</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* Featured Notes */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-page section-pad">
          <SectionHeading eyebrow="Featured" title="Featured Notes" />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {flagship && (
              <RevealOnScroll className="lg:row-span-1">
                <NoteCard note={flagship} large />
              </RevealOnScroll>
            )}
            <div className="grid grid-cols-1 gap-6">
              {restFeatured.map((note, i) => (
                <RevealOnScroll key={note.slug} delay={i * 0.05}>
                  <NoteCard note={note} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More Notes */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-page section-pad">
          <SectionHeading eyebrow="More" title="More Notes" />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {more.map((note, i) => (
              <RevealOnScroll key={note.slug} delay={i * 0.04}>
                <NoteCard note={note} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-page section-pad">
          <SectionHeading eyebrow="Principles" title="How I try to approach the work." />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {principles.map((p, i) => (
              <RevealOnScroll key={p} delay={i * 0.04} className="flex gap-5">
                <span className="text-sm text-[var(--color-ink-faint)] shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-base text-[var(--color-ink)] leading-relaxed">{p}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Exploring */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-page section-pad">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-ink-faint)] mb-5">Currently Exploring</p>
            <p className="text-base text-[var(--color-ink-muted)] max-w-lg leading-relaxed mb-8">
              Areas I'm actively expanding into as I continue developing my backend, cloud and
              systems knowledge.
            </p>
            <div className="flex flex-wrap gap-2">
              {currentlyExploring.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1.5 text-xs tracking-wide text-[var(--color-ink-faint)] border border-dashed border-[var(--color-border)] rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}
