import AddForm from "@/components/Dash/property/AddForm"


export default function add() {

    return (
        <div className="flex flex-col justify-center justify-items-center w-12/12 mx-auto">
            <div className='py-6 px-4 self-center'>
                <h2 className='text-[26px] font-semibold '>Add your rental property</h2>
                <p className='text-gray-400'>You can change this information anytime</p>
            </div>
            <div className='flex flex-col justify-center self-center w-full px-4'>
                <div>
                    <div className="py-6">
                        <AddForm />
                    </div>
                </div>

            </div>
        </div>
    )
}