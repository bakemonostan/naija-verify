import { Button } from "@/components/ui/button"
import { Shell } from "./Shell"

type Props = {}
export default function WhyNAJV({ }: Props) {
    return (
        <div className="pb-10 text-white bg-primary">
            <Shell >
                <div className='max-w-[21rem] mx-auto space-y-4'>
                    <div className='pt-5 pb-4 space-y-5 text-center'>
                        <h2 className='font-semibold text-[#66E5FF] text-sm'>WHY NAIJAVERIFY?</h2>
                        <h3 className='text-2xl'>
                            Our rental property management application was built for <span className='font-semibold text-[#66E5FF]'>
                                landlords, by landlords.
                            </span>
                        </h3>
                    </div>
                    <div className="px-2 pb-5 space-y-3 text-sm text-center text-white/50">
                        <h3 >
                            All of the tools you will find in NaijaVerify were built to be quick, efficient, and affordable (if not free). We know this probably is not your only gig, and you need quick access to business, financial, and tenant information without opening multiple tabs or windows.

                        </h3>

                        <h3>
                            We consistently garner customer feedback to ensure we are always building the next big thing to develop the best software for our landlords — like our mobile app.
                        </h3>
                    </div>
                    <div className="mx-auto w-52">
                        <Button className="font-semibold bg-white text-primary">Create a free account</Button>
                    </div>
                </div>
            </Shell>
        </div>
    )
}