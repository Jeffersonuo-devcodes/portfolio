import { ArrowDown } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import TechnologyTag from '../components/ui/TechnologyTag'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import { experience } from '../data/experience'
import { education } from '../data/education'
import { skillGroups, journey } from '../data/skills'
import { certifications } from '../data/certifications'
import { site } from '../data/site'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function About() {
  useDocumentMeta({
    title: `About | ${site.name}`,
    description: 'Engineering foundations, software mindset, product focus — the background behind the work.',
  })

  return (
    <div>
      {/* Hero */}
      <section className="container-page pt-16 md:pt-24 pb-16">
        <RevealOnScroll>
          <p className="text-xs font-medium tracking-[0.2em] text-[var(--color-accent)] uppercase mb-6">About</p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-[var(--color-ink)] max-w-4xl">
            Engineering foundations. Software mindset. Product focus.
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08} className="mt-10 max-w-2xl space-y-5 text-base md:text-lg text-[var(--color-ink-muted)] leading-relaxed">
          <p>
            I'm a Full-Stack Web &amp; Mobile Developer based in Burnaby, BC, with a strong
            frontend foundation and experience building applications across web, mobile, APIs,
            databases, authentication and deployment — from translating designs into responsive
            interfaces to building database-backed products.
          </p>
          <p>
            My journey has taken me through electrical engineering, front-end development,
            enterprise fintech software, full-stack product delivery and mobile development.
            Frontend engineering remains one of my strongest foundations — it's just no longer
            the whole picture. That progression has shaped how I approach software today:
            understand the problem, build intentionally and make the final experience feel
            complete.
          </p>
        </RevealOnScroll>
      </section>

      {/* Experience */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-page py-20 md:py-28">
          <SectionHeading eyebrow="Career" title="Experience" />

          <div className="mt-16 flex flex-col">
            {experience.map((job, i) => (
              <RevealOnScroll
                key={job.company}
                delay={i * 0.06}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-[var(--color-border)] last:border-b"
              >
                <div className="md:col-span-3">
                  <p className="text-sm text-[var(--color-ink-faint)]">{job.dates}</p>
                  {job.location && (
                    <p className="text-xs text-[var(--color-ink-faint)] mt-1">{job.location}</p>
                  )}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-[var(--font-display)] text-xl text-[var(--color-ink)]">{job.company}</h3>
                  <p className="text-sm text-[var(--color-ink-muted)] mt-1">{job.role}</p>
                </div>
                <div className="md:col-span-5">
                  {job.description && (
                    <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed mb-3">{job.description}</p>
                  )}
                  {job.areas.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {job.areas.map((a) => (
                        <TechnologyTag key={a}>{a}</TechnologyTag>
                      ))}
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-page py-20 md:py-28">
          <SectionHeading eyebrow="Background" title="Education" />

          <div className="mt-16 flex flex-col items-stretch">
            {education.map((edu, i) => (
              <div key={edu.institution}>
                <RevealOnScroll delay={i * 0.08} className="rounded-3xl border border-[var(--color-border)] p-8 md:p-10">
                  <p className="text-xs tracking-[0.2em] text-[var(--color-accent)] uppercase mb-2">{edu.stage}</p>
                  <p className="text-sm text-[var(--color-ink-faint)] mb-6">{edu.dates}</p>
                  <h3 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)]">
                    {edu.institution}
                  </h3>
                  <p className="text-base text-[var(--color-ink)] mt-3">{edu.credential}</p>
                  <p className="text-base text-[var(--color-ink-muted)] mt-1">{edu.focus}</p>
                  <p className="text-sm text-[var(--color-ink-muted)] mt-5 leading-relaxed max-w-xl">{edu.note}</p>
                </RevealOnScroll>

                {i < education.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowDown size={18} className="text-[var(--color-ink-faint)]" aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-page py-20 md:py-28">
          <SectionHeading eyebrow="Progression" title="Professional Journey" />

          <RevealOnScroll className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-4">
            {journey.map((step, i) => (
              <div key={step} className="flex flex-col md:flex-row items-center gap-6 md:gap-4">
                <p className="text-sm md:text-base text-center text-[var(--color-ink)] md:max-w-[9rem]">{step}</p>
                {i < journey.length - 1 && (
                  <span className="text-[var(--color-ink-faint)] rotate-90 md:rotate-0" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-page py-20 md:py-28">
          <SectionHeading eyebrow="Toolkit" title="Skills" />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {skillGroups.map((group, i) => (
              <RevealOnScroll key={group.category} delay={i * 0.04}>
                <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-ink-faint)] mb-4">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <TechnologyTag key={item}>{item}</TechnologyTag>
                  ))}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="border-t border-[var(--color-border)]">
          <div className="container-page py-20 md:py-24">
            <SectionHeading eyebrow="Additional" title="Certifications" />
            <div className="mt-10 flex flex-col divide-y divide-[var(--color-border)]">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center justify-between py-4 gap-4">
                  <p className="text-sm text-[var(--color-ink)]">{cert.name}</p>
                  {cert.issuer && (
                    <p className="text-xs text-[var(--color-ink-faint)] shrink-0">{cert.issuer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
