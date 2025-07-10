// app/layout.tsx (or layout.jsx)
import '../styles/globals.css'
import Sidebar from '../components/Sidebar'

export const metadata = {
  title: "Hey👋🏻 It's Kshitij!"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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
