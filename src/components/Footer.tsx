import styles from '../styles/footer.module.css'
import { FaLinkedin, FaEnvelope, FaUniversity } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; {new Date().getFullYear()} Kshitij Tewari</p>
        <p className={styles.tagline}>
          Creating joyful, inclusive, and just spaces — one step at a time.
        </p>

        <div className={styles.icons}>
          <a href="mailto:kshitij@example.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/kshitij-tewari" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.illinois.edu" target="_blank" rel="noopener noreferrer" aria-label="UIUC">
            <FaUniversity />
          </a>
        </div>
      </div>
    </footer>
  )
}
