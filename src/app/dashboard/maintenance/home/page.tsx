
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectGroup,
    SelectLabel,
    SelectValue
} from "@/components/ui/select"
import { Search, MoreVertical, Filter, ChevronDown, UserCircle } from 'lucide-react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


function MaintenanceCard() {
    return (
        <div className="flex flex-col border border-gray-300 px-6 py-3  lg:px-8 lg:py-4">
            <div className="flex flex-row justify-between text-gray-400 py-2">
                <div className="flex flex-row w-7/12 text-ellipsis overflow-hidden items-center">
                    <div className="rounded-full bg-primary h-3 w-3 mr-4"></div>
                    <p className="truncate overflow-hidden text-left text-xs font-rubik">#Request 3E7H - Plumbing || Adeola Odeku Estate, Lekki</p>
                </div>
                <div className="hidden lg:block">
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
                <div className="flex flex-row">  <UserCircle className="self-center mb-1 h-6 w-12 text-gray-400" /><span className="text-gray-400 text-sm self-center">Bolaji Suraj</span></div>
                <div><span className="text-primary underline text-sm font-medium">Open Request</span></div>
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
                    <div className="flex flex-col lg:flex-row border border-gray-300 space-y-3 lg:space-x-5 p-3 lg:p-6 ">
                        <div className="flex flex-row items-center w-full lg:w-4/12  mt-4">
                            <label htmlFor="email" className="relative text-gray-400 focus-within:text-gray-600 block w-full font-rubik">

                                <Search className="absolute w-4 h-4 transform -translate-y-1/2 pointer-events-none top-1/2 left-3" />

                                <input type="email" name="search" id="search" placeholder="Search" className="w-full py-2 pl-8 border border-gray-400 rounded-sm form-input outline-1" />
                            </label>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:w-6/12 space-y-4 lg:space-x-6">
                            <Select >
                                <SelectTrigger className="border w-full border-gray-400 text-gray-400 flex flex-row justify-between px-2 py-2">
                                    <p className="">Select Priority</p>
                                </SelectTrigger>
                                <SelectContent className="min-w-max py-5 px-4 space-y-4 font-rubik rounded-none shadow-sm">
                                    <SelectItem value="high" >High</SelectItem>
                                    <SelectItem value="low">Low</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select >
                                <SelectTrigger className="border w-full border-gray-400 text-gray-400 flex flex-row justify-between px-2 py-2">
                                    <SelectValue placeholder="Select Type" />
                                </SelectTrigger>
                                <SelectContent className="min-w-max py-5 px-4 w-72 space-y-4 font-rubik rounded-none shadow-sm">
                                    <SelectGroup>
                                        <SelectItem value="plumbing">Plumbing</SelectItem>
                                        <SelectItem value="electricity">Electricity</SelectItem>
                                        <SelectItem value="repair">Repair</SelectItem>
                                        <SelectItem value="replacement">Replacement</SelectItem>
                                    </SelectGroup>
                                </SelectContent>

                            </Select>

                            <Select >
                                <SelectTrigger className="border w-full border-gray-400 text-gray-400 flex flex-row justify-between px-2 py-2">
                                    <p className="text-sm">This week</p>
                                </SelectTrigger>
                                <SelectContent className="min-w-max py-5 px-4 w-72 space-y-4 font-rubik rounded-none shadow-sm">
                                    <SelectItem value="this week">This week</SelectItem>
                                    <SelectItem value="">Last week</SelectItem>
                                    <SelectItem value="">This month</SelectItem>
                                    <SelectItem value="">Last month</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                    </div>

                    <div className='flex pt-5 pb-10'>
                        <div className='flex flex-col w-12/12 overflow-hidden'>
                            <Tabs defaultValue="allRequests" className="w-full min-w-full bg-white">
                                <TabsList className="flex flex-row w-full py-0 -space-x-5 lg:-space-x-12 text-xs text-gray-800 bg-white">
                                    <TabsTrigger value="allRequests" className='h-full py-3 '><p className='text-xs'>All Requests (62)</p> </TabsTrigger>
                                    <TabsTrigger value="newRequest" className='h-full py-3 '><p className='text-xs'>New Request (21)</p></TabsTrigger>
                                    <TabsTrigger value="ongoing" className='h-full py-3 '><p className='text-xs'>Ongoing (3)</p></TabsTrigger>
                                    <TabsTrigger value="resolved" className='h-full py-3 hidden lg:block'><p className='text-xs'>Resolved(12)</p></TabsTrigger>

                                </TabsList>
                                <div className='w-full py-2'>
                                    <TabsContent value="allRequests" className='w-full space-y-4'>
                                        <MaintenanceCard />
                                        <MaintenanceCard />
                                        <MaintenanceCard />
                                    </TabsContent>
                                    <TabsContent value="newRequest" className='flex flex-col items-center justify-center mx-auto' value='tenant'>

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