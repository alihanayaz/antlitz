import { Textarea } from "antlitz";

export function Variants() {
  return (
    <>
      <Textarea placeholder="Outline" />
      <Textarea variant="soft" placeholder="Soft" />
      <Textarea variant="plain" placeholder="Plain" />
    </>
  );
}

export function Sizes() {
  return (
    <>
      <Textarea size="sm" placeholder="Small" />
      <Textarea size="md" placeholder="Medium" />
      <Textarea size="lg" placeholder="Large" />
    </>
  );
}

export function States() {
  return (
    <>
      <Textarea disabled placeholder="Disabled" />
      <Textarea readOnly defaultValue="Read-only" />
      <Textarea aria-invalid defaultValue="Invalid" />
    </>
  );
}

export function Sizing() {
  return (
    <>
      <Textarea defaultValue="Grows with its content." />
      <Textarea
        rows={4}
        className="field-sizing-fixed"
        defaultValue="Fixed to four rows."
      />
    </>
  );
}
