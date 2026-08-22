export default function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-medium tracking-[0.2em] text-[var(--color-accent)] uppercase mb-4">{eyebrow}</p>
      )}
      <h2 className="font-[var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] text-[var(--color-ink)]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[var(--color-ink-muted)] text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  )
}
