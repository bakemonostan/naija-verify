import { Input } from "@/components/ui/input"
import { Search, MoreVertical, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link";
//Todo: add props & type definations
function Property() {
    return (
        <div className='flex flex-col w-full border border-gray-400'>
            <div className='flex flex-row items-center justify-between px-4 py-4'>
                <div className=''>
                    <h4 className='text-sm font-prompt'>Adeola Odeku Estate, Lekki</h4>
                    <p className='text-secondary-10 text-[12px]'>34, Chirs Festroad, Lagos, CO 10021</p>
                </div>
                <div>
                    <MoreVertical className='h-5 text-gray-600' />
                </div>
            </div>
            <div className=''>
                <div className='w-11/12 h-px mx-auto bg-gray-200'></div>
            </div>
            <div className='flex flex-row items-center py-4 justify-evenly'>
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
        <div className="flex flex-col justify-center w-full ">
            <div className='flex flex-col py-6 lg:flex-row lg:justify-between'>
                <div>
                    <h2 className='text-[26px] font-semibold '>Properties</h2>
                    <p className='text-gray-400'>View all the properties you have</p>

                </div>

                <div className="mt-3">
                    <Link href="/dashboard/property" className="block"><Button className='px-2 text-sm font-bold lg:px-24'>Add Property</Button></Link>
                </div>
            </div>
            <div className='flex flex-col self-center justify-center w-full'>
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-row items-center w-full mt-4 lg:w-4/12">
                        <label htmlFor="email" className="relative block w-full text-gray-400 focus-within:text-gray-600 font-rubik">

                            <Search className="absolute w-4 h-4 transform -translate-y-1/2 pointer-events-none top-1/2 left-3" />

                            <input type="email" name="search" id="search" placeholder="Search" className="w-full py-2 pl-8 border border-gray-300 rounded-sm form-input outline-1" />
                        </label>
                    </div>
                    <div className="flex flex-row items-center w-6/12 px-4 py-2 mt-3 align-middle border border-gray-200 rounded-sm justify-evenly bg-neutral-100 lg:w-auto lg:ml-3">
                        <Filter className="mr-2 text-xs text-gray-400" />
                        <span className="text-sm text-gray-500">Filter by Date</span>
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
                                        <img src="/images/living-room-lg.png" className="mr-4 w-36" alt="" />
                                        <div className="flex flex-col self-center">
                                            <h4 className="text-[16px]">Adeola Odeku Estate, Lekki</h4>
                                            <p className="text-gray-400">34, Chirs Festroad, Lagos, CO 10021</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell><button className="px-3 py-2 text-sm text-white bg-primary font-rubik">Accepting Application</button></TableCell>
                                <TableCell>₦120,394</TableCell>
                                <TableCell>23</TableCell>
                                <TableCell className=""><MoreVertical className="h-5 text-gray-600" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className="relative z-50 pt-4 pb-8 bg-white">
                    <div className="">
                        <div className="flex flex-row space-x-2 text-sm lg:justify-end">
                            <div className="p-1 text-gray-400 border border-gray-400 rounded-md">
                                <ChevronLeft />
                            </div>
                            <div className="flex items-center justify-center px-4 py-1 border rounded-md border-primary bg:white text-primary hover:text-white hover:bg-primary">
                                <span>1</span>
                            </div>
                            <div className="flex items-center justify-center px-4 py-1 border rounded-md border-primary bg:white text-primary hover:text-white hover:bg-primary">
                                <span>2</span>
                            </div>
                            <div className="flex items-center justify-center px-4 py-1 border rounded-md border-primary bg:white text-primary hover:text-white hover:bg-primary">
                                <span>3</span>
                            </div>
                            <div className="flex items-center justify-center px-4 py-1 border rounded-md border-primary bg:white text-primary hover:text-white hover:bg-primary">
                                <span>4</span>
                            </div>
                            <div className="p-1 text-gray-400 border border-gray-400 rounded-md">
                                <ChevronRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}