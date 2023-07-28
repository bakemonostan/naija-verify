'use client'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

import { redirect } from "next/navigation"
import { useAppSelector } from "@/redux/store"
import { ReduxProvider } from '@/redux/provider'


export default function TempRedirect() {
    const isLogged = useAppSelector((state) => state.auth.value.selectedUser);
    if (!isLogged) redirect('/auth/register')
    return (
        <Provider store={store}>
            <div>
                <h1>TempRedirect</h1>
                <p>All I do is re re redirect</p>
            </div>
        </Provider>
    )
}