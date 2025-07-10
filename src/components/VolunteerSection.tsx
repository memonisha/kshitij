'use client'
import styles from '../styles/volunteer.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'

const volunteerItems = [
  '2024–Present: Books2Prisoners',
  '2024–Present: Exec. Committee, Women & Gender in Global Perspectives Program',
  '2024–Present: Board of Directors, The Academy of Leisure Sciences',
  '2024–Present: Urbana Parks District',
  '2023–2024: DEI Committee, College of Applied Health Sciences',
  '2023–2024: BIPOC Committee, College of Applied Health Sciences',
]

export default function VolunteerSection() {
  return (
    <section id="volunteer" className={styles.volunteerSection}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Volunteer Work & Service 
      </motion.h2>

      <div className={styles.contentWrapper}>
        <motion.div
          className={styles.imageContainer}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/kvolunteer.jpeg"
            alt="Volunteering"
            width={400}
            height={400}
            className={styles.volunteerImage}
          />
        </motion.div>

        <motion.div
          className={styles.textContent}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ul className={styles.volunteerList}>
            {volunteerItems.map((item, idx) => (
              <motion.li
                key={idx}
                className={styles.volunteerItem}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
