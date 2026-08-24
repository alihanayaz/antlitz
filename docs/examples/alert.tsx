import { Alert, Icon, Text } from "antlitz";
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
    <Alert key={variant} variant={variant}>
      {variant}
    </Alert>
  ));
}

export function Sizes() {
  return (
    <>
      <Alert size="sm">Small</Alert>
      <Alert size="md">Medium</Alert>
      <Alert size="lg">Large</Alert>
    </>
  );
}

export function Radius() {
  return RADII.map((radius) => (
    <Alert key={radius} variant="outline" radius={radius}>
      {radius}
    </Alert>
  ));
}

export function Tones() {
  return (
    <>
      <Alert variant="outline" tone="base">
        Base
      </Alert>
      <Alert variant="outline" tone="muted">
        Muted
      </Alert>
      <Alert variant="outline" tone="subtle">
        Subtle
      </Alert>
    </>
  );
}

export function Composition() {
  return (
    <Alert variant="warning" className="w-full max-w-md gap-3">
      <Icon size={16}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4M12 16h.01" />
      </Icon>
      <div className="flex flex-col gap-1">
        <Text as="span" weight="medium">
          Payment method expiring
        </Text>
        <Text as="span" size="sm">
          Update your card before the next billing cycle.
        </Text>
      </div>
    </Alert>
  );
}
