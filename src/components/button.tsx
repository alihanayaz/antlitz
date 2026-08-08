import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cn } from "@/lib";
import { Spinner } from "./spinner";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 text-sm font-medium whitespace-nowrap select-none",
    "transition-colors",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-disabled:pointer-events-none aria-disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground hover:bg-primary-hover",
        soft: "bg-muted hover:bg-muted-hover",
        outline: "border border-border hover:bg-muted-subtle",
        ghost: "hover:bg-muted bg-transparent",
        danger: "bg-danger text-danger-foreground hover:bg-danger-hover",
        "danger-soft":
          "bg-danger-soft text-danger-soft-foreground hover:bg-danger-soft-hover",
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
        className: "text-primary-foreground hover:text-primary-foreground",
      },
      {
        variant: "danger",
        className: "text-danger-foreground hover:text-danger-foreground",
      },
      {
        variant: "danger-soft",
        className:
          "text-danger-soft-foreground hover:text-danger-soft-foreground",
      },
    ],
  },
);

type ButtonTone = VariantProps<typeof buttonVariants>["tone"];

type ButtonToneProps =
  | { variant?: "solid" | "danger" | "danger-soft"; tone?: never }
  | {
      variant: "soft" | "outline" | "ghost" | "link" | "plain";
      tone?: ButtonTone;
    };

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
      {loading && <Spinner size={16} />}
      <Slottable>{children}</Slottable>
    </Comp>
  );
}
