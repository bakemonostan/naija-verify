import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "p-3.5 text-black inline-flex items-center justify-center rounded-sm text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 text-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 disabled:bg-secondary-10",
  {
    variants: {
      variant: {
        default: "bg-primary",
        destructive:
          "bg-red-500 text-neutral-50 hover:bg-red-500/90 ",
        outline:
          "border border-secondary-10 bg-white hover:bg-neutral-100 hover:text-secondary ",
        secondary:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80",
        ghost: "hover:bg-neutral-100 hover:text-neutral-900",
        link: "text-black underline-offset-4 hover:underline",
      },
      size: {
        default: "w-full",
        sm: " rounded-sm px-3",
        lg: " rounded-sm px-5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
