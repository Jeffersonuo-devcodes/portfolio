import SectionHeading from '../components/ui/SectionHeading'
import TechnologyTag from '../components/ui/TechnologyTag'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectImage from '../components/projects/ProjectImage'
import { projects, communityWork, inDevelopment, previousWork, labs } from '../data/projects'
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

      {/* Selected Work */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      {/* Community Work */}
      <section className="mt-28 md:mt-36">
        <RevealOnScroll>
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)]">Community Work</h2>
          <p className="text-sm text-[var(--color-ink-muted)] mt-2 max-w-lg">
            Delivered through client and community projects alongside my own products.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 max-w-2xl">
          {communityWork.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* In Development */}
      <section className="mt-28 md:mt-36">
        <RevealOnScroll>
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)]">In Development</h2>
          <p className="text-sm text-[var(--color-ink-muted)] mt-2 max-w-lg">
            What I'm actively building right now, alongside the work above.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 max-w-2xl">
          {inDevelopment.map((project) => (
            <ProjectCard key={project.slug} project={project} />
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
                className="w-full aspect-square mb-5"
              />
              <h3 className="font-[var(--font-display)] text-base text-[var(--color-ink)]">{item.title}</h3>
              <p className="text-xs text-[var(--color-ink-muted)] mt-1">{item.type}</p>
              {item.industry && (
                <p className="text-xs text-[var(--color-ink-faint)] mt-0.5">{item.industry}</p>
              )}
              {item.description && (
                <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed mt-3">{item.description}</p>
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
