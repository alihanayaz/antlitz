import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib";

const badgeVariants = cva(
  [
    "inline-flex w-fit shrink-0 items-center justify-center gap-1 text-xs font-medium whitespace-nowrap select-none",
    "transition-colors",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground anchor:hover:bg-primary-hover",
        soft: "bg-muted anchor:hover:bg-muted-hover",
        outline: "border-border border anchor:hover:bg-muted-subtle",
        danger:
          "bg-danger-soft text-danger-soft-foreground anchor:hover:bg-danger-soft-hover",
        success:
          "bg-success-soft text-success-soft-foreground anchor:hover:bg-success-soft-hover",
        warning:
          "bg-warning-soft text-warning-soft-foreground anchor:hover:bg-warning-soft-hover",
        info: "bg-info-soft text-info-soft-foreground anchor:hover:bg-info-soft-hover",
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
      { variant: "danger", className: "text-danger-soft-foreground" },
      { variant: "success", className: "text-success-soft-foreground" },
      { variant: "warning", className: "text-warning-soft-foreground" },
      { variant: "info", className: "text-info-soft-foreground" },
    ],
  },
);

type BadgeTone = VariantProps<typeof badgeVariants>["tone"];

type BadgeToneProps =
  | {
      variant?: "solid" | "danger" | "success" | "warning" | "info";
      tone?: never;
    }
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
