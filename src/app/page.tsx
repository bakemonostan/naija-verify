import DashboardIcon from '@/components/Icons/DashboardIcon'
import LogoIcon from '@/components/Icons/LogoIcon'
import SideBar from '@/components/SideBar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div>
      <div className='flex flex-row'>
        <SideBar />
        <h1 className='text-primary underline'>staging</h1>s
      </div>
    </div>
  )
}
