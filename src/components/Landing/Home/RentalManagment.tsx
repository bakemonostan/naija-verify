import { Button } from "@/components/ui/button"
import { Shell } from "./Shell"

type Props = {}
export default function RentalManagment({ }: Props) {
    return (
        <>
            <div className="pb-10 text-white bg-primary lg:py-16 lg:pb-28">
                <Shell >
                    <div className='max-w-[21rem] mx-auto space-y-4 lg:max-w-[60rem] '>
                        <div className='pt-5 pb-4 space-y-5 text-center lg:space-y-8'>
                            <h2 className='font-semibold text-[#66E5FF] text-sm lg:text-lg lg:tracking-widest'>RENTAL MANAGEMENT TOOLS</h2>
                            <h3 className='px-4 text-xl lg:text-4xl lg:tracking-wide lg:leading-8'>
                                <span className='font-semibold text-[#66E5FF]'>
                                    Efficiently manage renters
                                </span> {''}
                                and organize important documents in one place.
                            </h3>
                        </div>
                        <div className="px-2 pb-5 space-y-3 text-sm text-center text-white/50 lg:space-y-8 lg:text-[1rem] lg:leading-8">
                            <h3 >
                                We take the saying “work smarter, not harder” to heart. If you need it to streamline your rental management business, we have included it in our exclusive landlord software.
                            </h3>
                            <h3>
                                We did not skimp on any of the tiny details for our DIY landlords. And if you need even more tools, upgrade to <span className="underline">our Premium Plan</span>.
                            </h3>
                        </div>
                        <div className="mx-auto w-60">
                            <Button className="text-lg font-semibold capitalize bg-white text-primary">Create a free account</Button>
                        </div>
                    </div>
                </Shell>
            </div>

            <div className="pb-16 bg-[#F0FCFF] lg:py-24">
                <Shell >
                    <div className='max-w-[21rem] lg:max-w-[48rem] mx-auto space-y-4'>
                        <div className='pt-5 pb-1 space-y-5 text-center'>
                            <h3 className='px-4 text-2xl lg:text-4xl lg:tracking-wide'>
                                Ready to {''}
                                <span className='font-semibold text-primary'>
                                    fill your next vacancy
                                </span>
                                with the right tenant?
                            </h3>
                        </div>
                        <div className="px-2 pb-5 space-y-3 text-sm text-center text-secondary-40 lg:text-[1rem]">
                            <h3 >
                                There is only one property management solution to help you get the job done.
                            </h3>
                            <h3 >
                                Sign up today to access our free landlord software. Recommended by landlords with both small and large portfolios.
                            </h3>
                        </div>
                        <div className="pt-8 mx-auto w-60">
                            <Button className="text-lg font-semibold text-white capitalize bg-primary">Create a free account</Button>
                        </div>
                    </div>
                </Shell>
            </div>
        </>
    )
}