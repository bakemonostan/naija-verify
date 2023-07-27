import { ReduxProvider } from '@/redux/provider'
import './globals.css'
import type { Metadata } from 'next'
import { Prompt, Rubik } from 'next/font/google'

const titleFont = Prompt(
  {
    preload: false,
    weight: ['400', '500', '600', '700'],
    variable: '--font-prompt'
  }
)

const textFont = Rubik({
  preload: false,
  weight: ['400', '500', '600', '700'],
  variable: '--font-rubik'
})

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
    <html lang="en" suppressHydrationWarning>
      <body >
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
