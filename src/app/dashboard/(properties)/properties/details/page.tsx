import AddDetails from "@/components/Dash/property/AddDetails"
export default function details() {

    return (
        <div className="flex flex-col justify-center justify-items-center w-12/12 mx-auto">
            <div className='py-6 px-4 self-center lg:self-start'>
                <h2 className='text-[26px] font-semibold font-prompt '>Property Details</h2>
                <p className='text-gray-400'>You can change this information anytime</p>
            </div>
            <AddDetails />
        </div>
    )
}