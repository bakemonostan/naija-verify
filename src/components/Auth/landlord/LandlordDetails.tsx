'use client'

import { landlordTypes, ExperienceLevel } from "@/helpers"
import InputRadio from "../InputRadio"
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import LogoIcon from "@/components/Icons/LogoIcon";
import InputNumber from "@/components/ui/inputNumber";
import { Button } from "@/components/ui/button";

interface LandlordDetailsState {
    landlordType: string;
    experienceLevel: string;
}

export default function LandlordDetails() {
    const [formData, setFormData] = useState<LandlordDetailsState>({
        landlordType: '',
        experienceLevel: '',
    });

    const [count, setCount] = useState<number>(0);

    const handleValueChange = (newValue: number) => {
        setCount(newValue);
    };


    const selectValue = [
        {
            value: 'Google',
            key: 'google'
        },
        {
            value: 'Facebook',
            key: 'facebook'
        },
        {
            value: 'Instagram',
            key: 'instagram'
        },
        {
            value: 'Twitter',
            key: 'twitter'
        },
        {
            value: 'LinkedIn',
            key: 'linkedin'
        },

    ]

    const handleInputChange = (name: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log("Form Data:", formData);
    };

    return (
        <section className="space-y-5 lg:w-3/5 lg:h-screen">
            <div className="pt-5 pb-10">
                <LogoIcon />
            </div>
            <div className="pb-2 space-y-2">
                <h2 className="font-semibold lg:text-2xl">Register as Landlord</h2>
                <p className="text-sm text-secondary-10">Let us personalize your experience</p>
            </div>
            <form action="#" className="space-y-5">
                <div>
                    <InputRadio
                        options={landlordTypes}
                        title="Which best describes you? "
                        description="landlord type"
                        selectedValue={formData.landlordType}
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
                    <Select>
                        <h4 className="pb-2 font-medium">How did you hear about NaijaVerify? <span className="text-xs text-secondary">(Optional)</span></h4>
                        <SelectTrigger className="w-full ">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {
                                    selectValue.map((value) => (
                                        <SelectItem key={value.key} value={value.value}>
                                            <SelectLabel>{value.value}</SelectLabel>
                                        </SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <Button
                    className="rounded-md"
                >
                    Proceed
                </Button>
            </form>
        </section>
    )
}