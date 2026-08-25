import * as React from "react";
import { cn } from "@/lib";
import { Icon } from "./icon";

export type BreadcrumbProps = Omit<React.ComponentProps<"nav">, "children"> & {
  children: React.ReactNode;
  separator?: React.ReactNode;
  label?: string;
  ref?: React.Ref<HTMLElement>;
};

export function Breadcrumb({
  children,
  separator,
  label = "Breadcrumb",
  ref,
  className,
  ...props
}: BreadcrumbProps) {
  const items = React.Children.toArray(children);

  return (
    <nav
      ref={ref}
      aria-label={label}
      className={cn(
        "text-foreground-muted text-sm",
        "[&_[aria-current]]:text-foreground [&_[aria-current]]:font-medium",
        className,
      )}
      {...props}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {last ? markCurrent(item) : item}
              {!last && (
                <span aria-hidden="true" className="text-foreground-subtle">
                  {separator ?? (
                    <Icon size={14}>
                      <path d="m9 18 6-6-6-6" />
                    </Icon>
                  )}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function markCurrent(item: React.ReactNode) {
  return React.isValidElement(item) ? (
    React.cloneElement(item, { "aria-current": "page" } as never)
  ) : (
    <span aria-current="page">{item}</span>
  );
}
