import LogoIcon from './Icons/LogoIcon'
import { Menu } from 'lucide-react';

export default function TopBar() {
    return (
      <div className="flex lg:hidden flex-row justify-between px-4 bg-gray-50 content-center items-center w-full py-4">
         <div><LogoIcon variant='light'/></div>
        <div><Menu className='text-gray-600'/></div>
      </div>
    )
  }