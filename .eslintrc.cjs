module.exports = {
  root: true,
  env: { browser: true, node: true, es2022: true, "cypress/globals": true },
  extends: [
    "eslint:recommended",
    "plugin:cypress/recommended",
    "plugin:no-comments/recommended"
  ],
  plugins: ["cypress", "import", "n", "promise", "no-comments"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  rules: {
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-undef": "error",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "quotes": ["error", "single", { avoidEscape: true }],
    "semi": ["error", "always"],

    // Forçar remoção de comentários (com autofix)
    "no-comments/disallowComments": ["error", { "allow": [] }]
  }
};
