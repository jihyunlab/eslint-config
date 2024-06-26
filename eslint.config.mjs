import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  {
    ignores: ['node_modules', 'dist', 'build', 'coverage'],
  },
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
    extends: [
      eslint.configs.recommended,
      ...tsEslint.configs.recommendedTypeChecked,
      {
        name: '@jihyunlab/eslint-config',
        rules: {
          '@typescript-eslint/adjacent-overload-signatures': 'error',
          '@typescript-eslint/array-type': 'off',
          '@typescript-eslint/await-thenable': 'off',
          '@typescript-eslint/ban-ts-comment': 'off',
          '@typescript-eslint/ban-tslint-comment': 'off',
          '@typescript-eslint/ban-types': 'off',
          '@typescript-eslint/class-literal-property-style': 'off',
          '@typescript-eslint/consistent-generic-constructors': [
            'error',
            'constructor',
          ],
          '@typescript-eslint/consistent-indexed-object-style': 'off',
          '@typescript-eslint/consistent-type-assertions': 'off',
          '@typescript-eslint/consistent-type-definitions': [
            'error',
            'interface',
          ],
          '@typescript-eslint/consistent-type-exports': 'off',
          '@typescript-eslint/consistent-type-imports': 'off',
          '@typescript-eslint/explicit-function-return-type': 'off',
          '@typescript-eslint/explicit-member-accessibility': 'off',
          '@typescript-eslint/explicit-module-boundary-types': 'off',
          '@typescript-eslint/member-ordering': 'off',
          '@typescript-eslint/method-signature-style': ['error', 'property'],
          '@typescript-eslint/naming-convention': [
            'error',
            {
              selector: 'variable',
              format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            },
            {
              selector: 'function',
              format: ['camelCase', 'PascalCase'],
            },
            {
              selector: 'typeLike',
              format: ['PascalCase', 'UPPER_CASE'],
            },
          ],
          '@typescript-eslint/no-base-to-string': 'off',
          '@typescript-eslint/no-confusing-non-null-assertion': 'error',
          '@typescript-eslint/no-confusing-void-expression': 'off',
          '@typescript-eslint/no-duplicate-enum-values': 'off',
          '@typescript-eslint/no-dynamic-delete': 'off',
          '@typescript-eslint/no-empty-interface': [
            'error',
            {
              allowSingleExtends: false,
            },
          ],
          '@typescript-eslint/no-explicit-any': 'off',
          '@typescript-eslint/no-extra-non-null-assertion': 'error',
          '@typescript-eslint/no-extraneous-class': 'off',
          '@typescript-eslint/no-floating-promises': 'off',
          '@typescript-eslint/no-for-in-array': 'off',
          '@typescript-eslint/no-import-type-side-effects': 'off',
          '@typescript-eslint/no-inferrable-types': [
            'error',
            {
              ignoreParameters: false,
              ignoreProperties: false,
            },
          ],
          '@typescript-eslint/no-invalid-void-type': [
            'error',
            {
              allowInGenericTypeArguments: true,
              allowAsThisParameter: false,
            },
          ],
          '@typescript-eslint/no-meaningless-void-operator': [
            'error',
            {
              checkNever: false,
            },
          ],
          '@typescript-eslint/no-misused-new': 'error',
          '@typescript-eslint/no-misused-promises': [
            'error',
            {
              checksConditionals: true,
              checksVoidReturn: false,
              checksSpreads: true,
            },
          ],
          '@typescript-eslint/no-namespace': [
            'error',
            {
              allowDeclarations: false,
              allowDefinitionFiles: true,
            },
          ],
          '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
          '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
          '@typescript-eslint/no-non-null-assertion': 'error',
          '@typescript-eslint/no-redundant-type-constituents': 'error',
          '@typescript-eslint/no-require-imports': [
            'error',
            {
              allow: [],
            },
          ],
          '@typescript-eslint/no-this-alias': [
            'error',
            {
              allowDestructuring: true,
              allowedNames: [],
            },
          ],
          '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
          '@typescript-eslint/no-unnecessary-condition': 'off',
          '@typescript-eslint/no-unnecessary-qualifier': 'error',
          '@typescript-eslint/no-unnecessary-type-arguments': 'off',
          '@typescript-eslint/no-unnecessary-type-assertion': 'off',
          '@typescript-eslint/no-unnecessary-type-constraint': 'off',
          '@typescript-eslint/no-unsafe-argument': 'off',
          '@typescript-eslint/no-unsafe-assignment': 'off',
          '@typescript-eslint/no-unsafe-call': 'off',
          '@typescript-eslint/no-unsafe-declaration-merging': 'error',
          '@typescript-eslint/no-unsafe-member-access': 'off',
          '@typescript-eslint/no-unsafe-return': 'off',
          '@typescript-eslint/no-useless-empty-export': 'error',
          '@typescript-eslint/no-var-requires': [
            'error',
            {
              allow: [],
            },
          ],
          '@typescript-eslint/non-nullable-type-assertion-style': 'off',
          '@typescript-eslint/only-throw-error': 'off',
          '@typescript-eslint/parameter-properties': 'off',
          '@typescript-eslint/prefer-as-const': 'error',
          '@typescript-eslint/prefer-enum-initializers': 'error',
          '@typescript-eslint/prefer-for-of': 'off',
          '@typescript-eslint/prefer-function-type': 'error',
          '@typescript-eslint/prefer-includes': 'off',
          '@typescript-eslint/prefer-literal-enum-member': [
            'error',
            {
              allowBitwiseExpressions: false,
            },
          ],
          '@typescript-eslint/prefer-namespace-keyword': 'off',
          '@typescript-eslint/prefer-nullish-coalescing': 'off',
          '@typescript-eslint/prefer-optional-chain': 'off',
          '@typescript-eslint/prefer-readonly': 'off',
          '@typescript-eslint/prefer-readonly-parameter-types': 'off',
          '@typescript-eslint/prefer-reduce-type-parameter': 'off',
          '@typescript-eslint/prefer-regexp-exec': 'off',
          '@typescript-eslint/prefer-return-this-type': 'off',
          '@typescript-eslint/prefer-string-starts-ends-with': 'off',
          '@typescript-eslint/promise-function-async': [
            'error',
            {
              allowAny: true,
              allowedPromiseNames: [],
              checkArrowFunctions: false,
              checkFunctionDeclarations: true,
              checkFunctionExpressions: true,
              checkMethodDeclarations: true,
            },
          ],
          '@typescript-eslint/require-array-sort-compare': 'off',
          '@typescript-eslint/restrict-plus-operands': 'off',
          '@typescript-eslint/restrict-template-expressions': 'off',
          '@typescript-eslint/strict-boolean-expressions': 'off',
          '@typescript-eslint/switch-exhaustiveness-check': [
            'error',
            {
              allowDefaultCaseForExhaustiveSwitch: true,
              requireDefaultForNonUnion: false,
            },
          ],
          '@typescript-eslint/triple-slash-reference': 'off',
          '@typescript-eslint/typedef': 'off',
          '@typescript-eslint/unbound-method': 'off',
          '@typescript-eslint/unified-signatures': 'off',
          '@typescript-eslint/default-param-last': 'off',
          '@typescript-eslint/dot-notation': 'off',
          '@typescript-eslint/init-declarations': 'off',
          '@typescript-eslint/no-array-constructor': 'off',
          '@typescript-eslint/no-dupe-class-members': 'off',
          '@typescript-eslint/no-empty-function': 'off',
          '@typescript-eslint/no-implied-eval': 'off',
          '@typescript-eslint/no-invalid-this': 'off',
          '@typescript-eslint/no-loop-func': 'off',
          '@typescript-eslint/no-loss-of-precision': 'off',
          '@typescript-eslint/no-magic-numbers': 'off',
          '@typescript-eslint/no-redeclare': 'off',
          '@typescript-eslint/no-restricted-imports': 'off',
          '@typescript-eslint/no-shadow': 'off',
          '@typescript-eslint/no-unused-expressions': 'off',
          '@typescript-eslint/no-unused-vars': [
            'warn',
            {
              vars: 'all',
              args: 'after-used',
              ignoreRestSiblings: false,
            },
          ],
          '@typescript-eslint/no-use-before-define': 'off',
          '@typescript-eslint/no-useless-constructor': 'off',
          '@typescript-eslint/require-await': 'off',
          '@typescript-eslint/return-await': 'off',
        },
      },
    ],
  }
);
