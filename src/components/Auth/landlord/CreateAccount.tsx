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
import { Mail, MapPin, Phone } from "lucide-react"
import { RegistrationInputFields, nigeriaStates, PasswordFields } from "@/helpers"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { Forms, chooseFormType, setModal } from "@/redux/slices/authSlice"
import DesktopHeader from "../DesktopHeader"
import Modal from "./Modal"

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
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export default function CreateAccount() {
    const modal = useAppSelector((state) => state.auth.value.modalStates);
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
    const { register, handleSubmit, reset, formState: { errors } } = form;

    const handleFormChange = (selectedOption: Forms) => {
        dispatch(chooseFormType({
            formType: selectedOption,
        }));
    };

    const showModal = () => {
        dispatch(setModal({
            modalStates: 'verify'
        }))
        setTimeout(() => {
            dispatch(setModal({
                modalStates: 'created'
            }))
        }, 3000);

    }

    function onSubmit(values: z.infer<typeof RegistrationSchema>) {
        showModal()
        reset()
    }

    function goBack(arg: 'go back' | 'login') {
        if (arg === 'go back') {
            handleFormChange('landlord details')
        }
        if (arg === 'login') {
            dispatch(setModal({
                modalStates: null
            })
            )
            handleFormChange('login')
        }
    }

    return (
        <section className="space-y-5 lg:w-3/5">
            {
                modal === 'verify' ? <Modal variant='verify' title='Verify your email' description='We have sent a link to your mail. Please proceed to verify email' onClick={() => { }} /> : modal === 'created' ? <Modal variant='created' title='Account created' description='Your account has been created successfully' onClick={
                    () => { goBack('login') }
                } /> : null
            }
            <DesktopHeader title="Register as Landlord" body="This information will be used to create your account" onback={() => { goBack('go back') }} />
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {
                        RegistrationInputFields.map((item, index) => {
                            return (
                                <FormField
                                    key={item.label}
                                    control={form.control}
                                    name={item.name}
                                    render={({ field }) => (
                                        <FormItem className='relative'>
                                            <FormLabel >{item.label}</FormLabel>
                                            {
                                                item.name === 'email' ? <Mail className="absolute text-secondary-10 flex items-center w-6 h-6 pl-2 top-[2.1rem]" /> : item.name === 'address1' ? <MapPin className="absolute text-secondary-10 flex items-center w-6 h-6 pl-2  top-[2.1rem]" /> : null
                                            }
                                            <FormControl>
                                                <Input
                                                    className={`${item.name === 'email' ? 'pl-8' : item.name === 'address1' ? 'pl-8' : ''}`}
                                                    placeholder={item.placeholder} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )
                        })}
                    <div className='justify-between gap-6 lg:flex'>
                        <Label htmlFor="State" className="flex flex-col flex-1 ">
                            <span className='pb-2'>State</span>
                            <select required id="State" name='State' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5">
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

                            {errors.phoneNumber && <span className="text-sm text-semibold mt-1.5 text-red-400">{errors.phoneNumber.message}</span>}
                        </Label>
                    </div>

                    {
                        PasswordFields.map((item, index) => {
                            return (
                                <FormField
                                    key={item.label}
                                    control={form.control}
                                    name={item.name}
                                    render={({ field }) => (
                                        <FormItem >
                                            <FormLabel>{item.label}</FormLabel>
                                            <FormControl>
                                                <Input type='password' placeholder={item.placeholder} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )
                        }
                        )
                    }
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </section >
    )

}


