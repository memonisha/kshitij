'use client'
import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import { useEffect, useState } from 'react'

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
