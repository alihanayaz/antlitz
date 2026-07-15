import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/cn.js";

const headingVariants = cva("tracking-tight text-balance", {
  variants: {
    size: {
      xs: "text-lg lg:text-xl",
      sm: "text-xl lg:text-2xl",
      md: "text-2xl lg:text-3xl",
      lg: "text-3xl lg:text-4xl",
      xl: "text-4xl lg:text-5xl",
    },
    weight: {
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
    tone: {
      base: "text-foreground",
      muted: "text-foreground-muted",
      subtle: "text-foreground-subtle",
    },
  },
  defaultVariants: {
    size: "md",
    weight: "semibold",
    tone: "base",
  },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps
  extends
    React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingTag;
  asChild?: boolean;
  ref?: React.Ref<HTMLHeadingElement>;
}

export function Heading({
  as = "h2",
  asChild = false,
  size,
  weight,
  tone,
  ref,
  className,
  ...props
}: HeadingProps) {
  const Comp = asChild ? Slot : as;

  return (
    <Comp
      ref={ref}
      className={cn(headingVariants({ size, weight, tone }), className)}
      {...props}
    />
  );
}
