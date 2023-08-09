'use client'
import { Checkbox } from "@/components/ui/checkbox"

interface TrackerProps{

        checked:any;
        current?:Boolean
}

interface ProgressType{
    progress:TrackerProps[]
}
export default function ProgressTracker({progress}:ProgressType) {
    

    return (
        <div className="flex flex-col py-12 px-4 w-4/12 min-h-screen bg-primary-10">
            <div className="flex flex-col space-y-10 self-center">
                <div className="flex text-[#7A8086]">
                    <Checkbox id="terms2" checked={progress[0].checked} className="rounded-full self-start checked:bg-primary mr-2" />
                    <div className="grid gap-1.5 leading-none">
                        <label
                            htmlFor="terms2"
                            className={`text-base font-semibold self-center my-auto leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${progress[0].checked ? 'text-primary':''}`}
                        >
                            Add your property
                        </label>

                        <p className="text-sm font-medium">Add basic details about your property</p>
                    </div>

                </div>

                <div className="flex text-[#7A8086]">
                    <Checkbox id="terms2" checked={progress[1].checked} className="rounded-full self-start checked:bg-primary mr-2" />
                    <div className="grid gap-1.5 leading-none">
                        <label
                            htmlFor="terms2"
                            className={`text-base font-semibold self-center my-auto leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${progress[1].checked ? 'text-primary':''}`}
                        >
                            Property description
                        </label>

                        <p className="text-sm font-medium">Tell renters in details about your property</p>
                    </div>

                </div>
                <div className="flex text-[#7A8086]">
                    <Checkbox id="terms2" checked={progress[2].checked} className="rounded-full self-start checked:bg-primary mr-2" />
                    <div className="grid gap-1.5 leading-none">
                        <label
                            htmlFor="terms2"
                            className={`text-base font-semibold self-center my-auto leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${progress[2].checked ? 'text-primary':''}`}
                        >
                            Property Photos
                        </label>

                        <p className="text-sm font-medium">Tell renters in details about your property</p>
                    </div>

                </div>
                <div className="flex text-[#7A8086]">
                    <Checkbox id="terms2" checked={progress[3].checked} className="rounded-full self-start checked:bg-primary mr-2" />
                    <div className="grid gap-1.5 leading-none">
                        <label
                            htmlFor="terms2"
                            className={`text-base font-semibold self-center my-auto leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${progress[3].checked ? 'text-primary':''}`}
                        >
                            Available Utilities
                        </label>

                        <p className="text-sm font-medium">Tell renters in details about your property</p>
                    </div>

                </div>
                <div className="flex text-[#7A8086]">
                    <Checkbox id="terms2"  checked={progress[4].checked} className="rounded-full self-start checked:bg-primary mr-2" />
                    <div className="grid gap-1.5 leading-none">
                        <label
                            htmlFor="terms2"
                            className={`text-base font-semibold self-center my-auto leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${progress[4].checked ? 'text-primary':''}`}
                        >
                            Amenities and Facilities
                        </label>

                        <p className="text-sm font-medium">Tell renters in details about your property</p>
                    </div>

                </div>
            </div>
        </div>
    )
}