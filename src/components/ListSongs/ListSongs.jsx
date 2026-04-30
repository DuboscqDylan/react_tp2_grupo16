import { CardSong } from "../CardSong/CardSong";

export const ListSongs = ({ list, isFavorite, onToggleFavorite }) => {
  return (
    <div>
      {list.length === 0 && (
        <p className="text-center py-8 text-[var(--color-text-muted)]">
          No hay elementos en la lista
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