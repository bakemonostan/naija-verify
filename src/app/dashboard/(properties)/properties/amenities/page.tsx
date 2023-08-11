'use client'
import Link from "next/link"
import PropertyListedIcon from "@/components/Icons/PropertyListedIcon"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,

    DialogTrigger,
} from "@/components/ui/dialog"

function PropertyModal() {
    return (
        <div className={`self-center my-auto relative`}>
            <div className="bg-white rounded-md text-center flex flex-col justify-center px-5 py-10">
                <div className="mx-auto"><PropertyListedIcon width="100" height="100" /></div>
                <h2 className="text-[22px] font-semibold font-prompt">Property Listed<br /> Successfully!</h2>
                <p className="font-rubik text-gray-500 text-xs my-2">Your property has been listed successfully! You can now start adding tenant</p>
                <Link href="/dashboard/properties/list" className="mt-3"><Button>Go To Property</Button></Link>
            </div>
        </div>

    )
}

export default function Amenities() {
    const router = useRouter();
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
                    <Dialog>
                        <DialogTrigger className='w-full'><div className='py-2'><Button>Next</Button></div>
                        </DialogTrigger>
                        <div className='py-2'><button className='text-primary border-primary border font-bold px-24 py-3 w-full font-rubik'  ><Link href='/dashboard/properties/utilities'>Back</Link></button></div>

                        <DialogContent className='mt-12 w-10/12'>
                            <PropertyModal />
                        </DialogContent>
                    </Dialog>
                </div>

            </div>
        </div>
    )
}