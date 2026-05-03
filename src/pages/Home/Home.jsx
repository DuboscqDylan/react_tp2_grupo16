import { ListSongs } from "../../components/ListSongs/ListSongs";
import { useFavorites } from "../../contexts/FavoritesContext";
import { useSongsPagination } from "../../hooks/useSongsPagination";
import { Sentinel } from "../../components/Sentinel/Sentinel";

export const Home = () => {
  const { songs, loading, error, hasMore, loadMore } = useSongsPagination();
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div>
      <ListSongs
        list={songs}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
      {loading && (
        <p className="text-center py-4 text-[var(--color-text-muted)]">
          Cargando más canciones…
        </p>
      )}
      {error && (
        <p className="text-center py-4 text-red-500">
          Error: {error}
        </p>
      )}
      {!hasMore && songs.length > 0 && (
        <p className="text-center py-4 text-[var(--color-text-muted)]">
          Has visto todas las canciones.
        </p>
      )}
      <Sentinel onIntersect={loadMore} loading={loading} hasMore={hasMore} />
    </div>
  );
};