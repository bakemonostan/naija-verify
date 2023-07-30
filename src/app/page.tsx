import TempRedirect from "./TempRedirect";


import DashboardIcon from '@/components/Icons/DashboardIcon'
import LogoIcon from '@/components/Icons/LogoIcon'
import SideBar from '@/components/SideBar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div>
      {/* <TempRedirect /> */}
      <div className='flex flex-row'>
        <SideBar />
      </div>
    </div>
  )
}
