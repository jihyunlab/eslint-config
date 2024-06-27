# @jihyunlab/eslint-config

[![Version](https://img.shields.io/npm/v/@jihyunlab/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@jihyunlab/eslint-config?activeTab=versions) [![Downloads](https://img.shields.io/npm/dt/@jihyunlab/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@jihyunlab/eslint-config) [![Last commit](https://img.shields.io/github/last-commit/jihyunlab/eslint-config.svg?style=flat-square)](https://github.com/jihyunlab/eslint-config/graphs/commit-activity) [![License](https://img.shields.io/github/license/jihyunlab/eslint-config.svg?style=flat-square)](https://github.com/jihyunlab/eslint-config/blob/master/LICENSE) [![Linter](https://img.shields.io/badge/linter-eslint-blue?style=flat-square)](https://eslint.org) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)\
[![Build](https://github.com/jihyunlab/eslint-config/actions/workflows/build.yml/badge.svg)](https://github.com/jihyunlab/eslint-config/actions/workflows/build.yml) [![Lint](https://github.com/jihyunlab/eslint-config/actions/workflows/lint.yml/badge.svg)](https://github.com/jihyunlab/eslint-config/actions/workflows/lint.yml)

JihyunLab ESLint config for TypeScript.

## Installation

```bash
npm i --save-dev @jihyunlab/eslint-config eslint @eslint/js @types/eslint__js typescript typescript-eslint
```

## Configuration

### Configure ESLint

Create the <U>eslint.config.mjs</U> file.

```
├─ eslint.config.mjs
└─ ...
```

Edit the <U>eslint.config.mjs</U> file as follows:

```
import tsEslint from 'typescript-eslint';
import { jihyunlabEslintConfig } from '@jihyunlab/eslint-config';

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
    extends: [...jihyunlabEslintConfig],
  }
);
```

### Configure TypeScript for ESLint

Create the <U>tsconfig.eslint.json</U> file.

```
├─ tsconfig.eslint.json
└─ ...
```

Edit the <U>tsconfig.eslint.json</U> file as follows:

```
{
  "extends": "./tsconfig.json",
  "include": ["**/*.ts", "**/*.tsx", "**/*.cts", "**/*.mts"],
  "exclude": ["node_modules", "dist", "build", "coverage"]
}
```

## Credits

Authored and maintained by JihyunLab <<info@jihyunlab.com>>

## License

Open source [licensed as MIT](https://github.com/jihyunlab/eslint-config/blob/master/LICENSE).
