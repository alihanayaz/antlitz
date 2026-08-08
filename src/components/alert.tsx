import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib";

const alertVariants = cva(
  [
    "relative flex w-full items-start border border-transparent text-sm leading-relaxed",
    "[&>svg]:h-[1lh]",
    "[&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground",
        soft: "bg-muted",
        outline: "border-border",
        danger: "bg-danger-soft text-danger-soft-foreground",
        success: "bg-success-soft text-success-soft-foreground",
        warning: "bg-warning-soft text-warning-soft-foreground",
        info: "bg-info-soft text-info-soft-foreground",
        plain: "bg-transparent",
      },
      size: {
        sm: "gap-2 p-3",
        md: "gap-3 p-4",
        lg: "gap-4 p-5",
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
      variant: "soft",
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

const liveRoles = {
  off: undefined,
  polite: "status",
  assertive: "alert",
} as const;

type AlertTone = VariantProps<typeof alertVariants>["tone"];

type AlertToneProps =
  | {
      variant?: "solid" | "danger" | "success" | "warning" | "info";
      tone?: never;
    }
  | { variant: "soft" | "outline" | "plain"; tone?: AlertTone };

export type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  Omit<VariantProps<typeof alertVariants>, "variant" | "tone"> &
  AlertToneProps & {
    asChild?: boolean;
    live?: keyof typeof liveRoles;
    ref?: React.Ref<HTMLDivElement>;
  };

export function Alert({
  asChild = false,
  live = "off",
  variant,
  size,
  radius,
  tone,
  role,
  ref,
  className,
  ...props
}: AlertProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      role={role ?? liveRoles[live]}
      className={cn(alertVariants({ variant, size, radius, tone }), className)}
      {...props}
    />
  );
}
