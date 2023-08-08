'use client'
import Link from "next/link"

import PhotosIcon from "@/components/Icons/PhotosIcon"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";


export default function Photos() {
    const router = useRouter()
    return (
        <div className="flex flex-col justify-center justify-items-center lg:w-5/12 w-12/12 mx-auto">
            <div className='py-6 px-4 self-center lg:self-start'>
                <h2 className='text-[26px] font-semibold font-prompt '>Property Details</h2>
                <p className='text-gray-400'>You can change this information anytime</p>
            </div>
            <div className='flex flex-col justify-center self-center w-full px-4 font-rubik'>
                <div className="flex flex-col">
                    <h4 className="text-[12px] font-[500] mb-3">Property Photos</h4>
                    <div className="flex flex-col w-full border border-dashed rounded-md border-gray-800 bg-primary-10 px-8 py-16 mx-auto justify-center justify-items-center items-center content-center">
                        <PhotosIcon width="80" height="80" />
                        <p className="text-primary font-rubik text-[12px]">Click here to upload images</p>
                    </div>
                </div>
                <div className="bg-gray-300 lg:h-24 py-2 px-3 flex flex-row space-x-2 mt-4">
                    <img src="/images/living-room.png" alt="" className='' />
                    <img src="/images/living-room.png" alt="" className='' />
                    <img src="/images/living-room.png" alt="" className='' />

                </div>
                <div className='text-center py-4'>
                    <div className='py-2'><Link href="/dashboard/properties/utilities" ><Button>Next</Button> </Link></div>
                    <div className='py-2'><button className='text-primary border-primary border font-bold px-24 py-3 w-full font-rubik' onClick={() => { router.push('/dashboard/properties/details') }}>Back</button></div>
                </div>
            </div>
        </div>
    )
}