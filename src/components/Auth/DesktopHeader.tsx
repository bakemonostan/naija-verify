'use client '

import { ArrowLeftCircle } from "lucide-react";
import LogoIcon from "../Icons/LogoIcon";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
    title: string;
    body: string;
    onback: () => void;
}
export default function DesktopHeader({ body, title, onback }: Props) {

    return (
        <>
            <ArrowLeftCircle className="cursor-pointer text-primary" onClick={onback} />
            <div className="hidden pt-5 pb-10 lg:block">
                <Link href="/">
                    <LogoIcon />
                </Link>
            </div>
            <div className="pb-2 space-y-2">
                <h2 className="font-semibold lg:text-2xl">{title}</h2>
                <p className="text-sm text-secondary-10">{body}</p>
            </div>
        </>
    )
}