// Lightweight browser-chrome frame for web-app screenshots — just enough context to read
// as "a real application", without simulating a literal browser. Uses flexbox so the image
// area always fills whatever height the caller sets on the frame, regardless of the
// screenshot's own aspect ratio (a full-page capture vs. a single-viewport one).
export default function BrowserFrame({ children, className = '' }) {
  return (
    <div className={`flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--color-border)] shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-ink-faint)]/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-ink-faint)]/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-ink-faint)]/40" />
      </div>
      <div className="relative flex-1 min-h-0">{children}</div>
    </div>
  )
}
