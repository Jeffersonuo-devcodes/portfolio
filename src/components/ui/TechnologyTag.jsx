export default function TechnologyTag({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 text-xs tracking-wide text-[var(--color-ink-muted)] border border-[var(--color-border)] rounded-full whitespace-nowrap hover:border-[var(--color-accent)] hover:text-[var(--color-ink)] transition-colors">
      {children}
    </span>
  )
}
