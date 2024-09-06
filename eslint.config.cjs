const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat();

const { ESLint } = require("eslint");

module.exports = [
  {
    ignores: ["node_modules/", "dist/"],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];


