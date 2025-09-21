import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  eslintConfigPrettier,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      // turn off base rules that conflict or are superseded
      "sort-imports": "off",
      "import/order": "off",
      "no-unused-vars": "off",
      "no-duplicate-imports": "error",

      // TypeScript unused vars rules - turn off to avoid conflict with unused-imports
      "@typescript-eslint/no-unused-vars": "off",

      // sort imports/exports with sensible groups
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            // Side effect imports (e.g. polyfills, CSS)
            ["^\\u0000"],

            // React and Next first
            ["^react$", "^next", "^next/(.*)"],

            // Packages. Things that start with a letter (or digit or underscore), or @ followed by a letter
            ["^@?\\w"],

            // Internal aliases (e.g. @/ or src/)
            ["^@/", "^src/"],

            // Parent imports. Put `..` last.
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],

            // Other relative imports. Put same-folder and `.` last.
            ["^\\.(?!/?$)", "^\\./?$"],

            // Style imports
            ["^.+\\.(css|scss|sass|less)$"],
          ],
        },
      ],
      "simple-import-sort/exports": "warn",

      // remove unused imports and flag unused vars (allow _ prefixed)
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];

export default eslintConfig;
