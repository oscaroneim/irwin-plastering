import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import parser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: parser,
      globals: globals.browser,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Disable React import rule for JSX (React 17+)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" }, // Ignore unused args prefixed with "_"
      ],
      "@typescript-eslint/no-explicit-any": "warn", // Warn for "any" usage
      "@typescript-eslint/no-empty-interface": "off", // Allow empty interfaces
      "@typescript-eslint/no-unused-expressions": "warn", // Warn for unused expressions
      "@typescript-eslint/no-this-alias": "warn", // Avoid aliasing `this` unnecessarily
    },
  },
  ...tseslint.configs.recommended, // Use `flatRecommended` for flat config
  pluginReact.configs.flat.recommended,
];
