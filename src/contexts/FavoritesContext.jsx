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
  const { token, user } = useAuth();

  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  
  const favoriteIds = useMemo(
    () => favoriteSongs.map((song) => song.id),
    [favoriteSongs]
  );
  const favoriteSet = useMemo(() => new Set(favoriteIds), [favoriteIds]);

  
  useEffect(() => {
    if (!token || !user) {
      setFavoriteSongs([]);
      setIsLoaded(true);
      return;
    }

    fetch(`${API_BASE}/favorites`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setFavoriteSongs(data.data);
        } else {
          setFavoriteSongs([]);
        }
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error("Failed to load favorites", err);
        setFavoriteSongs([]);
        setIsLoaded(true);
      });
  }, [token, user]);

  
  const toggleFavorite = useCallback(
    async (songId, songObject) => {
      if (!token || !user) return;

      const isCurrentlyFavorite = favoriteSet.has(songId);

      
      const updatedSongs = isCurrentlyFavorite
        ? favoriteSongs.filter((s) => s.id !== songId)
        : [...favoriteSongs, songObject];
      setFavoriteSongs(updatedSongs);

      try {
        if (isCurrentlyFavorite) {
          await fetch(`${API_BASE}/favorites/${songId}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          });
        } else {
          await fetch(`${API_BASE}/favorites`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ songId }),
          });
        }
      } catch (error) {
        console.error("Failed to toggle favorite", error);
        
        setFavoriteSongs(favoriteSongs);
      }
    },
    [favoriteSongs, favoriteSet, token, user]
  );

  const isFavorite = useCallback(
    (id) => favoriteSet.has(id),
    [favoriteSet]
  );

  const value = useMemo(
    () => ({
      favoriteSongs,   
      favoriteIds,     
      toggleFavorite,
      isFavorite,
      isLoaded,
    }),
    [favoriteSongs, favoriteIds, toggleFavorite, isFavorite, isLoaded]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);