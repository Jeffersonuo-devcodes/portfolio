import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Small card linking a case study to the engineering note written about it.
export default function LinkedEngineeringNote({ note }) {
  return (
    <Link
      to={`/engineering/${note.slug}`}
      className="group flex items-center justify-between gap-6 rounded-2xl border border-[var(--color-border)] p-6 hover:border-[var(--color-accent)]/50 transition-colors"
    >
      <div>
        <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-accent)] mb-2">{note.category}</p>
        <p className="font-[var(--font-display)] text-lg text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
          {note.title}
        </p>
        <p className="text-sm text-[var(--color-ink-muted)] mt-1">{note.subtitle}</p>
      </div>
      <ArrowRight
        size={18}
        className="shrink-0 text-[var(--color-ink-faint)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all"
      />
    </Link>
  )
}
