import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_BASE } from "../../hooks/useSongsPagination";
import { Star } from "lucide-react";
import { useFavorites } from "../../contexts/FavoritesContext";
import { FavoriteButton } from "../../components/Buttons/FavoriteButton";

export const Details = () => {
    const { id } = useParams();
    const [song, setSong] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const { isFavorite, toggleFavorite } = useFavorites();

    useEffect(() => {

        const fetchDetails = async () => {
            try {
                const res = await fetch(`${API_BASE}/${id}`);
                if (!res.ok) throw new Error("Error fetching song");
                const data = await res.json();
                setSong(data);
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchDetails();
    }, [id]);

    const isFav = isFavorite(song?.id);

    if (loading) return <p className="p-5">Cargando...</p>
    if (error) return <p className="p-5">{error}</p>
    if (!song) return <p className="p-5">No se encontró la canción</p>

    return (
        <div className="p-6 flex justify-center bg-[var(--color-bg)] text-[var(--color-text)]">
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">
                <div className="flex-shrink-0 flex justify-center">
                    <img src={song.cover} alt={`${song.name} cover`} className="mt-4 w-64 rounded-lg" />
                </div>
                <div className="flex-1 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 shadow-sm">

                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-bold leading-none">{song.name}</h1>
                            <FavoriteButton
                                isFav={isFav}
                                onToggle={() => toggleFavorite(song.id)}
                            />
                        </div>
                        <p className="text-[var(--color-text-secondary)] capitalize">
                            {song.artistId?.replace("-", " ") || "Unknown Artist"}
                        </p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p>
                            <span className="text-[var(--color-text-muted)]">Género: </span>{song.genre}
                        </p>
                        <p>
                            <span className="text-[var(--color-text-muted)]">Álbum: </span>{song.album}
                        </p>
                        <p>
                            <span className="text-[var(--color-text-muted)]">Fecha de lanzamiento: </span>{song.releaseDate}
                        </p>
                        <p className="flex items-center gap-1">
                            <span className="text-[var(--color-text-muted)]">Rating: </span>{song.rating}<Star className="w-4 h-4 inline" />
                        </p>
                        <p>
                            <span className="text-[var(--color-text-muted)]">Duración: </span>{Math.floor(song.duration / 60)} : {(song.duration) % 60} min
                        </p>
                        <p>
                            <span className="text-[var(--color-text-muted)]">Reproducciones: </span>{song.plays}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}