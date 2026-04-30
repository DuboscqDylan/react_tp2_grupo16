import { useState, useEffect } from "react";
import { ListSongs } from "../../components/ListSongs/ListSongs";
import { useFavorites } from "../../contexts/FavoritesContext";

const url = new URL("https://69ed5ad4af4ff533142bb90c.mockapi.io/song");

export const Favorites = () => {
  const [allSongs, setAllSongs] = useState([]);
  const { favoriteIds, toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setAllSongs)
      .catch(console.error);
  }, []);

  const favoriteSongs = allSongs.filter((song) => favoriteIds.includes(song.id));

  return (
    <div>
      <h2 className="text-2xl font-semibold px-4 pt-6 pb-2 text-[var(--color-text)]">
        Tus favoritos
      </h2>
      <ListSongs
        list={favoriteSongs}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
};