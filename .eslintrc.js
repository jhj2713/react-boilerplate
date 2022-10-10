module.exports = {
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ["*.js"],
  plugins: ["react", "react-hooks", "import", "jsx-a11y", "@typescript-eslint", "html"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable parsing JSX
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "no-empty": "warn",
    "no-console": "warn",
    "react/react-in-jsx-scope": "off", // import React from 'react'
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      { selector: "function", format: ["camelCase", "PascalCase"] },
      { selector: "typeLike", format: ["PascalCase"] },
    ],
  },
};
