
import { Control, Controller, useFormContext } from "react-hook-form";

interface Options {
    value: string;
    label: string;
}

interface RadioBtnProps {
    options: Options[];
    description: string;
    title: string;
    selectedValue: string;
    control?: Control;
    onChange: (value: string) => void;
}

export default function InputRadio({ options, selectedValue, control, onChange, title, description }: RadioBtnProps) {
    return (
        <label htmlFor={description}>
            <h3 className="mb-3 text-lg font-medium">{title}</h3>
            <div className="space-y-3">
                {options.map((option, index) => (
                    <div key={index} className="flex items-center gap-2">

                        <input
                            type="radio"
                            name={description}
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={(e) => onChange(e.target.value)}
                            className="mb-1 cursor-pointer"
                            required
                        />

                        <span className="text-sm text-secondary-10">{option.label}</span>
                    </div>
                ))}
            </div>
        </label>
    );
}

