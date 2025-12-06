export const apiBase = "http://localhost:5000";

function getToken() {
  return localStorage.getItem("token") || "";
}

export async function apiFetch(path: string, opts: RequestInit = {}) {
  const headers = opts.headers
    ? new Headers(opts.headers as any)
    : new Headers();
  const token = getToken();
  if (token) headers.set("Authorization", `Bearer ${token}`);
  if (!headers.has("Content-Type") && !(opts.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }
  const res = await fetch(`${apiBase}${path}`, { ...opts, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw { status: res.status, data };
  return data;
}
