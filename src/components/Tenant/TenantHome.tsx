/* eslint-disable @next/next/no-img-element */

type Props = {}
export default function TenantHome({ }: Props) {
    return (
        <div className="w-1/2 mx-auto space-y-8 lg:w-1/4">
            <img src="/images/viewtenants.svg" alt="Avatar" className="w-2/3 mx-auto" />
            <div className="space-y-2 text-center">
                <h2 className="font-semibold lg:text-xl">Your tenants will appear here</h2>
                <p>All tenants occupying your apartment will  be displayed here</p>
            </div>
        </div>
    )
}