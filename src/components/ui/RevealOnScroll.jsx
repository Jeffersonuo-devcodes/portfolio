import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/motion'

// Thin wrapper so scroll-reveal stays a one-line opt-in on any section.
export default function RevealOnScroll({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const MotionTag = motion[Tag] || motion.div
  return (
    <MotionTag
      className={className}
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      viewport={fadeUp.viewport}
      transition={{ ...fadeUp.transition, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
