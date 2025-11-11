import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Tobore's Portfolio",
  description: 'Portfolio showcasing projects, articles, and technical writing work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

