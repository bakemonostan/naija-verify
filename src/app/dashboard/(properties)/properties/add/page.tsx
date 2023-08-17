import AddForm from "@/components/Dash/property/AddForm"


export default function add() {

    return (
        <div className="w-full mx-auto ">
            <div className='self-center px-5 py-6'>
                <h2 className='text-[26px] font-semibold font-prompt'>Add your rental property</h2>
                <p className='text-gray-400'>You can change this information anytime</p>
            </div>
            <div className='flex flex-col self-center justify-center w-full px-4'>
                <div>
                    <div className="pb-6">
                        <AddForm />
                    </div>
                </div>

            </div>
        </div>
    )
}