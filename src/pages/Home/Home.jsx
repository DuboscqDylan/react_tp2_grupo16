import { useState } from "react";
import { ListSongs } from "../../components/ListSongs/ListSongs";
import { useFavorites } from "../../contexts/FavoritesContext";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { filterSongs } from "../../services/search";
import { useSongsPagination } from "../../hooks/useSongsPagination";
import { Sentinel } from "../../components/Sentinel/Sentinel";

export const Home = () => {
  const { songs, loading, error, hasMore, loadMore } = useSongsPagination();
  const [search, setSearch] = useState("");
  const { toggleFavorite, isFavorite } = useFavorites();

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

      {loading && (
        <p className="text-center py-4 text-[var(--color-text-muted)]">
          Cargando más canciones…
        </p>
      )}
      {error && (
        <p className="text-center py-4 text-red-500">Error: {error}</p>
      )}
      {!hasMore && songs.length > 0 && !loading && (
        <p className="text-center py-4 text-[var(--color-text-muted)]">
          Has visto todas las canciones.
        </p>
      )}

      <Sentinel onIntersect={loadMore} loading={loading} hasMore={hasMore} />
    </div>
  );
};