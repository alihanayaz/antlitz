import { Separator, Text } from "antlitz";

export function Horizontal() {
  return (
    <>
      <Text size="sm">Above</Text>
      <Separator />
      <Text size="sm">Below</Text>
    </>
  );
}

export function Vertical() {
  return (
    <div className="flex h-5 items-center gap-4">
      <Text size="sm">Left</Text>
      <Separator orientation="vertical" />
      <Text size="sm">Middle</Text>
      <Separator orientation="vertical" />
      <Text size="sm">Right</Text>
    </div>
  );
}

export function Decorative() {
  return (
    <>
      <Text size="sm">Removed from the accessibility tree</Text>
      <Separator decorative />
      <Text size="sm">Purely visual</Text>
    </>
  );
}
