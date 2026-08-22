import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NextProject({ project }) {
  return (
    <section className="border-t border-[var(--color-border)]">
      <Link to={`/work/${project.slug}`} className="group block container-page py-16 md:py-24">
        <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] uppercase mb-4">Next Project</p>
        <div className="flex items-center justify-between gap-6">
          <h2 className="font-[var(--font-display)] text-[clamp(2rem,6vw,4.5rem)] leading-none text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
            {project.title}
          </h2>
          <ArrowRight
            size={32}
            className="shrink-0 text-[var(--color-ink-faint)] group-hover:text-[var(--color-accent)] group-hover:translate-x-2 transition-all"
          />
        </div>
        <p className="mt-3 text-[var(--color-ink-muted)]">{project.tagline}</p>
      </Link>
    </section>
  )
}
