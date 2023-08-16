/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import { Shell } from "./Shell"

type Props = {}
export default function Screening({ }: Props) {
    return (
        <section className='py-5'>
            <Shell>
                <div className='max-w-[21rem] mx-auto space-y-4'>
                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-secondary-10">ONLINE APPLICATIONS & TENANT <br />SCREENING</h3>
                        <h4 className="text-2xl">
                            Confidently know who is <br /> <span className="text-primary">
                                really moving in.
                            </span>

                        </h4>
                        <p className="text-sm leading-6 text-secondary-40">
                            All NaijaVerify applications include industry-standard questions, a TransUnion screening report, and the option to add your own customized questions.

                            Gain insight into potential tenants' financial, criminal, and eviction history — for $0 on your end.

                            Screening reports are available separately from rental applications, if needed, and can include Income Insights to verify applicant-reported income against data from TransUnion.
                        </p>
                    </div>
                </div>
            </Shell>
            <div className="pb-16 bg-[#F0FCFF]">
                <Shell >
                    <div className='max-w-[21rem] mx-auto space-y-4'>
                        <div className='pt-5 pb-1 space-y-5 text-center'>
                            <h3 className='text-2xl'>
                                Join the <span className="text-primary">40,000+</span> independent landlords who rely on NaijaVerify to create welcoming rental experiences.
                            </h3>
                        </div>
                        <div className="px-2 pb-5 space-y-3 text-sm text-center text-secondary-40">
                            <h3 >
                                There's only one property management solution to help you get the job done.
                            </h3>
                            <h3 >
                                Sign up today to access our free landlord software. Recommended by landlords with both small and large portfolios.
                            </h3>
                        </div>
                        <div className="mx-auto w-52">
                            <Button className="font-semibold text-white bg-primary">Create a free account</Button>
                        </div>
                    </div>
                </Shell>
            </div>
        </section>
    )
}