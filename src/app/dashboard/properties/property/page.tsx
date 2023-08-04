import { LayoutDashboard, Users2, DoorOpen, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import NoTenantIcon from "@/components/Icons/NoTenantIcon";
import NoApplicantIcon from "@/components/Icons/NoApplicantIcon";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"



export default function property() {
    return (
        <div className="flex flex-col w-full mx-8">
            <div className='pt-6 pb-2'>
                <h2 className='text-[22px] font-semibold '>Adeola Odeku Estate, Lekki</h2>
                <p className='text-sm text-gray-400'>34, Chirs Festroad, Lagos, CO 10021</p>
            </div>
            <div className='flex flex-col justify-center w-6/12'>
                <Button className='font-semibold font-rubik text-xs bg-white border border-primary text-primary py-3 px-4'>Edit Property</Button>
            </div>
            <div className='flex  pt-5 pb-10'>
                <div className='flex flex-col w-10/12 overflow-hidden'>
                    <Tabs defaultValue="overview" className="w-full bg-white">
                        <TabsList className="flex flex-row bg-white text-gray-800  w-full -space-x-5 text-xs py-0">
                            <TabsTrigger value="overview" className='hover:border-b-2 active:border-b-2 hover:border-primary h-full py-3'><LayoutDashboard className='h-4' /> <p className='text-xs'>Overview</p> </TabsTrigger>
                            <TabsTrigger value="tenant" className='hover:border-b-2 active:border-b-2 hover:border-primary h-full py-3'><Users2 className='h-4' /><p className='text-xs'>Tenant</p></TabsTrigger>
                            <TabsTrigger value="application" className='hover:border-b-2 active:border-b-2 hover:border-primary h-full py-3'><DoorOpen className='h-4' /><p className='text-xs'>Rent Application</p></TabsTrigger>
                        </TabsList>
                        <div className='py-2'>
                            <TabsContent value="overview">
                                <p className='text-sm'>Welcome to Adeola Odeku Estate, an exquisite rental property that epitomizes the pinnacle of
                                    luxury living. Situated in a prestigious location, <span className='text-primary'>read more...</span>
                                </p>
                                <div>
                                    <img src="/images/living-room-lg.png"  alt="" />
                                </div>
                                <div className='py-2'>
                                    <div className='w-11/12 mx-auto h-px bg-gray-300'></div>
                                </div>
                                <div className='flex flex-col space-y-3 font-rubik'>
                                    <div className='flex flex-row justify-between items-center mb-3'>
                                        <h4 className='text-xs uppercase text-gray-600'>rent price</h4>
                                        <span className='font-medium text-2xl'>₦120,394</span>
                                    </div>
                                    <div className='flex flex-row justify-between items-center'>
                                        <h4 className='text-xs capitalize text-gray-400'>basic rent</h4>
                                        <span className='text-sm text-gray-700'>₦110,394/month</span>
                                    </div>
                                    <div className='flex flex-row justify-between items-center'>
                                        <h4 className='text-xs capitalize text-gray-400'>service charge</h4>
                                        <span className='text-sm text-gray-700'>₦110,394/month</span>
                                    </div>
                                    <div className='flex flex-row justify-between items-center'>
                                        <h4 className='text-xs capitalize text-gray-400'>security deposit</h4>
                                        <span className='text-sm text-gray-700'>₦110,394/month</span>
                                    </div>
                                    <div className='flex flex-row justify-between items-center'>
                                        <h4 className='text-xs uppercase text-gray-400'>vat</h4>
                                        <span className='text-sm text-gray-700'>₦110,394/month</span>
                                    </div>
                                </div>
                                <div className='font-rubik mt-10'>
                                    <h3 className='capitalize text-sm my-4'>Amenities</h3>
                                    <div className='grid grid-cols-2 text-sm justify-between gap-y-6'>
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
                            <TabsContent className='flex flex-col justify-center mx-auto items-center' value='tenant'>
                                <NoTenantIcon width='150' height='150' />
                                <h4 className='font-medium font-prompt text-xl'>No Tenant Yet</h4>
                                <p className='text-sm text-gray-400 font-rubik'>You haven’t added any tenant to this property</p>
                                <Button className='mt-4'>Add Tenant</Button>
                            </TabsContent>
                            <TabsContent className='flex flex-col justify-center mx-auto items-center' value='application'>
                                <NoApplicantIcon width='150' height='150' />
                                <h4 className='font-medium font-prompt text-xl'>No Applicant Yet</h4>
                                <p className='text-sm text-gray-400 font-rubik'>You haven’t invited any tenant to this property</p>
                                <Button className='mt-4'>Invite Tenant</Button>
                            </TabsContent>

                        </div>

                    </Tabs>
                </div>
            </div>

        </div>
    )
}