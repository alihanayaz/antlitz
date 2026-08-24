import { Checkbox, Field, Fieldset, Radio } from "antlitz";

export function Basic() {
  return (
    <Fieldset
      legend="Visibility"
      description="Only affects new posts."
      className="w-full max-w-xs"
    >
      <Field orientation="horizontal" label="Public">
        <Radio name="visibility" value="public" defaultChecked />
      </Field>
      <Field orientation="horizontal" label="Private">
        <Radio name="visibility" value="private" />
      </Field>
    </Fieldset>
  );
}

export function Orientation() {
  return (
    <Fieldset legend="Density" orientation="horizontal" className="w-full">
      <Field orientation="horizontal" label="Compact">
        <Radio name="density" value="compact" defaultChecked />
      </Field>
      <Field orientation="horizontal" label="Cosy">
        <Radio name="density" value="cosy" />
      </Field>
      <Field orientation="horizontal" label="Roomy">
        <Radio name="density" value="roomy" />
      </Field>
    </Fieldset>
  );
}

export function Validation() {
  return (
    <Fieldset
      legend="Pick at least one"
      required
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

export function Disabled() {
  return (
    <Fieldset
      legend="Delivery speed"
      description="Unavailable for your region."
      disabled
      className="w-full max-w-xs"
    >
      <Field orientation="horizontal" label="Standard">
        <Radio name="speed" value="standard" defaultChecked />
      </Field>
      <Field orientation="horizontal" label="Express">
        <Radio name="speed" value="express" />
      </Field>
    </Fieldset>
  );
}
