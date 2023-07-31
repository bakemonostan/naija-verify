'use client'
import CreateAccount from "./CreateAccount"
import { useAppSelector } from "@/redux/store";
import LandlordDetails from "./LandlordDetails"
import Login from "./Login"
import { useRouter } from "next/navigation";

export default function UseClient() {
    const formType = useAppSelector((state) => state.auth.value.formType);
    const router = useRouter();

    if (formType === 'userType') {
        router.push('/auth/register')
    }

    if (formType === 'register') {
        return (
            <CreateAccount />
        )
    }
    if (formType === 'login') {
        return (
            <Login />
        )
    }

    return (
        <LandlordDetails />
    )

}