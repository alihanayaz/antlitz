import { Button, Icon, Link } from "antlitz";
import { RADII } from "./shared";

const VARIANTS = [
  "solid",
  "soft",
  "outline",
  "ghost",
  "danger",
  "danger-soft",
  "link",
  "plain",
] as const;

export function Variants() {
  return VARIANTS.map((variant) => (
    <Button key={variant} variant={variant}>
      {variant}
    </Button>
  ));
}

export function Sizes() {
  return (
    <>
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" variant="outline" aria-label="Add">
        <Icon size={16}>
          <path d="M12 5v14M5 12h14" />
        </Icon>
      </Button>
    </>
  );
}

export function Radius() {
  return RADII.map((radius) => (
    <Button key={radius} variant="outline" radius={radius}>
      {radius}
    </Button>
  ));
}

export function Tones() {
  return (
    <>
      <Button variant="ghost" tone="base">
        Base
      </Button>
      <Button variant="ghost" tone="muted">
        Muted
      </Button>
      <Button variant="ghost" tone="subtle">
        Subtle
      </Button>
    </>
  );
}

export function States() {
  return (
    <>
      <Button loading>Saving</Button>
      <Button variant="outline" loading>
        Saving
      </Button>
      <Button disabled>Disabled</Button>
      <Button variant="outline" size="icon" aria-label="Loading" loading />
    </>
  );
}

export function Composition() {
  return (
    <>
      <Button asChild variant="outline">
        <Link href="/components/link" variant="plain">
          Internal
        </Link>
      </Button>
      <Button asChild>
        <Link href="https://example.com" variant="plain">
          External
        </Link>
      </Button>
    </>
  );
}
