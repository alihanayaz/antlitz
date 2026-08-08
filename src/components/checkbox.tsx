"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn, setRef } from "@/lib";
import { Icon } from "./icon";

const checkboxVariants = cva(
  [
    "peer shrink-0 appearance-none border border-border bg-transparent",
    "transition-colors",
    "checked:border-primary checked:bg-primary",
    "indeterminate:border-primary indeterminate:bg-primary",
    "aria-invalid:border-danger aria-invalid:bg-danger-soft aria-invalid:outline-danger",
    "aria-invalid:checked:bg-danger aria-invalid:indeterminate:bg-danger",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      size: {
        sm: "size-3.5",
        md: "size-4",
        lg: "size-5",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
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

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> &
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
    <span className="relative inline-flex has-disabled:opacity-50">
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
