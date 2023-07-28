'use client'

import LogoIcon from "@/components/Icons/LogoIcon";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";

const LoginInSchema = z.object({
    email: z.string().email("Invalid email address").nonempty("Email is required"),
    password: z.string().nonempty("Password is required"),
});

export default function Login() {
    const form = useForm<z.infer<typeof LoginInSchema>>({
        resolver: zodResolver(LoginInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const { register, handleSubmit, control, reset, clearErrors, formState: { errors } } = form;


    return (
        <section className="space-y-5 lg:w-3/5 lg:h-screen">
            <div className="pt-5 pb-10">
                <LogoIcon />
            </div>
            <div className="pb-2 space-y-2">
                <h2 className="font-semibold lg:text-2xl">Login to your account</h2>
                <p className="text-sm text-secondary-10">Welcome back!</p>
            </div>

            <form action="">
                <Label htmlFor="Email">
                    <span className='pb-3'>First Name</span>
                    <Input
                        title="Email"
                        placeholder="Enter Email"
                        {...register("email")}
                    />
                </Label>
                <Label htmlFor="Password">
                    <span className='pb-3'>Password</span>
                    <Input
                        title="Password"
                        type="password"
                        placeholder="Enter last name"
                        {...register("password")}
                    />
                </Label>
                <div className='pt-5'>
                    <span className=" text-primary text-sm text-right pb-2 mr-auto w-full block">Forgot Password?</span>
                    <Button type="submit">Submit</Button>
                </div>
                <span className="block py-4 text-center mx-auto  w-full text-sm text-secondary-10">
                    Dont have an account?
                    <Link href='#' className="text-primary font-semibold"> Sign Up</Link>
                </span>
            </form>
        </section>
    )
} 