// Renders a top-to-bottom architecture flow purely with HTML/CSS — no diagram image.
// `layers` is an array where each item is either a string (single box) or an array of
// strings (a branch row, e.g. services fanning out to a database and an AI service).
export default function ArchitectureDiagram({ layers, className = '' }) {
  return (
    <div className={`flex flex-col items-center py-4 ${className}`}>
      {layers.map((layer, i) => {
        const isBranch = Array.isArray(layer)
        return (
          <div key={i} className="flex flex-col items-center">
            {i > 0 && <div className="w-px h-8 bg-[var(--color-border)]" aria-hidden="true" />}

            {isBranch ? (
              <div className="inline-flex border-t border-[var(--color-border)]">
                {layer.map((node) => (
                  <div key={node} className="flex flex-col items-center px-6 md:px-10">
                    <div className="w-px h-8 bg-[var(--color-border)]" aria-hidden="true" />
                    <DiagramNode label={node} />
                  </div>
                ))}
              </div>
            ) : (
              <DiagramNode label={layer} />
            )}
          </div>
        )
      })}
    </div>
  )
}

function DiagramNode({ label }) {
  return (
    <div className="px-5 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-center min-w-[9rem]">
      <span className="text-sm tracking-wide text-[var(--color-ink)]">{label}</span>
    </div>
  )
}
