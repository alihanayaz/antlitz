import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";

const separatorVariants = cva("bg-border shrink-0 border-0", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface SeparatorProps
  extends
    Omit<React.HTMLAttributes<HTMLHRElement>, "role">,
    VariantProps<typeof separatorVariants> {
  decorative?: boolean;
  ref?: React.Ref<HTMLHRElement>;
}

export function Separator({
  orientation,
  decorative = false,
  ref,
  className,
  ...props
}: SeparatorProps) {
  return (
    <hr
      ref={ref}
      role={decorative ? "none" : undefined}
      aria-hidden={decorative || undefined}
      aria-orientation={
        !decorative && orientation === "vertical" ? "vertical" : undefined
      }
      className={cn(separatorVariants({ orientation }), className)}
      {...props}
    />
  );
}
