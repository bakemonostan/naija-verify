'use client'

import { zodResolver } from "@hookform/resolvers/zod"
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
import { Input } from "@/components/ui/input"
import DesktopHeader from "../DesktopHeader"
import Link from "next/link"
import * as z from "zod"
import { useForm } from "react-hook-form"

const formSchema = z.object({
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long." })
        .max(100, { message: "Password must be at most 25 characters long." }),

    confirmPassword: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long." })
        .max(100, { message: "Password must be at most 25 characters long." })

}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
});



export default function ResetPassword() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    })

    const { handleSubmit, reset } = form

    const onsubmit = (data: z.infer<typeof formSchema>) => {
        reset()
        console.log(data)
    }


    return (
        <section className="h-screen space-y-5 lg:w-3/5">
            <DesktopHeader title="Reset Password" body="Set a new password" onback={() => { }} />
            <Form {...form}>
                <form onSubmit={handleSubmit(onsubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="relative">
                                <FormLabel >Password</FormLabel>
                                <FormControl>
                                    <Input className="" type='password' placeholder="Enter your password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem className="relative">
                                <FormLabel >Confirm Password</FormLabel>
                                <FormControl>
                                    <Input className="" type='password' placeholder="Confirm your password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Reset Password</Button>
                </form>
            </Form>

        </section>
    )
}