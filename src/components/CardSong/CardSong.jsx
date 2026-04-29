import { FavouriteButton } from "../Buttons/FavouriteButton";
import { AddToPlaylistButton } from "../Buttons/AddToPlaylistButton";

export const CardSong = ({ song }) => {
    return (
        <div
            className="grid grid-cols-[600px_1px_1fr] items-center items-center gap-4 p-4  transition-all duration-300 cursor-pointer
            bg-[var(--color-card)] text-[var(--color-text)] border border-[var(--color-border)]
            hover:opacity-90 hover:bg-[var(--color-card-hover)] hover:scale-[1.02] hover:shadow-lg"
        >
            <div className="flex items-center gap-4 min-w-0">

                <img
                    src={song.cover}
                    alt={song.name}
                    className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                />

                <div className="min-w-0">
                    <h2 className="text-lg font-semibold">{song.name}</h2>
                    <p className="text-sm opacity-70">{song.artist.name}</p>
                    <p className="text-xs uppercase opacity-50">{song.genre}</p>
                </div>

            </div>

            <div className="h-10 bg-[var(--color-border)] opacity-40" />

            <div className="flex items-center gap-3 opacity-80 group-hover:opacity-100 transition">
                <FavouriteButton />
                <AddToPlaylistButton />
            </div>

        </div>
    );
};