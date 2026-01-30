// @ts-check
import eslintJs from "@eslint/js";
import gitignore from "eslint-config-flat-gitignore";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintSvelte from "eslint-plugin-svelte";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tsEslint from "typescript-eslint";
import svelteConfig from "./svelte.config.js";

export default defineConfig(
  gitignore(),
  eslintJs.configs.recommended,
  ...tsEslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  ...eslintSvelte.configs.recommended,
  eslintConfigPrettier,
  ...eslintSvelte.configs.prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.js", "**/*.svelte.ts"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"],
        parser: tsEslint.parser,
        svelteConfig,
      },
    },
  },
);
