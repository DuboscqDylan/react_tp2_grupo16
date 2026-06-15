import { useState, useEffect, useCallback, useRef } from "react";
import { API_BASE } from "../services/api.js";
const PAGE_SIZE = 20;

export function useSongsPagination() {
  const [allSongs, setAllSongs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/songs`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setAllSongs(data);
        setLoading(false);
        if (data.length <= PAGE_SIZE) setHasMore(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const songs = allSongs.slice(0, page * PAGE_SIZE);

  useEffect(() => {
    if (allSongs.length > 0) {
      setHasMore(page * PAGE_SIZE < allSongs.length);
    }
  }, [page, allSongs]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
    }
  }, [loading, hasMore]);

  return { songs, loading, error, hasMore, loadMore };
}