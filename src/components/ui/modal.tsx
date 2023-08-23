'use client'
import { X } from "lucide-react"
import { Button } from "./button"
import { title } from "process"
import React, { ReactHTMLElement } from "react"

type Props = {
    title: string
    subtitle: string
    children: React.ReactNode
    image?: boolean
}
export default function BaseModal({ children, title, subtitle, image }: Props) {
    return (
        <div className="fixed inset-0 z-50  backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 bg-neutral-950/70">
            <div className="fixed left-[50%] top-[25%] z-50 w-[90%] pb-20 max-w-[22rem] lg:max-w-3xl translate-x-[-50%] translate-y-[-25%] gap-4 border border-neutral-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg">

                <div className="flex flex-col w-full">
                    <X className="w-6 h-6 ml-auto cursor-pointer" />
                    {
                        image && (
                            <div className="w-48 mx-auto mb-4">
                                <img src="/images/screen-tenant.svg" alt="logo" />
                            </div>
                        )
                    }

                    {/* Header */}
                    <div className="flex items-center pb-2 ">
                        <h2 className='flex-1 mx-auto text-lg font-semibold text-center'>
                            {title}
                        </h2>

                    </div>
                </div>
                <div className='pb-4 text-sm text-center lg:text-sm lg:mx-auto lg:w-4/6 text-secondary-10'>
                    <p>
                        {subtitle}
                    </p>
                </div>
                {/* Body */}
                {
                    children
                }
            </div>
        </div>
    )
}