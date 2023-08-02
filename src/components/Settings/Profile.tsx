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
import { Mail, MapPin, Phone } from "lucide-react"

type fieldName = 'firstName' | 'lastName' | 'email' | 'phoneNumber' | 'address' | 'state'
interface IProfileForm {
    name: fieldName;
    label: string;
    placeholder: string;
    icon?: JSX.Element;
    type?: string;
}

interface IProfileInputFields {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    state: string;
}

const ProfileInputFields: IProfileForm[] = [
    {
        name: 'firstName',
        label: 'First Name',
        placeholder: 'Enter your first name',
    },
    {
        name: 'lastName',
        label: 'Last Name',
        placeholder: 'Enter your last name',
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter your email address',
        icon: <Mail size={15} />,
        type: 'email',
    },

    {
        name: 'phoneNumber',
        label: 'Phone Number',
        placeholder: 'Enter your phone number',
        icon: <Phone size={15} />,
        type: 'tel',
    },

    {
        name: 'address',
        label: 'Address',
        placeholder: 'Enter your address',
        icon: <MapPin size={15} />,
    },

    {
        name: 'state',
        label: 'State',
        placeholder: 'Select  state',
    },
]


const ProfileSchema = z.object({
    firstName: z.string().nonempty({ message: "First name is required" }),
    lastName: z.string().nonempty({ message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phoneNumber: z.string().nonempty({ message: "Phone number is required" }),
    address: z.string().nonempty({ message: "Address is required" }),
    state: z.string().nonempty({ message: "State is required" }),
})


export default function Profile() {
    const form = useForm<z.infer<typeof ProfileSchema>>({
        resolver: zodResolver(ProfileSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            address: "",
            state: "",
        },
    })

    const { handleSubmit, reset } = form

    const onSubmit = (values: z.infer<typeof ProfileSchema>) => {
        reset()
        console.log(values)
    }

    return (
        <div
            className="max-w-lg py-6 mx-auto lg:max-w-2xl lg:mx-0"
        >
            <div className="w-16 pb-10">
                <img src="/images/profileAvatar.svg" alt="" />
            </div>
            <Form {...form}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {ProfileInputFields.map((item, index) => (
                        <FormField
                            key={item.label}
                            control={form.control}
                            name={item.name}
                            render={({ field }) => (
                                <FormItem className="pb-4">
                                    <FormLabel className="mt-10 text-xs text-secondary">{item.label}</FormLabel>
                                    <FormControl className="">
                                        <div className="relative">
                                            {
                                                item.icon && (
                                                    <div className="absolute transform -translate-y-1/2 text-secondary-10 top-1/2 left-2">
                                                        {item.icon}
                                                    </div>
                                                )
                                            }
                                            <Input
                                                className={`px-4  ${item.name === 'email' || item.name === 'address' || item.name === 'phoneNumber' ? 'pl-8' : ''}`}
                                                type={item.type}
                                                placeholder={item.placeholder}
                                                {...field}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage className="pl-1" />
                                </FormItem>

                            )}
                        />
                    ))}
                    <Button className="w-full mt-5" type="submit">
                        Save Changes
                    </Button>
                </form>
            </Form>

        </div >
    )
}