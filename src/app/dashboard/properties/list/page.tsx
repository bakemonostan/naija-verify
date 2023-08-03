import { Input } from "@/components/ui/input"
import { Search, MoreVertical, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

//Todo: add props & type definations
function Property() {
    return (
        <div className='flex flex-col border border-gray-400 w-full min-w-full'>
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
        <div className="flex flex-col w-full justify-center  mx-8">
            <div className='py-6'>
                <h2 className='text-[26px] font-semibold '>Properties</h2>
                <p className='text-gray-400'>View all the properties you have</p>
            </div>
            <div className='flex flex-col justify-center self-center w-full'>
                <Button className='font-bold text-sm'>Add Property</Button>
                <div className="flex flex-row items-center w-full mt-4">
                    <label htmlFor="email" className="relative text-gray-400 focus-within:text-gray-600 block w-full font-rubik">

                        <Search className="pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-3 mr-4" />

                        <input type="email" name="search" id="search" placeholder="         Search" className="form-input w-full py-2 border border-gray-300 rounded-sm outline-1"/>
                    </label>
                    {/* <Search className="text-gray-400" />
                    <Input placeholder="Search" /> */}
                </div>
                <div className="flex flex-row justify-evenly align-middle items-center mt-3 bg-neutral-100 rounded-md border border-gray-200 py-4 w-6/12">
                    <Filter className="text-gray-400" />
                    <span className="text-gray-500">Filter by Date</span>
                </div>
                <div className='py-10'>
                    <div className='space-y-3'><Property /><Property /><Property /></div>
                </div>
                <div className="relative pt-4 pb-8 z-50 bg-white">
                    <div className="">
                        <div className="flex flex-row text-sm space-x-2">
                            <div className="p-1 border rounded-md border-gray-400 text-gray-400">
                                <ChevronLeft/>
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
                                <ChevronRight/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}