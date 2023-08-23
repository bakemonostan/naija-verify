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
