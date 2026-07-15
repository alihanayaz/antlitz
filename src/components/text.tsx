import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/cn.js";

const textVariants = cva("leading-relaxed", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      xxl: "text-2xl",
      xxxl: "text-3xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
    tone: {
      base: "text-foreground",
      muted: "text-foreground-muted",
      subtle: "text-foreground-subtle",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
    tone: "base",
  },
});

export type TextProps<T extends React.ElementType = "p"> = {
  as?: T;
  asChild?: boolean;
} & VariantProps<typeof textVariants> &
  React.ComponentProps<T>;

export function Text<T extends React.ElementType = "p">({
  as,
  asChild = false,
  size,
  weight,
  tone,
  className,
  ...props
}: TextProps<T>) {
  const Comp: React.ElementType = asChild ? Slot : (as ?? "p");

  return (
    <Comp
      className={cn(textVariants({ size, weight, tone }), className)}
      {...props}
    />
  );
}
