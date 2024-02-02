export function proxyify(url: string) {
  return `https://corsproxy.io/?${encodeURIComponent(url)}`;
}

export function fetchWithProxy(url: string) {
  return fetch(`https://corsproxy.io/?${encodeURIComponent(url)}`);
}
