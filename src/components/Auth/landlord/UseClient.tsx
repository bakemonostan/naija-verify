'use client'
import CreateAccount from "./CreateAccount"
import LandlordDetails from "./LandlordDetails"
import Login from "./Login"

export default function UseClient() {
    return (
        <>
            <CreateAccount />
            <Login />
            <LandlordDetails />
        </>
    )
}