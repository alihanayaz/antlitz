"use client";

import { useState } from "react";
import { Field, Label, Switch, Text } from "antlitz";

export function Basic() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="airplane" defaultChecked />
      <Label htmlFor="airplane">Aeroplane mode</Label>
    </div>
  );
}

export function Sizes() {
  return (
    <>
      <Switch size="sm" defaultChecked aria-label="Small" readOnly />
      <Switch size="md" defaultChecked aria-label="Medium" readOnly />
      <Switch size="lg" defaultChecked aria-label="Large" readOnly />
    </>
  );
}

export function States() {
  return (
    <>
      <Switch aria-label="Off" />
      <Switch defaultChecked aria-label="On" readOnly />
      <Switch disabled aria-label="Disabled" />
      <Switch disabled defaultChecked aria-label="Disabled on" readOnly />
      <Switch aria-invalid aria-label="Invalid" />
      <Switch aria-invalid defaultChecked aria-label="Invalid on" readOnly />
    </>
  );
}

export function Controlled() {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <Field orientation="horizontal" label="Email notifications">
        <Switch
          checked={enabled}
          onChange={(event) => setEnabled(event.target.checked)}
        />
      </Field>
      <Text size="sm" tone="subtle">
        Notifications are {enabled ? "on" : "off"}.
      </Text>
    </>
  );
}
