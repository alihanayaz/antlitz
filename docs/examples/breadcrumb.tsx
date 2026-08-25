import { Breadcrumb, Icon, Link } from "antlitz";

export function Basic() {
  return (
    <Breadcrumb>
      <Link href="/" variant="plain">
        Home
      </Link>
      <Link href="/blog" variant="plain">
        Blog
      </Link>
      Type scales that survive contact with a CMS
    </Breadcrumb>
  );
}

export function Separator() {
  return (
    <Breadcrumb separator="/">
      <Link href="/" variant="plain">
        Home
      </Link>
      <Link href="/docs" variant="plain">
        Docs
      </Link>
      Breadcrumb
    </Breadcrumb>
  );
}

export function WithIcon() {
  return (
    <Breadcrumb>
      <Link href="/" variant="plain" aria-label="Home">
        <Icon size={16}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
        </Icon>
      </Link>
      <Link href="/settings" variant="plain">
        Settings
      </Link>
      Billing
    </Breadcrumb>
  );
}

export function Collapsed() {
  return (
    <Breadcrumb>
      <Link href="/" variant="plain">
        Home
      </Link>
      <span aria-hidden="true">…</span>
      <Link href="/blog/2026" variant="plain">
        2026
      </Link>
      A post
    </Breadcrumb>
  );
}
