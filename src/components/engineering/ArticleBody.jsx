import ArchitectureDiagram from '../projects/ArchitectureDiagram'

// Renders a note's content-block array. Keeping notes as structured data (rather than one
// big JSX blob) means Markdown/MDX could replace this renderer later without touching notes.js.
export default function ArticleBody({ blocks }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return (
              <h2
                key={i}
                id={block.id}
                className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)] pt-6 scroll-mt-28"
              >
                {block.text}
              </h2>
            )

          case 'p':
            return (
              <p key={i} className="text-base md:text-lg text-[var(--color-ink-muted)] leading-relaxed">
                {block.text}
              </p>
            )

          case 'pull':
            return (
              <p
                key={i}
                className="font-[var(--font-display)] text-xl md:text-2xl text-[var(--color-ink)] leading-snug border-l-2 border-[var(--color-accent)] pl-6 py-1 my-8"
              >
                {block.text}
              </p>
            )

          case 'diagram':
            return (
              <div key={i} className="py-4 overflow-x-auto">
                <ArchitectureDiagram layers={block.layers} />
              </div>
            )

          case 'diagramPair':
            return (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                <div className="overflow-x-auto">
                  <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-ink-faint)] mb-2 text-center">
                    {block.beforeTitle}
                  </p>
                  <ArchitectureDiagram layers={block.beforeLayers} />
                </div>
                <div className="overflow-x-auto">
                  <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] mb-2 text-center">
                    {block.afterTitle}
                  </p>
                  <ArchitectureDiagram layers={block.afterLayers} />
                </div>
              </div>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
