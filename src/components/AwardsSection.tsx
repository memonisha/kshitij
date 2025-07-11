'use client'

import styles from '../styles/awards.module.css'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { useEffect, useRef } from 'react'


const collageImages = [
  '/images/k7.jpeg',
  
  '/images/kwinawards2.jpeg',
  '/images/award.jpeg',
  '/images/k3.jpeg',
  
  '/images/k8.jpeg'
]

const awards = [
  {
    title: 'Outstanding Graduate Student Award',
    year: '2024',
    desc: 'Department of Gender and Women’s Studies, UIUC',
    img: '/images/csgge.jpeg'
  },
  {
    title: 'Allen V. Sapora Research Excellence Award',
    year: '2024',
    desc: 'Department of RST, UIUC',
     img: '/images/kwinawards.jpeg'
  },
  {
    title: 'We CU Community Engaged Scholar',
    year: '2024',
    desc: 'University of Illinois Urbana-Champaign',
   img: '/images/we.png'
  },
 
  {
    title: 'RST Conference Travel Award',
    year: '2024',
    desc: 'Dept. of Recreation, Sport and Tourism, UIUC',
   img: '/images/conf.jpeg'
  },
    {
    title: 'RST Conference Travel Award',
    year: '2023',
    desc:'Dept. of Recreation, Sport and Tourism, UIUC',
    img: '/images/k9.jpeg'
  }
]

export default function AwardsSection() {
   const sectionRef = useRef<HTMLDivElement>(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            confetti({
              particleCount: 200,
              spread: 100,
              origin: { y: 0.6 }
            })
            hasRun.current = true
          }
        })
      },
      {
        threshold: 0.4 // Adjust depending on when you want to trigger
      }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])
  return (
    <section ref={sectionRef} id="awards" className={styles.awardsSection}>
     

      <div className={styles.puzzleCollage}>
        {collageImages.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            className={styles.puzzlePiece}
            whileHover={{ opacity: 1, scale: 1.06 }}
            initial={{ opacity: 0.75, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

       <motion.h2 className={styles.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
         Awards & Honors
      </motion.h2>

      <div className={styles.awardCards}>
        {awards.map((award, idx) => (
          <motion.div
            className={styles.awardCard}
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <div className={styles.cardImageWrapper}>
              <img src={award.img} className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3>{award.title}</h3>
              <small>{award.year}</small>
              <p>{award.desc}</p>
            </div>
          </motion.div>



        ))}
        <motion.div
  className={styles.quoteCard}
  initial={{ opacity: 0.7, scale: 0.8 }}
  whileHover={{ scale: 1.04 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
>
  <p className={styles.handwriting}>...and many more to go!</p>
</motion.div>
      </div>
    </section>
  )
}
