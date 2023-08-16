'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
const Property = z.object({
    address: z.string(),
    total: z.string(),
    city: z.string(),
    state: z.string(),
    zipcode: z.string(),
    propertytype: z.string(),
    bedrooms: z.string(),
    baths: z.string(),
    rent: z.string(),
    securitydeposit: z.string(),
});

export default function AddForm() {
    const form = useForm<z.infer<typeof Property>>({
        resolver: zodResolver(Property),
        defaultValues: {
            address: "",
            total: "",
            city: "",
            state: "",
            zipcode: "",
            propertytype: "",
            bedrooms: "",
            baths: "",
            rent: "",
            securitydeposit: "",
        },
    })
    const router = useRouter()
    function onSubmit(values: z.infer<typeof Property>) {
        router.push('/dashboard/properties/details')
        console.log(values)
    }
    return (
        <div className="flex flex-col justify-center mx-auto justify-items-center ">
            <div className='flex flex-col self-center justify-center w-full px-4'>
                <div>
                    <div className="py-6">
                        < Form {...form} >
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-2 font-rubik">
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Street Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Address" {...field} />
                                            </FormControl>
                                            <FormDescription>

                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-3">
                                    <FormField
                                        control={form.control}
                                        name="total"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="">Total Unit</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter Unit" {...field} className="w-6/12 min-w-full" />
                                                </FormControl>
                                                <FormDescription>

                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="city"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>City</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter City" {...field} className="min-w-full"/>
                                                </FormControl>
                                                <FormDescription>

                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-3">
                                <FormField
                                    control={form.control}
                                    name="state"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>State</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Select State" {...field} />
                                            </FormControl>
                                            <FormDescription>

                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="zipcode"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Zip Code</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Zip Code" {...field} />
                                            </FormControl>
                                            <FormDescription>

                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="propertytype"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Property Type</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Single Family" {...field} />
                                            </FormControl>
                                            <FormDescription>

                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-3">
                                <FormField
                                    control={form.control}
                                    name="propertytype"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Bedrooms</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Single Family" {...field} />
                                            </FormControl>
                                            <FormDescription>

                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="propertytype"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Baths</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter number of baths" {...field} />
                                            </FormControl>
                                            <FormDescription>

                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="propertytype"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Rent Amount</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Amount" {...field} />
                                            </FormControl>
                                            <FormDescription>

                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="propertytype"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Security Deposit</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Amount" {...field} />
                                            </FormControl>
                                            <FormDescription>

                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                </div>

                                <Button type="submit" >Next</Button>
                            </form>
                        </Form >
                    </div >
                </div >

            </div >
        </div >
    )
}