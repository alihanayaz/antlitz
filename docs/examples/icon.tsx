import { Button, Icon } from "antlitz";

export function Variants() {
  return (
    <>
      <Icon size={24}>
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon size={24} variant="fill">
        <circle cx="12" cy="12" r="9" />
      </Icon>
      <Icon size={24} variant="plain">
        <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.2" />
        <path d="M12 8v8" stroke="currentColor" strokeWidth="2" />
      </Icon>
    </>
  );
}

export function Sizes() {
  return (
    <>
      <Icon size={16}>
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon size={24}>
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon size={32}>
        <path d="M12 5v14M5 12h14" />
      </Icon>
    </>
  );
}

export function Accessibility() {
  return (
    <>
      <Button variant="outline" size="icon" aria-label="Add item">
        <Icon size={16}>
          <path d="M12 5v14M5 12h14" />
        </Icon>
      </Button>
      <Button variant="outline">
        <Icon size={16}>
          <path d="M12 5v14M5 12h14" />
        </Icon>
        Add item
      </Button>
      <Icon size={20} aria-label="Information">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4M12 16h.01" />
      </Icon>
    </>
  );
}
