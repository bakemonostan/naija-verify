'use client'
import { useAppSelector } from "@/redux/store";
import ScreeningForm from "./ScreeningForm";
import InvitationForm from "./InvitationForm";
import ChooseScreening from "./ChooseScreening";
import Report from "./Report";

export default function UseInviteTenantClient() {
    const invitationType = useAppSelector((state) => state.inviteTenant.value.invitationType);



    if (invitationType === 'screen') {
        return (
            <ScreeningForm />
        )
    }
    if (invitationType === 'rental') {
        return (
            <InvitationForm />

        )
    }
    if (invitationType === 'report') {
        return (
            <Report />
        )
    }

    return (
        <ChooseScreening />

    )

}