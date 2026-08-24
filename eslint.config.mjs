import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  {
    ignores: ["dist/", "docs/.next/", "docs/out/", "docs/generated/"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs["recommended-latest"],
  {
    files: ["**/scripts/**/*.mjs"],
    languageOptions: {
      globals: { console: "readonly", process: "readonly" },
    },
  },
);
