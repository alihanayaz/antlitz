"use client";

import * as React from "react";
import { cn } from "@/lib";
import { Label } from "./label";
import { Text } from "./text";

type ControlProps = {
  id?: string;
  required?: boolean;
  "aria-describedby"?: string;
  "aria-invalid"?: React.AriaAttributes["aria-invalid"];
  "aria-required"?: React.AriaAttributes["aria-required"];
};

type FieldOrientationProps =
  | { orientation?: "vertical"; label?: React.ReactNode }
  | { orientation: "horizontal"; label: React.ReactNode };

export type FieldProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> &
  FieldOrientationProps & {
    children: React.ReactElement<ControlProps>;
    description?: React.ReactNode;
    error?: React.ReactNode;
    controlId?: string;
    ref?: React.Ref<HTMLDivElement>;
  };

export function Field({
  children,
  label,
  description,
  error,
  orientation = "vertical",
  controlId,
  ref,
  className,
  ...props
}: FieldProps) {
  const generatedId = React.useId();
  const control = React.Children.only(children);

  const id = controlId ?? control.props.id ?? generatedId;
  const descriptionId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  const describedBy =
    [control.props["aria-describedby"], descriptionId, errorId]
      .filter(Boolean)
      .join(" ") || undefined;

  const ariaRequired = control.props["aria-required"];
  const isRequired =
    control.props.required === true ||
    ariaRequired === true ||
    ariaRequired === "true";

  const labelElement = label ? (
    <Label htmlFor={id} required={isRequired}>
      {label}
    </Label>
  ) : null;

  const controlElement = React.cloneElement(control, {
    id,
    "aria-describedby": describedBy,
    "aria-invalid": error ? true : control.props["aria-invalid"],
  });

  const isHorizontal = orientation === "horizontal";
  const asideColumn = isHorizontal ? "col-start-2" : undefined;

  return (
    <div
      ref={ref}
      className={cn(
        isHorizontal
          ? "grid grid-cols-[auto_1fr] items-center gap-2"
          : "flex flex-col gap-2",
        className,
      )}
      {...props}
    >
      {isHorizontal ? (
        <>
          {controlElement}
          {labelElement}
        </>
      ) : (
        <>
          {labelElement}
          {controlElement}
        </>
      )}
      {description && (
        <Text
          id={descriptionId}
          size="xs"
          tone="subtle"
          className={asideColumn}
        >
          {description}
        </Text>
      )}
      {error && (
        <Text id={errorId} size="xs" tone="danger" className={asideColumn}>
          {error}
        </Text>
      )}
    </div>
  );
}
