const statusColor = {
  Active: 'var(--color-active)',
  Featured: 'var(--color-accent)',
  Live: 'var(--color-active)',
  'In Development': 'var(--color-accent)',
  'Previous Project': 'var(--color-ink-faint)',
  Archived: 'var(--color-ink-faint)',
}

export default function StatusBadge({ status }) {
  const color = statusColor[status] || 'var(--color-ink-faint)'
  return (
    <span className="inline-flex items-center gap-2 text-xs tracking-wide text-[var(--color-ink-muted)] uppercase">
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
      {status}
    </span>
  )
}
