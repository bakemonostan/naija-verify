import Link from "next/link"

import { Checkbox } from "@/components/ui/checkbox"



export default function Amenities() {
    return (
        <div className="flex flex-col justify-center justify-items-center w-12/12 mx-auto">
            <div className='py-6'>
                <h2 className='text-[26px] font-semibold font-prompt '>Amenities and Furnishing</h2>
                <p className='text-gray-400'>You can change this information anytime</p>
            </div>
            <div className='flex flex-col justify-center self-center w-full font-rubik'>
                <h3 className="text-sm">SELECT ALL THAT APPLIES</h3>
                <div className="py-8">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                        <div className="flex flex-row items-end">
                            <Checkbox id="electricity" className="outline-black mr-3" />
                            <label
                                htmlFor="terms"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Electricity
                            </label>
                        </div>
                        <div className="flex flex-row items-end">
                            <Checkbox id="electricity" className="outline-black mr-3" />
                            <label
                                htmlFor="terms"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Sewage Disposal
                            </label>
                        </div>
                        <div className="flex flex-row items-end">
                            <Checkbox id="electricity" className="outline-black mr-3" />
                            <label
                                htmlFor="terms"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                24/7 security
                            </label>
                        </div>
                        <div className="flex flex-row items-end">
                            <Checkbox id="electricity" className="outline-black mr-3" />
                            <label
                                htmlFor="terms"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Garbage Treatment
                            </label>
                        </div>
                        <div className="flex flex-row items-end">
                            <Checkbox id="electricity" className="outline-black mr-3" />
                            <label
                                htmlFor="terms"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Internet
                            </label>
                        </div>
                        <div className="flex flex-row items-end">
                            <Checkbox id="electricity" className="outline-black mr-3" />
                            <label
                                htmlFor="terms"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Gas
                            </label>
                        </div>
                        <div className="flex flex-row items-end">
                            <Checkbox id="electricity" className="outline-black mr-3" />
                            <label
                                htmlFor="terms"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Cable TV
                            </label>
                        </div>
                        <div className="flex flex-row items-end">
                            <Checkbox id="electricity" className="outline-black mr-3" />
                            <label
                                htmlFor="terms"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Water
                            </label>
                        </div>
                        <div className="flex flex-row items-end">
                            <Checkbox id="electricity" className="outline-black mr-3" />
                            <label
                                htmlFor="terms"
                                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Cleaning Services
                            </label>
                        </div>
                    </div>
                </div>
                <div className='text-center py-10'>
                    <div className='py-2'><Link href="/dashboard/properties/amenities" className='text-[#fff] font-bold px-24 py-5 w-full font-rubik bg-green-600'>Next</Link></div>
                    <div className='py-2'><Link href="/dashboard/properties/photos" className='text-primary border-primary border font-bold px-24 py-5 w-full font-rubik' >Back</Link></div>
                </div>
            </div>
        </div>
    )
}