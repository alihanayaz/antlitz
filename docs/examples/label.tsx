import { Badge, Checkbox, Field, Input, Label } from "antlitz";

export function Basic() {
  return (
    <>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </>
  );
}

export function Tones() {
  return (
    <>
      <Label>Base</Label>
      <Label tone="muted">Muted</Label>
      <Label tone="subtle">Subtle</Label>
    </>
  );
}

export function Required() {
  return (
    <>
      <Label htmlFor="name" required>
        Full name
      </Label>
      <Input id="name" required />
    </>
  );
}

export function Composition() {
  return (
    <>
      <Label htmlFor="api-key">
        API key
        <Badge size="sm" variant="soft" radius="full">
          Required
        </Badge>
      </Label>
      <Input id="api-key" placeholder="key-…" />
    </>
  );
}

export function Disabled() {
  return (
    <>
      <Field label="Disabled input">
        <Input disabled defaultValue="Not editable" />
      </Field>
      <Field orientation="horizontal" label="Disabled checkbox">
        <Checkbox disabled />
      </Field>
    </>
  );
}
