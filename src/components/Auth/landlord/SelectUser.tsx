'use client'
import SelectUserType from "./SelectUserType";

// Import Redux-related functions
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { chooseFormType, selectUser } from "@/redux/slices/authSlice";
import { Button } from "../../ui/button";
import HouseIcon from "../../Icons/HouseIcon";
import KeyIcon from "../../Icons/keyIcon";
import LogoIcon from "../../Icons/LogoIcon";
import { useRouter } from 'next/navigation'

export default function SelectUser() {
    const userType = useAppSelector((state) => state.auth.value.selectedUser);
    const dispatch = useAppDispatch();
    const router = useRouter()
    // Function to handle radio button change
    const handleRadioChange = (selectedOption: "landlord" | "renter") => {
        dispatch(selectUser({
            selectedUser: selectedOption,
        }));
    };

    const handleFormChange = () => {
        router.push(`/auth/register/${userType}`)
        dispatch(chooseFormType({
            formType: 'landlord details',
        }));
    }

    return (
        <div className="w-full h-screen mr-2 space-y-6  lg:pt-6 lg:max-w-[28rem]">
            <div className="space-y-4 lg:space-y-1 ">
                <div className="hidden lg:block lg:py-5 lg:pb-14">
                    <LogoIcon />
                </div>
                <h2 className="font-semibold lg:text-xl">Welcome to NaijaVerify</h2>
                <p className="text-sm text-secondary-10">
                    Kindly select your profile type below to proceed
                </p>
            </div>

            <div className="space-y-6 lg:pt-14 lg:py-5">
                <SelectUserType
                    id='landlord'
                    icon={<KeyIcon width="30" height="30" />}
                    title='Register as a Landlord'
                    body='Gain access to our powerful tenant screening tools'
                    selectedOption={userType}
                    onChange={() => handleRadioChange("landlord")}
                />
                <SelectUserType
                    id='renter'
                    icon={<HouseIcon width="30" height="30" />}
                    title='Register as a Renter'
                    body='Discover your perfect home with our platform'
                    selectedOption={userType}
                    onChange={() => handleRadioChange("renter")}
                />

            </div>
            <div className="w-full">
                <div className="w-full">
                    <Button
                        onClick={handleFormChange}
                        disabled={!userType}
                    >
                        Proceed
                    </Button>
                </div>
            </div>
        </div>
    )
}

