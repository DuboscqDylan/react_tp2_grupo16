import { FavoriteButton } from "../Buttons/FavoriteButton";
import { AddToPlaylistButton } from "../Buttons/AddToPlaylistButton";
import { NavLink } from "react-router-dom";

export const CardSong = ({ song, isFav, onToggle }) => {
  return (
    <NavLink to={`/songs/${song.id}`} className="block">
      <div className="flex items-stretch gap-4 bg-[var(--color-card)] rounded-lg p-3 shadow-sm hover:shadow-md hover:bg-[var(--color-card-hover)] transition-all w-full max-w-md cursor-pointer">
        <div className="flex items-stretch gap-4 min-w-0 flex-1">
          <div className="flex-shrink-0">
            <img
              src={song.cover || "/no-image.jpg"}
              alt={`${song.name} cover`}
              className="h-24 w-24 rounded-md object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/no-image.jpg";
              }}
            />
          </div>

          <div className="min-w-0 h-24 flex flex-col justify-between">
            <h3 className="font-semibold text-base text-[var(--color-text)] truncate">
              {song.name}
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] truncate capitalize">
              {song.artist?.name || "Unknown Artist"}
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              {song.genre}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between flex-shrink-0 h-24">
          <div className="flex-1 flex items-center justify-center">
            <FavoriteButton
              isFav={isFav}
              onToggle={() => onToggle(song.id, song)}
            />
          </div>

          <div className="flex-1 flex items-center justify-center">
            <AddToPlaylistButton />
          </div>

          <div className="flex-1" />
        </div>
      </div>
    </NavLink>
  );
};