import { useState } from 'react'
import ImagePlaceholder from '../ui/ImagePlaceholder'

// Tries the real project image first; if it 404s (asset not supplied yet), falls back
// to the typographic placeholder automatically — no manual flag to keep in sync.
export default function ProjectImage({ src, alt, label, sublabel, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return <ImagePlaceholder label={label} sublabel={sublabel} className={className} />
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover rounded-2xl ${className}`}
    />
  )
}
