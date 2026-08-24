import type { ReactNode } from "react";

export function Table({
  headings,
  children,
}: {
  headings: string[];
  children: ReactNode;
}) {
  return (
    <div className="border-border my-6 overflow-x-auto border">
      <table className="[&_td]:align-top [&_td]:font-mono [&_tr:last-child_td]:border-0">
        <thead>
          <tr className="bg-muted-subtle">
            {headings.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
