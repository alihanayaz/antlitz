import { Text } from "antlitz";
import { Table } from "@/components/table";
import generated from "@/generated/props.json";

type Entry = {
  file: string;
  props: {
    name: string;
    type: string;
    required: boolean;
    default: string | null;
  }[];
};

const catalog = generated as Record<string, Entry>;

export function PropsTable({ component }: { component: string }) {
  const entry = catalog[component];

  if (!entry) {
    throw new Error(`No generated props for ${component}. Run \`pnpm props\`.`);
  }

  if (entry.props.length === 0) {
    return (
      <Text size="sm" tone="subtle">
        <code>{component}</code> adds no props of its own — every prop is
        forwarded to the underlying element.
      </Text>
    );
  }

  return (
    <Table headings={["Prop", "Type", "Default"]}>
      {entry.props.map((prop) => (
        <tr key={prop.name}>
          <td>
            {prop.name}
            {prop.required && (
              <span aria-hidden="true" className="text-foreground-danger">
                *
              </span>
            )}
          </td>
          <td className="text-foreground-muted">{prop.type}</td>
          <td className="text-foreground-subtle">{prop.default ?? "—"}</td>
        </tr>
      ))}
    </Table>
  );
}
