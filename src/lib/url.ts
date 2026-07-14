const INTERNAL_ORIGIN = "http://internal.invalid";

function parseWebUrl(href: string, base?: string): URL | undefined {
  try {
    const url = new URL(href, base);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url
      : undefined;
  } catch {
    return undefined;
  }
}

export function isExternalLink(href: string): boolean {
  const url = parseWebUrl(href, INTERNAL_ORIGIN);
  return url !== undefined && url.origin !== INTERNAL_ORIGIN;
}

export function appendRefParam(href: string, value: string): string {
  const url = parseWebUrl(href);
  if (!url) return href;

  url.searchParams.set("ref", value);
  return url.toString();
}
