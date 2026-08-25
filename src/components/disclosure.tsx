import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";
import { Icon } from "./icon";
import { radius } from "./variants";

const disclosureVariants = cva(
  ["group/disclosure overflow-hidden", "transition-colors"],
  {
    variants: {
      variant: {
        outline: "border-border border",
        soft: "bg-muted",
        plain: "bg-transparent",
      },
      radius,
    },
    defaultVariants: {
      variant: "outline",
      radius: "none",
    },
  },
);

const summaryVariants = cva(
  [
    "flex cursor-pointer list-none items-center justify-between font-medium select-none",
    "[&::-webkit-details-marker]:hidden",
  ],
  {
    variants: {
      size: {
        sm: "gap-2 p-3",
        md: "gap-3 p-4",
        lg: "gap-4 p-5",
      },
    },
    defaultVariants: { size: "md" },
  },
);

const contentVariants = cva("", {
  variants: {
    size: {
      sm: "px-3 pb-3",
      md: "px-4 pb-4",
      lg: "px-5 pb-5",
    },
  },
  defaultVariants: { size: "md" },
});

export type DisclosureProps = React.DetailsHTMLAttributes<HTMLDetailsElement> &
  VariantProps<typeof disclosureVariants> &
  VariantProps<typeof summaryVariants> & {
    summary: React.ReactNode;
    ref?: React.Ref<HTMLDetailsElement>;
  };

export function Disclosure({
  summary,
  variant,
  size,
  radius,
  children,
  ref,
  className,
  ...props
}: DisclosureProps) {
  return (
    <details
      ref={ref}
      className={cn(disclosureVariants({ variant, radius }), className)}
      {...props}
    >
      <summary className={summaryVariants({ size })}>
        {summary}
        <Icon
          size={16}
          className="transition-transform group-open/disclosure:rotate-180"
        >
          <path d="m6 9 6 6 6-6" />
        </Icon>
      </summary>
      <div className={contentVariants({ size })}>{children}</div>
    </details>
  );
}
