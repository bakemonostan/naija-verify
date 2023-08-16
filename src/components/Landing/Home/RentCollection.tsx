import Icons from "./Icons"
import { Shell } from "./Shell"

type Props = {}
export default function RentCollection({ }: Props) {
    return (
        <section className='py-5'>
            <Shell>
                <div className='max-w-[21rem] mx-auto space-y-4'>
                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-secondary-10">ONLINE RENT COLLECTION</h3>
                        <h4 className="text-2xl">
                            Make rent collection <br /> <span className="text-primary">
                                hassle-free, professional, and effortless.
                            </span>
                        </h4>
                        <p className="text-sm leading-6 text-secondary-40">
                            Automate your online rent payments. Unlike Zelle, Venmo, or physical checks, our secure tool was made exclusively to meet the needs of real estate investors.
                            It is easy to connect your bank account, and intuitive for you and your tenants to use.
                            You will get easy tracking, payment history, automatic reminders and late fees, receipts, and automatic payments — free with our landlord software.
                        </p>
                    </div>
                    <Icons />
                </div>
            </Shell>
        </section>
    )
}