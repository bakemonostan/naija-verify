'use client'
import Profile from "./Profile"
import Notifications from "./Notifications"
import Security from "./Security"
import Header from "./Header"
import { useAppSelector } from "@/redux/store"


export default function UseClient({ }) {
    const { formType } = useAppSelector((state) => state.settings.value)
    return (
        <section className="w-full h-full p-4 mx-auto lg:mx-0">
            <div className='w-full lg:pl-24 lg:mx-0'>
                <Header />
            </div>
            <div className="pt-5 lg:pt-0 lg:p-24">
                {
                    formType === 'profile' ? <Profile /> : formType === 'security' ? <Security /> : <Notifications />
                }

            </div>
        </section>
    )
}