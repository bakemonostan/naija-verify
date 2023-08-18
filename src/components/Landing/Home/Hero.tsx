/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
    return (
        <section className='pb-10 pt-14'>
            <section className="2xl:max-w-[95rem] w-full mx-auto" >
                <div className="flex gap-8">
                    <div className='text-center  mx-auto max-w-[25rem] space-y-8 lg:max-w-full lg:w-1/2 lg:text-left lg:pt-16 xl:pt-24'>
                        <div className='items-end w-3/4 mx-auto space-y-6 lg:mx-0 md:w-full '>
                            <h1 className='text-2xl font-bold xl:tracking-wider lg:text-3xl 2lg:text-5xl 2xl:text-6xl'>Rent with Confidence <br className="hidden lg:block" /> By Tenant Screening!</h1>
                            <h2 className='text-sm leading-6 text-secondary lg:text-lg '>
                                Get the best real estate deals first,
                                before they hit the mass <br className="hidden xl:block" /> market! HOT FORECLOSURE DEALS with one simple search
                            </h2>
                        </div>

                        <div className='items-end gap-5 space-y-5 lg:flex lg:w-full lg:space-y-0 lg:mx-0 xl:w-5/6'>
                            <Input
                                placeholder="Enter your email to be notified"
                                type="email"
                                variant="primary"
                                className="text-sm placeholder-black border rounded-md border-secondary-30 lg:w-9/12 text-secondary-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                            />
                            <Button
                                className="text-sm text-white rounded-md lg:w-3/12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                            >
                                Subcribe
                            </Button>
                        </div>
                    </div>

                    <div className="hidden w-1/2 lg:block">
                        <img src='/images/heroImg.svg' alt="hero" className='w-full lg:block' />
                    </div>
                </div>
            </section>
        </section>
    )
}