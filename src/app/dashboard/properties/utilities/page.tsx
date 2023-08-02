'use client'
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label"
import  InputRadio  from "@/components/Auth/InputRadio"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
const PropertyDetailsSchema = z.object({
    propertyTitle: z.string(),
    propertyType: z.string(),
});


export default function details() {
    const form = useForm<z.infer<typeof PropertyDetailsSchema>>({
        resolver: zodResolver(PropertyDetailsSchema),
        defaultValues: {
            propertyTitle: "",
            propertyType: "",
        },
    })
    const router = useRouter()
    function onSubmit(values: z.infer<typeof PropertyDetailsSchema>) {

        router.push('/dashboard/properties/photos')

        console.log(values)
    }
    return (
        <div className="flex flex-col justify-center justify-items-center w-12/12 mx-auto">
            <div className='py-6 px-4 self-center'>
                <h2 className='text-[26px] font-semibold font-prompt '>Available Utilities</h2>
                <p className='text-gray-400'>You can change this information anytime</p>
            </div>
            <div className='flex flex-col justify-center self-center w-full px-4 font-rubik'>
                <h3 className="text-sm">SELECT ALL THAT APPLIES</h3>
                <div className="py-8">
                    <InputRadio options={[{value:"Electricity",label:"Electricity"}]} description="Amenities" title="Amenities" selectedValue="Electricity" onChange={("settle")=>{}}/>
                </div>
                <div className='text-center py-10'>
                    <div className='py-2'><button className='text-[#fff] font-bold px-24 py-5 w-full font-rubik bg-green-600'>Next</button></div>
                    <div className='py-2'><button className='text-primary border-primary border font-bold px-24 py-5 w-full font-rubik' onClick={() => { router.push('/dashboard/properties/add') }}>Back</button></div>
                </div>
            </div>
        </div>
    )
}