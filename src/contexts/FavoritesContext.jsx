import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState(() => {
    try {
      const stored = localStorage.getItem("favoriteIds");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const favoriteSet = useMemo(() => new Set(favoriteIds), [favoriteIds]);

  useEffect(() => {
    localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const toggleFavorite = useCallback((id) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  }, []);

  const isFavorite = useCallback(
    (id) => favoriteSet.has(id),
    [favoriteSet]
  );

  const value = useMemo(
    () => ({ favoriteIds, toggleFavorite, isFavorite, favoriteSet }),
    [favoriteIds, toggleFavorite, isFavorite, favoriteSet]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used inside FavoritesProvider");
  return ctx;
}