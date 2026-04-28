

export const CardSong = ({ song }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{song.name}</h2>
            <p className="text-sm text-gray-500 mb-1">{song.genre}</p>
            <p className="text-sm text-gray-700 font-medium">{song.artist.name}</p>
            <img
                src={song.cover}
                alt={song.name}
                className="w-full h-48 object-cover rounded-xl mb-3"
            />
        </div>
    )
}