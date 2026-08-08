import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";

const labelVariants = cva(
  [
    "flex items-center gap-2 text-sm leading-none font-medium select-none",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
    "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
  ],
  {
    variants: {
      tone: {
        base: "text-foreground",
        muted: "text-foreground-muted",
        subtle: "text-foreground-subtle",
      },
    },
    defaultVariants: {
      tone: "base",
    },
  },
);

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof labelVariants> & {
    required?: boolean;
    ref?: React.Ref<HTMLLabelElement>;
  };

export function Label({
  tone,
  required = false,
  ref,
  className,
  children,
  ...props
}: LabelProps) {
  return (
    <label
      ref={ref}
      className={cn(labelVariants({ tone }), className)}
      {...props}
    >
      {children}
      {required && (
        <span aria-hidden="true" className="text-foreground-danger -ml-1">
          *
        </span>
      )}
    </label>
  );
}
