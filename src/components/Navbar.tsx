'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>Kshitij Tewari</h1>
      <ul className={styles.links}>
        {["/", "/research", "/teaching", "/projects", "/awards", "/volunteer", "/contact"].map((path, idx) => (
          <li key={idx}>
            <Link href={path}>{path === "/" ? "About" : path.replace("/", "")}</Link>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  )
}

export default Navbar
