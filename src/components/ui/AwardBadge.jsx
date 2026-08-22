import { Award } from 'lucide-react'

// Premium badge treatment for recognitions — deliberately not an oversized emoji trophy.
export default function AwardBadge({ label = 'Best Product', sublabel = 'Showcase', className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent-soft)] px-4 py-2 ${className}`}
    >
      <Award size={16} className="text-[var(--color-accent)] shrink-0" aria-hidden="true" />
      <span className="text-xs tracking-[0.15em] uppercase text-[var(--color-ink)]">
        {label} <span className="text-[var(--color-ink-faint)]">/</span> {sublabel}
      </span>
    </div>
  )
}
