import { NavLink } from "react-router-dom";

export const NavItem = ({ to, label }) => {
    return (
        <NavLink to={to}>
            {({ isActive }) => (
                <span
                    className={`group relative px-1 py-1 transition-colors cursor-pointer
          ${isActive ? "text-blue-500" : "opacity-70 hover:opacity-100"}`}
                >
                    {label}

                    <span
                        className={`absolute left-0 bottom-0 h-[2px] bg-blue-500 transition-all duration-300
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                </span>
            )}
        </NavLink>
    )
}