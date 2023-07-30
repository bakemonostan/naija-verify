'use client'
import CreateAccount from "./CreateAccount"
import { useAppSelector } from "@/redux/store";
import LandlordDetails from "./LandlordDetails"
import Login from "./Login"

export default function UseClient() {
    const formType = useAppSelector((state) => state.auth.value.formType);

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