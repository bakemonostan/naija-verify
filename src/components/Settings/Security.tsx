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
import { Label } from "@/components/ui/label"


const PasswordSchema = z.object({
    currentPassword: z.string().min(8, "Password must be at least 8 characters"),
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export default function Security() {
    const form = useForm<z.infer<typeof PasswordSchema>>({
        resolver: zodResolver(PasswordSchema),
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    })


    return (
        <div className="w-full h-screen max-w-lg py-6 mx-auto lg:max-w-2xl lg:mx-0"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit((values) => {
                        console.log(values)
                    }
                    )}
                >
                    <FormField
                        name="currentPassword"
                        render={({ field }) => (
                            <FormItem className="pb-4">
                                <FormLabel className="mt-10 text-xs lg:text-sm text-secondary">Current Password</FormLabel>
                                <FormControl className="">
                                    <div className="relative">
                                        <Input
                                            className="px-4"
                                            type="password"
                                            placeholder="Enter current password"
                                            {...field}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage className="pl-1" />
                            </FormItem>
                        )
                        }
                    />
                    < FormField
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem className="pb-4">
                                <FormLabel className="mt-10 text-xs lg:text-sm text-secondary">New Password</FormLabel>
                                <FormControl className="">
                                    <div className="relative">
                                        <Input
                                            className="px-4"
                                            type="password"
                                            placeholder="Enter new password"
                                            {...field}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage className="pl-1" />
                            </FormItem>
                        )}
                    />
                    < FormField
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem className="pb-4">
                                <FormLabel className="mt-10 text-xs lg:text-sm text-secondary">Confirm Password</FormLabel>
                                <FormControl className="">
                                    <div className="relative">
                                        <Input
                                            className="px-4"
                                            type="password"
                                            placeholder="Confirm new password"
                                            {...field}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage className="pl-1" />
                            </FormItem>
                        )}
                    />
                    < div className="flex justify-end pt-5" >
                        <Button
                            type="submit"
                        >
                            Save Changes
                        </Button>
                    </div >
                </form >
            </Form >
        </div >
    )
}