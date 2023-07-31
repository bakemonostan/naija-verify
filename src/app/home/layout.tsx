import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar'


export default function dashLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <main className=''>
          <div className='flex flex-col'>
            <TopBar />
            <div className='flex flex-row'>

              <SideBar />
              {children}
            </div>
          </div>
    </main>
}



