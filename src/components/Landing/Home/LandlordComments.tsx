import HouseIcon from "@/components/Icons/HouseIcon"
import { Shell } from "./Shell"
import SolidUserIcon from "@/components/Icons/SolidUserIcon";
import KeyIconTwo from "@/components/Icons/KeyIconTwo";

type Props = {}
export default function LandlordComments({ }: Props) {
    return (
        <section className='py-5 text-white bg-primary lg:py-20'>
            <Shell>
                <div className="relative">
                    <div className="text-center">
                        <h3 className="lg:text-2xl lg:font-semibold">What our landlords are saying</h3>
                    </div>
                    <div className="hidden py-10 lg:block">
                        {/* icons */}
                        <div className="grid grid-cols-6">
                            <div className="flex flex-col items-center  gap-1.5">
                                <div className="bg-[#66E5FF] rounded-full flex p-1.5 w-12 h-12 items-center">
                                    <SolidUserIcon width="50" />
                                </div>
                                <div>
                                    <h2 className="px-12 text-center ">
                                        Easy-to-Use
                                        Platform
                                    </h2>
                                </div>
                            </div>
                            <div className="flex flex-col items-center  gap-1.5">
                                <div className="bg-[#66E5FF] rounded-full flex items-center p-1.5 w-12 h-12">
                                    <HouseIcon width="50" />
                                </div>
                                <div>
                                    <h2 className="px-12 text-center ">
                                        Helpful Online Filing System
                                    </h2>
                                </div>
                            </div>

                            <div className="flex flex-col items-center  gap-1.5">
                                <div className="bg-[#66E5FF] rounded-full flex items-center p-3 w-12 h-12">
                                    <KeyIconTwo width="50" />
                                </div>
                                <div>
                                    <h2 className="px-12 text-center ">
                                        Efficient Communication
                                    </h2>
                                </div>
                            </div>

                            <div className="flex flex-col items-center  gap-1.5">
                                <div className="bg-[#66E5FF] rounded-full flex items-center p-3 w-12 h-12">
                                    <KeyIconTwo width="50" />
                                </div>
                                <div>
                                    <h2 className="px-12 text-center ">
                                        Cost-Effective& Business Focused
                                    </h2>
                                </div>
                            </div>      <div className="flex flex-col items-center  gap-1.5">
                                <div className="bg-[#66E5FF] rounded-full flex items-center p-3 w-12 h-12">
                                    <KeyIconTwo width="50" />
                                </div>
                                <div>
                                    <h2 className="px-12 text-center ">
                                        Qualified
                                        Tenants
                                    </h2>
                                </div>
                            </div>      <div className="flex flex-col items-center  gap-1.5">
                                <div className="bg-[#66E5FF] rounded-full flex items-center p-3 w-12 h-12">
                                    <KeyIconTwo width="50" />
                                </div>
                                <div>
                                    <h2 className="px-12 text-center ">
                                        Effortless Payment Collection
                                    </h2>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="relative flex w-full gap-5 px-6 py-3 ml-3 overflow-x-scroll left-3 hidescroll">
                        <div className="text-xs p-4 py-8  bg-white rounded-lg
                         text-secondary-40  w-full min-w-[23rem] lg:p-10">
                            <h4 className="pb-6 lg:text-[.9rem] lg:leading-6">
                                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia”
                            </h4>
                            <p className="text-[1rem] pb-1.5 text-primary font-semibold">Adam James</p>
                            <h6 className="text-[.6rem]">C.E.O Gentry Farms</h6>
                        </div>

                        <div className="text-xs p-4 py-8  bg-white rounded-lg
                         text-secondary-40  w-full min-w-[23rem] lg:p-10">
                            <h4 className="pb-6 lg:text-[.9rem] lg:leading-6">
                                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia”
                            </h4>
                            <p className="text-[1rem] pb-1.5 text-primary font-semibold">Adam James</p>
                            <h6 className="text-[.6rem]">C.E.O Gentry Farms</h6>
                        </div>
                        <div className="text-xs p-4 py-8  bg-white rounded-lg
                         text-secondary-40  w-full min-w-[23rem] lg:p-10">
                            <h4 className="pb-6 lg:text-[.9rem] lg:leading-6">
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