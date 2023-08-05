export default function LeasePage() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-5 pt-10 lg:gap-14">
            <div className='text-center'>
                <h1 className="font-semibold lg:text-2xl">Leases</h1>
                <p>View properties for lease here</p>
            </div>
            <div className="w-1/2 lg:w-1/4">
                <img src="/images/lease.svg" alt="Avatar" />
            </div>
        </div>
    )
}