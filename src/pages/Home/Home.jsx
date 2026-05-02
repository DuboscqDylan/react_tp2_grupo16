import { useState, useEffect } from "react";
import { ListSongs } from "../../components/ListSongs/ListSongs";
import { useFavorites } from "../../contexts/FavoritesContext";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { filterSongs } from "../../services/search";

const url = new URL("https://69ed5ad4af4ff533142bb90c.mockapi.io/song");

export const Home = () => {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");

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

  const filteredSongs = filterSongs(songs, search);

  return (
    <div className="p-6">
      <SearchBar search={search} setSearch={setSearch} />

      {filteredSongs.length === 0 ? (
        <p className="text-gray-400 mt-4 text-center">
          No se encontraron resultados
        </p>

      ) : ( 

      <ListSongs
        list={filteredSongs}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
      )}
    </div>
  );
};