import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";
import { Icon } from "./icon";

const selectVariants = cva(
  [
    "w-full min-w-0 appearance-none border border-transparent text-base md:text-sm",
    "transition-colors",
    "disabled:cursor-not-allowed",
    "aria-invalid:border-danger aria-invalid:outline-danger",
  ],
  {
    variants: {
      variant: {
        outline: "border-border",
        soft: "bg-muted",
        plain: "bg-transparent",
      },
      size: {
        sm: "py-1 pr-7 pl-2.5",
        md: "py-2 pr-8 pl-3",
        lg: "py-3 pr-9 pl-3.5",
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

const chevronVariants = cva(
  "text-foreground-subtle pointer-events-none absolute top-1/2 -translate-y-1/2",
  {
    variants: {
      size: {
        sm: "right-2.5 size-3.5",
        md: "right-3 size-4",
        lg: "right-3.5 size-4",
      },
    },
    defaultVariants: { size: "md" },
  },
);

export type SelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> &
  VariantProps<typeof selectVariants> & {
    ref?: React.Ref<HTMLSelectElement>;
  };

export function Select({
  variant,
  size,
  radius,
  ref,
  className,
  ...props
}: SelectProps) {
  return (
    <span className="relative inline-flex w-full has-disabled:opacity-50">
      <select
        ref={ref}
        className={cn(selectVariants({ variant, size, radius }), className)}
        {...props}
      />
      {!props.multiple && (
        <Icon className={chevronVariants({ size })}>
          <path d="m6 9 6 6 6-6" />
        </Icon>
      )}
    </span>
  );
}
