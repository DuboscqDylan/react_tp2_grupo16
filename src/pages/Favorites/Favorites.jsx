import { useState, useMemo } from "react";
import { ListSongs } from "../../components/ListSongs/ListSongs";
import { useFavorites } from "../../contexts/FavoritesContext";
import { useAuth } from "../../contexts/AuthContext";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { filterSongs } from "../../services/search";
import { useTranslation } from "react-i18next";
import { EmptyState } from "../../components/EmptyState/EmptyState";

export const Favorites = () => {
  const { favoriteSongs, toggleFavorite, isFavorite } = useFavorites();
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const { t } = useTranslation();

  const filteredFavorites = useMemo(
    () => filterSongs(favoriteSongs, search),
    [favoriteSongs, search]
  );

  if (!user) {
    return (
      <div className="p-6 text-center text-[var(--color-text-secondary)]">
        {t("loginRequired")}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text)]">
        {t("yourfavorites")} ❤️
      </h2>

      <SearchBar search={search} setSearch={setSearch} />

      {filteredFavorites.length === 0 ? (
        search !== "" ? (
          <EmptyState text={t("noResults")} />
        ) : (
          <EmptyState text={t("noFavorites")} />
        )
      ) : (
        <ListSongs
          list={filteredFavorites}
          isFavorite={isFavorite}
          onToggleFavorite={(songId, song) => toggleFavorite(songId, song)}
        />
      )}
    </div>
  );
};