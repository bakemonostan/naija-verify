import LogoIcon from "@/components/Icons/LogoIcon";

export default function Report() {
    return (
        <section className='w-[90%] max-w-4xl h-full py-5 space-y-6 border border-t-4 rounded-md shadow-md border-t-primary md:w-8/12 mx-auto'>
            <div className='flex items-center justify-between w-full p-4 px-8 border-b'>
                <LogoIcon />
                <h1 className='font-bold'>Screening Report</h1>
            </div>
            <div className='p-8 space-y-8'>
                <div className="flex items-center gap-5 ">
                    <div className="w-16">
                        <img src="/images/profileAvatar.svg" alt="" />
                    </div>
                    <h3 className="text-xl font-bold">
                        Bolaji Suraj
                    </h3>
                </div>
                <div className="items-center justify-between grid-cols-2 gap-5 space-y-2 lg:space-y-0 lg:grid gap-x-10">
                    <div className="flex gap-2">
                        <span className="text-secondary-10">Email Address</span>
                        <span>bolajisuraj@gmail.com</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-secondary-10">Phone Number:</span>
                        <span>+2348183929402</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-secondary-10">Home  Address: </span>
                        <span>
                            31, Adeola Odeku, Lekki
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-secondary-10">Desired Move in Date:</span>
                        <span>12/03/2021</span>
                    </div>
                </div>
                <hr />

                <div className="space-y-4 ">
                    <h3 className="pb-6 text-xl font-bold">Background Check Results:</h3>
                    <div >
                        <div>
                            <h4 className="text-lg font-semibold text-secondary-10">
                                Employment Verification
                            </h4>
                            <div className="items-center justify-between grid-cols-2 gap-5 space-y-2 lg:space-y-0 lg:grid gap-x-10">
                                <div className="flex gap-2 pt-5">
                                    <span className="text-secondary-10">Email Address</span>
                                    <span>bolajisuraj@gmail.com</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-secondary-10">Phone Number:</span>
                                    <span>+2348183929402</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-secondary-10">Home  Address: </span>
                                    <span>
                                        31, Adeola Odeku, Lekki
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-secondary-10">Desired Move in Date:</span>
                                    <span>12/03/2021</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div>
                            <h4 className="text-lg font-semibold text-secondary-10">
                                Rental History
                            </h4>
                            <div className="items-center justify-between grid-cols-2 gap-5 space-y-2 lg:space-y-0 lg:grid gap-x-10">
                                <div className="flex gap-2 pt-5">
                                    <span className="text-secondary-10">Landlord Name</span>
                                    <span>Bolaji Suraj</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-secondary-10">Phone Number:</span>
                                    <span>+2348183929402</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-secondary-10">Home  Address: </span>
                                    <span>
                                        31, Adeola Odeku, Lekki
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-secondary-10">Desired Move in Date:</span>
                                    <span>12/03/2021</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-secondary-10">Rent End Date:</span>
                                    <span>
                                        12/03/2021
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-secondary-10">Reason for Leaving</span>
                                    <span>Rent Expired</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}