'use client'
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input"
// import ProgressTracker from "./ProgressTracker"
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

export default function AddDetails() {
    const form = useForm<z.infer<typeof PropertyDetailsSchema>>({
        resolver: zodResolver(PropertyDetailsSchema),
        defaultValues: {
            propertyTitle: "",
            propertyType: "",
        },
    })
    const router = useRouter()
    function onSubmit(values: z.infer<typeof PropertyDetailsSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        router.push('/dashboard/properties/photos')

        console.log(values)
    }
    return (
        <div className='flex flex-col self-center justify-center w-full px-4 font-rubik'>
            {/* <ProgressTracker progress={[{ checked: true }, { checked: false }, { checked: false }, { checked: false }, { checked: true }]} /> */}
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        <FormField
                            control={form.control}
                            name="propertyTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Property Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="E.g Chevron Drive Estate" {...field} />
                                    </FormControl>
                                    <FormDescription>

                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="propertyType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Property Type</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Provide more details about your property" {...field} />
                                    </FormControl>
                                    <FormDescription>

                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            </div>
            <div className='flex flex-col w-full gap-x-8 lg:justify-between lg:flex-row-reverse py-10'>
                <div className='py-2 w-full '><Link href="/dashboard/properties/photos" ><Button className="w-full">Next</Button> </Link></div>
                <div className='py-2 w-full'><button className='w-full px-24 py-3 font-bold border text-primary border-primary font-rubik' onClick={() => { router.push('/dashboard/properties/add') }}>Back</button></div>
            </div>
        </div>
    )
}