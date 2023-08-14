'use client'
import LogoIcon from "@/components/Icons/LogoIcon";
import { FormType, selectMultiStepForm, setForm } from "@/redux/slices/multiStepFormSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {  useState } from "react";



interface Progress {
    label: string;
    description: string;
    formtype: FormType;
};

const progress: Progress[] = [
    {
        label: 'Add your property',
        description: 'Provide basic details about your property',
        formtype: 'add',
    },
    {
        label: 'Property description',
        description: 'Tell renters in details about your property',
        formtype: 'details',

    },
    {
        label: 'Property Photos',
        description: 'Let renters see how  the property looks like',
        formtype: 'photos',
    },
    {
        label: 'Available Utilities',
        description: 'Tell renters in details about your property',
        formtype: 'utilities',
    },
    {
        label: 'Amenities and Facilities',
        description: 'Tell renters in details about your property',
        formtype: 'facilities',
    },
]

export default function ProgressTracker({ }) {

    const dispatch = useAppDispatch();
    const { currentForm } = useAppSelector(selectMultiStepForm);
    const [checkboxValues, setCheckboxValues] = useState<string[]>(['add', 'details', "photos",
        "utilities"]);

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        if (checked) {
            setCheckboxValues((prevValues) => [...prevValues, value]);
        } else {
            setCheckboxValues((prevValues) =>
                prevValues.filter((item) => item !== value)
            );
        }
        dispatch(setForm('details'))

    };

    // console.log(checkboxValues)




    return (
        <div className="flex flex-col items-center h-full px-4 py-12 bg-primary-10">
            <div>
                <div className="py-5 pb-20">
                    <LogoIcon />
                </div>
                <div className="flex flex-col self-center space-y-10">
                    {
                        progress.map((item) => {
                            return (
                                <div className="flex text-[#7A8086]" key={item.label}>
                                    <input type="checkbox" id={item.label} className="self-start mr-2 rounded-full "
                                        // checked={currentForm === item.formtype}
                                        checked={checkboxValues.includes(item.formtype)}
                                        // set checked state to true if current form is equal to the formtype of the current item
                                        onChange={handleChecked}
                                        disabled={!checkboxValues.includes(item.formtype)}
                                    />
                                    <div className="grid gap-1.5 leading-none">
                                        <label
                                            htmlFor={item.label}
                                            className={`text-base font-semibold self-center my-auto leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 `}
                                        >
                                            {item.label}
                                        </label>

                                        <p className="text-sm font-medium">{item.description}</p>
                                    </div>

                                </div>
                            )

                        })

                    }

                </div>
            </div>
        </div>
    )
}