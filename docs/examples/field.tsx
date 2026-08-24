import { Checkbox, Field, Input, Select, Switch, Textarea } from "antlitz";

export function Basic() {
  return (
    <>
      <Field label="Email">
        <Input type="email" placeholder="you@example.com" />
      </Field>
      <Field label="Display name" description="Shown next to your comments.">
        <Input defaultValue="alihan" />
      </Field>
    </>
  );
}

export function Validation() {
  return (
    <>
      <Field label="Email" error="Enter a valid email address.">
        <Input type="email" defaultValue="not-an-email" />
      </Field>
      <Field
        label="Bio"
        description="A short introduction."
        error="Must be under 200 characters."
      >
        <Textarea defaultValue="…" />
      </Field>
    </>
  );
}

export function Required() {
  return (
    <>
      <Field label="Full name" description="As it appears on your ID.">
        <Input required defaultValue="Alihan" />
      </Field>
      <Field label="Nickname" description="Optional.">
        <Input />
      </Field>
    </>
  );
}

export function Orientation() {
  return (
    <>
      <Field label="Timezone">
        <Select defaultValue="Europe/Berlin">
          <option>Europe/Berlin</option>
          <option>Asia/Tokyo</option>
        </Select>
      </Field>
      <Field orientation="horizontal" label="Subscribe to updates">
        <Checkbox defaultChecked />
      </Field>
      <Field
        orientation="horizontal"
        label="Public profile"
        description="Anyone can see your activity."
      >
        <Switch />
      </Field>
    </>
  );
}
