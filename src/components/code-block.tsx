import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";
import { radius } from "./variants";

const codeBlockVariants = cva("overflow-hidden", {
  variants: {
    variant: {
      outline: "border-border bg-muted-subtle border",
      soft: "bg-muted",
      plain: "bg-transparent",
    },
    radius,
  },
  defaultVariants: {
    variant: "outline",
    radius: "none",
  },
});

const headerVariants = cva(
  "border-border flex items-center gap-2 border-b font-medium",
  {
    variants: {
      size: {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-5 py-2.5 text-base",
      },
    },
    defaultVariants: { size: "md" },
  },
);

const preVariants = cva(
  [
    "overflow-x-auto border-0 bg-transparent font-mono",
    "[&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:font-mono [&_code]:text-inherit",
  ],
  {
    variants: {
      size: {
        sm: "p-3 text-xs",
        md: "p-4 text-sm",
        lg: "p-5 text-base",
      },
    },
    defaultVariants: { size: "md" },
  },
);

export type CodeBlockProps = Omit<React.ComponentProps<"pre">, "title"> &
  VariantProps<typeof codeBlockVariants> &
  VariantProps<typeof headerVariants> & {
    title?: React.ReactNode;
    action?: React.ReactNode;
    ref?: React.Ref<HTMLPreElement>;
  };

export function CodeBlock({
  title,
  action,
  variant,
  size,
  radius,
  ref,
  className,
  ...props
}: CodeBlockProps) {
  return (
    <div className={cn(codeBlockVariants({ variant, radius }), className)}>
      {(title || action) && (
        <div className={headerVariants({ size })}>
          {title}
          {action && <span className="ms-auto">{action}</span>}
        </div>
      )}
      <pre ref={ref} className={preVariants({ size })} {...props} />
    </div>
  );
}
