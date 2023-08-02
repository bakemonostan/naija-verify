"use client"
import { useState } from 'react';
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar'
import { ChevronRight, ChevronLeft } from 'lucide-react';

function Arrows({ isExpanded }):JSX.Element {
  if (isExpanded) {
    return <ChevronLeft className='text-white' />;
  }
  return <ChevronRight className='text-white ' />;
}
export default function dashLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return <main className='' >
    <div className='flex flex-col' onClick={() => { isOpen ? setIsOpen(false) : console.log("Not expanded") }}>
      <TopBar />
      <div className='flex flex-row'>
        <SideBar expanded={isOpen} />
        <div className='py-4 relative'>
          <div className={`absolute lg:hidden left-1 top-56 z-50  ${isOpen ? 'ml-60' : ''}`}>
            <div className=' rounded-full bg-green-600 p-2' onClick={() => { setIsOpen(!isOpen) }} ><Arrows isExpanded={isOpen} /> </div>
          </div>

        </div>
        {children}
      </div>
    </div>
  </main>
}



