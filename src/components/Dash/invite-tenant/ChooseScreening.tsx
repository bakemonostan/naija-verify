import { Button } from "@/components/ui/button"
import { useAppDispatch } from "@/redux/store"
import { InvitationType, chooseInvitationType } from "@/redux/slices/inviteTenantSlice"

export default function ChooseScreening() {

    const dispatch = useAppDispatch();

    const setInvitationType = (type: InvitationType) => {
        dispatch(chooseInvitationType(
            {
                invitationType: type
            }
        ))
    }


    return (
        <div>
            <div className="px-10 mx-auto w-[90%] lg:pt-10">
                <div>
                    {/* title */}
                    <div className="pb-5 text-xl text-center lg:pb-10 ">
                        <h1>
                            How do you want to screen the tenant?
                        </h1>
                    </div>
                    <div >
                        {/* Body */}
                        <div className="flex flex-col grid-cols-2 gap-3 space-y-5 md:gap-16 sm:space-y-0 sm:flex-row sm:grid">
                            <div className="rounded-md bg-green-50">
                                <div className="flex justify-between gap-2 px-2 py-5 text-left sm:items-center sm:text-center sm:flex-col-reverse">
                                    <div className="w-2/3 ">
                                        <h3 className="font-bold text-secondary">Rental Application & Screening Report</h3>
                                        <p className="text-xs text-secondary-10 lg:text-sm">Get the full picture with everything you need to decide if they are a good fit.</p>
                                    </div>
                                    <div className="w-1/3 sm:w-25 sm:h-25">
                                        <img src="/images/rental.svg" alt="" className="relative sm:left-2" />
                                    </div>
                                </div>
                                <div className="mx-auto sm:w-7/12 sm:pb-5">
                                    <Button
                                        onClick={() => setInvitationType('rental')}
                                    >
                                        Invite to apply
                                    </Button>
                                </div>
                            </div>
                            <div className="rounded-md bg-green-50">
                                <div className="flex justify-between gap-2 px-2 py-5 text-left sm:items-center sm:text-center sm:flex-col-reverse">
                                    <div className="w-2/3 ">
                                        <h3 className="font-bold text-secondary">Screening Report Only</h3>
                                        <p className="text-xs text-secondary-10 lg:text-sm">Perfect when the renter already filled out an application elsewhere..</p>
                                    </div>
                                    <div className="w-1/3 sm:w-25 sm:h-25">
                                        <img src="/images/screening.svg" alt="" className="relative sm:left-2" />
                                    </div>
                                </div>
                                <div className="mx-auto sm:w-7/12 sm:pb-5">
                                    <Button>
                                        Request Report
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}