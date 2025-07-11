'use client' 
import { useState } from 'react'
import styles from '../styles/contact.module.css'
import { FaEnvelope, FaResearchgate } from 'react-icons/fa'
import { SiOrcid, SiGooglescholar } from 'react-icons/si'
import { TbBuildingFactory2 } from 'react-icons/tb'
import { GiInjustice } from 'react-icons/gi'

const contactLinks = [
  { href: 'mailto:ktewari3@illinois.edu', icon: <FaEnvelope />, label: 'Email' },
  { href: 'https://orcid.org/0000-0003-4879-9213', icon: <SiOrcid />, label: 'ORCID' },
  { href: 'https://scholar.google.com/citations?hl=en&user=yrEvBWQAAAAJ', icon: <SiGooglescholar />, label: 'Google Scholar' },
  { href: 'https://www.researchgate.net/profile/Kshitij-Tewari-2', icon: <FaResearchgate />, label: 'ResearchGate' },
  { href: 'https://wggp.illinois.edu/directory/profile/ktewari3', icon: <TbBuildingFactory2 />, label: 'WGGP Profile' },
  { href: 'https://diversitylab.rst.illinois.edu/people/graduate-students/#:~:text=and%20park%20programming.-,Kshitij%20Tewari,-Research%20and%20Professional', icon: <GiInjustice />, label: 'J.E.D.A.I. Lab' },
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)

    const response = await fetch('https://formspree.io/f/movwgwjz', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    if (response.ok) {
      setSubmitted(true)
      form.reset()
    } else {
      alert('Oops! Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Connect & Collaborate</h2>
      <p className={styles.subtitle}>Open to new opportunities, collaborations and friendly hellos!</p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Write your message here..." rows={5} required />

          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      ) : (
        <div className={styles.thankYouMessage} aria-live="polite">
          <h3>Thanks for reaching out! 🙌</h3>
          <p>I will get back to you soon.</p>
        </div>
      )}

      <div className={styles.iconRow}>
        {contactLinks.map(({ href, icon, label }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={styles.iconLink}
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  )
}
