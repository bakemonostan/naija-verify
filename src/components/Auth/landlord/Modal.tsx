
'use client'

import LogoIcon from "@/components/Icons/LogoIcon";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Props = {
    children?: React.ReactNode
    variant: 'verify' | 'created'
    title: string
    description: string
    onClick: () => void
}

export default function Modal({ children, title, variant, description, onClick }: Props) {
    const [type, setType] = useState<'verify' | 'created'>()

    return (
        <div className="fixed bg-white border w-full z-10 h-full left-0 top-0 p-8">
            <LogoIcon />
            <div className=" h-full flex flex-col pt-20">
                <div className="mx-auto w-full lg:w-1/4">

                    {variant === "verify" ?
                        <img className="" src="/images/emailIcon.svg" alt="" /> :
                        <img className="" src="/images/accountCreated.svg" alt="" />
                    }
                </div>
                <div className="text-center mx-auto max-w-sm px-2">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <span className="text-secondary-10">
                        {description}
                    </span>
                </div>
                <div className="w-[26rem] mx-auto pt-5">
                    {
                        variant === 'created' ? <Button onClick={onClick}>
                            Proceed to login
                        </Button> : ''
                    }
                </div>
            </div>
        </div>
    );
};