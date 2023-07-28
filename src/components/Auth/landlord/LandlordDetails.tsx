import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LandlordDetails() {
    return (
        <section className="space-y-5">
            <div className="space-y-2">
                <h2 className="font-semibold">Register as Landlord</h2>
                <p className="text-sm text-secondary-10">Let us personalize your experience</p>
            </div>
            <form action="#">
                <label htmlFor="description"></label>
            </form>
        </section>
    )
}