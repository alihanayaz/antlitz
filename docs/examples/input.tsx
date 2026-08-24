import { Button, Input } from "antlitz";
import { RADII } from "./shared";

export function Variants() {
  return (
    <>
      <Input placeholder="Outline" />
      <Input variant="soft" placeholder="Soft" />
      <Input variant="plain" placeholder="Plain" />
    </>
  );
}

export function Sizes() {
  return (
    <>
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </>
  );
}

export function Radius() {
  return RADII.map((radius) => (
    <Input key={radius} radius={radius} placeholder={radius} />
  ));
}

export function States() {
  return (
    <>
      <Input disabled placeholder="Disabled" />
      <Input readOnly defaultValue="Read-only" />
      <Input aria-invalid defaultValue="Invalid" />
      <Input variant="soft" aria-invalid defaultValue="Invalid soft" />
    </>
  );
}

export function Types() {
  return (
    <>
      <Input type="email" placeholder="you@example.com" />
      <Input type="password" defaultValue="password" />
      <Input type="search" placeholder="Search" />
      <Input type="file" />
      <Input type="date" />
      <Input type="number" defaultValue="42" />
    </>
  );
}

export function Composition() {
  return (
    <div className="flex w-full max-w-md items-start gap-2">
      <Input type="search" placeholder="Search" />
      <Button>Search</Button>
    </div>
  );
}
