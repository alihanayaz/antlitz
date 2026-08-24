import { Checkbox, Field, Fieldset } from "antlitz";
import { RADII } from "./shared";

export function Basic() {
  return (
    <Field orientation="horizontal" label="Accept the terms">
      <Checkbox defaultChecked />
    </Field>
  );
}

export function States() {
  return (
    <>
      <Checkbox aria-label="Unchecked" />
      <Checkbox defaultChecked aria-label="Checked" readOnly />
      <Checkbox indeterminate aria-label="Indeterminate" readOnly />
      <Checkbox disabled aria-label="Disabled" />
      <Checkbox
        disabled
        defaultChecked
        aria-label="Disabled checked"
        readOnly
      />
      <Checkbox aria-invalid aria-label="Invalid" />
      <Checkbox
        aria-invalid
        defaultChecked
        aria-label="Invalid checked"
        readOnly
      />
    </>
  );
}

export function Sizes() {
  return (
    <>
      <Checkbox size="sm" defaultChecked aria-label="Small" readOnly />
      <Checkbox size="md" defaultChecked aria-label="Medium" readOnly />
      <Checkbox size="lg" defaultChecked aria-label="Large" readOnly />
    </>
  );
}

export function Radius() {
  return RADII.map((radius) => (
    <Checkbox
      key={radius}
      radius={radius}
      defaultChecked
      readOnly
      aria-label={radius}
    />
  ));
}

export function Group() {
  return (
    <Fieldset
      legend="Notify me about"
      error="Select a channel to continue."
      className="w-full max-w-xs"
    >
      <Field orientation="horizontal" label="Email">
        <Checkbox name="channel" value="email" aria-invalid />
      </Field>
      <Field orientation="horizontal" label="SMS">
        <Checkbox name="channel" value="sms" aria-invalid />
      </Field>
    </Fieldset>
  );
}
