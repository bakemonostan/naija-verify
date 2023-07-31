
interface NumberInputProps {
    value: number;
    onValueChange: (newValue: number) => void;
}

export default function InputNumber({ value, onValueChange }: NumberInputProps) {
    const handleValueChange = (newValue: number) => {
        if (newValue < 0) return;
        onValueChange(newValue);
    }

    return (
        <div className="flex items-center gap-2 mr-auto ">
            <label htmlFor="number"></label>
            <button
                type="button"
                className="text-xl bg-transparent border rounded-full border-secondary-10 w-7 text-secondary-10"
                onClick={() => handleValueChange(value - 1)}
            >
                -
            </button>
            <input
                type="number"
                value={value}
                className="w-8 text-center border border-gray-400 rounded-lg appearance-none"
                onChange={(e) => handleValueChange(Number(e.target.value))}
                min={0}
                required
            />
            <button
                type="button"
                className="text-xl bg-transparent border rounded-full border-secondary-10 w-7 text-secondary-10"
                onClick={() => handleValueChange(value + 1)}
            >
                +
            </button>
        </div>
    );
};
