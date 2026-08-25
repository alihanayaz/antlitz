import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";

const sliderVariants = cva(
  [
    "w-full cursor-pointer appearance-none bg-transparent",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "[&::-webkit-slider-runnable-track]:bg-muted [&::-moz-range-track]:bg-muted",
    "[&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:appearance-none",
    "[&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0",
    "aria-invalid:[&::-webkit-slider-thumb]:bg-danger",
    "aria-invalid:[&::-moz-range-thumb]:bg-danger",
  ],
  {
    variants: {
      size: {
        sm: "[&::-webkit-slider-runnable-track]:h-1 [&::-moz-range-track]:h-1 [&::-webkit-slider-thumb]:size-3.5 [&::-moz-range-thumb]:size-3.5 [&::-webkit-slider-thumb]:-mt-[5px]",
        md: "[&::-webkit-slider-runnable-track]:h-1.5 [&::-moz-range-track]:h-1.5 [&::-webkit-slider-thumb]:size-4 [&::-moz-range-thumb]:size-4 [&::-webkit-slider-thumb]:-mt-[5px]",
        lg: "[&::-webkit-slider-runnable-track]:h-2 [&::-moz-range-track]:h-2 [&::-webkit-slider-thumb]:size-5 [&::-moz-range-thumb]:size-5 [&::-webkit-slider-thumb]:-mt-[6px]",
      },
      radius: {
        none: "[&::-webkit-slider-runnable-track,&::-webkit-slider-thumb]:rounded-none [&::-moz-range-track,&::-moz-range-thumb]:rounded-none",
        sm: "[&::-webkit-slider-runnable-track,&::-webkit-slider-thumb]:rounded-sm [&::-moz-range-track,&::-moz-range-thumb]:rounded-sm",
        md: "[&::-webkit-slider-runnable-track,&::-webkit-slider-thumb]:rounded-md [&::-moz-range-track,&::-moz-range-thumb]:rounded-md",
        lg: "[&::-webkit-slider-runnable-track,&::-webkit-slider-thumb]:rounded-lg [&::-moz-range-track,&::-moz-range-thumb]:rounded-lg",
        full: "[&::-webkit-slider-runnable-track,&::-webkit-slider-thumb]:rounded-full [&::-moz-range-track,&::-moz-range-thumb]:rounded-full",
      },
    },
    defaultVariants: {
      size: "md",
      radius: "none",
    },
  },
);

export type SliderProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> &
  VariantProps<typeof sliderVariants> & {
    ref?: React.Ref<HTMLInputElement>;
  };

export function Slider({
  size,
  radius,
  ref,
  className,
  ...props
}: SliderProps) {
  return (
    <input
      ref={ref}
      type="range"
      className={cn(sliderVariants({ size, radius }), className)}
      {...props}
    />
  );
}
