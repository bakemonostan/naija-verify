import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import LogoIcon from "../Icons/LogoIcon"
import Link from "next/link"

type Props = {}

const links = [
    {
        name: "Home",
        href: "/"
    },

    {
        name: "Features",
        href: "/features"
    },

    {
        name: "Services",
        href: "/services"
    },

    {
        name: "Listed",
        href: "/listed"
    },

    {
        name: "Contact",
        href: "/contact"
    },
]
export default function Navbar({ }: Props) {
    return (
        <nav className=" px-5 xl:px-8 py-3.5 shadow-md w-full lg:shadow-none">
            <div className="flex items-center justify-between mx-auto max-w-[95rem]">
                <div>
                    <Link href="/">
                        <LogoIcon />
                    </Link>
                </div>
                <div className="flex items-center gap-3 lg:hidden">
                    <Button className="px-2 py-1 " variant="outline" title="Login" type="button">Login</Button>
                    <Menu size={40} className="cursor-pointer text-secondary" />
                </div>
                <div className="hidden lg:block">
                    <ul className="flex gap-14">
                        {links.map((link) => (
                            <Link href={link.href} key={link.name}>
                                <li className="cursor-pointer text-secondary-40 hover:text-secondary">{link.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>

                <div className="hidden gap-4 lg:flex">
                    <Link href='/auth/login' className="block">
                        <Button className="py-2.5 w-28" variant="outline" title="Login">Login</Button>
                    </Link>
                    <Link href='/auth/register' className="block">
                        <Button className="py-2.5  w-28" >Register</Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}