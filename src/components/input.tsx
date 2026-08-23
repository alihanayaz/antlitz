import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";
import { fieldBase, radius } from "./variants";

const inputVariants = cva(
  [
    ...fieldBase,
    "placeholder:text-foreground-subtle",
    "disabled:opacity-50",
    "file:text-foreground file:mr-3 file:border-0 file:bg-transparent file:text-sm file:font-medium",
    "[&::-webkit-search-cancel-button]:appearance-none",
  ],
  {
    variants: {
      variant: {
        outline: "border-border",
        soft: "bg-muted",
        plain: "bg-transparent",
      },
      size: {
        sm: "px-2.5 py-0.5 md:py-1",
        md: "px-3 py-1.5 md:py-2",
        lg: "px-3.5 py-2.5 md:py-3",
      },
      radius,
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      radius: "none",
    },
  },
);

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> &
  VariantProps<typeof inputVariants> & {
    ref?: React.Ref<HTMLInputElement>;
  };

export function Input({
  variant,
  size,
  radius,
  ref,
  className,
  ...props
}: InputProps) {
  return (
    <input
      ref={ref}
      className={cn(inputVariants({ variant, size, radius }), className)}
      {...props}
    />
  );
}
