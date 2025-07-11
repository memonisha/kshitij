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
            Welcome to my corner of the digital world! 
I’m Kshitij, a scholar-practitioner committed to social justice in sport and recreation. My work centers on critical pedagogy, inclusive design, and community-based research. Through both scholarship and teaching, I aim to challenge norms, uplift marginalized voices, and reimagine what equitable access and leadership look like in leisure spaces.
</p>
          <p>
My teaching philosophy centers on Universal Design for Learning (UDL) and queer pedagogical strategies, prioritizing psychological safety and intersectional inclusivity. Drawing from my experience as a Teaching Assistant and co-instructor at the University of Illinois Urbana-Champaign, I empower students to navigate real-world challenges through active learning, such as role-playing conflict scenarios involving marginalized identities or designing LGBTQ+-inclusive marketing campaigns. I supplement readings with audio-visual content and use trauma-informed practices to foster participation, particularly for introverted or socioeconomically disadvantaged learners.


          </p>
          <p>
           
           My research examines leisure experiences of marginalized communities including LGBTQ+, Latino and Latinx populations, and international graduate students. Key projects include Natural Spaces and the Queer Identity, which explores outdoor recreation through photovoice and intersectionality, and studies around the impact of gentrification on Hispanic community well-being. I draw on spatial design knowledge from architecture and environmental planning to advocate for inclusive facilities and adaptive sports programs.
I have authored three peer-reviewed publications that examine diversity, equity, and inclusion in leisure contexts. My upcoming manuscript, Beyond Binaries: Reimagining Leisure Education Through Queer Pedagogy, accepted in SCHOLE, contributes to critical conversations on rethinking binary norms in education.
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
