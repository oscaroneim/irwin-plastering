const js = require("@eslint/js");
const react = require("eslint-plugin-react");
const next = require("eslint-plugin-next");
const typescriptParser = require("@typescript-eslint/parser");
const typescript = require("@typescript-eslint/eslint-plugin");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
    },
    plugins: {
      react,
      "@typescript-eslint": typescript,
      next,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-console": "warn",
      "react/react-in-jsx-scope": "off",
      "next/no-img-element": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
