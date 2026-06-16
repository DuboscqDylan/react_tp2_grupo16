import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

const API_BASE = import.meta.env.VITE_API_BASE || "";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/favorites`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setFavoriteIds(Array.isArray(data) ? data : []);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error("Failed to load favorites", err);

        setFavoriteIds([]);
        setIsLoaded(true);
      });
  }, []);

  const favoriteSet = useMemo(
    () => new Set(Array.isArray(favoriteIds) ? favoriteIds : []),
    [favoriteIds],
  );

  const toggleFavorite = useCallback(
    async (id) => {
      const isCurrentlyFavorite = favoriteSet.has(id);
      const updatedIds = isCurrentlyFavorite
        ? favoriteIds.filter((favId) => favId !== id)
        : [...favoriteIds, id];
      setFavoriteIds(updatedIds);

      try {
        if (isCurrentlyFavorite) {
          await fetch(`${API_BASE}/favorites/${id}`, { method: "DELETE" });
        } else {
          await fetch(`${API_BASE}/favorites`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ songId: id }),
          });
        }
      } catch (error) {
        console.error("Failed to toggle favorite", error);
        setFavoriteIds(favoriteIds); // revert on error
      }
    },
    [favoriteIds, favoriteSet],
  );

  const isFavorite = useCallback((id) => favoriteSet.has(id), [favoriteSet]);

  const value = useMemo(
    () => ({ favoriteIds, toggleFavorite, isFavorite, favoriteSet, isLoaded }),
    [favoriteIds, toggleFavorite, isFavorite, favoriteSet, isLoaded],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error("useFavorites must be used inside FavoritesProvider");
  return ctx;
}
