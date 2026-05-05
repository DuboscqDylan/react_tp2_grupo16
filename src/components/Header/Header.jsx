import { useEffect, useState } from "react";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";
import { NavBar } from "../NavBar/NavBar";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";

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
            <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-7 py-6 border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)]">
                <NavBar></NavBar>
                <div className="flex items-center gap-3">
                    <LanguageSelector />
                    <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            </header>
        </div>
    )
}