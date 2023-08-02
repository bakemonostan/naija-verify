'use client'

import SolidUserIcon from "../Icons/SolidUserIcon";
import HouseIcon from "../Icons/HouseIcon";
import DocumentIcon from "../Icons/DocumentIcon";
import HouseIconTwo from "../Icons/HouseIconTwo";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form";

const formSchema = z.object({
    fullname: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email.",
    }),
    phoneNumber: z.string().min(11, {
        message: "Phone number must be at least 11 characters.",
    }),
    properties: z.string().min(2, {
        message: "Please select a property.",
    }),
    inviteBy: z.enum(["Email & Text", 'Email', "Text"], {
        required_error: "You need to select a invitation type.",
    }),
    applicationType: z.enum(["Premium", "Free"], {
        required_error: "You need to select an application type.",
    }),

})






export default function InvitationForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            fullname: "",
            email: "",
            phoneNumber: "",
            properties: "",
            inviteBy: "Email",
            applicationType: "Free",
        },
        resolver: zodResolver(formSchema),
    })

    const { handleSubmit, reset } = form

    function onSubmit(values: z.infer<typeof formSchema>) {
        reset()
        console.log(values)
    }

    return (
        <div className='w-full h-screen border border-red-400'
        >
            <div className='relative h-full gap-3 lg:flex lg:pl-20 lg:pt-14'>
                <section className='w-full h-full px-5 md:px-0 md:w-8/12 md:mx-auto lg:mx-0'>
                    <div>
                        <h1>Invite Tenant to apply</h1>
                        <p>You can change this information anytime</p>
                    </div>
                    <Form {...form}>
                        <form action="#" className=' lg:w-10/12'
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <div className='flex items-center gap-2'>
                                <div className="flex items-center justify-center p-1 rounded-full w-9 bg-primary-10 ">
                                    <SolidUserIcon />
                                </div>
                                <p className='text-sm font-semibold'>Renter Information</p>
                            </div>
                            <div>
                                <FormField
                                    control={form.control}
                                    name="fullname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter full name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                                {/* radio group */}
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="inviteBy"
                                        render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel>Send Invite by</FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex items-center gap-9"
                                                    >
                                                        <FormItem className="flex items-center space-x-3 ">
                                                            <FormControl>
                                                                <RadioGroupItem value='Email & Text' />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                Email & Text
                                                            </FormLabel>
                                                        </FormItem>
                                                        <FormItem className="flex items-center space-x-3 ">
                                                            <FormControl>
                                                                <RadioGroupItem value="Email" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                Email
                                                            </FormLabel>
                                                        </FormItem>
                                                        <FormItem className="flex items-center space-x-3 ">
                                                            <FormControl>
                                                                <RadioGroupItem value="Text" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">Text</FormLabel>
                                                        </FormItem>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>



                                {/* email and number */}
                                <div className='w-full gap-9 lg:flex'>
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem
                                                className='lg:w-1/2'
                                            >
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter email" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="phoneNumber"
                                        render={({ field }) => (

                                            <FormItem
                                                className='lg:w-1/2'
                                            >
                                                <FormLabel>Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter phone number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>
                            </div>

                            <div className='flex items-center gap-2'>
                                <div className="flex items-center justify-center p-1 rounded-full w-9 bg-primary-10 ">
                                    <HouseIconTwo />
                                </div>
                                <p className='text-sm font-semibold'>Rental Property</p>
                            </div>
                            <div>
                                <FormField
                                    control={form.control}
                                    name="properties"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Property applying to</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full border border-red-400">
                                                        <SelectValue className="text-black" placeholder="Select a verified email to display" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                                                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                                                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Application type */}
                            <div className='flex items-center gap-2'>
                                <div className="flex items-center justify-center p-1 rounded-full w-9 bg-primary-10 ">
                                    <DocumentIcon />
                                </div>
                                <p className='text-sm font-semibold'>Application Type</p>
                            </div>
                            <div>
                                <FormField
                                    control={form.control}
                                    name="applicationType"
                                    render={({ field }) => (
                                        <FormItem className="space-y-3">
                                            <FormLabel>Send Invite by</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex flex-col gap-4"
                                                >
                                                    <FormItem className="flex items-center gap-3 px-4 py-2 space-x-3 rounded-sm shadow-sm xl:w-10/12 bg-slate-50">
                                                        <FormControl>
                                                            <RadioGroupItem value='Premium' />
                                                        </FormControl>
                                                        <div className="flex items-center gap-4">
                                                            <div>
                                                                <img src="/images/premiumicon.svg" alt="" />
                                                            </div>
                                                            <div>
                                                                <FormLabel className="font-normal">
                                                                    INCLUDED WITH PREMIUM
                                                                </FormLabel>
                                                                <p className='text-xs text-secondary-10'>
                                                                    Background, Eviction, Credit + Income Insights Renter pays N2,500
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </FormItem>

                                                    <FormItem className="flex items-center gap-3 px-4 py-2 space-x-3 rounded-sm shadow-sm xl:w-10/12 bg-slate-50">
                                                        <FormControl>
                                                            <RadioGroupItem value="Free" />
                                                        </FormControl>
                                                        <div className="flex items-center gap-4">
                                                            <div>
                                                                <img src="/images/badgeIcon.svg" alt="" />
                                                            </div>
                                                            <div>
                                                                <FormLabel className="font-normal">
                                                                    FREE FOR LANDLORD
                                                                </FormLabel>
                                                                <p className='text-xs text-secondary-10'>
                                                                    Background, Eviction, Credit Only Renter pays N1,000
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </FormItem>

                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <Button> Submit </Button>
                        </form>
                    </Form>
                </section>

                {/* make this a component */}
                <section className="absolute top-28 xl:right-4 2xl:right-16 flex-col items-center justify-center hidden w-[20rem] shadow-md  bg-cyan-50 xl:flex pb-20 rounded-md">
                    <div className="w-[9rem]">
                        <img src="/images/notePad.svg" alt="" />
                    </div>
                    <div className="p-10 px-5 space-y-4">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-primary">What to know</h3>
                            <p className="pr-5 text-sm">
                                When inviting a tenant for screening, <br /> here are some important items for landlords to consider:
                            </p>
                        </div>
                        <ul className="flex flex-col gap-5 text-sm">
                            <li className="flex gap-1">
                                <span>
                                    1.
                                </span>
                                <span>
                                    It takes about 3 - 4 days to screen a tenant and get a detailed reports.
                                </span>
                            </li>
                            <li className="flex gap-1">
                                <span>2.</span>
                                <span>
                                    Premium application type include background checks, eviction credit + income insights renter pays.
                                </span>
                            </li>
                            <li className="flex gap-1">
                                <span>3.</span>
                                <span>
                                    Free for landlord and include background checks, eviction credit + income insights renter pays.
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>

        </div>
    )
}



