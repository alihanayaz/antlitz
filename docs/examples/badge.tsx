import { Badge, Icon, Link } from "antlitz";
import { RADII } from "./shared";

const VARIANTS = [
  "solid",
  "soft",
  "outline",
  "danger",
  "success",
  "warning",
  "info",
  "plain",
] as const;

export function Variants() {
  return VARIANTS.map((variant) => (
    <Badge key={variant} variant={variant}>
      {variant}
    </Badge>
  ));
}

export function Sizes() {
  return (
    <>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </>
  );
}

export function Radius() {
  return RADII.map((radius) => (
    <Badge key={radius} variant="outline" radius={radius}>
      {radius}
    </Badge>
  ));
}

export function Tones() {
  return (
    <>
      <Badge variant="outline" tone="base">
        Base
      </Badge>
      <Badge variant="outline" tone="muted">
        Muted
      </Badge>
      <Badge variant="outline" tone="subtle">
        Subtle
      </Badge>
    </>
  );
}

export function Composition() {
  return (
    <>
      <Badge variant="soft" radius="full">
        <Icon size={12}>
          <path d="M20 6 9 17l-5-5" />
        </Icon>
        Verified
      </Badge>
      <Badge asChild variant="outline">
        <Link href="/components/link" variant="plain">
          Linked badge
        </Link>
      </Badge>
    </>
  );
}
