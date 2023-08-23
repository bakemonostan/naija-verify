
import Navbar from '@/components/Landing/Navbar'
export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>
            <header><Navbar /></header>
            {children}
        </>
    )
}
