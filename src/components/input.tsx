import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";

const inputVariants = cva(
  [
    "w-full min-w-0 border border-transparent text-base md:text-sm",
    "transition-colors",
    "placeholder:text-foreground-subtle",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "aria-invalid:border-danger aria-invalid:outline-danger",
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
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
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
