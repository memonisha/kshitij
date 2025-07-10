'use client'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/sidebar.module.css'
import ThemeToggle from './ThemeToggle'
const sections = [
  'Wondering Who I Am?💭', 'Research Interests🔎', 'Work Experience📚', 'Awards & Honors🏆', 'Volunteer Work🤝', 'Connect & Collaborate📬'
]

export default function Sidebar() {
  const [hovering, setHovering] = useState(false)

  return (
     <aside
    className={styles.sidebar}
    onMouseEnter={() => setHovering(true)}
    onMouseLeave={() => setHovering(false)}
  >
      {/* Profile Image Section */}
      <div className={styles.imageContainer}>
        <img
          src="/images/k6.jpeg"
          alt="Profile Default"
          className={`${styles.image} ${hovering ? styles.hidden : styles.visible}`}
        />
        <img
          src="/images/k5.jpeg"
          alt="Profile Hover"
          className={`${styles.image} ${hovering ? styles.visible : styles.hidden}`}
        />
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        {sections.map((sec) => (
          <Link key={sec} href={`#${sec}`} className={styles.link}>
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </Link>
        ))}
      </nav>
    <div className={styles.themeToggleWrapper}>
      <ThemeToggle />
    </div>
  </aside>
  )
}
