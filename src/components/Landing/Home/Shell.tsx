import React from "react"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    isFlex?: boolean
}



const Shell = React.forwardRef<HTMLDivElement, Props>(
    ({ children, isFlex, ...props }, ref) => {
        const Comp = "div"
        return (
            <Comp
                {...props}
                ref={ref}
                className={` mx-auto max-w-[95rem] relative px-5 xl:px-8 2xl:px-5 py-3.5   ${isFlex ? 'flex items-center justify-between ' : ''}`}>
                {children}
            </Comp>
        )

    }
)

Shell.displayName = "Shell"

export { Shell }

