// Lightweight browser-chrome frame for web-app screenshots — just enough context to read
// as "a real application", without simulating a literal browser.
export default function BrowserFrame({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--color-border)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-ink-faint)]/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-ink-faint)]/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-ink-faint)]/40" />
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}
