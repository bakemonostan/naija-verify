"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"

type fieldNames = "subscription" | "property_updates" | "maintenance_reminders" | "payment_reminders" | "lease_renewal_notices" | "community_events" | "marketing_emails"

interface ISelectForm {
    name: fieldNames
    label: string
    description: string
}

const selectForm: ISelectForm[] = [
    {
        name: "subscription",
        label: "Subscription to newsletter updates",
        description: "Subscribe to our newsletter and stay up-to-date with the trends, and insights in the real estate industry",
    },
    {
        name: "property_updates",
        label: "Property Updates",
        description: "Receive instant notifications about new properties that match your preferences",
    },
    {
        name: "maintenance_reminders",
        label: "Maintenance Reminders",
        description: "Get timely reminders for scheduled maintenance tasks, ensuring your property remains in excellent condition"
    },
    {
        name: "payment_reminders",
        label: "Payment Reminders",
        description: "Receive reminders for upcoming rent payments or other financial obligations"
    },
    {
        name: "lease_renewal_notices",
        label: "Lease Renewal Notices",
        description: "Be notified in advance about lease renewal options"
    },
    {
        name: "community_events",
        label: "Community Events and Amenities",
        description: "Stay connected with your community by receiving updates on upcoming events"
    },
    {
        name: "marketing_emails",
        label: "Marketing Emails",
        description: "Receive emails about new products, features, and more"
    },
]

const FormSchema = z.object({
    subscription: z.boolean().default(false).optional(),
    property_updates: z.boolean().default(false).optional(),
    maintenance_reminders: z.boolean().default(false).optional(),
    payment_reminders: z.boolean().default(false).optional(),
    lease_renewal_notices: z.boolean().default(false).optional(),
    community_events: z.boolean().default(false).optional(),
    marketing_emails: z.boolean().default(false).optional(),
})

export default function Notifications() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            subscription: false,
            property_updates: false,
            maintenance_reminders: false,
            payment_reminders: false,
            lease_renewal_notices: false,
            community_events: false,
            marketing_emails: false,
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "Success",
            description: "Your settings have been updated",
            duration: 5000,
        })
        console.log(data)
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-lg py-6 mx-auto space-y-6 lg:mx-0 lg:max-w-2xl"
            >
                <div>
                    <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
                    <div className="space-y-4">
                        {selectForm.map((item) => (
                            <FormField
                                key={item.name}
                                control={form.control}
                                name={item.name}
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-center gap-4 p-4 border rounded-lg">
                                        <FormControl>
                                            <Switch
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-0.5">
                                            <FormLabel className="text-sm text-secondary">
                                                {item.label}
                                            </FormLabel>
                                            <FormDescription className='text-xs'>
                                                {item.description}
                                            </FormDescription>
                                        </div>

                                    </FormItem>
                                )}
                            />
                        ))}
                    </div>
                </div>
                <Button type="submit">Save Changes</Button>
            </form>
        </Form>
    )
}
