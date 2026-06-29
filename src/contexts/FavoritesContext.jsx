import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useAuth } from "./AuthContext";

const API_BASE = import.meta.env.VITE_API_BASE || "";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const { token, user, authFetch } = useAuth();

  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const favoriteIds = useMemo(
    () => favoriteSongs.map((song) => song.id),
    [favoriteSongs],
  );
  const favoriteSet = useMemo(() => new Set(favoriteIds), [favoriteIds]);

  useEffect(() => {
    async function loadFavorites() {
      if (!token || !user) {
        setFavoriteSongs([]);
        setIsLoaded(true);
        return;
      }

      try {
        const res = await authFetch(`${API_BASE}/favorites`);

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          setFavoriteSongs(data.data);
        } else {
          setFavoriteSongs([]);
        }
      } catch (err) {
        console.error("Failed to load favorites", err);
        setFavoriteSongs([]);
      } finally {
        setIsLoaded(true);
      }
    }

    loadFavorites();
  }, [token, user, authFetch]);

  const toggleFavorite = useCallback(
    async (songId, songObject) => {
      if (!token || !user) return;

      const isCurrentlyFavorite = favoriteSet.has(songId);

      const previousSongs = favoriteSongs;

      const updatedSongs = isCurrentlyFavorite
        ? favoriteSongs.filter((s) => s.id !== songId)
        : [...favoriteSongs, songObject];

      setFavoriteSongs(updatedSongs);

      try {
        if (isCurrentlyFavorite) {
          const res = await authFetch(`${API_BASE}/favorites/${songId}`, {
            method: "DELETE",
          });

          if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
          }
        } else {
          const res = await authFetch(`${API_BASE}/favorites`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              songId,
            }),
          });

          if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
          }
        }
      } catch (error) {
        console.error("Failed to toggle favorite", error);

        // rollback
        setFavoriteSongs(previousSongs);
      }
    },
    [favoriteSongs, favoriteSet, token, user, authFetch],
  );

  const isFavorite = useCallback((id) => favoriteSet.has(id), [favoriteSet]);

  const value = useMemo(
    () => ({
      favoriteSongs,
      favoriteIds,
      toggleFavorite,
      isFavorite,
      isLoaded,
    }),
    [favoriteSongs, favoriteIds, toggleFavorite, isFavorite, isLoaded],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
