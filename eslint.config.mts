import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig({
  plugins: {
    '@stylistic': stylistic
  },
  files: ['**/*.{js,ts,tsx,jsx}'],
  extends: [
    js.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.eslintRecommended,
    tseslint.configs.stylistic,
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@stylistic/padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "var", next: "return" }
    ],
    "@stylistic/quote-props": ["error", "as-needed"],
    "@stylistic/quotes": ["error", "backtick"],
    "@stylistic/jsx-quotes": ["error", "prefer-double"],
    "@stylistic/no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
  },
  ignores: [
    "src/data/monsterAttributes/"
  ]
});
