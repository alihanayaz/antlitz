import { readFile } from "node:fs/promises";
import path from "node:path";
import { cn } from "antlitz";

const examplesDir = path.join(process.cwd(), "examples");

const layouts = {
  row: "flex flex-wrap items-center gap-4",
  col: "flex w-full max-w-sm flex-col gap-4",
  grid: "grid w-full max-w-2xl items-start gap-3 md:grid-cols-3",
};

export async function Preview({
  file,
  name,
  layout = "row",
  isolate = true,
}: {
  file: string;
  name: string;
  layout?: keyof typeof layouts;
  isolate?: boolean;
}) {
  const demos = await import(`../examples/${file}`);
  const Demo = demos[name] as React.ComponentType;
  const source = await readFile(path.join(examplesDir, `${file}.tsx`), "utf8");
  const code = extract(source, name, file);

  return (
    <div className={cn("border-border my-6 border", isolate && "not-typeset")}>
      <div className={cn("p-8", layouts[layout])}>
        <Demo />
      </div>
      <pre className="border-border bg-muted-subtle overflow-x-auto border-t p-4 font-mono text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function extract(source: string, name: string, file: string) {
  const start = source.indexOf(`export function ${name}(`);
  if (start === -1) {
    throw new Error(`examples/${file}.tsx exports no demo named "${name}".`);
  }
  return source.slice(start, source.indexOf("\n}", start) + 2);
}
