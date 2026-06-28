import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

export const FavoriteButton = ({ isFav, onToggle }) => {
  const { t } = useTranslation();

  const label = isFav ? t("removeFromFavorites") : t("addToFavorites");

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggle();
      }}
      className="transition-transform duration-200 hover:scale-110"
      aria-label={label}
      title={label}
    >
      <Heart
        size={20}
        className={`transition-all hover:text-[var(--color-accent)] ${
          isFav
            ? "fill-[var(--color-accent)] text-[var(--color-accent)]"
            : "text-gray-400"
        }`}
      />
    </button>
  );
};
