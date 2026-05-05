import { CardSong } from "../CardSong/CardSong";
import { useTranslation } from "react-i18next";

export const ListSongs = ({ list, isFavorite, onToggleFavorite }) => {
  const { t } = useTranslation();
  return (
    <div>
      {list.length === 0 && (
        <p className="text-center py-8 text-[var(--color-text-muted)]">
           {t("emptyList")}
        </p>
      )}
      <div className="flex flex-wrap justify-center gap-4 px-4 py-6">
        {list.map((element) => (
          <CardSong
            key={element.id}
            song={element}
            isFav={isFavorite(element.id)}
            onToggle={() => onToggleFavorite(element.id)}
          />
        ))}
      </div>
    </div>
  );
};