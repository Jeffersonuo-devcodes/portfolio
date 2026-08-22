// Intentional typographic placeholder used whenever real project imagery isn't
// available yet. Never renders a fabricated screenshot.
export default function ImagePlaceholder({ label, sublabel = 'Project imagery coming soon.', className = '' }) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center text-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, var(--color-ink) 0, var(--color-ink) 1px, transparent 1px, transparent 14px)',
        }}
        aria-hidden="true"
      />
      <p className="relative font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)] tracking-tight">
        {label}
      </p>
      <p className="relative mt-2 text-xs tracking-[0.15em] uppercase text-[var(--color-ink-faint)]">{sublabel}</p>
    </div>
  )
}
