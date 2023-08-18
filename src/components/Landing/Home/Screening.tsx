/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import { Shell } from "./Shell"
import LandlordComments from "./LandlordComments"

type Props = {}
export default function Screening({ }: Props) {
    return (
        <section className='py-5 lg:py-15'>
            <Shell>
                <div className='max-w-[21rem] mx-auto space-y-4 lg:flex lg:flex-row-reverse gap-16 lg:max-w-full lg:pb-14'>
                    <div className="space-y-2 lg:w-1/2 lg:space-y-4 lg:mt-16 lg:ml-24">
                        <h3 className="text-sm font-semibold text-secondary-10 lg:text-lg">ONLINE APPLICATIONS & TENANT <br />SCREENING</h3>
                        <h4 className="text-2xl lg:text-4xl">
                            Confidently know who is <br /> <span className="text-primary">
                                really moving in.
                            </span>

                        </h4>
                        <p className="text-sm leading-6 text-secondary-40 lg:text-lg">
                            All NaijaVerify applications include industry-standard questions, a TransUnion screening report, and the option to add your own customized questions.
                        </p>
                        <p className="text-sm leading-6 text-secondary-40 lg:text-lg">
                            Gain insight into potential tenants' financial, criminal, and eviction history — for $0 on your end.
                        </p>
                        <p className="pb-5 text-sm leading-6 text-secondary-40 lg:text-lg">
                            Screening reports are available separately from rental applications, if needed, and can include Income Insights to verify applicant-reported income against data from TransUnion.
                        </p>
                        <span className="text-lg font-semibold cursor-pointer text-primary">Learn more {`>>>`}</span>
                    </div>
                    <div className="py-6 lg:w-1/2 lg:py-16">
                        <div>
                            <img src="/images/graph.svg" alt="" />
                        </div>
                    </div>
                </div>
            </Shell>
            <LandlordComments />
            <div className="pb-16 bg-[#F0FCFF] lg:py-16 ">
                <Shell >
                    <div className='max-w-[21rem] mx-auto lg:max-w-[50rem] space-y-4'>
                        <div className='pt-5 pb-1 space-y-5 text-center'>
                            <h3 className='px-4 text-2xl lg:text-4xl lg:tracking-wide'>
                                Join the <span className="text-primary">40,000+</span> independent landlords who rely on NaijaVerify to create welcoming rental experiences.
                            </h3>
                        </div>
                        <div className="px-2 pb-5 space-y-3 text-sm text-center text-secondary-40 lg:text-[1rem]">
                            <h3 >
                                No tricks or trials to worry about. So what is the harm? Try it today!
                            </h3>

                        </div>
                        <div className="mx-auto w-60">
                            <Button className="text-lg font-semibold text-white bg-primary">Create a free account</Button>
                        </div>
                    </div>
                </Shell>
            </div>
        </section>
    )
}