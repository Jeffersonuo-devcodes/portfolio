import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import StatusBadge from '../components/ui/StatusBadge'
import TechnologyTag from '../components/ui/TechnologyTag'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectImage from '../components/projects/ProjectImage'
import { projects, clientWork, previousWork, labs } from '../data/projects'
import { site } from '../data/site'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function Work() {
  useDocumentMeta({
    title: `Work | ${site.name}`,
    description: 'A collection of products, client work and earlier projects that reflect how my development skills have evolved.',
  })

  return (
    <div className="container-page py-16 md:py-24">
      <SectionHeading
        eyebrow="Work"
        title="Selected Work"
        description="A collection of products, client work and earlier projects that reflect how my development skills have evolved."
      />

      {/* Featured Products */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      {/* Client & Community Work */}
      <section className="mt-28 md:mt-36">
        <RevealOnScroll>
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)] mb-10">
            Client &amp; Community Work
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {clientWork.map((item) => (
            <RevealOnScroll key={item.slug} className="rounded-2xl border border-[var(--color-border)] p-6">
              <ProjectImage
                src={item.image}
                alt={`${item.title} preview`}
                label={item.title.toUpperCase()}
                sublabel={item.type}
                className="w-full aspect-[16/9] mb-5"
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-[var(--font-display)] text-lg text-[var(--color-ink)]">{item.title}</h3>
                  <p className="text-sm text-[var(--color-ink-muted)] mt-1">{item.type}</p>
                </div>
                <StatusBadge status={item.status} />
              </div>
              {item.liveUrl ? (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--color-ink)] hover:text-[var(--color-accent)] mt-5 transition-colors"
                >
                  View Live Project
                  <ArrowUpRight size={14} />
                </a>
              ) : (
                <p className="text-xs text-[var(--color-ink-faint)] mt-5 tracking-wide uppercase">
                  Live URL coming soon
                </p>
              )}
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Previous Work */}
      <section className="mt-28 md:mt-36">
        <RevealOnScroll>
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)]">Previous Work</h2>
          <p className="text-sm text-[var(--color-ink-muted)] mt-2">
            Earlier projects that helped shape how I build today.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {previousWork.map((item) => (
            <RevealOnScroll key={item.slug} className="rounded-2xl border border-[var(--color-border)] p-5 flex flex-col">
              <ProjectImage
                src={item.image}
                alt={`${item.title} archive placeholder`}
                label={item.title.toUpperCase()}
                sublabel={item.type}
                className="w-full aspect-square mb-5"
              />
              <h3 className="font-[var(--font-display)] text-base text-[var(--color-ink)]">{item.title}</h3>
              <p className="text-xs text-[var(--color-ink-muted)] mt-1">{item.type}</p>
              {item.industry && (
                <p className="text-xs text-[var(--color-ink-faint)] mt-0.5">{item.industry}</p>
              )}
              {item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {item.technologies.map((t) => (
                    <TechnologyTag key={t}>{t}</TechnologyTag>
                  ))}
                </div>
              )}
              <p className="text-xs text-[var(--color-ink-faint)] tracking-wide uppercase mt-auto pt-5">
                {item.status}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Labs & Experiments */}
      <section className="mt-28 md:mt-36 pb-8">
        <RevealOnScroll>
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)]">
            Labs &amp; Experiments
          </h2>
          <p className="text-sm text-[var(--color-ink-muted)] mt-2 max-w-lg">
            Technical exploration outside the featured applications above — not production
            products, just where the skillset keeps stretching.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {labs.map((lab, i) => (
            <RevealOnScroll
              key={lab.title}
              delay={i * 0.04}
              className="rounded-2xl border border-[var(--color-border)] p-5"
            >
              <h3 className="text-sm text-[var(--color-ink)] tracking-wide">{lab.title}</h3>
              <p className="text-sm text-[var(--color-ink-muted)] mt-2">{lab.description}</p>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  )
}
