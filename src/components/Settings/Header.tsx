import { useState } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { SettingsForms, chooseSettingsFormType } from "@/redux/slices/settingsSlice"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



type Props = {
}

const tabs: SettingsForms[] = ["profile", "security", "notifications"]

export default function Header({ }: Props) {
    const { formType } = useAppSelector((state) => state.settings.value)
    const dispatch = useAppDispatch()

    const setForm = (form: SettingsForms) => {
        dispatch(
            chooseSettingsFormType({
                formType: form
            })
        )
    }


    return (
        <div className="w-full max-w-lg py-6 mx-auto space-y-6 lg:mx-0 lg:max-w-5xl"
        >

            <div className="pb-4 space-y-1">
                <h1 className='text-2xl font-semibold'>Account Settings</h1>
                <p className="text-sm text-secondary-10">You can change this information anytime</p>
            </div>
            <Tabs defaultValue="account" className="flex justify-between w-full max-w-lg pb-2 text-sm lg:gap-16 lg:max-w-5xl lg:justify-normal">
                <TabsList>
                    {
                        tabs.map((tab) => (
                            <Tabs value={tab} key={tab} className={`decoration-2 cursor-pointer capitalize underline-offset-[0.87rem] ${formType === tab ? 'text-primary font-bold underline ' : 'text-secondary'}`} onClick={() => setForm(tab)}>
                                {tab}
                            </Tabs>
                        ))
                    }
                </TabsList>

            </Tabs>
        </div>

    )
}

