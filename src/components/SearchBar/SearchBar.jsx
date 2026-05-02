export const SearchBar = ({search, setSearch}) => {
    return (
        <input 
            type="text"
            placeholder="¿Qué quieres reproducir?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-full transition
                       bg-white text-black border
                       dark:bg-gray-800 dark:text-white dark:border-gray-700"
        />
    );
};