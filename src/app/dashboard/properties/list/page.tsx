import { Input } from "@/components/ui/input"
import { Search, MoreVertical, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
//Todo: add props & type definations
function Property() {
    return (
        <div className='flex flex-col border border-gray-400 w-full'>
            <div className='flex flex-row justify-between items-center py-4 px-4'>
                <div className=''>
                    <h4 className='font-prompt text-sm'>Adeola Odeku Estate, Lekki</h4>
                    <p className='text-secondary-10 text-[12px]'>34, Chirs Festroad, Lagos, CO 10021</p>
                </div>
                <div>
                    <MoreVertical className='text-gray-600 h-5' />
                </div>
            </div>
            <div className=''>
                <div className='h-px w-11/12 mx-auto bg-gray-200'></div>
            </div>
            <div className='flex flex-row justify-evenly items-center py-4'>
                <div className=''>
                    <p className='text-sm'><span className='text-[12px] text-secondary-10'> Price: </span> ₦120,394 </p>
                </div>
                <div className=''>
                    <p className='text-sm'><span className='text-[12px] text-secondary-10'> Tenant: </span> 23</p>
                </div>
                <div>
                    <Button className='text-[10px] py-2'>Accepting</Button>
                </div>
            </div>
        </div>
    )
}
export default function Properties() {
    return (
        <div className="flex flex-col w-full justify-center ">
            <div className='flex flex-col lg:flex-row lg:justify-between py-6'>
                <div>
                    <h2 className='text-[26px] font-semibold '>Properties</h2>
                    <p className='text-gray-400'>View all the properties you have</p>

                </div>

                <div className="mt-3">
                    <Button className='font-bold text-sm px-2 lg:px-24'>Add Property</Button>
                </div>
            </div>
            <div className='flex flex-col justify-center self-center w-full'>
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-row items-center w-full lg:w-4/12 mt-4">
                        <label htmlFor="email" className="relative text-gray-400 focus-within:text-gray-600 block w-full font-rubik">

                            <Search className="pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-3" />

                            <input type="email" name="search" id="search" placeholder="Search" className="form-input w-full pl-8 py-2 border border-gray-300 rounded-sm outline-1" />
                        </label>
                        {/* <Search className="text-gray-400" />
                    <Input placeholder="Search" /> */}
                    </div>
                    <div className="flex flex-row justify-evenly align-middle items-center mt-3 bg-neutral-100 rounded-sm border border-gray-200 py-2 w-6/12 lg:w-auto lg:ml-3 px-4">
                        <Filter className="text-gray-400 text-xs mr-2" />
                        <span className="text-gray-500 text-sm">Filter by Date</span>
                    </div>
                </div>
                <div className='py-10 lg:hidden'>
                    <div className='space-y-3'><Property /><Property /><Property /></div>
                </div>
                <div>
                    <Table className="mt-6">
                        <TableHeader className="bg-[#F5F7FE] text-[#747474] hover:bg-neutral-50">
                            <TableRow className="font-rubik text-[16px] font-normal hover:bg-green-400">
                                <TableHead className="w-4/12 font-normal">Property</TableHead>
                                <TableHead className="w-2/12 font-normal">Status</TableHead>
                                <TableHead className="w-2/12 font-normal">Price</TableHead>
                                <TableHead className="w-2/12 font-normal">Tenant</TableHead>
                                <TableHead className="w-2/12 font-normal">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="border-b border-gray-400">
                                <TableCell className="">
                                    <div className="flex flex-row">
                                        <img src="/images/living-room-lg.png" className="w-36 mr-4" alt="" />
                                        <div className="flex flex-col self-center">
                                            <h4 className="text-[16px]">Adeola Odeku Estate, Lekki</h4>
                                            <p className="text-gray-400">34, Chirs Festroad, Lagos, CO 10021</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell><button className="bg-primary text-white text-sm font-rubik py-2 px-3">Accepting Application</button></TableCell>
                                <TableCell>₦120,394</TableCell>
                                <TableCell>23</TableCell>
                                <TableCell className=""><MoreVertical className="text-gray-600 h-5"/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className="relative pt-4 pb-8 z-50 bg-white">
                    <div className="">
                        <div className="flex flex-row lg:justify-end text-sm space-x-2">
                            <div className="p-1 border rounded-md border-gray-400 text-gray-400">
                                <ChevronLeft />
                            </div>
                            <div className="flex items-center justify-center rounded-md py-1 px-4 border border-primary bg:white text-primary hover:text-white hover:bg-primary">
                                <span>1</span>
                            </div>
                            <div className="flex items-center justify-center rounded-md py-1 px-4 border border-primary bg:white text-primary hover:text-white hover:bg-primary">
                                <span>2</span>
                            </div>
                            <div className="flex items-center justify-center rounded-md py-1 px-4 border border-primary bg:white text-primary hover:text-white hover:bg-primary">
                                <span>3</span>
                            </div>
                            <div className="flex items-center justify-center rounded-md py-1 px-4 border border-primary bg:white text-primary hover:text-white hover:bg-primary">
                                <span>4</span>
                            </div>
                            <div className="p-1 border rounded-md border-gray-400  text-gray-400">
                                <ChevronRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}