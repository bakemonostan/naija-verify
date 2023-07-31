'use client'

import { landlordTypes, ExperienceLevel, selectValues } from "@/helpers"
import InputRadio from "../InputRadio"
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import InputNumber from "@/components/ui/inputNumber";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Forms, chooseFormType } from "@/redux/slices/authSlice";
import DesktopHeader from "../DesktopHeader";

interface LandlordDetailsState {
    landlordType: string;
    experienceLevel: string;
}

export default function LandlordDetails() {
    const dispatch = useAppDispatch();
    const formType = useAppSelector((state) => state.auth.value.formType);
    const [formData, setFormData] = useState<LandlordDetailsState>({
        landlordType: '',
        experienceLevel: '',

    });

    const [count, setCount] = useState<number>(0);

    const handleValueChange = (newValue: number) => {
        setCount(newValue);
    };

    const handleFormChange = (selectedOption: Forms) => {
        dispatch(chooseFormType({
            formType: selectedOption,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        handleFormChange('register')
        e.preventDefault();
    };

    const setFormType = () => {
        handleFormChange('userType')
    }




    const handleInputChange = (name: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <section className="h-full space-y-5 lg:w-3/5">
            <DesktopHeader title="Register as Landlord" body="Let us personalize your experience" onback={setFormType} />
            <form action="#" className="space-y-5" onSubmit={handleSubmit}>
                <div>
                    <InputRadio
                        options={landlordTypes ?? []}
                        title="Which best describes you? "
                        description="landlord type"
                        selectedValue={formData.landlordType ?? ''}
                        onChange={(value) => handleInputChange('landlordType', value)}
                    />
                </div>
                <div>
                    <h4>
                        How many properties do you own/manage?
                    </h4>
                    <InputNumber
                        value={count} onValueChange={handleValueChange}
                    />
                </div>

                <div>
                    <InputRadio
                        options={ExperienceLevel}
                        title="How long have you managed properties?"
                        description="experience level"
                        selectedValue={formData.experienceLevel}
                        onChange={(value) => handleInputChange('experienceLevel', value)}
                    />
                </div>


                <div className=''>
                    <Select required>
                        <h4 className="pb-2 font-medium">How did you hear about NaijaVerify? <span className="text-xs text-secondary">(Optional)</span></h4>
                        <SelectTrigger className="w-full ">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {
                                    selectValues.map((value) => (
                                        <SelectItem key={value.key} value={value.value}
                                            aria-required="true"
                                        >
                                            <SelectLabel>{value.value}</SelectLabel>
                                        </SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <Button
                    className="rounded-md"                >
                    Proceed
                </Button>
            </form>

        </section>
    )
}
