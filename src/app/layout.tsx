'use client'
import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import { useEffect, useState } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Hey 👋🏻 It's Kshitij!",
  description: "Welcome to my corner of the digital world! I’m Kshitij, a scholar-practitioner committed to social justice in sport and recreation. My work centers on critical pedagogy, inclusive design, and community-based research.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(isDark ? 'dark' : 'light')
  }, [])

  return (
    <html lang="en">
      <body className={theme}>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar />
          <main style={{ flex: 1, padding: '2rem 3rem' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
