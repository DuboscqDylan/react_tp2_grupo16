
export const CardSong = ({ song, isFav, onToggle }) => {
  return (
    <div className="flex items-center gap-4 bg-[var(--color-card)] rounded-lg p-3 shadow-sm hover:shadow-md hover:bg-[var(--color-card-hover)] transition-all w-full max-w-md cursor-default">

      <div className="flex-shrink-0">
        <img
          src={song.cover}
          alt={`${song.name} cover`}
          className="h-24 w-24 rounded-md object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm text-[var(--color-text)] truncate">
          {song.name}
        </h3>
        <p className="text-xs text-[var(--color-text-secondary)] truncate capitalize">
          {song.artistId ? song.artistId.replace("-", " ") : "Unknown Artist"}
        </p>
        <p className="text-xs text-[var(--color-text-muted)] mt-1">
          {song.genre}
        </p>
      </div>

      
      <div className="relative group flex-shrink-0">
        <button
          onClick={onToggle}
          className={`text-2xl transition-colors ${
            isFav ? "text-red-500" : "text-gray-400 hover:text-red-400"
          }`}
          aria-label={isFav ? "Quitar de Favoritos" : "Agregar a Favoritos"}
        >
          {isFav ? "♥" : "♡"}
        </button>

        <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-[var(--color-tooltip-bg)] text-[var(--color-tooltip-text)] text-xs rounded py-1 px-2 whitespace-nowrap shadow">
            {isFav ? "Quitar de Favoritos" : "Agregar a Favoritos"}
          </div>
        </div>
      </div>
    </div>
  );
};