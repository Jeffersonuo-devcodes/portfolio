import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { site } from '../../data/site'

const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/engineering', label: 'Engineering' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]' : 'border-b border-transparent'
      }`}
    >
      <nav
        className="mx-auto max-w-[87.5rem] flex items-center justify-between h-20 md:h-24 px-6 md:px-10 xl:px-16"
        aria-label="Primary"
      >
        <NavLink to="/" className="font-[var(--font-display)] text-xl tracking-tight text-[var(--color-ink)]">
          {site.logoText}
        </NavLink>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className="group relative py-2 text-base tracking-wide">
              {({ isActive }) => (
                <>
                  <span
                    className={
                      isActive
                        ? 'text-[var(--color-ink)]'
                        : 'text-[var(--color-ink-muted)] group-hover:text-[var(--color-ink)] transition-colors'
                    }
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-0.5 h-px bg-[var(--color-accent)] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    aria-hidden="true"
                  />
                </>
              )}
            </NavLink>
          ))}
          {site.resumeAvailable && (
            <a
              href={site.resumeUrl}
              className="text-base tracking-wide rounded-full border border-[var(--color-border)] px-5 py-2.5 text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              Resume ↓
            </a>
          )}
        </div>

        <button
          type="button"
          className="md:hidden text-[var(--color-ink)] p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg)]"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `font-[var(--font-display)] text-3xl ${
                      isActive ? 'text-[var(--color-ink)]' : 'text-[var(--color-ink-muted)]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              {site.resumeAvailable && (
                <a href={site.resumeUrl} className="mt-2 text-sm tracking-wide text-[var(--color-accent)]">
                  Resume ↓
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
