import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib";
import { radius, tone } from "./variants";

const codeVariants = cva("font-mono text-[0.875em] wrap-break-word", {
  variants: {
    variant: {
      soft: "bg-muted",
      outline: "border-border border",
      plain: "bg-transparent",
    },
    size: {
      sm: "px-1 py-0.5",
      md: "px-1.5 py-0.5",
      lg: "px-2 py-1",
    },
    radius,
    tone,
  },
  defaultVariants: {
    variant: "soft",
    size: "md",
    radius: "none",
    tone: "base",
  },
});

export type CodeProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof codeVariants> & {
    asChild?: boolean;
    ref?: React.Ref<HTMLElement>;
  };

export function Code({
  asChild = false,
  variant,
  size,
  radius,
  tone,
  ref,
  className,
  ...props
}: CodeProps) {
  const Comp = asChild ? Slot : "code";

  return (
    <Comp
      ref={ref}
      className={cn(codeVariants({ variant, size, radius, tone }), className)}
      {...props}
    />
  );
}
