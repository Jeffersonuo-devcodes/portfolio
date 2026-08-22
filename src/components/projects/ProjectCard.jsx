import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import StatusBadge from '../ui/StatusBadge'
import ProjectVisual from './ProjectVisual'

// Large-treatment card for flagship products on /work.
export default function ProjectCard({ project }) {
  return (
    <Link to={`/work/${project.slug}`} className="group block">
      <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-transform duration-500 ease-out group-hover:scale-[1.015]">
        <ProjectVisual project={project} className="w-full aspect-[16/10]" />
      </div>
      <div className="flex items-start justify-between mt-5 gap-4">
        <div>
          <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] mb-2">{project.number}</p>
          <h3 className="font-[var(--font-display)] text-2xl text-[var(--color-ink)]">{project.title}</h3>
          <p className="text-sm text-[var(--color-ink-muted)] mt-1">{project.tagline}</p>
        </div>
        <ArrowRight
          size={18}
          className="mt-2 shrink-0 text-[var(--color-ink-faint)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all"
        />
      </div>
      <div className="mt-3">
        <StatusBadge status={project.status} />
      </div>
    </Link>
  )
}
