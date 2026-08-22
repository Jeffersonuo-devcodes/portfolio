import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import { notes } from '../data/notes'
import { site } from '../data/site'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function Engineering() {
  useDocumentMeta({
    title: `Engineering Notes | ${site.name}`,
    description: 'Thoughts, experiments and lessons from building software.',
  })

  return (
    <div className="container-page py-16 md:py-24">
      <SectionHeading
        eyebrow="Engineering Notes"
        title="Engineering Notes"
        description="Thoughts, experiments and lessons from building software."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {notes.map((note, i) => (
          <RevealOnScroll
            key={note.slug}
            delay={i * 0.04}
            className="rounded-2xl border border-[var(--color-border)] p-7 flex flex-col justify-between min-h-[13rem]"
          >
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-accent)] mb-4">{note.relatedTo}</p>
              <h2 className="font-[var(--font-display)] text-xl text-[var(--color-ink)] leading-snug">
                {note.title}
              </h2>
              <p className="text-sm text-[var(--color-ink-muted)] mt-3 leading-relaxed">{note.excerpt}</p>
            </div>
            <div className="flex items-center gap-2 mt-6 text-xs tracking-wide uppercase text-[var(--color-ink-faint)]">
              Coming soon
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className="mt-16 flex items-center gap-2 text-sm text-[var(--color-ink-muted)]">
        <ArrowRight size={15} className="text-[var(--color-ink-faint)]" />
        More notes are written as projects reach the point worth writing about.
      </RevealOnScroll>
    </div>
  )
}
