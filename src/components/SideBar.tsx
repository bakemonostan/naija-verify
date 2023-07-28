import DashboardIcon from '@/components/Icons/DashboardIcon'
import MaintenanceIcon from '@/components/Icons/MaintenanceIcon'
import PropertiesIcon from './Icons/PropertiesIcon'
import TenantIcon from './Icons/TenantIcon'
import LeaseIcon from './Icons/LeaseIcon'
import ApplicantIcon from './Icons/ApplicantIcon'
import ReportIcon from './Icons/ReportIcon'
import SettingsIcon from './Icons/SettinigsIcon'
import LogoIcon from './Icons/LogoIcon'

export default function SideBar() {
  return (
    <div className="bg-[#1E1E1E]  text-white w-auto min-h-screen font-rubik">
      <div className="flex flex-col px-14 ">
        <div className="flex py-12">
          <LogoIcon variant='dark'/>
        </div>
        <div>
          <ul className="flex flex-col text-[16px] font-normal">
            <li className='inline-flex py-3.5 items-center hover:font-medium cursor-pointer'><DashboardIcon width='25' /><h3 className='ml-4'>Dashboard</h3></li>
            <li className='inline-flex py-3.5 items-center hover:font-medium cursor-pointer'> <PropertiesIcon width='25'/><h3 className='ml-4'>Properties</h3> </li>
            <li className='inline-flex py-3.5 items-center hover:font-medium cursor-pointer'><TenantIcon width='25'/><h3 className='ml-4'>Tenant</h3></li>
            <li className='inline-flex py-3.5 items-center hover:font-medium cursor-pointer'><LeaseIcon width='25'/><h3 className='ml-4'>Lease</h3></li>
            <li className='inline-flex py-3.5 items-center hover:font-medium cursor-pointer'><MaintenanceIcon width='25'/><h3 className='ml-4'>Maintenance</h3></li>
            <li className='inline-flex py-3.5 items-center hover:font-medium cursor-pointer'><ApplicantIcon width='25'/><h3 className='ml-4'>Applicant</h3></li>
            <li className='inline-flex py-3.5 items-center hover:font-medium cursor-pointer'><ReportIcon width='25'/><h3 className='ml-4'>Report</h3></li>
            <li className='inline-flex py-3.5 items-center hover:font-medium cursor-pointer'><SettingsIcon width='25'/><h3 className='ml-4'>Settings</h3></li>

          </ul>
        </div>
      </div>
    </div>
  )
}
