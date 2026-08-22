import { ArrowUpRight } from 'lucide-react'
import RevealOnScroll from '../ui/RevealOnScroll'
import AwardBadge from '../ui/AwardBadge'
import { GithubIcon } from '../ui/BrandIcons'

export default function ProjectHero({ project }) {
  const meta = [
    { label: 'Role', value: project.role },
    { label: 'Year', value: project.year },
    { label: 'Platform', value: project.type },
  ]

  return (
    <section className="container-page pt-14 md:pt-24 pb-14">
      <RevealOnScroll>
        <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)] uppercase mb-6">
          {project.number} / Case Study
        </p>
        <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] text-[var(--color-ink)]">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-[var(--color-ink-muted)] leading-relaxed">
          {project.tagline}
        </p>

        {project.award && <AwardBadge label="Best Product" sublabel="Showcase" className="mt-6" />}

        <div className="flex flex-wrap gap-x-12 gap-y-6 mt-12 pt-8 border-t border-[var(--color-border)]">
          {meta.map((m) => (
            <div key={m.label}>
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-ink-faint)] mb-1.5">{m.label}</p>
              <p className="text-sm text-[var(--color-ink)]">{m.value}</p>
            </div>
          ))}
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-ink-faint)] mb-1.5">Technologies</p>
            <p className="text-sm text-[var(--color-ink)] max-w-md">{project.technologies.join(' · ')}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm rounded-full text-[var(--color-bg)] bg-[var(--color-accent)] px-6 py-3.5 hover:bg-[var(--color-ink)] transition-colors"
            >
              View Live Project
              <ArrowUpRight size={15} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm rounded-full text-[var(--color-ink)] border border-[var(--color-border)] px-6 py-3.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              <GithubIcon size={15} />
              View Source
            </a>
          )}
        </div>
      </RevealOnScroll>
    </section>
  )
}
