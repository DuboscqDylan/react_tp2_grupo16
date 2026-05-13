import { useState, useEffect, useCallback, useRef } from "react";
import { API_BASE } from "../services/api.js";
const PAGE_SIZE = 10;

export function useSongsPagination() {
  const [songs, setSongs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const isFetchingRef = useRef(false);

  const fetchPage = useCallback(async (pageNum) => {
    if (isFetchingRef.current) return;
    isFetchingRef.current = true;
    setLoading(true);
    setError(null);

    try {
      const url = new URL(API_BASE);
      url.searchParams.set("page", pageNum);
      url.searchParams.set("limit", PAGE_SIZE);

      const res = await fetch(url);
      if (!res.ok) throw new Error("Error fetching songs");

      const data = await res.json();

      setSongs((prev) => (pageNum === 1 ? data : [...prev, ...data]));
      setHasMore(data.length === PAGE_SIZE);
    } catch (err) {
      setError(err.message || t("error"));
    } finally {
      setLoading(false);
      isFetchingRef.current = false;
    }
  }, []);

  useEffect(() => {
    fetchPage(page);
  }, [page, fetchPage]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [loading, hasMore]);

  return { songs, loading, error, hasMore, loadMore };
}
