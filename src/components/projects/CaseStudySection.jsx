import RevealOnScroll from '../ui/RevealOnScroll'

// Consistent section rhythm for every case study: small numbered label, heading, prose.
export default function CaseStudySection({ index, title, children, className = '' }) {
  return (
    <section className={`container-page py-16 md:py-20 border-t border-[var(--color-border)] ${className}`}>
      <RevealOnScroll className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-3">
          {index && <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] mb-2">{index}</p>}
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)]">{title}</h2>
        </div>
        <div className="lg:col-span-9 text-[var(--color-ink-muted)] leading-relaxed space-y-5 text-base md:text-lg">
          {children}
        </div>
      </RevealOnScroll>
    </section>
  )
}
