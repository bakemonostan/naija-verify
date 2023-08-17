/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

export default function Applicant() {
    return (
        <div className="flex flex-col justify-end lg:w-[100rem] lg:min-w-full mx-auto">
            <div className='self-center py-6 lg:self-start'>
                <h2 className='text-[26px] font-semibold '>Applicant</h2>
                <p className='text-gray-400'>See all your tenants here</p>
            </div>
            <div className='flex flex-col self-center justify-center min-w-full '>
                <img src="/images/applicant-image.svg" alt="" className='self-center w-52 lg:mt-12' />
                <div className='py-10 text-center'>
                    <h1 className='font-prompt font-medium text-xl'>Applicants will appear here</h1>
                    <p className='text-gray-400 font-rubik text-sm mt-3'>All tenants applying for your<br/> apartment will be displayed here</p>
                </div>
            </div>
        </div>
    )
}