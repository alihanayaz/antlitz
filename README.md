# antlitz

A minimal design system for React and Tailwind CSS. Atomic components and design tokens.

**Under heavy development.** The API is unstable and minor releases may contain breaking changes.

## Installation

```sh
pnpm dlx antlitz init
```

`init` installs the package and wires up Tailwind CSS v4 and the theme import.
To do it by hand:

```sh
pnpm add antlitz
```

```css
@import "tailwindcss";
@import "antlitz/theme.css";
```

## Usage

```tsx
import { Button } from "antlitz";

export function Save() {
  return <Button>Save</Button>;
}
```

In a Next.js app, import `Link` and `Image` from `antlitz/next` so they render
through `next/link` and `next/image`.

For long-form content rendered from data — markdown, MDX, a CMS field — import
the Typeset stylesheet and wrap the output in `typeset`.

```css
@import "antlitz/typeset.css";
```

## Documentation

Every component has a page with live examples, its full API, and usage notes.
The docs app lives in [`docs/`](./docs) and is versioned with the package.

Release notes live on the [releases page](https://github.com/alihanayaz/antlitz/releases).

## Unpublished versions

`0.0.0`–`0.9.0` were unpublished from npm and cannot be restored. Upgrade to `0.10.0` or later.

## License

Licensed under the [MIT license](./LICENSE).
