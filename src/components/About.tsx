'use client'
import { text } from 'stream/consumers'
import styles from '../styles/about.module.css'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <motion.h1
        className={styles.heroTitle}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hey! It's Kshitij 👋🏻
      </motion.h1>

      <div className={styles.bioContainer}>
        <motion.img
          src="/images/about.png"
          alt="Kshitij Tewari"
          className={styles.bioImage}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className={styles.bioText}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            I’m a doctoral scholar in the Department of Recreation, Sport, and Tourism at the University of Illinois Urbana-Champaign, where I explore how leisure and recreation spaces can be more inclusive, just, and joy-filled for everyone.

My research and teaching are rooted in equity, LGBTQ+ inclusion, environmental justice, and queer pedagogies, shaped by my academic journey through a major in RST, a graduate minor in Queer Studies, and continued work in Gender Relations in International Development.

I believe learning spaces should be places where people feel safe to question, express, and belong. Whether I’m leading a classroom discussion or collaborating on research, I bring empathy, curiosity, and a deep respect for each person’s lived experience.


          </p>
          <p>
            Beyond academia, I stay connected to my community through volunteering with Urbana Parks District and Books2Prisoners, and serving on boards and committees that advance equity-focused practices, including The Academy of Leisure Sciences and the Women and Gender in Global Perspectives Program.

When I’m not diving into research or policy, I’m probably on a badminton court, lost in sci-fi or queer lit, or showing up for local grassroots efforts that make our communities better.
</p>
          <p>
Thanks for stopping by! I hope this space offers a window into the work I do and the values I carry with me.
          </p>
        </motion.div>
      </div>

      <div className={styles.quoteCards}>
        <div className={styles.quoteCard}>“I want students to know they belong.”</div>
        <div className={styles.quoteCard}>“I care deeply about inclusive, joyful spaces.”</div>
        <div className={styles.quoteCard}>“Grounded in empathy, participation, and curiosity.”</div>
      </div>

      
    </section>
  )
}
