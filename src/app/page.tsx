import TempRedirect from "./TempRedirect";
import SideBar from '@/components/SideBar'


export default function Home() {
  return (
    <div>
      <TempRedirect />
      <div className='flex flex-row'>
        <SideBar />
      </div>
    </div>
  )
}
