import LogoIcon from './Icons/LogoIcon'
import { SideBarData } from '@/helpers/sidebar'
import Link from 'next/link'

interface SideBarProps {
  expanded: Boolean;
}

export default function SideBar({ expanded }: SideBarProps) {
  return (
    <div className='z-40'>
      <div className={`fixed overflow-auto bg-[#1E1E1E]  text-white w-auto min-h-screen font-rubik lg:block ${expanded ? 'block' : 'hidden'}`}>
        <div className="flex flex-col px-14 ">
          <div className="flex py-12">
            <LogoIcon variant='dark' />
          </div>
          <div>
            <ul className="flex flex-col text-[16px] font-normal">
              {SideBarData.map((item, index) => {
                const Icon = item.icon
                return (
                  <Link href={item.path} key={index} className='block '>
                    <li className='flex py-3.5 items-center gap-3 w-full hover:scale-110 hover:translate-x-2 cursor-pointer'>
                      <Icon width='25' />
                      <h3 className='ml-4'>{item.title}</h3>
                    </li>
                  </Link>
                )
              }
              )}
            </ul>
          </div>
        </div>
      </div></div>

  )
}

