import { Badge, Button, Card, Heading, Link, Text } from "antlitz";

const RADII = ["none", "sm", "md", "lg"] as const;

export function Variants() {
  return (
    <>
      <Card className="w-36">Outline</Card>
      <Card variant="soft" className="w-36">
        Soft
      </Card>
      <Card variant="solid" className="w-36">
        Solid
      </Card>
      <Card variant="plain" className="w-36">
        Plain
      </Card>
    </>
  );
}

export function Sizes() {
  return (
    <>
      <Card size="none" className="w-32">
        None
      </Card>
      <Card size="sm" className="w-32">
        Small
      </Card>
      <Card size="md" className="w-32">
        Medium
      </Card>
      <Card size="lg" className="w-32">
        Large
      </Card>
    </>
  );
}

export function Radius() {
  return RADII.map((radius) => (
    <Card key={radius} radius={radius} className="w-32">
      {radius}
    </Card>
  ));
}

export function Tones() {
  return (
    <>
      <Card tone="base" className="w-32">
        Base
      </Card>
      <Card tone="muted" className="w-32">
        Muted
      </Card>
      <Card tone="subtle" className="w-32">
        Subtle
      </Card>
    </>
  );
}

export function Interactive() {
  return (
    <Card asChild interactive className="w-full max-w-xs">
      <Link href="/components/card" variant="plain">
        <Heading as="h3" size="xs">
          A whole card as one link
        </Heading>
        <Text size="sm" tone="muted">
          Hover and focus affordances come from `interactive`.
        </Text>
      </Link>
    </Card>
  );
}

export function Composition() {
  return (
    <Card className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <Heading as="h3" size="xs">
          Starter
        </Heading>
        <Badge size="sm" variant="soft" radius="full">
          Current
        </Badge>
      </div>
      <Text size="sm" tone="muted">
        Everything you need to publish your first site.
      </Text>
      <Button size="sm" variant="outline">
        Manage plan
      </Button>
    </Card>
  );
}
