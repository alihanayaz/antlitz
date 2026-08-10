import type * as React from "react";

export const toggleWrapper = "relative inline-flex has-disabled:opacity-50";

export const toggleBase = [
  "peer shrink-0 appearance-none border border-border bg-transparent",
  "transition-colors",
  "checked:border-primary",
  "aria-invalid:border-danger aria-invalid:bg-danger-soft aria-invalid:outline-danger",
  "disabled:cursor-not-allowed",
];

export type ToggleInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
>;
