import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import RevealOnScroll from '../ui/RevealOnScroll'
import TechnologyTag from '../ui/TechnologyTag'
import StatusBadge from '../ui/StatusBadge'
import AwardBadge from '../ui/AwardBadge'
import ProjectVisual from './ProjectVisual'

// Large alternating image/text block used for the three flagship projects on the homepage —
// each reads as a small case-study preview rather than a compact card.
export default function FeaturedProject({ project, reverse = false }) {
  return (
    <RevealOnScroll
      className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="lg:col-span-7">
        <Link to={`/work/${project.slug}`} className="group block">
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-transform duration-500 ease-out group-hover:scale-[1.015]">
            <ProjectVisual
              project={project}
              className="w-full min-h-[20rem] md:min-h-[28rem] lg:min-h-[32rem]"
            />
          </div>
        </Link>
      </div>

      <div className="lg:col-span-5">
        <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] mb-5">
          {project.number} / {project.title.toUpperCase()}
        </p>

        <h3 className="font-[var(--font-display)] text-[clamp(2rem,3.8vw,3rem)] leading-[1.06] text-[var(--color-ink)]">
          {project.tagline}
        </h3>

        <div className="flex flex-wrap items-center gap-4 mt-6">
          <StatusBadge status={project.status} />
          {project.award && <AwardBadge label="Best Product" sublabel="Showcase" />}
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-[var(--color-border)]">
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-ink-faint)] mb-1.5">Platform</p>
            <p className="text-sm text-[var(--color-ink)]">{project.type}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-ink-faint)] mb-1.5">Stack</p>
            <p className="text-sm text-[var(--color-ink)]">{project.stackShort}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechnologyTag key={tech}>{tech}</TechnologyTag>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-9">
          <Link
            to={`/work/${project.slug}`}
            className="group/link inline-flex items-center gap-1.5 text-base text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
          >
            Explore Case Study
            <ArrowRight size={16} className="transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
            >
              View Live Project
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </RevealOnScroll>
  )
}
