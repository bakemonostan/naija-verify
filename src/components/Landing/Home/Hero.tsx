import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shell } from "./Shell";

export default function Hero() {
    return (
        <section className='pb-10 pt-14'>
            <Shell>
                <div className='text-center mx-auto max-w-[25rem] space-y-8'>
                    <div className='w-3/4 mx-auto space-y-6'>
                        <h1 className='text-2xl font-bold '>Rent with Confidence By Tenant Screening!</h1>
                        <h2 className='text-sm leading-6 text-secondary'>
                            Get the best real estate deals first,
                            before they hit the mass market! HOT FORECLOSURE DEALS with one simple search
                        </h2>
                    </div>

                    <div className='space-y-5'>
                        <Input
                            placeholder="Enter your email to be notified"
                            type="email"
                            variant="primary"
                        />
                        <Button>
                            Subcribe
                        </Button>
                    </div>
                </div>
            </Shell>
        </section>
    )
}