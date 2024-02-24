export function proxyify(url: string): string {
  // Only use the CORS proxy if the endpoint is defined.
  if (import.meta.env.VITE_CORS_PROXY_ENDPOINT) {
    return `${import.meta.env.VITE_CORS_PROXY_ENDPOINT}${encodeURIComponent(url)}`;
  }
  return `${url}`;
}

export async function fetchWithProxy(url: string): Promise<Response> {
  return fetch(proxyify(url));
}
