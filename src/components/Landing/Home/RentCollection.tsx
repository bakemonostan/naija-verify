/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import Icons from "./Icons"
import { Shell } from "./Shell"
import { Check } from "lucide-react"

type Props = {}
export default function RentCollection({ }: Props) {
    return (
        <section className='py-5 lg:py-10 lg:pb-16 lg:pt-24 '>
            <Shell>
                <div className='max-w-[21rem] mx-auto space-y-4 lg:space-y-0 lg:max-w-full lg:flex'>
                    <div className="space-y-2 lg:w-1/2 lg:pt-6 lg:space-y-7 lg:pr-28">
                        <h3 className="text-sm font-semibold lg:text-lg text-secondary-10">ONLINE RENT COLLECTION</h3>
                        <h4 className="text-2xl lg:text-4xl">
                            Make rent collection <br /> <span className="text-primary">
                                hassle-free, professional, <br className="hidden lg:block" /> and effortless.
                            </span>
                        </h4>
                        <p className="text-sm leading-6 text-secondary-40 lg:text-lg">
                            Automate your online rent payments. Unlike Zelle, Venmo, or physical checks, our secure tool was made exclusively to meet the needs of real estate investors.
                            It is easy to connect your bank account, and intuitive for you and your tenants to use.
                        </p>
                        <p className="pb-6 text-sm leading-6 text-secondary-40 lg:text-lg">
                            You will get easy tracking, payment history, automatic reminders and late fees, receipts, and automatic payments — free with our landlord software.
                            <br />
                        </p>
                        <span className="text-lg font-semibold cursor-pointer text-primary">Learn more {`>>>`}</span>
                    </div>
                    <div className="pt-4 pb-6 lg:w-1/2 lg:pt-0 lg:pb-24 ">
                        <div className="">
                            <img src="/images/chart.svg" alt="" />
                        </div>
                    </div>
                </div>
                {/* Rent with confidence */}
            </Shell>
            <div className="pb-16 bg-[#F0FCFF] lg:py-20">
                <Shell >
                    <div className='max-w-[21rem] lg:max-w-[56rem] mx-auto space-y-4'>
                        <div className='pt-5 pb-1 space-y-5 text-center'>
                            <h3 className='px-4 text-2xl lg:text-4xl lg:tracking-wide lg:px-14'>
                                Rent with {''}
                                <span className='font-semibold text-primary'>
                                    Confidence By Tenant{' '}
                                </span>
                                Screening!
                            </h3>
                        </div>
                        <div className="pb-5 space-y-3 text-sm text-center text-secondary-40 lg:text-[1rem] lg:leading-7">
                            <p>
                                Get an easy-to-read criminal history, credit report, and eviction history report with tenant screening from Dependable Concepts in less than five minutes so property owners can be confident they are renting to the right person. Improve your property management workflow with the best tenant screening service in the industry.<br className="hidden py-3 lg:block" />
                                GET THE SEAMLESS ONLINE TENANT SCREENING THAT WORKS!
                            </p>
                        </div>

                    </div>

                </Shell>
            </div>
            <div className='max-w-[21rem] mx-auto space-y-4 lg:max-w-full lg:space-y-0'>
                <Shell>
                    <Icons />
                    <div className='max-w-[21rem] mx-auto space-y-4 lg:space-y-0 lg:max-w-full lg:flex'>
                        <div className="space-y-2 lg:w-1/2 lg:pt-6 lg:space-y-7 lg:pr-28">
                            <h3 className="text-sm font-semibold lg:text-xl text-secondary-10">RENT AGREEMENT</h3>
                            <h4 className="text-2xl lg:text-4xl lg:leading-[2.5rem] lg:w-9/12">
                                Quickly customize your state-specific agreement.
                                <br /> <span className="text-primary">No law degree required
                                </span>
                            </h4>
                            <p className="text-sm leading-6 lg:leading-10 text-secondary-40 lg:text-xl">
                                Guiding you step by step, our lease agreement tool ensures compliance with your state's laws. It only takes 15 minutes (or less) to customize your lease.

                            </p>

                            <ul className="pb-5 space-y-6 text-lg">
                                <li className="flex items-center gap-3 ">
                                    <span className="flex items-center justify-center w-5 h-5 p-1 bg-green-500 rounded-full">
                                        <Check className="text-white" />
                                    </span>
                                    <span> Preview for accuracy before you pay</span>
                                </li>
                                <li className="flex items-center gap-3 ">
                                    <span className="flex items-center justify-center w-5 h-5 p-1 bg-green-500 rounded-full">
                                        <Check className="text-white" />
                                    </span>
                                    <span> Easily send to your tenants for e-signature</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-5 h-5 p-1 bg-green-500 rounded-full">
                                        <Check className="text-white" />
                                    </span>
                                    <span> Preview for accuracy before you pay</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-5 h-5 p-1 bg-green-500 rounded-full">
                                        <Check className="text-white" />
                                    </span>
                                    <span> Preview for accuracy before you pay</span>
                                </li>
                            </ul>
                            <span className="text-sm font-semibold cursor-pointer lg:text-xl text-primary">Learn more {`>>>`}</span>
                        </div>
                        <div className="pt-4 pb-6 lg:w-1/2 lg:pt-0 lg:pb-24 ">
                            <div className="">
                                <img src="/images/formimage.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </Shell>
            </div>
        </section>
    )
}