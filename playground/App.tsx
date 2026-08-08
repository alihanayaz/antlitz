import type { ReactNode, SVGProps } from "react";
import {
  Alert,
  Badge,
  Button,
  Card,
  Checkbox,
  Heading,
  Icon,
  Image,
  Input,
  Label,
  Link,
  Radio,
  Separator,
  Skeleton,
  Spinner,
  Text,
  Textarea,
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

function AlertPath() {
  return (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4M12 16h.01" />
    </>
  );
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

function Row({
  label,
  align = "baseline",
  children,
}: {
  label: string;
  align?: "baseline" | "center";
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <Text
        size="xs"
        tone="subtle"
        className="font-mono tracking-wide uppercase"
      >
        {label}
      </Text>
      <div
        className={`flex flex-wrap gap-x-4 gap-y-3 ${align === "center" ? "items-center" : "items-baseline"}`}
      >
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
          className="border-border bg-muted border px-1.5 py-0.5 font-mono"
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
      <Row label="Variant" align="center">
        <Button variant="solid">Solid</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="danger-soft">Danger Soft</Button>
        <Button variant="link">Link</Button>
        <Button variant="plain">Plain</Button>
      </Row>

      <Row label="Size" align="center">
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

      <Row label="Corner Radius" align="center">
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

      <Row label="Semantic Tone" align="center">
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

      <Row label="Interaction State" align="center">
        <Button loading>Saving</Button>
        <Button disabled>Disabled</Button>
        <Button variant="outline" size="icon" aria-label="Loading" loading />
      </Row>

      <Row label="Polymorphism" align="center">
        <Button variant="outline" asChild>
          <Link href="/playground" variant="plain">
            Internal
          </Link>
        </Button>
        <Button asChild>
          <Link href="https://example.com" variant="plain">
            External
          </Link>
        </Button>
      </Row>
    </Section>
  );
}

function BadgesSection() {
  return (
    <Section title="Badges">
      <Row label="Variant" align="center">
        <Badge variant="solid">Solid</Badge>
        <Badge variant="soft">Soft</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="plain">Plain</Badge>
      </Row>

      <Row label="Size" align="center">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </Row>

      <Row label="Corner Radius" align="center">
        <Badge variant="outline" radius="none">
          None
        </Badge>
        <Badge variant="outline" radius="sm">
          Small
        </Badge>
        <Badge variant="outline" radius="md">
          Medium
        </Badge>
        <Badge variant="outline" radius="lg">
          Large
        </Badge>
        <Badge variant="outline" radius="full">
          Full
        </Badge>
      </Row>

      <Row label="Semantic Tone" align="center">
        <Badge variant="outline" tone="base">
          Base
        </Badge>
        <Badge variant="outline" tone="muted">
          Muted
        </Badge>
        <Badge variant="outline" tone="subtle">
          Subtle
        </Badge>
      </Row>

      <Row label="Composition" align="center">
        <Badge variant="soft" radius="full">
          <Icon size={12}>
            <PlusPath />
          </Icon>
          With icon
        </Badge>
        <Badge variant="outline">
          <Spinner size={12} />
          Syncing
        </Badge>
      </Row>

      <Row label="Polymorphism" align="center">
        <Badge asChild>
          <Link href="/playground" variant="plain">
            Solid
          </Link>
        </Badge>
        <Badge variant="soft" asChild>
          <Link href="/playground" variant="plain">
            Soft
          </Link>
        </Badge>
        <Badge variant="outline" asChild>
          <Link href="https://example.com" variant="plain">
            Outline
          </Link>
        </Badge>
        <Badge variant="danger" asChild>
          <Link href="/playground" variant="plain">
            Danger
          </Link>
        </Badge>
        <Badge variant="success" asChild>
          <Link href="/playground" variant="plain">
            Success
          </Link>
        </Badge>
        <Badge variant="warning" asChild>
          <Link href="/playground" variant="plain">
            Warning
          </Link>
        </Badge>
        <Badge variant="info" asChild>
          <Link href="/playground" variant="plain">
            Info
          </Link>
        </Badge>
      </Row>

      <Text size="sm" tone="subtle" className="max-w-prose">
        Badges render as a span by default and stay inert; hover feedback only
        applies when composed onto an anchor.
      </Text>
    </Section>
  );
}

function AlertsSection() {
  return (
    <Section title="Alerts">
      <Row label="Variant">
        <Alert variant="solid">Solid</Alert>
        <Alert variant="soft">Soft</Alert>
        <Alert variant="outline">Outline</Alert>
        <Alert variant="danger">Danger</Alert>
        <Alert variant="success">Success</Alert>
        <Alert variant="warning">Warning</Alert>
        <Alert variant="info">Info</Alert>
        <Alert variant="plain">Plain</Alert>
      </Row>

      <Row label="Size">
        <Alert size="sm">Small</Alert>
        <Alert size="md">Medium</Alert>
        <Alert size="lg">Large</Alert>
      </Row>

      <Row label="Corner Radius">
        <Alert variant="outline" radius="none">
          None
        </Alert>
        <Alert variant="outline" radius="sm">
          Small
        </Alert>
        <Alert variant="outline" radius="md">
          Medium
        </Alert>
        <Alert variant="outline" radius="lg">
          Large
        </Alert>
      </Row>

      <Row label="Semantic Tone">
        <Alert variant="outline" tone="base">
          Base
        </Alert>
        <Alert variant="outline" tone="muted">
          Muted
        </Alert>
        <Alert variant="outline" tone="subtle">
          Subtle
        </Alert>
      </Row>

      <Row label="Composition">
        <Alert variant="danger" radius="sm">
          <Icon size={16}>
            <AlertPath />
          </Icon>
          <div className="flex flex-col gap-1">
            <Text as="span" size="sm" weight="semibold">
              Payment failed
            </Text>
            <Text as="span" size="sm">
              Your card was declined. Update your billing details and try again.
            </Text>
          </div>
        </Alert>

        <Alert variant="outline" radius="sm">
          <Spinner size={16} />
          <div className="flex flex-col gap-1">
            <Text as="span" size="sm" weight="semibold">
              Deploying
            </Text>
            <Text as="span" size="sm" tone="muted">
              This usually takes about a minute.
            </Text>
          </div>
        </Alert>
      </Row>

      <Row label="Live Region">
        <Alert variant="info" live="polite">
          Announced politely (role=status)
        </Alert>
        <Alert variant="danger" live="assertive">
          Announced immediately (role=alert)
        </Alert>
      </Row>

      <Text size="sm" tone="subtle" className="max-w-prose">
        Alerts are silent to assistive tech by default. Opt into announcement
        with <code className="font-mono">live</code> only when the alert appears
        in response to something the user did.
      </Text>
    </Section>
  );
}

function CardsSection() {
  return (
    <Section title="Cards">
      <Row label="Variant">
        <Card variant="solid" className="w-52">
          Solid
        </Card>
        <Card variant="soft" className="w-52">
          Soft
        </Card>
        <Card variant="outline" className="w-52">
          Outline
        </Card>
        <Card variant="plain" className="w-52">
          Plain
        </Card>
      </Row>

      <Row label="Size">
        <Card size="none" className="w-52">
          None
        </Card>
        <Card size="sm" className="w-52">
          Small
        </Card>
        <Card size="md" className="w-52">
          Medium
        </Card>
        <Card size="lg" className="w-52">
          Large
        </Card>
      </Row>

      <Row label="Corner Radius">
        <Card radius="none" className="w-40">
          None
        </Card>
        <Card radius="sm" className="w-40">
          Small
        </Card>
        <Card radius="md" className="w-40">
          Medium
        </Card>
        <Card radius="lg" className="w-40">
          Large
        </Card>
      </Row>

      <Row label="Semantic Tone">
        <Card tone="base" className="w-40">
          Base
        </Card>
        <Card tone="muted" className="w-40">
          Muted
        </Card>
        <Card tone="subtle" className="w-40">
          Subtle
        </Card>
      </Row>

      <Row label="Interactive">
        <Card interactive variant="outline" className="w-52">
          Outline
        </Card>
        <Card interactive variant="soft" className="w-52">
          Soft
        </Card>
        <Card interactive variant="solid" className="w-52">
          Solid
        </Card>
      </Row>

      <Row label="Composition">
        <Card radius="sm" size="none" className="w-64">
          <Skeleton className="h-32 rounded-none" />
          <div className="flex flex-col gap-2 p-4">
            <Heading as="h3" size="xs">
              A bounded surface
            </Heading>
            <Text size="sm" tone="muted">
              Cards compose with the other atoms rather than shipping their own
              header and footer parts.
            </Text>
            <div className="flex gap-2 pt-1">
              <Badge variant="soft" radius="full">
                Draft
              </Badge>
              <Badge variant="outline" radius="full">
                2 min
              </Badge>
            </div>
          </div>
        </Card>
      </Row>

      <Row label="Polymorphism">
        <Card interactive asChild className="w-64">
          <Link href="/playground" variant="plain">
            <Heading as="h3" size="xs">
              Rendered as an anchor
            </Heading>
            <Text size="sm" tone="muted">
              The whole card becomes the link target.
            </Text>
          </Link>
        </Card>
      </Row>

      <Text size="sm" tone="subtle" className="max-w-prose">
        Cards are inert by default;{" "}
        <code className="font-mono">interactive</code> adds the pointer cursor
        and a hover fill matched to the variant.
      </Text>
    </Section>
  );
}

function LinksSection() {
  return (
    <Section title="Links">
      <Row label="Internal Routing">
        <Link href="/playground">Internal route</Link>
      </Row>

      <Row label="Cross-Origin Navigation">
        <Link href="https://example.com">Cross-origin reference</Link>
      </Row>

      <Row label="Protocol Exemption">
        <Link href="mailto:alihan@alihanayaz.com">Email</Link>
        <Link href="tel:+15555550123">Phone</Link>
      </Row>

      <Row label="Variant">
        <Link href="/playground" variant="plain">
          No underline
        </Link>
      </Row>

      <Row label="Polymorphism" align="center">
        <Button variant="outline" asChild>
          <Link href="/playground" variant="plain">
            Wrapped in Button
          </Link>
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

      <Row label="Accessibility Context" align="center">
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

      <Row label="Status Indicator" align="center">
        <Spinner size={20} />
        <Button loading>Processing</Button>
      </Row>
    </Section>
  );
}

function MediaSection() {
  return (
    <Section title="Media">
      <Row label="Successful Load">
        <Image
          src="https://picsum.photos/seed/antlitz/160"
          alt="Randomly generated photograph"
          width={160}
          height={160}
          className="size-32 object-cover"
        />
      </Row>

      <Row label="Error Fallback">
        <Image
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

function InputsSection() {
  return (
    <Section title="Inputs">
      <Row label="Variant">
        <div className="grid w-full max-w-2xl items-start gap-3 md:grid-cols-3">
          <Input placeholder="Outline" />
          <Input variant="soft" placeholder="Soft" />
          <Input variant="plain" placeholder="Plain" />
        </div>
      </Row>

      <Row label="Size">
        <div className="grid w-full max-w-2xl items-start gap-3 md:grid-cols-3">
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium" />
          <Input size="lg" placeholder="Large" />
        </div>
      </Row>

      <Row label="Corner Radius">
        <div className="grid w-full max-w-2xl items-start gap-3 md:grid-cols-3">
          <Input radius="none" placeholder="None" />
          <Input radius="md" placeholder="Medium" />
          <Input radius="full" placeholder="Full" />
        </div>
      </Row>

      <Row label="Validation State">
        <div className="grid w-full max-w-2xl items-start gap-3 md:grid-cols-3">
          <Input aria-invalid defaultValue="Outline" />
          <Input variant="soft" aria-invalid defaultValue="Soft" />
          <Input variant="plain" aria-invalid defaultValue="Plain" />
        </div>
      </Row>

      <Row label="Interaction State">
        <div className="grid w-full max-w-2xl items-start gap-3 md:grid-cols-3">
          <Input disabled placeholder="Disabled" />
          <Input readOnly defaultValue="Read-only" />
          <Input variant="soft" disabled defaultValue="Disabled" />
        </div>
      </Row>

      <Row label="Input Type">
        <div className="grid w-full max-w-2xl items-start gap-3 md:grid-cols-3">
          <Input type="email" placeholder="you@example.com" />
          <Input type="password" defaultValue="password" />
          <Input type="file" />
        </div>
      </Row>

      <Row label="Composition">
        <div className="flex w-full max-w-md items-start gap-2">
          <Input type="search" placeholder="Search" />
          <Button>Search</Button>
        </div>
      </Row>
    </Section>
  );
}

function CheckboxesSection() {
  return (
    <Section title="Checkboxes">
      <Row label="Selection State" align="center">
        <Checkbox aria-label="Unchecked" />
        <Checkbox defaultChecked aria-label="Checked" />
        <Checkbox indeterminate aria-label="Indeterminate" />
      </Row>

      <Row label="Size" align="center">
        <Checkbox size="sm" defaultChecked aria-label="Small" />
        <Checkbox size="md" defaultChecked aria-label="Medium" />
        <Checkbox size="lg" defaultChecked aria-label="Large" />
      </Row>

      <Row label="Corner Radius" align="center">
        <Checkbox radius="none" defaultChecked aria-label="None" />
        <Checkbox radius="sm" defaultChecked aria-label="Small" />
        <Checkbox radius="md" defaultChecked aria-label="Medium" />
        <Checkbox radius="full" defaultChecked aria-label="Full" />
      </Row>

      <Row label="Interaction State" align="center">
        <Checkbox disabled aria-label="Disabled" />
        <Checkbox disabled defaultChecked aria-label="Disabled checked" />
        <Checkbox disabled indeterminate aria-label="Disabled indeterminate" />
      </Row>

      <Row label="Validation State" align="center">
        <Checkbox aria-invalid aria-label="Invalid" />
        <Checkbox aria-invalid defaultChecked aria-label="Invalid checked" />
      </Row>

      <Row label="Field Association" align="center">
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </Row>

      <Row label="Composition">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Checkbox id="all" indeterminate />
            <Label htmlFor="all">Select all</Label>
          </div>
          <div className="flex flex-col gap-2 pl-6">
            <div className="flex items-center gap-2">
              <Checkbox id="one" defaultChecked />
              <Label htmlFor="one" tone="muted">
                First item
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="two" />
              <Label htmlFor="two" tone="muted">
                Second item
              </Label>
            </div>
          </div>
        </div>
      </Row>
    </Section>
  );
}

function RadiosSection() {
  return (
    <Section title="Radios">
      <Row label="Selection State" align="center">
        <Radio name="state" aria-label="Unselected" />
        <Radio name="state" defaultChecked aria-label="Selected" />
      </Row>

      <Row label="Size" align="center">
        <Radio size="sm" defaultChecked aria-label="Small" readOnly />
        <Radio size="md" defaultChecked aria-label="Medium" readOnly />
        <Radio size="lg" defaultChecked aria-label="Large" readOnly />
      </Row>

      <Row label="Corner Radius" align="center">
        <Radio radius="full" defaultChecked aria-label="Full" readOnly />
        <Radio radius="md" defaultChecked aria-label="Medium" readOnly />
        <Radio radius="none" defaultChecked aria-label="None" readOnly />
      </Row>

      <Row label="Interaction State" align="center">
        <Radio disabled aria-label="Disabled" />
        <Radio disabled defaultChecked aria-label="Disabled selected" readOnly />
      </Row>

      <Row label="Validation State" align="center">
        <Radio aria-invalid aria-label="Invalid" />
        <Radio aria-invalid defaultChecked aria-label="Invalid selected" readOnly />
      </Row>

      <Row label="Composition">
        <fieldset className="flex flex-col gap-2">
          <Text asChild size="sm" weight="medium">
            <legend className="mb-1">Delivery speed</legend>
          </Text>
          {[
            ["standard", "Standard", "Arrives in 5–7 days"],
            ["express", "Express", "Arrives in 2 days"],
            ["overnight", "Overnight", "Arrives tomorrow"],
          ].map(([id, title, hint], index) => (
            <div key={id} className="flex items-center gap-2">
              <Radio id={id} name="speed" defaultChecked={index === 0} />
              <Label htmlFor={id}>
                {title}
                <Text as="span" size="xs" tone="subtle">
                  {hint}
                </Text>
              </Label>
            </div>
          ))}
        </fieldset>
      </Row>
    </Section>
  );
}

function TextareasSection() {
  return (
    <Section title="Textareas">
      <Row label="Variant">
        <div className="grid w-full max-w-2xl items-start gap-3 md:grid-cols-3">
          <Textarea placeholder="Outline" />
          <Textarea variant="soft" placeholder="Soft" />
          <Textarea variant="plain" placeholder="Plain" />
        </div>
      </Row>

      <Row label="Size">
        <div className="grid w-full max-w-2xl items-start gap-3 md:grid-cols-3">
          <Textarea size="sm" placeholder="Small" />
          <Textarea size="md" placeholder="Medium" />
          <Textarea size="lg" placeholder="Large" />
        </div>
      </Row>

      <Row label="Corner Radius">
        <div className="grid w-full max-w-2xl items-start gap-3 md:grid-cols-3">
          <Textarea radius="none" placeholder="None" />
          <Textarea radius="md" placeholder="Medium" />
          <Textarea radius="lg" placeholder="Large" />
        </div>
      </Row>

      <Row label="Interaction State">
        <div className="grid w-full max-w-2xl items-start gap-3 md:grid-cols-3">
          <Textarea aria-invalid defaultValue="Invalid" />
          <Textarea disabled placeholder="Disabled" />
          <Textarea readOnly defaultValue="Read-only" />
        </div>
      </Row>

      <Row label="Content Sizing">
        <div className="flex w-full max-w-xs flex-col gap-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            defaultValue={"Type here and the box grows.\nNo rows attribute."}
          />
        </div>
      </Row>

      <Row label="Fixed Sizing">
        <div className="w-full max-w-xs">
          <Textarea
            rows={2}
            className="field-sizing-fixed resize-none"
            defaultValue="Cannot be resized or auto-grown."
          />
        </div>
      </Row>
    </Section>
  );
}

function LabelsSection() {
  return (
    <Section title="Labels">
      <Row label="Field Association">
        <div className="flex w-full max-w-xs flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
      </Row>

      <Row label="Semantic Tone">
        <div className="flex flex-col gap-3">
          <Label>Base</Label>
          <Label tone="muted">Muted</Label>
          <Label tone="subtle">Subtle</Label>
        </div>
      </Row>

      <Row label="Composition">
        <div className="flex w-full max-w-xs flex-col gap-2">
          <Label htmlFor="api-key">
            API key
            <Badge size="sm" variant="soft" radius="full">
              Required
            </Badge>
          </Label>
          <Input id="api-key" placeholder="key-…" />
        </div>
      </Row>

      <Row label="Group Disabled State">
        <div
          className="group flex w-full max-w-xs flex-col gap-2"
          data-disabled="true"
        >
          <Label htmlFor="locked">Locked</Label>
          <Input id="locked" disabled defaultValue="Not editable" />
        </div>
      </Row>

      <Row label="Peer Disabled State" align="center">
        <div className="flex items-center gap-2">
          <input id="peer-demo" type="checkbox" disabled className="peer" />
          <Label htmlFor="peer-demo">Disabled checkbox label</Label>
        </div>
      </Row>
    </Section>
  );
}

function SeparatorsSection() {
  return (
    <Section title="Separators">
      <Row label="Horizontal">
        <div className="flex w-full max-w-xs flex-col gap-4">
          <Text size="sm">Above the rule</Text>
          <Separator />
          <Text size="sm">Below the rule</Text>
        </div>
      </Row>

      <Row label="Vertical" align="center">
        <div className="flex h-6 items-center gap-4">
          <Text size="sm">One</Text>
          <Separator orientation="vertical" />
          <Text size="sm">Two</Text>
          <Separator orientation="vertical" />
          <Text size="sm">Three</Text>
        </div>
      </Row>

      <Row label="Decorative">
        <div className="flex w-full max-w-xs flex-col gap-4">
          <Text size="sm" tone="muted">
            Hidden from assistive tech
          </Text>
          <Separator decorative />
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
    <div className="bg-background text-foreground flex min-h-dvh flex-col gap-12 p-8 lg:p-12">
      <Masthead mode={mode} />
      <TypographySection />
      <ButtonsSection />
      <BadgesSection />
      <AlertsSection />
      <CardsSection />
      <LinksSection />
      <IconsSection />
      <MediaSection />
      <InputsSection />
      <TextareasSection />
      <CheckboxesSection />
      <RadiosSection />
      <LabelsSection />
      <SeparatorsSection />
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
