"use client"
import { useState } from 'react';
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar'
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import ProgressTracker from '@/components/Dash/property/ProgressTracker';

function Arrows({ isExpanded }): JSX.Element {
  if (isExpanded) {
    return <ChevronLeft height={15} width={15} className='text-sm text-white' />;
  }
  return <ChevronRight height={15} width={15} className='text-sm text-white' />;
}
export default function DashLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname();

  if (pathname.includes('/properties/')) {
    return <main className='flex ' >
      <section className='hidden md:w-4/12 lg:block'>
        <ProgressTracker />
      </section>
      <section className='w-full h-screen max-w-4xl mx-auto overflow-scroll sm:w-8/12 lg:w-5/12 hidescroll '>
        {children}
      </section>
    </main>
  } else {
    return <main>
      <div className='flex flex-col' onClick={() => { isOpen ? setIsOpen(false) : console.log('') }}>
        <TopBar />
        <div className='flex flex-row'>
          <SideBar expanded={isOpen} />
          <div className='relative py-4'>
            <div className={`absolute lg:hidden left-1 top-56 z-50  ${isOpen ? 'ml-[15.5rem]' : ''}`}>
              <div className='p-1 rounded-full bg-primary' onClick={() => { setIsOpen(!isOpen) }} ><Arrows isExpanded={isOpen} /> </div>
            </div>

          </div>
          <div className='w-full mx-3 lg:ml-64 lg:mr-6 lg:px-10 lg:py-16'>
            {children}
          </div>
        </div>
      </div>
    </main>
  }


}



