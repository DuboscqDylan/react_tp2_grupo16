export const API_BASE = "https://69ed5ad4af4ff533142bb90c.mockapi.io/song";

export const fetchDetails = async (id) => {
        const res = await fetch(`${API_BASE}/${id}`);
        if (!res.ok) throw new Error("Error fetching song");
        return res.json();
}