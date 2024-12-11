import antfu from "@antfu/eslint-config";
import nextPlugin from "@next/eslint-plugin-next";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tailwind from "eslint-plugin-tailwindcss";

export default antfu({
  react: true,
  typescript: true,
  lessOpinionated: true,
  isInEditor: false,
  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
  },
  formatters: {
    css: true,
  },

  ignores: ["migrations/**/*", "next-env.d.ts"],
}, ...tailwind.configs["flat/recommended"], jsxA11y.flatConfigs.recommended, {
  plugins: {
    "@next/next": nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs["core-web-vitals"].rules,
    "no-console": "warn",
    "antfu/no-top-level-await": "off",
    "node/prefer-global/process": "off",
    "node/no-process-env": "error",
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["README.md"],
    }],
    "perfectionist/sort-imports": ["error", {
      internalPattern: ["^@/"],
    }],
    // to see
    "style/brace-style": ["error", "1tbs"], // Use the default brace style
    "ts/consistent-type-definitions": ["error", "type"], // Use `type` instead of `interface`
    "react/prefer-destructuring-assignment": "off",
  },
});
