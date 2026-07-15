import type { ReactNode, SVGProps } from "react";
import {
  Button,
  Heading,
  Hyperlink,
  Icon,
  Img,
  Skeleton,
  SpinnerIcon,
  Text,
} from "antlitz";

function Mark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props}>
      <rect x="4" y="4" width="16" height="16" />
    </svg>
  );
}

function PlusPath() {
  return <path d="M12 5v14M5 12h14" />;
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-6">
      <Heading
        as="h2"
        size="xs"
        weight="semibold"
        tone="subtle"
        className="border-border border-b pb-2 font-mono tracking-widest uppercase"
      >
        {title}
      </Heading>
      <div className="flex flex-col gap-6">{children}</div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <Text
        size="xs"
        tone="subtle"
        className="font-mono tracking-wide uppercase"
      >
        {label}
      </Text>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-3">
        {children}
      </div>
    </div>
  );
}

function TypographySection() {
  return (
    <Section title="Typography">
      <Row label="Semantic Hierarchy">
        <Heading as="h1" size="sm">
          Heading one
        </Heading>
        <Heading as="h2" size="sm">
          Heading two
        </Heading>
        <Heading as="h3" size="sm">
          Heading three
        </Heading>
        <Heading as="h4" size="sm">
          Heading four
        </Heading>
        <Heading as="h5" size="sm">
          Heading five
        </Heading>
        <Heading as="h6" size="sm">
          Heading six
        </Heading>
      </Row>

      <Row label="Heading Type Scale">
        <Heading size="xs">Extra small</Heading>
        <Heading size="sm">Small</Heading>
        <Heading size="md">Medium</Heading>
        <Heading size="lg">Large</Heading>
        <Heading size="xl">Extra large</Heading>
      </Row>

      <Row label="Heading Font Weight">
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
      </Row>

      <Row label="Heading Semantic Tone">
        <Heading as="h3" tone="base">
          Base
        </Heading>
        <Heading as="h3" tone="muted">
          Muted
        </Heading>
        <Heading as="h3" tone="subtle">
          Subtle
        </Heading>
      </Row>

      <Row label="Polymorphism">
        <Heading asChild size="sm" tone="muted">
          <h2>Wrapping a native heading</h2>
        </Heading>
        <Text asChild size="sm" tone="muted">
          <time dateTime="2026-07-15">July 15, 2026</time>
        </Text>
      </Row>

      <Text className="max-w-prose">
        Body copy sets the reading rhythm with{" "}
        <Text as="span" weight="semibold">
          semibold emphasis
        </Text>
        ,{" "}
        <Text as="span" className="italic">
          italic asides
        </Text>
        , and{" "}
        <Text
          as="code"
          size="sm"
          className="border-border bg-surface-hover border px-1.5 py-0.5 font-mono"
        >
          inline code
        </Text>
        .
      </Text>

      <Row label="Body Type Scale">
        <Text size="xs">xs</Text>
        <Text size="sm">sm</Text>
        <Text size="base">base</Text>
        <Text size="lg">lg</Text>
        <Text size="xl">xl</Text>
        <Text size="xxl">xxl</Text>
        <Text size="xxxl">xxxl</Text>
      </Row>

      <Row label="Body Font Weight">
        <Text weight="normal">Normal</Text>
        <Text weight="medium">Medium</Text>
        <Text weight="semibold">Semibold</Text>
      </Row>

      <Row label="Body Semantic Tone">
        <Text tone="base">Base</Text>
        <Text tone="muted">Muted</Text>
        <Text tone="subtle">Subtle</Text>
      </Row>
    </Section>
  );
}

function ButtonsSection() {
  return (
    <Section title="Buttons">
      <Row label="Variant">
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="link">Link</Button>
        <Button variant="plain">Plain</Button>
      </Row>

      <Row label="Size">
        <Button size="xs">XS</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="icon" variant="outline" aria-label="Add item">
          <Icon size={16}>
            <PlusPath />
          </Icon>
        </Button>
      </Row>

      <Row label="Corner Radius">
        <Button variant="outline" radius="none">
          None
        </Button>
        <Button variant="outline" radius="sm">
          Small
        </Button>
        <Button variant="outline" radius="md">
          Medium
        </Button>
        <Button variant="outline" radius="lg">
          Large
        </Button>
        <Button
          variant="outline"
          radius="full"
          size="icon"
          aria-label="Add item"
        >
          <Icon size={16}>
            <PlusPath />
          </Icon>
        </Button>
      </Row>

      <Row label="Semantic Tone">
        <Button variant="ghost" tone="base">
          Base
        </Button>
        <Button variant="ghost" tone="muted">
          Muted
        </Button>
        <Button variant="ghost" tone="subtle">
          Subtle
        </Button>
      </Row>

      <Row label="Interaction State">
        <Button loading>Saving</Button>
        <Button disabled>Disabled</Button>
        <Button variant="outline" size="icon" aria-label="Loading" loading />
      </Row>

      <Row label="Polymorphism">
        <Button variant="outline" asChild>
          <Hyperlink href="/playground" variant="plain">
            Internal
          </Hyperlink>
        </Button>
        <Button asChild>
          <Hyperlink href="https://example.com" variant="plain">
            External
          </Hyperlink>
        </Button>
      </Row>
    </Section>
  );
}

function LinksSection() {
  return (
    <Section title="Links">
      <Row label="Internal Routing">
        <Hyperlink href="/playground">Internal route</Hyperlink>
      </Row>

      <Row label="Cross-Origin Navigation">
        <Hyperlink href="https://example.com">Cross-origin reference</Hyperlink>
      </Row>

      <Row label="Protocol Exemption">
        <Hyperlink href="mailto:alihan@alihanayaz.com">Email</Hyperlink>
        <Hyperlink href="tel:+15555550123">Phone</Hyperlink>
      </Row>

      <Row label="Variant">
        <Hyperlink href="/playground" variant="plain">
          No underline
        </Hyperlink>
      </Row>

      <Row label="Polymorphism">
        <Button variant="outline" asChild>
          <Hyperlink href="/playground" variant="plain">
            Wrapped in Button
          </Hyperlink>
        </Button>
      </Row>

      <Text size="sm" tone="subtle" className="max-w-prose">
        Cross-origin links open in a new tab and announce it to assistive
        technology; mail and phone links never do.
      </Text>
    </Section>
  );
}

function IconsSection() {
  return (
    <Section title="Icons">
      <Row label="Variant">
        <Icon variant="stroke" size={28}>
          <circle cx="12" cy="12" r="8" />
        </Icon>
        <Icon variant="fill" size={28}>
          <circle cx="12" cy="12" r="8" />
        </Icon>
      </Row>

      <Row label="Size">
        <Icon size={16}>
          <PlusPath />
        </Icon>
        <Icon size={20}>
          <PlusPath />
        </Icon>
        <Icon size={24}>
          <PlusPath />
        </Icon>
        <Icon size={32}>
          <PlusPath />
        </Icon>
      </Row>

      <Row label="Accessibility Context">
        <Icon size={24} aria-label="Add item">
          <PlusPath />
        </Icon>
        <Button variant="ghost" size="icon" aria-label="Add item">
          <Icon size={16}>
            <PlusPath />
          </Icon>
        </Button>
      </Row>

      <Row label="Polymorphism">
        <Icon as={Mark} variant="fill" size={20} aria-label="Custom mark" />
      </Row>

      <Row label="Status Indicator">
        <SpinnerIcon size={20} />
        <Button loading>Processing</Button>
      </Row>
    </Section>
  );
}

function MediaSection() {
  return (
    <Section title="Media">
      <Row label="Successful Load">
        <Img
          src="https://picsum.photos/seed/antlitz-a/160"
          alt="Randomly generated photograph"
          width={160}
          height={160}
          className="size-32 object-cover"
        />
      </Row>

      <Row label="Error Fallback">
        <Img
          src="https://this-domain-does-not-exist.invalid/broken.jpg"
          alt="Intentionally broken source"
          fallback="https://placehold.co/160?text=Fallback"
          width={160}
          height={160}
          className="size-32 object-cover"
        />
      </Row>
    </Section>
  );
}

function SkeletonsSection() {
  return (
    <Section title="Skeletons">
      <Row label="Loading State">
        <div className="flex w-full max-w-xs flex-col gap-3">
          <Skeleton className="aspect-video" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
        </div>
      </Row>
    </Section>
  );
}

function Masthead({ mode }: { mode: "light" | "dark" }) {
  return (
    <header className="flex items-baseline justify-between gap-4">
      <div className="flex flex-col gap-2">
        <Heading as="h1" size="xl" weight="bold">
          antlitz
        </Heading>
        <Text tone="muted" className="max-w-prose">
          A minimal design system for React 19 and Tailwind CSS v4.
        </Text>
      </div>
      <Text
        size="xs"
        tone="subtle"
        className="font-mono tracking-widest uppercase"
      >
        {mode}
      </Text>
    </header>
  );
}

function Showcase({ mode }: { mode: "light" | "dark" }) {
  return (
    <div className="bg-background text-foreground flex min-h-dvh flex-col gap-14 p-8 lg:p-12">
      <Masthead mode={mode} />
      <TypographySection />
      <ButtonsSection />
      <LinksSection />
      <IconsSection />
      <MediaSection />
      <SkeletonsSection />
    </div>
  );
}

export function App() {
  return (
    <div className="divide-border grid grid-cols-1 divide-y md:grid-cols-2 md:divide-x md:divide-y-0">
      <Showcase mode="light" />
      <div className="dark">
        <Showcase mode="dark" />
      </div>
    </div>
  );
}
