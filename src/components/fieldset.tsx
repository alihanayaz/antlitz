"use client";

import * as React from "react";
import { cn } from "@/lib";
import { FieldMessages, fieldDescribedBy } from "./field-messages";
import { Label } from "./label";

export type FieldsetProps =
  React.FieldsetHTMLAttributes<HTMLFieldSetElement> & {
    legend?: React.ReactNode;
    description?: React.ReactNode;
    error?: React.ReactNode;
    orientation?: "vertical" | "horizontal";
    required?: boolean;
    ref?: React.Ref<HTMLFieldSetElement>;
  };

export function Fieldset({
  children,
  legend,
  description,
  error,
  orientation = "vertical",
  required = false,
  id,
  ref,
  className,
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
  ...props
}: FieldsetProps) {
  const generatedId = React.useId();
  const fieldsetId = id ?? generatedId;

  const describedBy = fieldDescribedBy(
    fieldsetId,
    description,
    error,
    ariaDescribedBy,
  );

  return (
    <fieldset
      ref={ref}
      id={fieldsetId}
      className={cn("group/fieldset min-w-0", className)}
      aria-describedby={describedBy}
      aria-invalid={error ? true : ariaInvalid}
      {...props}
    >
      {legend && (
        <Label asChild required={required}>
          <legend className="mb-2 group-disabled/fieldset:opacity-50">
            {legend}
          </legend>
        </Label>
      )}

      <div
        className={
          orientation === "horizontal"
            ? "flex flex-wrap gap-x-6 gap-y-2"
            : "flex flex-col gap-2"
        }
      >
        {children}
      </div>

      <FieldMessages
        id={fieldsetId}
        description={description}
        error={error}
        className="mt-2"
      />
    </fieldset>
  );
}
