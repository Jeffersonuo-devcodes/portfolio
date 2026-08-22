import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { site } from '../../data/site'
import { socials } from '../../data/socials'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container-page py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="font-[var(--font-display)] text-lg text-[var(--color-ink)]">{site.name}</p>
          <p className="text-sm text-[var(--color-ink-muted)]">{site.role}</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Send an email"
            className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="text-xs text-[var(--color-ink-faint)] tracking-wide">
          Built with React. © {new Date().getFullYear()} {site.name}.
        </div>
      </div>
    </footer>
  )
}
