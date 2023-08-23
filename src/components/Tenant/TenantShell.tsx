'use client'

import { useAppDispatch, useAppSelector } from "@/redux/store"
import { chooseTenantPage, selectTenantPage } from "@/redux/slices/tenantSlice"
import TenantForm from "./TenantForm"
import TenantHeader from "./TenantHeader"
import TenantTable from "./TenantTable"
import TenantHome from "./TenantHome"

type Props = {}
export default function TenantShell({ }: Props) {
    const dispatch = useAppDispatch()
    const { page } = useAppSelector(selectTenantPage)
    console.log(page)

    return (
        <section className="flex flex-col items-center justify-center w-full gap-5 ">
            <TenantHeader />
            {
                page === 'default' ? <TenantHome /> : page === 'table' ? <TenantTable /> : <TenantForm />
            }
        </section>
    )
}