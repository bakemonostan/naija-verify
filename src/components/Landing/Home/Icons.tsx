import EducateRentersIcon from "@/components/Icons/EducateRentersIcon"
import IncreaseRevenueIcon from "@/components/Icons/IncreaseRevenueIcon"
import VerifyRenterIcon from "@/components/Icons/VerifyRenterIcon"

type Props = {}
export default function Icons({ }: Props) {
    return (
        <div className="w-full py-8 pt-14 lg:pt-28 lg:pb-20">
            <div className="flex flex-col items-center justify-center gap-4 lg:gap-12 lg:flex-row">
                <div className="flex flex-col items-center justify-center w-full gap-6 mx-auto lg:gap-2 lg:pt-3">
                    <div>
                        <VerifyRenterIcon />
                    </div>
                    <div className="px-5 text-center">
                        <h3 className="text-lg font-semibold">Verify Renters</h3>
                        <h4 className="text-sm leading-7 text-secondary-40 lg:text-[1rem] lg:px-12">
                            Find and verify your renters before allocating an apartment to them
                        </h4>
                    </div >
                </div>

                <div className="flex flex-col items-center justify-center w-full gap-6 mx-auto ">
                    <div>
                        <IncreaseRevenueIcon />
                    </div>
                    <div className="px-5 text-center">
                        <h3 className="text-lg font-semibold">Increase Revenue</h3>
                        <h4 className="text-sm leading-7 text-secondary-40 lg:text-[1rem] lg:px-12">
                            Double your annual revenue as we do the hard work for you
                        </h4>
                    </div >
                </div>

                <div className="flex flex-col items-center justify-center w-full gap-6 mx-auto ">
                    <div>
                        <EducateRentersIcon />
                    </div>
                    <div className="px-5 text-center">
                        <h3 className="text-lg font-semibold">Educate Renters</h3>
                        <h4 className="text-sm leading-7 text-secondary-40 lg:text-[1rem] lg:px-16">
                            Build a following, engage them with your content ..
                        </h4>
                    </div >
                </div>
            </div >

        </div >
    )
}