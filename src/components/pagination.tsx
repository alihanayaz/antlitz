import * as React from "react";
import { cn } from "@/lib";

export type PaginationProps = Omit<React.ComponentProps<"nav">, "children"> & {
  children: React.ReactNode;
  label?: string;
  ref?: React.Ref<HTMLElement>;
};

export function Pagination({
  children,
  label = "Pagination",
  ref,
  className,
  ...props
}: PaginationProps) {
  return (
    <nav
      ref={ref}
      aria-label={label}
      className={cn(
        "text-foreground-muted text-sm",
        "[&_li>*]:inline-flex [&_li>*]:min-w-9 [&_li>*]:items-center [&_li>*]:justify-center [&_li>*]:px-2 [&_li>*]:py-1.5",
        "[&_li>a:hover]:bg-muted-subtle [&_li>button:hover]:bg-muted-subtle",
        "[&_[aria-current]]:bg-muted [&_[aria-current]]:text-foreground [&_[aria-current]]:font-medium",
        "[&_[aria-disabled=true]]:pointer-events-none [&_[aria-disabled=true]]:opacity-50",
        className,
      )}
      {...props}
    >
      <ul className="flex flex-wrap items-center gap-1">
        {React.Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    </nav>
  );
}
