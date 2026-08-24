import { Field, Fieldset, Radio } from "antlitz";
import { RADII } from "./shared";

export function Group() {
  return (
    <Fieldset legend="Notify me about" className="w-full max-w-xs">
      <Field orientation="horizontal" label="All new messages">
        <Radio name="notify" value="all" defaultChecked />
      </Field>
      <Field orientation="horizontal" label="Direct messages only">
        <Radio name="notify" value="direct" />
      </Field>
      <Field orientation="horizontal" label="Nothing">
        <Radio name="notify" value="none" />
      </Field>
    </Fieldset>
  );
}

export function States() {
  return (
    <>
      <Radio name="states" aria-label="Unselected" />
      <Radio name="states" defaultChecked aria-label="Selected" />
      <Radio disabled aria-label="Disabled" />
      <Radio disabled defaultChecked aria-label="Disabled selected" readOnly />
      <Radio aria-invalid aria-label="Invalid" />
      <Radio
        aria-invalid
        defaultChecked
        aria-label="Invalid selected"
        readOnly
      />
    </>
  );
}

export function Sizes() {
  return (
    <>
      <Radio size="sm" defaultChecked aria-label="Small" readOnly />
      <Radio size="md" defaultChecked aria-label="Medium" readOnly />
      <Radio size="lg" defaultChecked aria-label="Large" readOnly />
    </>
  );
}

export function Radius() {
  return RADII.map((radius) => (
    <Radio
      key={radius}
      radius={radius}
      defaultChecked
      readOnly
      aria-label={radius}
    />
  ));
}
