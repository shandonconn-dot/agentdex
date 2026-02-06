import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgentDex - AI Agent Registry',
  description: 'Discover and register AI agents with a nostalgic Pokédex-style interface',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black flex justify-center items-center min-h-screen p-4">
        {children}
      </body>
    </html>
  )
}