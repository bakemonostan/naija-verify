import CreateAccount from "@/components/Auth/landlord/CreateAccount";
import LandlordDetails from "@/components/Auth/landlord/LandlordDetails";
import Login from "@/components/Auth/landlord/Login";
import Modal from "@/components/Auth/landlord/Modal";

export default function page() {
    return (
        // <LandlordDetails />
        // <Modal
        //     title="Account Created Successfully!"
        //     variant="created"
        //     description="Your account has been successfully created."
        // />
        // <Modal
        //     title="Verify your mail"
        //     description='We have sent a link to your mail. Please
        //     proceed to verify email'
        //     variant='verify'
        // />
        // <CreateAccount />
        <Login />
    )
}