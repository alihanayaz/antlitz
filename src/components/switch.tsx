import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";
import { toggleBase, toggleWrapper, type ToggleInputProps } from "./toggle";

const switchVariants = cva(
  [
    ...toggleBase,
    "bg-muted rounded-full",
    "checked:bg-primary",
    "aria-invalid:checked:bg-danger",
  ],
  {
    variants: {
      size: {
        sm: "h-4 w-7",
        md: "h-5 w-9",
        lg: "h-6 w-11",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const thumbVariants = cva(
  [
    "pointer-events-none absolute top-0.5 left-0.5 rounded-full",
    "bg-foreground-muted peer-checked:bg-primary-foreground",
    "peer-aria-invalid:peer-checked:bg-danger-foreground",
    "transition-[background-color,translate]",
  ],
  {
    variants: {
      size: {
        sm: "size-3 peer-checked:translate-x-3",
        md: "size-4 peer-checked:translate-x-4",
        lg: "size-5 peer-checked:translate-x-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type SwitchProps = ToggleInputProps &
  VariantProps<typeof switchVariants> & {
    ref?: React.Ref<HTMLInputElement>;
  };

export function Switch({ size, ref, className, ...props }: SwitchProps) {
  return (
    <span className={toggleWrapper}>
      <input
        ref={ref}
        type="checkbox"
        role="switch"
        className={cn(switchVariants({ size }), className)}
        {...props}
      />
      <span className={thumbVariants({ size })} />
    </span>
  );
}
