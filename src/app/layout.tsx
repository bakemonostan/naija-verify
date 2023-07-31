import { ReduxProvider } from '@/redux/provider'

import './globals.css'
import type { Metadata } from 'next'
import { Prompt, Rubik } from 'next/font/google'
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar'

const titleFont = Prompt(
  {
    preload: false,
    weight: ['400', '500', '600', '700'],
    variable: '--font-prompt'
  }
)
const rubik_c = Rubik({
  preload: false,
  weight: ['400', '500', '600', '700'],
  variable: '--font-rubik',

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
    <html lang="en">
      <ReduxProvider>
        <body className={`${rubik_c.variable}`}>
          <div className='flex flex-col'>
            <TopBar />
            <div className='flex flex-row'>

              <SideBar />
              {children}
            </div>
          </div>




        </body>
      </ReduxProvider>

    </html>
  )
}
