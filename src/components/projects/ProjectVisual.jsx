import ProjectImage from './ProjectImage'
import BrowserFrame from './BrowserFrame'

// Picks a presentation treatment per project.frame:
// - 'device'  → the image already reads as a device composition (e.g. phone mockups); shown as-is.
// - 'browser' → web-app screenshots get a minimal browser-chrome frame for context.
// - default   → plain rounded image/placeholder card (archive, client work, feature tiles).
export default function ProjectVisual({ project, className = '', imageClassName = '' }) {
  if (project.frame === 'device') {
    return (
      <div className={`flex items-center justify-center p-4 md:p-8 ${className}`}>
        <ProjectImage
          src={project.image}
          alt={`${project.title} app preview on mobile devices`}
          label={project.title.toUpperCase()}
          sublabel={project.type}
          className={`w-full h-full max-h-[34rem] object-contain ${imageClassName}`}
        />
      </div>
    )
  }

  if (project.frame === 'browser') {
    return (
      <BrowserFrame className={className}>
        <ProjectImage
          src={project.image}
          alt={`${project.title} application screenshot`}
          label={project.title.toUpperCase()}
          sublabel={project.type}
          className={`w-full ${imageClassName}`}
        />
      </BrowserFrame>
    )
  }

  return (
    <ProjectImage
      src={project.image}
      alt={`${project.title} preview`}
      label={project.title.toUpperCase()}
      sublabel={project.type}
      className={`w-full ${className} ${imageClassName}`}
    />
  )
}
