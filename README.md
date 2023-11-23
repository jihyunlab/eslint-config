# @jihyunlab/eslint-config

[![Version](https://img.shields.io/npm/v/@jihyunlab/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@jihyunlab/eslint-config?activeTab=versions) [![Downloads](https://img.shields.io/npm/dt/@jihyunlab/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@jihyunlab/eslint-config) [![Last commit](https://img.shields.io/github/last-commit/jihyunlab/eslint-config.svg?style=flat-square)](https://github.com/jihyunlab/eslint-config/graphs/commit-activity) [![License](https://img.shields.io/github/license/jihyunlab/eslint-config.svg?style=flat-square)](https://github.com/jihyunlab/eslint-config/blob/master/LICENSE)

JihyunLab ESLint config for TypeScript.

## Setup

### 1) Setup regular JihyunLab ESLint config

```bash
npm i --save-dev @jihyunlab/eslint-config
```

or

```bash
yarn add --dev @jihyunlab/eslint-config eslint@^8.34.0 @typescript-eslint/eslint-plugin@^5.52.0 @typescript-eslint/parser@^5.52.0 eslint-config-prettier@^8.6.0
```

### 2) Configure ESLint

.eslintrc.json file structure

    .
    ├── .eslintrc.json
    └── ...

Within your .eslintrc.json file:
```diff

"extends": [
+ "@jihyunlab/eslint-config"
]

```

```diff
"parserOptions": [
+ "project": "./tsconfig.json"
]
```

Example .eslintrc.json file:

```diff
{
  "extends": [
    "@jihyunlab/eslint-config"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## Additional settings

Additional settings file structure

    .
    ├── .vscode                   # Visual Studio Code
    │   └── extensions.json
    ├── .eslintignore             # Ignore file(ESLint)
    └── ...

Additional configuration files can be found on the git page.

https://github.com/jihyunlab/eslint-config

### 1) Ignore file

Example .eslintignore file:

```diff
/node_modules
/build
/dist
```

### 2) Visual Studio Code

Within your .vscode/extensions.json file:

```diff
{
  "recommendations": [
+   "dbaeumer.vscode-eslint"
  ]
}
```

## Troubleshooting

### 1) When a peer dependencies package is not installed

```bash
npm i --save-dev eslint@^8.34.0 @typescript-eslint/eslint-plugin@^5.52.0 @typescript-eslint/parser@^5.52.0 eslint-config-prettier@^8.6.0
```

### 2) Conflict between ESLint and Prettier configs

Delete Prettier related configs in ESLint.

Within your .eslintrc.json file:

```diff
"extends": [
  "@jihyunlab/eslint-config",
+ "prettier"
]
```

### 3) I get this error when running ESLint: "The file must be included in at least one of the projects provided"

Create a tsconfig.eslint.json file

    .
    ├── tsconfig.eslint.json
    └── ...

Example tsconfig.eslint.json file:

```diff
{
  "extends": "./tsconfig.json",
  "include": ["src/**/*.ts", "src/**/*.js", "test/**/*.ts"]
}
```

Change .eslintrc.json file:

```diff
"parserOptions": [
- "project": "./tsconfig.json"
+ "project": "./tsconfig.eslint.json"
]
```

Check out the link below for other detailed TypeScript ESLint errors.

https://typescript-eslint.io/linting/troubleshooting/

## Credits

Authored and maintained by JihyunLab <<info@jihyunlab.com>>

## License

Open source [licensed as MIT](https://github.com/jihyunlab/eslint-config/blob/master/LICENSE).
