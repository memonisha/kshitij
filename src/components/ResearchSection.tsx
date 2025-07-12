'use client'
import { useState } from 'react'
import styles from '../styles/research.module.css'
import { motion } from 'framer-motion'
import { BiFontSize } from 'react-icons/bi'

const publications = [
  {
    title: 'Impacts of Gang Involvement on Health and Well-Being',
    authors: 'Tewari, K., Berdychevsky, L., & Stodolska, M.',
    journal: 'Leisure Sciences, 2024',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yrEvBWQAAAAJ&citation_for_view=yrEvBWQAAAAJ:UeHWp8X0CEIC'
  },
  {
    title: 'International Graduate Students’ Perspectives on Sense of Belonging in Leisure',
    authors: 'Tewari, K. et al.',
    journal: 'Journal of Hospitality, Leisure, Sport & Tourism Education, 2024',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yrEvBWQAAAAJ&citation_for_view=yrEvBWQAAAAJ:IjCSPb-OGe4C'
  },
  {
    title: 'Use of Natural Areas among Latinos Living in South Carolina',
    authors: 'Fernandez, M. et al.',
    journal: 'Journal of Park and Recreation Administration, 2024',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yrEvBWQAAAAJ&citation_for_view=yrEvBWQAAAAJ:Tyk-4Ss8FVUC'
  }
]

const manuscripts = [
  {
    title: 'Beyond Binaries: Reimagining Leisure Education Through Queer Pedagogy',
    journal: 'SCHOLE: A Journal of Leisure Studies and Recreation Education (Accepted, In Press)',
  }
]

const conferences = [
  {
    type: 'Research Presentation',
    event: 'TALS 2025',
    authors:'Tewari, K., & Fernandez, M.',
    title: 'Natural Spaces and the Queer Identity',
  },
  {
    type: 'Teaching Presentation',
    event: 'TALS 2025',
    authors:'Du, X., Tewari, K., & Cho, S. J.',
    title: 'Queering Pedagogy: Integration of AI Literacy in Higher Education',
  },
  {
    type: 'Research Presentation',
    event: 'Spaces of Nature/Natures of Space Symposium 2025',
     authors:'Tewari, K., & Fernandez, M.',
    title: 'Nature-Based Recreation and Biopsychosocial Resilience in LGBTQ+ Individuals',
  },
  {
    type: 'Research Presentation',
    event: 'UIUC College of Education Graduate Student Conference 2025',
     authors:'Tewari, K.',
    title: 'International Graduate Students’ Perspectives on Sense of Belonging in Leisure',
  },
  {
    type: 'Panel',
    event: 'UIUC College of Education Graduate Student Conference 2025',
     authors:'Tewari, K., & Lu, Z.',
    title: 'East Meets West: Integrating Cultural Identities in Academic Settings',
  },
  {
    type: 'Research Presentation',
    event: 'TALS 2024',
     authors:'Tewari, K., Berdychevsky, L., & Stodolska, M.',
    title: 'Impacts of Gang Involvement on Health and Well-Being: The Perilous Dimensions of Leisure',
  },
  {
    type: 'Teaching Presentation',
    event: 'TALS 2024',
     authors:'Tewari, K., Lundin, E., Cho, S. J., Du, X., Oliveira, J. R., & Fernandez, M.',
    title: 'International Graduate Students’ Perspectives on Sense of Belonging in Leisure',
  },
  {
    type: 'Poster Presentation',
    event: 'TALS 2023',
     authors:'Tewari, K., & Fernandez, M. ',
    title: 'Urban Green Spaces and LGBTQ+ Youth: Usage, Constraints, and Perceptions of Benefits',
  }
];


const forthcoming = [
  {
    type: 'Research Presentation',
    event: 'TALS 2025',
    title: 'Natural Spaces and the Queer Identity',
    authors: 'Tewari, K., Fernandez M. (2025)'
  },
  {
    type: 'Teaching Presentation',
    event: 'TALS 2025',
    title: 'Queering Pedagogy: Integration of AI Literacy in Higher Education',
    authors: 'Du, X., Tewari, K., & Cho, S. J. (2025)'
  },
  {
    type: 'Research Presentation',
    event: 'Spaces of Nature/Natures of Space Symposium 2025',
    title: 'Nature-based Recreation and Biopsychosocial Resilience in LGBTQ+ Individuals',
    authors: 'Tewari, K., & Fernandez, M. (2025)'
  },
  {
    type: 'Research Presentation',
    event: 'Graduate Student Conference 2025, UIUC',
    title: 'International Graduate Students’ Perspectives on Sense of Belonging in Leisure',
    authors: 'Tewari, K. (2025)'
  },
  {
    type: 'Teaching Presentation',
    event: 'Graduate Student Conference 2025, UIUC',
    title: 'East Meets West: Integrating Cultural Identities in Academic Settings',
    authors: 'Tewari, K., & Lu, Z. (2025)'
  }
]

const proceedings = [
  {
    title: 'People’s Perception about Weather Changes in Lucknow...',
    authors: 'Tewari, K., & Mohamed, A. (2020)',
    details: '1st Conference of Infrastructure Development... e-ISBN: 978-81-952843-4-4'
  },
  {
    title: 'Perception of parents of Lucknow city about online education...',
    authors: 'Tewari, K., & Mohamed, A. (2021)',
    details: 'World Children Conference- II, ISBN: 978-605-70554-8-4'
  },
  {
    title: 'How the green revolution actually foils our greener future',
    authors: 'Tewari, K. (2021)',
    details: 'World Culture, Science and Education Congress, ISBN 978-1-955094-06-1'
  },
  {
    title: 'Application of environmental economics to construction issues',
    authors: 'Tewari, K. (2021)',
    details: '5th Asia Pacific Modern Sciences Congress, ISBN:978-625-7898-48-5'
  },
  {
    title: 'Sustainable development in post-pandemic era',
    authors: 'Tewari, K. (2021)',
    details: 'Globalization & International Relations, ISBN: 978-625-7720-51-9'
  },
  {
    title: 'Perception of Youth towards Environment Protection (Lucknow vs Bangalore)',
    authors: 'Tewari, K. & Mohamed, A. (2021)',
    details: 'World Youth Studies Conference, ISBN - 978-605-70611-7-1'
  },
  {
    title: 'Transit Safety: Kochi Metro vs Bus',
    authors: 'Kumar, D., Tewari, K. & Bhagwat, J. (2021)',
    details: 'World Women Conference, ISBN: 978-625-7464-13-0'
  },
  {
    title: 'Environmental Perception: A Gender Based Analysis',
    authors: 'Tewari, K. (2021)',
    details: 'World Women Conference, ISBN: 978-625-7464-13-0'
  }
]

export default function ResearchSection() {
  const [activeTab, setActiveTab] = useState('Publications')

  const renderTabContent = () => {
    if (activeTab === 'Publications') {
      return publications.map((pub, idx) => (
        <motion.div
          key={idx}
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <h3>{pub.title}</h3>
          <p>{pub.authors}</p>
          <small>{pub.journal}</small>
          <br /><br />
          <a href={pub.link} target="_blank" rel="noopener noreferrer" className={styles.readButton}>
            📖 Read Paper
          </a>
        </motion.div>
      ))
    } else if (activeTab === 'Manuscripts') {
      return manuscripts.map((m, idx) => (
        <motion.div key={idx} className={styles.card}>
          <h3>{m.title}</h3>
          <small>{m.journal}</small>
        </motion.div>
      ))
    }else if (activeTab === 'Conferences') {
  return (
    <>
      {/* Main Conference Cards */}
      {conferences.map((c, idx) => (
        <motion.div key={idx} className={styles.card}>
          <span className={styles.ribbon}>{c.type}</span>
          <h3>{c.title}</h3>
          <small>{c.authors}</small>
          <br></br>
          <small>{c.event}</small>
        </motion.div>
      ))}

      
     {/* Conference Proceedings - Grid Layout */}
<motion.div className={styles.accordion}>
  <h3>📚 Conference Proceedings</h3>
  <div className={styles.accordionGrid}>
    {proceedings.map((p, i) => (
      <motion.div className={styles.accordionItem} key={i}>
        <div className={styles.accordionHeader}>{p.title}</div>
        <div className={styles.accordionAuthors}>{p.authors}</div>
        <div className={styles.accordionDetails}>{p.details}</div>
      </motion.div>
    ))}
  </div>
</motion.div>


      {/* Forthcoming Presentations Timeline */}
      <motion.div className={styles.timelineWrapper}>
        <h3>📅 Forthcoming Presentations</h3>
       &nbsp;<span style={{fontSize:'2rem', color:'var(--text-light)'}}> ...</span>

        {/** <Forthcoming Presentations Timeline COMMENTED FOR NOW - CHANGE LATER> */}
        {/* {forthcoming.map((item, idx) => (
          <motion.div className={styles.timelineItem} key={idx}>
            <h4>
              {item.type} —{' '}
              <span style={{ color: 'var(--accent)' }}>{item.event}</span>
            </h4>
            <small>
              {item.title}
            </small>
            <small>{item.authors}</small>
          </motion.div>
        ))} */}
      </motion.div>
    </>
  );
}


    
  }

  return (
    <section id="research" className={styles.researchSection}>
      <motion.h2 className={styles.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Research & Scholarly Engagement
      </motion.h2>
      <p className={styles.subtitle}>Uncovering intersections of leisure, justice, and identity</p>

      <div className={styles.valuesRow}>
        <span className={styles.valuePill}>🌈 Leisure & Queer/Trans Studies</span>
        <span className={styles.valuePill}>🧑🏽‍🤝‍🧑🏾 DEI in Recreation</span>
        <span className={styles.valuePill}>🌍 Environmental & Social Justice</span>
        <span className={styles.valuePill}>⛺ Outdoor Recreation</span>
        <span className={styles.valuePill}>💖 Health & Well-being</span>
        <span className={styles.valuePill}>🎭 Deviant Leisure</span>
      </div>

      <div className={styles.tabHeader}>
        {['Publications', 'Manuscripts', 'Conferences'].map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

     <div className={activeTab === 'Conferences' ? '' : styles.tabContent}>
        {renderTabContent()}</div>
    </section>
  )
}
