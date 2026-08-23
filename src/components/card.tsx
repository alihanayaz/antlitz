import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib";
import { radius, tone } from "./variants";

const cardVariants = cva(
  ["group relative flex flex-col overflow-hidden", "transition-colors"],
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground",
        soft: "bg-muted",
        outline: "border-border border",
        plain: "bg-transparent",
      },
      size: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
      radius,
      tone,
      interactive: {
        true: "cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      radius: "none",
      tone: "base",
      interactive: false,
    },
    compoundVariants: [
      { variant: "solid", className: "text-primary-foreground" },
      {
        variant: "solid",
        interactive: true,
        className: "hover:bg-primary-hover",
      },
      { variant: "soft", interactive: true, className: "hover:bg-muted-hover" },
      {
        variant: "outline",
        interactive: true,
        className: "hover:bg-muted-subtle",
      },
      {
        variant: "plain",
        interactive: true,
        className: "hover:bg-muted-subtle",
      },
    ],
  },
);

type CardTone = VariantProps<typeof cardVariants>["tone"];

type CardToneProps =
  | { variant?: "soft" | "outline" | "plain"; tone?: CardTone }
  | { variant: "solid"; tone?: never };

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
  Omit<VariantProps<typeof cardVariants>, "variant" | "tone"> &
  CardToneProps & {
    asChild?: boolean;
    ref?: React.Ref<HTMLDivElement>;
  };

export function Card({
  asChild = false,
  variant,
  size,
  radius,
  tone,
  interactive,
  ref,
  className,
  ...props
}: CardProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      className={cn(
        cardVariants({ variant, size, radius, tone, interactive }),
        className,
      )}
      {...props}
    />
  );
}
