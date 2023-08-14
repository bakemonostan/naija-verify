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
                {/* <Image
                    src="/images/missing.png" // Route of the image file
                    width={50} 
                    height={50}
                    alt="Your Name"
                /> */}
                <img src="/images/missing.png" alt="" className='self-center w-52 lg:mt-12' />
                <div className='py-10 text-center'>
                    <h1 className='text-xl'>No property listed</h1>
<<<<<<< HEAD
                    <p className='text-gray-400 font-rubik text-sm'>You haven’t listed any property</p>
                    <div className='py-4 lg:py-5'><button className='text-[#fff] text-sm font-bold py-5 w-64 font-rubik bg-green-600'>Add Property</button></div>
=======
                    <p className='text-gray-400 font-rubik'>You haven’t listed any property</p>
                    <Link href='properties/add' className='block py-8'><button className='text-[#fff] font-bold py-5 w-64 font-rubik bg-green-600'>Add Property</button></Link>
>>>>>>> ce6247cbe15897d0ff749b4e919217c547129229
                </div>
            </div>
        </div>
    )
}