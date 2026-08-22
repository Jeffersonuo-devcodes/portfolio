import { useState } from 'react'

// Renders the real project image if one is supplied and loads successfully. If no image is
// configured, or it fails to load, this renders nothing — no fabricated placeholder graphic.
export default function ProjectImage({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) return null

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
