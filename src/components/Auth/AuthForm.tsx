'use client'


import SelectUserType from "./SelectUserType";


// Import Redux-related functions
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { selectUser } from "@/redux/slices/authSlice";
import { Button } from "../ui/button";
import HouseIcon from "../Icons/HouseIcon";
import KeyIcon from "../Icons/keyIcon";

export default function AuthhtmlForm() {
    const userType = useAppSelector((state) => state.auth.value.selectedUser);
    const dispatch = useAppDispatch();

    // Function to handle radio button change
    const handleRadioChange = (selectedOption: "landlord" | "renter") => {
        dispatch(selectUser({
            selectedUser: selectedOption,
        }));
    };

    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <h2 className="font-semibold">Welcome to NaijaVerify</h2>
                <p className="text-sm text-secondary-10">
                    Kindly select your profile type below to proceed
                </p>
            </div>

            <div className="space-y-6">
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
                        disabled={!userType}
                        onClick={() => console.log("Clicked")}
                    >
                        Proceed
                    </Button>
                </div>
            </div>
        </div>
    )
}

