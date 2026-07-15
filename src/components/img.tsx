"use client";

import * as React from "react";
import { cn } from "../lib/cn.js";

export interface ImgProps extends Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src" | "alt"
> {
  as?: React.ElementType;
  src: string;
  alt: string;
  fallback?: string;
  ref?: React.Ref<HTMLImageElement>;
}

export function Img({
  as,
  src,
  alt,
  fallback,
  loading = "lazy",
  decoding = "async",
  ref,
  className,
  onError,
  onLoad,
  ...props
}: ImgProps) {
  const [hasError, setHasError] = React.useState(false);
  const [prevSrc, setPrevSrc] = React.useState(src);
  const [shouldReveal, setShouldReveal] = React.useState(false);
  const cachedAtMount = React.useRef(false);

  if (src !== prevSrc) {
    setPrevSrc(src);
    setHasError(false);
    setShouldReveal(false);
  }

  const resolvedSrc = (hasError || !src?.trim()) && fallback ? fallback : src;
  const Comp: React.ElementType = as ?? "img";

  const assignRef = (node: HTMLImageElement | null) => {
    cachedAtMount.current = Boolean(node?.complete);
    if (typeof ref === "function") ref(node);
    else if (ref)
      (ref as React.RefObject<HTMLImageElement | null>).current = node;
  };

  return (
    <Comp
      ref={assignRef}
      src={resolvedSrc}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={cn(
        "bg-surface-hover",
        shouldReveal && "motion-safe:animate-reveal",
        className,
      )}
      onError={(event: React.SyntheticEvent<HTMLImageElement>) => {
        setHasError(true);
        onError?.(event);
      }}
      onLoad={(event: React.SyntheticEvent<HTMLImageElement>) => {
        if (!cachedAtMount.current) setShouldReveal(true);
        onLoad?.(event);
      }}
      {...props}
    />
  );
}
