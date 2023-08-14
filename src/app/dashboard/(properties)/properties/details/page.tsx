import AddDetails from "@/components/Dash/property/AddDetails"
export default function details() {

    return (
        <div className="flex flex-col justify-center justify-items-center w-12/12 mx-auto">
            <div className='flex lg:flex-row justify-between py-6 px-4'>
                <div>
                    <h2 className='text-[26px] font-semibold font-prompt '>Property Details</h2>
                    <p className='text-gray-400'>You can change this information anytime</p>
                </div>
                <div>
                    <button className='hidden lg:block w-full px-24 py-3 font-bold border text-primary border-primary font-rubik'>
                        Save and Exit
                    </button>
                </div>
            </div>
            <AddDetails />
        </div>
    )
}