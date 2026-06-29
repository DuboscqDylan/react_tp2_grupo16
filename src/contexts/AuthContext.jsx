import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { createAuthFetch } from "../services/authFetch";

const API_BASE = import.meta.env.VITE_API_BASE || "";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken") || null,
  );
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (data.success) {
      localStorage.setItem("token", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken);

      setToken(data.data.accessToken);
      setRefreshToken(data.data.refreshToken);
      setUser(data.data.user);
    }
    return data;
  };

  const register = async (name, email, password) => {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();

    if (data.success) {
      return login(email, password);
    }
    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");

    setToken(null);
    setRefreshToken(null);
    setUser(null);
    setLoading(false);
  };

  const authenticatedFetch = useMemo(
    () =>
      createAuthFetch({
        getToken: () => token,
        getRefreshToken: () => refreshToken,
        setToken,
        logout,
      }),
    [token, refreshToken],
  );

  useEffect(() => {
    async function loadUser() {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await authenticatedFetch(`${API_BASE}/auth/me`);

        const data = await res.json();

        if (!data.success) {
          logout();
        } else {
          setUser(data.data);
        }
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, [token, authenticatedFetch]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
        loading,
        authFetch: authenticatedFetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
