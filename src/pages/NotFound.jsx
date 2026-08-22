import { ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'
import { site } from '../data/site'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function NotFound() {
  useDocumentMeta({ title: `Not Found | ${site.name}`, description: 'This route does not exist.' })

  return (
    <div className="container-page py-32 md:py-44 flex flex-col items-center text-center">
      <p className="text-xs tracking-[0.2em] text-[var(--color-accent)] uppercase mb-6">404</p>
      <h1 className="font-[var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-ink)] max-w-xl">
        Looks like this route got lost.
      </h1>
      <div className="mt-10">
        <Button to="/" variant="secondary">
          Return Home
          <ArrowRight size={15} />
        </Button>
      </div>
    </div>
  )
}
