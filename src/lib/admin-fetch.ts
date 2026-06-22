'use client';

export async function adminFetch(
  input: string,
  init: RequestInit = {}
): Promise<Response> {
  const extraHeaders: Record<string, string> = {
    'x-site-slug': 'ejlilejgp'
  };

  return fetch(input, {
    ...init,
    headers: {
      ...(init.headers ?? {}),
      ...extraHeaders,
    },
  });
}
