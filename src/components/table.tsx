import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";
import { radius } from "./variants";

const tableVariants = cva(
  [
    "w-full overflow-x-auto text-sm",
    "[&_caption]:text-foreground-subtle [&_caption]:text-start",
    "[&_thead]:bg-muted-subtle",
    "[&_th]:text-start [&_th]:font-medium",
    "[&_td]:border-border [&_td]:border-b [&_th]:border-border [&_th]:border-b",
    "[&_tbody_tr:last-child_td]:border-b-0 [&_tbody_tr:last-child_th]:border-b-0",
  ],
  {
    variants: {
      variant: {
        outline: "border-border border",
        plain: "",
      },
      size: {
        sm: "[&_caption,&_td,&_th]:px-2 [&_td,&_th]:py-1.5 [&_caption]:py-2",
        md: "[&_caption,&_td,&_th]:px-3 [&_td,&_th]:py-2 [&_caption]:py-2",
        lg: "[&_caption,&_td,&_th]:px-4 [&_td,&_th]:py-3 [&_caption]:py-3",
      },
      radius,
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      radius: "none",
    },
  },
);

export type TableProps = React.ComponentProps<"table"> &
  VariantProps<typeof tableVariants> & {
    ref?: React.Ref<HTMLTableElement>;
  };

export function Table({
  variant,
  size,
  radius,
  ref,
  className,
  ...props
}: TableProps) {
  return (
    <div className={cn(tableVariants({ variant, size, radius }), className)}>
      <table ref={ref} className="w-full border-collapse" {...props} />
    </div>
  );
}
