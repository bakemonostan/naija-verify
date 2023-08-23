import LogoIcon from './Icons/LogoIcon'
import { SideBarData } from '@/helpers/sidebar'
import Link from 'next/link'
import LogoutIcon from "@/components/Icons/LogoutIcon";

interface SideBarProps {
  expanded: Boolean;
}

export default function SideBar({ expanded }: SideBarProps) {
  return (
    <div className='z-40'>
      <div className={`fixed overflow-auto bg-[#1E1E1E]  text-white w-auto h-full font-rubik lg:block ${expanded ? 'block' : 'hidden'}`}>
        <div className="flex flex-col px-14 ">
          <div className="hidden py-12 md:flex ">
            <Link href="/">
              <LogoIcon variant='dark' />
            </Link>
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
              <li className='md:hidden bg-[#747474] flex py-1 px-3 mt-16 items-center gap-3 w-full rounded-lg hover:scale-110 hover:translate-x-2 cursor-pointer'>
                <img src="/images/Base.png" className='h-11 w-11' alt="" />
                <h3 className='ml-2 text-sm font-medium'>David O.</h3>
              </li>
              <li className='flex py-3.5 mx-2 mt-12 items-center gap-3 w-full hover:scale-110 hover:translate-x-2 cursor-pointer'>
                <LogoutIcon width='25' />
                <h3 className='ml-2'>Logout</h3>
              </li>
            </ul>
          </div>
        </div>
      </div></div>

  )
}

