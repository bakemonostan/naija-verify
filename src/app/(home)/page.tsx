import Footer from "@/components/Landing/Footer"
import Hero from "@/components/Landing/Home/Hero"
import RentCollection from "@/components/Landing/Home/RentCollection"
import RentalManagment from "@/components/Landing/Home/RentalManagment"
import Screening from "@/components/Landing/Home/Screening"
import WhyNAJV from "@/components/Landing/Home/WhyNAJV"

type Props = {}
export default function page({ }: Props) {
  return (
    <main>
      <Hero />
      <WhyNAJV />
      <RentCollection />
      <RentalManagment />
      <Screening />
      <Footer />
    </main>
  )
}