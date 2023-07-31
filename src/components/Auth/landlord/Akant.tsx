'use client'
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
import { RegistrationInputFields, } from "@/helpers"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Pin } from "lucide-react"
import LogoIcon from "@/components/Icons/LogoIcon"
import { nigeriaStates } from "@/helpers"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { Forms, chooseFormType } from "@/redux/slices/authSlice"
import DesktopHeader from "../DesktopHeader"

const RegistrationSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters").nonempty("First name is required"),
    lastName: z.string().min(2, "Last name must be at least 2 characters").nonempty("Last name is required"),
    email: z.string().email("Invalid email address").nonempty("Email is required"),
    address1: z.string().nonempty("Address is required"),
    address2: z.string().optional(),
    state: z.array(z.string()).optional(),
    phoneNumber: z.string().nonempty("Phone number is required"),
    password: z.string().nonempty("Password is required"),
    confirmPassword: z.string().nonempty("Confirm password is required"),
    termsAndConditions: z.boolean(),
});


export default function Akant() {
    const formType = useAppSelector((state) => state.auth.value.formType);
    const dispatch = useAppDispatch();
    const form = useForm<z.infer<typeof RegistrationSchema>>({
        resolver: zodResolver(RegistrationSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            address1: "",
            address2: "",
            state: [],
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            termsAndConditions: false,
        },
    })

    const { register, handleSubmit, control, reset, formState: { errors } } = form;

    return (
        <div>
            <Form {...form}>
                <form onSubmit={() => { }} className="space-y-8">
                    {
                        RegistrationInputFields.map((item, index) => {
                            return (
                                <FormField
                                    key={item.label}
                                    control={form.control}
                                    name={item.name}
                                    render={({ field }) => (
                                        <FormItem >
                                            <FormLabel>{item.name}</FormLabel>
                                            <FormControl>
                                                <Input placeholder={item.placeholder} {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your public display name.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )
                        })}
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}


{/* <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <Label htmlFor="First name">
                    <span className='pb-3'>First Name</span>
                    <Input
                        title="First Name"
                        placeholder="Enter first Name"
                        {...register("firstName")}
                    />
                </Label>
                <Label htmlFor="Last name">
                    <span className='pb-3'>Last Name</span>
                    <Input
                        title="Last Name"
                        placeholder="Enter last name"
                        {...register("lastName")}
                    />
                </Label>

                <Label htmlFor="Email" className="relative">
                    <span className='pb-3'>Email</span>
                    <Mail className="absolute text-secondary-10 flex items-center w-6 h-6 pl-2 mt-[1.1rem]" />
                    <Input
                        title="Email"
                        placeholder="Enter email"
                        {...register("email")}
                        className="pl-8"
                    />
                </Label>

                <Label htmlFor="Address" className="relative">
                    <span className='pb-3'>Address</span>
                    <MapPin className="absolute text-secondary-10 flex items-center w-6 h-6 pl-2 mt-[1.1rem]" />
                    <Input
                        title="Address 1"
                        placeholder="Enter address 1"
                        {...register("address1")}
                        className="pl-8"
                    />
                </Label>

                <Label htmlFor="Address 2" className="relative">
                    <span className='pb-3'>Address 2</span>
                    <MapPin className="absolute text-secondary-10 flex items-center w-6 h-6 pl-2 mt-[1.1rem]" />
                    <Input
                        title="Address 2"
                        placeholder="Enter address 1"
                        {...register("address2")}
                        className="pl-8"
                    />

                </Label>

                <div className='justify-between gap-6 lg:flex'>
                    <Label htmlFor="State" className="flex flex-col flex-1 ">
                        <span className='pb-2'>State</span>
                        <select id="State" name='State' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5">
                            {
                                nigeriaStates.map((state) => {
                                    return (
                                        <option key={state} value={state}>{state}</option>
                                    )
                                })
                            }
                        </select>
                    </Label>

                    <Label htmlFor="Phone number" className="flex-1">
                        <span className='pb-3'>Phone Number</span>
                        <Phone className="absolute text-secondary-10 flex items-center w-6 h-6 pl-2 mt-[1.1rem]" />
                        <Input
                            title="Phone Number"
                            placeholder="Enter phone Number"
                            {...register("phoneNumber")}
                            className="pl-8"
                        />

                    </Label>
                </div>

                <Label htmlFor="Password">
                    <span className='pb-3'>Password</span>
                    <Input
                        title="Password"
                        placeholder="Enter Password"
                        {...register("password")}
                    />
                </Label>

                <Label htmlFor="Confirm Password">
                    <span className='pb-3'>Confirm Password</span>
                    <Input
                        title="Confirm Password"
                        placeholder="Confirm Password"
                        {...register("confirmPassword")}
                    />
                </Label>


                <Label htmlFor="Terms and Conditions" className='flex gap-3'>
                    <input
                        type="checkbox"
                        title="Terms and Conditions"
                        placeholder="Terms and Conditions"
                        {...register("termsAndConditions")}
                    />
                    <span className="flex text-sm text-secondary-10">I agree to abide by the terms and conditions
                        <Link href="/terms-and-conditions">
                            <span className="cursor-pointer text-primary">
                                Terms and Conditions
                            </span>
                        </Link>
                    </span>
                </Label>
                <Button type="submit">Submit</Button>
            </form> */}




