import { Progress, Text } from "antlitz";
import { RADII } from "./shared";

export function Basic() {
  return <Progress value={40} aria-label="Upload progress" />;
}

export function Sizes() {
  return (
    <>
      <Progress size="sm" value={30} aria-label="Small" />
      <Progress size="md" value={50} aria-label="Medium" />
      <Progress size="lg" value={70} aria-label="Large" />
    </>
  );
}

export function Radius() {
  return RADII.map((radius) => (
    <Progress key={radius} radius={radius} value={60} aria-label={radius} />
  ));
}

export function Invalid() {
  return <Progress value={96} aria-invalid aria-label="Storage used" />;
}

export function Scale() {
  return (
    <>
      <Progress value={3} max={4} aria-label="Step 3 of 4" />
      <Text size="sm" tone="subtle">
        Step 3 of 4
      </Text>
    </>
  );
}

export function Labelled() {
  return (
    <>
      <Text as="span" id="quota" size="sm">
        Storage used
      </Text>
      <Progress value={62} aria-labelledby="quota" />
    </>
  );
}
