import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";
import { fieldBase, radius } from "./variants";

const textareaVariants = cva(
  [
    ...fieldBase,
    "field-sizing-content",
    "placeholder:text-foreground-subtle",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        outline: "border-border",
        soft: "bg-muted",
        plain: "bg-transparent",
      },
      size: {
        sm: "min-h-14 px-2.5 py-0.5 md:py-1",
        md: "min-h-16 px-3 py-1.5 md:py-2",
        lg: "min-h-20 px-3.5 py-2.5 md:py-3",
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

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textareaVariants> & {
    ref?: React.Ref<HTMLTextAreaElement>;
  };

export function Textarea({
  variant,
  size,
  radius,
  ref,
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      ref={ref}
      className={cn(textareaVariants({ variant, size, radius }), className)}
      {...props}
    />
  );
}
