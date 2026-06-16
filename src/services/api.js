export const API_BASE = (import.meta.env.VITE_API_BASE || "");

export const fetchDetails = async (id) => {
  const res = await fetch(`${API_BASE}/songs/${id}`);
  if (!res.ok) throw new Error("Error fetching song");
  return res.json();
};

export const fetchSongs = async () => {
  const res = await fetch(`${API_BASE}/songs`);
  if (!res.ok) throw new Error("Error fetching songs");
  return res.json();
};
