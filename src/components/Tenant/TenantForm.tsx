'use client'

import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, MapPin, Phone } from "lucide-react"

type fieldName = 'email' | 'Address1' | 'Address2' | 'phoneNumber' | 'amount' | 'state'
interface IProfileForm {
    name: fieldName;
    label: string;
    placeholder: string;
    icon?: JSX.Element;
    type?: string;
}

interface IProfileInputFields {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    state: string;
}

const ProfileInputFields: IProfileForm[] = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'bolajisuraj@gmail.com',
        icon: <Mail size={15} />,
    },
    {
        name: 'Address1',
        label: 'Address 1',
        placeholder: 'Adeola Odeku Road, Victoria Island, Lagos',
        icon: <MapPin size={15} />,
    },
    {
        name: 'Address2',
        label: 'Address 2',
        placeholder: 'Adeola Odeku Road, Victoria Island, Lagos',
        icon: <MapPin size={15} />,
    },

    {
        name: 'state',
        label: 'State',
        placeholder: 'Select  state',
    },

    {
        name: 'phoneNumber',
        label: 'Phone Number',
        placeholder: 'Enter your phone number',
        icon: <Phone size={15} />,
        type: 'tel',
    },

    {
        name: 'amount',
        label: 'Amount Paid for rent',
        placeholder: 'Amount Paid for rent',

    },


]


const ProfileSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    Address1: z.string().nonempty({ message: "Address name is required" }),
    Address2: z.string().nullable(),
    state: z.string().nonempty({ message: "State is required" }),
    phoneNumber: z.string().nonempty({ message: "Phone number is required" }),
    amount: z.string().nonempty({ message: "Amount is required" }),
})


export default function TenantForm() {
    const form = useForm<z.infer<typeof ProfileSchema>>({
        resolver: zodResolver(ProfileSchema),
        defaultValues: {
            email: "",
            Address1: "",
            Address2: "",
            state: "",
            phoneNumber: "",
            amount: "",
        },
    })

    const { handleSubmit, reset } = form

    const onSubmit = (values: z.infer<typeof ProfileSchema>) => {
        reset()
        console.log(values)
    }

    return (
        <div
            className="w-full pb-10 hidescroll "
        >
            <div className='flex items-center gap-4 pb-5'>
                <div className="w-16">
                    <img src="/images/profileAvatar.svg" alt="" />
                </div>
                <p className='text-2xl font-bold'>Bolaji Suraj</p>
            </div>
            <Form {...form}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="px-3 md:w-7/12 sm:mx-auto sm:w-9/12 sm:px-0 lg:mx-0"
                >
                    {ProfileInputFields.map((item, index) => (
                        <FormField
                            key={item.label}
                            control={form.control}
                            name={item.name}
                            render={({ field }) => (
                                <FormItem className="pb-4">
                                    <FormLabel className="mt-10 text-xs text-secondary">{item.label}</FormLabel>
                                    <FormControl className="">
                                        <div className="relative">
                                            {
                                                item.icon && (
                                                    <div className="absolute transform -translate-y-1/2 text-secondary-10 top-1/2 left-2">
                                                        {item.icon}
                                                    </div>
                                                )
                                            }
                                            <Input
                                                className={`px-4  ${item.name === 'email' || item.name === 'Address1' || item.name === 'Address2' || item.name === 'phoneNumber' ? 'pl-8' : ''}`}
                                                type={item.type}
                                                placeholder={item.placeholder}
                                                {...field}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage className="pl-1" />
                                </FormItem>

                            )}
                        />
                    ))}
                    <div className='flex gap-5 ml-auto md:w-1/2' >
                        <Button className="w-full mt-5 text-secondary-10" variant='outline'>
                            Remove
                        </Button>
                        <Button className="w-full mt-5" type="submit" >
                            Save
                        </Button>
                    </div>
                </form>
            </Form>

        </div >
    )
}