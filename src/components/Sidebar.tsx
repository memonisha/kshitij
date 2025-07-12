'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/sidebar.module.css'
import ThemeToggle from './ThemeToggle'

const sections = [
  { id: 'about', label: 'Wondering Who I Am?💭' },
  { id: 'research', label: 'Research Interests🔎' },
  { id: 'work', label: 'Work Experience📚' },
  { id: 'awards', label: 'Awards & Honors🏆' },
  { id: 'volunteer', label: 'Volunteer Work🤝' },
  { id: 'contact', label: 'Connect & Collaborate📬' },
]

export default function Sidebar() {
  const [hovering, setHovering] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      {/* Mobile toggle button */}
      {isMobile && (
        <button className={styles.mobileToggle} onClick={() => setMenuOpen(!menuOpen)}>
          <img src="/images/k6.jpeg" alt="Toggle Sidebar" className={styles.toggleImage} />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${isMobile && !menuOpen ? styles.collapsed : ''}`}
        onMouseEnter={() => !isMobile && setHovering(true)}
        onMouseLeave={() => !isMobile && setHovering(false)}
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
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={styles.link}>
              {label}
            </a>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className={styles.themeToggleWrapper}>
          <ThemeToggle />
        </div>
      </aside>
    </>
  )
}
