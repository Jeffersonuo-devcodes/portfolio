import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import TechnologyTag from '../components/ui/TechnologyTag'
import ArticleBody from '../components/engineering/ArticleBody'
import TableOfContents from '../components/engineering/TableOfContents'
import { getNoteBySlug, getAdjacentNote } from '../data/notes'
import { getProjectBySlug } from '../data/projects'
import { site } from '../data/site'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function EngineeringArticle() {
  const { slug } = useParams()
  const note = getNoteBySlug(slug)

  useDocumentMeta({
    title: note ? `${note.title} | ${site.name}` : `Engineering | ${site.name}`,
    description: note?.subtitle,
  })

  if (!note) {
    return (
      <div className="container-page py-32 md:py-44 flex flex-col items-center text-center">
        <p className="text-xs tracking-[0.2em] text-[var(--color-accent)] uppercase mb-6">Engineering</p>
        <h1 className="font-[var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-ink)] max-w-xl">
          This note doesn't exist.
        </h1>
        <div className="mt-10">
          <Button to="/engineering" variant="secondary">
            Back to Engineering Notes
            <ArrowRight size={15} />
          </Button>
        </div>
      </div>
    )
  }

  const { prev, next } = getAdjacentNote(slug)
  const relatedProject = note.relatedProject ? getProjectBySlug(note.relatedProject) : null

  return (
    <article>
      <div className="container-page pt-14 md:pt-20 pb-6">
        <Link
          to="/engineering"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
        >
          <ArrowLeft size={15} />
          Engineering Notes
        </Link>
      </div>

      <RevealOnScroll className="container-page pb-14">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] mb-6">{note.category}</p>
        <h1 className="font-[var(--font-display)] text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.04] text-[var(--color-ink)] max-w-3xl">
          {note.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg md:text-xl text-[var(--color-ink-muted)] leading-relaxed">
          {note.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8 pt-8 border-t border-[var(--color-border)]">
          <span className="text-sm text-[var(--color-ink-faint)]">{note.readingTime}</span>
          <div className="flex flex-wrap gap-2">
            {note.technologies.map((t) => (
              <TechnologyTag key={t}>{t}</TechnologyTag>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <div className="container-page pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <TableOfContents blocks={note.body} />
        </div>

        <div className="lg:col-span-9 max-w-[48rem]">
          <ArticleBody blocks={note.body} />

          {relatedProject && (
            <RevealOnScroll className="mt-16 pt-10 border-t border-[var(--color-border)]">
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-ink-faint)] mb-4">
                Built While Working On
              </p>
              <Link to={`/work/${relatedProject.slug}`} className="group inline-block">
                <h3 className="font-[var(--font-display)] text-2xl text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  {relatedProject.title}
                </h3>
                <p className="text-sm text-[var(--color-ink-muted)] mt-1">{relatedProject.type}</p>
                <span className="inline-flex items-center gap-1.5 text-sm text-[var(--color-ink)] group-hover:text-[var(--color-accent)] mt-3 transition-colors">
                  Explore {relatedProject.title} Case Study
                  <ArrowRight size={14} />
                </span>
              </Link>
            </RevealOnScroll>
          )}
        </div>
      </div>

      <nav
        aria-label="More engineering notes"
        className="border-t border-[var(--color-border)] container-page py-10 flex items-center justify-between gap-6"
      >
        {prev ? (
          <Link
            to={`/engineering/${prev.slug}`}
            className="inline-flex items-center gap-2 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            <ArrowLeft size={15} />
            Previous Note
          </Link>
        ) : (
          <span />
        )}

        <Link to="/engineering" className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors">
          Back to Engineering
        </Link>

        {next ? (
          <Link
            to={`/engineering/${next.slug}`}
            className="inline-flex items-center gap-2 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            Next Note
            <ArrowRight size={15} />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  )
}
