#!/usr/bin/env node
import { createRequire } from "node:module";
import { Command } from "commander";
import { init } from "./init.js";

const require = createRequire(import.meta.url);
const { version } = require("../../package.json") as { version: string };

const program = new Command();

program
  .name("antlitz")
  .description("Configure a project to consume the antlitz design system")
  .version(version);

program
  .command("init")
  .description(
    "Install antlitz and wire up Tailwind CSS v4 in the current project",
  )
  .option("-y, --yes", "skip confirmation prompts")
  .option("--cwd <path>", "directory to run in", process.cwd())
  .action(init);

program.parseAsync().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
