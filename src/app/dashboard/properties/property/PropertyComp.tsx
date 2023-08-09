'use client'
import { LayoutDashboard, Users2, DoorOpen, CheckCircle2, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import NoTenantIcon from "@/components/Icons/NoTenantIcon";
import NoApplicantIcon from "@/components/Icons/NoApplicantIcon";
import { useRouter } from "next/navigation";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


export default function PropertyComp() {
    const router = useRouter()
    const onClick = () => {
        router.push('/dashboard/properties/invite-tenant')
    }

    return (
        <>
            <div className='pt-6 pb-2'>
                <h2 className='text-[22px] font-semibold '>Adeola Odeku Estate, Lekki</h2>
                <p className='text-sm text-gray-400'>34, Chirs Festroad, Lagos, CO 10021</p>
            </div>
            <div className='flex flex-col justify-center w-6/12 lg:w-3/12'>
                <Button className='px-4 py-3 text-xs font-semibold bg-white border font-rubik border-primary text-primary'>Edit Property</Button>
            </div>
            <div className='flex pt-5 pb-10'>
                <div className='flex flex-col w-10/12 overflow-hidden'>
                    <Tabs defaultValue="overview" className="w-full min-w-full bg-white">
                        <TabsList className="flex flex-row w-full py-0 -space-x-5 lg:space-x-32 text-xs text-gray-800 bg-white">
                            <TabsTrigger value="overview" className='h-full py-3 hover:border-b-2 active:border-b-2 hover:border-primary'><LayoutDashboard className='h-4' /> <p className='text-xs'>Overview</p> </TabsTrigger>
                            <TabsTrigger value="tenant" className='h-full py-3 hover:border-b-2 active:border-b-2 hover:border-primary'><Users2 className='h-4' /><p className='text-xs'>Tenant</p></TabsTrigger>
                            <TabsTrigger value="application" className='h-full py-3 hover:border-b-2 active:border-b-2 hover:border-primary'><DoorOpen className='h-4' /><p className='text-xs'>Rent Application</p></TabsTrigger>
                            <TabsTrigger value="application" className='h-full py-3 hover:border-b-2 active:border-b-2 hover:border-primary hidden lg:block'><DoorOpen className='h-4' /><p className='text-xs'>Report</p></TabsTrigger>

                        </TabsList>
                        <div className='py-2'>
                            <TabsContent value="overview" className='w-full'>
                                <p className='text-sm'>Welcome to Adeola Odeku Estate, an exquisite rental property that epitomizes the pinnacle of
                                    luxury living. Situated in a prestigious location, <span className='text-primary'>read more...</span>
                                </p>
                                <div className='flex flex-col lg:flex-row justify-around'>
                                    <div className='flex flex-row w-full lg:w-8/12'>
                                        <img src="/images/living-room-lg.png" alt="" />
                                        <img src="/images/living-room-lg.png" alt="" className='hidden lg:block' />
                                        <img src="/images/living-room-lg.png" alt="" className='hidden lg:block' />
                                    </div>
                                    <div className='py-2 lg:hidden'>
                                        <div className='w-11/12 h-px mx-auto bg-gray-300'></div>
                                    </div>
                                    <div className='py-2 hidden lg:block mx-4'>
                                        <div className='w-px h-full mx-auto bg-gray-300'></div>
                                    </div>
                                    <div className='flex flex-col space-y-3 w-full lg:w-4/12 font-rubik'>
                                        <div className='flex flex-row items-center justify-between mb-3'>
                                            <h4 className='text-xs text-gray-600 uppercase'>rent price</h4>
                                            <span className='text-2xl font-medium'>₦120,394</span>
                                        </div>
                                        <div className='flex flex-row items-center justify-between'>
                                            <h4 className='text-xs text-gray-400 capitalize'>basic rent</h4>
                                            <span className='text-sm text-gray-700'>₦110,394/month</span>
                                        </div>
                                        <div className='flex flex-row items-center justify-between'>
                                            <h4 className='text-xs text-gray-400 capitalize'>service charge</h4>
                                            <span className='text-sm text-gray-700'>₦110,394/month</span>
                                        </div>
                                        <div className='flex flex-row items-center justify-between'>
                                            <h4 className='text-xs text-gray-400 capitalize'>security deposit</h4>
                                            <span className='text-sm text-gray-700'>₦110,394/month</span>
                                        </div>
                                        <div className='flex flex-row items-center justify-between'>
                                            <h4 className='text-xs text-gray-400 uppercase'>vat</h4>
                                            <span className='text-sm text-gray-700'>₦110,394/month</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-2'>
                                        <div className='w-11/12 h-px mx-auto bg-gray-300'></div>
                                    </div>
                                <div className='mt-10 font-rubik'>
                                    <h3 className='my-4 text-sm capitalize'>Amenities</h3>
                                    <div className='grid justify-between grid-cols-2 text-sm gap-y-6'>
                                        <div className='flex flex-row items-center space-x-2'><CheckCircle2 height={14} width={14} className='text-primary' /> <span className='text-gray-700'>Electricity</span> </div>
                                        <div className='flex flex-row items-center space-x-2'><CheckCircle2 height={14} width={14} className='text-primary' /> <span className='text-gray-700'>Sewage Disposal</span> </div>
                                        <div className='flex flex-row items-center space-x-2'><CheckCircle2 height={14} width={14} className='text-primary' /> <span className='text-gray-700'>24/7 Security</span> </div>
                                        <div className='flex flex-row items-center space-x-2'><CheckCircle2 height={14} width={14} className='text-primary' /> <span className='text-gray-700'>Garbage Treatment</span> </div>
                                        <div className='flex flex-row items-center space-x-2'><CheckCircle2 height={14} width={14} className='text-primary' /> <span className='text-gray-700'>Internet</span> </div>
                                        <div className='flex flex-row items-center space-x-2'><CheckCircle2 height={14} width={14} className='text-primary' /> <span className='text-gray-700'>Gas</span> </div>
                                        <div className='flex flex-row items-center space-x-2'><CheckCircle2 height={14} width={14} className='text-primary' /> <span className='text-gray-700'>Cable Tv</span> </div>
                                        <div className='flex flex-row items-center space-x-2'><CheckCircle2 height={14} width={14} className='text-primary' /> <span className='text-gray-700'>Water</span> </div>
                                        <div className='flex flex-row items-center space-x-2'><CheckCircle2 height={14} width={14} className='text-primary' /> <span className='text-gray-700'>Cleaning Services</span> </div>

                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent className='flex flex-col items-center justify-center mx-auto' value='tenant'>
                                <NoTenantIcon width='150' height='150' />
                                <h4 className='text-xl font-medium font-prompt'>No Tenant Yet</h4>
                                <p className='text-sm text-gray-400 font-rubik'>You have not added any tenant to this property</p>
                                <Button className='mt-4'>Add Tenant</Button>
                            </TabsContent>
                            <TabsContent className='flex flex-col items-center justify-center mx-auto' value='application'>
                                <NoApplicantIcon width='150' height='150' />
                                <h4 className='text-xl font-medium font-prompt'>No Applicant Yet</h4>
                                <p className='text-sm text-gray-400 font-rubik'>You have not invited any tenant to this property</p>
                                <Button className='mt-4'
                                    onClick={onClick}
                                > Invite tenant</Button>
                            </TabsContent>

                        </div>

                    </Tabs>
                </div>
            </div>
        </>
    )
}