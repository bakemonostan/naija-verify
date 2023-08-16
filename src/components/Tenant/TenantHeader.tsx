import { Button } from "../ui/button"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { TenantPage, chooseTenantPage, selectTenantPage } from "@/redux/slices/tenantSlice"

type Props = {

}
export default function TenantHeader({ }: Props) {
    const dispatch = useAppDispatch()
    const { page } = useAppSelector(selectTenantPage)

    const handlePage = (page: TenantPage) => {
        dispatch(chooseTenantPage(page))
    }
    return (
        <div className="flex justify-between w-full pt-5 pb-10"
        >
            <div>
                <h1 className="lg:font-semibold lg:text-2xl">Tenants</h1>
                <p className="text-secondary-10">See all your tenants here</p>
            </div>
            <div className="lg:w-44">
                <Button
                    onClick={() => handlePage(
                        page === 'table' ? 'default' : 'table'
                    )}
                >
                    {
                        page === 'table' ? 'Go back' : 'View Tenants'
                    }
                </Button>
            </div>
        </div>
    )
}