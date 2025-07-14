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
          Welcome! I’m Kshitij, a scholar-practitioner committed to social justice in sport and recreation. My work centers on critical pedagogy, inclusive design, and community-based research. Through both scholarship and teaching, I aim to challenge norms, uplift marginalized voices, and reimagine what equitable access and leadership look like in leisure spaces.
          
          </p>
          <p>
My teaching philosophy centers on Universal Design for Learning (UDL) and queer pedagogical strategies, prioritizing psychological safety and intersectional inclusivity. Drawing from my experience as a Teaching Assistant  at the University of Illinois Urbana-Champaign, I empower students to navigate real-world challenges through active learning, such as role-playing conflict scenarios involving marginalized identities or designing LGBTQ+-inclusive marketing campaigns.

          </p>
          <p>
           
         My research examines leisure experiences of marginalized communities including LGBTQ+, Latino and Latinx populations, and international graduate students. Key projects include Natural Spaces and the Queer Identity, which explores LGBTQ+ experiences in outdoor recreation, and studies around the impact of gentrification on Hispanic community well-being. I draw on spatial design knowledge from my background in architecture and environmental planning to advocate for inclusive facilities and adaptive sports programs. I have authored three peer-reviewed publications that examine diversity, equity, and inclusion in leisure contexts. My upcoming manuscript, Beyond Binaries: Reimagining Leisure Education Through Queer Pedagogy, accepted in SCHOLE, contributes to critical conversations on rethinking binary norms in education.
          </p>
          <p>
Thanks for stopping by! I hope this space offers a window into the work I do and the values I carry with me.
          </p>
        </motion.div>
      </div>

      <div className={styles.quoteCards}>
        <div className={styles.quoteCard}>“Students must feel safe to share to fully engage. I build classrooms where every voice thrives.”</div>
        <div className={styles.quoteCard}>“Life isn’t a battlefield. My classroom deconstructs hierarchies - leadership grows through empathy, not fear.”</div>
        <div className={styles.quoteCard}>“Leisure spaces reflect resistance or exclusion. My work shows how marginalized groups reclaim nature to affirm identity.”</div>
      </div>

      
    </section>
  )
}
