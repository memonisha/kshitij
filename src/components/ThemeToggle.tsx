'use client'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme === 'dark') {
        document.body.classList.add('dark')
        setDark(true)
      }
    }
  }, [])

  const toggleTheme = () => {
    const isDark = !dark
    setDark(isDark)
    if (isDark) {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <button onClick={toggleTheme} style={{
      marginTop: 'auto',
      width: 'fit-content',
      display: 'flex',
      alignItems: 'center',
      padding: '0.2rem 1rem',
      borderRadius: '6px',
      fontSize: '2rem',
      background: 'var(--hover-tint)',
      color: 'var(--accent)',
      fontWeight: '800',
      cursor: 'pointer',
      border: 'none',
      transition: 'all 0.3s ease'
    }}>
     {dark ? <FiSun /> : <FiMoon />}
    </button>
  )
}
