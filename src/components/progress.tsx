import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";
import { radius } from "./variants";

const progressVariants = cva(
  ["group/progress bg-muted w-full overflow-hidden"],
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
      },
      radius,
    },
    defaultVariants: {
      size: "md",
      radius: "none",
    },
  },
);

const indicatorVariants = cva([
  "bg-primary h-full",
  "transition-[inline-size]",
  "group-aria-invalid/progress:bg-danger",
]);

export type ProgressProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> &
  VariantProps<typeof progressVariants> & {
    value: number;
    max?: number;
    ref?: React.Ref<HTMLDivElement>;
  };

export function Progress({
  value,
  max = 100,
  size,
  radius,
  ref,
  className,
  ...props
}: ProgressProps) {
  const clamped = Math.min(Math.max(value, 0), max);

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={clamped}
      className={cn(progressVariants({ size, radius }), className)}
      {...props}
    >
      <div
        className={indicatorVariants()}
        style={{ inlineSize: `${(clamped / max) * 100}%` }}
      />
    </div>
  );
}
