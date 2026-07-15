import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cn } from "../lib/cn.js";
import { SpinnerIcon } from "./icon.js";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 text-sm font-medium whitespace-nowrap select-none",
    "motion-safe:transition-colors motion-safe:duration-300",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-disabled:pointer-events-none aria-disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        solid: "bg-foreground text-background hover:bg-foreground-muted",
        outline:
          "border border-border hover:border-border-hover hover:bg-surface-hover",
        ghost: "hover:bg-surface-hover bg-transparent",
        danger: "bg-danger text-background hover:bg-danger-hover",
        link: "link",
        plain: "bg-transparent",
      },
      size: {
        xs: "p-1",
        sm: "p-2",
        md: "px-4 py-2",
        lg: "px-8 py-2",
        icon: "aspect-square size-10",
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
        muted: "text-foreground-muted hover:text-foreground",
        subtle: "text-foreground-subtle hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      radius: "none",
      tone: "base",
    },
    compoundVariants: [
      {
        variant: "solid",
        className: "text-background hover:text-background",
      },
      {
        variant: "danger",
        className:
          "text-background hover:text-background dark:text-foreground dark:hover:text-foreground",
      },
    ],
  },
);

type ButtonTone = VariantProps<typeof buttonVariants>["tone"];

type ButtonToneProps =
  | { variant?: "solid" | "danger"; tone?: never }
  | { variant: "outline" | "ghost" | "link" | "plain"; tone?: ButtonTone };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<VariantProps<typeof buttonVariants>, "variant" | "tone"> &
  ButtonToneProps & {
    asChild?: boolean;
    loading?: boolean;
    ref?: React.Ref<HTMLButtonElement>;
  };

export function Button({
  asChild = false,
  loading = false,
  variant,
  size,
  tone,
  radius,
  type,
  disabled,
  ref,
  className,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const isDisabled = disabled || loading;

  return (
    <Comp
      ref={ref}
      type={asChild ? type : (type ?? "button")}
      disabled={asChild ? undefined : isDisabled}
      aria-disabled={isDisabled || undefined}
      aria-busy={loading || undefined}
      data-loading={loading || undefined}
      className={cn(buttonVariants({ variant, size, radius, tone }), className)}
      {...props}
    >
      {loading && <SpinnerIcon />}
      <Slottable>{children}</Slottable>
    </Comp>
  );
}
