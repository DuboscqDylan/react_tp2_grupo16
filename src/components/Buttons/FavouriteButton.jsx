import { useState } from "react";
import { Heart } from "lucide-react";

export const FavouriteButton = () => {

    const [isFav, setIsFav] = useState(false);

    return (
        <>
            <button onClick={() => setIsFav(!isFav)} className="transition-transform duration-200 hover:scale-110">
                <Heart
                    size={20}
                    className={`
                    transition-all hover:text-[var(--color-accent)]
                    ${isFav ? "fill-[var(--color-accent)] text-[var(--color-accent)]" : "text-gray-400"}
                    `}
                />
            </button>  
        </>
    )

} 