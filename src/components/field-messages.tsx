import type * as React from "react";
import { Text } from "./text";

const descriptionIdFor = (id: string) => `${id}-description`;
const errorIdFor = (id: string) => `${id}-error`;

export function fieldDescribedBy(
  id: string,
  description: React.ReactNode,
  error: React.ReactNode,
  existing?: string,
) {
  return (
    [
      existing,
      description ? descriptionIdFor(id) : undefined,
      error ? errorIdFor(id) : undefined,
    ]
      .filter(Boolean)
      .join(" ") || undefined
  );
}

export type FieldMessagesProps = {
  id: string;
  description?: React.ReactNode;
  error?: React.ReactNode;
  className?: string;
};

export function FieldMessages({
  id,
  description,
  error,
  className,
}: FieldMessagesProps) {
  return (
    <>
      {description && (
        <Text
          id={descriptionIdFor(id)}
          size="xs"
          tone="subtle"
          className={className}
        >
          {description}
        </Text>
      )}
      {error && (
        <Text id={errorIdFor(id)} size="xs" tone="danger" className={className}>
          {error}
        </Text>
      )}
    </>
  );
}
