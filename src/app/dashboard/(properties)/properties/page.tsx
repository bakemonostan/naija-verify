/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

export default function Properties() {
    return (
        <div className="flex flex-col justify-end lg:w-[100rem] lg:min-w-full mx-auto">
            <div className='self-center py-6 lg:self-start'>
                <h2 className='text-[26px] font-semibold '>Properties</h2>
                <p className='text-gray-400'>View all the properties you have</p>
            </div>
            <div className='flex flex-col self-center justify-center min-w-full '>
                <img src="/images/missing.png" alt="" className='self-center w-52 lg:mt-12' />
                <div className='py-10 text-center'>
                    <h1 className='text-xl'>No property listed</h1>
<<<<<<< HEAD
                    <p className='text-gray-400 font-rubik text-sm'>You haven’t listed any property</p>
                    <div className='py-4 lg:py-5'><button className='text-[#fff] text-sm font-bold py-5 w-64 font-rubik bg-green-600'> <Link href={`/dashboard/properties/add`}> Add Property</Link></button></div>
=======
                    <p className='text-gray-400 font-rubik'>You have not listed any property</p>
                    <Link href='properties/add' className='block py-8'><button type='button' className='text-[#fff] font-bold py-5 w-64 font-rubik bg-primary'>Add Property</button></Link>
>>>>>>> aa4f0dde9b52d3420ecf246cb995c370d9a8e301
                </div>
            </div>
        </div>
    )
}