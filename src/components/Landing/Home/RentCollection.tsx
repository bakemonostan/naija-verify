import Icons from "./Icons"
import { Shell } from "./Shell"

type Props = {}
export default function RentCollection({ }: Props) {
    return (
        <section className='py-5 lg:py-10 '>
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
                        <p className="text-sm leading-6 text-secondary-40 lg:text-lg">
                            You will get easy tracking, payment history, automatic reminders and late fees, receipts, and automatic payments — free with our landlord software.
                            <br />
                            <span className="text-sm font-semibold cursor-pointer text-primary">Learn more {`>>>`}</span>
                        </p>
                    </div>
                    <div className="pt-4 lg:w-1/2 lg:pt-0 ">
                        <div className="">
                            <img src="/images/chart.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className='max-w-[21rem] mx-auto space-y-4 lg:max-w-full lg:space-y-0'>
                    <Icons />
                </div>
            </Shell>
        </section>
    )
}