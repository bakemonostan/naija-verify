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

function ApplicantCard() {
    return (
        <div className=" flex flex-col border border-gray-300 ">
            <div className="flex flex-row w-full space-x-3 items-center px-3 py-4 border-b border-gray-300">
                <div className="flex flex-col mr-6">
                    <h4 className="font-prompt font-normal text-sm ">Bolaji Suraji</h4>
                    <p className="text-gray-400 font-rubik text-xs">+234783993721</p>
                </div>
                <div className="font-rubik">
                    <p className="text-gray-400 text-xs">Tenancy Period:  <span className="text-gray-700 text-sm">3 years</span></p>
                </div>
                <div><MoreVertical className="h-4" /></div>
            </div>
            <div className="font-rubik px-3 py-4 border-b border-gray-300">
                <p className="text-gray-400 text-xs">Property: <span className="text-gray-700 text-sm">Adeola Odeku Estate, Lekki</span></p>
            </div>
            <div className="flex flex-row px-3 py-4 space-x-3">
            <p className="text-gray-400 text-xs">Desired Move in Date: <span className="text-gray-700 text-sm"> 12/01/2020</span></p>
            <button className="px-3 py-2 text-sm text-white bg-green-600 font-rubik self-center">Screened</button>
            </div>
        </div>
    )
}

export default function ApplicantList() {
    return (
        <div className="flex flex-col justify-center w-full">
            <div className='flex flex-col py-6 lg:flex-row lg:justify-between'>
                <div>
                    <h2 className='text-[26px] font-semibold '>Applicants</h2>
                    <p className='text-gray-400'>See all your tenants here</p>

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
                    <div className='space-y-3'><ApplicantCard /><ApplicantCard /><ApplicantCard /></div>
                </div>
                <div>
                    <Table className="mt-6">
                        <TableHeader className="bg-[#F5F7FE] text-[#747474] hover:bg-neutral-50">
                            <TableRow className="font-rubik text-[16px] font-normal">
                                <TableHead className="w-4/12 font-normal">Applicant</TableHead>
                                <TableHead className="w-2/12 font-normal">Properties</TableHead>
                                <TableHead className="w-2/12 font-normal">Phone Number</TableHead>
                                <TableHead className="w-2/12 font-normal">Date</TableHead>
                                <TableHead className="w-2/12 font-normal">Status</TableHead>
                                <TableHead className="w-2/12 font-normal">Tenancy Period</TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="border-b border-gray-400">
                                <TableCell className="">
                                    <p>Bolaji Suraj</p>
                                </TableCell>
                                <TableCell>
                                    <p>Adeola Odeku Estate Lek...</p>
                                </TableCell>
                                <TableCell>
                                    <p>+234783993721</p>
                                </TableCell>
                                <TableCell>
                                    <p>12/01/2020</p>
                                </TableCell>
                                <TableCell><button className="px-3 py-2 text-sm text-white bg-green-600 font-rubik">Screened</button></TableCell>
                                <TableCell>3 Years</TableCell>
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