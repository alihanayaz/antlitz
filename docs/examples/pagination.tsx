import { Icon, Link, Pagination } from "antlitz";

export function Basic() {
  return (
    <Pagination>
      <Link href="?page=1" variant="plain">
        1
      </Link>
      <Link href="?page=2" variant="plain" aria-current="page">
        2
      </Link>
      <Link href="?page=3" variant="plain">
        3
      </Link>
    </Pagination>
  );
}

export function Truncated() {
  return (
    <Pagination>
      <Link href="?page=1" variant="plain">
        1
      </Link>
      <span aria-hidden="true">…</span>
      <Link href="?page=6" variant="plain">
        6
      </Link>
      <Link href="?page=7" variant="plain" aria-current="page">
        7
      </Link>
      <Link href="?page=8" variant="plain">
        8
      </Link>
      <span aria-hidden="true">…</span>
      <Link href="?page=20" variant="plain">
        20
      </Link>
    </Pagination>
  );
}

export function PrevNext() {
  return (
    <Pagination>
      <Link href="?page=1" variant="plain" aria-label="Previous page">
        <Icon size={16}>
          <path d="m15 18-6-6 6-6" />
        </Icon>
      </Link>
      <Link href="?page=1" variant="plain">
        1
      </Link>
      <Link href="?page=2" variant="plain" aria-current="page">
        2
      </Link>
      <Link href="?page=3" variant="plain">
        3
      </Link>
      <Link href="?page=3" variant="plain" aria-label="Next page">
        <Icon size={16}>
          <path d="m9 18 6-6-6-6" />
        </Icon>
      </Link>
    </Pagination>
  );
}

export function Edges() {
  return (
    <Pagination>
      <span aria-disabled="true" aria-label="Previous page">
        <Icon size={16}>
          <path d="m15 18-6-6 6-6" />
        </Icon>
      </span>
      <Link href="?page=1" variant="plain" aria-current="page">
        1
      </Link>
      <Link href="?page=2" variant="plain">
        2
      </Link>
      <Link href="?page=2" variant="plain" aria-label="Next page">
        <Icon size={16}>
          <path d="m9 18 6-6-6-6" />
        </Icon>
      </Link>
    </Pagination>
  );
}
