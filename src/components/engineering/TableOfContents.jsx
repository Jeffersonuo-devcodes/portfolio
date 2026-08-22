// Sticky desktop-only table of contents, derived from the note's own heading blocks.
export default function TableOfContents({ blocks }) {
  const headings = blocks.filter((b) => b.type === 'heading')
  if (headings.length < 2) return null

  return (
    <nav aria-label="In this note" className="hidden lg:block sticky top-32 self-start">
      <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-ink-faint)] mb-4">In This Note</p>
      <ul className="space-y-3 border-l border-[var(--color-border)] pl-4">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
