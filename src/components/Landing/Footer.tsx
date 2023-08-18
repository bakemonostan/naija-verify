import LogoIcon from "../Icons/LogoIcon"
import { Button } from "../ui/button"
import { Shell } from "./Home/Shell"

type Props = {}
export default function Footer({ }: Props) {
    return (
        <section className="py-6 text-white bg-black lg:py-20">
            <Shell>
                <div className='max-w-[21rem] mx-auto space-y-4 lg:flex lg:max-w-full  lg:flex-row-reverse items-start lg:space-y-0'>
                    <div className="space-y-4 lg:w-1/3">
                        <div>
                            <h3 className="hidden pb-3 lg:text-lg lg:block">Subscribe to our Newsletter</h3>
                            <h3 className="text-sm text-secondary-20 lg:text-lg">
                                Amet minim mollit non deserunt non deserunt ullamco est sit aliqua dolor d
                            </h3>
                        </div>
                        <div className="flex justify-center w-full gap-3">
                            <div className="w-2/3 ">
                                <label htmlFor="email">
                                    <span className="hidden">Subscribe to our email</span>
                                    <input type="email"
                                        placeholder="Your email"
                                        className="w-full h-full px-3 py-2 text-sm placeholder-black border border-black rounded-md text-secondary-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                    />
                                </label>
                            </div>

                            <div className="w-1/3 " >
                                <Button className="w-full h-full px-3 py-2 text-sm text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">Subscribe</Button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between pt-4 lg:w-1/3 lg:pt-0 lg:justify-center lg:gap-24 '>
                        <div>
                            <h3 className="pb-5 text-sm text-primary-20 lg:text-lg">
                                Company
                            </h3>
                            <ul className='flex flex-col gap-5 text-sm lg:text-lg'>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="pb-5 text-sm text-primary-20 lg:text-lg">
                                Business
                            </h3>
                            <ul className='flex flex-col gap-5 text-sm lg:text-lg'>
                                <li>Properties</li>
                                <li>List Properties</li>
                                <li>Support</li>
                            </ul>
                        </div>
                    </div>

                    <div className='pt-6 space-y-4 lg:w-1/3 lg:pt-0 lg:pr-28'>
                        <div>
                            <LogoIcon variant="dark" />
                        </div>
                        <div>
                            <p className="text-sm text-secondary-20 lg:text-lg">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            </p>
                        </div>
                    </div>
                </div>
            </Shell>
        </section>
    )
}