import { CodeBlock } from "antlitz";
import { RADII } from "./shared";

const VARIANTS = ["outline", "soft", "plain"] as const;
const SIZES = ["sm", "md", "lg"] as const;

const SOURCE = `export function Save() {
  return <Button>Save</Button>;
}`;

export function Basic() {
  return <CodeBlock>{SOURCE}</CodeBlock>;
}

export function Title() {
  return <CodeBlock title="save.tsx">{SOURCE}</CodeBlock>;
}

export function Action() {
  return (
    <CodeBlock
      title="save.tsx"
      action={
        <button type="button" className="link text-sm">
          Copy
        </button>
      }
    >
      {SOURCE}
    </CodeBlock>
  );
}

export function Variants() {
  return VARIANTS.map((variant) => (
    <CodeBlock key={variant} variant={variant} title={variant}>
      {SOURCE}
    </CodeBlock>
  ));
}

export function Sizes() {
  return SIZES.map((size) => (
    <CodeBlock key={size} size={size} title={size}>
      {SOURCE}
    </CodeBlock>
  ));
}

export function Radius() {
  return RADII.map((radius) => (
    <CodeBlock key={radius} radius={radius} title={radius}>
      {SOURCE}
    </CodeBlock>
  ));
}

export function Highlighted() {
  return (
    <CodeBlock title="save.tsx">
      <code>
        <span className="text-info-soft-foreground">export</span>
        <span> function </span>
        <span className="text-success-soft-foreground">Save</span>
        <span>() &#123; ... &#125;</span>
      </code>
    </CodeBlock>
  );
}
