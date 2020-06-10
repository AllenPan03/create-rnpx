# create-rnpx

Creates a rnpx application/plugin/block/library using the command line.

[![codecov](https://codecov.io/gh/rnpxjs/create-rnpx/branch/master/graph/badge.svg)](https://codecov.io/gh/rnpxjs/create-rnpx)
[![NPM version](https://img.shields.io/npm/v/create-rnpx.svg?style=flat)](https://npmjs.org/package/create-rnpx)
[![CircleCI](https://circleci.com/gh/rnpxjs/create-rnpx/tree/master.svg?style=svg)](https://circleci.com/gh/rnpxjs/create-rnpx/tree/master)
[![NPM downloads](http://img.shields.io/npm/dm/create-rnpx.svg?style=flat)](https://npmjs.org/package/create-rnpx)
[![GitHub Actions status](https://github.com/rnpxjs/create-rnpx/workflows/Node%20CI/badge.svg)](https://github.com/rnpxjs/create-rnpx)

## Usage

```bash
$ yarn create rnpx [appName]
```

## Boilerplates

* `ant-design-pro` - Create project with a layout-only ant-design-pro boilerplate, use together with rnpx block.
* `app ` - Create project with a simple boilerplate, support typescript.

## Usage Example

```bash
$ yarn create rnpx

? Select the boilerplate type (Use arrow keys)
  ant-design-pro  - Create project with a layout-only ant-design-pro boilerplate, use together with rnpx block.
❯ app             - Create project with a simple boilerplate, support typescript.
  koa2-mysql-server          - Create a koa2 server.

? Do you want to use typescript? (y/N)

  create abc/package.json
  create abc/.gitignore
  create abc/.editorconfig
  create abc/.env
  create abc/.eslintrc
  create abc/.prettierignore
  create abc/.prettierrc
  create abc/.rnpxrc.js
  create abc/mock/.gitkeep
  create abc/src/assets/yay.jpg
  create abc/src/global.css
  create abc/src/layouts/index.css
  create abc/src/layouts/index.tsx
  create abc/src/pages/index.css
  create abc/src/pages/index.tsx
  create abc/tsconfig.json
  create abc/typings.d.ts
 📋  Copied to clipboard, just use Ctrl+V
 ✨  File Generate Done
```

## FAQ

### `yarn create rnpx` command failed

这个问题基本上都是因为没有添加 yarn global module 的路径到 PATH 环境变量引起的。

先执行 `yarn global bin` 拿到路径，然后添加到 PATH 环境变量里。

```bash
$ yarn global bin
/usr/local/bin
```

你也可以尝试用 npm，

```bash
$ npm create rnpx
```

或者手动安装 create-rnpx，并执行他，

```bash
$ npm install create-rnpx -g
$ create-rnpx
```

## Questions & Suggestions

Please open an issue [here](https://github.com/rnpxjs/rnpx/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc).

## LICENSE

MIT
