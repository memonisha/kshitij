// app/layout.tsx
import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import type { Metadata } from 'next'
import ThemeWrapper from '../components/ThemeWrapper'

export const metadata: Metadata = {
  title: "Hey 👋🏻 It's Kshitij!",
  description: "Scholar-practitioner committed to social justice, inclusive design, and community-based research.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeWrapper>
          <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <main style={{ flex: 1, padding: '2rem 3rem' }}>
              {children}
            </main>
          </div>
        </ThemeWrapper>
      </body>
    </html>
  )
}
