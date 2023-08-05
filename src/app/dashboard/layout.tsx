"use client"
import { useState } from 'react';
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar'
import { ChevronRight, ChevronLeft } from 'lucide-react';

function Arrows({ isExpanded }): JSX.Element {
  if (isExpanded) {
    return <ChevronLeft height={15} width={15} className='text-white text-sm' />;
  }
  return <ChevronRight height={15} width={15} className='text-white text-sm' />;
}
export default function DashLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return <main className='' >
    <div className='flex flex-col' onClick={() => { isOpen ? setIsOpen(false) : console.log('') }}>
      <TopBar />
      <div className='flex flex-row'>
        <SideBar expanded={isOpen} />
        <div className='py-4 relative'>
          <div className={`absolute lg:hidden left-1 top-56 z-50  ${isOpen ? 'ml-[15.5rem]' : ''}`}>
            <div className=' rounded-full bg-primary p-1' onClick={() => { setIsOpen(!isOpen) }} ><Arrows isExpanded={isOpen} /> </div>
          </div>

        </div>
        <div className='mx-auto w-full lg:ml-72 lg:px-10 lg:py-16'>
          {children}
        </div>
      </div>
    </div>
  </main>
}



