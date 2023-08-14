import NoMaintenanceIcon from "@/components/Icons/NoMaintenanceIcon"

export default function MaintenancePage() {
    return (
        <div className="flex flex-col py-6">
            <div>
                <h4 className="font-semibold text-2xl font-prompt">Maintenance</h4>
                <p className="font-rubik text-gray-500 ">See all your maintenance request here</p>
                <div className="flex flex-col justify-center mx-12 text-center mt-14">
                    <div className="self-center">
                        <NoMaintenanceIcon width="308" height="308" />
                    </div>
                    <h3 className="text-xl font-prompt font-medium leading-5">Maintenance requests will<br /> appear here</h3>
                    <p className="font-rubik font-normal text-sm text-gray-500 mt-3">All maintenance requests from tenants<br /> will be displayed here</p>
                </div>
            </div>
        </div>
    )
}