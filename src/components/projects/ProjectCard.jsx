import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import StatusBadge from '../ui/StatusBadge'
import TechnologyTag from '../ui/TechnologyTag'
import ProjectVisual from './ProjectVisual'

// Large-treatment card for flagship products on /work. Projects with a dedicated case study
// (caseStudy: true) link through to /work/:slug; projects without one (e.g. a delivered site
// with no write-up yet) render as a static card with just a live-project link.
export default function ProjectCard({ project }) {
  const Wrapper = project.caseStudy ? Link : 'div'
  const wrapperProps = project.caseStudy ? { to: `/work/${project.slug}` } : {}

  return (
    <Wrapper {...wrapperProps} className="group block">
      <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-transform duration-500 ease-out group-hover:scale-[1.015]">
        <ProjectVisual project={project} className="w-full aspect-[16/10]" />
      </div>
      <div className="flex items-start justify-between mt-5 gap-4">
        <div>
          {project.number && (
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] mb-2">{project.number}</p>
          )}
          <h3 className="font-[var(--font-display)] text-2xl text-[var(--color-ink)]">{project.title}</h3>
          <p className="text-sm text-[var(--color-ink-muted)] mt-1">{project.tagline}</p>
        </div>
        {project.caseStudy && (
          <ArrowRight
            size={18}
            className="mt-2 shrink-0 text-[var(--color-ink-faint)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all"
          />
        )}
      </div>

      {project.cardCopy && (
        <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed mt-4">{project.cardCopy}</p>
      )}

      {project.technologies?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.technologies.slice(0, 4).map((t) => (
            <TechnologyTag key={t}>{t}</TechnologyTag>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between mt-4 gap-4">
        <StatusBadge status={project.status} />
        {!project.caseStudy && project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            View Live Project
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </Wrapper>
  )
}
