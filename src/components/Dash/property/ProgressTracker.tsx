'use client'
import LogoIcon from "@/components/Icons/LogoIcon";
import { Checkbox } from "@/components/ui/checkbox"
import { FormType, multiStepForm, selectMultiStepForm, setForm } from "@/redux/slices/multiStepFormSlice";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useAppDispatch, useAppSelector } from "@/redux/store";



interface Progress {
    label: string;
    description: string;
    formtype: FormType;
    checked?: CheckedState;
};

const progress: Progress[] = [
    {
        label: 'Add your property',
        description: 'Provide basic details about your property',
        formtype: 'add',
        checked: false
    },
    {
        label: 'Property description',
        description: 'Tell renters in details about your property',
        formtype: 'details',
        checked: false

    },
    {
        label: 'Property Photos',
        description: 'Let renters see how  the property looks like',
        formtype: 'photos',
        checked: false

    },
    {
        label: 'Available Utilities',
        description: 'Tell renters in details about your property',
        formtype: 'utilities',
        checked: false

    },
    {
        label: 'Amenities and Facilities',
        description: 'Tell renters in details about your property',
        formtype: 'facilities',
        checked: false

    },
]

export default function ProgressTracker({ }) {

    const dispatch = useAppDispatch();
    const { currentForm } = useAppSelector(selectMultiStepForm);
    //       reducers: {
    //     setForm: (state, action: PayloadAction<MultiStepFormState>) => {
    //       state.value.currentForm = action.payload.currentForm;
    //       state.value.checked = action.payload.checked;
    //     },
    //   },
    // });


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
                                    <Checkbox id={item.label} className="self-start mr-2 rounded-full "
                                        checked={item.checked}
                                        // set checked state to true if current form is equal to the formtype of the current item
                                        onChange={() => dispatch(setForm({ currentForm: item.formtype, checked: true }))}
                                    />
                                    <div className="grid gap-1.5 leading-none">
                                        <label
                                            htmlFor={item.label}
                                            className={`text-base font-semibold self-center my-auto leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${item.checked ? 'text-primary' : ''}`}
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