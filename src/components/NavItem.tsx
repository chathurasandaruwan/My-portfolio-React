import {FC, ReactNode} from "react";
import {Link} from "react-router-dom";

interface NavItemProps {
    icon: ReactNode
    label: string
    to: string
    active?: boolean
}

export const NavItem: FC<NavItemProps> = ({icon, label, to, active}) => {
    return (
        <Link to={to}>
            <div
                className={`relative flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:bg-white/10 ${
                    active ? "bg-white/10 text-white" : "text-white/70"
                }`}
                aria-label={label}
            >
                {icon}
                <span
                    className="absolute left-16 z-50 hidden whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
          {label}
        </span>
            </div>
        </Link>
    )
}