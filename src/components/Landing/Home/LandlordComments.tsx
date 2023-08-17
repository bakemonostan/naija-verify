import { Shell } from "./Shell"

type Props = {}
export default function LandlordComments({ }: Props) {
    return (
        <section className='py-5 text-white bg-primary'>
            <Shell>
                <div className="relative">
                    <div className="text-center">
                        <h3>What our landlords are saying</h3>
                    </div>
                    <div className="hidden"></div>
                    <div className="relative flex gap-5 px-6 py-3 ml-3 overflow-x-scroll left-3 hidesroll">
                        <div className="text-xs p-4 py-8 cursor-grab bg-white rounded-lg
                         text-secondary-40  max-w-[25.8rem] min-w-[23rem] ">
                            <h4 className="pb-4">
                                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia”
                            </h4>
                            <p className="text-[1rem] pb-1.5 text-primary font-semibold">Adam James</p>
                            <h6 className="text-[.6rem]">C.E.O Gentry Farms</h6>
                        </div>
                        <div className="text-xs p-4 py-8 cursor-grab bg-white rounded-lg
                         text-secondary-40  max-w-[25.8rem] min-w-[23rem] ">
                            <h4 className="pb-4">
                                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia”
                            </h4>
                            <p className="text-[1rem] pb-1.5 text-primary font-semibold">Adam James</p>
                            <h6 className="text-[.6rem]">C.E.O Gentry Farms</h6>
                        </div>
                        <div className="text-xs p-4 py-8 cursor-grab bg-white rounded-lg
                         text-secondary-40  max-w-[25.8rem] min-w-[23rem] ">
                            <h4 className="pb-4">
                                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia”
                            </h4>
                            <p className="text-[1rem] pb-1.5 text-primary font-semibold">Adam James</p>
                            <h6 className="text-[.6rem]">C.E.O Gentry Farms</h6>
                        </div>


                    </div>
                </div>
            </Shell>
        </section>
    )
}