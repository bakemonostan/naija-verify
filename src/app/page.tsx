import TempRedirect from "./TempRedirect";
import SideBar from '@/components/SideBar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <div>
      <TempRedirect />
      <Dashboard />
    </div>
  )
}
