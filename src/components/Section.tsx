'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type SectionProps = {
  id: string
  title: string
  children: React.ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        marginBottom: '5rem',
        paddingBottom: '3rem',
        borderBottom: '1px solid #ddd',
      }}
    >
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{title}</h2>
      {children}
    </motion.section>
  )
}
