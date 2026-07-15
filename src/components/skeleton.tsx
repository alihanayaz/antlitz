import type * as React from "react";
import { cn } from "../lib/cn.js";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export function Skeleton({ ref, className, ...props }: SkeletonProps) {
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("bg-border w-full animate-pulse", className)}
      {...props}
    />
  );
}
