import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom"
import {Home, User, Briefcase, Menu, X, Mail, PersonStanding, GraduationCap} from "lucide-react"
import {NavItem} from "./NavItem.tsx";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const location = useLocation()

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkScreenSize()
        window.addEventListener("resize", checkScreenSize)

        return () => {
            window.removeEventListener("resize", checkScreenSize)
        }
    }, [])

    const navItems = [
        {id: "home", label: "Home", icon: <Home className="h-5 w-5"/>, to: "/"},
        {id: "about", label: "About Me", icon: <User className="h-5 w-5"/>, to: "/about"},
        {id: "skills", label: "Skills", icon: <PersonStanding className="h-5 w-5"/>, to: "/skills"},
        {id: "education", label: "Education", icon: <GraduationCap className="h-5 w-5"/>, to: "/education"},
        {id: "projects", label: "Projects", icon: <Briefcase className="h-5 w-5"/>, to: "/projects"},
        {id: "contact", label: "Contact", icon: <Mail className="h-5 w-5"/>, to: "/contact"},
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button
                onClick={toggleMenu}
                className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md md:hidden"
                aria-label="Toggle menu"
            >
                {isOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
            </button>

            <nav
                className={`fixed left-0 top-30 z-40 flex h-130 flex-col items-center justify-between gap-6 bg-white/10 rounded-2xl px-3 backdrop-blur-md transition-all duration-300 ${
                    isMobile ? (isOpen ? "translate-x-10" : "-translate-x-full") : "translate-x-10"
                } md:w-20`}
            >
                <div className="flex flex-col items-center gap-6 mt-16">
                    {navItems.map((item) => (
                        <div key={item.id} className="group relative">
                            <NavItem icon={item.icon} label={item.label} to={item.to}
                                     active={location.pathname === item.to}/>
                        </div>
                    ))}
                </div>
            </nav>

            {isMobile && isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
                    onClick={toggleMenu}
                    aria-hidden="true"
                />
            )}
        </>
    )
}