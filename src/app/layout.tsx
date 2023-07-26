import './globals.css'
import type { Metadata } from 'next'
import { Prompt, Rubik } from 'next/font/google'

const fontPrompt = Prompt(
  {
    preload: false,
    weight: ['400', '500', '600', '700'],
  }
)

export const metadata: Metadata = {
  title: 'Naija Verify',
  description: 'Housing solutions for Nigerians',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontPrompt.className}>{children}</body>
    </html>
  )
}
