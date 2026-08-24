import { Field, Select } from "antlitz";
import { RADII } from "./shared";

export function Variants() {
  return (
    <>
      {(["outline", "soft", "plain"] as const).map((variant) => (
        <Select key={variant} variant={variant} defaultValue={variant}>
          <option value={variant}>{variant}</option>
        </Select>
      ))}
    </>
  );
}

export function Sizes() {
  return (
    <>
      {(["sm", "md", "lg"] as const).map((size) => (
        <Select key={size} size={size} defaultValue={size}>
          <option value={size}>{size}</option>
        </Select>
      ))}
    </>
  );
}

export function Radius() {
  return RADII.map((radius) => (
    <Select key={radius} radius={radius} defaultValue={radius}>
      <option value={radius}>{radius}</option>
    </Select>
  ));
}

export function States() {
  return (
    <>
      <Select disabled defaultValue="a">
        <option value="a">Disabled</option>
      </Select>
      <Select aria-invalid defaultValue="a">
        <option value="a">Invalid</option>
      </Select>
      <Select multiple defaultValue={["a"]} className="h-auto">
        <option value="a">Multiple</option>
        <option value="b">No chevron</option>
      </Select>
    </>
  );
}

export function Composition() {
  return (
    <Field
      label="Timezone"
      description="Used for scheduling."
      className="w-full max-w-xs"
    >
      <Select defaultValue="Europe/Berlin">
        <option>Europe/Berlin</option>
        <option>Asia/Tokyo</option>
      </Select>
    </Field>
  );
}
