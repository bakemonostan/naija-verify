'use client'

import LogoIcon from "@/components/Icons/LogoIcon";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import DesktopHeader from "../DesktopHeader";
import { Forms, chooseFormType, login, } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";

const LoginInSchema = z.object({
    email: z.string().email('Please enter a valid email').nonempty("Email is required"),
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
    const router = useRouter();

    const dispatch = useAppDispatch();
    const handleFormChange = (selectedOption: Forms) => {
        dispatch(chooseFormType({
            formType: selectedOption,
        }));
    };

    function goBack() {
        handleFormChange('register')
    }

    const { register, handleSubmit, control, reset, clearErrors, formState: { errors } } = form;

    function onSubmit(values: z.infer<typeof LoginInSchema>) {
        dispatch(login())
        router.push('/dashboard')
        reset()
    }


    return (
        <section className="space-y-5 lg:w-3/5 lg:h-screen">
            <DesktopHeader title="Login to your account" body="Welcome back" onback={goBack} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>

                    <Label htmlFor="Email">
                        <span className='pb-3'>Enter your email address</span>
                        <Input
                            title="Email"
                            placeholder="Enter Email"
                            {...register("email")}
                        />
                        {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                    </Label>
                </div>

                <div>

                    <Label htmlFor="Password">
                        <span className='pb-3'>Password</span>
                        <Input
                            title="Password"
                            type="password"
                            placeholder="Enter your pasword"
                            {...register("password")}
                        />
                    </Label>
                    {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
                </div>
                <div className='pt-5'>
                    <Link href='/auth/forgot-password' className="block w-full pb-2 mr-auto text-sm text-right  text-primary">Forgot Password?</Link>
                    <Button type="submit">Submit</Button>
                </div>
                <span className="block w-full py-4 mx-auto text-sm text-center text-secondary-10">
                    Dont have an account?
                    <Link href='/auth/register' className="font-semibold text-primary"> Sign Up</Link>
                </span>
            </form>
        </section>
    )
} 