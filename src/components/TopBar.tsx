import Link from 'next/link';
import LogoIcon from './Icons/LogoIcon'
import { Menu } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="flex flex-row items-center content-center justify-between w-full px-4 py-4 lg:hidden bg-gray-50">
      <div>
        <Link href="/">
          <LogoIcon variant='light' />
        </Link>
      </div>
      <div><Menu className='text-gray-600 cursor-pointer' /></div>
    </div>
  )
}