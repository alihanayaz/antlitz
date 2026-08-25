import { Disclosure, Text } from "antlitz";
import { RADII } from "./shared";

const FAQ = [
  {
    question: "How long does shipping take?",
    answer: "Orders leave the warehouse within two working days.",
  },
  {
    question: "Can I return an item?",
    answer: "Anything unworn can go back within thirty days.",
  },
  {
    question: "Do you ship internationally?",
    answer: "We ship to the EU and the UK.",
  },
];

export function Basic() {
  return (
    <Disclosure summary="How long does shipping take?">
      <Text size="sm" tone="muted">
        Orders leave the warehouse within two working days.
      </Text>
    </Disclosure>
  );
}

export function Accordion() {
  return FAQ.map(({ question, answer }) => (
    <Disclosure key={question} name="faq" summary={question}>
      <Text size="sm" tone="muted">
        {answer}
      </Text>
    </Disclosure>
  ));
}

export function Variants() {
  return (
    <>
      <Disclosure summary="Outline">
        <Text size="sm" tone="muted">
          The default.
        </Text>
      </Disclosure>
      <Disclosure variant="soft" summary="Soft">
        <Text size="sm" tone="muted">
          A muted fill instead of a border.
        </Text>
      </Disclosure>
      <Disclosure variant="plain" summary="Plain">
        <Text size="sm" tone="muted">
          No chrome at all.
        </Text>
      </Disclosure>
    </>
  );
}

export function Sizes() {
  return (
    <>
      <Disclosure size="sm" summary="Small">
        <Text size="sm" tone="muted">
          Tighter padding.
        </Text>
      </Disclosure>
      <Disclosure size="md" summary="Medium">
        <Text size="sm" tone="muted">
          The default.
        </Text>
      </Disclosure>
      <Disclosure size="lg" summary="Large">
        <Text size="sm" tone="muted">
          Roomier padding.
        </Text>
      </Disclosure>
    </>
  );
}

export function Radius() {
  return RADII.map((radius) => (
    <Disclosure key={radius} radius={radius} summary={radius}>
      <Text size="sm" tone="muted">
        radius=&quot;{radius}&quot;
      </Text>
    </Disclosure>
  ));
}

export function Open() {
  return (
    <Disclosure open summary="Open on first render">
      <Text size="sm" tone="muted">
        The native `open` attribute decides the initial state, so the server
        renders it already expanded.
      </Text>
    </Disclosure>
  );
}
