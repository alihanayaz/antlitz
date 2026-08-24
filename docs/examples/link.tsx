import { Button, Link } from "antlitz";

export function Variants() {
  return (
    <>
      <Link href="/components/button">Internal link</Link>
      <Link href="https://example.com">External link</Link>
      <Link href="https://example.com" variant="plain">
        Plain link
      </Link>
    </>
  );
}

export function Referrer() {
  return (
    <Link href="https://example.com" refValue="antlitz.dev">
      External link with a referrer parameter
    </Link>
  );
}

export function Composition() {
  return (
    <Button asChild variant="outline">
      <Link href="https://example.com" variant="plain">
        Styled as a button
      </Link>
    </Button>
  );
}
