import { useState } from "react";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";
import { NavBar } from "../NavBar/NavBar";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import { useTheme } from "../../hooks/useTheme";
import { useAuth } from "../../contexts/AuthContext";
import { AuthModal } from "../AuthModal/AuthModal";

export const Header = () => {
  const { darkMode, setDarkMode } = useTheme();
  const { user, logout } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-7 py-6 border-b border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)]">
      <NavBar />
      <div className="flex items-center gap-3">
        <LanguageSelector />
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        {user ? (
          <div className="flex items-center gap-2">
            <span className="text-sm">{user.name}</span>
            <button
              onClick={logout}
              className="text-sm text-[var(--color-text-secondary)] hover:underline"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => setModalOpen(true)}
            className="px-3 py-1 rounded border border-[var(--color-border)] text-sm hover:bg-[var(--color-card-hover)]"
          >
            Login
          </button>
        )}
      </div>

      <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
};
