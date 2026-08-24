import { Text } from "antlitz";

export function Sizes() {
  return (
    <>
      <Text size="xs">Extra small</Text>
      <Text size="sm">Small</Text>
      <Text size="base">Base</Text>
      <Text size="lg">Large</Text>
      <Text size="xl">Extra large</Text>
      <Text size="xxl">2xl</Text>
      <Text size="xxxl">3xl</Text>
    </>
  );
}

export function Weights() {
  return (
    <>
      <Text weight="normal">Normal</Text>
      <Text weight="medium">Medium</Text>
      <Text weight="semibold">Semibold</Text>
    </>
  );
}

export function Tones() {
  return (
    <>
      <Text tone="base">Base</Text>
      <Text tone="muted">Muted</Text>
      <Text tone="subtle">Subtle</Text>
      <Text tone="danger">Danger</Text>
    </>
  );
}

export function Polymorphism() {
  return (
    <Text tone="muted">
      Published{" "}
      <Text asChild size="sm">
        <time dateTime="2026-07-15">15 July 2026</time>
      </Text>{" "}
      by{" "}
      <Text as="span" weight="semibold">
        Alihan
      </Text>
      .
    </Text>
  );
}
