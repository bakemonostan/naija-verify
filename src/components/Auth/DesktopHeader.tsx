import LogoIcon from "../Icons/LogoIcon";

type Props = {
    title: string;
    body: string;
}
export default function DesktopHeader({ body, title }: Props) {
    return (
        <>
            <div className="hidden pt-5 pb-10 lg:block">
                <LogoIcon />
            </div>
            <div className="pb-2 space-y-2">
                <h2 className="font-semibold lg:text-2xl">{title}</h2>
                <p className="text-sm text-secondary-10">{body}</p>
            </div>
        </>
    )
}