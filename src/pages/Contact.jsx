import { Mail, ArrowUpRight, ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import { socials } from '../data/socials'
import { site } from '../data/site'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function Contact() {
  useDocumentMeta({
    title: `Contact | ${site.name}`,
    description: "Let's build something useful — reach out about software engineering opportunities and collaborations.",
  })

  const links = [
    {
      label: 'Email Me',
      value: socials.email,
      href: `mailto:${socials.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: 'LinkedIn',
      value: 'jeffersonuo-dev',
      href: socials.linkedin,
      icon: LinkedinIcon,
      external: true,
    },
    {
      label: 'GitHub',
      value: 'jeffersonuo-dev',
      href: socials.github,
      icon: GithubIcon,
      external: true,
    },
  ]

  return (
    <div className="container-page pt-16 md:pt-24 pb-24">
      <RevealOnScroll className="max-w-2xl">
        <p className="text-xs font-medium tracking-[0.2em] text-[var(--color-accent)] uppercase mb-6">Contact</p>
        <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-[var(--color-ink)]">
          Let's build something useful.
        </h1>
        <p className="mt-6 text-base md:text-lg text-[var(--color-ink-muted)] leading-relaxed">
          I'm interested in software engineering opportunities, thoughtful products, challenging
          development problems and collaborations worth building.
        </p>
        <p className="mt-4 text-sm text-[var(--color-ink-faint)]">Based in {site.location}.</p>
      </RevealOnScroll>

      <div className="mt-16 flex flex-col">
        {links.map((link, i) => {
          const Icon = link.icon
          return (
            <RevealOnScroll key={link.label} delay={i * 0.05}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between gap-6 py-7 border-t border-[var(--color-border)] last:border-b"
              >
                <div className="flex items-center gap-5">
                  <Icon size={20} className="text-[var(--color-ink-faint)] group-hover:text-[var(--color-accent)] transition-colors" />
                  <div>
                    <p className="font-[var(--font-display)] text-xl md:text-2xl text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                      {link.label}
                    </p>
                    <p className="text-sm text-[var(--color-ink-muted)] mt-0.5">{link.value}</p>
                  </div>
                </div>
                {link.external ? (
                  <ArrowUpRight size={20} className="text-[var(--color-ink-faint)] group-hover:text-[var(--color-accent)] transition-colors shrink-0" />
                ) : null}
              </a>
            </RevealOnScroll>
          )
        })}

        {site.resumeAvailable && (
          <RevealOnScroll delay={0.15}>
            <a
              href={site.resumeUrl}
              className="group flex items-center justify-between gap-6 py-7 border-t border-[var(--color-border)] last:border-b"
            >
              <div className="flex items-center gap-5">
                <ArrowDown size={20} className="text-[var(--color-ink-faint)] group-hover:text-[var(--color-accent)] transition-colors" />
                <p className="font-[var(--font-display)] text-xl md:text-2xl text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  Download Resume
                </p>
              </div>
            </a>
          </RevealOnScroll>
        )}
      </div>
    </div>
  )
}
