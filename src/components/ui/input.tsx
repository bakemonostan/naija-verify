import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"


const inputVariants = cva(
  "flex w-full font-[400] rounded-sm border border-seconday-10 bg-white px-2 py-3 text-sm ring-offset-white file:border-0 text-secondary-10 mt-2 file:bg-transparent file:text-sm file:font-medium placeholder:text-secondary-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 placeholder:font-[400] focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        checkbok: "",
        radio: "",
        icon: "",
      },
      defaultVariants: {
        variant: "primary",
      },
    },

  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> {
  asChild?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    const Comp = "input"
    return (
      <Comp
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}

      />
    )
  }
)
Input.displayName = "Input"

export { Input }
