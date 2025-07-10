
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/workexperience.module.css'

const workData = [
  {
    role: 'Graduate Teaching Assistant',
    period: 'Aug. 2024 - Present',
    details: [
      'RST 230: Diversity in Recreation, Sport and Tourism',
      'Department of Recreation, Sport and Tourism',
      'College of Applied Health Sciences, UIUC'
    ]
  },
  {
    role: 'Graduate Research Assistant',
    period: 'Aug. 2022 - May 2024',
    details: [
      'Advisor: Dr Mariela Fernandez',
      'Department of Recreation, Sport and Tourism',
      'College of Applied Health Sciences, UIUC'
    ]
  },
  {
    role: 'International Intern',
    period: 'Dec. 2023 - Jan. 2024',
    details: [
      '3rd Masterplan: Gender Inclusive Masterplan Exercise',
      'Chennai Metropolitan Development Authority, Chennai, India'
    ]
  },
  {
    role: 'Graduate Research Assistant',
    period: 'Jun. 2020 - Jun. 2022',
    details: [
      'Department of Planning',
      'School of Planning and Architecture, Vijayawada'
    ]
  }
]

export default function WorkExperienceTree() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  return (
    <section className={styles.treeSection} id='work'>
      <motion.h2
        className={styles.treeTitle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h2>

      <div className={styles.tree}>
        {workData.map((exp, idx) => (
          <motion.div
            key={idx}
            className={styles.branch}
            whileHover={{ scale: 1.03 }}
            onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className={styles.branchHead}>
              <strong>{exp.role}</strong>
              <span className={styles.period}>{exp.period}</span>
            </div>
            {expandedIdx === idx && (
              <motion.ul
                className={styles.details}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </motion.ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
