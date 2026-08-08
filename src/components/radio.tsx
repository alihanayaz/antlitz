import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";
import { Icon } from "./icon";

const radioVariants = cva(
  [
    "peer shrink-0 appearance-none border border-border bg-transparent",
    "transition-colors",
    "checked:border-primary",
    "aria-invalid:border-danger aria-invalid:bg-danger-soft aria-invalid:outline-danger",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      size: {
        sm: "size-3.5",
        md: "size-4",
        lg: "size-5",
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
      size: "md",
      radius: "full",
    },
  },
);

const indicator = [
  "text-primary peer-aria-invalid:text-danger",
  "pointer-events-none absolute inset-0 m-auto size-[45%]",
  "transition-opacity opacity-0 peer-checked:opacity-100",
].join(" ");

export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> &
  VariantProps<typeof radioVariants> & {
    ref?: React.Ref<HTMLInputElement>;
  };

export function Radio({ size, radius, ref, className, ...props }: RadioProps) {
  return (
    <span className="relative inline-flex has-disabled:opacity-50">
      <input
        ref={ref}
        type="radio"
        className={cn(radioVariants({ size, radius }), className)}
        {...props}
      />
      <Icon variant="fill" className={indicator}>
        <circle cx="12" cy="12" r="12" />
      </Icon>
    </span>
  );
}
