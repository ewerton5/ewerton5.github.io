import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    {
        ignores: ["node_modules", "build", "**/*.d.ts", "*.config.*"]
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        files: ["**/*.{ts,tsx,js}"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                project: "./tsconfig.json"
            },
            globals: {
                ...globals.node,
                ...globals.browser,
                __DEV__: "readonly"
            }
        },
        settings: {
            react: { version: "detect" },
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                    project: "./tsconfig.json"
                },
                node: true
            }
        },
        plugins: {
            "react-hooks": reactHooks,
            prettier: prettierPlugin,
            import: importPlugin
        },
        rules: {
            "prettier/prettier": [
                "warn",
                {
                    arrowParens: "always",
                    bracketSameLine: false,
                    bracketSpacing: true,
                    singleQuote: false,
                    trailingComma: "none"
                }
            ],
            "import/order": [
                "warn",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        ["parent", "sibling", "index"]
                    ],
                    pathGroups: [
                        {
                            pattern: "../**",
                            group: "parent",
                            position: "before"
                        },
                        {
                            pattern: "./**",
                            group: "sibling",
                            position: "after"
                        }
                    ],
                    "newlines-between": "always",
                    alphabetize: { order: "asc", caseInsensitive: true }
                }
            ],
            "@typescript-eslint/no-unused-vars": [
                "warn",
                { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
            ],
            "@typescript-eslint/no-unused-expressions": "off",
            "no-shadow": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "react/prop-types": "off",
            "react/jsx-props-no-spreading": "off",
            "react/no-unused-prop-types": "off",
            "no-unused-expressions": "off",
            "import/no-unresolved": "off",
            "no-console": ["warn", { allow: ["warn", "error", "info"] }],
            "react/require-default-props": "off",
            "react/jsx-filename-extension": [
                1,
                { extensions: [".tsx", ".ios.tsx", ".android.tsx", ".js"] }
            ],
            "no-nested-ternary": "off",
            "no-use-before-define": "off",
            "@typescript-eslint/no-use-before-define": ["error"],
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/ban-ts-comment": ["warn"],
            "react/react-in-jsx-scope": "off",
            "import/prefer-default-export": "off",
            "no-underscore-dangle": "off",
            "react/function-component-definition": [
                "warn",
                { namedComponents: "arrow-function" }
            ],
            "object-shorthand": "warn"
        }
    }
];
