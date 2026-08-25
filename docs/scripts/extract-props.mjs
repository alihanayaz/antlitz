import ts from "typescript";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const docsDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const pkgDir = join(docsDir, "..");
const componentsDir = join(pkgDir, "src", "components");
const probePath = join(componentsDir, "__props_probe.ts");

const parsed = ts.parseJsonConfigFileContent(
  ts.readConfigFile(join(pkgDir, "tsconfig.build.json"), ts.sys.readFile)
    .config,
  ts.sys,
  pkgDir,
);

const sharedVariants = readFileSync(join(componentsDir, "variants.ts"), "utf8");

const publicModules = new Set(
  [
    ...readFileSync(join(componentsDir, "index.ts"), "utf8").matchAll(
      /export \* from "\.\/([\w-]+)"/g,
    ),
  ].map((match) => match[1]),
);

const exported = parsed.fileNames
  .filter((file) => file.startsWith(componentsDir))
  .flatMap((file) => {
    const moduleName = file
      .slice(componentsDir.length + 1)
      .replace(/\.tsx?$/, "");
    if (!publicModules.has(moduleName)) return [];

    const source = ts.createSourceFile(
      file,
      readFileSync(file, "utf8"),
      ts.ScriptTarget.Latest,
      true,
    );

    return source.statements
      .filter(
        (statement) =>
          (ts.isTypeAliasDeclaration(statement) ||
            ts.isInterfaceDeclaration(statement)) &&
          statement.name.text.endsWith("Props") &&
          statement.modifiers?.some(
            (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword,
          ),
      )
      .map((statement) => ({
        name: statement.name.text,
        moduleName,
        file,
        generic: Boolean(statement.typeParameters),
        typeParams: Object.fromEntries(
          (statement.typeParameters ?? [])
            .filter((param) => param.constraint)
            .map((param) => [param.name.text, param.constraint.getText()]),
        ),
      }));
  });

const host = ts.createCompilerHost(parsed.options);
const probeText = exported
  .map(
    (entry) =>
      `import type { ${entry.name} } from "./${entry.moduleName}";\n` +
      `export type Probe_${entry.name} = ${entry.name};`,
  )
  .join("\n");

const readFile = host.readFile.bind(host);
const getSourceFile = host.getSourceFile.bind(host);
host.readFile = (name) => (name === probePath ? probeText : readFile(name));
host.fileExists = (name) => name === probePath || ts.sys.fileExists(name);
host.getSourceFile = (name, ...rest) =>
  name === probePath
    ? ts.createSourceFile(name, probeText, rest[0], true)
    : getSourceFile(name, ...rest);

const program = ts.createProgram(
  [...parsed.fileNames, probePath],
  parsed.options,
  host,
);
const checker = program.getTypeChecker();
const probeSymbol = checker.getSymbolAtLocation(
  program.getSourceFile(probePath),
);

const out = {};

for (const probe of checker.getExportsOfModule(probeSymbol)) {
  const entry = exported.find(
    (candidate) => `Probe_${candidate.name}` === probe.getName(),
  );
  if (!entry) continue;

  const src = readFileSync(entry.file, "utf8");
  const props = propsOf(checker.getDeclaredTypeOfSymbol(probe), entry, src);

  if (entry.generic && props.length === 0) {
    console.log(`props: ${entry.name} did not resolve — skipped`);
    continue;
  }

  out[entry.name.replace(/Props$/, "")] = {
    file: relative(pkgDir, entry.file),
    props,
  };
}

mkdirSync(join(docsDir, "generated"), { recursive: true });
writeFileSync(
  join(docsDir, "generated", "props.json"),
  JSON.stringify(out, null, 2) + "\n",
);
console.log(
  `props: ${Object.keys(out).length} components -> docs/generated/props.json`,
);

function propsOf(type, entry, src) {
  const defaults = readDefaults(src);

  return checker
    .getPropertiesOfType(type)
    .flatMap((prop) => {
      const decl = prop.declarations?.[0];
      if (!decl) return [];
      if (!decl.getSourceFile().fileName.startsWith(componentsDir)) return [];
      if (prop.getName() === "ref") return [];

      const declared = decl.type?.getText?.();
      const resolved =
        entry.typeParams[declared] ??
        typeText(checker.getTypeOfSymbolAtLocation(prop, decl));

      return {
        name: prop.getName(),
        type: Array.isArray(resolved)
          ? order(resolved, src, prop.getName()).join(" | ")
          : resolved,
        required: !(prop.flags & ts.SymbolFlags.Optional),
        default: defaults[prop.getName()] ?? null,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function typeText(type) {
  const parts = (type.isUnion() ? type.types : [type]).filter(
    (part) => !(part.flags & (ts.TypeFlags.Undefined | ts.TypeFlags.Null)),
  );

  if (parts.length > 1 && parts.every((part) => part.isLiteral())) {
    return parts.map((part) => checker.typeToString(part));
  }

  return checker
    .typeToString(type)
    .replace(/ \| undefined$/, "")
    .replace(/ \| null$/, "");
}

function order(values, src, name) {
  const block =
    blockAfter(src, `${name}: {`) ?? blockAfter(sharedVariants, `${name} = {`);
  if (block === null) return values;

  const declared = [...block.matchAll(/"?([\w-]+)"?:\s*["[]/g)].map(
    (match) => `"${match[1]}"`,
  );
  return [
    ...declared.filter((value) => values.includes(value)),
    ...values.filter((value) => !declared.includes(value)),
  ];
}

function readDefaults(src) {
  const defaults = {};
  for (
    let at = src.indexOf("defaultVariants");
    at !== -1;
    at = src.indexOf("defaultVariants", at + 1)
  ) {
    const block = src.slice(at, src.indexOf("}", at));
    for (const match of block.matchAll(/(\w+):\s*"([^"]+)"/g)) {
      defaults[match[1]] ??= match[2];
    }
  }
  return defaults;
}

function blockAfter(src, opening) {
  const at = src.indexOf(opening);
  return at === -1 ? null : src.slice(at, src.indexOf("}", at));
}
