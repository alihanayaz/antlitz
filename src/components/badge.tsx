import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib";

const badgeVariants = cva(
  [
    "inline-flex w-fit shrink-0 items-center justify-center gap-1 text-xs font-medium whitespace-nowrap select-none",
    "motion-safe:transition-colors motion-safe:duration-300",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground anchor:hover:bg-primary/90",
        soft: "bg-muted anchor:hover:bg-muted-hover",
        outline: "border-border border anchor:hover:bg-muted",
        danger: "bg-danger text-danger-foreground anchor:hover:bg-danger/90",
        plain: "bg-transparent",
      },
      size: {
        sm: "px-1.5",
        md: "px-2 py-0.5",
        lg: "px-2.5 py-1",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      tone: {
        base: "text-foreground",
        muted: "text-foreground-muted",
        subtle: "text-foreground-subtle",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      radius: "none",
      tone: "base",
    },
    compoundVariants: [
      { variant: "solid", className: "text-primary-foreground" },
      { variant: "danger", className: "text-danger-foreground" },
    ],
  },
);

type BadgeTone = VariantProps<typeof badgeVariants>["tone"];

type BadgeToneProps =
  | { variant?: "solid" | "danger"; tone?: never }
  | { variant: "soft" | "outline" | "plain"; tone?: BadgeTone };

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  Omit<VariantProps<typeof badgeVariants>, "variant" | "tone"> &
  BadgeToneProps & {
    asChild?: boolean;
    ref?: React.Ref<HTMLSpanElement>;
  };

export function Badge({
  asChild = false,
  variant,
  size,
  radius,
  tone,
  ref,
  className,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      ref={ref}
      className={cn(badgeVariants({ variant, size, radius, tone }), className)}
      {...props}
    />
  );
}
