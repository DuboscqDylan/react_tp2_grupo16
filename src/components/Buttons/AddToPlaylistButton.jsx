import { Plus } from "lucide-react";

export const AddToPlaylistButton = () => {
  return (
    <button className="transition-transform duration-200 hover:scale-110">
      <Plus
        size={20}
        className="text-gray-400 hover:text-[var(--color-accent)]"
      />
    </button>
  );
};
