import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/cn.js";
import { appendRefParam, isExternalLink } from "../lib/url.js";

const hyperlinkVariants = cva("break-words", {
  variants: {
    variant: {
      default: "link",
      plain: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface HyperlinkProps
  extends
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof hyperlinkVariants> {
  asChild?: boolean;
  as?: React.ElementType;
  href?: string;
  refValue?: string;
  ref?: React.Ref<HTMLAnchorElement>;
}

export function Hyperlink({
  asChild = false,
  as,
  href = "#",
  refValue,
  children,
  variant,
  target,
  rel,
  ref,
  className,
  ...props
}: HyperlinkProps) {
  const isExternal = isExternalLink(href);
  const classes = cn(
    hyperlinkVariants({ variant }),
    isExternal && variant !== "plain" && "after:content-['_↗']",
    className,
  );

  if (isExternal) {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        ref={ref}
        href={refValue ? appendRefParam(href, refValue) : href}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        className={classes}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {children}
            <span className="sr-only"> (opens in new tab)</span>
          </>
        )}
      </Comp>
    );
  }

  const Comp = asChild ? Slot : href.startsWith("/") ? (as ?? "a") : "a";
  return (
    <Comp
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={classes}
      {...props}
    >
      {children}
    </Comp>
  );
}
