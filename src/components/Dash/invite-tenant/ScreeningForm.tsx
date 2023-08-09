/* eslint-disable react/no-unescaped-entities */
'use client'
import SolidUserIcon from "@/components/Icons/SolidUserIcon";
import { useToast } from "@/components/ui/use-toast"
import HouseIconTwo from "@/components/Icons/HouseIconTwo";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
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
import { Input } from "@/components/ui/input"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/store";
import { InvitationType, chooseInvitationType } from "@/redux/slices/inviteTenantSlice";
import { set } from "date-fns";

const FormSchema = z.object({
    fullName: z.string().nonempty({ message: "Full name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().nonempty({ message: "Phone number is required" }),

    landLordFullName: z.string().nonempty({ message: "Full name is required" }),
    landLordEmail: z.string().email({ message: "Invalid email address" }),
    landLordPhone: z.string().nonempty({ message: "Phone number is required" }),
    propertyType: z.string().min(2, {
        message: "Please select a property.",
    }),
    location: z.string().min(2, {
        message: "Please select a location.",
    }),
    tenancyStartDate: z.string().min(2, {
        message: "Please select a tenancy start date.",
    }),
    tenancyEndDate: z.string().min(2, {
        message: "Please select a tenancy end date.",
    }),
})

type Props = {}
export default function ScreeningForm({ }: Props) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            landLordFullName: "",
            landLordEmail: "",
            landLordPhone: "",
            propertyType: "",
            location: "",
            tenancyStartDate: "",
            tenancyEndDate: "",
        },
    })

    const dispatch = useAppDispatch();

    const setInvitationType = (type: InvitationType) => {
        dispatch(chooseInvitationType(
            {
                invitationType: type
            }
        ))
    }
    const { toast } = useToast()
    const { handleSubmit, formState } = form

    const onSubmit = handleSubmit((data) => {
        setInvitationType('report')
        setTimeout(() => {
            setInvitationType(null)
        }, 3000);
        form.reset()
    })

    return (
        <section className='w-full h-full max-w-4xl p-5 mx-auto md:w-5/6 lg:w-5/6' >
            <div className="space-y-1 text-center">
                <h1 className="text-2xl font-semibold lg:text-3xl">Screen Tenant</h1>
                <p className="text-sm text-secondary-10 ">You can change this information anytime</p>
            </div>


            <Form {...form} >
                <form
                    onSubmit={onSubmit}
                >

                    {/* top */}
                    <div className="flex flex-col items-center py-5 mx-auto ">
                        <div className='flex items-center gap-2 pb-3'>
                            <div className="flex items-center justify-center p-1 rounded-full w-9 bg-primary-10 ">
                                <SolidUserIcon />
                            </div>
                            <p className='text-sm font-semibold lg:text-lg'>Renter Information</p>
                        </div>
                    </div>
                    <div>
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Enter full name"
                                            className="w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='grid-cols-2 gap-5 lg:grid '>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter email address"
                                                className="w-full"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter phone number"
                                                className="w-full"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/*Past landlord */}
                    <div className="flex flex-col items-center py-5 mx-auto pt-7">
                        <div className='flex items-center gap-2'>
                            <div className="flex items-center justify-center p-1 rounded-full w-9 bg-primary-10 ">
                                <HouseIconTwo />
                            </div>
                            <p className='text-sm font-semibold lg:text-lg'>Past Landlord's Information</p>
                        </div>
                    </div>

                    <div>
                        <FormField
                            control={form.control}
                            name="landLordFullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Land lord's full name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Enter full name"
                                            className="w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <div className='w-full grid-cols-2 gap-5 lg:grid '>
                            <FormField
                                control={form.control}
                                name="landLordEmail"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter renter's email address"
                                                className="w-full"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="landLordPhone"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter renter's phone number"
                                                className="w-full"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="propertyType"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Property Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-full ">
                                                    <SelectValue>
                                                        {field.value
                                                            ? field.value
                                                            : "Select property type"}
                                                    </SelectValue>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Bungalow">Bungalow</SelectItem>
                                                <SelectItem value="Semi detach duplex">Semi detach duplex</SelectItem>
                                                <SelectItem value="Warehouse">Warehouse</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Location</FormLabel>
                                        <FormControl>
                                            <Input

                                                {...field}
                                                placeholder="Enter location"
                                                className="w-full"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="tenancyStartDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tenancy Start Date</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter tenancy start date"
                                                className="w-full"
                                                type="date"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="tenancyEndDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tenancy End Date</FormLabel>
                                        <FormControl>
                                            <Input

                                                {...field}
                                                placeholder="Enter tenancy end date"
                                                className="w-full"
                                                type="date"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 pt-10 mx-auto lg:w-1/2">
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={formState.isSubmitting}
                            onClick={() =>
                                toast({
                                    title: "Form submitted",
                                    description: "We've submitted your form.",
                                })
                            }
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
        </section>
    )
}