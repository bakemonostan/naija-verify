import LogoIcon from "@/components/Icons/LogoIcon"
import Image from "next/image"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <main className='h-full border lg:flex'>
        <section className='lg:pt-10 bg-primary-10 lg:w-5/12  '>
            <div className="flex flex-col max-w-sm mx-auto space-y-8 p-7 lg:px-12 lg:max-w-3xl ">
                <div className="lg:hidden">
                    <LogoIcon />
                </div>
                <div className="space-y-5 ">
                    {/* title */}
                    <h1 className="pr-5 text-xl font-bold lg:text-2xl lg:max-w-sm lg:tracking-wider text-primary">Unlock Peace of Mind with Verified Renters</h1>
                    {/* body */}
                    <p className='text-sm lg:text-base text-secondary-10 '>
                        Our robust verification process ensures that potential tenants undergo thorough background checks, credit assessments, employment verifications, and rental history reviews.
                    </p>
                    {/* icons */}
                    <div className="flex flex-wrap items-center gap-2 flex-1">
                        <span className="text-sm font-semibold">Join over 40,000+ landlords</span>
                        <div>
                            <Image src='/images/Avatars.svg' width={100} height={100} alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto flex-1">
                    <img className="hidden lg:w-[38rem] mx-auto lg:block" src="/images/layoutImage.svg" alt="" />
                </div>
            </div>
        </section>
        <section className="max-w-sm p-8 mx-auto lg:px-0 lg:max-w-full lg:w-7/12 lg:ml-36">
            {children}
        </section>
    </main>
}



