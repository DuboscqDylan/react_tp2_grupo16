import { useState, useEffect } from "react";
import { ListSongs } from "../../components/ListSongs/ListSongs";
import { useFavorites } from "../../contexts/FavoritesContext";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { filterSongs } from "../../services/search";

const url = new URL("https://69ed5ad4af4ff533142bb90c.mockapi.io/song");

export const Favorites = () => {
  const [allSongs, setAllSongs] = useState([]);
  const [search,setSearch] = useState("");
  const { favoriteIds, toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setAllSongs)
      .catch(console.error);
  }, []);

  const favoriteSongs = allSongs.filter((song) => favoriteIds.includes(song.id));

  //aplicar buscador
  const filteredFavorites = filterSongs(favoriteSongs,search);

  return (
  <div className="p-6">

    <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text)]">
      Tus favoritos ❤️
    </h2>

    {/*  Buscador */}
    <SearchBar search={search} setSearch={setSearch} />

    {/* Lista */}
     {filteredFavorites.length === 0 ? (
        search !== "" ? (
          <p className="text-gray-400 mt-4">
            No se encontraron resultados para "{search}"
          </p>
        ) : (
          <p className="text-gray-400 mt-4">
            No tenés canciones favoritas
          </p>
        )
      ) : (
        <ListSongs
          list={filteredFavorites}
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};