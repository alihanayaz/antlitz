import { Button, Spinner } from "antlitz";

export function Sizes() {
  return (
    <>
      <Spinner size={16} />
      <Spinner size={24} />
      <Spinner size={32} />
    </>
  );
}

export function InContext() {
  return (
    <>
      <Button loading>Saving</Button>
      <Button variant="outline" size="icon" aria-label="Loading" loading />
      <Spinner size={20} className="text-foreground-subtle" />
    </>
  );
}
