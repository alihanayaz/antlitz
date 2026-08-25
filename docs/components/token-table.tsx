import { readFile } from "node:fs/promises";
import path from "node:path";
import { Table } from "antlitz";

const themeFile = path.join(process.cwd(), "..", "src", "styles", "theme.css");

export async function TokenTable() {
  const css = await readFile(themeFile, "utf8");
  const light = parse(css, ":root {");
  const dark = { ...light, ...parse(css, ".dark {") };

  return (
    <Table className="my-6 [&_td]:font-mono">
      <thead>
        <tr>
          <th>Token</th>
          <th>Light</th>
          <th>Dark</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(light).map((name) => (
          <tr key={name}>
            <td>{`--${name}`}</td>
            <Swatch value={light[name]} />
            <Swatch value={dark[name]} />
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

function Swatch({ value }: { value: string }) {
  return (
    <td>
      <span className="flex items-center gap-2">
        <span
          className="border-border size-4 shrink-0 border"
          style={{ background: value }}
        />
        <span className="text-foreground-subtle whitespace-nowrap">
          {value}
        </span>
      </span>
    </td>
  );
}

function parse(css: string, selector: string) {
  const start = css.indexOf(selector);
  const block = css.slice(start, css.indexOf("}", start));
  return Object.fromEntries(
    [...block.matchAll(/--([a-z-]+):\s*(oklch\([^)]*\));/g)].map((match) => [
      match[1],
      match[2],
    ]),
  );
}
