import { site } from '../../data/site'

// Editorial hero portrait. Falls back to an intentional typographic placeholder
// (never a stretched/fake image) when the real portrait hasn't been supplied yet.
//
// Crop notes: the source photo is a straight-on chest-up shot. object-position is tuned
// (not a permanent crop) so the face/hair sit with breathing room at top and the frame
// reads mid-chest-up on desktop — keeping the Curio shirt branding partially visible —
// while staying centered on the face at narrow mobile widths.
export default function PortraitFrame({ className = '' }) {
  if (!site.portraitAvailable) {
    return (
      <div
        className={`relative rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden ${className}`}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, var(--color-ink) 0, var(--color-ink) 1px, transparent 1px, transparent 16px)',
          }}
          aria-hidden="true"
        />
        <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-8">
          <p className="font-[var(--font-display)] text-3xl text-[var(--color-ink)]">JU</p>
          <p className="mt-3 text-[11px] tracking-[0.2em] uppercase text-[var(--color-ink-faint)]">
            Portrait pending
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute -inset-8 md:-inset-12 rounded-[3rem] opacity-80 -z-10"
        style={{
          background: 'radial-gradient(55% 55% at 50% 35%, var(--color-accent-soft), transparent 72%)',
        }}
        aria-hidden="true"
      />
      <div className="relative rounded-[2rem] border border-[var(--color-border)] overflow-hidden h-full w-full shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
        <img
          src={site.portraitSrc}
          alt={site.portraitAlt}
          className="h-full w-full object-cover object-[center_8%] md:object-[center_10%]"
          loading="eager"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ boxShadow: 'inset 0 -4rem 4rem -2rem rgba(0,0,0,0.4)' }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
