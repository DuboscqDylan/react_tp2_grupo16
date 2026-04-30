import { NavItem } from "../NavItem/NavItem"

export const NavBar = () => {
    const links = [
        { to: "/", label: "Spoofify", isLogo: true },
        { to: "/Favorites", label: "Favoritos" },
        { to: "/About", label: "Acerca de" },
    ];

    return (
        <nav className="flex items-center gap-4 text-sm">
            {links.map((link, i) => (
                <div key={link.to} className="flex items-center gap-4">
                    <NavItem {...link} />
                    {i < links.length - 1 && <span className="opacity-40">|</span>}
                </div>
            ))}
        </nav>
    );
}