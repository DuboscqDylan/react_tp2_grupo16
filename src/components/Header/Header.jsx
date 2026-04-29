import { useEffect, useState } from "react";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";
import { NavBar } from "../NavBar/NavBar";

export const Header = () => {

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        const root = document.documentElement;

        if (darkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);
    
    return (
        <div>
            <header className="flex items-center justify-between p-4 border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)]">
                <NavBar></NavBar>
                <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>
            </header>
        </div>
    )
}