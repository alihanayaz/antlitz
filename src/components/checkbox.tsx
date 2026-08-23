"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn, setRef } from "@/lib";
import { Icon } from "./icon";
import { toggleBase, toggleWrapper, type ToggleInputProps } from "./toggle";
import { radius } from "./variants";

const checkboxVariants = cva(
  [
    ...toggleBase,
    "checked:bg-primary",
    "indeterminate:border-primary indeterminate:bg-primary",
    "aria-invalid:checked:bg-danger aria-invalid:indeterminate:bg-danger",
  ],
  {
    variants: {
      size: {
        sm: "size-3.5",
        md: "size-4",
        lg: "size-5",
      },
      radius,
    },
    defaultVariants: {
      size: "md",
      radius: "none",
    },
  },
);

const indicator = [
  "text-primary-foreground peer-aria-invalid:text-danger-foreground",
  "pointer-events-none absolute inset-0 m-auto size-[65%]",
  "transition-opacity opacity-0 peer-checked:opacity-100 peer-indeterminate:opacity-100",
].join(" ");

export type CheckboxProps = ToggleInputProps &
  VariantProps<typeof checkboxVariants> & {
    indeterminate?: boolean;
    ref?: React.Ref<HTMLInputElement>;
  };

export function Checkbox({
  size,
  radius,
  indeterminate = false,
  ref,
  className,
  ...props
}: CheckboxProps) {
  const assignRef = React.useCallback(
    (node: HTMLInputElement | null) => {
      if (node) node.indeterminate = indeterminate;
      setRef(ref, node);
    },
    [ref, indeterminate],
  );

  return (
    <span className={toggleWrapper}>
      <input
        ref={assignRef}
        type="checkbox"
        className={cn(checkboxVariants({ size, radius }), className)}
        {...props}
      />
      <Icon className={indicator}>
        <path d={indeterminate ? "M5 12h14" : "M20 6 9 17l-5-5"} />
      </Icon>
    </span>
  );
}
