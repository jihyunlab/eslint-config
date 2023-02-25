module.exports = {
  env: {
    node: true,
    browser: true,
  },
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  rules: {
    // ESLint - Typescript rules
    "@typescript-eslint/adjacent-overload-signatures": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-tslint-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/class-literal-property-style": "off",
    "@typescript-eslint/consistent-generic-constructors": [
      "error",
      "constructor",
    ],
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/consistent-type-exports": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "@typescript-eslint/no-base-to-string": "off",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-duplicate-enum-values": "off",
    "@typescript-eslint/no-dynamic-delete": "off",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: false,
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-for-in-array": "off",
    "@typescript-eslint/no-import-type-side-effects": "off",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        ignoreParameters: false,
        ignoreProperties: false,
      },
    ],
    "@typescript-eslint/no-invalid-void-type": [
      "error",
      {
        allowInGenericTypeArguments: true,
        allowAsThisParameter: false,
      },
    ],
    "@typescript-eslint/no-meaningless-void-operator": [
      "error",
      {
        checkNever: false,
      },
    ],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksConditionals: true,
        checksVoidReturn: false,
        checksSpreads: true,
      },
    ],
    "@typescript-eslint/no-namespace": [
      "error",
      {
        allowDeclarations: false,
        allowDefinitionFiles: true,
      },
    ],
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowDestructuring: true,
        allowedNames: [],
      },
    ],
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/no-unnecessary-type-constraint": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-declaration-merging": "error",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "off",
    "@typescript-eslint/parameter-properties": "off",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "off",
    "@typescript-eslint/prefer-literal-enum-member": [
      "error",
      {
        allowBitwiseExpressions: false,
      },
    ],
    "@typescript-eslint/prefer-namespace-keyword": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/prefer-optional-chain": "off",
    "@typescript-eslint/prefer-readonly": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/prefer-reduce-type-parameter": "off",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/prefer-return-this-type": "off",
    "@typescript-eslint/prefer-string-starts-ends-with": "off",
    "@typescript-eslint/prefer-ts-expect-error": "off",
    "@typescript-eslint/promise-function-async": [
      "error",
      {
        allowAny: true,
        allowedPromiseNames: [],
        checkArrowFunctions: false,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],
    "@typescript-eslint/require-array-sort-compare": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/sort-type-constituents": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/unified-signatures": "off",

    // ESLint - Extension rules
    "@typescript-eslint/default-param-last": "off",
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/init-declarations": "off",
    "@typescript-eslint/no-array-constructor": "off",
    "@typescript-eslint/no-dupe-class-members": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-extra-semi": "off",
    "@typescript-eslint/no-implied-eval": "off",
    "@typescript-eslint/no-invalid-this": "off",
    "@typescript-eslint/no-loop-func": "off",
    "@typescript-eslint/no-loss-of-precision": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-redeclare": [
      "error",
      {
        builtinGlobals: false,
      },
    ],
    "@typescript-eslint/no-restricted-imports": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
      },
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-useless-constructor": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/return-await": "off",

    // ESLint - Formatting rules
    "@typescript-eslint/block-spacing": "error",
    "@typescript-eslint/brace-style": [
      "error",
      "1tbs",
      {
        allowSingleLine: true,
      },
    ],
    "@typescript-eslint/comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "@typescript-eslint/comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "@typescript-eslint/func-call-spacing": ["error", "never"],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict",
      },
    ],
    "@typescript-eslint/keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "@typescript-eslint/lines-between-class-members": [
      "error",
      {
        exceptAfterOverload: true,
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: { delimiter: "semi", requireLast: true },
        singleline: { delimiter: "semi", requireLast: false },
        multilineDetection: "brackets",
      },
    ],
    "@typescript-eslint/no-extra-parens": [
      "error",
      "all",
      { ignoreJSX: "all" },
    ],
    "@typescript-eslint/object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    "@typescript-eslint/padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: ["const", "let", "var"],
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      {
        blankLine: "any",
        prev: "*",
        next: "return",
      },
    ],
    "@typescript-eslint/quotes": ["error", "single"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/space-before-blocks": [
      "error",
      {
        functions: "always",
        keywords: "always",
        classes: "always",
      },
    ],
    "@typescript-eslint/space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "@typescript-eslint/space-infix-ops": [
      "error",
      {
        int32Hint: false,
      },
    ],
    "@typescript-eslint/type-annotation-spacing": "error"
  },
};
