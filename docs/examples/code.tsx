import { Code, Text } from "antlitz";
import { RADII } from "./shared";

const VARIANTS = ["soft", "outline", "plain"] as const;
const SIZES = ["sm", "md", "lg"] as const;
const TONES = ["base", "muted", "subtle"] as const;

export function Basic() {
  return <Code>pnpm add antlitz</Code>;
}

export function Variants() {
  return VARIANTS.map((variant) => (
    <Code key={variant} variant={variant}>
      {variant}
    </Code>
  ));
}

export function Sizes() {
  return SIZES.map((size) => (
    <Code key={size} size={size}>
      {size}
    </Code>
  ));
}

export function Radius() {
  return RADII.map((radius) => (
    <Code key={radius} radius={radius}>
      {radius}
    </Code>
  ));
}

export function Tones() {
  return TONES.map((tone) => (
    <Code key={tone} tone={tone}>
      {tone}
    </Code>
  ));
}

export function InText() {
  return (
    <Text size="lg">
      Run <Code>pnpm add antlitz</Code> and it picks up the surrounding type
      scale.
    </Text>
  );
}
