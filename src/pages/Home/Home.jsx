import { useState, useMemo } from "react";
import { ListSongs } from "../../components/ListSongs/ListSongs";
import { useFavorites } from "../../contexts/FavoritesContext";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { filterSongs } from "../../services/search";
import { useSongsPagination } from "../../hooks/useSongsPagination";
import { Sentinel } from "../../components/Sentinel/Sentinel";
import { useTranslation } from "react-i18next";

export const Home = () => {

  const { songs, loading, error, hasMore, loadMore } = useSongsPagination();
  const [search, setSearch] = useState("");
  const { toggleFavorite, isFavorite } = useFavorites();
  const { t } = useTranslation();
  const filteredSongs = useMemo(() => {
    return filterSongs(songs, search);
  }, [songs, search]);

  return (
    <div className="p-6">
      <SearchBar search={search} setSearch={setSearch} />

      {filteredSongs.length === 0 ? (
        <p className="text-gray-400 mt-4 text-center">
          {t("noResults")}
        </p>
      ) : (
        <ListSongs
          list={filteredSongs}
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
        />
      )}

      {loading && (
        <p className="text-center py-4 text-[var(--color-text-error)]">
          {t("loadingMore")}
        </p>
      )}
      {error && (
        <p className="text-center py-4 text-[var(--color-text-error)]">Error: {error}</p>
      )}
      {!hasMore && songs.length > 0 && !loading && (
        <p className="text-center py-4 text-[var(--color-text-error)]">
          {t("noMoreSongs")}
        </p>
      )}

      {search === "" && (
        <Sentinel
          onIntersect={loadMore}
          loading={loading}
          hasMore={hasMore}
        />
      )}
    </div>
  );
};