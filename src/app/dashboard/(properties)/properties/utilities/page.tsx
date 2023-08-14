'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation";


export default function Utilities() {
    const router = useRouter();
    return (
        <div className="flex flex-col justify-center justify-items-center w-12/12 mx-auto">
            <div className="flex lg:flex-row justify-between py-6 px-4">

                <div className=''>
                    <h2 className='text-[26px] font-semibold font-prompt '>Available Utilities</h2>
                    <p className='text-gray-400'>You can change this information anytime</p>
                </div>
                <div>
                    <button className='hidden lg:block w-full px-24 py-3 font-bold border text-primary border-primary font-rubik'>
                        Save and Exit
                    </button>
                </div>
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
                <div className='flex flex-col w-full gap-x-8 lg:justify-between lg:flex-row-reverse py-10'>
                    <div className='py-2 w-full'><Link href="/dashboard/properties/amenities"><Button>Next</Button> </Link></div>
                    <div className='py-2 w-full'><button className='text-primary border-primary border font-bold px-24 py-3 w-full font-rubik' onClick={() => { router.push('/dashboard/properties/photos') }}>Back</button></div>
                </div>
            </div>
        </div>
    )
}