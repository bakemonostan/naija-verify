import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// 

export default function ChooseScreening() {
    return (
        <div>
            <div className="w-[90%] max-w-[22rem] sm:max-w-4xl pb-28">
                <div>
                    {/* title */}
                    <div className="pb-5 sm:text-center ">How do you want to screen the tenant?</div>
                    <div >
                                    {/* Body */}
                        <div className="flex flex-col grid-cols-2 gap-3 space-y-5 md:gap-16 sm:space-y-0 sm:flex-row sm:grid">
                            <div className="rounded-sm bg-green-50">
                                <div className="flex justify-between gap-2 px-2 py-5 text-left sm:items-center sm:text-center sm:flex-col-reverse">
                                    <div className="w-2/3 ">
                                        <h3 className="font-bold text-secondary">Rental Application & Screening Report</h3>
                                        <p className="text-xs text-secondary-10">Get the full picture with everything you need to decide if they are a good fit.</p>
                                    </div>
                                    <div className="w-1/3 sm:w-25 sm:h-25">
                                        <img src="/images/rental.svg" alt="" className="relative sm:left-2" />
                                    </div>
                                </div>
                                <div className="mx-auto sm:w-7/12 sm:pb-5">
                                    <Button>
                                        Invite to apply
                                    </Button>
                                </div>
                            </div>
                            <div className="rounded-sm bg-green-50">
                                <div className="flex justify-between gap-2 px-2 py-5 text-left sm:items-center sm:text-center sm:flex-col-reverse">
                                    <div className="w-2/3 ">
                                        <h3 className="font-bold text-secondary">Screening Report Only</h3>
                                        <p className="text-xs text-secondary-10">Perfect when the renter already filled out an application elsewhere..</p>
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