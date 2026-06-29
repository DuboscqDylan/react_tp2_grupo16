const API_BASE = import.meta.env.VITE_API_BASE || "";

export function createAuthFetch({
  getToken,
  getRefreshToken,
  setToken,
  logout,
}) {
  return async function authFetch(url, options = {}) {
    const request = (accessToken) =>
      fetch(url, {
        ...options,
        headers: {
          ...(options.headers ?? {}),
          Authorization: `Bearer ${accessToken}`,
        },
      });

    let response = await request(getToken());

    if (response.status !== 401 && response.status !== 403) {
      return response;
    }

    const refreshResponse = await fetch(`${API_BASE}/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: getRefreshToken(),
      }),
    });

    const refreshData = await refreshResponse.json();

    if (!refreshResponse.ok || !refreshData.success) {
      logout();
      throw new Error("No se pudo renovar el access token");
    }

    const newAccessToken = refreshData.data.accessToken;

    localStorage.setItem("token", newAccessToken);
    setToken(newAccessToken);

    return request(newAccessToken);
  };
}
