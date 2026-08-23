import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";
import { Icon } from "./icon";
import { fieldBase, radius } from "./variants";

const selectVariants = cva([...fieldBase, "appearance-none"], {
  variants: {
    variant: {
      outline: "border-border",
      soft: "bg-muted",
      plain: "bg-transparent",
    },
    size: {
      sm: "py-0.5 pr-7 pl-2.5 md:py-1",
      md: "py-1.5 pr-8 pl-3 md:py-2",
      lg: "py-2.5 pr-9 pl-3.5 md:py-3",
    },
    radius,
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
    radius: "none",
  },
});

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
