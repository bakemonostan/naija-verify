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

export default function AddForm(){
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
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        router.push('/dashboard/properties/details')

        console.log(values)
    }
    return (
        <div className="flex flex-col justify-center justify-items-center w-12/12 mx-auto">

            <div className='flex flex-col justify-center self-center w-full px-4'>
                <div>
                    <div className="py-6">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
                                <FormField
                                    control={form.control}
                                    name="total"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Total Unit</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Unit" {...field} />
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
                                                <Input placeholder="Enter City" {...field} />
                                            </FormControl>
                                            <FormDescription>

                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
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

                                <Button type="submit" >Next</Button>
                            </form>
                        </Form>
                    </div>
                </div>

            </div>
        </div>
    )
}