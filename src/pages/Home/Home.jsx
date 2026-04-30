import { useState, useEffect } from "react";
import { ListSongs } from "../../components/ListSongs/ListSongs";
import { useFavorites } from "../../contexts/FavoritesContext";

const url = new URL("https://69ed5ad4af4ff533142bb90c.mockapi.io/song");

export const Home = () => {
  const [songs, setSongs] = useState([]);
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Error en la request");
        return res.json();
      })
      .then((data) => setSongs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <ListSongs
        list={songs}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
};