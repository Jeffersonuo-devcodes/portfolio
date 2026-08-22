import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center gap-2 text-sm tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4'

const variants = {
  primary: 'px-6 py-3.5 rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-ink)]',
  secondary:
    'px-6 py-3.5 rounded-full border border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  ghost: 'text-[var(--color-ink)] hover:text-[var(--color-accent)] py-1',
}

export default function Button({ as = 'button', to, href, variant = 'primary', className = '', children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    const external = /^https?:\/\//.test(href)
    return (
      <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
