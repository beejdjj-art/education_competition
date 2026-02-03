const API_URL = 'http://localhost:3000';

export async function request<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(API_URL + url, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || 'Request failed');
  }

  return res.json();
}
