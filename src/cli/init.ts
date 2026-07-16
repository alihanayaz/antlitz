import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import * as p from "@clack/prompts";

export interface InitOptions {
  yes?: boolean;
  cwd: string;
}

type PackageManager = "pnpm" | "yarn" | "bun" | "npm";

interface ConsumerPackageJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

const LOCKFILES: [file: string, manager: PackageManager][] = [
  ["pnpm-lock.yaml", "pnpm"],
  ["bun.lock", "bun"],
  ["bun.lockb", "bun"],
  ["yarn.lock", "yarn"],
  ["package-lock.json", "npm"],
];

const GLOBAL_CSS_CANDIDATES = [
  "app/globals.css",
  "src/app/globals.css",
  "styles/globals.css",
  "src/styles/globals.css",
];

const POSTCSS_CONFIG_CANDIDATES = [
  "postcss.config.mjs",
  "postcss.config.js",
  "postcss.config.ts",
  "postcss.config.cjs",
];

const TAILWIND_IMPORT = '@import "tailwindcss";';
const THEME_IMPORT = '@import "antlitz/theme.css";';

const POSTCSS_CONFIG_CONTENTS = `const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
`;

function cancel(message: string): never {
  p.cancel(message);
  process.exit(1);
}

function patchGlobalCss(
  cssPath: string,
): "created" | "patched" | "already-configured" {
  if (!existsSync(cssPath)) {
    mkdirSync(path.dirname(cssPath), { recursive: true });
    writeFileSync(cssPath, `${TAILWIND_IMPORT}\n${THEME_IMPORT}\n`);
    return "created";
  }

  const contents = readFileSync(cssPath, "utf8");
  if (contents.includes(THEME_IMPORT)) return "already-configured";

  const lines = contents.split("\n");
  const tailwindLineIndex = lines.findIndex(
    (line) => line.trim() === TAILWIND_IMPORT,
  );

  if (tailwindLineIndex === -1) {
    writeFileSync(cssPath, `${TAILWIND_IMPORT}\n${THEME_IMPORT}\n${contents}`);
  } else {
    lines.splice(tailwindLineIndex + 1, 0, THEME_IMPORT);
    writeFileSync(cssPath, lines.join("\n"));
  }

  return "patched";
}

export async function init(options: InitOptions): Promise<void> {
  const cwd = path.resolve(options.cwd);
  p.intro("antlitz init");

  const pkgPath = path.join(cwd, "package.json");
  if (!existsSync(pkgPath)) {
    cancel(
      `No package.json found in ${cwd} — run this inside a Node.js project.`,
    );
  }

  const pkg = JSON.parse(readFileSync(pkgPath, "utf8")) as ConsumerPackageJson;
  const dependency = (name: string) =>
    pkg.dependencies?.[name] ?? pkg.devDependencies?.[name];

  const isNext = dependency("next") !== undefined;
  const tailwindMajor = Number(dependency("tailwindcss")?.match(/\d+/)?.[0]);
  const needsTailwind = !(tailwindMajor >= 4);

  if (!isNext) {
    p.log.warn(
      "No Next.js dependency detected — continuing with a best-effort Tailwind CSS v4 setup.",
    );
  }

  const packageManager =
    LOCKFILES.find(([lockfile]) => existsSync(path.join(cwd, lockfile)))?.[1] ??
    "npm";
  p.log.info(`Package manager: ${packageManager}`);

  const packages = ["antlitz"];
  if (needsTailwind) {
    packages.push("tailwindcss@^4");
    if (isNext) packages.push("@tailwindcss/postcss@^4");
    p.log.warn(
      "Tailwind CSS v4 not detected — installing it alongside antlitz.",
    );
  }

  let cssTarget =
    GLOBAL_CSS_CANDIDATES.find((candidate) =>
      existsSync(path.join(cwd, candidate)),
    ) ?? "app/globals.css";

  if (!options.yes) {
    const stylesheet = await p.text({
      message: "Global stylesheet to configure",
      initialValue: cssTarget,
      validate: (value) =>
        !value || value.trim().length === 0
          ? "A stylesheet path is required."
          : undefined,
    });
    if (p.isCancel(stylesheet)) cancel("Cancelled.");
    cssTarget = stylesheet;

    const proceed = await p.confirm({
      message: `Install ${packages.join(", ")} with ${packageManager} and update ${cssTarget}?`,
    });
    if (p.isCancel(proceed) || !proceed) cancel("Cancelled.");
  }

  const spinner = p.spinner();
  spinner.start(`Installing ${packages.join(", ")}`);

  const addCommand = packageManager === "npm" ? "install" : "add";
  const result = spawnSync(packageManager, [addCommand, ...packages], {
    cwd,
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.status !== 0) {
    spinner.stop("Installation failed.");
    cancel(
      `${packageManager} ${addCommand} exited with code ${result.status ?? "unknown"}`,
    );
  }
  spinner.stop("Dependencies installed.");

  if (
    needsTailwind &&
    isNext &&
    !POSTCSS_CONFIG_CANDIDATES.some((candidate) =>
      existsSync(path.join(cwd, candidate)),
    )
  ) {
    writeFileSync(
      path.join(cwd, "postcss.config.mjs"),
      POSTCSS_CONFIG_CONTENTS,
    );
    p.log.success(
      "Created postcss.config.mjs with the Tailwind CSS v4 plugin.",
    );
  }

  const cssResult = patchGlobalCss(path.join(cwd, cssTarget));
  if (cssResult === "already-configured") {
    p.log.info(`${cssTarget} already imports antlitz/theme.css.`);
  } else if (cssResult === "created") {
    p.log.success(
      `Created ${cssTarget} with Tailwind and antlitz theme imports.`,
    );
  } else {
    p.log.success(`Updated ${cssTarget} with the antlitz theme import.`);
  }

  p.outro('Done. Import atoms with: import { Button } from "antlitz";');
}
