import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useTranslation } from "react-i18next";

export const AuthModal = ({ open, onClose }) => {
  const { login, register } = useAuth();
  const { t } = useTranslation();
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = isRegister
      ? await register(name, email, password)
      : await login(email, password);

    if (result.success) {
      onClose();
      setName("");
      setEmail("");
      setPassword("");
    } else {
      setError(result.message || t("error"));
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-[var(--color-card)] rounded-xl p-6 w-80 shadow-lg">
        <h2 className="text-lg font-bold mb-4">
          {isRegister ? t("register") : t("login")}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {isRegister && (
            <input
              className="w-full p-2 border rounded bg-[var(--color-bg)] text-[var(--color-text)]"
              placeholder={t("name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            className="w-full p-2 border rounded bg-[var(--color-bg)] text-[var(--color-text)]"
            type="email"
            placeholder={t("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full p-2 border rounded bg-[var(--color-bg)] text-[var(--color-text)]"
            type="password"
            placeholder={t("password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-[var(--color-accent)] text-white rounded hover:opacity-90"
          >
            {isRegister ? t("register") : t("login")}
          </button>
        </form>
        <button
          className="mt-3 text-sm text-[var(--color-text-secondary)] underline"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? t("alreadyHaveAccount")
            : t("dontHaveAccount")}
        </button>
        <button
          className="mt-2 text-sm text-[var(--color-text-secondary)]"
          onClick={onClose}
        >
          {t("cancel")}
        </button>
      </div>
    </div>
  );
};