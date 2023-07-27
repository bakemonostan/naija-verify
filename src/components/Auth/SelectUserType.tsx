import { SelectUserProps } from "@/types"
import { useAppSelector, useAppDispatch } from "@/redux/store"
import { selectUser } from '@/redux/slices/authSlice'

export default function SelectUserType({
    id,
    body,
    title,
    icon,
    selectedOption,
    onChange,
}: SelectUserProps) {

    return (
        <div className="flex items-center justify-center px-2 space-x-2 border border-gray-500 rounded cursor-pointer lg:py-3.5 lg:px-5 ">
            <label
                className="relative flex items-center py-2 rounded-full"
                htmlFor={id}
                data-ripple-dark="true"
            >
                <input
                    id={id}
                    name="type"
                    type="radio"
                    value={id}
                    checked={selectedOption === id}
                    onChange={() => onChange(selectedOption)}
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-primary text-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary"
                />
                <div className="absolute transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-primary peer-checked:opacity-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                    >
                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                </div>
            </label>
            <div className="rounded-full bg-primary-10">{icon}</div>
            <label
                htmlFor={id}
                className="w-full py-2 ml-2 text-sm font-medium cursor-pointer "
            >
                <h3 className="lg:text-base">{title}</h3>
                <span className="text-xs font-normal text-secondary-10 lg:text-sm">
                    {body}
                </span>
            </label>
        </div>
    )
}