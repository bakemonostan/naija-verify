import { Menu } from 'lucide-react';
import Image from 'next/image';

export default function Properties() {
    return (
        <div className="flex flex-col justify-end justify-items-center w-96 mx-auto">
            <div className='py-6 self-center'>
                <h2 className='text-[26px] font-semibold '>Properties</h2>
                <p className='text-gray-400'>View all the properties you have</p>
            </div>
            <div className='flex flex-col justify-center self-center'>
                {/* <Image
                    src="/images/missing.png" // Route of the image file
                    width={50}
                    height={50}
                    alt="Your Name"
                /> */}
                <img src="/images/missing.png" alt="" className='w-52' />
                <div className='text-center py-10'>
                    <h1 className='text-xl'>No property listed</h1>
                    <p className='text-gray-400  font-rubik'>You haven’t listed any property</p>
                    <div className='py-8'><button className='text-[#fff] font-bold py-5 w-64 font-rubik bg-green-600'>Add Property</button></div>
                </div>
            </div>
        </div>
    )
}