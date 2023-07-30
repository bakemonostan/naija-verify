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
import { Mail } from "lucide-react"

const formSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Please enter your email address." })
        .email("Sorry, this is not a valid email.")
})


export default function ForgotPassword() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    const { handleSubmit, reset } = form

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        reset()
        console.log(data)
    }

    return (
        <section className="h-screen space-y-5 lg:w-3/5">
            <DesktopHeader title="Forgot Password" body="Enter your email address to reset your password" onback={() => { }} />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="relative">
                                <FormLabel >Email</FormLabel>
                                <Mail className="absolute flex items-center w-6 h-6 pl-2 mt-5 top-[2.1rem] text-secondary-10" />
                                <FormControl>
                                    <Input className="pl-8" placeholder="Enter your email address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Log in</Button>
                    <div className="w-full text-center">
                        <p className="text-sm text-secondary-10">Already have an account? <Link href='/auth/login' className="font-semibold text-primary">Login</Link></p>
                    </div>

                </form>
            </Form>
        </section>
    )
}