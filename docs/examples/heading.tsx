import { Heading } from "antlitz";

export function Sizes() {
  return (
    <>
      <Heading size="xl">Extra large</Heading>
      <Heading size="lg">Large</Heading>
      <Heading size="md">Medium</Heading>
      <Heading size="sm">Small</Heading>
      <Heading size="xs">Extra small</Heading>
    </>
  );
}

export function Weights() {
  return (
    <>
      <Heading as="h3" weight="medium">
        Medium
      </Heading>
      <Heading as="h3" weight="semibold">
        Semibold
      </Heading>
      <Heading as="h3" weight="bold">
        Bold
      </Heading>
      <Heading as="h3" weight="black">
        Black
      </Heading>
    </>
  );
}

export function Tones() {
  return (
    <>
      <Heading as="h3" tone="base">
        Base
      </Heading>
      <Heading as="h3" tone="muted">
        Muted
      </Heading>
      <Heading as="h3" tone="subtle">
        Subtle
      </Heading>
    </>
  );
}

export function Semantics() {
  return (
    <>
      <Heading as="h3" size="sm">
        Rendered as h3
      </Heading>
      <Heading asChild size="sm" tone="muted">
        <h4>Wrapping an existing h4</h4>
      </Heading>
    </>
  );
}
