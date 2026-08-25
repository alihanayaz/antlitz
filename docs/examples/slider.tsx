import { Field, Slider } from "antlitz";
import { RADII } from "./shared";

export function Basic() {
  return (
    <Field label="Volume">
      <Slider defaultValue={60} />
    </Field>
  );
}

export function Sizes() {
  return (
    <>
      <Slider size="sm" defaultValue={30} aria-label="Small" />
      <Slider size="md" defaultValue={50} aria-label="Medium" />
      <Slider size="lg" defaultValue={70} aria-label="Large" />
    </>
  );
}

export function Radius() {
  return RADII.map((radius) => (
    <Slider
      key={radius}
      radius={radius}
      defaultValue={50}
      aria-label={radius}
    />
  ));
}

export function Steps() {
  return (
    <Slider min={0} max={5} step={1} defaultValue={3} aria-label="Rating" />
  );
}

export function States() {
  return (
    <>
      <Slider defaultValue={40} aria-label="Default" />
      <Slider defaultValue={40} disabled aria-label="Disabled" />
      <Slider defaultValue={40} aria-invalid aria-label="Invalid" />
    </>
  );
}
