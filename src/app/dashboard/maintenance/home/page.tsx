
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectGroup,
    SelectLabel,
    SelectValue
} from "@/components/ui/select"
import { Search, MoreVertical, Filter, ChevronDown,UserCircle} from 'lucide-react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


function MaintenanceCard() {
    return (
        <div className="flex flex-col px-6 py-3 border border-gray-300 lg:px-8 lg:py-4">
            <div className="flex flex-row justify-between py-2 text-gray-400">
                <div className="flex flex-row items-center">
                    <div className="w-3 h-3 mr-4 rounded-full bg-primary"></div>
                    <p className="text-xs font-rubik">#Request 3E7H - Plumbing || Adeola Odeku Estate, Lekki</p>
                </div>
                <div>
                    <p className="text-xs text-gray-400 font-rubik">Posted at 12:45 AM</p>
                </div>
            </div>
            <div className="flex flex-col py-2 text-left">
                <h3 className="mb-2 text-lg font-medium font-rubik">My room has stopped receiving water supply</h3>
                <p className="text-sm text-gray-400 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </p>

            </div>
            <div className="h-px my-2 bg-gray-300"></div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row">  <UserCircle className="self-center w-12 h-6 mb-1 text-gray-400"/><span className="self-center text-sm text-gray-400">Bolaji Suraj</span></div>
                <div><span className="text-sm font-medium underline text-primary">Open Request</span></div>
            </div>
        </div>
    )
}

export default function MaintenancePage() {
    return (
        <div className="flex flex-col py-6">
            <div>
                <h4 className="text-2xl font-semibold font-prompt">Maintenance</h4>
                <p className="text-gray-500 font-rubik ">See all your maintenance request here</p>
                <div className="flex flex-col justify-center mx-6 text-center mt-14">
                    <div className="flex flex-col p-3 space-y-3 border border-gray-300 lg:flex-row lg:space-x-5 lg:p-6 ">
                        <div className="flex flex-row items-center w-full mt-4 lg:w-4/12">
                            <label htmlFor="email" className="relative block w-full text-gray-400 focus-within:text-gray-600 font-rubik">

                                <Search className="absolute w-4 h-4 transform -translate-y-1/2 pointer-events-none top-1/2 left-3" />

                                <input type="email" name="search" id="search" placeholder="Search" className="w-full py-2 pl-8 border border-gray-400 rounded-sm form-input outline-1" />
                            </label>
                        </div>

                        <Select >
                            <SelectTrigger className="flex flex-row justify-between w-full px-2 py-2 text-gray-400 border border-gray-400">
                                <p className="">Select Priority</p>
                            </SelectTrigger>
                            <SelectContent className="px-4 py-5 space-y-4 rounded-none shadow-sm min-w-max font-rubik">
                                <SelectItem value="high" >High</SelectItem>
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select >
                            <SelectTrigger className="flex flex-row justify-between w-full px-2 py-2 text-gray-400 border border-gray-400">
                                <SelectValue placeholder="Select Type" />
                            </SelectTrigger>
                            <SelectContent className="px-4 py-5 space-y-4 rounded-none shadow-sm min-w-max w-72 font-rubik">
                                <SelectGroup>
                                    <SelectItem value="plumbing">Plumbing</SelectItem>
                                    <SelectItem value="electricity">Electricity</SelectItem>
                                    <SelectItem value="repair">Repair</SelectItem>
                                    <SelectItem value="replacement">Replacement</SelectItem>
                                </SelectGroup>
                            </SelectContent>

                        </Select>

                        <Select >
                            <SelectTrigger className="flex flex-row justify-between w-full px-2 py-2 text-gray-400 border border-gray-400">
                                <p className="text-sm">This week</p>
                            </SelectTrigger>
                            <SelectContent className="px-4 py-5 space-y-4 rounded-none shadow-sm min-w-max w-72 font-rubik">
                                <SelectItem value="this week">This week</SelectItem>
                                <SelectItem value="">Last week</SelectItem>
                                <SelectItem value="">This month</SelectItem>
                                <SelectItem value="">Last month</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='flex pt-5 pb-10'>
                        <div className='flex flex-col overflow-hidden w-12/12'>
                            <Tabs defaultValue="overview" className="w-full min-w-full bg-white">
                                <TabsList className="flex flex-row w-full py-0 -space-x-5 text-xs text-gray-800 bg-white lg:-space-x-12">
                                    <TabsTrigger value="overview" className='h-full py-3 hover:border-b-2 active:border-b-2 hover:border-primary'><p className='text-xs'>All Requests (62)</p> </TabsTrigger>
                                    <TabsTrigger value="tenant" className='h-full py-3 hover:border-b-2 active:border-b-2 hover:border-primary'><p className='text-xs'>New Request (21)</p></TabsTrigger>
                                    <TabsTrigger value="application" className='h-full py-3 hover:border-b-2 active:border-b-2 hover:border-primary'><p className='text-xs'>Ongoing (3)</p></TabsTrigger>
                                    <TabsTrigger value="application" className='hidden h-full py-3 hover:border-b-2 active:border-b-2 hover:border-primary lg:block'><p className='text-xs'>Resolved(12)</p></TabsTrigger>

                                </TabsList>
                                <div className='w-full py-2'>
                                    <TabsContent value="overview" className='w-full space-y-4'>
                                        <MaintenanceCard />
                                        <MaintenanceCard />
                                        <MaintenanceCard />
                                    </TabsContent>
                                    <TabsContent className='flex flex-col items-center justify-center mx-auto' value='tenant'>

                                    </TabsContent>

                                </div>

                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}